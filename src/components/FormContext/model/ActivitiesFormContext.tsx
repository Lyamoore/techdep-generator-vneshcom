import { createChangeableContext } from '../lib/createChangeableContext';

type ActivityTypes = 'likes' | 'comments' | 'reposts';

export interface ActivitiesFormContext {
  activityTypes?: ActivityTypes;
  activitiesCondition?: 'any' | 'all';
  activitiesPriority?: ActivityTypes;
  moreChanceForMoreActivity?: boolean;
}

export const { useContext: useActivitiesFormContext, ContextProvider: ActivitiesFormContextProvider } =
  createChangeableContext<ActivitiesFormContext>({}, 'activities');
