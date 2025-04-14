import { useEffect } from 'react';

import { useMainFormContext } from '../components/FormContext';

export const MainFormPage = () => {
  const [formData, setFormData] = useMainFormContext();

  useEffect(() => {
    setTimeout(() => {
      setFormData({ participantsType: 'list', participantsList: ['1', '2', '3'] });
    }, 3000);
  }, [formData, setFormData]);

  return <div>{JSON.stringify(formData)}</div>;
};
