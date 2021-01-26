import React from 'react';
import Error from '../../components/pure/Error'
import { Col, Row, Typography, Image, Button, Spin } from 'antd'
import { format, parse } from 'date-fns'
import brLocale from 'date-fns/locale/pt-BR'
import { useRouter } from 'next/router'
import YouTube from 'react-youtube';

const { Title, Text } = Typography

const formatDate = date => date ?
  `${format(parse(date, 'yyyy-MM-dd', new Date()), "dd 'de' LLLL 'de' yyyy",
    { locale: brLocale })}` : '-'

const Details = ({ anime, error }) => {
  const router = useRouter()

  if (error) {
    return (
      <Error
        src='/error.svg'
        alt='Anime não encontrado'
        text='Anime não encontrado'
      />
    )
  }

  if (!anime) {
    return (
      <Col xs={24}>
        <Row justify='center'>
          <Col>
            <Spin size='large' />
          </Col>
        </Row>
      </Col>
    )
  }

  const { attributes } = anime

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <Row gutter={[32, 32]}>
      <Col xs={24}>
        <Button onClick={() => router.push('/')}>
          Voltar
        </Button>
      </Col>
      <Col xs={24} md={12} xl={6}>
        <Row gutter={[32, 16]}>
          <Col xs={24}>
            <Image
              style={{ borderRadius: 24 }}
              height={500}
              width='100%'
              alt='Anime Poster'
              src={attributes.posterImage?.large}
            />
          </Col>
          <Col xs={24}>
            <Row gutter={[32, 8]}>
              <Col xs={24}>
                <Text>
                  <b>Data de Lançamento: </b>
                  {formatDate(attributes.startDate)}
                </Text>
              </Col>
              <Col xs={24}>
                <Text>
                  <b>Ranking:</b> {attributes.ratingRank ? `${attributes.ratingRank}º` : '-'}
                </Text>
              </Col>
              <Col xs={24}>
                <Text>
                  <b>Avaliação:</b> {attributes.averageRating ? `${attributes.averageRating}%` : '-'}
                </Text>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col xs={24} md={12} xl={18}>
        <Row gutter={[32, 32]}>
          <Col xs={24}>
            <Title>
              {attributes.titles.en_jp}
            </Title>
          </Col>
          <Col xs={24}>
            <Text>
              {attributes.description || 'Sem Descrição.'}
            </Text>
          </Col>
          <Col xs={24} xxl={16}>
            <YouTube videoId={attributes.youtubeVideoId} opts={opts} />
          </Col>
        </Row>
      </Col>
      {
        attributes.coverImage?.large && (
          <Col xs={24}>
            <Image
              style={{ borderRadius: 24 }}
              height={window.innerWidth < 800 ? 200 : 400}
              width='100%'
              preview={false}
              alt='Anime Banner'
              src={attributes.coverImage?.large}
            />
          </Col>
        )
      }
    </Row>
  );
}

export default Details;
