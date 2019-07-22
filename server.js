// server.js
const app = require("./app")

// =======================
// define variables
// =======================
const port = process.env.PORT || 3001;

// =======================
// start server
// =======================
app.listen(port);
console.log('listen on port ' + port);