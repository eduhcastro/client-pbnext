import DatabaseTs from '../../../components/DataBase/Accounts.ts'
export const config = {
    api: {
        externalResolver: true,
    },
}
export default async (req, res) => {
    const user = req.query.user
    if(user === undefined || user === null || user === ''){
        res.status(200).json({
            success: false,
            data: {},
            message: 'Invalid'
        });
        res.end();
        return
    }
    const query = await DatabaseTs.filter(function(item){
        return item.player_name == user;         
    })
    if(query === undefined || query === null || query === ''){
        res.status(200).json({
            success: false,
            data: {},
            message: 'Not Found'
        });
        res.end();
        return
    }
    var PExp = query[0].exp
    var Kda = query[0].kills_count+query[0].deaths_count;
    console.log(Math.round(query[0].kills_count/(Kda) * 100))
    var KKDA =  Kda != 0 ? Math.round(query[0].kills_count/(Kda) * 100) : 0;
    var WINRATE = query[0].fights != 0 ? Math.round((query[0].fights_win * 100) / query[0].fights, 1) : 0;
    res.status(200).json({
        success: true,
        data: {Rank: query[0].rank, Exp: PExp, WinCnt: query[0].fights_win, LoseCnt: query[0].fights_lost, WinRate: WINRATE, KillCnt: query[0].kills_count, DeathCnt: query[0].deaths_count, Kd: KKDA},
        message: ''

    });
    res.end();
    return
}

