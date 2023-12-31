
import { SearchVideogameByName } from "../../../Searching/SearchVideogameByName";
import NavButton from "../../components/NavButton/NavButton";

const NavBar = () => {
    const buttons = [
        {name: "Home", to:"/home"},
        {name: "Create a videogame", to:"/form"}
    ]
    return (
        <div>
                {buttons.map(({name, to}, index) => <NavButton key={name+index} name={name} to={to}/>)}
                <SearchVideogameByName/>
        </div>
    )
}

export default NavBar