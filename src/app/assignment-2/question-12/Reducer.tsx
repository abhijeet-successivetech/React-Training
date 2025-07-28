export type VoteOption = "OptionA" | "OptionB" | "OptionC";

export type VoteState = {
  [key in VoteOption]: number;
};

export type VoteAction = {
  type: "VOTE";
  option: VoteOption;
};

export const initialVotes: VoteState = {
  OptionA: 0,
  OptionB: 0,
  OptionC: 0,
};

export function voteReducer(state: VoteState, action: VoteAction): VoteState {
  switch (action.type) {
    case "VOTE":
      return {
        ...state,
        [action.option]: state[action.option] + 1,
      };
    default:
      return state;
  }
}
