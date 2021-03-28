import Head from 'next/head'
import Link from 'next/link'
import React from 'react';
import {TabShow} from './Componente.RankModules'
import {Individual, SecundList, IndividualClan, SecundListClan} from './Componente.HeaderReact'
import {CloseDiv, Logout, Loged} from './Componente.Load'
import FuncoesWebsite from './Componente.Funcoes'



function MyHeader(){
    return <Head><meta httpEquiv="Content-Type" content="text/html; charSet=UTF-8" />
	<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
	<meta httpEquiv="pragma" content="no-cache"/>
	<meta httpEquiv="cache-control" content="no-cache"/>
	<meta name="description" content="Point Blank TAM Online Bilgisayar Oyunu - Ücretsiz; Türkçe, İngilizce ve Arapça içeriğe sahip olan ve bu dillerde destek sağlayan ülkenin en kaliteli MMOFPS oyunudur. En gerçekçi vuruş hissini, onlarca silah ve harita seçeneklerinde, çekişmeli eSpor turnuvalarıyla milyonlarca oyuncu ile yaşamak istiyorsanız, doğru tercih Point Blank TAM!" />
	<meta name="keywords" content="Point Blank, TAM, Türkiye, Online, FPS, oyun, bedava, ücretsiz, indir, kayıt, oyna, espor, turnuva, türkçe, ingilizce, arapça, azeri, azerbaycan, savaş, silah, bıçak, bomba, hemen, f2p, tg, yükle, premium, kafe" />
	<meta property="og:title" content="Point Blank" />
	<meta property="og:description" content="Point Blank" />
	<title>Point Blank</title>
	<link href='//fonts.googleapis.com/css?family=Anton|Open+Sans:400,700,400italic,700italic' rel='stylesheet' type='text/css'/>
  <script src="/Base/js/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossOrigin="anonymous"></script>
  <script type="text/javascript" src="/Base/js/index1.js"> </script>
  <script type="text/javascript" src="/Base/js/index2.js"> </script>
  <script type="text/javascript" src="/Base/js/index3.js"> </script>
  <script type="text/javascript" src="/Base/js/index4.js?v=2"> </script>
  </Head>
} 

function MyFooter(){
    return <div className="footer_area">
	<div className="footer">
		<div className="up">
			<p className="logo">
				<a href="http://corp.nfinitygames.com/" target="_blank"><img src="/Front/Commom/footer_logo_nfinity.jpg" className="nfinity"/></a>
				<img src="/Front/Commom/footer_logo_zepetto.jpg" className="zepetto"/>
			</p>
			<ul className="menu">
				<li className="haberler"><a href="/news/notice/list.do"><img src="/Front/Commom/footer_menu_haberler.jpg"/></a></li>
				<li className="kilavuzu"><a href="/guide/intro.do"><img src="/Front/Commom/footer_menu_kilavuzu.jpg"/></a></li>
				<li className="indir"><a href="/download"><img src="/Front/Commom/footer_menu_indir.jpg"/></a></li>
				<li className="siralama"><a href="/ranking/individual/list.do"><img src="/Front/Commom/footer_menu_siralama.jpg"/></a></li>
				<li className="destek"><a href="/login"><img src="/Front/Commom/footer_menu_destek.jpg" /></a></li>
			</ul>
		</div>
		<div className="dn">
			<ul className="sns">
				<li className="facebook"><a href="https://www.facebook.com/pointblanktr" target="_blank"><img src="/Front/Commom/footer_sns_facebook.jpg"/></a></li>
									<li className="discord"><a href="https://discord.gg/pointblanktam" target="_blank"><img src="/Front/Commom/footer_sns_discord.jpg"/></a></li>
				<li className="twitter"><a href="https://twitter.com/pointblanktr" target="_blank"><img src="/Front/Commom/footer_sns_twitter.jpg"/></a></li>
				<li className="youtube"><a href="https://www.youtube.com/user/PointBlankTurkiye" target="_blank"><img src="/Front/Commom/footer_sns_youtube.jpg"/></a></li>
				<li className="instagram"><a href="https://www.instagram.com/tampointblank/" target="_blank"><img src="/Front/Commom/footer_sns_instagram.jpg"/></a></li>
			</ul>
			<div className="copyright">
				<ul className="util">
					<li><a href="/policy/privacy.do">Gizlilik Politikası</a><span>ㅣ</span></li>
					<li><a href="/policy/customer.do">Tüketici Bilgilendirme Notu</a><span>ㅣ</span></li>
					<li><a href="/policy/manner.do">Davranış Kurallar</a></li>
				</ul>
				Bu sitede yer alan bütün yazılı ve görsel içeriğin her türlü kullanım hakkı Nfinity Games Bilişim A.Ş.'ye  aittir.<br />Nfinity Games Bilişim A.Ş., site içeriğinde önceden haber vermeksizin değişiklik yapma hakkını saklı tutar.<br /><p>© Nfinity Games Bilişim A.Ş. - 2015</p>                </div>
		</div>
	</div>        
</div>
} 

