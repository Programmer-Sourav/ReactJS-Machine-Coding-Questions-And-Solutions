import React from "react"
import PropTypes from "prop-types"

export default function Greeting(props){
 return <h1> Hello, {props.name} - {props.age}</h1>
}

Greeting.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
}