import Link from 'next/link'
import {MyHeader,MyFooter,InfoLeft,MyMenu} from '../../components/Componente.HeaderModules'
import {sendItMy} from '../../components/Componente.Load'
import React from 'react';
import jwt from 'jsonwebtoken';
const jwtSecret = process.env.PRIVATE_JWT;


async function Status(Obj){
   try{
      var Decodado = jwt.verify(Obj, jwtSecret);
   }catch (e){
      window.location.href = "/";
     localStorage.clear();
   }
 }

export default class My extends React.Component {
   componentDidMount() {
      const Token = localStorage.getItem('Autorizacao') || 'OFF';
      Status(Token)
    }
    render(){
  return (
    <>
  <MyHeader/>
  <script type="text/javascript" src="/Base/js/MyPage.js"> </script>
    <div id="layer_reg">
    </div>
    <div id="wrap">
      <div className="GNB">
        <div className="gnb_cont">
      <p className="logo"><Link href="/"><a><img src="/Front/Commom/logo_gnb_pb.png"/></a></Link></p>
      <script type="text/javascript" src="/Base/js/select_design.js"></script>
      <MyMenu/>
   </div>
   <p className="gnb_bg"></p>
</div>
        <div className="substance">
            <InfoLeft/>
        <div className="contents">
        <div className="sub_title">MY PAGE</div>
        <div className="sub_contents">
     

        <section className="profile">
   <div className="contents" style={{marginLeft: "2%"}}>
      <form name="userForm" id="userForm" encType="multipart/form-data">
         <input type="hidden" id="hash" name="hash" value="NZo4UJfU/Zvkl6cGT5336gLmQgkkzq4/6B5EnmRBQiBDguKmLiJH/sAP3ahtcjXyrdUCFOWc82VeiVLKqTRskQ=="/>
         <table className="my_page">
          
            <tbody>
               <tr className="top">
                  <th scope="row" className="important">
                     Primary E-Mail<strong>*</strong>
                  </th>
                  <td>
                     <div className="email_address">
                        <p className="check">
                        <span style={{color: "#000", fontWeight: "bold"}}>XXX</span>
                           <label htmlFor="mail_check">
                           I want to receive e-mails about latest updates and campaigns</label>
                        </p>
                     </div>
                  </td>
               </tr>
               <tr>
               </tr>
               <tr className="top">
                  <th scope="row">
                     <label htmlFor="change_password">Change Password</label>
                  </th>
                  <td className="cer_pw">
                     <div id="password_change_cancel" style={{margin: "2%"}}>
                     <p className="notice_txt" id="notice_txt_password" style={{display: "none", color: "#f00"}}></p>
                        <input type="password" name="password" id="password" maxLength="16" title="Enter New password" placeholder="New Password"/>
                        <input type="password" name="repassword" id="repassword" maxLength="16" title="Enter Confirm New password" placeholder="Confirm New password"/>
                        <p className="notice_txt" id="notice_txt_repassword" style={{display: "none", color: "#f00"}}></p>
                     </div>
                  </td>
               </tr>
               <tr>
   <th scope="row">
      Secret Question										
   </th>
   <td>
      <div className="check_find_pw" style={{margin: "2%"}}>
         <p><input type="radio" name="secretQuestion" className="radio" value="1"/><label htmlFor="Question01" className="InputMy">Your mother's maiden name</label></p>
         <p><input type="radio" name="secretQuestion" className="radio" value="2"/><label htmlFor="Question01" className="InputMy">First school you have went to</label></p>
         <p><input type="radio" name="secretQuestion" className="radio" value="3"/><label htmlFor="Question01" className="InputMy">Your first pet's name</label></p>
      </div>
   </td>
</tr>

<tr>
   <th scope="row">
      <label htmlFor="Secret_answer">Secret Answer</label>
   </th>
   <td className="answer">
      <p className="change_link" id="answer_change_link" style={{display: "none"}}>
         <a href="#">Change Your Answer</a>
      </p>
      <div className="input_btn cancel_btn" id="answer_change_cancel" style={{display: "block"}}>
         <input type="text" name="secretAnswer" id="secretAnswer" maxLength="200" placeholder="Enter Secret answer" title="Enter Secret answer"/>
         <a href="!#">CANCEL</a>
      </div>
      <p className="notice_txt" id="notice_txt_secretAnswer" style={{display: "none"}}></p>
   </td>
</tr>
            </tbody>
         </table>
         <p className="btns">
            <button type="button" id="btnSubmit" onClick={sendItMy} className="ButtonMy">SAVE</button>
         </p>
      </form>
   </div>
   <div id="layer_pop" className="check" style={{display: "none"}}>
      <p className="txt">
         Your account Info has been updated successfully
      </p>
      <p className="btns">
         <a href="#" className="default">OK</a>
      </p>
   </div>
</section>


     
   </div>
</div>
      <MyFooter/>
  </div>
</div>
</>
  )
    }
}
