import './App.css';
import { useEffect } from 'react';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';
import RunnerForm from './components/RunnerForm/RunnerForm';
import ProgramList from './components/ProgramList/ProgramList';
import StartPage from './components/StartPage/StartPage';
import TempoCalculatorForm from './components/TempoCalculatorForm/TempoCalculatorForm';
import TempoCalculatorResult from './components/TempoCalculatorResults/TempoCalculatorResults';
import SneakersSize2 from './components/SneakersSize/SneakersSize2';
//import SneakersSize2 from './components/SneakersSize/SneakersSize2';

function App() {
  const {tg, onToggleButton} = useTelegram();
  useEffect(() => {
    tg.ready();
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<StartPage />}/>
        <Route path={'form'} element={<Form />}/>
        <Route path={'runnerform'} element={<RunnerForm />}/>
        <Route path={'runnerprogram'} element={<ProgramList />}/>
        <Route path={'tempocalculatorform'} element={<TempoCalculatorForm />}/>
        <Route path={'tempocalculatorresult'} element={<TempoCalculatorResult />}/>
        <Route path={'sneakerssizeform'} element={<SneakersSize2 />}/>
        
      </Routes>
    </div>
  );
}

export default App;
