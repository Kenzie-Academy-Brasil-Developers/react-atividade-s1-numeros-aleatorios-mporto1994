import react from "react"
import { useState } from "react"
import "./styles.css" 

export const Content= ()=> {
    const [number,setNumber]=useState(0)

    function newNumber(){
        setNumber(Math.floor(Math.random() * 100) + 1)
    }
    return (
        <div>
            <h2>{number}</h2>
            <button onClick={newNumber}>Criar novo numero</button>
        </div>
    )
}