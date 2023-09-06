import * as React from "react";
import Card from "../Card/card";
import './grid.scss';

export default class Grid extends React.Component {
  testData = [
    {
      img: "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg",
      name: "Neva",
      breed: "Great Pyrenees",
      age: "Puppy",
      favorited: false,
    },
    {
      img: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59539253/1/?bust=1693372943&width=1080",
      name: "Buffy",
      breed: "Labrador Retriever",
      age: "Adult",
      favorited: false,
    },
    {
      img: "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg",
      name: "Neva",
      breed: "Great Pyrenees",
      age: "Puppy",
      favorited: false,
    },
    {
      img: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59539253/1/?bust=1693372943&width=1080",
      name: "Buffy",
      breed: "Labrador Retriever",
      age: "Adult",
      favorited: false,
    },
    {
      img: "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg",
      name: "Neva",
      breed: "Great Pyrenees",
      age: "Puppy",
      favorited: false,
    },
    {
      img: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59539253/1/?bust=1693372943&width=1080",
      name: "Buffy",
      breed: "Labrador Retriever",
      age: "Adult",
      favorited: false,
    },
    {
      img: "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg",
      name: "Neva",
      breed: "Great Pyrenees",
      age: "Puppy",
      favorited: false,
    },
    {
      img: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59539253/1/?bust=1693372943&width=1080",
      name: "Buffy",
      breed: "Labrador Retriever",
      age: "Adult",
      favorited: false,
    },
    {
      img: "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg",
      name: "Neva",
      breed: "Great Pyrenees",
      age: "Puppy",
      favorited: false,
    },
    {
      img: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59539253/1/?bust=1693372943&width=1080",
      name: "Buffy",
      breed: "Labrador Retriever",
      age: "Adult",
      favorited: false,
    },
    {
      img: "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg",
      name: "Neva",
      breed: "Great Pyrenees",
      age: "Puppy",
      favorited: false,
    },
    {
      img: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59539253/1/?bust=1693372943&width=1080",
      name: "Buffy",
      breed: "Labrador Retriever",
      age: "Adult",
      favorited: false,
    },
  ];

  render() {
    return (
      <div className="row row-cols-4 grid-wrapper">
        {this.testData.map(function (data, i) {
          return (
            <div className="col">
              <Card
                img={data.img}
                name={data.name}
                breed={data.breed}
                age={data.age}
                favorited={data.favorited}
              ></Card>
            </div>
          );
        })}
        ;
      </div>
    );
  }
}

//<div class='col-4 col-sm-2'>1</div>
