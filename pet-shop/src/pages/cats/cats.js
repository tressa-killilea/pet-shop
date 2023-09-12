import * as React from "react";
import Dropdown from "../../components/Dropdown/dropdown";

export default class Cats extends React.Component{
    render(){
        return <div>
            <Dropdown title="Breed" options={[{name: "Atticus", total: 100}, {name: "Winston", total: 21}]}></Dropdown>
        </div>
    }
}