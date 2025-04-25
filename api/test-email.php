<?php

require __DIR__ . '/vendor/autoload.php';

$app = require_once __DIR__ . '/bootstrap/app.php';
$app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();

use Illuminate\Support\Facades\Mail;
use App\Mail\ContactFormSubmission;

echo "Testing email configuration...\n";

try {
    $formData = [
        'firstName' => 'Test',
        'lastName' => 'User',
        'email' => 'test@example.com',
        'subject' => 'Test Email Script',
        'message' => 'This is a test email sent from a PHP script to verify the email configuration.',
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

    echo "Sending email to: " . env('MAIL_ADMIN_ADDRESS', 'viprananda@rkmm.org') . "\n";
    
    Mail::to(env('MAIL_ADMIN_ADDRESS', 'viprananda@rkmm.org'))
        ->send(new ContactFormSubmission($formData));
    
    echo "Email sent successfully!\n";
} catch (\Exception $e) {
    echo "Error sending email: " . $e->getMessage() . "\n";
    echo "Stack trace: " . $e->getTraceAsString() . "\n";
}
