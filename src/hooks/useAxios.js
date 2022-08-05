import axios from 'axios';
import { useEffect, useState } from 'react';

const useAxios = (param) => {
  const [responce, setResponce] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(''); 

  axios.defaults.baseURL = 'https://api.unsplash.com';

  const fetchData = async (url) => {
    try {
      setIsLoading(true);
      const res = await axios(url);
      setResponce(res.data.results);
    } catch (err) {
      setError(err)
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData(param);
  }, [param]);


  return {
    responce,
    isLoading,
    error,
    fetchData: url => fetchData(url)
  }

}


export default useAxios