"use client"
import { Layout, Menu } from "antd"
import { useState } from "react";
import { sidebarItems } from "@/constants/sidebarItems";
import { getUserInfo } from "@/services/auth.service";

const {Sider } = Layout;

const SideBar = () => {
    const [collapsed, setCollapsed] = useState(false);
    
    const { role } = getUserInfo() as any;
    
  return (
      <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          width={280}
          style={{
              overflow: 'hidden',
              height: '100vh',
              position: "sticky",
              left: 0,
              top: 0,
              bottom:0
          }}
      >
          <div
              style={{
                  color: "white",
                  fontSize: "2rem",
                  textAlign: "center",
                  fontWeight: 'bold',
                  marginBottom:'1rem'
          }}
          >
              {
                  collapsed? "UPH" : "PH-University"
              }
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={sidebarItems(role)} />
      </Sider>
  )
}

export default SideBar