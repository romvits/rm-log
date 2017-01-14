module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! \n <%= pkg.name %>\n copyright by Roman Marlovits\n <%= grunt.template.today("yyyy-mm-dd") %>\n*/\n'
			},

			js: {
				files: {
					'index.js': [ 'src/index.js' ]
				}
			},
		},
	});

	// rename
	//grunt.loadNpmTasks('grunt-contrib-rename');

	// Clean build folder
	//grunt.loadNpmTasks('grunt-contrib-clean');

	// copy required libs like bower_components and bootstrap
	//grunt.loadNpmTasks('grunt-contrib-copy');

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Default task(s).
	grunt.registerTask('default', [ 'uglify' ]);

};