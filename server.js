  // Making an Express server available
  // var express = require('express');
  var app = express();

//-----------------------
var Sequelize = require("sequelize");

// Adding in the components of the mysql library. Outlining the parameters tied to the mysql db
  // var mysql = require('mysql');
  // var connection = mysql.createConnection({
  //     port: 3306,
  //     host: 'localhost',
  //     user: 'root',
  //     password: 'Njmitx123',
  //     database: 'wizard_schools_db'
  // });

//sqlize initiator code
var sequelize = new Sequelize(
  connection.database, 
  connection.user, 
  connection.password,
  {
    host:connection.host,
    dialect: 'mysql',
    pool:{
      max: 5,
      min: 0,
      idle:10000
  }
});

// Connecting the mysql database mentioned above
  // connection.connect(function(err) {
  //     if (err) {
  //         console.error('error connecting: ' + err.stack);
  //         return;
  //     }
  //     console.log('connected as id ' + connection.threadId);
  // });

// Route. Querying the database 
app.get('/', function(req, res) {
  connection.query('SELECT * FROM schools', function(err, result) {

	var html = '<h1> These are the schools~!!! </h1>';


    // Use the data from the database to populate an HTML file
  	for (var s = 0; s < result.length; s++) {
  		html += '<div style="background-color:blue; color:red; margin-left:30px;">';
	  		html += '<ul>'
				html += '<li> ' + result[s].id + ' </li>';
				html += '<li> ' + result[s].name + ' </li>';
			html += '</ul>'
			html += '<br />';
		html += '</div>';
  	};

      // Send the html file to the user
      res.send(html);
  });
});

// Telling the server to run
var port = 3000;
app.listen(port);