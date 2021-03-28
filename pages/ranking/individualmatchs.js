import Link from 'next/link'
import {MyHeader,MyFooter,InfoLeft,MyMenu,Layout} from '../../components/Componente.HeaderModules'
import {UserExp} from '../../components/Componente.RankModules'
import {MatchList,PaginacaoUsers,ListPages} from '../../components/Componente.HeaderReact'

export default function Individual() {
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
      <Layout/>
      <ListPages/>
      <div className="contents">
         <div className="sub_title">Individual Ranking</div>
         <div className="sub_contents_pnone">
            <div className="sub_tab_many_line">
               <ul className="sub_tab_many sub_tab_four <!--sub_tab_three-->">
                  <li className="last">
                     <Link href="/ranking/individualexp">
                     <a className="btn">EXP</a></Link>
                  </li>
                  <li className="first_on"><a href="#!" className="btn">MATCHS</a></li>
                  <li className="basic">
                     <Link href="/ranking/individualhs">
                     <a className="btn">HEADSHOT</a></Link>
                  </li>
               </ul>
            </div>
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
                        <th>Character</th>
                        <th>Rank</th>
                        <th className="last">Matchs</th>
                     </tr>
                  </thead>
                  <tbody id="rankinglist">
                     <MatchList/>
                  </tbody>
               </table>
               <PaginacaoUsers/>
            </div>
            <div className="bbs_search">
               <input type="hidden" id="keyword" name="keyword" value=""/>
               <p><input type="text" name="nickname" placeholder="Please Enter Character Name" id="nickname" style={{color: "black"}}/></p>
               <p className="btn_form"><a href="#!" onClick={UserExp} className="btn">SEARCH</a></p>
            </div>
         </div>
      </div>
      <MyFooter/>
   </div>
</div>
</>
  )
}
