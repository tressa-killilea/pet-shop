import * as React from "react";
import Pagination from "../../components/Pagination/pagination";
import Grid from "../../components/Grid/grid";
import './dogs.scss';

export default class Dogs extends React.Component{
    onPageChange = (page_num) => {
console.log("change page: "+page_num);
    }
    
    render(){
        return <div className="dogs_page">
            <Grid></Grid>
            <Pagination current_page={1} total_pages={4} callback={this.onPageChange}></Pagination>
        </div>
    }
}

// Grid component
