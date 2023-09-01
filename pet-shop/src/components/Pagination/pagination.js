import * as React from "react";
import "./pagination.scss";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

export default class Pagination extends React.Component {
  state = {
    current_page: this.props.current_page,
  };
  ary = this.getDataAry(this.props.total_pages);

  onPageClick(selected_page) {
    this.setState({ current_page: selected_page });
    // also send this data back to parent component
  }
  
  onArrowClick(direction) {
    if (
      direction === "front" &&
      (this.state.current_page != this.props.total_pages &&
        this.state.current_page != 10)
    ) {
      this.setState({ current_page: this.state.current_page + 1 });
    } else if (direction === "back" && this.state.current_page != 1) {
      this.setState({ current_page: this.state.current_page - 1 });
    }
  }

  getDataAry(num) {
    if (num > 10) {
      num = 10;
    }
    var temp = [];
    for (var x = 1; x <= num; x++) {
      temp.push(x);
    }
    return temp;
  }

  render() {
    return (
      <div className="pagination">
        <button onClick={() => this.onArrowClick("back")}>
          <NavigateBeforeIcon></NavigateBeforeIcon>
        </button>
        {this.ary.map((i) => (
          <button
            onClick={() => this.onPageClick(i)}
            className={this.state.current_page === i ? "selected" : ""}
          >
            {i}
          </button>
        ))}
        {this.props.total_pages > 10 && <div className="elipses">...</div>}
        {this.props.total_pages > 10 && (
          <button
            onClick={() => this.onPageClick(this.props.total_pages)}
            className={
              this.state.current_page === this.props.total_pages
                ? "selected"
                : ""
            }
          >
            {this.props.total_pages}
          </button>
        )}
        <button onClick={() => this.onArrowClick("front")}>
          <NavigateNextIcon></NavigateNextIcon>
        </button>
      </div>
    );
  }
}
