//Patient Height
var surgeon_experience;
var height_in;
var weight_pound;
var height_m;
var weight_kg
var BMI;

//Procedures
var age;
var num_of_lipo_areas;
var estimated_lipo_amount_greater_5;
var estimated_time;
var combined_procedures_abd;
var combined_procedures_body;
var combined_procedures_breast;

//History Tab
var heart_attack;
var previous_stroke;
var prev_DVT;
var PE;
var FH;
var lost_pregnancies;
var recent_surgery;
var CHF;
var COPD;

//Autoimmune Tab
var blood_clotting;
var taking_harmones;
var travelling;
var IBS;

//Calculation Arrays
var AspirateRed = [];
var PatientAdj = [];
var DVT_ANTICOAG = [];
var DVT = [];
var OVERNIGHT = [];
var OVNT = [];


//calculated info
var total_patient_adj = 0;
var total_DVT = 0;
var total_OVNT = 0;
var FAT_ASPIRATE_LIMIT = 0;
var MAINTAINCE_ADDED_IV = 0;
var CHEMOPROPHYLAXIS;
var OVERNIGHT;

//Results
var Lactated_Ringers_L;
var _1_Lido_cc_per_L = 25;
var _1_1000_Epi_cc_per_L = 1;
var Total_1_Lido_ccs;
var Lido_Max_1_ccs;



function changeToggleBorder(elem){
	// debugger
	if( $(elem).css("background-color") == "rgb(255, 255, 255)")
		$(elem).css({'-webkit-box-shadow' : 'none', '-moz-box-shadow' : 'none', 'box-shadow' : 'none'});
	else
		$(elem).css({'-webkit-box-shadow' : 'inset 0 0 0px 1px #d5d5d5', '-moz-box-shadow' : 'inset 0 0 0px 1px #d5d5d5', 'box-shadow' : 'inset 0 0 0px 1px #d5d5d5'});
}

function changeToggleBorderByState(elem){
	// debugger
	if( $(elem).next().css("background-color") != "rgb(255, 255, 255)")
		$(elem).next().css({'-webkit-box-shadow' : 'none', '-moz-box-shadow' : 'none', 'box-shadow' : 'none'});
	else
		$(elem).next().css({'-webkit-box-shadow' : 'inset 0 0 0px 1px #d5d5d5', '-moz-box-shadow' : 'inset 0 0 0px 1px #d5d5d5', 'box-shadow' : 'inset 0 0 0px 1px #d5d5d5'});
}



// Form Manipulation through Local Storage
//	http://stackoverflow.com/questions/15968831/using-local-storage-in-phone-gap

$(document).on('click', '#_next--patient-height-weight-bmi', function(e) {
	e.preventDefault();
    var obj = {};
	$.each($('form#_form--patient-height-weight-bmi').serializeArray(), function(_, kv) {
		obj[kv.name] = kv.value;
	});

    localStorage.patient_height_weight_bmi = JSON.stringify(obj);
    window.location = e.target.href;
});

$(document).on('click', '#_next--procedures', function(e) {
	e.preventDefault();
    var obj = {};
	$.each($('form#_form--procedures').serializeArray(), function(_, kv) {
		obj[kv.name] = kv.value;
	});

    localStorage.procedures = JSON.stringify(obj);
    window.location = e.target.href;
});

$(document).on('click', '#_next--patient-history', function(e) {
	e.preventDefault();
    var obj = {};
	$.each($('form#_form--patient-history').serializeArray(), function(_, kv) {
		obj[kv.name] = kv.value;
	});

    localStorage.patient_history = JSON.stringify(obj);
    window.location = e.target.href;
});

$(document).on('click', '#_next--autoimmune-other-illness', function(e) {
	e.preventDefault();
    var obj = {};
	$.each($('form#_form--autoimmune-other-illness').serializeArray(), function(_, kv) {
		obj[kv.name] = kv.value;
	});

    localStorage.autoimmune_other_illness = JSON.stringify(obj);

    // call to calculateResults Function
    // calculateResults();

    calculateResults();

    window.location = e.target.href;
});



function setValues(index,val1,val2,val3,val4,val5,val6){
	AspirateRed[index] = val1;
	PatientAdj[index] = val2;
	DVT_ANTICOAG[index] = val3;
	DVT[index] = val4;
	OVERNIGHT[index] = val5;
	OVNT[index] = val6;
}

