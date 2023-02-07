import React from "react";
import Personality from "../Personality";

const DogBreed = ({ breed }) => {
    return (
        <div className="dog-card">
            <img alt={breed.breed} src={breed.photo}></img>
            <h5> {breed.breed} </h5>
            <h6 className="dog-header"> Origin </h6>
            <p> {breed.origin} </p>
            <h6 className="dog-header"> Popularity level </h6>
            <p> {breed.popularity}% </p>
            <ul className="list-unstyled">
                <h6 className="dog-header"> Personalities </h6>
                    {breed.temperament.map(temp => {
                        return <Personality personality={temp}></Personality>
                    })}
            </ul>
        </div>
    )
}

export default DogBreed;

/*
 {
        "breed": "Chihuahua",
        "origin": "Mexico",
        "popularity": "2",
        "temperament": ["Bold", "Playful", "Sassy", "Lively"],
        "photo": "https://www.akc.org/wp-content/uploads/2017/11/Chihuahua-standing-in-three-quarter-view.jpg"
    },
*/