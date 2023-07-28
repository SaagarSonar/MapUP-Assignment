import React from 'react';
import { Layout } from 'antd';
//as imported react and Ant Design library  
import './footer.css';
// imported the CSS file

const { Footer } = Layout;

const footer = () => {
    return (
        <Footer className="custom-footer">
            Copyright © 2023 Sagar Sonar. All Rights Reserved
        </Footer>
    );
};

export default footer;
