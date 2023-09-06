import * as React from "react";
import Card from "../Card/card";
import "./grid.scss";
import "../../assets/gatsby1.jpg";

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
    function getImage(img) {
      if (img === undefined || img === "") {
        return "../../assets/stock_dog.jpeg";
      }
      return img;
    }
    function formatName(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
      }
    return (
      <div className="row row-cols-4 grid-wrapper">
        {this.props.data.map(function (data, i) {
          return (
            <div className="col">
              <Card
                img={getImage(data.photos[0]?.full)} //data.photos[0].medium
                name={formatName(data.name)}
                breed={data.breeds.primary}
                age={data.age}
                favorited={false}
              ></Card>
            </div>
          );
        })}
        ;
      </div>
    );
  }
}
