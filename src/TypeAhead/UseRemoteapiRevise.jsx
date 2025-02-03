import { useEffect, useState } from "react"

export default function useRemoteApi(inputQuery) {
  const [responseFromServer, setResponseFromServer] = useState([]);
  const [loading, setLoading] = useState(false);

  const BASE_URL = "https://jsonplaceholder.typicode.com"; // Base URL for API requests

  const fetchItemFromRemote = async (signal) => {
    try {
      const URL = inputQuery
        ? `${BASE_URL}/${inputQuery}`
        : `${BASE_URL}/todos/1`;

      const response = await fetch(URL, { signal }); // Pass the signal for abort
      const data = await response.json();

      if (Array.isArray(data)) {
        setResponseFromServer((prev) => [...prev, ...data]);
      } else {
        setResponseFromServer((prev) => [...prev, data]);
      }
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Fetch request was aborted");
      } else {
        console.error("Error: ", error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController(); // Create an AbortController
    const signal = controller.signal; // Get the signal from the controller

    const debounced = setTimeout(() => {
      if (inputQuery) {
        setLoading(true);
        fetchItemFromRemote(signal);
      } else {
        setLoading(false);
        setResponseFromServer([]);
      }
    }, 1000);

    return () => {
      clearTimeout(debounced);
      controller.abort(); // Cancel the ongoing fetch request when inputQuery changes or component unmounts
    };
  }, [inputQuery]);

  return { responseFromServer, loading };
}
