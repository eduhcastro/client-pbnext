import React, { Component } from 'react'
import DatabaseTs from './DataBase/Accounts.ts'
import DatabaseClan from './DataBase/Clan.ts'
import FuncoesWebsite from './Componente.Funcoes'
import {PageGet, PageGetClan} from './Componente.RankModules'
import {CloseDiv} from './Componente.Load'
DatabaseClan.sort(function (x, y) {
  return y.clan_exp - x.clan_exp;
})


function CalculatePages(Obj){
      const count = Obj.length
      return Math.ceil(count / 20);
}

function PaginasSS(){
  layer_popup_open_w550X('pagesinfo');
}

class PaginacaoUsers extends Component{
  render() {
    const Paginas = CalculatePages(DatabaseTs)
    const Items = []
    if(Paginas >= 20){
    for(var i = 1; i < 21; i++){
      if(i == 1){
        Items.push(<li key={i} className="string here" data-target={i}><a data-targeta={i} href="#!" onClick={PageGet}>{i}</a></li>)
      }else{
      Items.push(<li key={i} className="string" data-target={i}><a data-targeta={i} href="#!" onClick={PageGet}>{i}</a></li>)
      }
    }
  }else{
    for(var i = 1; i < Paginas; i++){
      if(i == 1){
        Items.push(<li key={i} className="string here" data-target={i}><a data-targeta={i} href="#!" onClick={PageGet}>{i}</a></li>)
      }else{
      Items.push(<li key={i} className="string" data-target={i}><a data-targeta={i} href="#!" onClick={PageGet}>{i}</a></li>)
      }
    }
  }
    function UltimaPagina(){
      if(Paginas > 20){
        return (<li className="last"><a id="lastpage2" href="#!" onClick={PaginasSS} style={{background: "url('https://freeiconshop.com/wp-content/uploads/edd/list-flat.png')",
        backgroundSize: "22px",
        backgroundRepeat: "no-repeat"}}><span>List</span></a></li>)
      }
    }
    return (<ul className="bbs_paging">
										<li className="first" data-target="1"><a data-targeta="1" href="#!" onClick={PageGet}><span>First</span></a></li>
          {Items}
					<li className="last" data-target={Paginas}><a data-targeta={Paginas} id="lastpage" href="#!" onClick={PageGet}><span>Last</span></a></li>
          {UltimaPagina()}
					</ul>)
      }
}


class PaginacaoClans extends Component{
  render() {
    const PaginasClan = CalculatePages(DatabaseClan)
    const Items = []
    if(PaginasClan >= 20){
    for(var i = 1; i < 21; i++){
      if(i == 1){
        Items.push(<li key={i} className="string here" data-target={i}><a data-targeta={i} href="#!" onClick={PageGetClan}>{i}</a></li>)
      }else{
      Items.push(<li key={i} className="string" data-target={i}><a data-targeta={i} href="#!" onClick={PageGetClan}>{i}</a></li>)
      }
    }
  }else{
    for(var i = 1; i < PaginasClan; i++){
      if(i == 1){
        Items.push(<li key={i} className="string here" data-target={i}><a data-targeta={i} href="#!" onClick={PageGetClan}>{i}</a></li>)
      }else{
      Items.push(<li key={i} className="string" data-target={i}><a data-targeta={i} href="#!" onClick={PageGetClan}>{i}</a></li>)
      }
    }
  }
    function UltimaPagina(){
      if(PaginasClan > 20){
        return (<li className="last"><a id="lastpage2" href="#!" onClick={PaginasSS} style={{background: "url('https://freeiconshop.com/wp-content/uploads/edd/list-flat.png')",
        backgroundSize: "22px",
        backgroundRepeat: "no-repeat"}}><span>List</span></a></li>)
      }
    }
    return (<ul className="bbs_paging">
										<li className="first" data-target="1"><a data-targeta="1" href="#!" onClick={PageGetClan}><span>First</span></a></li>
          {Items}
					<li className="last" data-target={PaginasClan}><a data-targeta={PaginasClan} id="lastpage" href="#!" onClick={PageGetClan}><span>Last</span></a></li>
          {UltimaPagina()}
					</ul>)
      }
}


