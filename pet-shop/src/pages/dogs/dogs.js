import * as React from "react";
import Card from "../../components/Card/card";
import Pagination from "../../components/Pagination/pagination";
import './dogs.scss';

onPageChange = (page_num) => {

}

export default class Dogs extends React.Component{
    render(){
        return <div className="dogs_page">
            <Pagination current_page={1} total_pages={4} onChange={this.onPageChange}></Pagination>
        </div>
    }
}

// Grid component
