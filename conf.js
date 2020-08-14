exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    getPageTimeout: 15000,
    specs: ['spec.js'],
    capabilities: {
      browserName: 'chrome'
    }
  }