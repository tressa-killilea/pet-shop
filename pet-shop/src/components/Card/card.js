import "./card.scss";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

class Card extends React.Component {
  state = {
    favorited: this.props.favorited,
  };

  favoriteClick = () => {
    this.setState({ favorited: !this.state.favorited });
  };
  truncate(str, n) {
    return str.length > n ? str.slice(0, n - 1) + "..." : str;
  }
  render() {
    return (
      <div className="card_wrapper">
        <img src={this.props.img} className="card_image"></img>
        <div className="pet_name">{this.truncate(this.props.name, 10)}</div>
        <div className="pet_stat">{this.truncate(`${this.props.age} - ${this.props.breed}`, 24)}</div>
        {!this.state.favorited && (
          <button className="fav_icon" onClick={this.favoriteClick}>
            <FavoriteBorderOutlinedIcon className="favorite"></FavoriteBorderOutlinedIcon>
          </button>
        )}
        {this.state.favorited && (
          <button className="fav_icon" onClick={this.favoriteClick}>
            <FavoriteIcon className="favorite"></FavoriteIcon>
          </button>
        )}
      </div>
    );
  }
}

export default Card;
