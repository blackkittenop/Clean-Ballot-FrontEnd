import React from "react";
import Manifesto from "./Manifesto";
import { useState } from "react";

export default function Votingcard(props) {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
      <div className="votingCard">
        <div
          className="m-5 d-flex justify-content-center"
          style={{ margin: "20px", padding: "30px" }}
        >
          <div className="row my-2">
            {props.votingCandidate.map((votingcandidate) => (
              <div className="col-lg-4" key={votingcandidate.id}>
                <div className="card mx-10 my-10">
                  <img
                    src={votingcandidate.candidateImg}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h3 className="card-title">{votingcandidate.name}</h3>
                    <span>
                      <h6 className="votingCard">
                        Runnung to Be: Prime Minister
                      </h6>
                    </span>
                    <p className="card-text">
                      <p className="votingCard">
                        Party : {votingcandidate.party}
                      </p>
                    </p>
                    <button
                      onClick={() => setButtonPopup(true)}
                      className="btn btn-primary mx-2"
                    >
                      View Manifesto
                    </button>
                    <Manifesto
                      key={votingcandidate.id}
                      Data={votingcandidate.Manifesto}
                      trigger={buttonPopup}
                      setTrigger={setButtonPopup}
                    >
                      {console.log("")}
                    </Manifesto>
                    <button className="btn btn-danger mx-2">Vote</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
