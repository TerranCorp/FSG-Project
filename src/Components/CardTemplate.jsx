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
                <div>
                    <Button className="col-2"onClick={onButtonClick()}>Clear</Button>                    
                </div>
                
            </Card>
        </div>
    )
}

export default CardTemplate;