// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useEffect } from 'react'
import InfiniteScrollList from '../src'

type UserData = {
  id: {
    name: string
    value: string
  }
  name: {
    title: string
    first: string
    last: string
  }
}

export default function App() {
  const [list, setList] = useState<UserData[]>([])

  const fetchData = async (page: number): Promise<UserData[]> => {
    const url = `https://randomuser.me/api/?results=10&seed=5566&page=${page}&inc=id,name`

    const response = await fetch(url)
    const json = await response.json()
    return json.results
  }

  useEffect(() => {
    fetchData(0).then(setList)
  }, [])

  return (
    <InfiniteScrollList
      initialList={list}
      pageAmount={4}
      pageSize={8}
      isAutoFetch={true}
      fetchListInPage={fetchData}
      loader={
        <img
          src="/loading.gif"
          width={64}
          height={64}
          alt="loading gif"
          style={{
            cursor: 'pointer',
          }}
        />
      }
    >
      {(dataList: UserData[]) =>
        dataList.map((data) => (
          <section key={`${data.name.first} ${data.name.last}`}>
            <p>
              {data.id.name} | {data.id.value}
            </p>
            <p>
              {data.name.title} {data.name.first} {data.name.last}
            </p>
            <hr />
          </section>
        ))
      }
    </InfiniteScrollList>
  )
}
