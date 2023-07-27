import { useState, useEffect } from "react"

const useScrollTop = () => {
  const [showButton, setShowButton] = useState(false)

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 600;
      setShowButton(window.scrollY > scrollThreshold)
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {
    showButton,
    scrollToTop: handleScrollToTop
  }
}

export default useScrollTop
