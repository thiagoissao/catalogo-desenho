import React from 'react';
import { Layout, Row, Col, Typography, Space } from 'antd'
import '../../styles/antd.less'

const CustomLayout = ({ children }) => {

  const { Title } = Typography
  const { Footer, Header, Content } = Layout
  return (
    <Layout>
      <Header className='layout-header'>
        <Row style={{ height: '100%' }} align='middle'>
          <Col >
            <Title style={{ lineHeight: 0 }} level={2} type='secondary'>
              Catálogo de Animes
            </Title>
          </Col>
        </Row>
      </Header>
      <Content style={{ padding: 24 }}>
        {children}
      </Content>
      <Footer>
        Footer
      </Footer>
    </Layout >
  );
}

export default CustomLayout;
