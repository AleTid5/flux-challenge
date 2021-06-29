import { useEffect, useState } from "react";
import { ResultInterface } from "../../interfaces/result.interface";
import { Error } from "../../enums/error.enum";

export default function useGitHubAPI(querySearch: string) {
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [results, setResults] = useState<ResultInterface[]>([]);

  useEffect(() => {
    setError(null);

    (async () => {
      if (querySearch.length === 0) {
        return;
      }

      let cachedResults = JSON.parse(
        localStorage.getItem(querySearch) as string
      ) as ResultInterface[];

      if (!cachedResults) {
        try {
          setIsLoading(true);
          cachedResults = await new Promise((res) => {
            setTimeout(() => res([]), 1000);
          });
          localStorage.setItem(querySearch, JSON.stringify(cachedResults));
        } catch (e) {
          setError(Error.FETCHING);
        } finally {
          setIsLoading(false);
        }
      }

      setResults(cachedResults);
    })();
  }, [querySearch]);

  return [results, isLoading, error] as const;
}
