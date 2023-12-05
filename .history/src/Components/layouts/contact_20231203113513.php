<?php

$receiving_email_address = 'learntekin@gmail.com';

// Replace these with your actual credentials
$username = getenv('USERNAME');
$password = getenv('PASSWORD');

if (file_exists($php_email_form = '../assets/vendor/php-email-form/php-email-form.php')) {
    include($php_email_form);
} else {
    die('Unable to load the "PHP Email Form" Library!');
}

$contact = new PHP_Email_Form;
$contact->ajax = true;

$contact->to = $receiving_email_address;
$contact->from_name = $_POST['name'];
$contact->from_email = $_POST['email'];
$contact->subject = $_POST['subject'];

// Uncomment below code if you want to use SMTP to send emails. You need to enter your correct SMTP credentials
$contact->smtp = array(
    'host' => 'smtp.gmail.com', // Gmail SMTP server
    'username' => $username, // Your Gmail email address
    'password' => $password, // Your Gmail password
    'port' => '587',
    'encryption' => 'tls', // Enable TLS encryption
);

$contact->add_message($_POST['name'], 'From');
$contact->add_message($_POST['email'], 'Email');
$contact->add_message($_POST['message'], 'Message', 10);

echo $contact->send();
?>
