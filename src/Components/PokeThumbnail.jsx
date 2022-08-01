import React, { useState } from 'react'
import Description from './Description'

const PokeThumbnail = ({
    id,
    name,
    image,
    type,
    height,
    weight,
    pokemonAbilities,
    healthPoints,
    attack,
    defense,
    specialAttack,
    specialDefense,
    speed,
    hpBase,
    attackBase,
    defenseBase,
    specAtkBase,
    specDefBase,
    speedBase}) => {
    const [show,setShow] = useState(false)

    return (
        <div>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h3>#0{id} {name.toUpperCase()}</h3>
                <p>Type: {type.charAt(0).toUpperCase()+type.slice(1)}</p>
                <p>Height: {height*10} cm</p>
                <p>Weight: {weight*0.1} kg</p>
                <button className="pokeinfo" onClick={()=>setShow(!show)}>{show===true?"Hide details":"Show details"}</button>
                {show===true?<Description 
                pokemonAbilities={pokemonAbilities}

                healthPoints={healthPoints}
                attack={attack}
                defense={defense}
                specialAttack={specialAttack}
                specialDefense={specialDefense}
                speed={speed}
                
                hpBase={hpBase}
                attackBase={attackBase}
                defenseBase={defenseBase}
                specAtkBase={specAtkBase}
                specDefBase={specDefBase}
                speedBase={speedBase}
                 /> : <></>}
                
            </div>
        </div>
    )
}

export default PokeThumbnail