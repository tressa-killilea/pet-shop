import * as React from "react";
import Pagination from "../../components/Pagination/pagination";
import Grid from "../../components/Grid/grid";
import "./dogs.scss";

export default class Dogs extends React.Component {
  state = {
    dogs_data: [],
    pagination: {
      current_page: 1,
      total_pages: 1,
    },
  };
  token = "";

  componentDidMount() {
    const CLIENT_ID = "MIQ9FJUmeV6VyvkR69xtxvoKOeEZTDLbplRKVwe5exYroEmqtV";
    const CLIENT_SECRET = "Ux5gEuP9OW8aStsfc7oQE5vJN9UYVlD6339CB3IF";

    fetch("https://api.petfinder.com/v2/oauth2/token", {
      method: "POST",
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
      headers: { "Content-type": "application/x-www-form-urlencoded" },
    })
      .then((response) => response.json())
      .then((data) => {
        this.token = data.access_token;
        this.getDogs(1);
      });
  }

  getDogs(page_num) {
    fetch(`https://api.petfinder.com/v2/animals?type=dog&page=${page_num}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${this.token}` },
    })
      .then((response) => response.json())
      .then((data) =>{
        this.setState({ dogs_data: data.animals, pagination: data.pagination })
      }
      );
  }

  onPageChange = (page_num) => {
    this.getDogs(page_num);
  };

  render() {
    return (
      <div className="dogs_page">
        <h2>Dogs</h2>
        <div className="dog_grid">
          <Grid data={this.state.dogs_data}></Grid>
          <Pagination
            current_page={this.state.pagination.current_page}
            total_pages={this.state.pagination.total_pages}
            callback={this.onPageChange}
          ></Pagination>
        </div>
      </div>
    );
  }
}

// Pagination
// Loading screen
// Filter
// Style header
// IMG url to work