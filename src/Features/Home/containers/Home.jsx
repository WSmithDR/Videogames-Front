import { useSelector } from "react-redux";
import usePagination from "../../../Hooks/usePagination";
import PaginationButtons from "../../Components/PaginationButtons";
import Videogames from "../../Components/Videogames";
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
      <Videogames videogames={currentVideogames} />
      <PaginationButtons pagination={pagination} />
    </>
  );
};

export default Home;
