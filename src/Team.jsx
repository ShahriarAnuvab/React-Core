import { useState } from "react"

export default function Team(){
    const[count, countPlayer] = useState(0);
    const styleTeam = {
        border: '2px solid tomato',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }
    const add =() =>{
        countPlayer(count+1);
    }
    const remove =() =>{
        countPlayer(count-1);
    }
    return(
        <div style={styleTeam}> 
            <h1>Player Counter</h1>
            <p>Player: {count}</p>
            <button onClick={add}>Add</button>
            <button onClick={remove}>Remove</button>
        </div>
    )
}