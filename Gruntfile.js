module.exports = function(grunt) {

    require('jit-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            before: ['dist'],
            after: ['tmp']
        },


        less: {
            'theme': {
                src: 'src/less/style.less',
                dest: 'dist/css/style.css'
            }

        },

        svg2string: {
            elements: {
                options: {
                    wrapLines: false
                },
                files: {
                    'dist/js/set-icons.js': [
                        'src/icons/icon-set.svg'
                    ]
                }
            }
        },

        copy: {
            'theme': {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: 'src',
                        src: ['fonts/*.*'],
                        dest: 'dist'
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
                src: 'src/js/vendor.js',
                dest: 'dist/js/vendor.js'
            },
            'theme': {
                src: 'src/js/theme.js',
                dest: 'dist/js/theme.js'
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
            watch: ['clean:before', 'preprocess', 'less', 'copy', 'group_css_media_queries', 'css_clean', 'css_purge',  'cssmin', 'clean:after'],
            dist: ['clean:before', 'svg2string',  'preprocess', 'less', 'copy', 'group_css_media_queries', 'css_clean', 'css_purge', 'cssmin', 'clean:after']
        }
    });

    grunt.registerMultiTask('build', function(){
        console.log('Run tasks for build target: ' + this.target);
        grunt.task.run(this.data)
    });

    grunt.registerTask('default', ['build:dist']);
};