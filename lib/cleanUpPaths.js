/**
 * remove the leading / ending slash of each path
 */
module.exports = (paths) => paths.map(
	(path) => path.replace(/^\//, '').replace(/\/$/, ''),
);
