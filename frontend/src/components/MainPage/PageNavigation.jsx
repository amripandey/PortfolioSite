import { motion } from "framer-motion";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsPeekWindowActive, setActiveSectionName } from "../../state/pageSlice";

const tabs = [
  { id: "About me", label: "About me" },
  { id: "Projects", label: "Projects" },
  { id: "Blogs", label: "Blogs" },
  { id: "Books", label: "Books" },
  { id: "Resume", label: "Resume" },
];

export default function PageNavigation() {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.pageState.activeSectionName);
  const [hoveredTab, setHoveredTab] = useState(null);

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="lg:NavbarLG NavbarSM border rounded-lg overflow-hidden flex space-x-0 items-center justify-between relative"
    >
      {tabs.map((tab) => (
        <motion.button
          key={tab.id}
          onClick={() => dispatch(setActiveSectionName(tab.id))}
          onMouseEnter={() => setHoveredTab(tab.id)}
          onMouseLeave={() => setHoveredTab(null)}
          className={`relative w-full px-3 py-1.5 font-medium transition uppercase ${activeTab === tab.id ? "text-white font-bold" : "hover:bg-[#0ABDC6]** hover:[text-shadow:_0.5px_0_0_rgb(0_0_0_/_40%)]**"}`}
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          {hoveredTab === tab.id && (
            <motion.span
              layoutId="hoverHighlight"
              className="absolute inset-0 z-0 bg-[#0ABDC6]"
              initial={false}
              animate={{
                scale: 1.1,
                opacity: 0.5,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
            />
          )}
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-[#3fff2d] mix-blend-overlay"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{tab.label}</span>
        </motion.button>
      ))}
    </motion.nav>
  );
}

// 0ABDC6