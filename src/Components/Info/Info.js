import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faStar } from "@fortawesome/free-solid-svg-icons";

const Info = (props) => {
  const { name, image, salary, Nationality, club } = props.info;
  const [click, setClick] = useState(false);
  const handleAddPlayer = props.handleAddPlayer;
  const imgStyle = { width: "150px", height: "280px" };
  return (
    <>
      <div className="card shadow-lg rounded-3">
        <img
          imgStyle={imgStyle}
          src={image}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title text-center">
            {name} <FontAwesomeIcon icon={faStar} />
          </h5>
          <p className="card-text">
            Current Club: <b>{club}</b>
          </p>
          <p className="card-text">
            Salary: <b>${salary}M/year</b>
          </p>
          <p>
            Nationality: <b>{Nationality}</b>
          </p>

          <button
            disabled={click}
            onClick={() => {
              handleAddPlayer(props.info);
              setClick(true);
            }}
            type="button"
            className="btn btn-success text-center"
          >
            <FontAwesomeIcon icon={faPlusCircle} />
            {click ? `✓ Already Added` : `Add Player`}
          </button>
        </div>
      </div>
    </>
  );
};

export default Info;
