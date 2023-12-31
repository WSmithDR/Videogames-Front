import { useNavigate } from "react-router"
import { StEnterButton } from "./Style"

const EnterButton = () => {
    const navigate = useNavigate()
    return(
        <StEnterButton onClick={()=>navigate("/home")}>Start!</StEnterButton>
    )
}

export default EnterButton