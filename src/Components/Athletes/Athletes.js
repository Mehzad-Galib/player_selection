import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faFunnelDollar,
} from "@fortawesome/free-solid-svg-icons";

const Athletes = (props) => {
  const athletes = props.athletes;
  let total = 0;
  athletes.forEach((player) => {
    total = total + player.salary;
  });
  return (
    <>
      <div className='col-md-12'>
        <h3>Player Selected: {athletes.length}</h3>
        <h4>
          Total Expanse: <FontAwesomeIcon icon={faFunnelDollar} /> {total} M
        </h4>
        {athletes.map((footballer) => (
          <>
            <h5>
              Player Name: <b>{footballer.name}</b> - Player Wage:
              <b>
                <FontAwesomeIcon icon={faDollarSign} />
                {footballer.salary}M
              </b>
            </h5>
          </>
        ))}
        
      </div>
    </>
  );
};

export default Athletes;
