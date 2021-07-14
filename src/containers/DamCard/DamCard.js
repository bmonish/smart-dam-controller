import React, { useEffect, useState } from "react";
import "./DamCard.css";
import { Button } from "reactstrap";
// import Firebase from "firebase";
import db from "../../firebase";


function DamCard({ damNumber }) {
  const [damDetails, setDamDetails] = useState([]);

  useEffect(() => {
    let ref = db.ref("/");
    ref.on("value", (snapshot) => {
      setDamDetails(snapshot.val());
    });
  }, []);

  if (damNumber === "Dam1") {
    return (
      <div className="damCard">
        <div className="level__container">
          <h4>Centimeters to Fill</h4>
          <h1 className="level">{damDetails.Dam1?.currLevel}</h1>
        </div>
        <div className="level__container">
          <h4>Max Safe Level</h4>
          <h1 className="level">98%</h1>
        </div>
        <div className="gateControls">
          <div className="getStatus">
            <span className="mr-2">Gate: </span>
            {damDetails.Dam1?.gateState ? (
              <Button
                onClick={() => db.ref("/Dam1/gateState").set(false)}
                color="danger"
              >
                Close
              </Button>
            ) : (
              <Button
                onClick={() => db.ref("/Dam1/gateState").set(true)}
                color="success"
              >
                Open
              </Button>
            )}
          </div>
          <div className="text__levels">
            <span>Water Level: 2200</span>
            <span>Max. Water Level: 3000</span>
            <span>Dam Location: {damDetails.Dam1?.location}</span>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="damCard">
      <div className="level__container">
        <h4>Centimeters to Fill</h4>
        <h1 className="level">{damDetails.Dam2?.currLevel}</h1>
      </div>
      <div className="level__container">
        <h4>Max Safe Level</h4>
        <h1 className="level">88%</h1>
      </div>
    <div className="gateControls">
        <div className="getStatus">
          <span className="mr-2">Gate: </span>
          {damDetails.Dam2?.gateState ? (
            <Button
              onClick={() => db.ref("/Dam2/gateState").set(false)}
              color="danger"
            >
              Close
            </Button>
          ) : (
            <Button
              onClick={() => db.ref("/Dam2/gateState").set(true)}
              color="success"
            >
              Open
            </Button>
          )}
        </div>
        <div className="text__levels">
          <span>Water Level: 5498</span>
          <span>Max. Water Level: 6000</span>
          <span>Dam Location: {damDetails.Dam2?.location}</span>
        </div>
    </div>
</div>
  )
  }
}

export default DamCard;
