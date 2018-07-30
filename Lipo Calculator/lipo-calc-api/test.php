<?php
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
	header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
	// echo $_POST['Input']['patient_height_weight_bmi'].surgeon_experience;

	function issetcheck($array,$val){
		if(array_key_exists($val, $array))
			return "Yes";
		else
			return "No";
	}
	$input = $_POST;
	// print_r($input['Data']['Input']);

	$html = "Lipo Calculator Results Are Following...<br><br>";
	$html .= "\r\n";
	$html .= "Patient Height/Weight/BMI<br><br>";
	$html .= "\r\n";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Surgeon Experience : ".$input['Data']['Input']['patient_height_weight_bmi']['surgeon_experience']."<br>";
	$html .= "\r\n";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Height in Inches : ".$input['Data']['Input']['patient_height_weight_bmi']['height_in_inches']."<br>";
	$html .= "\r\n";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Weight in Pounds : ".$input['Data']['Input']['patient_height_weight_bmi']['weight_in_pounds']."<br>";
	$html .= "\r\n";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Height in Meters : ".$input['Data']['Input']['patient_height_weight_bmi']['height_in_meters']."<br>";
	$html .= "\r\n";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Weight in Kilograms : ".$input['Data']['Input']['patient_height_weight_bmi']['weight_in_kg']."<br>";
	$html .= "\r\n";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Body Mass Index (BMI) : ".$input['Data']['Input']['patient_height_weight_bmi']['bmi']."<br><br>";
	$html .= "\r\n";
	$html .= "Procedures<br><br>";
	$html .= "\r\n";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Age : ".$input['Data']['Input']['procedures']['age']."<br>";
	$html .= "\r\n";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Number of Liposuction Areas : ".$input['Data']['Input']['procedures']['age']."<br>";
	$html .= "\r\n";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Estimated Liposuction Amount : ".$input['Data']['Input']['procedures']['num_of_lipo_area']."<br>";
	$html .= "\r\n";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Estimated Time : ".$input['Data']['Input']['procedures']['est_lipo_amount']."<br>";
	$html .= "\r\n";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Combined Procedures : ".$input['Data']['Input']['procedures']['estimated_time']."<br><br>";
	$html .= "\r\n";
	$html .= "Patient History<br><br>";
	$html .= "\r\n";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Previous Heart Attack : ".issetcheck($input['Data']['Input']['patient_history'],'prev_heart_attack')."<br>";
	$html .= "\r\n";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Previous Stroke : ".issetcheck($input['Data']['Input']['patient_history'],'prev_stroke')."<br>";
	$html .= "\r\n";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Previous Deep Vein Thrombosis (DVT) : ".issetcheck($input['Data']['Input']['patient_history'],'prev_dvt')."<br>";
	$html .= "\r\n";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Pulmonary Embolism (PE) : ".issetcheck($input['Data']['Input']['patient_history'],'pulmonary_embolism')."<br>";
	$html .= "\r\n";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Family History : ".issetcheck($input['Data']['Input']['patient_history'],'family_history')."<br>";
	$html .= "\r\n";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;3 Lost Pregnancies : ".issetcheck($input['Data']['Input']['patient_history'],'lost_3_preg')."<br>";
	$html .= "\r\n";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Recent Surgery Less than 30 Days : ".issetcheck($input['Data']['Input']['patient_history'],'recent_surgery')."<br>";
	$html .= "\r\n";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Congestive Heart Failure (CHF) : ".issetcheck($input['Data']['Input']['patient_history'],'chf')."<br>";
	$html .= "\r\n";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Lung Disease/COPD : ".issetcheck($input['Data']['Input']['patient_history'],'ld_copd')."<br><br>";
	$html .= "\r\n";
	$html .= "Autoimmune / Other Illness<br><br>";
	$html .= "\r\n";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Personal or Family History of test indicating increased blood clotting : ".issetcheck($input['Data']['Input']['autoimmune_other_illness'],'increased_blood_clotting')."<br>";
	$html .= "\r\n";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Taking Hormones in the last 3 weeks : ".issetcheck($input['Data']['Input']['autoimmune_other_illness'],'taking_hormones')."<br>";
	$html .= "\r\n";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Travelling more than 3 hours in the last 2 weeks : ".issetcheck($input['Data']['Input']['autoimmune_other_illness'],'travelling')."<br>";
	$html .= "\r\n";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Inflammitory Bowel Desease (IBS) : ".issetcheck($input['Data']['Input']['autoimmune_other_illness'],'ibs')."<br>";
	$html .= "\r\n";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Patient BMI greater than 35? : ".issetcheck($input['Data']['Input']['autoimmune_other_illness'],'bmi_gt_35')."<br><br>";
	$html .= "\r\n";
	$html .= "Results:<br><br>";
	$html .= "\r\n";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Fat Aspirate Limit : ".$input['Data']['Output']['FAT_ASPIRATE_LIMIT']."<br>";
	$html .= "\r\n";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Use Maintenance Plus Additional Fluids : ".$input['Data']['Output']['MAINTAINCE_ADDED_IV']."<br>";
	$html .= "\r\n";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Chemoprophylaxis : ".$input['Data']['Output']['CHEMOPROPHYLAXIS']."<br>";
	$html .= "\r\n";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Overnight : ".$input['Data']['Output']['OVERNIGHT']."<br>";
	$html .= "\r\n";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Lidocaine 1%, cc per L : ".$input['Data']['Output']['_1_Lido_cc_per_L']."<br>";
	$html .= "\r\n";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Epinephrine 1:1000, cc per L : ".$input['Data']['Output']['_1_1000_Epi_cc_per_L']."<br>";
	$html .= "\r\n";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Total 1% Lidocaine cc : ".$input['Data']['Output']['Total_1_Lido_ccs']."<br>";
	$html .= "\r\n";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Lidocaine Max 1% cc : ".$input['Data']['Output']['Lido_Max_1_ccs']."<br>";
	$html .= "\r\n";

	// echo $html;


	// $to = "fhad.khan@outlook.com, mnouman2356@gmail.com";
	// $subject = "Lipo Calculator Results";

	// // Always set content-type when sending HTML email
	// $headers = "MIME-Version: 1.0" . "\r\n";
	// $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

	// // More headers
	// $headers .= 'From: <lipocalculator@gmail.com>' . "\r\n";

	// mail($to,$subject,$html,$headers);

	require 'PHPMailer/PHPMailerAutoload.php';

	$mail = new PHPMailer;

	//$mail->SMTPDebug = 3;                               // Enable verbose debug output

	$mail->isSMTP();                                      // Set mailer to use SMTP
	$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
	$mail->SMTPAuth = true;                               // Enable SMTP authentication
	$mail->Username = 'lipocalculator@gmail.com';                 // SMTP username
	$mail->Password = 'Smart123$';                           // SMTP password
	$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
	$mail->Port = 587;                                    // TCP port to connect to

	$mail->setFrom('lipocalculator@gmail.com', 'Lipo Calculator');
	$mail->addReplyTo('lipocalculator@gmail.com', 'Lipo Calculator');

	// $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
	// $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
	$mail->isHTML(true);                                  // Set email format to HTML

	$mail->Subject = "Lipo Calculator Results";
	$mail->Body    = $html;
	$mail->AltBody = $html;

	$mail->addAddress("mnouman2356@gmail.com");     // Add a recipient
	
	if($mail->send()) {
	    return 1;
	} 
	else {
	    return 0;
	}
?>
