import { RouteExperimentPage } from './app.po';

describe('route-experiment App', function() {
  let page: RouteExperimentPage;

  beforeEach(() => {
    page = new RouteExperimentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