class InfoLeft extends React.Component {
    render(){
    return <div className="LNB">
		<script src="/Base/start/Script2.js" type="text/javascript" charSet="utf-8"></script>
		<script src="/Base/start/Script.js" type="text/javascript" charSet="utf-8"></script>
		<div className="section_common">
   <div className="gamestart ">
      <div className="bg">
         <div className="img" style={{display: "none", top: "0px", left: "0px"}}></div>
         <div className="piece1" style={{display: "none"}}></div>
         <div className="piece2" style={{display: "none"}}></div>
         <div className="piece3" style={{display: "none"}}></div>
         <div className="piece4" style={{display: "none"}}></div>
         <div className="piece5" style={{display: "none"}}></div>
         <div className="piece6" style={{display: "none"}}></div>
         <div className="bullet" style={{display: "none"}}></div>
         <div className="txt" style={{display: "none", top: "44px", left: "18px"}}></div>
         <div className="over" style={{display: "none"}}>
            <div className="piece1" style={{display: "none", left: "10.9385px", top: "80px", opacity: "0"}}></div>
            <div className="piece2" style={{display: "none", left: "142.838px", top: "80px", opacity: "0"}}></div>
            <div className="piece3" style={{display: "none", left: "212.197px", top: "80px", opacity: "0"}}></div>
            <div className="piece4" style={{display: "none", left: "163.658px", top: "80px", opacity: "0"}}></div>
            <div className="piece5" style={{display: "none", left: "148.146px", top: "80px", opacity: "0"}}></div>
            <div className="piece6" style={{display: "none", left: "32.674px", top: "80px", opacity: "0"}}></div>
            <div className="dust" style={{display: "none", opacity: "0.256542", left: "17.4346px"}}></div>
         </div>
         <div className="etc" style={{display: "none"}}></div>
      </div>
      <div className="btn_default" style={{display: "block"}}></div>
      <Link href="/download"><a className="btn_gamestart">play for free</a></Link>
   </div>
</div>
<Loged/>
	<ul className="cs">
      <li className="m_r2 m_b2"><a href="/guide/intro.do"><img src="/Front/Commom/lnb_cs_first.jpg"/></a></li>
      <li className="m_b2"><a href="#!"><img src="/Front/Commom/lnb_cs_how.jpg"/></a></li>
      <li className="m_r2"><Link  href="/member/pin"><a><img src="/Front/Commom/lnb_cs_coupon.jpg"/></a></Link></li>
      <li><a href="https://www.tamgame.com/support/faq/list.do?service=3"><img src="/Front/Commom/lnb_cs_faq.jpg"/></a></li>
   </ul>
   <div className="ranking">
      <p className="main_tit"><Link href="/ranking/individualexp"><a>RANKING</a></Link><span className="more"><Link href="/ranking/individualexp"><a><img src="/Front/Bottons/btn_tit_more_rotate.png"/></a></Link></span></p>
      <div id="tab_Bire">
         <ul className="tab_tit">
            <li className="tit_first_on">Individual</li>
            <li className="tit_last"><a href="#!" data-tab="2" onClick={TabShow} className="btn">Clan</a></li>
         </ul>
         <div className="champion" id="FisrtChampion">
           <Individual/>
         </div>
         <div className="grade" id="RankList5">
		 <SecundList/>
         </div>
      </div>
      <div id="tab_klan" style={{display: "none"}}>
         <ul className="tab_tit">
            <li className="tit_first"><a href="#!" data-tab="1" onClick={TabShow} className="btn">Individual</a></li>
            <li className="tit_last_on">Clan</li>
         </ul>
          <IndividualClan/>
         <div className="grade">
		 <SecundListClan/>
         </div>
      </div>
   </div>
</div>
   }
} 

