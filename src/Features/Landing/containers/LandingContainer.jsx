import EnterButton from "../components/EnterButton/EnterButton"
import Welcome from "../components/Welcome/Welcome"
import { StLandingContainer } from "./Style"


const LandingContainer = () => {
    return(
        <StLandingContainer>
            <Welcome/>
            <EnterButton />
        </StLandingContainer>
    )
}

export default LandingContainer