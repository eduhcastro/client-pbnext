import jwt from 'jsonwebtoken';
const Cryptr = require('cryptr');
const jwtSecret = process.env.PRIVATE_JWT;
const cryptr = new Cryptr(process.env.PRIVATE_PTS);

function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
const SignUP = (e) =>{
    var UserID = $("#useridr").val()
    var Pass = $("#userpasswordr").val() 
    var Email = $("#usermailr").val()
    var RePasss = $("#userpasswordr2").val()
    $("#notice_txt_alert").css("display", "none");
    if(UserID == undefined || UserID == ''  || Pass == '' || Email == '' || RePasss == '' || UserID == null || Pass == undefined || Email == undefined || Pass == null || Email == null || RePasss == null || RePasss == undefined){
        $("#notice_txt_alert").css("display", "block");
        $("#notice_txt_alert").text("Fill in all fields!");
        return;
    }
    if(UserID.length < 5 || Email.length < 5 || Pass.length < 5){
      $("#notice_txt_alert").css("display", "block");
      $("#notice_txt_alert").text("You need at least 5 characters!");
      return;
    }
    if(Pass != RePasss){
      $("#notice_txt_alert").css("display", "block");
      $("#notice_txt_alert").text("Passwords are not identical!");
      return;
    }
    if(emailIsValid(Email) == false){
      $("#notice_txt_alert").css("display", "block");
      $("#notice_txt_alert").text("You have entered an invalid email address!");
      return;
    }
    async function Regiss(){
        const token = jwt.sign({ "userID": UserID, "PassWord": Pass, "Email": Email}, jwtSecret, { expiresIn: 60 })
        const secret = cryptr.encrypt(process.env.PRIVATE_STRING);
        const formData = new URLSearchParams();
        formData.append('authorization', token+'//5Y1RI'+secret)
        const res = await fetch('/api/post/register', {
            method: 'POST',
            body: formData
          })
          const json = await res.json()
          return json
    }
    async function Teste(){
    const Auth = await Regiss()
    if(Auth.Resultado[0].code === 201){
      $("#notice_txt_alert").css("display", "block");
      $("#notice_txt_alert").text("User already exist!");
      return;
    }
    if(Auth.Resultado[0].code === 204 || Auth.Resultado[0].code === 99){
      $("#notice_txt_alert").css("display", "block");
      $("#notice_txt_alert").text("Sorry, we had a problem, please try again later.'");
      return;
    }
    if(Auth.Resultado[0].code === 103){
      $("#notice_txt_alert").css("display", "block");
      $("#notice_txt_alert").text("Invalid Token!");
      return;
    }
    if(Auth.Resultado[0].code === 0){
      try{      
        window.location.href = "/member/auth";
        alert('Account created successfully!')
        return
      }catch (e){
        console.log(e)
        alert('error')
        return
      }
    }
    return
    }
    Teste()
}

export default SignUP