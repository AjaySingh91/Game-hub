import { FetchResponse } from "../services/api-client";
import { useQuery } from "@tanstack/react-query"
import platforms from "../data/platforms";
import APIClient from "../services/api-client";
import { Platform } from "./useGames";

const apiClient = new APIClient<Platform>('/platform/lists/parents')

// const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });
const usePlatforms = () => useQuery({
  queryKey: ['platforms'],
  queryFn: apiClient.getAll,
  staleTime: 24*60*60*1000,  //24h
  initialData: {count: platforms.length, results: platforms}
})

export default usePlatforms;
