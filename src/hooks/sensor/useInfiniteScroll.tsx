import {useRef} from "react";

function useInfiniteScroll(callback: any) {
  const observer = useRef<any>(new IntersectionObserver((entries:any[], observer:any) => {
    entries.forEach((entry : any) => {
      if (entry.isIntersecting) {
        callback();
      }
    });
  }, {threshold: 1}));
  const observe = (el:any) => {
    observer.current.observe(el);
  }
  
  const unobserve = (el:any) => {
    observer.current.unobserve(el);
  }
  
  return [observe, unobserve];
}

export default useInfiniteScroll;