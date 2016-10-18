"use strict";

module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);

  grunt.initConfig({

    sass: {
      style: {
        files: {
          "css/style.css": "sass/style.scss"
        }
      }
    },

    browserSync: {
      server: {
        bsFiles: {
          src: ["*.html", "css/*.css"]
        },
        options: {
          server: ".",
          watchTask: true
        }
      }
    },

    watch: {
      html: {
        files: ["*.html"]
      },
      style: {
        files: ["sass/**/*.{scss,sass}"],
        tasks: ["sass"]
      }
    }
  });

  grunt.registerTask("serve", ["browserSync", "watch"]);
  grunt.registerTask("build", [
    "sass",
  ]);
};
