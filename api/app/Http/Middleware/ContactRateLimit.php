<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class ContactRateLimit
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Create a rate limiter key based on the IP address
        $key = 'contact_form:' . $request->ip();
        
        // Allow 3 submissions per hour
        if (RateLimiter::tooManyAttempts($key, 3)) {
            $seconds = RateLimiter::availableIn($key);
            
            Log::warning('Contact form rate limit exceeded', [
                'ip' => $request->ip(),
                'user_agent' => $request->header('User-Agent'),
            ]);
            
            return response()->json([
                'message' => 'Too many contact form submissions. Please try again later.',
                'retry_after' => $seconds,
            ], 429);
        }
        
        // Increment the rate limiter counter
        RateLimiter::hit($key, 3600); // Keep in cache for 1 hour
        
        return $next($request);
    }
}
