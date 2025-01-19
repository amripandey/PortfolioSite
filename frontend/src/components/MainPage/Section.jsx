import About from "../About";
import Blogs from "../Blogs";
import Books from "../Books";
import Resume from "../Resume";
import Projects from "../Projects";

import { useSelector, useDispatch } from "react-redux";
// import { isPeekWindowActive } from "../../state/pageSlice";

export default function Sections() {
    const sectionName = useSelector((state) => state.pageState.activeSectionName);
    const isPeekWindowActive = useSelector((state) => state.pageState.isPeekWindowActive);
    const dispatch = useDispatch();

    const selectComponent = {
        "About me": <About />,
        "Projects": <Projects />,
        "Blogs": <Blogs />,
        "Books": <Books />,
        "Resume": <Resume />,
    };

    return (
        <section className={isPeekWindowActive ? "absolute bottom-0 z-30 bg-amber-400 w-full border-t rounded-t-md" : "hidden"}>
            {selectComponent[sectionName]}
        </section >
    )
}