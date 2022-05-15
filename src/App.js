import s from './App.module.css';
import Header from './Header/Header';
import Content from './Content/Content';

function App(props) {
  return (
    <div className={s.global__div}>
      <Header newUsd={props.newUsd} newEur={props.newEur}/>
      <Content newUsd={props.newUsd} newEur={props.newEur}/>
    </div>
  );
}


export default App;
