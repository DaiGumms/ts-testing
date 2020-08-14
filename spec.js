describe('Protractor Demo App', function() {

    var EC = protractor.ExpectedConditions;

    var username = element.all(by.deepCss('username'));
    var password = element.all(by.deepCss('password'));
    var loginButton = element.all(by.id('loginButton'));

    var dashboard = element.all(by.tagName('evolution-dashboard'));
  
    function login(a, b) {

      username.sendKeys(a);
      console.log('Entered Username: '+ a);
      password.sendKeys(b);
      console.log('Entered Password: ' + b);
      loginButton.click();
      console.log('Button Clicked');

    }
  
    beforeEach(function() {

      browser.waitForAngularEnabled(false);
      browser.get('https://evoweb4.evolutionjobs.local/dev/');

      //browser.wait(EC.presenceOf(username), 5000, 'Element taking too long to appear.')

    });
  
    it('should log in', function() {

      login('MONKT', 'redlorry');

      expect(dashboard.isPresent()).toBe(true);
      
    });

    it('username be a count of 1', function() {
      
      expect(username.count()).toEqual(1);

    });

    it('password be a count of 1', function() {
      
      expect(password.count()).toEqual(1);

    });

  });