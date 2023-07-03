import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { Mode, Value } from "types";

type GameStateContextValue = {
  currentPlayer: Value;
  setCurrentPlayer: Dispatch<SetStateAction<Value>>;
  mode: Mode,
  setMode: Dispatch<SetStateAction<Mode>>;
};

const GameStateContext = createContext<GameStateContextValue>({
  currentPlayer: Value.P1,
  setCurrentPlayer: () => {},
  mode: Mode.PvP,
  setMode: () => {}
});

export function GameStateProvider({ children }: PropsWithChildren) {
  const [currentPlayer, setCurrentPlayer] = useState(Value.P1);
  const [mode, setMode] = useState(Mode.PvP);

  return (
    <GameStateContext.Provider value={{ currentPlayer, setCurrentPlayer, mode, setMode }}>
      {children}
    </GameStateContext.Provider>
  );
}


export function useGameState() {
	return useContext(GameStateContext);
}