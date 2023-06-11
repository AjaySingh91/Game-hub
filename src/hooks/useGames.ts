import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../pages/Layout";
import APIClient ,{FetchResponse} from "../services/api-client";

const apiClient = new APIClient<Game>('/games')

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}


const useGames = (gameQuery: GameQuery) => useInfiniteQuery<FetchResponse<Game>,Error>({
  queryKey: ['games', gameQuery],
  queryFn: ({pageParam= 1}) => apiClient.getAll({
    params: {
              genres: gameQuery.genreId,
              platforms: gameQuery.platformId,
              ordering: gameQuery.sortOrder,
              search: gameQuery.searchText,
              page: pageParam
            },
  }),
  getNextPageParam: (lastpage, allpages) => {
    return lastpage.next ? allpages.length + 1 : undefined;
  },
  staleTime: 24*60*60*1000   //24h
}) 

export default useGames;
