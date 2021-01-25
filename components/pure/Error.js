import React from 'react';
import { Row, Col, Typography } from 'antd'
import Image from 'next/image'

const Error = ({ src, alt, text }) => {
  return (
    <Row justify='center'>
      <Col>
        <Image
          src={src}
          width={250}
          height={250}
          alt={alt}
        />
      </Col>
      <Col span={24}>
        <Row justify='center'>
          <Col>
            <Typography>{text}</Typography>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Error;
