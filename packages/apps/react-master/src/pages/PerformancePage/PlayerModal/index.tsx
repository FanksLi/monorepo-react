import React, { useEffect, useRef } from "react";
import { Modal } from "antd";
import rrwebPlayer from "rrweb-player";
import "rrweb-player/dist/style.css"; // 引入播放器样式

interface PlayerModalProps {
  open: boolean;
  hanldeColse: () => void;
  events: any[];
}
export default function PlayerModal(props: PlayerModalProps) {
  const { open, hanldeColse, events } = props;
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (events && events.length > 0 && playerRef.current) {
      // 初始化播放器
      new rrwebPlayer({
        target: playerRef.current,
        props: {
          events,
          width: 960, // 设置播放器宽度
          height: 540, // 设置播放器高度
        },
      });
    }
  }, [events]);
  return (
    <Modal
      open={open}
      onCancel={hanldeColse}
      width={1024}
      footer={null}
      centered
      styles={{ content: { display: "inline-block" } }}
    >
      {open ? <div ref={playerRef} style={{ height: "100%", width: "100%" }} /> : null}
    </Modal>
  );
}
