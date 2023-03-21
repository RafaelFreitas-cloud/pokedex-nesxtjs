import React from 'react'

export interface IStat{
    base_stat:number;
    effort:number;
    stat:{
        name:string;
        url:string;
    }
}


interface IPokemonStatsCardProps{
   stat:IStat
}

const PokemonStatsCard = ({stat}:IPokemonStatsCardProps) => {
    return (
        <div className='statBox'>
            <div>
            <h3>{stat.stat.name[0].toUpperCase()+stat.stat.name.substring(1)}</h3>
            </div>
           
           <h4>{stat.base_stat}</h4> 
        </div>
    )
}

export default PokemonStatsCard
