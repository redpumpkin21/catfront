import React from 'react'
import { Link } from 'react-router-dom'

const Cat = ({cat}) => {
    const div = {
        textAlign: "center",        
        margin: "10px auto",
        width: "80%"
    }
    return <div style={div}>
    <Link to= {`/cats/${cat.id}`}>
        <h1>{cat.name}</h1>
    </Link>
    <img src ={cat.image}/>
    {/* <h2 className="catdesc">{cat.description}</h2> */}
</div>
}
export default Cat