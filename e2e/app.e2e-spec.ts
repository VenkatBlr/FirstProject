import { AngProject2Page } from './app.po';

describe('ang-project2 App', () => {
  let page: AngProject2Page;

  beforeEach(() => {
    page = new AngProject2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
