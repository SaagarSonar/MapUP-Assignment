// Sidebar.js

import React from 'react';
import { Layout, Menu, Switch } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './sidebar.css';
// imported Ant Design library (antd). and react menu,switvh etc

const { Sider } = Layout;//is a component from Ant Design used to define the layout structure.
//menu is a component from Ant Design used to create menus and menu items.
//Switch   is a component from Ant Design used to create a toggle switch.
//UserOutlined is an icon component from Ant Design used to display a user icon.

const sidebar = ({ collapsed, nightMode, onToggleSidebar, onToggleNightMode }) => {
    // sidebar is a functional component. It receives four props: collapsed, nightMode, onToggleSidebar, and onToggleNightMode.
    return (
        <Sider trigger={null} collapsible collapsed={collapsed} className="custom-sidebar">
            <div className="sidebar-logo" onClick={onToggleSidebar}>
                {collapsed ? <div>MapUI</div> : <div>My App</div>}
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} className="sidebar-menu">
                <Menu.Item key="1" icon={<UserOutlined />} className="sidebar-menu-item">
                    Dashboard
                </Menu.Item>
                <Menu.Item key="2" icon={<UserOutlined />} className="sidebar-menu-item">
                    Profile
                </Menu.Item>
                {/* <Menu.Item key="3" icon={<UserOutlined />} className="sidebar-menu-item">
                    Settings
                </Menu.Item> */}
            </Menu>
            <div className="night-mode">
                <span>Night Mode</span>
                <Switch checked={nightMode} onChange={onToggleNightMode} />
            </div>
        </Sider>
    );
};

export default sidebar;
