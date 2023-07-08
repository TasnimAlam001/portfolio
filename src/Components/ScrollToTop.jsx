import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";


const ScrollToTop = () => {
    const { pathname } = useLocation();
    const ref = useRef(null);
  
    useEffect(() => {
      if (ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, [pathname]);
    return <div ref={ref} />
};

export default ScrollToTop;