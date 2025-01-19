// import PageSections from "./components/MainPage/PageSections";
import PageNavigation from "./components/MainPage/PageNavigation";
import PageTitle from "./components/MainPage/PageTitle";
import Sections from "./components/MainPage/Section";
import BackgroundLines from "./components/extra/backgroundlines";
import MouseFollower from "./components/extra/MouseFollower";

//framer motions
import { useAnimationControls } from "framer-motion";
import { motion } from "framer-motion";

function App() {

  return (
    <main className="bg-[#1b1b2a] w-screen h-screen overflow-hidden absolute top-0 z-0" >
      {/*Backgroun animation*/}
      <BackgroundLines />
      <MouseFollower />

      {/* Introductions */}
      < div className="absolute top-0 z-20 w-full h-screen " >
        <div className="flex flex-col w-full h-full justify-center items-center">
          <PageTitle />
          <PageNavigation />
        </div>
      </div >

      {/* Sections */}
      < Sections />
    </main >
  );
}

export default App;

/*
# Bugs    


# Future works
*/
