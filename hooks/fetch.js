import { useEffect, useState } from "react";
import { useAlert } from "@bem/shared/state/alert";

export const useFetch = (input, init) => {
  const [response, setResposne] = useState()
  const [error, setError] = useState()
  const {actions: {updateAlert}} = useAlert()

  const errorHandler = (error) => {
    updateAlert({
      message: error.message || error.toString(),
      open: true,
      severity: 'error'
    })
    setError(error)
    console.log("error", error);
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(input, init);
        if (response.ok === false) {
          const text = await response.text()
          errorHandler(JSON.parse(text))
        } else {
          const responseParsed = await response.json();
          setResposne(responseParsed);
        }
      } catch (error) {
        errorHandler(error)
      }
    };
    if (input) fetchData();
  }, [input]);

  return [response, error]
}