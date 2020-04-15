import React from 'react'

const PokeCard = props => {
    console.log('card props', props);
    return (
        <div className='card'>
            <img src={`../../public/sprites/${props.props.entry_number}.png`} alt='image of a pokemon'/>
            {console.log(props.props.entry_number, '.png')}
            <h3>Name: {props.props.pokemon_species.name}</h3>
    <p>{props.props.entry_number}</p>
        </div>
    )
}

export default PokeCard;