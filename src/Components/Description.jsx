import React from 'react' 

const Description = ({
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
    
    // Capitalize first letter
    function capitalize(stat) {
        const str = stat.charAt(0).toUpperCase()+stat.slice(1)
        return str
    }

    const firstAbility = capitalize(pokemonAbilities[0].ability.name)
    const secondAbility = capitalize(pokemonAbilities[1].ability.name)

    return (
        <div className='descPoke'>
            <h3>Abilities</h3>
            <p>{firstAbility}</p>
            <p>{secondAbility}</p>

            <h3>Stats</h3>
            <p>{healthPoints.toUpperCase()}: {hpBase}</p>
            <p>{capitalize(attack)}: {attackBase}</p>
            <p>{capitalize(defense)}: {defenseBase}</p>
            <p>{capitalize(specialAttack)}: {specAtkBase}</p>
            <p>{capitalize(specialDefense)}: {specDefBase}</p>
            <p>{capitalize(speed)}: {speedBase}</p>
        </div>
    )
}

export default Description