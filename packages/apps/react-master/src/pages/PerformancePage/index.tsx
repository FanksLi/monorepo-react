import React, { useEffect, useRef } from "react";
import performanceSDK from "@fan/performanceSDK";
import { Button } from "antd";
import { Replayer } from 'rrweb';
import 'rrweb/dist/rrweb.css';
import './index.css';


export default function Page() {
    const performanceRef: any = useRef(null);
    useEffect(() => {
      performanceRef.current = performanceSDK();
    }, []);
    function handleClick() {
       const res =  performanceRef.current.recordScreen.getEventList();
       const palyer = new Replayer(res[0].eventList);
       palyer.play();
       console.log(res);
    }
    return (
        <div>
            <Button onClick={handleClick}>回放</Button>
            
        </div>
    );
}