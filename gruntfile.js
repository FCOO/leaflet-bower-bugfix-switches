/***********************************************
gruntfile.js for leaflet-bower-bugfix-switches

https://github.com/FCOO/leaflet-bower-bugfix-switches

***********************************************/

module.exports = function(grunt) {

    "use strict";

    var beforeCmd   = "grunt copy:leaflet --gruntfile gruntfile_copy.js";

    //***********************************************
    grunt.initConfig({
        "fcoo_grunt_plugin":{
            default: {
                "haveJavaScript": true,     //true if the packages have js-files
                "haveStyleSheet": true,     //true if the packages have css and/or scss-files
                "haveGhPages"   : false,    //true if there is a branch "gh-pages" used for demos

                //Cmd to be run at the start of prod-task. Multi cmd can be seperated by "&": copy fonts-files to src/fonts and create src/_icomoon.scss
                "beforeProdCmd": beforeCmd,

                //Cmd to be run at the start of dev-task. Multi cmd can be seperated by "&": copy fonts-files to src/fonts and create src/_icomoon.scss
                "beforeDevCmd" : beforeCmd,


                "afterProdCmd" : "",     //Cmd to be run at the end of prod-task
                "afterDevCmd"  : "",     //Cmd to be run at the end of dev-task

                "DEBUG"        : false   //if true different debugging is on and the tempoary files are not deleted
            }
        }
    });


    //****************************************************************
    //Load grunt-packages
    grunt.loadNpmTasks('grunt-fcoo-grunt-plugin');
};