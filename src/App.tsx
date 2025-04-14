import { FormContextProvider } from './components/FormContext';
import { InputDNDList } from './components/InputDNDList';
import { MainFormPage } from './pages/MainFormPage';

function App() {
  return (
    <div style={{ background: 'var(--bg-color)', height: '100vh', padding: '40px' }}>
      <FormContextProvider>
        <InputDNDList
          options={[
            { value: '1', label: 'Лайки' },
            { value: '2', label: 'Комментарии' },
            { value: '3', label: 'Репосты' },
          ]}
          title="Выберите приоритет активностей розыгрыша"
          name="adsf"
        />

        <MainFormPage />
      </FormContextProvider>
    </div>
  );
}

export default App;
