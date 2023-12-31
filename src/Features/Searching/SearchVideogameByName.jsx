import { useState } from "react"
import { useDispatch } from "react-redux"
import SearchBar from "../../Components/SearchBar/SearchBar"
import { searchVideogameByName } from "../../redux/actions/actions"

export const SearchVideogameByName = () => {
    const [name, setName] = useState("")

    const handleInputChange = event => {
        setName(event.target.value)
    }

    const dispatch = useDispatch()
    
    const onSearch = () => {
        dispatch(searchVideogameByName(name))
    }

    const placeholder = "Search by name..."
    return (
        <SearchBar 
        placeholder={placeholder}
        onChange={handleInputChange}
        value={name}
        onSearch={onSearch}/>
    )

}