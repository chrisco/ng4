import { Ng4CompleteGuidePage } from './app.po';

describe('ng4-complete-guide App', function() {
  let page: Ng4CompleteGuidePage;

  beforeEach(() => {
    page = new Ng4CompleteGuidePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
