import React from 'react'
import Card from './Card'

const CardList = ({robots}) => {
    
    const cardsComponent = robots.map((user, i) => 
        <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
    )
    return(
        <div>
            {cardsComponent}
        </div> 
    );
}

export default CardList;