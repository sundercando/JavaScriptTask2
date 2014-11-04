function formValidation(){

var uname = document.registration.username;
var age = document.registration.age;
var phone = document.registration.phone;
var email = document.registration.email;
var address= document.registration.address;
var profileImg=document.registration.profileImg;


 if(allLetter(uname)){
  if(ageCheck(age)){
    if(phoneCheck(phone)){
     if(emailCheck(email)){
	   saveProfile(profileToSave);
	    
	 }
    } 
   } 
 }
  
  //document.getElementById(bttnID).removeAttribute("disabled");
  return false;
}

function allLetter(uname)
{ 
 var letters = /^[A-Za-z]+$/;
 if(uname.value.match(letters))
 {
   return true;
 }
  else
  {
    alert('Please fill the Name and name must have alphabet characters only');
    uname.focus();
    return false;
  }
}


function ageCheck(age){

var agenum = /^[1-9]+$/;
   if(age.value.match(agenum) && age.value <=100){
   return true;
}   else {
   alert("Age should be number between 1 to 100");
   return false;
}

}


function phoneCheck(phone){

var phonenum = /^[0-9]+$/;
   if(phone.value.match(phonenum)){
   return true;
}   else {
   alert("phone Number Should be Number");
   return false;
}

}

function emailCheck(email)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
email.focus();
return false;
}
}

var profileToSave = {id:0,name:"",age:"",phone:"",email:"",address:"",image:""};

function saveProfile(profileToSave){
	localStorage.setItem("profile",profileToSave);
	
}

var maxWidth=170;
var maxHeight=250;
var outPutImage="previewField";
var defaultPic="../images/vodo.jpg";
var globalPic;
var filename;
var fileTypes=["bmp","gif","png","jpg","jpeg"];
var imageFlag=true;


function loadImages(inputImage){
    var source=inputImage.value;
	filename = source;
	
    var ext=source.substring(source.lastIndexOf(".")+1,source.length).toLowerCase();
   for (var i=0; i<fileTypes.length; i++){
		if (fileTypes[i]==ext){
			break;
		}
	}

    globalPic=new Image();
	
    if (i<fileTypes.length){
		try{
			globalPic.src=inputImage.files[0].getAsDataURL();
			filename=inputImage.files[0].getAsDataURL();
	  }catch(err){
			globalPic.src=source;
			filename=source;
	  }
	  imageFlag=true;
	}else {
      globalPic.src=defaultPic;
      alert("In-Valid File was Selected Kindly Select only Image File");
	  imageFlag=false;
    }
    setTimeout("applyChanges()",200);
}

function applyChanges(){
    var field=document.getElementById(outPutImage);
	var field1=document.getElementById("imageName");
/*    var x=parseInt(globalPic.width);
    var y=parseInt(globalPic.height);
    if (x>maxWidth) {
      y*=maxWidth/x;
      x=maxWidth;
    }
    if (y>maxHeight) {
      x*=maxHeight/y;
      y=maxHeight;
    }
    field.style.display=(x<1 || y<1)?"none":""; */
	 
    field.src=globalPic.src;
  //  field.width=x;
  //  field.height=y;
	field1.value=filename;
}


