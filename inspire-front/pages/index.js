import React, {useState, useEffect} from 'react'
import Head from 'next/head'

const fetchData = async () => {
  const response = await fetch('/_api/hello/')
  const data = await response.json();
  return data.Hello;
}
const Home = () => {
  const [title, setTitle] = useState('');
  useEffect(() => {
    fetchData().then(setTitle);
  }, []);

  return <div>
    <Head>
      <title>Inspire to Be Better!</title>
    </Head>

    <div className='hero'>
      <h1 className='title'>Hello {title}</h1>

    </div>
    {/*language=CSS*/}
    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
    `}</style>
  </div>
}

export default Home
