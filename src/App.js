import './App.sass';
import { Header } from './components/Header'
import { Project } from './components/Project'
import {Box} from "./components/Box";
import ReactArcText from 'react-arc-text-fix';
import {Skills} from "./components/Skills";
import {Arrow} from "./icons/Arrow";
import ScrollAnimation from "react-animate-on-scroll";

function App() {

    const scrollToBottom = () => {
        var bottomEl = document.getElementById("endPage");
        bottomEl.scrollIntoView({ behavior: "smooth" });
    }
    const scrollToTop = () => {
        var topEl = document.getElementById("topPage");
        topEl.scrollIntoView({behavior: "smooth"});
    }

    return (<>
    <div id={"topPage"} className={"headline d-flex flex-column align-items-center"}>
        <Header name={"THOMAS GARCIA"}></Header>
      <div className={"d-flex flex-column main-container align-items-center col-sm-11 col-md-9 col-lg-11 col-xl-6"}>
          <div className={"d-flex flex-column w-100 align-items-center"}>
              <ReactArcText text={"THOMAS GARCIA - WEB DEVELOPER"} direction={1} arc={290} class={"eurostile text-red"}/>
              <div className={"circle-div"}>
                  <Box />
              </div>
              <Skills></Skills>
              <div className={"mt-5 d-flex flex-column align-items-center"}>
                  <ScrollAnimation animateIn={"rotateIn"} >
                      <Arrow onClick={() => scrollToBottom()} />
                  </ScrollAnimation>
                  <div className={"headline text-red"}>My work</div>
              </div>
          </div>
      </div>
    </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#3a3a3a" fill-opacity="1" d="M0,32L80,69.3C160,107,320,181,480,176C640,171,800,85,960,64C1120,43,1280,85,1360,106.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
        <div className={"w-100 project-section d-flex flex-column align-items-center"}>
            <div className={"d-flex justify-content-center col-sm-11 col-md-9 col-lg-11 col-xl-6"}>
                    <Project delay={0.5} title={"SOUND VISUALIZER"} content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}>
                        <div className={"m-1"} style={{
                            width: '100%',
                            height: '600px',
                            backgroundColor: 'black',
                            borderRadius: '8px'
                        }}>
                        </div>
                    </Project>
            </div>

            <div id={"endPage"} className={"w-100 d-flex flex-column align-items-center"} >
                    <Arrow direction={"up"} onClick={() => scrollToTop()} />
                    <div className={"eurostile text-red mb-4"}>Back to top</div>
            </div>
        </div>


        </>
);
}

export default App;
