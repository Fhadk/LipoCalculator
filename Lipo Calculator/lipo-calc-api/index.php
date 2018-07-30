<?php
	
	$input = $_POST;

	$html = "Lipo Calculator Results Are Following...<br><br>";
	$html .= "Patient Height/Weight/BMI<br><br>";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Surgeon Experience : "."<br>";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Height in Inches : "."<br>";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Weight in Pounds : "."<br>";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Height in Meters : "."<br>";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Weight in Kilograms : "."<br>";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Body Mass Index (BMI) : "."<br><br>";
	$html .= "Procedures<br><br>";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Age : "."<br>";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Number of Liposuction Areas : "."<br>";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Estimated Liposuction Amount : "."<br>";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Estimated Time : "."<br>";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Combined Procedures : "."<br><br>";
	$html .= "Patient History<br><br>";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Previous Heart Attack : "."<br>";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Previous Stroke : "."<br>";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Previous Deep Vein Thrombosis (DVT) : "."<br>";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Pulmonary Embolism (PE) : "."<br>";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Family History : "."<br>";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;3 Lost Pregnancies : "."<br>";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Recent Surgery Less than 30 Days : "."<br>";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Congestive Heart Failure (CHF) : "."<br>";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Lung Disease/COPD : "."<br><br>";
	$html .= "Autoimmune / Other Illness<br><br>";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Personal or Family History of test indicating increased blood clotting : "."<br>";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Taking Hormones in the last 3 weeks : "."<br>";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Travelling more than 3 hours in the last 2 weeks : "."<br>";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Inflammitory Bowel Desease (IBS) : "."<br>";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Patient BMI greater than 35? : "."<br><br>";
	$html .= "Results:<br><br>";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Fat Aspirate Limit : ".$input['Data']['Output']['FAT_ASPIRATE_LIMIT']."<br>";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Use Maintenance Plus Additional Fluids : ".$input['Data']['Output']['MAINTAINCE_ADDED_IV']."<br>";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Chemoprophylaxis : ".$input['Data']['Output']['CHEMOPROPHYLAXIS']."<br>";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Overnight : ".$input['Data']['Output']['OVERNIGHT']."<br>";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Lidocaine 1%, cc per L : ".$input['Data']['Output']['_1_Lido_cc_per_L']."<br>";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Epinephrine 1:1000, cc per L : ".$input['Data']['Output']['_1_1000_Epi_cc_per_L']."<br>";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Total 1% Lidocaine cc : ".$input['Data']['Output']['Total_1_Lido_ccs']."<br>";
	$html .= "&nbsp;&nbsp;&nbsp;&nbsp;Lidocaine Max 1% cc : ".$input['Data']['Output']['Lido_Max_1_ccs']."<br>";

	echo $html;
?>