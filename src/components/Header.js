// Header.js

import React from 'react';
import { Layout, Button } from 'antd';
//as imported react and Ant Design library  
import { MenuUnfoldOutlined, MenuFoldOutlined, LoginOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import './header.css';
// as header consists of a collapsible sidebar
const { Header } = Layout;
//it is component from Ant Design used to define the layout structure.
// header functional component
// It receives two props: collapsed and handleToggleSidebar.
const header = ({ collapsed, handleToggleSidebar }) => {
    return (
        //These are icon components from Ant Design used to display icons inside the buttons.
        <Header className="header">
            {collapsed ? (
                <MenuUnfoldOutlined onClick={handleToggleSidebar} className="header-icon" />
            ) : (
                <MenuFoldOutlined onClick={handleToggleSidebar} className="header-icon" />
            )}
            <div className="header-buttons">
                <Button type="primary" icon={<LoginOutlined />}>
                    Login
                </Button>
                <Button type="primary" icon={<LogoutOutlined />}>
                    Logout
                </Button>
                <Button type="primary" icon={<UserOutlined />}>
                    Profile
                </Button>
                {/* the "Login" button with the LoginOutlined icon.
                The "Logout" button with the LogoutOutlined icon.
               The "Profile" button with the UserOutlined icon. */}
            </div>
        </Header>
    );
};

export default header;
