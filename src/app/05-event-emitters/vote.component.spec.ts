import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('It should raise the voteChanged event when upvoted', () => {
    let totalVote = null;

    component.voteChanged.subscribe(tv => totalVote = tv);

    component.upVote();

    expect(totalVote).toBe(1);
  });
});
