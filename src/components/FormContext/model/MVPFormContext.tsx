import { createChangeableContext } from '../lib/createChangeableContext';

type ActivityTypes = 'likes' | 'comments' | 'reposts';

export interface MVPFormContext {
  postLink: string;
  shouldSubscribeGroups: string[];
  shouldSubscribeVneshcom: boolean;
  activityTypes: Record<ActivityTypes, boolean>;
}

export const { useContext: useMVPFormContext, ContextProvider: MVPFormContextProvider } =
  createChangeableContext<MVPFormContext | null>(null, 'mvp');
