<?php

require __DIR__ . '/vendor/autoload.php';

$app = require_once __DIR__ . '/bootstrap/app.php';
$app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();

use Illuminate\Support\Facades\Mail;
use App\Mail\ContactFormSubmission;
use Illuminate\Support\Facades\Log;

echo "Testing email configuration with verbose output...\n\n";

try {
    $formData = [
        'firstName' => 'Test',
        'lastName' => 'User',
        'email' => 'test@example.com',
        'subject' => 'Test Email with Verbose Output',
        'message' => 'This is a test email sent with verbose output to troubleshoot email delivery issues.',
        'phone' => '123-456-7890'
    ];

    echo "Mail configuration:\n";
    echo "Driver: " . config('mail.default') . "\n";
    echo "Host: " . config('mail.mailers.smtp.host') . "\n";
    echo "Port: " . config('mail.mailers.smtp.port') . "\n";
    echo "Encryption: " . config('mail.mailers.smtp.encryption') . "\n";
    echo "Username: " . config('mail.mailers.smtp.username') . "\n";
    echo "From Address: " . config('mail.from.address') . "\n";
    echo "From Name: " . config('mail.from.name') . "\n";
    echo "Admin Email: " . env('MAIL_ADMIN_ADDRESS', 'viprananda@rkmm.org') . "\n\n";

    // Set debug mode for SMTP
    config(['mail.mailers.smtp.debug' => true]);

    echo "Sending email to: " . env('MAIL_ADMIN_ADDRESS', 'viprananda@rkmm.org') . "\n";
    
    // Create a new instance of the mail class
    $email = new ContactFormSubmission($formData);
    
    // Get the Swift Message instance
    $message = $email->build();
    
    echo "Email content type: " . $message->getContentType() . "\n";
    echo "Email subject: " . $message->getSubject() . "\n";
    echo "Email from: " . print_r($message->getFrom(), true) . "\n";
    echo "Email to: " . print_r($message->getTo(), true) . "\n\n";
    
    // Send the email
    Mail::to(env('MAIL_ADMIN_ADDRESS', 'viprananda@rkmm.org'))
        ->send($email);
    
    echo "Email sent successfully!\n";
} catch (\Exception $e) {
    echo "Error sending email: " . $e->getMessage() . "\n";
    echo "Error class: " . get_class($e) . "\n";
    echo "Stack trace: " . $e->getTraceAsString() . "\n";
}
