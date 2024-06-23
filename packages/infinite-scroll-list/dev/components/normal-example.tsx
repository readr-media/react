// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import InfiniteScrollList from '../../src'

type UserData = {
  id: {
    name: string
    value: string | null
  }
  name: {
    title: string
    first: string
    last: string
  }
}

// simulate initialList from props
const initialList: UserData[] = [
  {
    name: {
      title: 'Miss',
      first: 'Vanesa',
      last: 'Carrasco',
    },
    id: {
      name: 'DNI',
      value: '26121864-S',
    },
  },
  {
    name: {
      title: 'Mr',
      first: 'Thomas',
      last: 'Bernard',
    },
    id: {
      name: 'INSEE',
      value: '1790346534146 59',
    },
  },
  {
    name: {
      title: 'Miss',
      first: 'Samantha',
      last: 'Hughes',
    },
    id: {
      name: 'TFN',
      value: '938096216',
    },
  },
  {
    name: {
      title: 'Miss',
      first: 'دینا',
      last: 'مرادی',
    },
    id: {
      name: '',
      value: null,
    },
  },
  {
    name: {
      title: 'Mrs',
      first: 'Sophia',
      last: 'Soto',
    },
    id: {
      name: 'NINO',
      value: 'JS 87 45 98 M',
    },
  },
  {
    name: {
      title: 'Mr',
      first: 'Clifford',
      last: 'Knight',
    },
    id: {
      name: 'PPS',
      value: '4715649T',
    },
  },
  {
    name: {
      title: 'Mr',
      first: 'Rohan',
      last: 'Prajapati',
    },
    id: {
      name: 'UIDAI',
      value: '172594309222',
    },
  },
  {
    name: {
      title: 'Miss',
      first: 'Silke',
      last: 'Kristensen',
    },
    id: {
      name: 'CPR',
      value: '170647-9535',
    },
  },
  {
    name: {
      title: 'Mr',
      first: 'Praneel',
      last: 'Prabhu',
    },
    id: {
      name: 'UIDAI',
      value: '756962973717',
    },
  },
  {
    name: {
      title: 'Ms',
      first: 'Aubrey',
      last: 'Jean-Baptiste',
    },
    id: {
      name: 'SIN',
      value: '489021204',
    },
  },
]

export default function NormalExample() {
  const fetchData = async (page: number): Promise<UserData[]> => {
    const url = `https://randomuser.me/api/?results=10&seed=5566&page=${page}&inc=id,name`

    const response = await fetch(url)
    const json = await response.json()

    return json.results
  }

  return (
    <InfiniteScrollList
      initialList={initialList}
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
        dataList.map((data, i) => (
          <section
            key={`${data.name.first} ${data.name.last}`}
            style={{
              border: '1px solid gray',
            }}
          >
            <h2>Index {i}</h2>
            <p>
              {data.id.name} | {data.id.value}
            </p>
            <p>
              {data.name.title} {data.name.first} {data.name.last}
            </p>
          </section>
        ))
      }
    </InfiniteScrollList>
  )
}
