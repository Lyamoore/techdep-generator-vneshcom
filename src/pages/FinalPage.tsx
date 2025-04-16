import { Link } from 'react-router';

import { useMVPFormContext } from '../components/FormContext';

export const FinalPage = () => {
  const [formData] = useMVPFormContext();

  return (
    <div>
      <Link style={{ color: 'white', background: 'red' }} to="/">
        to main
      </Link>
      {JSON.stringify(formData)}
    </div>
  );
};
