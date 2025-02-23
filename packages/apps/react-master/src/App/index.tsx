import React from "react";
import * as styles from './index.module.css';
// import "./index.css";

interface Props {
}

export default function App(props: Props) {
  return (
    <div
      className={styles.box}
    //   className="box"
    >
      <div className="h-full w-full">
        <h1 className="font-bold">Hello World</h1>
        <div className="bg-amber-200 ">
          content
        </div>
      </div>
    </div>
  );
}
