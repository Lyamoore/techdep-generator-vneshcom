import { createChangeableContext } from '../lib/createChangeableContext';

interface FinalFormContext {
  countOfWinners?: number;
}

export const { useContext: useFinalFormContext, ContextProvider: FinalFormContextProvider } =
  createChangeableContext<FinalFormContext>({}, 'final');
