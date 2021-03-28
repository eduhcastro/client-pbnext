import Link from 'next/link'
import {MyHeader,MyFooter,InfoLeft,MyMenu} from '../../components/Componente.HeaderModules'
import {ListPagesClan, PaginacaoClans, ClanList} from '../../components/Componente.HeaderReact'

export default function Clan() {
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
      <ListPagesClan/>
      <div className="contents">
         <div className="sub_title">Clan Ranking</div>
         <div className="sub_contents_pnone">
            <div className="cont_p30">
               <table className="bbs_list_rank">
                  <colgroup>
                     <col style={{width:"114px"}}/>
                     <col style={{width:"238px"}}/>
                     <col style={{width:"218px"}}/>
                     <col style={{width:"100px"}}/>
                  </colgroup>
                  <thead>
                     <tr>
                        <th>Ranking</th>
                        <th>Clan Name</th>
                        <th>title</th>
                        <th>XP</th>
                        <th>W/L</th>
                        <th className="last">Point</th>
                     </tr>
                  </thead>
                  <tbody id="rankinglistclan">
                     <ClanList/>
                  </tbody>
               </table>
               <PaginacaoClans/>
            </div>
         </div>
      </div>
      <MyFooter/>
   </div>
</div>
</>
  )
}
