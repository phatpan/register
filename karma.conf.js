//jshint strict: false
module.exports = function(config) {
    config.set({

        basePath: './app',

        files: [
            'app/libs/angular/angular.min.js',
            'app/libs/angular/angular-route.min.js',
            'controller/**/*.js',
            'service/**/*.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ]

    });
};