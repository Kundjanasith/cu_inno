var express = require('express');
var app = express();
var router = express.Router();
var path = __dirname + '/web_ject/' ;
var cors = require('cors')();

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'ap-cdbr-azure-southeast-b.cloudapp.net',
  user     : 'b9424e520cb49f',
  password : '0d73f97c',
  database : 'innovation'
});

connection.connect();


app.use(cors);
router.use( function ( req, res, next ) {
	console.log( '/' + req.method );
	next();
});

router.get('/DB_search', function (req, res) {
    connection.query({
      sql: 'SELECT * from hub',
      timeout: 40000,
    },function(err, rows, fields) {
         console.log('user query laew');
       if (!err){
         console.log('The solution is: ', rows);
         res.json(rows);
       }
       else{
         console.log('Error while performing Query.'+err);
         return;
       }
     });
});

router.get('/DB_in/:Product/:Source/:Cluster/:Owner/:Faculty/:Remark', function (req, res) {
    var research = {
      Product: req.params.Product,
      Source: req.params.Source,
      Cluster: req.params.Cluster,
      Owner: req.params.Owner,
      Faculty: req.params.Faculty,
      Remark: req.params.Remark
    };
    console.log("ASdas"+research);
    connection.query({
      sql: 'INSERT INTO hub set ?',
      timeout: 40000,
    },research,function(err, rows, fields) {
         console.log('user query laew');
       if (!err){
         return;
       }
       else{
         console.log('Error while performing Query.'+err);
         return;
       }
     });
});

router.get('/DB_searchz/:t/:s', function (req, res) {
    var type = req.params.t;
    var ss;
    if(type=="Product"){
      ss="SELECT * from hub WHERE Product like '%"+req.params.s+"%' ";
    }
    if(type=="Source"){
      ss="SELECT * from hub WHERE Source like '%"+req.params.s+"%' ";
    }
    if(type=="Cluster"){
      ss="SELECT * from hub WHERE Cluster like '%"+req.params.s+"%' ";
    }
    if(type=="Owner"){
      ss="SELECT * from hub WHERE Owner like '%"+req.params.s+"%' ";
    }
    if(type=="Faculty"){
      ss="SELECT * from hub WHERE Faculty like '%"+req.params.s+"%' ";
    }
    if(type=="Remark"){
      ss="SELECT * from hub WHERE Remark like '%"+req.params.s+"%' ";
    }
    if(type=="Date"){
      ss="SELECT * from hub WHERE Date like '%"+req.params.s+"%' ";
    }
    connection.query({
      sql: ss,
      timeout: 40000,
    }, [req.params.s] ,function(err, rows, fields) {
         console.log('user query laew');
       if (!err){
         console.log('The solution is: ', rows);
         res.json(rows);
       }
       else{
         console.log('Error while performing Query.'+err);
         res.send("5000");
       }
     });
});

router.get( '/home', function ( req, res ) {
  console.log(path+'index.html');
  // console.log(research);
	res.sendFile(path+'index.html');
});

router.get( '/menu', function ( req, res ) {
	res.sendFile(path+'menu.html');
});

router.get( '/program', function ( req, res ) {
	res.sendFile(path+'program.html');
});

router.get( '/academy', function ( req, res ) {
	res.sendFile(path+'academy.html');
});

router.get( '/header2', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'img/header2.jpg');
});

router.get( '/se', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'search.html');
});

router.get( '/py', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'py.html');
});

router.get( '/bg3', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'img/bg3.jpg');
});

router.get( '/bg6', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'img/bg6.jpg');
});

router.get( '/bg4', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'img/bg4.jpg');
});

router.get( '/bg5', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'img/bg5.jpg');
});

router.get( '/admin', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'admin.html');
});

router.get( '/ip1', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'img/ip1.jpg');
});

router.get( '/ip2', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'img/ip2.jpg');
});

router.get( '/ac1', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'img/ac1.jpg');
});

router.get( '/bootstrap_min_css', function ( req, res ) {
	res.sendFile(path+'vendor/bootstrap/css/bootstrap.min.css');
});

router.get( '/font_awesome_min_css', function ( req, res ) {
	res.sendFile(path+'vendor/font-awesome/css/font-awesome.min.css');
});

