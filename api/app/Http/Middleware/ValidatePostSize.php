<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Http\Exceptions\PostTooLargeException;
use Symfony\Component\HttpFoundation\Response;

class ValidatePostSize
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $max = $this->getPostMaxSize();

        if ($max > 0 && $request->server('CONTENT_LENGTH') > $max) {
            throw new PostTooLargeException;
        }

        return $next($request);
    }

    /**
     * Determine the server 'post_max_size' as bytes.
     */
    protected function getPostMaxSize(): int
    {
        $postMaxSize = ini_get('post_max_size');

        if (! $postMaxSize) {
            return 0;
        }

        switch (strtolower(substr($postMaxSize, -1))) {
            case 'g':
                return (int) $postMaxSize * 1024 * 1024 * 1024;
            case 'm':
                return (int) $postMaxSize * 1024 * 1024;
            case 'k':
                return (int) $postMaxSize * 1024;
            default:
                return (int) $postMaxSize;
        }
    }
}
