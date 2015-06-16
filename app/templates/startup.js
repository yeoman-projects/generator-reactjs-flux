'use strict';

module.exports.tasks = {
    /**
     * Compass compile task. Compiles everything under the app/sass
     * directory into a single file in dist
     */
    compass: {
        dist: {
            options: {
                cssDir: 'app/dist',
                sassDir: 'app/sass',
                environment: 'production'
            }
        }
    },

    /**
     * File watcher for Sass compile step. Automatically rebuilds sass on change.
     */
    watch: {
        scripts: {
            files: ['app/sass/**/*.scss'],
            tasks: ['compass']
        }
    },

    shell: {
        cleanCompiledDirectory: {
            command: 'rm -rf app/compiled'
        },
        init: {
            command: './init.sh'
        },
        jsxCompile: {
            command: 'jsx app/js/ app/compiled/'
        },
        jsxWatcher: {
            command: 'jsx --watch app/js/ app/compiled/',
            options: {
                async: false
            }
        }
    }
};
