import "./card.scss";
import React from "react";

class Card extends React.Component{

    /*
pet = {
    img: url,
    name: "",
    breed: "",
    age: "",
    favorited: false
}
    */

    pet = {
        img: "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg",
        name: "Neva",
        breed: "Great Pyrenees",
        age: "Puppy",
        favorited: false
    }

    render(){
        return <div className="card_wrapper">
            <img src={this.pet.img} className="card_image"></img>
            <div className="pet_name">{this.pet.name}</div>
            <div className="pet_stat">{`${this.pet.age} - ${this.pet.breed}`}</div>
        </div>
    }
}

export default Card;