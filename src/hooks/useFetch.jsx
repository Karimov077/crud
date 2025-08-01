import { useEffect, useState } from "react";
import { api } from "../api";

const useFetch = (entpoint) => {
  const [data, setData] = useState([]);
  const [loding, setLoding] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get(entpoint)
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(()=> setLoding(false))
  }, []);
  return {data ,error, loding}
};

export default useFetch;
