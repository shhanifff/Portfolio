// script 

function sendMail(){
    var params = {
        from_name : document.getElementById("fullName").value ,
        email_id : document.getElementById("email_id"). value ,
        message : document.getElementById("message").value
    }
    emailjs.send("service_2ep5e99", "template_ytwd4p2", params)
    .then(
        message => {
          if(message != "OK"){
              alert("Successful", "You clicked the button!", "success");
          }
          else{
              alert("Error", "You clicked the button!", "Error");
          }
        }
      );
}