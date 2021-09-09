import React from 'react'
import Cat from '../Componets/cat'

const AllCats = (props) => {
    return (
        
        props.cat.map((cat) => <Cat cat={cat} key={cat.id}/>)
    )}
export default AllCats