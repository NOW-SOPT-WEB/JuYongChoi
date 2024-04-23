import { createContext, useContext, useState } from "react";

const LevelInfoStateContext = createContext(undefined);

const LevelInfoDispatchContext = createContext(undefined);

const LevelInfoProvider = ({ children }) => {
  const [level, setLevel] = useState("easy");

  return (
    <LevelInfoDispatchContext.Provider value={setLevel}>
      <LevelInfoStateContext.Provider value={level}>
        {children}
      </LevelInfoStateContext.Provider>
    </LevelInfoDispatchContext.Provider>
  );
};

const useLevelInfoState = () => {
  const context = useContext(LevelInfoStateContext);
  if (context === undefined) {
    throw new Error("level info state context error");
  }
  return context;
};

const useLevelInfoDispatch = () => {
  const context = useContext(LevelInfoDispatchContext);
  if (context === undefined) {
    throw new Error("level info dispatch context error");
  }
  return context;
};

export { LevelInfoProvider, useLevelInfoState, useLevelInfoDispatch };
