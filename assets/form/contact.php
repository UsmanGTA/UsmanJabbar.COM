<?php
	if (isset($_POST['submit'])) {
		$to          = $_ENV['email'];
		$sender_name = $_POST['name'];
		$from        = $_POST['email'];
		$subject     = $_POST['subject'];
		$message     = $_POST['message'];
		$headers     = "From:" . $from;
		$headers    .= "Content-type: text/html; charset=UTF-8\r\n";

		mail($to, $subject, $message, $headers);
	}
?>