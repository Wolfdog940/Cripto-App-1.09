import axios from "axios";
import { useQuery } from "react-query";
import { marketURL } from "./common";

export const useGetCoinsQuery = (queryOptions) => 
    useQuery({
        ...queryOptions,
        queryKey: ["projects"],
        queryFn: () => axios.get(marketURL),
    });