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
		watch: {
			scss: {
				files: 'scss/**/*.scss',
				tasks: ['styleguide']
			}
		}
	};

	// init 
	grunt.initConfig(config);

	grunt.event.on('watch', function(action, filepath) {
		console.log(action, filepath);
	});

	// resiter tasks
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('build', ['styleguide']);
};
