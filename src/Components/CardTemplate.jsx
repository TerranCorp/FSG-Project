import React, {useState} from "react";
import { Card, CardText, CardTitle, Button } from "reactstrap";
const CardTemplate = (props) => {

    

const onButtonClick = () => {
    console.log(props.description)
    return props.buttonContext;
    
}



    return(
        <div>
            <Card className="mx-auto">
                <CardTitle>
                    {props.title}
                </CardTitle> 
                <CardText>
                    Description: {props.description}
                </CardText>
                <CardText>
                    {props.results}
                </CardText>
                <div className="row flex col-3 offset-0">
                    <Button onClick={onButtonClick()}/>                    
                </div>
                
            </Card>
        </div>
    )
}

export default CardTemplate;