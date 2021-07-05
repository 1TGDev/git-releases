const releases = require('../index.js');

run();
async function run(){
	// get all releases in array
	let versions = await releases("1TGDev", "mysql-database");
	console.log(versions);
	// ['1.1.4','1.1.5']
	
	// get last version in a string
	let version = await releases("1TGDev", "mysql-database", true);
	console.log(version);
	// '1.1.5'
}