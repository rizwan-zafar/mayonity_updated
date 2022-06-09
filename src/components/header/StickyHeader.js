import {useLayoutEffect, useState} from "react";

export default function useStickyHeader(offset = 0) {
    const [sticky, setSticky] = useState(false);
  
    const handleScroll = () => {
      setSticky(window.scrollY > offset);
    };
    
    useLayoutEffect(() => {
        window.addEventListener('scroll', handleScroll);
            return(() => {
                window.removeEventListener('scroll', handleScroll);
        });
    });
    
    return sticky;
}