class SecundList extends Component {
  render() {
    DatabaseTs.sort(function (x, y) {
      return y.exp - x.exp;
    })
    const items = []
    var IdUser = 0
    const query = DatabaseTs.slice(1, 5);
    query.map(function(item){
      IdUser++
      items.push(<p key={IdUser}><span className={new FuncoesWebsite().SortingClasses(IdUser)}>{item.player_name}</span><span className="exp"><img src={'/Front/Rank/icon/'+item.rank+'.png'}/> {new FuncoesWebsite().NewNumber(item.exp)}</span></p>) 
    })
    return (<>
    {items}
</>
     )
  }
}


class SecundListClan extends Component {
  render() {
    const items = []
    var IdUser = 0
    const query = DatabaseClan.slice(1, 5);
    query.map(function(item){
      IdUser++
      items.push(<p key={IdUser}><span className={new FuncoesWebsite().SortingClasses(IdUser)}>{item.clan_name}</span><span className="exp">{new FuncoesWebsite().NewNumber(item.clan_exp)}</span></p>) 
    })
    return (<>
    {items}
</>
     )
  }
}

class Individual extends Component {
  render() {
    DatabaseTs.sort(function (x, y) {
      return y.exp - x.exp;
    })
    const query = DatabaseTs.slice(0, 1);
    const items = []
    query.map(function(item){
      items.push(<p key="1"><span className="nick">{item.player_name}</span><span className="exp"><img src={'/Front/Rank/icon/'+item.rank+'.png'}/> {new FuncoesWebsite().NewNumber(item.exp)}</span></p>) 
    })
    return (
      <>
   {items}
   </>
    );
  }
}

class IndividualClan extends Component {
  render() {
    const query = DatabaseClan.slice(0, 1);
    const items = []
    query.map(function(item){
      items.push( <div key="1" className="champion" id="RankList66"><p className="nick">{item.clan_name}</p><p className="rank">{item.clan_exp}</p></div>) 
    })
    return (
      <>
   {items}
   </>
    );
  }
}



class ExpList extends Component {
  render() {
    DatabaseTs.sort(function (x, y) {
      return y.exp - x.exp;
    })
    const items = []
    var IdUser = 0
    const query = DatabaseTs.slice(0, 20);
    query.map(function(item){
      IdUser++
     items.push(<tr key={IdUser}>
      <td className="rank">
         {IdUser}
         <p className="rank_same"></p>
      </td>
      <td className="nick">
         <a href="#!" onClick={ () => UserDetail(item.player_name)}>
         {item.player_name}</a>
      </td>
      <td className="rank_class">
         <img src={'/Front/Rank/icon/'+item.rank+'.png'}/>{new FuncoesWebsite().NameRanking(parseInt(item.rank))}
      </td>
      <td className="gray">{new FuncoesWebsite().NewNumber(item.exp)}</td>
   </tr>)
    })
    return (<>
    {items}
</>
     )
  }
}

class MatchList extends Component {
  render() {
    DatabaseTs.sort(function (x, y) {
      return y.fights - x.fights;
    })
    const items = []
    var IdUser = 0
    const query = DatabaseTs.slice(0, 20);
    query.map(function(item){
      IdUser++
     items.push(<tr key={IdUser}>
      <td className="rank">
         {IdUser}
         <p className="rank_same"></p>
      </td>
      <td className="nick">
         <a href="#!" onClick={ () => UserDetail(item.player_name)}>
         {item.player_name}</a>
      </td>
      <td className="rank_class">
         <img src={'/Front/Rank/icon/'+item.rank+'.png'}/>{new FuncoesWebsite().NameRanking(parseInt(item.rank))}
      </td>
      <td className="gray">{item.fights} ({item.fights_win} / {item.fights_lost})</td>
   </tr>)
    })
    return (<>
    {items}
</>
     )
  }
}

