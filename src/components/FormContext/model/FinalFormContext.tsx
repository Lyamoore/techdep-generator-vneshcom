import { createChangeableContext } from '../lib/createChangeableContext';

export interface FinalFormContext {
  countOfWinners?: number;
}

export const { useContext: useFinalFormContext, ContextProvider: FinalFormContextProvider } =
  createChangeableContext<FinalFormContext>({}, 'final');
