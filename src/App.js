import './App.css';
import { useEffect } from 'react';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';
import RunnerForm from './components/RunnerForm/RunnerForm';
import ProgramList from './components/ProgramList/ProgramList';

function App() {
  const {tg, onToggleButton} = useTelegram();
  useEffect(() => {
    tg.ready();
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<ProductList />}/>
        <Route path={'form'} element={<Form />}/>
        <Route path={'runnerform'} element={<RunnerForm />}/>
        <Route path={'runnerprogram'} element={<ProgramList />}/>
        
      </Routes>
    </div>
  );
}

export default App;