function calculate(){

	height_m = height_in*0.0254;
	weight_kg = weight_pound*0.454;

	BMI = weight_kg/(height_m*height_m);

	if(age >= 18 && age <=39)
		setValues(0,0,0,0,0,0,0);
	else if(age >= 40 && age <=59)
		setValues(0,0,0,1,1,0,0);
	else if(age >= 60 && age <=74)
		setValues(0,-5,-5,2,2,0,0);
	else if(age >= 75)
		setValues(0,-10,-10,3,3,1,1);

	if(num_of_lipo_areas >= 1 && num_of_lipo_areas <= 3)
		setValues(1,0,0,0,0,0,0);
	else if(num_of_lipo_areas >= 4 && num_of_lipo_areas <= 7)
		setValues(1,0,0,0,0,0,0);
	else if(num_of_lipo_areas > 7)
		setValues(1,-10,-10,0,0,0,0);
	

	if(estimated_lipo_amount_greater_5 == 1)
		setValues(2,0,0,1,1,1,1);
	else
		setValues(2,0,0,1,0,1,0);
	

	if(estimated_time >= 0 && estimated_time <= 45)
		setValues(3,0,0,0,0,0,0);
	else if(estimated_time >= 46 && estimated_time <= 239)
		setValues(3,0,0,2,2,0,0);
	else if(estimated_time >= 240)
		setValues(3,0,0,2,2,0,0);


	if(combined_procedures_abd == 1)
		setValues(4,-10,-10,1,1,1,1);
	else
		setValues(4,-10,0,1,0,1,0);
	

	if(combined_procedures_body == 1)
		setValues(5,-20,-20,1,1,1,1);
	else
		setValues(5,-20,0,1,0,1,0);
	

	if(combined_procedures_breast == 1)
		setValues(6,0,0,0,0,0,0);
	else
		setValues(6,0,0,0,0,0,0);
	


	if(heart_attack == 1)
		setValues(7,-50,-50,1,1,1,1);
	else
		setValues(7,-50,0,1,0,1,0);
	

	if(previous_stroke == 1)
		setValues(8,-50,-50,5,5,1,1);
	else
		setValues(8,-50,0,5,0,1,0);


	if(prev_DVT == 1)
		setValues(9,-10,-10,3,3,1,1);
	else
		setValues(9,-10,0,3,0,1,0);
	

	if(PE == 1)
		setValues(10,-10,-10,3,3,1,1);
	else
		setValues(10,-10,0,3,0,1,0);


	if(FH == 1)
		setValues(11,-10,-10,3,3,1,1);
	else
		setValues(11,-10,0,3,0,1,0);


	if(lost_pregnancies == 1)
		setValues(12,-10,-10,1,1,0,0);
	else
		setValues(12,-10,0,1,0,0,0);


	if(recent_surgery == 1)
		setValues(13,-10,-10,1,1,0,0);
	else
		setValues(13,-10,0,1,0,0,0);
	

	if(CHF == 1)
		setValues(14,-50,-50,1,1,1,1);
	else
		setValues(14,-50,0,1,0,1,0);
	


	if(COPD == 1)
		setValues(15,-50,-50,1,1,1,1);
	else
		setValues(15,-50,0,1,0,1,0);


	if(blood_clotting == 1)
		setValues(16,0,0,3,3,0,0);
	else
		setValues(16,0,0,3,0,0,0);


	if(taking_harmones == 1)
		setValues(17,0,0,3,3,0,0);
	else
		setValues(17,0,0,3,0,0,0);
	


	if(travelling == 1)
		setValues(18,0,0,1,1,0,0);
	else
		setValues(18,0,0,1,0,0,0);
	


	if(IBS == 1)
		setValues(19,0,0,1,1,0,0);
	else
		setValues(19,0,0,1,0,0,0);
	


	if(BMI > 35)
		setValues(20,10,10,0,0,0,0);
	else
		setValues(20,10,0,0,0,0,0);
	

	for(var i=0; i<21; i++)
	{
		total_patient_adj += PatientAdj[i];
		total_DVT += DVT[i];
		total_OVNT += OVNT[i]; 
	}

	// debugger

	//FAT ASPIRATE LIMIT
	FAT_ASPIRATE_LIMIT = (0.05*(height_m))*(weight_kg)*(1-(-total_patient_adj/100));

	// Reduction For Aspirate Using Surgeon Experience
	if(surgeon_experience == 99)
		FAT_ASPIRATE_LIMIT = FAT_ASPIRATE_LIMIT-((FAT_ASPIRATE_LIMIT*40)/100);
	else if(surgeon_experience == 100)
		FAT_ASPIRATE_LIMIT = FAT_ASPIRATE_LIMIT-((FAT_ASPIRATE_LIMIT*20)/100);

	//MAINTAINCE + ADDED IV  
	MAINTAINCE_ADDED_IV = 0.25*(FAT_ASPIRATE_LIMIT-5)*1000;

	//CHEMOPROPHYLAXIS
	if(total_DVT>2)
		CHEMOPROPHYLAXIS = "RECOMMENDED";
	else
		CHEMOPROPHYLAXIS = "CONSIDER";

	//OVERNIGHT
	if(total_OVNT>0)
		OVERNIGHT = "RECOMMENDED";
	else
		OVERNIGHT = "CONSIDER";



	if(estimated_time >= 240)
		CHEMOPROPHYLAXIS = "RECOMMENDED";

	if(combined_procedures_body == 1)
		CHEMOPROPHYLAXIS = "RECOMMENDED";

	if(heart_attack == 1)
		CHEMOPROPHYLAXIS = "RECOMMENDED";
	

	//Lactated Ringers, L
	Lactated_Ringers_L = weight_kg*0.1;

	//Total 1% Lido ccs
	Total_1_Lido_ccs = Lactated_Ringers_L*_1_Lido_cc_per_L;

	//Lido Max 1% ccs
	Lido_Max_1_ccs = weight_kg*3.5;

	FAT_ASPIRATE_LIMIT = Number((FAT_ASPIRATE_LIMIT).toFixed(2));
	MAINTAINCE_ADDED_IV = Number((MAINTAINCE_ADDED_IV).toFixed(2));
	Lactated_Ringers_L = Number((Lactated_Ringers_L).toFixed(2));
	Total_1_Lido_ccs = Number((Total_1_Lido_ccs).toFixed(2));
	Lido_Max_1_ccs = Number((Lido_Max_1_ccs).toFixed(2));
	_1_Lido_cc_per_L = Number((_1_Lido_cc_per_L).toFixed(2));
	_1_1000_Epi_cc_per_L = Number((_1_1000_Epi_cc_per_L).toFixed(2));



	// console.log("FAT_ASPIRATE_LIMIT = "+FAT_ASPIRATE_LIMIT);
	// console.log("MAINTAINCE_ADDED_IV = "+MAINTAINCE_ADDED_IV);
	// console.log("CHEMOPROPHYLAXIS = "+CHEMOPROPHYLAXIS);
	// console.log("OVERNIGHT = "+OVERNIGHT);
	// console.log("Lactated_Ringers_L = "+Lactated_Ringers_L);
	// console.log("Total_1_Lido_ccs = "+Total_1_Lido_ccs);
	// console.log("Lido_Max_1_ccs = "+Lido_Max_1_ccs);
	// console.log("_1_Lido_cc_per_L = "+_1_Lido_cc_per_L);
	// console.log("_1_1000_Epi_cc_per_L = "+_1_1000_Epi_cc_per_L);

	localStorage.setItem("FAT_ASPIRATE_LIMIT", FAT_ASPIRATE_LIMIT);
	localStorage.setItem("MAINTAINCE_ADDED_IV", MAINTAINCE_ADDED_IV);
	localStorage.setItem("CHEMOPROPHYLAXIS", CHEMOPROPHYLAXIS);
	localStorage.setItem("OVERNIGHT", OVERNIGHT);
	localStorage.setItem("Lactated_Ringers_L", Lactated_Ringers_L);
	localStorage.setItem("Total_1_Lido_ccs", Total_1_Lido_ccs);
	localStorage.setItem("Lido_Max_1_ccs", Lido_Max_1_ccs);
	localStorage.setItem("_1_Lido_cc_per_L", _1_Lido_cc_per_L);
	localStorage.setItem("_1_1000_Epi_cc_per_L", _1_1000_Epi_cc_per_L);
	
}

