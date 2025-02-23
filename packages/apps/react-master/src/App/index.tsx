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
      hello app3
    </div>
  );
}
