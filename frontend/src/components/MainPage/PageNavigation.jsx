import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { setIsNavActive, setNavElementName } from "../../state/pageSlice";

export default function PageNavigation() {
  const elementName = useSelector((state) => state.pageState.navElementName);
  const dispatch = useDispatch();

  function displayWindow(elementName) {
    dispatch(setIsNavActive(true));
    dispatch(setNavElementName(elementName));
  }

  function NavElement({ elementName }) {
    return (
      <h3
        onMouseOut={() => dispatch(setIsNavActive(false))}
        onMouseOver={() => displayWindow(elementName)}
        className="NavElement"
      >
        {elementName}
      </h3>
    );
  }

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="NavBar"
    >
      <NavElement elementName="About me" />
      <NavElement elementName="Projects" />
      <NavElement elementName="Blogs" />
      <NavElement elementName="Books" />
      <NavElement elementName="Resume" />
    </motion.nav>
  );
}
