module.exports = function (app) {
	app.dataSources.scoringDb.automigrate('Racer', function (err) {
		if (err) throw err;

		app.models.Racer.create([
			{
				firstName: "Alan",
				lastName: "Delimon",
				streetAddress: "1651 Daansen Road",
				City: "Palmyra",
				state: "NY",
				zipCode: 14522,
				dateOfBirth: "1977-12-15",
				waiverSigned: true,
				id: 0
			},
			{
				firstName: "Chris",
				lastName: "Brodnicki",
				streetAddress: "100 West Birhwood Drive",
				City: "West Seneca",
				state: "NY",
				zipCode: 14522,
				dateOfBirth: "1977-12-08",
				waiverSigned: true,
				id: 0
			}

		], function (err, coffeeShops) {
			if (err) throw err;

			console.log('Models created: \n', coffeeShops);
		});
	});

	app.dataSources.scoringDb.automigrate('RaceClass', function (err) {
		if (err) throw err;

		app.models.RaceClass.create([
			{
				name: "Vet C",
				minDisplacement: 125,
				maxDisplacement: 999
			},
			{
				name: "50+",
				minDisplacement: 125,
				maxDisplacement: 999
			},
			{
				name: "85cc 12-16",
				minDisplacement: 65,
				maxDisplacement: 85
			},
			{
				name: "250 Beginner",
				minDisplacement: 125,
				maxDisplacement: 250
			}
		]);
	});

	app.dataSources.scoringDb.automigrate('ACL', function (err) {
		if (err) throw err;
		console.log("ACLs created...we hope!");
	});

	app.dataSources.scoringDb.automigrate('RaceResult');

};
