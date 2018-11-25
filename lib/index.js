const cleanUpPaths = require('./cleanUpPaths');
const isFile = require('./isFile');

const urlGlue = (...paths) => {
	const clearPaths = cleanUpPaths(paths);

	if (isFile(paths[paths.length - 1])) {
		return clearPaths.join('/');
	}

	return `${clearPaths.join('/')}/`;
};

module.exports = urlGlue;
