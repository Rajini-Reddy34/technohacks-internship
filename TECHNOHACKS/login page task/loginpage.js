function validate()
{
    //request data gathering logic
   var email = document.loginform.username.value;
   var pwd = document.loginform.password.value;


   //validation logic
   if(email == "")
   {
      alert("boss....please enter email!!!!");
      return false;
   }
   if(pwd == "")
   {
     alert("boss... please enter password!!!");
     return false;
   }
   return true;
}