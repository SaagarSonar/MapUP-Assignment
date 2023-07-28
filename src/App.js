// App.js

import React, { useState } from 'react';
import { Layout } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { setNightMode } from './redux/actions';
import FormInput from './FormInput';
import OSMMap from './components/OSMMap';
import CustomHeader from './components/Header';
import CustomSidebar from './components/Sidebar';
import CustomFooter from './components/Footer';


const { Content } = Layout;

const App = () => {
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(false);
  const nightMode = useSelector(state => state.nightMode);

  const handleToggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleToggleNightMode = () => {
    dispatch(setNightMode(!nightMode));
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <CustomSidebar collapsed={collapsed} nightMode={nightMode} onToggleSidebar={handleToggleSidebar} onToggleNightMode={handleToggleNightMode} />
      <Layout>
        <CustomHeader collapsed={collapsed} onToggleSidebar={handleToggleSidebar} />
        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff' }}>
          <h1>Map UI with OpenStreetMap</h1>
          <FormInput />
          <OSMMap />
        </Content>
        <CustomFooter />
      </Layout>
    </Layout>
  );
};

export default App;
