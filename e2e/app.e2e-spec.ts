import { DHISPage } from './app.po';

describe('dhis App', () => {
  let page: DHISPage;

  beforeEach(() => {
    page = new DHISPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
