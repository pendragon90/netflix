import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails, getMovieCast} from '../../../api';
import Button from '../../Elements/Button';
import { AiFillStar } from 'react-icons/ai';

const MovieDetail = () => {
  const { id } = useParams();
  const [MovieDetails, setMovieDetails] = useState(null);
  const [MovieCast, setMovieCast] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const detailsData = await getMovieDetails(id);
        setMovieDetails(detailsData);
        console.log(detailsData)

        const castData = await getMovieCast(id);
        setMovieCast(castData);

      } catch (error) {
        console.error('Error fetching Movie details:', error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      {MovieDetails ? (
        <div className="h-screen text-white">
          <div
            className="h-screen bg-no-repeat bg-center bg-cover relative"
            style={{
              backgroundImage: `url('https://image.tmdb.org/t/p/original/${MovieDetails.backdrop_path}')`
            }}
          >
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black">
              <div className="flex justify-center items-center mb-5 lg:mb-5 md:mb-5">
                {/* content detail Movie start */}
                <div className="flex justify-center items-center flex-col lg:flex-row">
                  <div className="rounded-lg shadow-xl overflow-hidden border border-black">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${MovieDetails.poster_path}`}
                      alt=""
                      className="w-44 h-64 md:w-72 md:h-96 lg:w-56 lg:h-80"
                    />
                  </div>
                  <div className="my-3 lg:mx-5 lg:ml-10 lg:w-3/4">
                    <div className="flex justify-center items-center lg:items-start flex-col">
                      <h1 className="text-white text-lg md:text-3xl font-bold lg:my-2">
                        {MovieDetails.title}
                      </h1>
                      <h1 className="text-white text-lg lg:text-xl md:text-3xl font-bold">
                        {MovieDetails.release_date}
                      </h1>
                      <div className="flex items-center">
                        <h1 className="text-white text-lg lg:text-xl md:text-3xl font-bold lg:my-2">
                          {MovieDetails.vote_average.toFixed(1)}
                        </h1>
                        <AiFillStar />
                        <h1 className="ml-3 text-white text-lg lg:text-sm md:text-3xl font-bold lg:my-2">
                          ({MovieDetails.vote_count}) votes
                        </h1>
                      </div>
                    </div>
                    {/* desktop content detail Movie start */}
                    <div className="hidden lg:flex text-white text-justify">
                      <div className="flex gap-3 flex-wrap md:text-2xl lg:text-base">
                        {MovieDetails.genres.map((genre) => (
                          <Button
                            key={genre.id}
                            classname="hover:bg-transparent md:px-5"
                            text={genre.name}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="hidden lg:inline-block text-base my-3 text-justify">
                      <p>{MovieDetails.overview}</p>
                    </div>
                    {/* desktop content detail Movie end */}
                  </div>
                </div>
                {/* content detail Movie end */}
              </div>
            </div>
          </div>

          {/* desktop start */}

          {/* desktop end */}
        </div>
      ) : (
        <div className="h-screen bg-no-repeat bg-center bg-cover relative bg-slate-300"></div>
      )}

      {MovieDetails ? (
        <div className="lg:hidden text-white mx-5 text-justify mt-24">
          <div className="flex gap-3 flex-wrap md:text-2xl">
            {MovieDetails.genres.map((genre) => (
              <Button
                key={genre.id}
                classname="hover:bg-transparent md:px-5"
                text={genre.name}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="text-white"></div>
      )}

{MovieDetails ? (
        <div className="hidden lg:inline-block text-white text-xl mx-5 mt-10">
          <div className="mb-8 font-bold">
          <h1>Original Title : <span className='font-normal'>{MovieDetails.original_title}</span></h1>
          <h1>Official Website : <a className='hover:text-red-600 font-normal' target='blank' href={MovieDetails.homepage}>{MovieDetails.homepage}</a></h1>
          </div>
        </div>
      ) : (
        <div className=""></div>
      )}

      {MovieDetails ? (
        <div className="lg:hidden text-white md:text-2xl mx-5 mt-10">
          <div className="mb-8 font-bold">
          <h1>Original Title : <span className='font-normal'>{MovieDetails.original_title}</span></h1>
          <h1>Official Website : <a className='hover:text-red-600 font-normal' target='blank' href={MovieDetails.homepage}>{MovieDetails.homepage}</a></h1>
          </div>
          <div className="text-justify">
          <p>{MovieDetails.overview}</p>
          </div>
        </div>
      ) : (
        <div className=""></div>
      )}

      <div className="text-white mt-10 mx-5">
        <h1 className="mb-4 text-xl md:text-3xl font-bold">Cast</h1>
        <div className="flex justify-between gap-8 flex-wrap">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {MovieCast.map((actor) => (
              <div key={actor.id} className="text-white p-4 rounded shadow text-center">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                  alt={actor.name}
                  className="w-full h-72 object-cover rounded"
                />
                <h3 className="text-xl font-bold mt-2">{actor.name}</h3>
                <p className="text-sm text-gray-500">{actor.character}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-5 mb-10">
  {MovieDetails ? (
    <div className="">
      <h1 className='mt-20 mb-10 text-xl md:text-3xl font-bold'>Production Companies</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 text-center gap-5 items-center">
        {MovieDetails.production_companies.map((company) => (
          <div key={company.id} className="">
            <div className="bg-slate-300 rounded-md overflow-hidden flex justify-center">
            <img
              src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`}
              alt={company.name}
              className=""
            />
            </div>
            <h1 className='text-white text-xl md:text-3xl font-bold'>{company.name}</h1>
          </div>
        ))}
      </div>
    </div>
  ) : (
    ''
  )}
</div>
    </>
  );
};

export default MovieDetail;