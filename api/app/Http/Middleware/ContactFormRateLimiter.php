<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Symfony\Component\HttpFoundation\Response;

class ContactFormRateLimiter
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $key = 'contact-form:' . $request->ip();
        
        // Allow 3 submissions per 10 minutes
        if (RateLimiter::tooManyAttempts($key, 3)) {
            return response()->json([
                'message' => 'Too many attempts. Please try again later.',
            ], 429);
        }
        
        RateLimiter::hit($key, 600); // 10 minutes (600 seconds) decay time
        
        return $next($request);
    }
}
