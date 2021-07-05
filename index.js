const fetch = require('node-fetch');

module.exports = async (username, repository, isLast) => {
	if(!username) throw new TypeError("Username was not provided (first parameter), received " + username);
	if(!repository) throw new TypeError("Repository was not provided (second parameter), received " + repository);
	let json = await fetch(`https://api.github.com/repos/${username}/${repository}/tags`).then(res => res.json());
	if(json.message) throw new TypeError("User or repository was not found");
	
	json = json.map(obj => obj.name);
	if(isLast === true) json = json[0];
	return json;
}