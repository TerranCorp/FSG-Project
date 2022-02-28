import React, {Component} from "react";
import UICardTemplate from './UICardTemplate';
import { CardGroup, CardSubtitle } from "reactstrap";
import SearchCard from "./SearchCard";

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cardCount: 4,
            cardTitles: ["Results", "Favorite","Wishlist"],
            cardDescriptions:["Results are displayed here", "Your Favorite item","Wishlist"],
            renderedCards: []
        }
    }

    componentDidMount() {
        this.setState({renderedCards : this.renderUICards()})
    }
    

    renderSearchCard = () => {
        
        return <SearchCard key={0} title="Search" description="Look up a product."/>
    }

    renderUICards = () => {
        const titles = this.state.cardTitles
        const descriptions = this.state.cardDescriptions
        let cards = []
        console.log(descriptions)
        cards.push(this.renderSearchCard())

        for (let i = 0; i < this.state.cardTitles.length; i++) {
            cards.push(<UICardTemplate key={i + 1} title={titles[i]} description={descriptions[i]}/>)
        }

        return cards
    }
   
    render() {
        return (
            <div className="col-lg-6 mx-auto">
                          
                <CardGroup className="row">
                    {this.state.renderedCards}
                </CardGroup>                
            </div>
        )
    }

}

export default Home;
