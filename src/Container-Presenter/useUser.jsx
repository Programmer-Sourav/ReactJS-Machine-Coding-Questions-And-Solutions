import { useState } from "react"

export default function useUser(){

    const [user, setUser] = useState({name: "Sourav nath", age: "36", profession: "Software Engineer"})



    return {user, setUser}
}