var sass = require('node-sass');

module.exports = function(grunt){
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
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
        copy: {
            fonts: {
                expand: true,
                flatten: true,
                filter:'isFile',
                src: ['src/fonts/**'],
                dest:'dist/fonts'
            }
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
        ngtemplates: {
            app: {
                cwd: 'src/app',
                src: 'views/**/*.html',
                dest:'src/app.templates.js',
                options: {
                    htmlmin: '<%= htmlmin.options %>'
                }
            }
        },
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
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
            distLibs: {
                src: [],
                dest: 'dist/css/libs.css'
            },
            dist: {
                src: 'src/css/main.css',
                dest: 'dist/css/main.min.css'
            },
            releaseLibs: {
                src: [],
                dest: 'release/css/libs.css'
            },
            release: {
                src: 'src/css/main.css',
                dest: 'release/css/main.min.css'
            }
        },
        uglify: {
            options: {
                compress: true,
                removeComments: true,
                mangle: {
                    reserved: [
                        '$stateProvider',
                        '$urlRouterProvider',
                        'dateFactory'
                    ]
                }
            },
            distLibs: {
                src: [
                    'node_modules/angular/angular.js',
                    'node_modules/angular-animate/angular-animate.js',
                    'node_modules/angular-touch/angular-touch.js',
                    'node_modules/@uirouter/angularjs/release/angular-ui-router.js',
                    'node_modules/@fortawesome/fontawesome-free/js/all.js'
                ],
                dest: 'dist/js/libs.js'
            },
            dist: {
                src: ['src/**/*.js'],
                dest: 'dist/app.js'
            },
            releaseLibs: {
                src: [
                    'node_modules/angular/angular.js',
                    'node_modules/angular-animate/angular-animate.js',
                    'node_modules/angular-touch/angular-touch.js',
                    'node_modules/@uirouter/angularjs/release/angular-ui-router.js',
                    'node_modules/@fortawesome/fontawesome-free/js/all.js'
                ],
                dest: 'release/js/libs.js'
            },
            release: {
                src: ['src/**/*.js'],
                dest: 'release/app.js'
            }
        },
        imagemin: {
            dist: {
                optimizationLevel: 3,
                progressive: true,
                files: [{
                    expand: true,
                    cwd: 'src/img',
                    src: '**/*.{png,jpg,gif}',
                    dest:'dist/img'
                }]
            },
            release: {
                optimizationLevel: 3,
                progressive: true,
                files: [{
                    expand: true,
                    cwd: 'src/img',
                    src: '**/*.{png,jpg,gif}',
                    dest:'release/img'
                }]
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
                    'ngtemplates',
                    'stylelint:sass',
                    'sass:dist',
                    'stylelint:css',
                    'cssmin:dist',
                    'uglify:dist',
                    'express',
                    'open',
                    'watch'
                ]
            },
            html: {
                files: ['src/**/*.html'],
                tasks: [
                    'htmlhint',
                    'htmlmin',
                    'ngtemplates'
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
        'copy',
        'htmlmin',
        'ngtemplates',
        'stylelint:sass',
        'sass:dist',
        'stylelint:css',
        'cssmin:distLibs',
        'cssmin:dist',
        'uglify:distLibs',
        'uglify:dist',
        'imagemin',
        'express',
        'open',
        'watch'
    ]);

    grunt.registerTask('release', [
        'htmlhint',
        'jshint',
        'copy',
        'htmlmin',
        'ngtemplates',
        'stylelint:sass',
        'sass:dist',
        'stylelint:css',
        'cssmin:releaseLibs',
        'cssmin:release',
        'uglify:releaseLibs',
        'uglify:release',
        'imagemin',
    ]);
};