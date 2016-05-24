'use strict';

module.exports = function(grunt){

    var modules = [
        'grunt-contrib-jshint',
        'grunt-contrib-uglify',
        'grunt-contrib-sass',
        'grunt-cssnano',
        'grunt-postcss',
        'grunt-contrib-watch'
    ];

    modules.forEach(function(task){
        grunt.loadNpmTasks(task);
    });

    require('time-grunt')(grunt);

     grunt.initConfig({
         jshint:{
             all: ['js/modules/*.js']
         },
         uglify: {
             my_target: {
                 options:{
                     preserveComments: 'some',
                     mangle: false,
                     sourceMap: true
                 },
                 files: {
                    'js/main.js': [
                        'js/modules/*.js'
                    ]
                 }
             }
         },
         sass:{
             dist: {
                 options: {
                     style: 'expanded',
                     sourcemap: 'none'
                 },
                 files: {
                     'css/style-expanded.css': 'scss/main.scss'
                 }
             }
         },
         postcss: {
             options: {
                 map: {
                     inline: false, // save all sourcemaps as separate files...
                     annotation: 'css' // ...to the specified directory
                 },

                 processors: [
                     require('pixrem')(), // add fallbacks for rem units
                     require('autoprefixer')({
                         browsers: ['not ie < 8']
                     })
                 ]
             },
             dist: {
                 src: 'css/style-expanded.css'
             }
         },
         cssnano: {
             options: {
                 sourcemap: false
             },
             dist: {
                 files: {
                     'css/style-min.css': 'css/style-expanded.css'
                 }
             }
         },
         watch: {
             scripts: {
                 files: ['scss/*.scss', 'scss/*/*.scss' ],
                 tasks: ['sass', 'postcss:dist', 'cssnano'],
                 options: {
                     livereload: true,
                     spawn: false
                 }
             }
         }
     });


    grunt.registerTask('js', ['jshint', 'uglify']);
    grunt.registerTask('css', ['sass', 'postcss:dist', 'cssnano']);
    grunt.registerTask('default', ['sass', 'postcss:dist', 'cssnano', 'watch']);

};
