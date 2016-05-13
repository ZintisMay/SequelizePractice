// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Burger 	= require("../model/burger.js"); // Pulls out the burger Model

// Routes
// =============================================================
module.exports = function(app){

	app.get('/api/:burgers?', function(req, res){

		console.log("api/burgers?");

		if(req.params.burgers){
			console.log("req.params.burgers");
			Burger.findAll({
				where: {
					name: req.params.burgers
				}
			}).then(function(result){
				res.json(result);
			});
		}else{
			console.log("else");
			Burger.findAll({}).then(function(result){
				res.json(result);
			});
		}
	});

	app.post('/api/change', function(req, res){


		var burger = req.body;
		console.log("api/change?");
		console.log(req.body);

		console.log("change else");
		Burger.update({devoured: true},{
			where: {
				id: burger.id
			}
		}).then(function(result){
			console.log(result);
				res.json(result);
		});
	});

	app.post('/api/new', function(req, res){

		var burger = req.body;

		console.log(req.body);
		console.log(burger);

		Burger.create({
			name: burger.name,
			devoured: false,

		});
		
	});

	// app.post('/api/update/:burgers', function(req, res){

	// 	var burger = req.body;

	// 	Burger.create({
	// 		name: burger.name,
	// 		devoured: false,
	// 	});
		
	// });
}