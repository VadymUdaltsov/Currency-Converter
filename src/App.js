import s from './App.module.css';
import Header from './Header/Header';
import Converter from './Content/Converter';

function App(props) {
  return (
    <div className={s.global__div}>
      <Header newUsd={props.newUsd} newEur={props.newEur}/>
      <Converter newUsd={props.newUsd} newEur={props.newEur}/>
    </div>
  );
}


export default App;
