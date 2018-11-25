const FILENAME_REGEX = /^[\w,\s-]+\.[A-Za-z]{3,4}$/;

/**
 * check whether this path is a filename
 */
module.exports = (path) => FILENAME_REGEX.test(path);
