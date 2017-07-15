import { greet } from './greet';

describe('greet', () => {
  it('It should contain give name', () => {
    expect(greet('Assad')).toContain('Assad');
  });
});
