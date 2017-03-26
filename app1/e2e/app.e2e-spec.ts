import { App1Page } from './app.po';

describe('app1 App', () => {
  let page: App1Page;

  beforeEach(() => {
    page = new App1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
