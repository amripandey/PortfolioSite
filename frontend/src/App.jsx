import { useEffect } from "react";

//page inside components
import PageSections from "./components/MainPage/PageSections";
import PageNavigation from "./components/MainPage/PageNavigation";
import PageTitle from "./components/MainPage/PageTitle";

//states
import { useSelector, useDispatch } from "react-redux";
import {
  setIsNavActive,
  setNavElementName,
  setSectionFullScreen,
} from "./state/pageSlice";

//framer motions
import { useAnimationControls } from "framer-motion";

function App() {
  const isActive = useSelector((state) => state.pageState.isNavActive);

  return (
    <main className="bg-stone-950 w-screen h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Introductions */}
      <div className="flex flex-col">
        <PageTitle />

        {/* navigations */}
        <PageNavigation />
      </div>

      {/*sections */}
      <PageSections />
    </main>
  );
}

export default App;

/*
# Bugs    


# Future works
1) redux toolkit state managment install [X]
2) 
*/
