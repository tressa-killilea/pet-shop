import * as React from "react";
import Card from "../Card/card";
import "./grid.scss";

export default class Grid extends React.Component {
  render() {
    console.log("GRID RENDER: "+this.props.data[0]?.name);
    const static_img = "https://media.istockphoto.com/id/1339851357/vector/dog-icon-vector-isolated-funny-puppy-head-pictogram-on-white-background.jpg?s=612x612&w=0&k=20&c=mOqd-O-dtpKjUhR52McMA8ifM-AY8H3BmJvJtgtB_ZE=";
    function getImage(img) {
      if (img === undefined || img === "") {
        return static_img;
      }
      return img;
    }
    function formatName(string) {
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
    return (
      <div className="row col-4-4 col-sm-6 grid-wrapper">
        {this.props.data.map(function (data, i) {
          return (
            <div className="col">
              <Card
                img={getImage(data.photos[0]?.full)} 
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
