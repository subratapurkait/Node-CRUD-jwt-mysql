require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");

app.use(express.json());

app.use("/api/users", userRouter);

  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost');
    res.header('Access-Control-Allow-Origin', process.env.ADMIN_PORT);
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  });
//   response.writeHead(200, { 'Content-Type': 'text/plain',
//                           'Trailer': 'Content-MD5' });
// response.write(fileData);
// response.addTrailers({ 'Content-MD5': '7895bf4b8828b55ceaf47747b4bca667' });
// response.end();
const port = process.env.API_PORT || 4000;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});
