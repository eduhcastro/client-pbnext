import DatabaseOffline from '../../../components/DataBase/Accounts.ts'
import DatabaseOfflineClan from '../../../components/DataBase/Clan.ts'
const Formatado = DatabaseOffline;
async function Mapeando(ss,sx){
    var resultado = await ss.map(function(item){
    var Win = item.vitorias
    var Total = item.partidas
    var ClanOwner = item.owner_id
    for (var i = 0; i < sx.length; i++){
      if (sx[i].player_id == ClanOwner){
        var owner = sx[i].player_name
      }}
    var WD = Total != 0 ? Math.round((Win * 100) / Total, 1) : 0;
    var Ordernado = {clan_id: item.clan_id, clan_rank: item.clan_rank, clan_name: item.clan_name, clan_exp: item.clan_exp,clan_name: item.clan_name, ratewin: `${WD}`, points: item.pontos, dono: owner}
    return Ordernado
   })
   return resultado
};
function Fake(xx){
    let ClanData2 = xx;
    if (ClanData2 == null){
        res.status(200).json({
            result: 'end'
        });
        res.end();
        return
    }
    ClanData2.sort(function (x, y) {
        return y.clan_exp - x.clan_exp;
    });
    return ClanData2
}
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }
export const config = {
    api: {
        externalResolver: true,
    },
}
export default async (req, res) => {
    var inicio = req.query.limit * 20;
    if (req.query.limit == null) {
        var inicio = 1 * 20;
    }
    if (req.query.limit == 0) {
        var limite2 = 0
    } else {
        var limite2 = inicio - 20
    }
    if (req.query.type === 'individual') {
        Formatado.sort(function (x, y) {
            return y.exp - x.exp;
          })
        const query = Formatado.slice(limite2, inicio);
        console.log('0')
        if (query[0] == null) {
            res.status(200).json({
                result: 'end'
            });
            res.end();
        } else {
            (async () => {
                res.setHeader('Cache-Control', 's-maxage=400, stale-while-revalidate')
                res.status(200).json([query]);
                res.end();
            })()
        }
        return
    }
    if (req.query.type === 'matchs') {
        Formatado.sort(function (x, y) {
            return y.fights - x.fights;
          })
        const query = Formatado.slice(limite2, inicio);
        console.log('2')
        if (query[0] == null) {
            res.status(200).json({
                result: 'end'
            });
            res.end();
        } else {
            (async () => {
                res.setHeader('Cache-Control', 's-maxage=400, stale-while-revalidate')
                res.status(200).json([query]);
                res.end();
            })()
        }
        return
    }
    if (req.query.type === 'hs') {
        Formatado.sort(function (x, y) {
            return y.headshots_count - x.headshots_count;
          })
        const query = Formatado.slice(limite2, inicio);
        console.log('2')
        if (query[0] == null) {
            res.status(200).json({
                result: 'end'
            });
            res.end();
        } else {
            (async () => {
                res.setHeader('Cache-Control', 's-maxage=400, stale-while-revalidate')
                res.status(200).json([query]);
                res.end();
            })()
        }
        return
    }
    if (req.query.type === 'home') {
        const query = Formatado.slice(0, 5);
        if (query[0] == null) {
            res.status(200).json({
                result: 'end'
            });
            res.end();
            return
        }
            console.log('3')
            res.setHeader('Cache-Control', 's-maxage=400, stale-while-revalidate')
            res.status(200).json(query);
            res.end();   
        return
        }
  if(req.query.type === 'clan') {
    const teste = Fake(DatabaseOfflineClan)
    var ClanData = await Mapeando(DatabaseOfflineClan,Formatado);
    res.setHeader('Cache-Control', 's-maxage=400, stale-while-revalidate')
    res.status(200).json([ClanData.slice(limite2, inicio)]);
    res.end();
    return
  }

res.status(200).json({result: false});
res.end();

}


    //async function Mapeando(ss){
    //    const items = ss
    //    const resultado = await items.map(function(item){
    //      return {clan_exp: item.clan_exp}
    //   })
    //   return resultado
    //};