function calculateResults(){
	debugger
	// these variables hold form data of respective pages
	try{
		patient_height_weight_bmi = JSON.parse( localStorage.patient_height_weight_bmi );
		procedures = JSON.parse( localStorage.procedures );
		patient_history = JSON.parse( localStorage.patient_history );
		autoimmune_other_illness = JSON.parse( localStorage.autoimmune_other_illness );
	}
	catch (e) {}
	// debugger

	//Initializing global variables with form data
	height_in = patient_height_weight_bmi.height_in_inches;
	weight_pound = patient_height_weight_bmi.weight_in_pounds;
	age = procedures.age;
	num_of_lipo_areas = procedures.num_of_lipo_area;
	estimated_lipo_amount_greater_5 = procedures.est_lipo_amount;
	estimated_time = procedures.estimated_time;


	surgeon_experience = patient_height_weight_bmi.surgeon_experience;

	if(procedures.abdominoplasty == "on")
		combined_procedures_abd = 1;
	else
		combined_procedures_abd = 0;

	if(procedures.body_or_thighLift == "on")
		combined_procedures_body = 1;
	else
		combined_procedures_body = 0;

	if(procedures.breast_or_facial_surgery == "on")
		combined_procedures_breast = 1;
	else
		combined_procedures_breast = 0;


	if(patient_history.prev_heart_attack == "on")
		heart_attack = 1;
	else
		heart_attack = 0;


	if(patient_history.prev_stroke == "on")
		previous_stroke = 1;
	else
		previous_stroke = 0;


	if(patient_history.prev_dvt == "on")
		prev_DVT = 1;
	else
		prev_DVT = 0;


	if(patient_history.pulmonary_embolism == "on")
		PE = 1;
	else
		PE = 0;

		
	if(patient_history.family_history == "on")
		FH = 1;
	else
		FH = 0;

	if(patient_history.lost_3_preg == "on")
		lost_pregnancies = 1;
	else
		lost_pregnancies = 0;

	if(patient_history.recent_surgery == "on")
		recent_surgery = 1;
	else
		recent_surgery = 0;

	if(patient_history.chf == "on")
		CHF = 1;
	else
		CHF = 0;

	if(patient_history.ld_copd == "on")
		COPD = 1;
	else
		COPD = 0;


	if(autoimmune_other_illness.increased_blood_clotting == "on")
		blood_clotting = 1;
	else
		blood_clotting = 0;

	if(autoimmune_other_illness.taking_hormones == "on")
		taking_harmones = 1;
	else
		taking_harmones = 0;

	if(autoimmune_other_illness.travelling == "on")
		travelling = 1;
	else
		travelling = 0;

	if(autoimmune_other_illness.ibs == "on")
		IBS = 1;
	else
		IBS = 0;



	// Logic to manipuate and calculate results go here
	// Logic to display results on views go here

	calculate();
}

