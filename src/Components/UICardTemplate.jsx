import React, {useState} from "react";
import CardTemplate from "./CardTemplate";




const UICardTemplate = (props) => {


    const {results, setResults} = useState(0)


const onButtonClick = () => {
    console.log("UI " + props.description)
    return props.buttonBehavior;
}

const clearResults = () => {

}

    return (
        <div>
            <CardTemplate results={null} description={props.description} title={props.title} buttonBehavior={onButtonClick}/>
        </div>
    )
} 

export default UICardTemplate;