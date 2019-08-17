var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        // 'test_protractor_spec.js',
        // 'test_signup_simple_spec.js',
            // 'test_signup_spec.js',
            // 'test_select_spec.js'
            // 'alerts.spec.js'
            'date_picker_spec.js'
        ],

    onPrepare: function(){
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: './tests/reports/'
        }))
    },

    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
          'args': ['show-fps-counter=true']
        }
      }
      
  }
  