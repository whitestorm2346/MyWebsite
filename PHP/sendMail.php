<?php
use PHPMailer\PHPMailer\PHPMailer;  

if(isset($_POST['name']) && isset($_POST['email']))
{
    $name  = $_POST['name'];
    $email = $_POST['email'];
    $body  = $_POST['body'];

    require_once "PHPMailer/PHPMailer.php";
    require_once "PHPMailer/SMTP.php";
    require_once "PHPMailer/Exception.php";

    $mail = new PHPMailer();

    $mail->isSMTP();
    $mail->Host = "smtp.gmail.com";
    $mail->SMTPAuth = true;
    $mail->Username = "andrew770426@gmail.com";
    $mail->Password = '104401604A';
    $mail->Port = 465;
    $mail->SMTPSecure = "ssl";

    $mail->isHTML = true;
    $mail->setForm($email, $name);
    $mail->addAddress("andrew770426@gmail.com");
    $mail->Body = $body;

    if($mail->send())
    {
        $status = "success";
        $response = "Email is sent!";
    }
    else
    {
        $status = "failed";
        $response = "Something is wrong: <br>" . $mail->ErrorInfo;
    }

    exit(json_encode(array("status" => $status, "response" => $response)));
}
?>