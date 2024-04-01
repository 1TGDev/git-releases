const fetch = require('node-fetch');

module.exports = async (username, repository, isLast) => {
	if(!username) throw new TypeError("Username was not provided (first parameter), received " + username);
	if(!repository) throw new TypeError("Repository was not provided (second parameter), received " + repository);
	let json = await fetch(`https://api.github.com/repos/${encodeURIComponent(username)}/${encodeURIComponent(repository)}/tags`).then(res => res.json()).catch(e => ({error: "Failed to fetch"}));
	if(json.message || json.error) throw new TypeError(json.error || `GitHub Error: ${json.message}`);
	
	json = json.map(obj => obj.name);
	if(isLast === true) json = json[0];
	return json;
}