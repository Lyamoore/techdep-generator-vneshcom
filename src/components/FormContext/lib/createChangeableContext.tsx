import { createContext, type PropsWithChildren, useContext, useState } from 'react';

/** Создает контекст, который можно менять и который синхронизируется с sessionStorage */
export function createChangeableContext<T>(defaultValue: T, sessionStorageId: string) {
  const savedValue = sessionStorage.getItem(sessionStorageId);
  const savedOrDefaultValue = savedValue ? JSON.parse(savedValue) : defaultValue;

  const Context = createContext<[T, (newValue: T) => void]>([savedOrDefaultValue, () => undefined]);

  const useCreatedContext = () => {
    const context = useContext(Context);

    if (!context) {
      throw new Error('useContext must be used within a Provider');
    }

    return context;
  };

  const ContextProvider = ({ children }: PropsWithChildren) => {
    const [contextValue, setContextValue] = useState(savedOrDefaultValue);

    const handleSetContextValue = (newValue: T) => {
      setContextValue(newValue);
      sessionStorage.setItem(sessionStorageId, JSON.stringify(newValue));
    };

    return <Context.Provider value={[contextValue, handleSetContextValue]}>{children}</Context.Provider>;
  };

  return { useContext: useCreatedContext, ContextProvider };
}
