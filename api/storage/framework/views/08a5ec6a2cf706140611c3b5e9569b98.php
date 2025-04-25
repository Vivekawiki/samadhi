<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Contact Form Submission</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background-color: #FF9933; /* Indian saffron color */
            color: white;
            padding: 15px;
            text-align: center;
            border-radius: 5px 5px 0 0;
        }
        .content {
            padding: 20px;
            border: 1px solid #ddd;
            border-top: none;
            border-radius: 0 0 5px 5px;
        }
        .field {
            margin-bottom: 15px;
        }
        .label {
            font-weight: bold;
            display: block;
            margin-bottom: 5px;
        }
        .message {
            background-color: #f9f9f9;
            padding: 15px;
            border-radius: 5px;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>New Contact Form Submission</h1>
    </div>
    <div class="content">
        <div class="field">
            <span class="label">Name:</span>
            <?php echo e($formData['firstName']); ?> <?php echo e($formData['lastName']); ?>

        </div>
        
        <div class="field">
            <span class="label">Email:</span>
            <?php echo e($formData['email']); ?>

        </div>
        
        <?php if(isset($formData['phone']) && $formData['phone']): ?>
        <div class="field">
            <span class="label">Phone:</span>
            <?php echo e($formData['phone']); ?>

        </div>
        <?php endif; ?>
        
        <div class="field">
            <span class="label">Subject:</span>
            <?php echo e($formData['subject']); ?>

        </div>
        
        <div class="field">
            <span class="label">Message:</span>
            <div class="message">
                <?php echo e($formData['message']); ?>

            </div>
        </div>
        
        <div class="field">
            <span class="label">Submitted on:</span>
            <?php echo e(now()->format('F j, Y, g:i a')); ?>

        </div>
    </div>
</body>
</html>
<?php /**PATH C:\Users\vipra\Documents\GitHub\finalsite\api\resources\views/emails/contact.blade.php ENDPATH**/ ?>