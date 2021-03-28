import Link from 'next/link'
import React from 'react';
import HeaderMember from '../../components/Member/Componente.Header'
import SignUP from '../../components/Member/Componente.Register.js'
import jwt from 'jsonwebtoken';
const jwtSecret = process.env.PRIVATE_JWT;

async function Status(Obj){
   try{
      var Decodado = jwt.verify(Obj, jwtSecret);
      window.location.href = "/";
   }catch (e){
     localStorage.clear();
   }
 }


export default class Register extends React.Component {
    componentDidMount() {
      const Token = localStorage.getItem('Autorizacao') || 'OFF';
      Status(Token)
    }
    render(){
      return (
        <>
        <HeaderMember/>
        <style type="text/css" jsx global>{`
        body{ background: url('/Front/Member/10yil_pageskin_2.jpg');}
.gifts img {border-radius: 5px;}
.contents .row:first-child {display: none;}
.contents .row:last-child {margin-top: 40px;}
.download-here {display: none; position: fixed; left: 10px; bottom: -85px;}`
        }</style>
        <div className="container ">
   <div className="logo">
   <a href="/"><img src="/Front/Member/pointblank_logo_beyaz.png" alt="Point Blank" className="img-fluid"/></a> 
   </div>
   <div className="contents">
      <div className="row">
         <div className="col-12">
            <div className="event-detail">
            </div>
         </div>
      </div>
      <div className="row ">
         <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="register-form">
               <h1>REGISTER FREE AND START PLAYING!</h1>
               <input type="hidden" name="_token" value="3DsaEha8JTYmkpvtmG4R8frxGnL4nnAZQHeHqEMi"/>                            
               <input type="hidden" name="querystring" id="querystring" />
              
               <p className="notice_txt" id="notice_txt_alert"></p>
               <div className="input-group">
                  <div className="input-group-append">
                     <span className="input-group-text">
                     <i className="fas fa-user"></i>
                     </span>
                  </div>
                  <input type="text" id="useridr" name="userid1" className="form-control"
                     title="Enter User ID"
                     placeholder="User ID"
                     />
               </div>
               <div className="input-group">
                  <div className="input-group-append">
                     <span className="input-group-text">
                     <i className="fas fa-envelope"></i>
                     </span>
                  </div>
                  <input type="email" id="usermailr" name="userid" className="form-control"
                     title="Enter Email Address"
                     placeholder="Email Address"
                     />
               </div>
               <p className="notice_txt" id="notice_txt_userid"></p>
               <div className="input-group">
                  <div className="input-group-append">
                     <span className="input-group-text">
                     <i className="fas fa-key"></i>
                     </span>
                  </div>
                  <input type="password" id="userpasswordr" name="password" className="form-control"
                     title="Enter Password"
                     placeholder="Password"/>
                  <div className="input-group-append show-password">
                     <label className="input-group-text">
                     <i className="far fa-eye-slash"></i>
                     </label>
                  </div>
               </div>
               
               <div className="input-group">
                  <div className="input-group-append">
                     <span className="input-group-text">
                     <i className="fas fa-key"></i>
                     </span>
                  </div>
                  <input type="password" id="userpasswordr2" name="password2" className="form-control"
                     title="Repeat Password"
                     placeholder="Repeat Password"/>
                  <div className="input-group-append show-password">
                     <label className="input-group-text">
                     <i className="far fa-eye-slash"></i>
                     </label>
                  </div>
               </div>

               <p className="notice_txt" id="notice_txt_password"></p>
               <p className="notice_txt" id="notice_txt_capcha"></p>
               <button onClick={SignUP} type="button" id="btnSubmit" className="submit-form">REGISTER</button>
               <Link href="/member/auth"><a className="download-game"><i className="fas fa-user"></i> LOGIN</a></Link>
            </div>
         </div>
         <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="gifts">
               <img src="/Front/Member/sp-1120-en.png"
                  alt="Point Blank Registration - TAM Game" className="img-fluid"/>
            </div>
         </div>
      </div>
   </div>
</div>             
        </>
    )
   }
}