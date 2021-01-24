import React from 'react';
import { Row, Col, Spin, Pagination, Typography } from 'antd'
import AnimeCard from './AnimeCard';
import Animate from 'rc-animate'
import { ANIME_PAGINATION_SIZE } from '../../utils/constants';
import Image from 'next/image'

const Home = ({ animes, onChange, page, error }) => {

  if (error) {
    return (
      <Row justify='center'>
        <Col>
          <Image
            src='/error.svg'
            width={250}
            height={250}
            alt='Catalogo error'
          />
        </Col>
        <Col span={24}>
          <Row justify='center'>
            <Col>
              <Typography>Erro ao carregar o catálogo</Typography>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }

  if (!animes) {
    return <Spin size='large' />
  }

  return (
    <Animate
      transitionName='fade'
      transitionAppear
    >
      <Row gutter={16} >
        <Col xs={24}>
          <Row justify='end'>
            <Col>
              <Pagination
                current={page}
                defaultPageSize={ANIME_PAGINATION_SIZE}
                onChange={onChange}
                total={animes.meta.count}
                pageSizeOptions={[]}
              />
            </Col>
          </Row>
        </Col>
        {animes.data.map((anime, index) => (
          <Col key={index} xs={24} md={12} lg={8} xl={6} xxl={4}>
            <AnimeCard anime={anime} />
          </Col>
        ))}

      </Row>
    </Animate>
  );
}

export default Home;
