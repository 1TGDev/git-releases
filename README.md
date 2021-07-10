# Git Releases

<center>
	<a href="https://nodei.co/npm/git-releases/">
		<img alt="git-releases NPM Package Statistics" src="https://nodei.co/npm/git-releases.png">
	</a>
</center>

* Get all versions or last version of a github repository
* Useful for making outdated version alerts for your package
* Supports the Promise-API, you will be able to use .then, .catch, etc...

# Installation from [NPM](https://www.npmjs.com/package/git-releases)

`npm i git-releases`

## Example

```js
const releases = require('git-releases');

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
```

## Contributing

© git-releases, 2021 | <a href="https://itariq.dev" target="_blank">TARIQ</a> <a href="mailto:contact@itariq.dev">(contact@itariq.dev)</a>