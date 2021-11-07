import { useEffect, useState } from "react";

const URL_BORDERS_COUNTRIES = "https://restcountries.com/v3.1/alpha/";

// eslint-disable-next-line import/prefer-default-export
export function useSingleCountry(border) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    const res = await fetch(`${URL_BORDERS_COUNTRIES}${border}`);
    return res.json();
  };

  useEffect(() => {
    setLoading(true);
    fetchData()
      .then((res) => setData(res))
      .finally(() => setLoading(false))
      .catch(() => setError(true));
  }, [border]);

  return { data, error, loading };
}
