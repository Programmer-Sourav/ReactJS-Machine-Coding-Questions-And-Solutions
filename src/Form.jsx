import { useState } from "react"
import useForm from "./UseForm"

export default function Form(){

    const [values, handleChange] = useForm({email: "", password: ""})

    return(
        <form>
            <input type="text" name="email" value={values.email} onChange={handleChange}/>
            <input type="password" name="password" value={values.password} onChange={handleChange}/>
        </form>
    )
}