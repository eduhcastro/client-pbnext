import FuncoesWebsite from './Componente.Funcoes.js'
function NovoNumero(Nmb){
  return new Intl.NumberFormat('de-DE', { currency: 'EUR' }).format(Nmb)
}

const PageGet = (e) =>  {
    const trajeto = new FuncoesWebsite().ExplodeUrl(e.view.location.pathname)
    var pagen = e.target.outerText
    var tarjetdata2 = e.target.dataset.targeta
    var classeatual = $('.string[data-target="'+tarjetdata2+'"]').attr('class')
    async function resolveAfter2Seconds(pagen) {
          const res = await fetch('/api/ranking/'+trajeto+'?limit='+tarjetdata2+'')
          const json = await res.json()
          return json[0]
    }

    async function f1(pagen, metodo) {
      var x = await resolveAfter2Seconds(pagen);
      var player = {
    };

    if(pagen == null){
      var pagen = 0
    }
    /**
     *
     * @param {string} player_name
     * @param {number} rank
     * @param {number} exp
     */
    
    
    player.renderPrize = function (player_name, rank, exp, partidas, vitorias, derrotas, head, kill, id) {
      if(player_name.length > 0){
        var Hs = kill != 0 ? Math.round((head * 100) / kill, 1): 0;
      var tpl = "";
      tpl += '<tr>';
      tpl +=   '<td class="rank">'+id+'';
      tpl +=      '<p class="rank_same"></p>';
      tpl +=    '</td>';
      tpl +=      '<td class="nick">';
      tpl +=        '<a href="#!" onClick="UserDetail(\''+player_name+'\')">';
      tpl +=          ''+player_name+'</a>';
      tpl +=       '</td>';
      tpl +=     '<td class="rank_class">';
      tpl +=       '<img src="/Front/Rank/icon/'+rank+'.png">'+new FuncoesWebsite().NameRanking(parseInt(rank))+'</td>';
      if(metodo == 'matchs'){
        tpl +=         '<td class="gray">'+partidas+' ('+vitorias+ '/'+derrotas+')</td>';
      }else if(metodo == 'hs'){ 
        tpl +=         '<td class="gray">'+head+' ('+Hs+'%)</td>';
      }else{
        tpl +=         '<td class="gray">'+NovoNumero(exp)+'</td>';
      }
      tpl +=      '</tr>';
      $("#rankinglist").append(tpl);
    }};
    /**
     * @param {Array} items
     */
    player.rank = function (items) {
      if(pagen > 1){
        var id = tarjetdata2 - 1; id = id * 20 + 1;
      }else{
        var id = 1
      }
     
      items.forEach(function(item){
        player.renderPrize(
          item.player_name,
          item.rank,
          item.exp,
          item.fights,
          item.fights_win,
          item.fights_lost,
          item.headshots_count,
          item.kills_count,
          id++
      );
    })};
    if (x != null){
      $("#rankinglist").empty()
        var tarjetdata = e.target.dataset.targeta
        $("#rankinglist").empty()
        $(".string").removeClass("here");
        $('.string[data-target="'+tarjetdata+'"]').addClass('here');
        player.rank((x));
      }else{
         alert('The list is over!');
      }
    }
    if(classeatual != "string here"){
        f1(tarjetdata2, trajeto)
    }
  }

  const PageGetClan = (e) =>  {
    var pagen = e.target.outerText
    var tarjetdata2 = e.target.dataset.targeta
    var classeatual = $('.string[data-target="'+tarjetdata2+'"]').attr('class')
    async function resolveAfter2Seconds(pagen) {
          const res = await fetch('/api/ranking/clan?limit='+tarjetdata2+'')
          const json = await res.json()
          return json[0]
    }
  

    async function f1(pagen) {
      var x = await resolveAfter2Seconds(pagen);
      var player = {
    };

    if(pagen == null){
      var pagen = 0
    }
    /**
     *
     * @param {string} player_name
     * @param {number} rank
     * @param {number} exp
     */
    
    
    player.renderPrize = function (clan_name, clan_exp, ratewin, points, owner, id) {
      if(clan_name.length > 0){
      var tpl = "";
        if(id == 1){
          tpl +=   '<tr class="first">';
          tpl +=   '<td class="rank">1';
          tpl +=      '<p class="rank_same"></p>';
          tpl +=      '<p></p>';
          tpl +=   '</td>';
          tpl +=   `<td class="nick">${clan_name}</td>`;
          tpl +=   `<td class="master">${owner}</td>`;
          tpl +=   `<td class="red">${clan_exp}</td>`;
          tpl +=   `<td class="red">${ratewin}%</td>`;
          tpl +=   `<td class="gray">${points}</td>`;
          tpl +=   '</tr>';
           }else{
             tpl += '<tr>';
             tpl += `<td class="rank">${id}`;
             tpl += '<p class="rank_same"></p>';
             tpl += '<p></p>';
             tpl += '</td>';
             tpl +=   `<td class="nick">${clan_name}</td>`;
             tpl += `<td class="master">${owner}</td>`;
             tpl += `<td class="red">${clan_exp}</td>`;
             tpl += `<td class="red">${ratewin}%</td>`;
             tpl += `<td class="gray">${points}</td>`;
             tpl += '</tr>';
           }
      $("#rankinglistclan").append(tpl);
    }};
    /**
     * @param {Array} items
     */
    player.rank = function (items) {
      if(pagen > 1){
        var id = tarjetdata2 - 1; id = id * 20 + 1;
      }else{
        var id = 1
      }
      if (items[0] === undefined || items[0].length == 0) {
          return
      }
      items.forEach(function(item){
        player.renderPrize(
          item.clan_name,
          item.clan_exp,
          item.ratewin,
          item.points,
          item.dono,
          id++
      );
    })};
    if (x != null){
      $("#rankinglistclan").empty()
        var tarjetdata = e.target.dataset.targeta
        $("#rankinglistclan").empty()
        $(".string").removeClass("here");
        $('.string[data-target="'+tarjetdata+'"]').addClass('here');
        player.rank((x));
      }else{
         alert('The list is over!');
      }
    }
    if(classeatual != "string here"){
        f1(pagen)
    }
  }


  const TabShow = (e) =>  {
    var tarjetdata2 = e.target.dataset.tab
  function TabNow(main_ranking) {
    document.all.tab_Bire.style.display = "none";
    document.all.tab_klan.style.display = "none";
    switch (main_ranking) {
        case '1':
            document.all.tab_Bire.style.display = "";
            break;
        case '2':
            document.all.tab_klan.style.display = "";
            break;
        case '3':
            document.all.tab_ranking.style.display = "";
            break;
    }
}
TabNow(tarjetdata2)
}
  



