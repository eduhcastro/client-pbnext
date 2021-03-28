import Link from 'next/link'
import {MyHeader,MyFooter,InfoLeft,MyMenu} from '../../components/Componente.HeaderModules'
import {PatchList} from '../../components/Componente.News'
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
        <div className="sub_title">PATCH NOTE</div>
        <div className="sub_contents">
      <ul className="bbs_list_news">
         <PatchList/>
         </ul>
      <ul className="bbs_paging">
         <li className="first"><a href="/Noticia?id=1"><span>First</span></a></li>
         <li className="prev"><a href="/Noticia?id=1"><span>Preview</span></a></li>
         <li className="here"><a href="/Noticia?id=1">1</a></li>
         <li className="next"><a href="/Noticia?id=1"><span>Next</span></a></li>
         <li className="last"><a href="/Noticia?id=1"><span>Last</span></a></li>
      </ul>
   </div>
</div>
      <MyFooter/>
  </div>
</div>
</>
  )
}
