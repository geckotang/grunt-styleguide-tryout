module.exports = function(grunt){
	var matchde = require('matchdep');

	// load all grunt-plugin tasks
	matchde.filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// init config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		styleguide: {
			styledocco: {
				options: {
					framework: {
						name: 'styledocco'
					},
					name: 'Project Name'
				},
				files: {
					'docs': 'scss/**/*.scss'
				}
			}
		},
		regarde: {
			css: {
				files: 'scss/**/*.scss',
				tasks: ['styleguide']
			}
		}
	});

	// resiter tasks
	grunt.registerTask('default', ['regarde']);
	grunt.registerTask('build', ['styleguide']);
};

