import AgentCard from './components/AgentCard';
import jettImage from './assets/jett.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Agentes do Valorant</h1>
        
        <AgentCard
          image={jettImage}
          name="Jett"
          description="Representando sua terra natal, a Coreia do Sul, Jett tem um estilo de luta ágil e evasivo que permite que ela assuma riscos como ninguém."
        />
      </header>
    </div>
  );
}

export default App;