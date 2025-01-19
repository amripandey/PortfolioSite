// import { delay, motion, useAnimationControls } from "framer-motion";
// import { useEffect } from "react";

// //state
// import { useSelector, useDispatch } from "react-redux";
// import { setIsNavActive, setSectionFullScreen } from "../../state/pageSlice";

// //sections
// import About from "../About";
// import Blogs from "../Blogs";
// import Books from "../Books";
// import Resume from "../Resume";
// import Projects from "../Projects";

// export default function PageSections() {
//   const isActive = useSelector((state) => state.pageState.isNavActive);
//   const isFullScreen = useSelector(
//     (state) => state.pageState.isSectionFullScreen
//   );
//   const elementName = useSelector((state) => state.pageState.navElementName);
//   const dispatch = useDispatch();

//   const containerControls = useAnimationControls();
//   const screenControls = useAnimationControls();
//   const arrowDirectionControls = useAnimationControls();

//   const varients = {
//     up: {
//       rotate: 180,
//       boxShadow: "0px 0px 20px 5px rgba(255, 255, 255, 0.75)",
//       transition: {
//         duration: 1,
//         delay: 0,
//       },
//     },
//     down: {
//       rotate: 0,
//       boxShadow: "0px 0px 20px 5px rgba(255, 255, 255, 0.75)",
//       transition: {
//         duration: 1,
//         delay: 0,
//       },
//     },
//     close: {
//       opacity: 0,
//       y: 1000,
//       transition: {
//         duration: 1,
//         delay: 0,
//       },
//     },
//     open: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: 0,
//         duration: 0.5,
//       },
//     },
//     full: {
//       y: "-65vh",
//       transition: {
//         delay: 0,
//         duration: 1,
//       },
//     },
//     half: {
//       y: 0,
//       transition: {
//         delay: 0,
//         duration: 1,
//       },
//     },
//   };

//   const selectComponent = {
//     "About me": <About />,
//     Projects: <Projects />,
//     Blogs: <Blogs />,
//     Books: <Books />,
//     Resume: <Resume />,
//   };

//   useEffect(() => {
//     isActive
//       ? containerControls.start("open")
//       : containerControls.start("close");

//     isFullScreen
//       ? (() => {
//         screenControls.start("full");
//         arrowDirectionControls.start("up");
//       })()
//       : (() => {
//         screenControls.start("half");
//         arrowDirectionControls.start("down");
//       })();
//   }, [isActive, isFullScreen]);

//   return (
//     <motion.div
//       variants={varients}
//       animate={screenControls}
//       initial="half"
//       className="relative w-screen bg-black text-white"
//     >
//       <motion.div
//         variants={varients}
//         animate={containerControls}
//         initial="close"
//         onMouseOut={() => dispatch(setIsNavActive(false))}
//         onMouseOver={() => dispatch(setIsNavActive(true))}
//         className="Sections"
//       >
//         <div className="absolute top-2 left-8 w-10 h-10 bg-white rounded-full">
//           <motion.svg
//             whileHover={{ scale: 1.1 }}
//             variants={varients}
//             animate={arrowDirectionControls}
//             initial="down"
//             className="p-1 rounded-full"
//             data-name="1-Arrow Up"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 32 32"
//             onClick={() => dispatch(setSectionFullScreen())}
//           >
//             <path d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z" />
//           </motion.svg>
//         </div>
//         {selectComponent[elementName]}
//       </motion.div>
//     </motion.div>
//   );
// }
