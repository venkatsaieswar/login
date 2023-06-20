function Form() { 
    var pas = document.getElementById("pass").value;
      var Number = /\d/.test(pas);
      var SpecialChar = /[!@#$%^&*]/.test(pas);
      var Min = pas.length >= 8;
    var pass = document.getElementById("rpass").value;

     if (!Number &&  !SpecialChar &&  !Min) {
        alert("Password must contain at least one number, one special character, and be at least 8 characters long.");
      return false; 
     }
       if (!Number &&  !SpecialChar) {
        alert("Password must contain at least one number and one special character.");
      return false; 
       }
       if (!Number &&  !Min) {
        alert("Password must contain at least one number and be at least 8 characters long.");
      return false; 
       }
      if (!SpecialChar &&  !Min) {
        alert("Password must contain at least one special character and be at least 8 characters long.");
      return false; 
      }
      if (!Number) {
        alert("Password must contain at least one number.");
      return false;
      } 
      if (!SpecialChar) {
        alert("Password must contain at least one special character.");
      return false; 
      }
      if (!Min) {
        alert("Password must be at least 8 characters long.");
      return false;
      }
       if(pas!==pass)
      {
        alert("password is not same");
     return false;
      }
     window.open("index.html");
     
}