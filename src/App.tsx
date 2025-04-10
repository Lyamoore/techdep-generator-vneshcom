import { InputDNDList } from './components/InputDNDList';

function App() {
  return (
    <div style={{ background: 'var(--bg-color)', height: '100vh', padding: '40px' }}>
      <InputDNDList
        options={[
          { value: '1', label: 'Лайки' },
          { value: '2', label: 'Комментарии' },
          { value: '3', label: 'Репосты' },
        ]}
        title="Выберите приоритет активностей розыгрыша"
        name="adsf"
      />
    </div>
  );
}

export default App;
