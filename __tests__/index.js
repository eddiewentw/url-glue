const urlGlue = require('../lib');

test('connect each path parameters to become a url', () => {
	expect(
		urlGlue('https://www.example.com', 'foo'),
	).toBe('https://www.example.com/foo/');
});

describe('connect paths with slashes', () => {
	test('no path starts / ends with slashes', () => {
		expect(
			urlGlue('https://www.example.com', 'foo', 'bar'),
		).toBe('https://www.example.com/foo/bar/');
	});

	test('each path starts / ends with slashes', () => {
		expect(
			urlGlue('https://www.example.com/', '/foo/', '/bar/'),
		).toBe('https://www.example.com/foo/bar/');
	});

	describe('the last path', () => {
		test('should end with a slash, if it\'s a folder', () => {
			expect(
				urlGlue('https://www.example.com', 'foo/'),
			).toBe('https://www.example.com/foo/');
		});

		test('should not end with a slash, if it\'s a file', () => {
			expect(
				urlGlue('https://www.example.com', 'index.html'),
			).toBe('https://www.example.com/index.html');
		});
	});
});
