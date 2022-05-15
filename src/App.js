import s from './App.module.css';
import Header from './Header/Header';
import Converter from './Content/Converter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReviewContent from './Content/ReviewContent/ReviewContent';

function App(props) {
  return (
    <BrowserRouter>
      <div className={s.global__div}>
        <Header newUsd={props.newUsd} newEur={props.newEur} />
        <Routes>
          <Route path='/converter' element={<Converter newUsd={props.newUsd} newEur={props.newEur} />} />
          <Route path='review' element={<ReviewContent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
