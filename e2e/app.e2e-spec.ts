import { GajaraiEnterpriesePage } from './app.po';

describe('gajarai-enterpriese App', function() {
  let page: GajaraiEnterpriesePage;

  beforeEach(() => {
    page = new GajaraiEnterpriesePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
