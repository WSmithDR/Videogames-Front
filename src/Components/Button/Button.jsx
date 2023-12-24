import { StButton } from "./Style"

const Button = ({content, onClick, active}) =>{
    return (
        <StButton onClick={onClick} active={active}>{content}</StButton>
    )
}

export default Button