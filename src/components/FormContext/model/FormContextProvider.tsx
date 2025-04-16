import type { PropsWithChildren } from 'react';

import { ActivitiesFormContextProvider } from './ActivitiesFormContext';
import { FinalFormContextProvider } from './FinalFormContext';
import { MainFormContextProvider } from './MainFormContext';
import { MVPFormContextProvider } from './MVPFormContext';

export const FormContextProvider = ({ children }: PropsWithChildren) => {
  return (
    <MVPFormContextProvider>
      <MainFormContextProvider>
        <ActivitiesFormContextProvider>
          <FinalFormContextProvider>{children}</FinalFormContextProvider>
        </ActivitiesFormContextProvider>
      </MainFormContextProvider>
    </MVPFormContextProvider>
  );
};
