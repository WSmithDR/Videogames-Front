import { useNavigate } from "react-router"
import EnterButton from "../components/EnterButton/EnterButton"
import Welcome from "../components/Welcome/Welcome"
import { StLandingContainer } from "./Style"


const LandingContainer = () => {
    const navigate = useNavigate()
    const content = `Welcome to the World of Videogames`
    return(
        <StLandingContainer>
            <Welcome content={content}/>
            <EnterButton onClick={()=>navigate("/home")}/>
        </StLandingContainer>
    )
}

export default LandingContainer