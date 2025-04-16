import { BrowserRouter, Route, Routes } from 'react-router';

import { FormContextProvider } from './components/FormContext';
import { FinalPage } from './pages/FinalPage';
import { MVPFormPage } from './pages/MVPFormPage';

function App() {
  return (
    <div style={{ background: 'var(--bg-color)', height: '100vh', padding: '40px' }}>
      <FormContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={MVPFormPage} />
            <Route path="/final" Component={FinalPage} />
          </Routes>
        </BrowserRouter>
      </FormContextProvider>
    </div>
  );
}

export default App;
