import * as React from "react";
import Card from "../../components/Card/card";
import './dogs.scss';

export default class Dogs extends React.Component{
    render(){
        return <div className="dogs_page">
            <Card></Card>
        </div>
    }
}