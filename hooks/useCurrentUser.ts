import useSWR from 'swr';

import fetcher from '../libs/fetcher';

//SWR is very good at fetching data and is developed by vercel. its like react-query.
//we do not need redux if we are using swr as it does not fetch again if the data is already exists.
 
const useCurrentUser = () => {
    const { data, error, isLoading, mutate } = useSWR('/api/current', fetcher);

    return {
        data,
        error,
        isLoading,
        mutate
    }
};

export default useCurrentUser;