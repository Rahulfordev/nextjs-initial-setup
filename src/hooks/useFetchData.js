import { useEffect, useState, useCallback } from "react";

const useFetchData = (fetchFunction, params = null, dependencies = []) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = params
        ? await fetchFunction(params)
        : await fetchFunction();
      setData(response?.data?.data || []);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [fetchFunction, params]);

  useEffect(() => {
    fetchData();
  }, [fetchData, ...dependencies]);

  return { data, loading, error, refetch: fetchData };
};

export default useFetchData;
