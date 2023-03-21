import React from 'react'

export interface IMove{
    move:{
        name:string;
        url:string;
    }
}


interface IPokemonMoveCardProps{
   move:IMove
}

const PokemonMoveCard = ({move}:IPokemonMoveCardProps) => {
    return (
        <li>
           <h3>{move.move.name[0].toUpperCase()+move.move.name.substring(1)}</h3> 
        </li>
    )
}

export default PokemonMoveCard
