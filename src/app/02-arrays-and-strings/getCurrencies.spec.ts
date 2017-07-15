import { getCurrencies } from './getCurrencies';

describe('getCurrencies', () => {
  it('It should return supported currencies', () => {
    const result = getCurrencies();
    expect(result).toContain('USD');
    expect(result).toContain('AUD');
    expect(result).toContain('EUR');
  });
});
