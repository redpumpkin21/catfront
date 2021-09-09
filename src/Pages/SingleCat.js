import React from 'react'
import { Link } from 'react-router-dom'

const SingleCat = ({cats, match, edit, deleteCat }) => {
    const id= parseInt(match.params.id)
    const cat = cats.find((cat) => cat.id === id)
    const div = {
        textAlign: "center",
        border: "3px solid black",
        width: "80%",
        margin: "30px auto",
      };
    
      return (
        <div style={div} >
          <h1 className="catdesc">{cat.name}</h1>
          
          <img src={cat.image}/>
          <h2 className="catdesc">{cat.description}</h2>
          
          <button onClick={(event) => edit(cat)}>Edit</button>
          <button onClick={(event) => deleteCat(cat)}>Delete</button>
          <button onClick ={(event) => alert("All pets adopted! Lokus is mine, you cannot have. I will fight you, unless you got $2k")}> Adopt me</button>
          <Link to="/">
            <button>Go Back</button>
          </Link>
          <h2 className="catdesc">sorry all cats are currently adopted!!</h2>
          
        </div>
      );
}
export default SingleCat