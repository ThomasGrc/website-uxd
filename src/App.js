import './App.sass';
import { Header } from './components/Header'
import { Terminal } from './components/Terminal'
import { Project } from './components/Project'
import {Box} from "./components/Box";
import {Heading} from "./components/Heading";

function App() {

    return (
    <div className={"App headline d-flex justify-content-center"}>
        <Header name={"THOMAS GARCIA"}></Header>
      <div className={"d-flex flex-column main-container align-items-center col-sm-11 col-md-9 col-lg-8 col-xl-6"}>
          <div className={"d-flex flex-column align-items-center full-height"}>
              <div className={"d-flex flex-column align-items-center full-height "}>
                  <Heading text={"THOMAS GARCIA - WEB DEVELOPER"} arc={190} radius={200}/>
                  <div className={"circle-div"}>
                      <Box />
                  </div>
              </div>
          </div>

        <Project title={"SOUND VISUALIZER"} content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}>
            <div style={{
                width: '100%',
                height: '400px',
                backgroundColor: 'black',
                borderRadius: '10px',
                marginTop: '10px'
            }}>
            </div>
        </Project>
          <Project title={"TERRAIN GENERATOR"} content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}>
              <div style={{
                  width: '100%',
                  height: '400px',
                  backgroundColor: 'black',
                  borderRadius: '10px',
                  marginTop: '10px'
              }}>
              </div>
          </Project>
          <Project title={"ADOBE XD"} content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}>
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
