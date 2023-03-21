import React from 'react'

export interface IType{
    slot:number;
    type:{
        name:string;
        url:string;
    }
}


interface IPokemonTypeCardProps{
   type:IType
}

const PokemonTypeCard = ({type}:IPokemonTypeCardProps) => {
    return (
        <div>
           <h3>{type.type.name[0].toUpperCase()+type.type.name.substring(1)}</h3> 
        </div>
    )
}

export default PokemonTypeCard
