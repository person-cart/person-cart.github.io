module.exports = function(grunt) {

    require('jit-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            before: ['dist'],
            after: ['tmp']
        },

        //TODO @see https://github.com/lesshint/lesshint/blob/master/lib/linters/README.md
        //TODO Use .lesshintrc file for options
        // lesshint: {
        //     options: {
        //         lesshintrc: true
        //     },
        //     'theme': {
        //         src: 'src/**/*.less',
        //     }
        // },

        less: {
            'theme': {
                src: 'src/less/style.less',
                dest: 'dist/css/style.css'
            }
            // 'theme-fonts': {
            //     src: 'app/style/less/fonts.less',
            //     dest: 'web/dist/css/fonts.css'
            // }
        },

        copy: {
            'vendor': {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: 'bower_components/bootstrap/dist',
                        src: ['fonts/*.*'],
                        dest: 'web/dist'
                    },
                    {
                        expand: true,
                        dot: true,
                        cwd: 'bower_components/font-awesome/fonts',
                        src: ['*.*'],
                        dest: 'web/dist/fonts'
                    }
                ]
            },
            'theme': {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: 'src',
                        src: ['fonts/*.*'],
                        dest: 'web/dist'
                    }
                ]
            }
        },

        cssmin: {
            options: {
                compatibility: 'ie8',
                keepSpecialComments: '0',
                advanced: false
            },
            'theme': {
                src: 'dist/css/style.css',
                dest: 'dist/css/style.css'
            }
            // 'theme-fonts': {
            //     src: 'web/dist/css/fonts.css',
            //     dest: 'web/dist/css/fonts.css'
            // }
        },

        css_purge: {
            options: {
                "verbose": false,
                "no_duplicate_property": true
            },
            files: {
                src: 'dist/css/style.css',
                'dest': 'dist/css/style.css'
            }
        },

        css_clean: {
            options: {},
            files: {
                src: 'dist/css/style.css',
                'dest': 'dist/css/style.css'
            }
        },

        group_css_media_queries: {
            options: {},
            files: {
                'dist/css/style.css': 'dist/css/style.css'
            }
        },


        preprocess: {
            'vendor': {
                src: 'app/js/vendor.js',
                dest: 'web/dist/js/vendor.js'
            },
            'theme': {
                src: 'app/js/theme.js',
                dest: 'web/dist/js/theme.js'
            }
        },

        watch: {
            build : {
                options: {
                    spawn: false
                },
                files : ['Gruntfile.js', 'src/**/*.{less,js}'],
                tasks : ['build:watch']
            }
        },

        build: {
            watch: ['clean:before', /*'lesshint',*/ /*'preprocess',*/ 'less', /*'copy',*/ 'group_css_media_queries', 'css_clean', 'css_purge',  'cssmin', 'clean:after'],
            dist: ['clean:before', /*'lesshint',*/ /*'preprocess',*/ 'less', /*'copy',*/ 'group_css_media_queries', 'css_clean', 'css_purge', 'cssmin', 'clean:after']
        }
    });

    grunt.registerMultiTask('build', function(){
        console.log('Run tasks for build target: ' + this.target);
        grunt.task.run(this.data)
    });

    grunt.registerTask('default', ['build:dist']);
};