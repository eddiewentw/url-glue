/* @flow */

/**
 * remove the leading / ending slash of each path
 */
module.exports = (paths: Array<string>): Array<string> => paths.map(
	(path) => path.replace(/^\//, '').replace(/\/$/, ''),
);
