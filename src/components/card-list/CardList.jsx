import React, { Component } from 'react';


import Card from '../card/Card'
import './CardList.css'

class CardList extends Component {
    render() { 
        const{monsters} = this.props;
        
        return (
            <div className='card-list'>
                {monsters.map((monsters) => { 
                   return (<Card monster={monsters} />)
                })}
                
            </div>
        );
    }
}
 
export default CardList ;

