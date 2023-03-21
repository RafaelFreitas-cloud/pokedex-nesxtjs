import { Dispatch, SetStateAction } from "react";

export interface IChildren {
  children: React.ReactNode;
}

export interface IPokeContext {
  wordToSearch: string;
  setWordToSearch: Dispatch<SetStateAction<string>>;
}