class HeadList extends Component {
  render() {
    DatabaseTs.sort(function (x, y) {
      return y.headshots_count - x.headshots_count;
    })
    const items = []
    var IdUser = 0
    const query = DatabaseTs.slice(0, 20);
    query.map(function(item){
      var Hs = item.kills_count != 0 ? Math.round((item.headshots_count * 100) / item.kills_count, 1): 0;
      IdUser++
     items.push(<tr key={IdUser}>
      <td className="rank">
         {IdUser}
         <p className="rank_same"></p>
      </td>
      <td className="nick">
         <a href="#!" onClick={ () => UserDetail(item.player_name)}>
         {item.player_name}</a>
      </td>
      <td className="rank_class">
         <img src={'/Front/Rank/icon/'+item.rank+'.png'}/>{new FuncoesWebsite().NameRanking(parseInt(item.rank))}
      </td>
      <td className="gray">{item.headshots_count} ({Hs}%)</td>
   </tr>)
    })
    return (<>
    {items}
</>
     )
  }
}

class ClanList extends Component {
  render() {
    DatabaseClan.sort(function (x, y) {
      return y.clan_exp - x.clan_exp;
    })
    const items = []
    var IdUser = 0
    const query = DatabaseClan.slice(0, 20);
    query.map(function(item){
      var Win = item.vitorias
      var Total = item.partidas
      var WD = Total != 0 ? Math.round((Win * 100) / Total, 1) : 0;
      for (var i = 0; i < DatabaseTs.length; i++){
      if (DatabaseTs[i].player_id == item.owner_id){
        var owner = DatabaseTs[i].player_name
      }}
      IdUser++
     items.push(<tr key={IdUser} className="first">
     <td className="rank">
        {IdUser}
        <p className="rank_same"></p>
        <p></p>
     </td>
     <td className="nick">{item.clan_name}</td>
     <td className="master">{owner}</td>
     <td className="red">{item.clan_exp}</td>
     <td className="red">{WD}%</td>
     <td className="gray">{item.pontos}</td>
  </tr>)
    })
    return (<>
    {items}
</>
     )
  }
}


class ListPages extends Component{
	render (){
    const Paginas = CalculatePages(DatabaseTs)
    const Items = []
    for(var i = 1; i < Paginas; i++){
      if(i == 1){
        Items.push(<li key={i} className="string here" data-target={i}><a data-targeta={i} href="#!" onClick={PageGet}>{i}</a></li>)
      }else{
      Items.push(<li key={i} className="string" data-target={i}><a data-targeta={i} href="#!" onClick={PageGet}>{i}</a></li>)
      }
    }
	return(
		<div id="pagesinfo2" className="layer_popup XX">
   <div className="layer_bg_dim"></div>
   <div id="pagesinfo" className="layer_pop_layout_w550">
      <div className="pop_top">
         <p className="tit" id="title">Pages List</p>
         <p className="btn"><a href="#!" onClick={CloseDiv} className="close_btn"><img src="/Front/Commom/btn_close_pop.png"/></a></p>
      </div>
      <div className="pop_cont">
	  <ul className="bbs_paging" style={{height: "100%"}}>
  {Items}
   </ul>
      </div>
   </div>
</div>
	)
	}
}

class ListPagesClan extends Component{
	render (){
    const Paginas = CalculatePages(DatabaseClan)
    const Items = []
    for(var i = 1; i < Paginas; i++){
      if(i == 1){
        
        Items.push(<li key={i} className="string here" data-target={i}><a data-targeta={i} href="#!" onClick={PageGetClan}>{i}</a></li>)
      }else{
      Items.push(<li key={i} className="string" data-target={i}><a data-targeta={i} href="#!" onClick={PageGetClan}>{i}</a></li>)
      }
    }
	return(
		<div id="pagesinfo2" className="layer_popup XX">
   <div className="layer_bg_dim"></div>
   <div id="pagesinfo" className="layer_pop_layout_w550">
      <div className="pop_top">
         <p className="tit" id="title">Pages List</p>
         <p className="btn"><a href="#!" onClick={CloseDiv} className="close_btn"><img src="/Front/Commom/btn_close_pop.png"/></a></p>
      </div>
      <div className="pop_cont">
	  <ul className="bbs_paging" style={{height: "100%"}}>
  {Items}
   </ul>
      </div>
   </div>
</div>
	)
	}
}


export {Individual, SecundList, IndividualClan, SecundListClan, ExpList, MatchList, PaginacaoUsers, ListPages, ListPagesClan, PaginacaoClans, ClanList,HeadList}

