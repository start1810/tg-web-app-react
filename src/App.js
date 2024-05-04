import './App.css';
import { useEffect } from 'react';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';
import Button from './components/Button/Button';
import ProductItem from './components/ProductItem/ProductItem';
import RunnerForm from './components/RunnerForm/RunnerForm';

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
      </Routes>
    </div>
  );
}

export default App;
