import './App.sass';
import { Header } from './components/Header'
import { Project } from './components/Project'
import {Box} from "./components/Box";
import ReactArcText from 'react-arc-text-fix';
import {Skills} from "./components/Skills";
import {Arrow} from "./icons/Arrow";
import ScrollAnimation from "react-animate-on-scroll";
import Wave from 'react-wavify';
import Slider from "react-slick";

function App() {

    var carouselSettings = {
        dots: false,
        infinite: true,
        speed: 1000,
        easing: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1
    };

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
        <Header name={"THOMAS GARCIA"} onClick={() => scrollToTop()}></Header>
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
            <Wave fill='#d61a1a'
                  paused={false}
                  options={{
                      height: 20,
                      amplitude: 20,
                      speed: 0.15,
                      points: 3
                  }}
            />
            <div className={"full-height design-statement-container eurostile"}>
                <div className={"design-statement"}>
                    <div>
                        <ScrollAnimation animateIn={"fadeInRight"}>
                            Hello I’m Thomas, web developer/UX Designer, I’m 21 years old and, have been developing for the last 6 years.
                        </ScrollAnimation>
                    </div>
                    <div>
                        <ScrollAnimation animateIn={"fadeInLeft"}>
                            During my past experiences I could realize the lack of communication between the design and development teams who unfortunately understand each other very poorly.
                        </ScrollAnimation>
                    </div>
                    <div>
                        <ScrollAnimation animateIn={"fadeInRight"}>
                            Indeed, as a developer I wanted to study design in order to connect these two worlds. My experience as a developer allows me to know what is feasible or not when creating a design, I guide my choices in order to obtain a convincing design while saving time to the developers.
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
            <Wave fill='#3a3a3a'
                  className={"wave"}
                  paused={false}
                  options={{
                      height: 20,
                      amplitude: 20,
                      speed: 0.15,
                      points: 3
                  }}
            />
        <div className={"w-100 project-section d-flex flex-column align-items-center pt-5"}>
            <div className={"justify-content-center w-75 pt-5"}>
                <Slider {...carouselSettings}>
                    <Project delay={0.5} title={"SOUND VISUALIZER"} content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}>
                        <div className={"m-1"} style={{
                            width: '100%',
                            height: '600px',
                            backgroundColor: 'black',
                            borderRadius: '8px'
                        }}>
                        </div>
                    </Project>
                    <Project delay={0.5} title={"SOUND VISUALIZER"} content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}>
                        <div className={"m-1"} style={{
                            width: '100%',
                            height: '600px',
                            backgroundColor: 'black',
                            borderRadius: '8px'
                        }}>
                        </div>
                    </Project>
                    <Project delay={0.5} title={"SOUND VISUALIZER"} content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}>
                        <div className={"m-1"} style={{
                            width: '100%',
                            height: '600px',
                            backgroundColor: 'black',
                            borderRadius: '8px'
                        }}>
                        </div>
                    </Project>
                </Slider>
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
