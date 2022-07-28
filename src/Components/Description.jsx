import React from 'react'

const Description = ({heightpok,weightpok,healthPoints,attack,defense,specialAttack,specialDefense,speed,hpBase,attackBase,defenseBase,
    specAtkBase,specDefBase,speedBase}) => {
    
    // Capitalize first letter
    function capitalize(stat) {
        const str = stat.charAt(0).toUpperCase()+stat.slice(1)
        return str
    }
    
    return (
        <div className='descPoke'>
            <p>Height: {heightpok*10} cm</p>
            <p>Weight: {weightpok*0.1} kg</p>
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