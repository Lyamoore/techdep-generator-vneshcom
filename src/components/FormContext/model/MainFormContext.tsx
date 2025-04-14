import { createChangeableContext } from '../lib/createChangeableContext';

type MainFormContext = (
  | {
      participantsType?: 'acitivityUnderPost';
      postLink?: string;
    }
  | {
      participantsType?: 'list';
      participantsList?: string[];
    }
) & {
  blackList?: string[];
  shouldSubscribeGroups?: string[];
  shouldSubscribeVneshcom?: boolean;
};

export const { useContext: useMainFormContext, ContextProvider: MainFormContextProvider } =
  createChangeableContext<MainFormContext>({}, 'main');
