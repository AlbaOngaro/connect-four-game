import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { Value } from "types";

type CurrentPlayerContextValue = {
  currentPlayer: Value;
  setCurrentPlayer: Dispatch<SetStateAction<Value>>;
};

const CurrentPlayerContext = createContext<CurrentPlayerContextValue>({
  currentPlayer: Value.P1,
  setCurrentPlayer: () => {},
});

export function CurrentPlayerProvider({ children }: PropsWithChildren) {
  const [currentPlayer, setCurrentPlayer] = useState(Value.P1);

  return (
    <CurrentPlayerContext.Provider value={{ currentPlayer, setCurrentPlayer }}>
      {children}
    </CurrentPlayerContext.Provider>
  );
}


export function useCurrentPlayer() {
	return useContext(CurrentPlayerContext);
}