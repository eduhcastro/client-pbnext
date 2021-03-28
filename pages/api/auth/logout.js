import { serialize } from 'cookie';
export default async function(req, res){
    try{
        res.setHeader('Set-Cookie', [
            serialize('TOKENAUTH', '', {
              maxAge: -1,
              path: '/',
            })
        ]);
    res.status(200).json({status: true})
    res.end()
    } catch (e){
        res.status(401).json({status: false})
        res.end()
    }
}