const UserExp = (e) =>{
  const Trajeto = new FuncoesWebsite().ExplodeUrl(e.view.location.pathname)
  const NickName = document.getElementById("nickname").value
  if(NickName === undefined || NickName === null || NickName === '' || NickName.length < 3){
    return alert('Enter a valid nickname of at least 3 characters!')
  }
  async function PlaYerPesquisa() {
    const formData = new URLSearchParams();
    formData.append('nickname', NickName);
    const res = await fetch('/api/post/user', {
      method: 'POST',
      body: formData
    })
    const json = await res.json()
    return json
}

async function Exa(pagen, metodo) {
  var x = await PlaYerPesquisa(pagen);
  var player = {
};

if(pagen == null){
  var pagen = 0
}
/**
 *
 * @param {string} player_name
 * @param {number} rank
 * @param {number} exp
 */


player.renderPrize = function (player_name, rank, exp, partidas, vitorias, derrotas, head, kill, id) {
  if(player_name.length > 0){
    var Hs = kill != 0 ? Math.round((head * 100) / kill, 1): 0;
  var tpl = "";
  tpl += '<tr>';
  tpl +=   '<td class="rank">'+id+'';
  tpl +=      '<p class="rank_same"></p>';
  tpl +=    '</td>';
  tpl +=      '<td class="nick">';
  tpl +=        '<a href="#!" onClick="UserDetail(\''+player_name+'\')">';
  tpl +=          ''+player_name+'</a>';
  tpl +=       '</td>';
  tpl +=     '<td class="rank_class">';
  tpl +=       '<img src="/Front/Rank/icon/'+rank+'.png">'+new FuncoesWebsite().NameRanking(parseInt(rank))+'</td>';
  if(metodo == 'matchs'){
    tpl +=         '<td class="gray">'+partidas+' ('+vitorias+ '/'+derrotas+')</td>';
  }else if(metodo == 'hs'){ 
    tpl +=         '<td class="gray">'+head+' ('+Hs+'%)</td>';
  }else{
    tpl +=         '<td class="gray">'+NovoNumero(exp)+'</td>';
  }
  tpl +=      '</tr>';
  $("#rankinglist").append(tpl);
}};
/**
 * @param {Array} items
 */
player.rank = function (items) {
  if(pagen > 1){
    var id = tarjetdata2 - 1; id = id * 20 + 1;
  }else{
    var id = 1
  }
  items.forEach(function(item){
    player.renderPrize(
      item.player_name,
      item.rank,
      item.exp,
      item.fights,
      item.fights_win,
      item.fights_lost,
      item.headshots_count,
      item.kills_count,
      id++
  );
    
})};
if (x != null){
  $("#rankinglist").empty()
    var tarjetdata = e.target.dataset.targeta
    $("#rankinglist").empty()
    $(".string").removeClass("here");
    $('.string[data-target="'+tarjetdata+'"]').addClass('here');
    player.rank((x[0]));
  }else{
     alert('The list is over!');
  }
}

Exa(1, Trajeto)

}


export {PageGet,TabShow,PageGetClan,UserExp}