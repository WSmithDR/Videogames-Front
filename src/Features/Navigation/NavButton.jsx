import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";


const NavButton = ({ name, to }) => {
  const location = useLocation();
  const isCurrentRoute = location.pathname === to;
  const navigate = useNavigate()
  return (
      <Button content={name} onClick={()=>navigate(`${to}`)} active={isCurrentRoute}/>
  );
};

export default NavButton;
