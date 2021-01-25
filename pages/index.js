import React, { useState, useEffect } from 'react'
import Layout from '../components/pure/Layout'
import HomeContent from '../components/home/Home'
import useSWR from 'swr'
import { BASE_URL, fetcher } from '../services/api'
import { useRouter } from 'next/router'
import { ANIME_PAGINATION_SIZE } from '../utils/constants'

const buildParams = (filter, paginationSize, page) => {
  const params = new URLSearchParams()
  if (filter) {
    params.append('filter[text]', filter)
  }
  params.append('page[limit]', paginationSize)
  params.append('page[offset]', paginationSize * (page - 1))
  return params.toString()
}

const Home = () => {
  const router = useRouter()

  const [filterValue, setFilterValue] = useState('')
  const [page, setPage] = useState(+router.query.page || 1)

  const { data, error } =
    useSWR(`${BASE_URL}/anime?${buildParams(filterValue, ANIME_PAGINATION_SIZE, page)}`,
      fetcher)

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
        filterValue={filterValue}
        onChangeFilterValue={setFilterValue}
      />
    </Layout>
  )
}
export default Home
