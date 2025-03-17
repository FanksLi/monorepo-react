import React, { useEffect, useRef, useState } from "react";
import * as styles from "./index.module.less";

interface Props {
  children: React.ReactNode;
  time?: number;
}
export default function Swiper(props: Props) {
  const { children, time = 2000 } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const timer = useRef<number>(null);

  useEffect(() => {
    init();
    return () => {
      if (timer.current !== null) {
        clearInterval(timer.current);
      }
    };
  }, [time]);

  function init() {
    timer.current = intervalTime(time, () => {
        setCurrentIndex(cIndex => {
          return (cIndex + 1) % React.Children.count(children);
        });
    });
  }
  function intervalTime(num: number, func: () => void): number {
    const timer = setTimeout(() => {
      func();
      intervalTime(num, func);
    }, num);

    for(var i = 0; i < 6; i++){
      async function test(){
        await Promise.resolve();
        console.log(i);
        return () => {
          console.log(i);
        }
      }
      test();
    }
    return timer;
  }
  return (
    <div className={styles.wrap}>
      <div className={styles.box} style={{ transform: `translateX(${-currentIndex * 100}%)` }}>{children}</div>
    </div>
  );
}