function MyMenu(){
	return <div className="gnb_menu">
	<ul>
	   <li className="menu">
		  <p className="depth1_1st"><Link href="/News/News"><a  className="depth1_on"><span>News</span></a></Link></p>
		  <ul className="depth2">
		  <li><Link href="/News/Patch"><a>Patchs</a></Link></li>
		   <li><Link href="/News/News"><a>News</a></Link></li>
         <li><Link href="/News/Tournaments"><a>Tournaments</a></Link></li>
		  </ul>
	   </li>
	   <li className="menu">
		  <p className="depth1_2nd"><a href="#!" className="depth1_on"><span>Guide</span></a></p>
		  <ul className="depth2">
		  <li><Link href="/start/intro"><a>Guide</a></Link></li>
			 <li><Link href="/Guide/Install"><a>Install</a></Link></li>
			 <li><Link href="/Guide/Character"><a>Create Account</a></Link></li>
		  </ul>
	   </li>
	   <li className="menu">
		  <p className="depth1_3rd"><Link href="/download"><a className="depth1_on"><span>Download</span></a></Link></p>
		  <ul className="depth2">
		  </ul>
	   </li>
	   <li className="menu">
		  <p className="depth1_4th"><a href="#!" className="depth1_on"><span>Ranking</span></a></p>
		  <ul className="depth2">
			 <li><Link href="/ranking/individualexp"><a>Individual</a></Link></li>
			 <li><Link href="/ranking/clan"><a>Clan</a></Link></li>
		  </ul>
	   </li>
	   <li className="menu">
		  <p className="depth1_6th"><a href="https://www.facebook.com/eduhcm/" className="depth1_on" target="_blank"><span>Support</span></a></p>
		  <ul className="depth2">
		  </ul>
	   </li>
	</ul>
 </div>
}

function Layout(){
	return (
		<div id="Layout" className="layer_popup">
   <div className="layer_bg_dim"></div>
   <div id="ranking_info" className="layer_pop_layout_w550">
      <div className="pop_top">
         <p className="tit" id="layer_Nickname"></p>
         <p className="btn"><a href="#!" onClick={CloseDiv} className="close_btn"><img src="/Front/Commom/btn_close_pop.png"/></a></p>
      </div>
      <div className="pop_cont">
         <table className="pop_board">
            <colgroup>
               <col style={{width:"160px"}}/>
               <col style={{width:"auto"}}/>
            </colgroup>
            <thead>
               <tr>
                  <th colSpan="2" className="sub_stit">
                     <p className="stit">Character</p>
                  </th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td className="tit">XP</td>
                  <td id="layer_UserExp"></td>
               </tr>
               <tr>
                  <td className="tit">RANK</td>
                  <td id="layer_UserRank"></td>
               </tr>
               <tr>
                  <td className="tit">KDA</td>
                  <td id="layer_WinRate"></td>
               </tr>
                </tbody>
                <thead>
                <tr>
                    <th colSpan="2" className="sub_stit"><p className="stit">Game Info</p></th>
                </tr>
                </thead>
                <tbody>
               <tr>
                  <td className="tit">KILL</td>
                  <td id="layer_UserKill"></td>
               </tr>
               <tr>
                  <td className="tit">DEATH</td>
                  <td id="layer_UserDeath"></td>
               </tr>
               <tr>
                  <td className="tit">WIN</td>
                  <td id="layer_ClanName"></td>
               </tr>
               <tr>
                  <td className="tit">LOSERS</td>
                  <td id="layer_LOSERSS"></td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>
</div>
	)
}


export {MyHeader,MyFooter,InfoLeft,MyMenu,Layout}

