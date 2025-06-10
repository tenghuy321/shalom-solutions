import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom"
import { FaArrowUpLong } from "react-icons/fa6";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);


        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])
    return (
        <button onClick={scrollToTop} className={`fixed right-5 bottom-5 z-[100] bg-[#411259] p-4 rounded-full text-white transition-all duration-300 ease-in-out animate-bounce ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <FaArrowUpLong />
        </button>
    )
}

export default ScrollToTop