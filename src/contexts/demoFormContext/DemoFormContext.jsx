import { createContext, useCallback, useContext, useMemo, useState } from 'react';

const DemoFormContext = createContext(null);

export function DemoFormProvider({ children }) {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);

  const openDemoForm = useCallback(() => {
    setIsDemoFormOpen(true);
  }, []);

  const closeDemoForm = useCallback(() => {
    setIsDemoFormOpen(false);
  }, []);

  const value = useMemo(
    () => ({
      isDemoFormOpen,
      openDemoForm,
      closeDemoForm,
    }),
    [isDemoFormOpen, openDemoForm, closeDemoForm]
  );

  return <DemoFormContext.Provider value={value}>{children}</DemoFormContext.Provider>;
}

export function useDemoForm() {
  const context = useContext(DemoFormContext);

  if (!context) {
    throw new Error('useDemoForm must be used within a DemoFormProvider');
  }

  return context;
}
