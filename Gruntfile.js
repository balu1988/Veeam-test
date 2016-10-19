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

    postcss: {
      style: {
        options: {
          processors: [
            require("autoprefixer")({browsers: [
              "last 1 version",
              "last 2 Chrome versions",
              "last 2 Firefox versions",
              "last 2 Opera versions",
              "last 2 Edge versions",
              "IE 11",
              "IE 10"
            ]}),
            require("css-mqpacker")({
              sort: true
            })
          ]
        },
        src: "css/*.css"
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
    "postcss"
  ]);
};
