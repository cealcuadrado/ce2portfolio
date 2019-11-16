module.exports = function(grunt){
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        htmlhint: {
            all: ['src/**/*.html']
        },
        stylelint: {
            options: {
                configFile: 'etc/.stylelintrc',
                failOnError: true 
            },
            sass: {
                all: ['src/**/*.scss']
            },
            css: {
                all: ['src/**/*.css']
            }
        },
        jshint: {
            all: ['src/**/*.js']
        },
        htmlmin: {
            options: {
                compress: true,
                collapseBooleanAttributes: true,
                collapseWhitespace: true,
                /* removeAttributeQuotes: true, */
                removeComments: true,
                removeEmptyAttributes: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true
            },
            dist: {
                src: 'src/index.html',
                dest: 'dist/index.html'
            }
        },
        sass: {
            options: {
                style: 'expanded'
            },
            dist: {
                src: ['src/sass/main.scss'],
                dest:'src/css/main.css'
            }
        },
        cssmin: {
            options: {
                compress: true,
                removeComments: true
            },
            libs: {
                src: [],
                dest: 'dist/css/libs.css'
            },
            dist: {
                src: 'src/css/main.css',
                dest: 'dist/css/main.min.css'
            }
        },
        uglify: {
            options: {
                compress: true,
                removeComments: true
            },
            libs: {
                src: [],
                dest: 'dist/js/libs.js'
            },
            src: {
                src: [],
                dest: 'dist/app.js'
            }
        },
        express: {
            all: {
                options: {
                    port: 9001,
                    hostname: '0.0.0.0',
                    bases: ['dist'],
                    livereload: true
                }
            }
        },
        open: {
            all: {
                path: 'http://localhost:<%= express.all.options.port %>'
            }
        },
        watch: {
            options: {
                livereload: true
            },
            gruntfile: {
                files: [
                    'Gruntfile.js'
                ],
                tasks: [
                    'htmlhint',
                    'jshint',
                    'htmlmin',
                    'stylelint:sass',
                    'sass:dist',
                    'stylelint:css',
                    'cssmin:dist',
                    'express',
                    'open',
                    'watch'
                ]
            },
            html: {
                files: ['src/**/*.html'],
                tasks: [
                    'htmlhint',
                    'htmlmin'
                ]
            },
            sass: {
                files: ['src/**/*.scss'],
                tasks: [
                    'stylelint:sass',
                    'sass:dist',
                    'stylelint:css',
                    'cssmin:dist'
                ]
            },
            js: {
                files: ['src/**/*.js'],
                tasks: [
                    'jshint',
                    'uglify:dist'
                ]
            }
        }
    });

    grunt.registerTask('serve', [
        'htmlhint',
        'jshint',
        'htmlmin',
        'stylelint:sass',
        'sass:dist',
        'stylelint:css',
        'cssmin:dist',
        'express',
        'open',
        'watch'
    ]);
};