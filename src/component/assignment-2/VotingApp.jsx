"use client";
import React, { useReducer } from "react";
import {
  initialVotes,
  voteReducer,
} from "../../app/assignment-2/question-12/Reducer";

const VotingApp = () => {
  const [votes, dispatch] = useReducer(voteReducer, initialVotes);

  return (
    <div className="container-center">
      <h2>Vote for your favorite option:</h2>
      {Object.keys(votes).map((option) => (
        <div key={option} style={{ marginBottom: "10px" }}>
          <button onClick={() => dispatch({ type: "VOTE", option })}>
            Vote for {option}
          </button>
          <span style={{ marginLeft: "10px" }}>Votes: {votes[option]}</span>
        </div>
      ))}
    </div>
  );
};

export default VotingApp;
