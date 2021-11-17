import './App.sass';
import { Header } from './components/Header'
import { Terminal } from './components/Terminal'
import { Project } from './components/Project'
import {Box} from "./components/Box";

function App() {

    return (
    <div className={"App headline d-flex justify-content-center"}>
        <Header name={"THOMAS GARCIA"}></Header>
      <div className={"d-flex flex-column main-container align-items-center col-sm-11 col-md-9 col-lg-8 col-xl-6"}>
          <div className={"circle-div "}>
              <Box />
          </div>
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
