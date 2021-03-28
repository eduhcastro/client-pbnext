import jwt from 'jsonwebtoken';
const jwtSecret = process.env.PRIVATE_JWT;


export default async (req, res) => {
    try {
        const Token = req.headers.cookie
        const TT = Token.split("TOKENAUTH=")
        var decoded = jwt.verify(TT[1], jwtSecret);
        res.setHeader('Cache-Control', 's-maxage=400, stale-while-revalidate')
        res.status(200).json(decoded)
        res.end() 
      } catch (err) {
        console.log(err)
        return res.status(401).json({userNick: null})
      }
  
}
