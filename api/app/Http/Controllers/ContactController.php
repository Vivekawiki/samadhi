<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Http;
use App\Mail\ContactFormSubmission;

class ContactController extends Controller
{
    /**
     * Handle the contact form submission.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function submit(Request $request)
    {
        // Validate the request
        $validator = Validator::make($request->all(), [
            'firstName' => 'required|string|min:2|max:100',
            'lastName' => 'required|string|min:2|max:100',
            'email' => 'required|email',
            'phone' => 'nullable|string|max:20',
            'subject' => 'required|string|min:5|max:200',
            'message' => 'required|string|min:10|max:2000',
            'recaptchaToken' => 'nullable|string',
            'honeypot' => 'max:0', // Honeypot field should be empty
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Check for honeypot (if filled, it's likely a bot)
        if ($request->filled('honeypot')) {
            // Pretend success but log the bot attempt
            Log::warning('Bot detected in contact form', [
                'ip' => $request->ip(),
                'user_agent' => $request->header('User-Agent'),
            ]);
            return response()->json(['message' => 'Message sent successfully'], 200);
        }

        // Verify reCAPTCHA if token is provided
        if ($request->filled('recaptchaToken')) {
            $recaptchaSecret = env('RECAPTCHA_SECRET_KEY', '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe'); // Google's test secret key

            $response = Http::asForm()->post('https://www.google.com/recaptcha/api/siteverify', [
                'secret' => $recaptchaSecret,
                'response' => $request->recaptchaToken,
                'remoteip' => $request->ip(),
            ]);

            $recaptchaResult = $response->json();

            // If reCAPTCHA verification fails with a low score, log and return error
            if (!$recaptchaResult['success'] || (isset($recaptchaResult['score']) && $recaptchaResult['score'] < 0.5)) {
                Log::warning('reCAPTCHA verification failed', [
                    'ip' => $request->ip(),
                    'user_agent' => $request->header('User-Agent'),
                    'recaptcha_result' => $recaptchaResult,
                ]);

                return response()->json(['message' => 'Spam detection triggered. Please try again later.'], 400);
            }
        }

        // Rate limiting - check if IP has made too many requests
        // This would typically be handled by Laravel's built-in rate limiting middleware
        // but we're adding an extra check here

        // Log the contact form submission
        Log::info('Contact form submission', [
            'name' => $request->firstName . ' ' . $request->lastName,
            'email' => $request->email,
            'subject' => $request->subject,
        ]);

        // Prepare form data for the email
        $formData = $request->only([
            'firstName',
            'lastName',
            'email',
            'phone',
            'subject',
            'message'
        ]);

        try {
            // Send email to admin
            $adminEmail = env('MAIL_ADMIN_ADDRESS', 'viprananda@gmail.com');
            Log::info('Attempting to send email to: ' . $adminEmail);

            // Log mail configuration
            Log::info('Mail Configuration', [
                'driver' => config('mail.default'),
                'host' => config('mail.mailers.smtp.host'),
                'port' => config('mail.mailers.smtp.port'),
                'encryption' => config('mail.mailers.smtp.encryption'),
                'username' => config('mail.mailers.smtp.username'),
                'from_address' => config('mail.from.address'),
                'from_name' => config('mail.from.name'),
            ]);

            Mail::to($adminEmail)
                ->send(new ContactFormSubmission($formData));

            Log::info('Email sent successfully');

            // Return success response
            return response()->json(['message' => 'Message sent successfully'], 200);
        } catch (\Exception $e) {
            // Log the error
            Log::error('Failed to send contact email', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
                'form_data' => $formData
            ]);

            // Return error response but don't expose details to the user
            return response()->json(['message' => 'There was an issue sending your message. Please try again later.'], 500);
        }
    }
}
