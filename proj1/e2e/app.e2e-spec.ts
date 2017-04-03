import { Proj1Page } from './app.po';

describe('proj1 App', () => {
  let page: Proj1Page;

  beforeEach(() => {
    page = new Proj1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
