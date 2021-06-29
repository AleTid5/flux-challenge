import { Dispatch, ReactNode, SetStateAction } from "react";
import { ResultInterface } from "./result.interface";
import { Error } from "../enums/error.enum";

export interface SearchProviderInterface {
  children: ReactNode;
}

export interface SearchContextInterface {
  results: ResultInterface[];
  error: Error | null;
  isLoading: boolean;
  setQueryParam: Dispatch<SetStateAction<string>>;
}
