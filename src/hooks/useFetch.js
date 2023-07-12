import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          if (json && json.length > 0) {
            json.map((item) => {
              item.phone = item.phone
                .replace(/\D+/g, "")
                .replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, "+$1 ($2) $3-$4");
              return item;
            });
          }
          console.log("===>", json);
          setData(json);
          setIsLoading(false);
          setIsError(false);
        })
        .catch((e) => {
          setIsError(true);
          setIsLoading(false);
        });
    };
    fetchData();
  }, []);
  return {
    data,
    isLoading,
    isError,
  };
};

export default useFetch;
