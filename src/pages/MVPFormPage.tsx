import { useEffect } from 'react';
import { Link } from 'react-router';

import { useMVPFormContext } from '../components/FormContext';

export const MVPFormPage = () => {
  const [formData, setFormData] = useMVPFormContext();

  useEffect(() => {
    setTimeout(() => {
      setFormData({
        activityTypes: { likes: true, comments: false, reposts: false },
        postLink: '',
        shouldSubscribeGroups: [],
        shouldSubscribeVneshcom: false,
      });
    }, 3000);
  }, [formData, setFormData]);

  return (
    <div>
      <Link style={{ color: 'white', background: 'red' }} to="/final">
        to final
      </Link>

      {JSON.stringify(formData)}
    </div>
  );
};
