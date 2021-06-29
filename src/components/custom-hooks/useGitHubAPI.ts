import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment/moment";
import { ResultInterface } from "../../interfaces/result.interface";
import { Error } from "../../enums/error.enum";
import { GitHubInterface } from "../../interfaces/github.interface";

const fetchAPI = async (querySearch: string): Promise<ResultInterface[]> => {
  const {
    data: { items },
  } = await axios.get("https://api.github.com/search/repositories", {
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
    params: {
      q: encodeURIComponent(querySearch),
    },
  });

  return items.map(
    ({
      owner: { login },
      full_name,
      stargazers_count,
      created_at,
    }: GitHubInterface) => ({
      name: full_name,
      owner: login,
      stars: stargazers_count,
      createdAt: moment(created_at).format("YYYY/MM/DD HH:mm"),
    })
  );
};

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
          cachedResults = await fetchAPI(querySearch);
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
