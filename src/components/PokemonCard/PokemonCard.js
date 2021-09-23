import React from "react";

export const PokemonCard = ({ name, image, types, id }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          {id} - {name}
        </h5>
        <ul className="card-text">
          {
            types.map(tipo => <li className="pokemon-type" key={tipo.slot}>{tipo.type.name}</li>)
          }
        </ul>
        <a href="#.." className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};
