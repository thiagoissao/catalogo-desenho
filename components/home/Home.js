import React from 'react';
import { Row, Col, Typography, Space } from 'antd'
import AnimeCard from './AnimeCard';

const Home = ({ animes }) => {

  if (!animes) {
    return <Typography>Loading ...</Typography>
  }

  return (
    <Row gutter={16} >
      {animes.data.map(anime => (
        <Col xs={24} xl={6}>
          <AnimeCard anime={anime} />
        </Col>
      ))}
    </Row>
  );
}

export default Home;
