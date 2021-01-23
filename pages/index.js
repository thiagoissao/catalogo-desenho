import React from 'react'
import Layout from '../components/pure/Layout'
import HomeContent from '../components/home/Home'
import useSWR from 'swr'
import { BASE_URL } from '../services/api'
import axios from 'axios'

// const fetcher = url => axios.get(url).then(res => res.data)

const Home = () => {

  // const { data, error } = useSWR(`${BASE_URL}/anime`, fetcher)

  // console.log(data)
  return (
    <Layout>
      <HomeContent />
    </Layout>
  )
}
export default Home
