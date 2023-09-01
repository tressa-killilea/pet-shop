import * as React from "react";
import Card from "../../components/Card/card";
import Pagination from "../../components/Pagination/pagination";
import './dogs.scss';

export default class Dogs extends React.Component{
    onPageChange = (page_num) => {

    }
    
    render(){
        return <div className="dogs_page">
            <Pagination current_page={1} total_pages={4} callback={this.onPageChange}></Pagination>
        </div>
    }
}

// Grid component
