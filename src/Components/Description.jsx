import React from 'react'

const Description = ({heightpok,weightpok,pokstat1,pokstat2,pokstat3,pokstat4,pokstat5,pokstat6,posbs1,posbs2,posbs3,posbs4,posbs5,posbs6}) => {
    
    // Capitalize first letter
    function capitalize(stat) {
        const str = stat.charAt(0).toUpperCase()+stat.slice(1)
        return str
    }

    // Stats variables for description
    let healthPoints = pokstat1.toUpperCase()
    let attack = capitalize(pokstat2)
    let defense = capitalize(pokstat3)
    let specialAttack = capitalize(pokstat4)
    let specialDefense = capitalize(pokstat5)
    let speed = capitalize(pokstat6)
    
    return (
        <div className='descPoke'>
            <p>Height: {heightpok*10} cm</p>
            <p>Weight: {weightpok*0.1} kg</p>
            <h3>Stats</h3>
            <p>{healthPoints}: {posbs1}</p>
            <p>{attack}: {posbs2}</p>
            <p>{defense}: {posbs3}</p>
            <p>{specialAttack}: {posbs4}</p>
            <p>{specialDefense}: {posbs5}</p>
            <p>{speed}: {posbs6}</p>
        </div>
    )
}

export default Description