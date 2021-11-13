import './App.sass';
import { Header } from './components/Header'
import { Terminal } from './components/Terminal'
import { Project } from './components/Project'

function App() {
  return (
    <div className={"App headline"}>
      <Header name={"THOMAS GARCIA"}></Header>
      <div className={"main-container"}>
        <Terminal></Terminal>
        <Project title={"SOUND VISUALIZER"}>
          <div style={{
            width: '100%',
            height: '400px',
            backgroundColor: 'black',
            borderRadius: '10px',
            marginTop: '10px'
          }}>
          </div>
        </Project>
        <Project title={"TERRAIN GENERATOR"}>
          <div style={{
              width: '100%',
              height: '400px',
              backgroundColor: 'black',
              borderRadius: '10px',
              marginTop: '10px'
            }}>
            </div>
        </Project>
        <Project title={"ADOBE XD"}>
          <div style={{
              width: '100%',
              height: '400px',
              backgroundColor: 'black',
              borderRadius: '10px',
              marginTop: '10px'
            }}>
            </div>
        </Project>
      </div>
    </div>
  );
}

export default App;