function setResultToViews(){
	// debugger
	$('.FAT_ASPIRATE_LIMIT').text(localStorage.getItem("FAT_ASPIRATE_LIMIT"));
	var MAINTAINCE_ADDED_IV = parseFloat(localStorage.getItem("MAINTAINCE_ADDED_IV"));
	MAINTAINCE_ADDED_IV = MAINTAINCE_ADDED_IV > 0? MAINTAINCE_ADDED_IV: 0;
	$('.MAINTAINCE_ADDED_IV').text(MAINTAINCE_ADDED_IV);

	$('.CHEMOPROPHYLAXIS').text(localStorage.getItem("CHEMOPROPHYLAXIS"));
	$('.OVERNIGHT').text(localStorage.getItem("OVERNIGHT"));
	$('.Lactated_Ringers_L').text(localStorage.getItem("Lactated_Ringers_L"));
	$('.Total_1_Lido_ccs').text(localStorage.getItem("Total_1_Lido_ccs"));
	$('.Lido_Max_1_ccs').text(localStorage.getItem("Lido_Max_1_ccs"));
	$('._1_Lido_cc_per_L').text(localStorage.getItem("_1_Lido_cc_per_L"));
	$('._1_1000_Epi_cc_per_L').text(localStorage.getItem("_1_1000_Epi_cc_per_L"));
}

