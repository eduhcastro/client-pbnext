import Link from 'next/link'
import {MyHeader,MyFooter,InfoLeft,MyMenu} from '../../components/Componente.HeaderModules'
export default function Patch() {
  return (
    <>

  <MyHeader/>
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
        <div className="sub_title">Introduction</div>
        <p><img src="/Front/Guide/game_Intro_visual.jpg"/></p>
        <div className="game_intro_cont">
            <p className="tit">Most Realistic Shooting Feeling!Sense Every One of Your Shots!</p>
            <p className="txt"> With Point Blank’s realistic sounds, shooting effects and environment interactionsyou will have a gaming experience closest to reality.</p>
            <p className="tit">Fast-Paced and Interactive Battle Grounds!</p>
            <p>Breakable walls, exploding cars and moving objects in Point Blank maps are waiting for you to take advantage of them in your strategies. Enjoy the action in constantly changing battle grounds. </p>
</div>
</div>
      <MyFooter/>
  </div>
</div>
</>
  )
}
