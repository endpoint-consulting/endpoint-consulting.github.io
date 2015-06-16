<?php
$toEmail = "ContactUs@EndpointConsulting.com";
$mailHeaders = "From: " . $_POST["userName"] . "<". $_POST["userEmail"] .">\r\n";
if(mail($toEmail, $_POST["subject"], $_POST["content"], $mailHeaders)) {
print_r("<p class='success'>Contact Mail Sent.</p>");
} else {
print_r("<p class='Error'>Problem in Sending Mail.</p>");
}
?>