function setResultToExport(){
	// debugger
	$('.FAT_ASPIRATE_LIMIT').text(localStorage.getItem("FAT_ASPIRATE_LIMIT"));
	
	var MAINTAINCE_ADDED_IV = parseFloat(localStorage.getItem("MAINTAINCE_ADDED_IV"));
	MAINTAINCE_ADDED_IV = MAINTAINCE_ADDED_IV > 0? MAINTAINCE_ADDED_IV: 0;
	$('.MAINTAINCE_ADDED_IV').text(MAINTAINCE_ADDED_IV);

	$('.CHEMOPROPHYLAXIS').text(localStorage.getItem("CHEMOPROPHYLAXIS"));
	$('.OVERNIGHT').text(localStorage.getItem("OVERNIGHT"));
	$('.Lactated_Ringers_L').text(localStorage.getItem("Lactated_Ringers_L"));
	$('.Total_1_Lido_ccs').text(localStorage.getItem("Total_1_Lido_ccs"));
	$('.Lido_Max_1_ccs').text(localStorage.getItem("Lido_Max_1_ccs"));
	$('._1_Lido_cc_per_L').text(localStorage.getItem("_1_Lido_cc_per_L"));
	$('._1_1000_Epi_cc_per_L').text(localStorage.getItem("_1_1000_Epi_cc_per_L"));
}

function start(){
	window.location = "patient-height-weight-bmi.html";
}

function setPatientHistory(){
	// these variables hold form data of respective pages
	try{
		patient_height_weight_bmi = JSON.parse( localStorage.patient_height_weight_bmi );
		procedures = JSON.parse( localStorage.procedures );
		patient_history = JSON.parse( localStorage.patient_history );
		autoimmune_other_illness = JSON.parse( localStorage.autoimmune_other_illness );
	}
	catch (e) {}


	// debugger
	
	try {
		if(procedures.abdominoplasty == "on")
			$("#abdominoplasty").attr("checked",true);
		else
			$("#abdominoplasty").removeAttr("checked");
	}
	catch (e) {}

	try{
		if(procedures.body_or_thighLift == "on")
			$("#body_or_thighLift").attr("checked",true);
		else
			$("#body_or_thighLift").removeAttr("checked");
	}
	catch (e) {}

	try{
		if(procedures.breast_or_facial_surgery == "on")
			$("#breast_or_facial_surgery").attr("checked",true);
		else
			$("#breast_or_facial_surgery").removeAttr("checked");
	}
	catch (e) {}

	try{
		if(patient_history.prev_heart_attack == "on")
			$("#prev_heart_attack").attr("checked",true);
		else
			$("#prev_heart_attack").removeAttr("checked");
		changeToggleBorderByState($("#prev_heart_attack"));
	}
	catch (e) {}

	try{
		if(patient_history.prev_stroke == "on")
			$("#prev_stroke").attr("checked",true);
		else
			$("#prev_stroke").removeAttr("checked");
		changeToggleBorderByState($("#prev_stroke"));
	}
	catch (e) {}


	try{
		if(patient_history.prev_dvt == "on")
			$("#prev_dvt").attr("checked",true);
		else
			$("#prev_dvt").removeAttr("checked");
		changeToggleBorderByState($("#prev_dvt"));
	}
	catch (e) {}


	try{
		if(patient_history.pulmonary_embolism == "on")
			$("#pulmonary_embolism").attr("checked",true);
		else
			$("#pulmonary_embolism").removeAttr("checked");
		changeToggleBorderByState($("#pulmonary_embolism"));
	}
	catch (e) {}


	try{
		if(patient_history.family_history == "on")
			$("#family_history").attr("checked",true);
		else
			$("#family_history").removeAttr("checked");
		changeToggleBorderByState($("#family_history"));
	}
	catch (e) {}

	try{
		if(patient_history.lost_3_preg == "on")
			$("#lost_3_preg").attr("checked",true);
		else
			$("#lost_3_preg").removeAttr("checked");
		changeToggleBorderByState($("#lost_3_preg"));
	}
	catch (e) {}

	try{
		if(patient_history.recent_surgery == "on")
			$("#recent_surgery").attr("checked",true);
		else
			$("#recent_surgery").removeAttr("checked");
		changeToggleBorderByState($("#recent_surgery"));
	}
	catch (e) {}

	try{
		if(patient_history.chf == "on")
			$("#chf").attr("checked",true);
		else
			$("#chf").removeAttr("checked");
		changeToggleBorderByState($("#chf"));
	}
	catch (e) {}

	try{
		if(patient_history.ld_copd == "on")
			$("#ld_copd").attr("checked",true);
		else
			$("#ld_copd").removeAttr("checked");
		changeToggleBorderByState($("#ld_copd"));
	}
	catch (e) {}	

	try{
		if(autoimmune_other_illness.increased_blood_clotting == "on")
			$("#increased_blood_clotting").attr("checked",true);
		else
			$("#increased_blood_clotting").removeAttr("checked");
		changeToggleBorderByState($("#increased_blood_clotting"));
	}
	catch (e) {}

	try{
		if(autoimmune_other_illness.taking_hormones == "on")
			$("#taking_hormones").attr("checked",true);
		else
			$("#taking_hormones").removeAttr("checked");
		changeToggleBorderByState($("#taking_hormones"));
	}
	catch (e) {}

	try{
		if(autoimmune_other_illness.travelling == "on")
			$("#travelling").attr("checked",true);
		else
			$("#travelling").removeAttr("checked");
		changeToggleBorderByState($("#travelling"));
	}
	catch (e) {}

	try{
		if(autoimmune_other_illness.ibs == "on")
			$("#ibs").attr("checked",true);
		else
			$("#ibs").removeAttr("checked");
		changeToggleBorderByState($("#ibs"));
	}
	catch (e) {}

	try{
		if(patient_height_weight_bmi.bmi >= 35 ){
			$("#bmi_gt_35").attr("checked",true);
			$("#bmi_gt_35").next().css({'-webkit-box-shadow' : 'none', '-moz-box-shadow' : 'none', 'box-shadow' : 'none'});
		}
		else
			$("#bmi_gt_35").removeAttr("checked");
	}
	catch (e) {}
}