router.get( '/magnific_popup_css', function ( req, res ) {
	res.sendFile(path+'vendor/magnific-popup/magnific-popup.css');
});

router.get( '/creative_min_css', function ( req, res ) {
	res.sendFile(path+'css/creative.min.css');
});

router.get( '/jquery_min_js', function ( req, res ) {
	res.sendFile(path+'vendor/jquery/jquery.min.js');
});

router.get( '/bootstrap_min_js', function ( req, res ) {
	res.sendFile(path+'vendor/bootstrap/js/bootstrap.min.js');
});

router.get( '/scrollreveal_min_js', function ( req, res ) {
	res.sendFile(path+'vendor/scrollreveal/scrollreveal.min.js');
});

router.get( '/jquery.magnific-popup.min.js', function ( req, res ) {
	res.sendFile(path+'vendor/magnific-popup/jquery.magnific-popup.min.js');
});

router.get( '/creative.min.js', function ( req, res ) {
	res.sendFile(path+'js/creative.min.js');
});

router.get( '/img/portfolio/fullsize/1.jpg', function ( req, res ) {
	res.sendFile(path+'img/portfolio/fullsize/1.jpg');
});

router.get( '/img/portfolio/fullsize/2.jpg', function ( req, res ) {
	res.sendFile(path+'img/portfolio/fullsize/2.jpg');
});

router.get( '/img/portfolio/fullsize/3.jpg', function ( req, res ) {
	res.sendFile(path+'img/portfolio/fullsize/3.jpg');
});

router.get( '/img/portfolio/fullsize/4.jpg', function ( req, res ) {
	res.sendFile(path+'img/portfolio/fullsize/4.jpg');
});

router.get( '/img/portfolio/fullsize/5.jpg', function ( req, res ) {
	res.sendFile(path+'img/portfolio/fullsize/5.jpg');
});

router.get( '/img/portfolio/fullsize/6.jpg', function ( req, res ) {
	res.sendFile(path+'img/portfolio/fullsize/6.jpg');
});

router.get( '/img/portfolio/thumbnails/1.jpg', function ( req, res ) {
	res.sendFile(path+'img/portfolio/thumbnails/1.jpg');
});

router.get( '/img/portfolio/thumbnails/2.jpg', function ( req, res ) {
	res.sendFile(path+'img/portfolio/thumbnails/2.jpg');
});

router.get( '/img/portfolio/thumbnails/3.jpg', function ( req, res ) {
	res.sendFile(path+'img/portfolio/thumbnails/3.jpg');
});

router.get( '/img/portfolio/thumbnails/4.jpg', function ( req, res ) {
	res.sendFile(path+'img/portfolio/thumbnails/4.jpg');
});

router.get( '/img/portfolio/thumbnails/5.jpg', function ( req, res ) {
	res.sendFile(path+'img/portfolio/thumbnails/5.jpg');
});

router.get( '/img/portfolio/thumbnails/6.jpg', function ( req, res ) {
	res.sendFile(path+'img/portfolio/thumbnails/6.jpg');
});

router.get( '/img/header.jpg', function ( req, res ) {
	res.sendFile(path+'img/header.jpg');
});

router.get( '/bootstrap.min.css.map', function ( req, res ) {
	res.sendFile(path+'vendor/bootstrap/css/bootstrap.min.css');
});

router.get( '/joinus', function ( req, res ) {
	res.sendFile(path+'img/join_us.jpg');
});

router.get( '/search', function ( req, res ) {
	res.sendFile(path+'img/search_and_learn.jpg');
});

router.get( '/in_ac', function ( req, res ) {
	res.sendFile(path+'img/innovation_academic.jpg');
});

router.get( '/in_ev', function ( req, res ) {
	res.sendFile(path+'img/innovation_event.jpg');
});

router.get( '/in_pr', function ( req, res ) {
	res.sendFile(path+'img/incubated_program.jpg');
});

// router.get( '/fonts/fontawesome-webfont.woff/:version', function ( req, res ) {
// 	res.sendFile(path+'vendor/fonts/fontawesome-webfont.woff');
// });

app.use( '/', router );
app.listen(1919,function(){
	console.log("Running 1919");
});
// connection.end();
