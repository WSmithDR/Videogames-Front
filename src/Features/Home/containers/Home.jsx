import { useSelector } from "react-redux";
import usePagination from "../../../Hooks/usePagination";
import VdgSelection from "../../vdgSelection/containers/VdgSelection";

const Home = () => {
  const videogames = useSelector((state) => state.renderedVideogames);

  const videogamesPerPage = 15

  const [pagination, currentVideogames] = usePagination(
    videogames,
    videogamesPerPage
  );

  return (
    <>
      <VdgSelection/>
    </>
  );
};

export default Home;
