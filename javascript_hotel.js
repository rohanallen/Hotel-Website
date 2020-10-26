function validateFirstName()
{
// validates the first name 
var firstname = document.getElementById("firstName").value;// extracts first name by id of first textbox
var re1=/^[A-Za-z\s\'\-]{2,15}$/;// regex pattern to ensure text contains only 2-15 char from a-z, blankspace, apostrophe and hyphen
if(re1.test(firstname))// to test
{
	document.getElementById("firstNamePrompt").style.color="green";// to change color of message spanned to green

	document.getElementById("firstNamePrompt").innerHTML="<strong>Valid</strong>";// to print message in appropriate feedback_col
	return true;

}
else
{
	document.getElementById("firstNamePrompt").style.color="Red";// to change color of message spanned to red

	document.getElementById("firstNamePrompt").innerHTML="<strong>Enter b/w 2 and 15 alphabets</strong>";// to print message in appropriate feedback_col
	return false;

}
}
function validateLastName()
{
	// validates the last name 
var lastname = document.getElementById("lastName").value;// extracts last name
var re2=/^[A-Za-z\s\'\-]{2,25}$/;// regex pattern to ensure text contains only 2-25 char from a-z, blankspace, apostrophe and hyphen
if(re2.test(lastname))// to test
{
	document.getElementById("lastNamePrompt").style.color="green";

	document.getElementById("lastNamePrompt").innerHTML="<strong>Valid</strong>";
	return true;

}
else
{
	document.getElementById("lastNamePrompt").style.color="Red";

	document.getElementById("lastNamePrompt").innerHTML="<strong>Enter b/w 2 and 25 alphabets</strong>";
	return false;

}
}
function validatePhone()
{
	// to validate phone no is in format of xxx-xxx-xxxx
var phone = document.getElementById("phone").value;
var re3=/^\d{3}-\d{3}-\d{4}$/;
if(re3.test(phone))
{
	document.getElementById("phonePrompt").style.color="green";

	document.getElementById("phonePrompt").innerHTML="<strong>Valid</strong>";
	return true;

}
else
{
	document.getElementById("phonePrompt").style.color="Red";

	document.getElementById("phonePrompt").innerHTML="<strong> Enter in prescribed format</strong>";
	return false;

}
}
function validateEmail()
{// to validate if email is correct
var email = document.getElementById("email").value;
var re4= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(re4.test(email))
{
	document.getElementById("emailPrompt").style.color="green";

	document.getElementById("emailPrompt").innerHTML="<strong>Valid</strong>";
	return true;

}
else
{
	document.getElementById("emailPrompt").style.color="Red";

	document.getElementById("emailPrompt").innerHTML="<strong>Invalid</strong>";
	return false;

}
}
function setCheckIn()
{// to reset min check in date to current date
	var today = new Date();// to get current date
	var dd = today.getDate();// to get day
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();
	if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

	today = yyyy+'-'+mm+'-'+dd;// to get current date into year month day format
	document.getElementById("checkin").setAttribute("min", today);// to reset min date
}
function validateCheckIn()
{// to ensure check in date is greater than equal to current date and smaller than equal to max date
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();
	if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

	today = yyyy+'-'+mm+'-'+dd;
	var a = document.getElementById("checkin").value;// to extract users check in date and put in year month day format
	a= new Date(a);
	var dd1 = a.getDate();
	var mm1 = a.getMonth()+1; //January is 0!
	var yyyy1 = a.getFullYear();
	if(dd1<10){
        dd1='0'+dd1
    } 
    if(mm1<10){
        mm1='0'+mm1
    } 

	a = yyyy1+'-'+mm1+'-'+dd1;
	if((a>=today)&&(a<="2020-12-21"))// to check
	{
	 document.getElementById("checkinPrompt").style.color="green";

	document.getElementById("checkinPrompt").innerHTML="<strong>Valid</strong>";
	return true;
	}
	else
	{
		document.getElementById("checkinPrompt").style.color="Red";

	    document.getElementById("checkinPrompt").innerHTML="<strong>Invalid</strong>";
		return false;
	}
}
function setCheckOut()
{// to reset min check out date to users check in date
	var today = document.getElementById("checkin").value;
	today= new Date(today);
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();
	if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

	today = yyyy+'-'+mm+'-'+dd;
	document.getElementById("checkout").setAttribute("min", today);// reset min check out date
}
function validateCheckOut()
{// to ensure check out date is greater than equal to checked in date and smaller than equal to max date
	var b= document.getElementById("checkout").value;// to extract users check out date
	if(b>=document.getElementById("checkin").value&&b<="2020-12-31")// to compare
	{
		document.getElementById("checkoutPrompt").style.color="green";

	document.getElementById("checkoutPrompt").innerHTML="<strong>Valid</strong>";
		return true;
	}
	else
	{
		document.getElementById("checkoutPrompt").style.color="Red";

	    document.getElementById("checkoutPrompt").innerHTML="<strong>Invalid</strong>";
		return false;
	}
}
	
function validateForm() {
	// if either of the above validation functions return false alert message should pop up to enter all required fields
	// otherwise alert the user that the reservation is succesfull
  if(!validateFirstName()||!validateLastName()||!validateEmail()||!validatePhone()||!validateCheckIn()||!validateCheckOut())
	  alert("Please Enter All Required Fields In Prescribed Format");
  else
	  alert("Reservation Succesfull!!");
}