/***********************************************
gruntfile to copy files from leaflet in node_modules/leaflet/dist to src/
***********************************************/

module.exports = function(grunt) {

    "use strict";

    //***********************************************
    grunt.initConfig({

        //** copy **
        copy: {
            default: {

            },
            leaflet: {
                files: [
                    {expand: false, flatten: true, filter: 'isFile', src: ['node_modules/leaflet/dist/leaflet-src.js'], dest: 'src/00_leaflet-src.js'},
                    {expand: false, flatten: true, filter: 'isFile', src: ['node_modules/leaflet/dist/leaflet.css'], dest: 'src/leaflet.css'},
                    {expand: true,  flatten: true, filter: 'isFile', src: ['node_modules/leaflet/dist/images/*.*'], dest: 'src/images/'}
                ]
            }
        }
    });//end of grunt.initConfig({...


    require('load-grunt-tasks')(grunt);

    //Load grunt-packages
    grunt.loadNpmTasks('grunt-contrib-copy');
};