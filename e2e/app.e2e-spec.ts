import { IdeasPage } from './app.po';

describe('ideas App', () => {
  let page: IdeasPage;

  beforeEach(() => {
    page = new IdeasPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
