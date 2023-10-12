import React from "react";
import "../Styles/Result.css";
import { Link } from "react-router-dom";
export default function ViewResult(props) {
  return (
    <>
      <h1 className="result">The Results are out !!</h1>
      <p className="result">
        click here to check winner <Link to="/winner">check winner</Link>
      </p>
      <div className="m-5 row my-2">
        {props.votingCandidate.map((candidate) => (
          <div className="col-lg-4">
            <div className="container">
              <div class="card" style={{ width: "18rem" }}>
                <img
                  src={candidate.candidateImg}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <p class="card-text">Name : {candidate.name}</p>
                  <p class="card-text">Total Votes : {candidate.votingCount}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