function pre_export(){
	$('.modal-overlay').show();
	$('.confirm').show();
}

function export_result(){
	// debugger

	var email = $('#email').val();

	if (email == null || email == "") {

	} 
	else {
		$('.modal-overlay').hide();
		$('.confirm').hide();

	    // these variables hold form data of respective pages
		try{
			patient_height_weight_bmi = JSON.parse( localStorage.patient_height_weight_bmi );
			procedures = JSON.parse( localStorage.procedures );
			patient_history = JSON.parse( localStorage.patient_history );
			autoimmune_other_illness = JSON.parse( localStorage.autoimmune_other_illness );
		}
		catch (e) {}
		
		var Input = {
	        procedures: procedures,
	        patient_history: patient_history,
	        autoimmune_other_illness: autoimmune_other_illness,
	        patient_height_weight_bmi: patient_height_weight_bmi        
	    }


	    var MAINTAINCE_ADDED_IV = parseFloat(localStorage.getItem("MAINTAINCE_ADDED_IV"));
		MAINTAINCE_ADDED_IV = MAINTAINCE_ADDED_IV > 0? MAINTAINCE_ADDED_IV: 0;

	    var Output = {
	    	FAT_ASPIRATE_LIMIT: localStorage.getItem("FAT_ASPIRATE_LIMIT"),
			MAINTAINCE_ADDED_IV: MAINTAINCE_ADDED_IV,
			CHEMOPROPHYLAXIS: localStorage.getItem("CHEMOPROPHYLAXIS"),
			OVERNIGHT: localStorage.getItem("OVERNIGHT"),
			Lactated_Ringers_L: localStorage.getItem("Lactated_Ringers_L"),
			Total_1_Lido_ccs: localStorage.getItem("Total_1_Lido_ccs"),
			Lido_Max_1_ccs: localStorage.getItem("Lido_Max_1_ccs"),
			_1_Lido_cc_per_L: localStorage.getItem("_1_Lido_cc_per_L"),
			_1_1000_Epi_cc_per_L: localStorage.getItem("_1_1000_Epi_cc_per_L")
	    }

	    var Data = {
	    	Input: Input,
	    	Output: Output,
	    	Email: email
	    }

	    // Input = JSON.stringify(Input);

		// $.post( "http://192.168.10.4/lipo-calc/test.php", { Data } ).done(function( data ) {
		//     console.log(data);
		// });

		$.post( "http://lipocalculator.000webhostapp.com", { Data } ).done(function( data ) {
		    console.log(data);
		    $('.modal-overlay').show();
			$('.modal-in').show();
		});

	}

}

function closeModal(){
	$('.modal-overlay').hide();
	$('.modal-in').hide();
}