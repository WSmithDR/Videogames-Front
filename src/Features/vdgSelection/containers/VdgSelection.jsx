import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getVideogamesByDefault, renderVideogames } from "../../../redux/actions/actions";
import Genres from "../components/Genres";
import Label from "../components/Label";
import { StVdgSelection } from "./Style";

const VdgSelection = () =>{
    const dispatch = useDispatch();

    const [filter, setFilter] = useState({ genre: "all", created: "all" });
    const [order, setOrder] = useState({prop:"name", way:"A"});
    useEffect(() => {
  dispatch(getVideogamesByDefault());
}, []);

    const handleFilterOption = (event) => {
    setFilter({ ...filter, [event.target.name]: event.target.value });
  };
  
  const handleOrderOption = (event) => {
    const [prop, way] = event.target.value.split(" ")
    setOrder({prop, way})
  }

const cleanOrderFilter = () => {
    dispatch(getVideogamesByDefault())
    setFilter({ genre: "all", created: "all" })
    setOrder({prop:"name", way:"A"})
  }

  useEffect(() => {
    dispatch(renderVideogames(filter, order));
  }, [filter, order]);
    return(
        <StVdgSelection>
          <Label title={"Genres:"}/>
          <select name="genre" defaultValue="all" onChange={handleFilterOption} value={filter.genre}>
            <option value="all">All</option>
            <Genres/>
          </select>{" "}
          <Label title={"Origin(API/DB):"}/>
          <select name="created" defaultValue="all" onChange={handleFilterOption} value={filter.created}>
            <option value="all">All</option>
            <option value="true">Db</option>
            <option value="false">API</option>
            </select>
          <label>
            <b>SORT:</b>{" "}
          </label>
          <select onChange={handleOrderOption}>
            <optgroup label="Name">
              <option value="name A">Ascendent</option>
              <option value="name D">Descendent</option>
            </optgroup>
            <optgroup label="Rating">
              <option value="rating A">Ascendent</option>
              <option value="rating D">Descendent</option>
            </optgroup>
          </select>
          <button onClick={cleanOrderFilter}>Reset</button>
        </StVdgSelection>
    )
}

export default VdgSelection