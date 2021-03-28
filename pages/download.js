import Link from 'next/link'
import {MyHeader,MyFooter,InfoLeft,MyMenu} from '../components/Componente.HeaderModules'
export default function Download() {
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
         <div className="sub_title"> Download</div>
         <div className="sub_contents">
            <div className="down_wrap">
               <div className="cont_img_down">
                  <p className="tit"><img src="/Front/Download/explain_top_tit.png"/></p>
                  <p>Downloand join the action. If you haven't registered the game already you can click the "Register" button whilst downloading and register for free.</p>
               </div>
               <ul className="cont_img_down_btn">
                  <li className="quick">
                     <a href="https://zpt-tr.zepetto.com/TR/Pointblank_TAM_20200910.exe">
                     QUICK DOWNLOAD</a>
                  </li>
                  <li className="torrent"><a href="https://www.tamgame.com/Common/DownloadFile.do?filepath=JTJGcGIlMkZHYW1lJTJGMiUyRjAlMkYyJTJGMCUyRjElMkYyJTJGMiUyRjIlMkYwJTJGOCUyRjMlMkYzJTJGMyUyRjElMkYyMDIwMTIyMjA4MzMzMS50b3JyZW50&amp;filename=UG9pbnRCbGFuay50b3JyZW50">TORRENT Adviced for fast and stable connections</a></li>
               </ul>
            </div>
            <div className="sub_stit_slash">
               <p className="stit">System Requirements</p>
            </div>
            <div className="cont_p30">
               <table className="bbs_board">
                  <colgroup>
                     <col style={{width: '140px'}}/>
                     <col style={{width: '250px'}}/>
                     <col style={{width: '250px'}}/>
                  </colgroup>
                  <thead>
                     <tr>
                        <th></th>
                        <th>Minimum</th>
                        <th className="last">Recommended</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td className="section">Operating System</td>
                        <td>Windows XP &amp; newer	</td>
                        <td className="last">Windows 7 &amp; newer</td>
                     </tr>
                     <tr>
                        <td className="section">cpu</td>
                        <td>Intel Pentium E5700 / AMD Athlon X2 220	</td>
                        <td className="last">Intel Dual Core 2.8GHZ | AMD Athlon II X2 250</td>
                     </tr>
                     <tr>
                        <td className="section">ram</td>
                        <td>1024 MB or more	</td>
                        <td className="last">2048 MB or more</td>
                     </tr>
                     <tr>
                        <td className="section">Graphics Card</td>
                        <td>Nvidia 6600 / Radeon X1550 or higher</td>
                        <td className="last"> NVIDIA 9600GT (512MB), Radeon HD5570 or higher</td>
                     </tr>
                     <tr>
                        <td className="section">Disk Space</td>
                        <td colSpan="2" className="last">15 GB Free Space</td>
                     </tr>
                     <tr>
                        <td className="section">DirectX Version</td>
                        <td colSpan="2" className="last">DirectX 9.0c</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </div>
      <MyFooter/>
   </div>
</div>
</>
  )
}
