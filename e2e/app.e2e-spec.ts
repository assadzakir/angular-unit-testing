import { AngularUnitTestingPage } from './app.po';

describe('angular-unit-testing App', () => {
  let page: AngularUnitTestingPage;

  beforeEach(() => {
    page = new AngularUnitTestingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
