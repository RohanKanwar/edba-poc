const jwttoken = require('./token');
module.exports = (req, res) => {
  
  let bearerheader =
    req.headers["x-access-token"] || req.headers["authorization"];

  if (!bearerheader)
    return res.status(400).json({
      login: "Failed",
      message: " Token not found"
    });

  const usertoken = bearerheader.split(' ')[1];
  try {
    jwttoken.verify(usertoken);
    req.user = jwttoken.decode(usertoken);
  } catch (err) {
    res.json({
      status: 400,
      message: "Invalid token"
    });
    console.log(err)
  }
};
