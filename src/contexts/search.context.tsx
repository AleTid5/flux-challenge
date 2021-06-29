import { createContext, useContext, useState } from "react";
import {
  SearchContextInterface,
  SearchProviderInterface,
} from "../interfaces/search-context.interface";
import useGitHubAPI from "../components/custom-hooks/useGitHubAPI";

const SearchContext = createContext({
  results: [],
  error: null,
  isLoading: false,
  setQueryParam: () => {},
} as SearchContextInterface);

const { Provider } = SearchContext;

export const SearchProvider = ({ children }: SearchProviderInterface) => {
  const [queryParam, setQueryParam] = useState<string>("");
  const [results, isLoading, error] = useGitHubAPI(queryParam);

  return (
    <Provider value={{ results, isLoading, error, setQueryParam }}>
      {children}
    </Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }

  return context;
};
