import React, { useState, useEffect } from 'react'
import Layout from '../components/pure/Layout'
import HomeContent from '../components/home/Home'
import useSWR from 'swr'
import { BASE_URL } from '../services/api'
import axios from 'axios'
import { useRouter } from 'next/router'
import { ANIME_PAGINATION_SIZE } from '../utils/constants'

const fetcher = url => axios.get(url).then(res => res.data)

const Home = () => {
  const router = useRouter()
  const [page, setPage] = useState(+router.query.page || 1)
  const { data, error } =
    useSWR(`${BASE_URL}/anime?page[limit]=${ANIME_PAGINATION_SIZE}&page[offset]=${ANIME_PAGINATION_SIZE * (page - 1)}`, fetcher)

  const handleChangePagination = page => {
    router.push(`?page=${page}`, undefined, { shallow: true })
  }

  useEffect(() => {
    setPage(+router.query.page)
  }, [router.query.page])

  return (
    <Layout>
      <HomeContent
        error={error}
        page={page}
        onChange={handleChangePagination}
        animes={data}
      />
    </Layout>
  )
}
export default Home
