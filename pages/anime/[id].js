import React from 'react';
import { BASE_URL, fetcher } from '../../services/api'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Layout from '../../components/pure/Layout';
import Details from '../../components/details/Details'

const AnimeDetails = () => {
  const router = useRouter()
  const id = router.query.id
  const { data, error } = useSWR(`${BASE_URL}anime/${id}`, fetcher, { revalidateOnFocus: false })

  return (
    <Layout>
      <Details
        anime={data?.data}
        error={error}
      />
    </Layout>
  );
}

export default AnimeDetails;
