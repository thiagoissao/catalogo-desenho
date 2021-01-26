import React from 'react';
import { Row, Col, Spin, Pagination, Input } from 'antd'
import AnimeCard from './AnimeCard';
import Animate from 'rc-animate'
import { ANIME_PAGINATION_SIZE } from '../../utils/constants';
import Error from '../../components/pure/Error'

const Home = ({
  animes,
  onChange,
  page,
  error,
  filterValue,
  onChangeFilterValue
}) => {

  if (error) {
    return (
      <Row justify='center'>
        <Col>
          <Error
            src='/error.svg'
            alt='Catalogo error'
            text='Erro ao carregar o catálogo'
          />
        </Col>
      </Row>
    )
  }

  return (
    <Animate
      transitionName='fade'
      transitionAppear
    >
      <Row gutter={[32, 32]} >
        <Col xs={24}>
          <Row gutter={[8, 8]} justify='space-between'>
            <Col xs={24} sm={8} md={6} xl={4}>
              <Input
                allowClear
                size='large'
                placeholder='Faça uma pesquisa'
                value={filterValue}
                onChange={e => onChangeFilterValue(e.target.value)}
              />
            </Col>
            {
              animes && (
                <Col>
                  <Pagination
                    current={page}
                    defaultPageSize={ANIME_PAGINATION_SIZE}
                    onChange={onChange}
                    total={animes.meta.count}
                    pageSizeOptions={[]}
                  />
                </Col>
              )
            }
          </Row>
        </Col>

        {!animes && (
          <Col xs={24}>
            <Row justify='center'>
              <Col>
                <Spin size='large' />
              </Col>
            </Row>
          </Col>
        )}

        {animes && animes.data.map((anime, index) => (
          <Col key={index} xs={24} md={12} lg={8} xl={6} xxl={4}>
            <AnimeCard anime={anime} />
          </Col>
        ))}
      </Row>
    </Animate>
  );
}

export default Home;
