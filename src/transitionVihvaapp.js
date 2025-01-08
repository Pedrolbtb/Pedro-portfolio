import {motion} from "framer-motion";
import VihvaApp from "./assets/vihvaapp.jpg";

const transition = (OgComponent) => {
    return () => (
        <>
        <OgComponent/>
        <motion.div className="slide-inva" 
        initial={{scaleY: 0}} 
        animate={{scaleY: 0}}
        exit={{scaleY: 1}}
        transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
        />
        <motion.div className="slide-outva" 
        initial={{scaleY: 1}} 
        animate={{scaleY: 0}}
        exit={{scaleY: 0}}
        transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
        />

        </>
    )
}

export default transition;