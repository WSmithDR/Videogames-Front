import { StSearchBar } from "./Style"


const SearchBar = ({placeholder, onChange, value, onSearch}) =>{

    return(
        <StSearchBar>
            <input type="search" 
            placeholder={placeholder}
            onChange={onChange}
            value ={value}
            />
            <button onClick={onSearch}>Search</button>
        </StSearchBar>
    )
}

export default SearchBar