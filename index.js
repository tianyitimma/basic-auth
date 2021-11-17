'user strict';


const {db} = require('./model/index');
const app = require('./server.js');

let PORT = process.env.PORT || 3001;




// make sure our tables are created, start up the HTTP server.
db.sync()
  .then(() => {
    app.listen(PORT, () => console.log('server up at ', PORT));
  }).catch(e => {
    console.error('Could not start server', e.message);
  });