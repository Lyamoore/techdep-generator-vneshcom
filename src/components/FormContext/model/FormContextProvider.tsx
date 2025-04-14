import type { PropsWithChildren } from 'react';

import { ActivitiesFormContextProvider } from './ActivitiesFormContext';
import { FinalFormContextProvider } from './FinalFormContext';
import { MainFormContextProvider } from './MainFormContext';

export const FormContextProvider = ({ children }: PropsWithChildren) => {
  return (
    <MainFormContextProvider>
      <ActivitiesFormContextProvider>
        <FinalFormContextProvider>{children}</FinalFormContextProvider>
      </ActivitiesFormContextProvider>
    </MainFormContextProvider>
  );
};
