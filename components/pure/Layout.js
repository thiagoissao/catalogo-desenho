import React from 'react';
import { Layout, Row, Col, Typography, Space } from 'antd'
import '../../styles/antd.less'

const CustomLayout = ({ children }) => {
  const { Content } = Layout
  return (
    <Layout>
      <Content style={{ padding: 24, minHeight: '100vh' }}>
        <Row justify='center'>
          <Col style={{ maxWidth: 1200 }}>
            {children}
          </Col>
        </Row>
      </Content>
    </Layout >
  );
}

export default CustomLayout;
