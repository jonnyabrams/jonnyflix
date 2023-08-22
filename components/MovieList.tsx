import { isEmpty } from "lodash";

import MovieCard from "./MovieCard";

interface MovieListProps {
  data: Record<string, any>[];
  title: string;
}

const MovieList = ({ data, title }: MovieListProps) => {
  if (isEmpty(data)) {
    return null;
  }

  return (
    <div className="px-4 overflow-x-auto md:px-12 py-4 space-y-8 overflow-y-hidden">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
          {title}
        </p>
        <div className="flex gap-2 w-[90%] translate-x-[0%]">
          {data.map((video) => (
            <div key={video.id} className="w-40 flex-shrink-0">
              <MovieCard key={video.id} data={video} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
