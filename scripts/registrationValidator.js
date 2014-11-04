function formValidation()
{
var uid = document.registration.userid;
var passid = document.registration.passid;

if(userid_validation(uid,5,8))
{
if(passid_validation(passid,7,12))
{
    window.location.assign("C:\\Demo_Project\\MyBookApp\\views\\feed.html")
}
}
return false;
} 

function userid_validation(uid,mx,my)
{
 //this.uid = "sunder"
var uid_len = uid.value.length;
if (uid_len == 0 || uid_len >= my || uid_len < mx)
{
alert("User Id should not be empty / length be between "+mx+" to "+my);
uid.focus();
return false;
}
return true;
}
function passid_validation(passid,mx,my)
{
var passid_len = passid.value.length;
if (passid_len == 0 ||passid_len >= my || passid_len < mx)
{
alert("Password should not be empty / length be between "+mx+" to "+my);
passid.focus();
return false;
}
return true;
}
