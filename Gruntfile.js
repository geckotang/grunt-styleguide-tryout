module.exports = function(grunt){
	var matchde = require('matchdep');

	// load all grunt-plugin tasks
	matchde.filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// init config
	var config = {
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
			scss: {
				files: 'scss/**/*.scss',
				tasks: ['styleguide']
			}
		}
	};

	// init 
	grunt.initConfig(config);

	// resiter tasks
	grunt.registerTask('default', ['regarde']);
	grunt.registerTask('build', ['styleguide']);
};

