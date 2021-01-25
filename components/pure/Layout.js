import React from 'react';
import { Layout, Row, Col, } from 'antd'
import '../../styles/antd.less'

const CustomLayout = ({ children }) => {
  const { Content, Header } = Layout
  return (
    <Layout>
      <Header>
      </Header>
      <Content style={{ padding: 24, minHeight: '100vh' }}>
        <Row justify='center'>
          <Col style={{ maxWidth: 1800, width: '100%' }}>
            {children}
          </Col>
        </Row>
      </Content>
    </Layout >
  );
}

export default CustomLayout;
