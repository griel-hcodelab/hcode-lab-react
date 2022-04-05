import './App.css';
import Header from '../Components/Header';
import Player from '../Components/Player';

function App() {

  const appData = {
    title: "Curso Hcode React Developer - 2022",
    link: "https://www.griel.dev.br"
  }

  return (
    <div className="App">
      <Header title={appData.title} link={appData.link} />
      <Player /> 
    </div>
  );
}

export default App;
