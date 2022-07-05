// pages/index.js

import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

const ReadAllItems = (props) => {
  return (
    <div>
      <Head><title>Next Market</title></Head>
      <div className="grid-container-in">
        {props.allItems.map(item =>
          <Link href={`/item/${item._id}`} key={item._id}>
            <a className="card">
              <Image src={item.image} width="750px" height="500px" alt={item.title} />
              <div className="texts-area">
                <h2>¥{item.price}</h2>
                <h3>{item.title}</h3>
                <p>{item.description.substring(0, 80)}...</p>
              </div>
            </a>
          </Link>
        )}
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3000/api/item/readall")
  const allItems = await response.json()

  return {
    props: allItems
  }
}

export default ReadAllItems