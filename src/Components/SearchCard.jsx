import React, { useState } from "react";
import { FormText } from "reactstrap";
import CardTemplate from "./CardTemplate";

const SearchCard = (props) => {


    const {searchResults, onSearch} = useState([]);

    // const onSearch = () => {

    // }
 
    return(

        <div className="text-warning">
            
            <CardTemplate />
        </div>
    )
}

export default SearchCard;