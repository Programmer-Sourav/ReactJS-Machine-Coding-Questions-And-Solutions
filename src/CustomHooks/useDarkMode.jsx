import { useCallback, useState } from "react"

export default function useDarkMode(){ 

const [selectedMode, setSelectedMode] = useState(false)

const changeMode = useCallback(()=>{setSelectedMode(selectedMode=>!selectedMode)})

return {selectedMode, changeMode}

}