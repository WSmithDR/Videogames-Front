import useData from "../../../Hooks/useData";


const Genres = () =>{
    const genres = useData("http://localhost:3001/genres");
    return(
       <>
             {genres && genres.map((genre, index) => (
              <option key={index} value={genre}>
                {genre}
              </option>
        ))}
       </>
    )
}

export default Genres