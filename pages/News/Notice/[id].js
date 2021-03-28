import {MyHeader,MyFooter,InfoLeft,MyMenu} from '../../../components/Componente.HeaderModules'
import Link from 'next/link'
import {NOTICE} from '../../../components/Componente.News';
import { useRouter } from "next/router";

export default function News(){
  const router = useRouter();
    return(
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
	<div className="sub_contents">
    {NOTICE(router.query.id)}
             </div>
        </div>
      <MyFooter/>
  </div>
</div>
        </>
    )
}