import Link from 'next/link'
import {MyHeader,MyFooter,InfoLeft,MyMenu} from '../../components/Componente.HeaderModules'
import {CODECODE} from '../../components/Componente.Load'
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
  <link rel="stylesheet" href="/Base/css/purchase.css?id=26"/>
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
   <section className="sub_purchase" style={{padding: "0 0"}}><div className="coupon_entry" style={{background: "#f00 url(/Front/Member/coupon_bg.jpg) no-repeat center top",backgroundSize: "100% 100%",backgroundBlendMode: "darken"}}>
   <div style={{    height: "200px"}}>
      <h2>DONATE</h2>
      <p className="txt">Get cash or Items by entering your digisell coupon code below!</p>
      <div id="ErrorMsg" style={{
        height: "2%",
        position: "absolute",
        width: "600px",
        left: "355px",
        top: "277px",
        backgroundColor: "#5a0000",
        display: "none"}}><span id="TextErrorMsg" style={{
    textAlign: "center",
    fontSize: "17px",
    color: "#fff",
    fontWeight: "300"}}>Incorrect Coupon or Pin!</span></div>
      <p className="input"><label id="coupon" style={{display:"block"}}></label><input type="text" placeholder="ENTER CODE" id="couponno" className="basic"/><button  type="button" onClick={CODECODE} type="button" id="btnCouponReg">APPLY</button></p>
   </div>
</div>
</section>
<table className="bbs_list_rank" style={{background: "#efe7e7 url(/Front/Commom/cont_div_line.png) bottom left no-repeat"
}}>
   <colgroup>
      <col style={{width:"114px"}}/>
      <col style={{width:"238px"}}/>
      <col style={{width:"218px"}}/>
      <col style={{width:"100px"}}/>
   </colgroup>
   <thead>
      <tr>
         <th className="TrThRed">Id</th>
         <th className="TrThRed">Type</th>
         <th className="TrThRed">Details</th>
         <th className="last" style={{background: "#f10 url(/Front/Commom/bbs_tit_bg.jpg)",
	backgroundBlendMode: "darken",     borderright: "1px solid #a41100"}}>Date</th>
      </tr>
   </thead>
   <tbody id="myitemslist">
      <tr data-target="Item-1">
         <td className="rank">
            #BC-294-KIA
         </td>
         <td className="nick">PIN CASH</td>
         <td className="rank_class">15.000 CASH POINTS</td>
         <td className="gray">02/27/2021</td>
      </tr>
      <tr data-target="Item-2">
         <td className="rank">
         #AC-618-LHV
         </td>
         <td className="nick">COUPON ITEMS</td>
         <td className="rank_class">AUG A3 CUPID(30D),CHEYTAC M200 ANGEL(15D), SC-2010 DARKNESS(15D), RANDOMBOX CUPID(3UN)</td>
         <td className="gray">02/24/2021</td>
      </tr>
   </tbody>
</table>
</div>
      <MyFooter/>
  </div>
</div>
</>
  )
    }
}
