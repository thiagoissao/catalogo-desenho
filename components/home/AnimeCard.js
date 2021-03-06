import React from 'react';
import { Card } from 'antd'
import { useRouter } from 'next/router'

const { Meta } = Card

const Cover = ({ alt, src }) =>
  <img
    style={{
      borderRadius: 24,
    }}
    alt={alt}
    height={300}
    src={src}
  />


const AnimeCard = ({ anime }) => {
  const router = useRouter()
  const { attributes } = anime
  return (
    <Card
      onClick={() => router.push(`anime/${anime.id}`)}
      hoverable
      cover={<Cover alt={attributes?.titles.en_jp} src={attributes?.posterImage?.large} />}
      style={{ width: '100%', borderRadius: 24, marginTop: 16 }}>
      <Meta
        style={{
          height: 200,
          overflow: 'hidden',
        }}
        title={attributes?.titles.en_jp}
        description={attributes?.synopsis}
      />
    </Card>
  );
}

export default AnimeCard;
