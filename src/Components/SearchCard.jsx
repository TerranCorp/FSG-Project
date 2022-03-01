import React, { useState } from "react";
import { Form, FormGroup, FormText, Input, Button } from "reactstrap";
import { getInventory } from "../Services/fsgService";
import CardTemplate from "./CardTemplate";

const SearchCard = (props) => {


    const {searchResults, onSearch} = useState([]);

    const Search = () => {
        // if (Input.length < 1) {
        //     getInventory()
        // }

        getInventory().then(onGetInventorySuccess).catch(onGetInventoryFailure);
    }

    const onGetInventorySuccess = (response) => {
        console.log(response);
    }

    const onGetInventoryFailure = (ex) => {
        console.log(ex);
    }
 
    return(

        <div className="text-warning">
            
            <div className="mx-auto container col-7 row ">
                <Input className="col" type="text" placeholder="Search"></Input>
                <Button className="col-5" onClick={Search()}>Search</Button>
            </div>
            <CardTemplate />
        </div>
    )
}

export default SearchCard;