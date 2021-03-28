import Link from 'next/link'
import {MyHeader,MyFooter,InfoLeft,MyMenu} from '../components/Componente.HeaderModules'
import {AllNews,Tournament,SimpleSlider} from '../components/Componente.News';
export default function Home() {
  return (
    <>
<MyHeader/>
<div id="layer_reg"></div>
<div id="wrap">
   <div className="GNB">
      <div className="gnb_cont">
         <p className="logo">
            <Link href="/">
            <a><img src="/Front/Commom/logo_gnb_pb.png"/></a></Link>
         </p>
         <script type="text/javascript" src="/Base/js/select_design.js"></script>
         <MyMenu/>
      </div>
      <p className="gnb_bg"></p>
   </div>
   <div className="substance">
      <InfoLeft/>
      <div className="contents">
         <div className="main_banner">
         <link
  rel="stylesheet"
  type="text/css"
  charSet="UTF-8"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
/>
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
/>
            <div className="main_slide">
              <SimpleSlider/>
            </div>
            <link rel="stylesheet" href="/Base/css/owl.carousel.min.css" media="screen"/>
            <div className="main_news">
               <div className="news">
                  <p className="main_tit">
                     <Link  href="/news/notice/list.do">
                     <a style={{textTransform: "uppercase"}}>NEWS</a></Link>
                     <span className="more">
                        <Link  href="/news/notice/list.do">
                        <a><img src="/Front/Bottons/btn_tit_more.png"/></a></Link>
                     </span>
                  </p>
                  <AllNews/>
               </div>
               <div className="esports">
                  <p className="main_tit">
                     <Link href="http://esports.tamgame.com">
                     <a target="_blank">E-SPORTS</a></Link>
                     <span className="more">
                        <Link href="/Noticias">
                        <a><img src="/Front/Bottons/btn_tit_more.png"/></a></Link>
                     </span>
                  </p>
                 <Tournament/>
               </div>
            </div>
            <div className="main_event">
               <div className="fix">
                  <a href="https://www.tamgame.com/premiumcafe/info.do" target="_blank">
                  <img src="/Front/Announcers/banner_fix.jpg" />
                  </a>
               </div>
            </div>
         </div>
         <div className="left_banner"><a href="https://pb.tamgame.com/news/notice/view.do?page=1&idx=2477"><img src="/Front/Announcers/ViewImagedo1.jpg" alt="Point Blank Advanced Cup Kayıtları Başladı!"/></a></div>
         <div className="quick_menu">
            <img src="/Front/Commom/quick_tit.jpg"/>
            <ul>
               <li><a href="/Noticias"><img src="/Front/Commom/quick_charge.png"/></a></li>
               <li><a href="/guide/start/interface.do"><img src="/Front/Commom/quick_guide.png"/></a></li>
               <li><a href="/Noticias"><img src="/Front/Commom/quick_support.png"/></a></li>
               <li><a href="http://esports.tamgame.com"><img src="/Front/Commom/quick_tournament.png" /></a></li>
            </ul>
         </div>
      </div>
      <MyFooter/>
   </div>
</div>
</>
  )
}
