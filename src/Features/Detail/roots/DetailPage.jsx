import { Details } from "../../../Styles/DetailPage"
import NavButton from "../../Navigation/NavButton"
import VdgDetail from "../VdgDetail"

const DetailPage = ()=>{
    return(
        <Details>
            <NavButton name={"Back To Home"} to="/home"/>
            <VdgDetail/>
        </Details>
    )
}

export default DetailPage