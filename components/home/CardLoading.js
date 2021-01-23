import React from 'react';
import { Card, Skeleton, Col, Row } from 'antd'

const CardLoading = () => {
  return (
    <Card width={300}>
      <Row>
        <Col span={24}>
          <Skeleton.Image />
        </Col>
        <Col span={24}>

        </Col>
      </Row>
    </Card>
  );
}

export default CardLoading;
