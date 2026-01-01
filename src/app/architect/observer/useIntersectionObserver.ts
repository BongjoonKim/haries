import {useEffect, useRef, useState} from "react";

interface UseIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
}

export function useIntersectionObserver(props : UseIntersectionObserverProps = {}) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null!); // 타입 명시
  const threshold = props.threshold ?? 0.5;
  const rootMargin = props.rootMargin ?? "0px";
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      console.log("entry", entry)
      if (entry.isIntersecting) {
        setIsVisible(true);
        // 한 번 보이면 oberserver 해제
        observer.disconnect();
      }
    }, {
      threshold : threshold, rootMargin : rootMargin,
      // trackVisibility: true,
      // delay: 100
    })
    
    const currrentElement = ref.current;
    if (currrentElement) {
      observer.observe(currrentElement)
    }
    return () => {
      observer.disconnect();
    }
  }, [threshold, rootMargin]);
  
  return {ref, isVisible}
  
}


//threshold, rootMargin
// observer.disconnect();와 observer.unObserved();