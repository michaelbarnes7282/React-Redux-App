import React from 'react'

const PokeCard = props => {
    console.log('card props', props);
    return (
        <div className='card'>
            <img src={require(`../sprites/${props.props.entry_number}.png`)} alt='image of a pokemon'/>
            <h3 style={{textTransform: 'capitalize'}}>Name: {props.props.pokemon_species.name}</h3>
            <br />
        </div>
    )
}

export default PokeCard;