import React from "react";
import { useOutlet, NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";

const Content = Layout.Content;
const Sider = Layout.Sider;
export default function Home() {
  const outlet = useOutlet();
  const items = [
    {
      key: "1",
      label: <NavLink to="/store" className={({isActive}) => isActive ? 'active' : ''}>store</NavLink>,
    },
  ];
  return (
    <Layout style={{ height: "100%" }}>
      <Sider>
        <Menu
          theme="dark"
          mode="inline"
          items={items}
        />
      </Sider>
      <Content>{!outlet ? <div>首页内容</div> : outlet}</Content>
    </Layout>
  );
}
