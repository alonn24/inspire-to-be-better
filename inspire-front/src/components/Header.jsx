import React, { useEffect } from 'react'
import { useRedux } from '../store/index'

const fetchData = async () => {
  const response = await fetch('/_api/hello/')
  const data = await response.json()
  return data.Hello;
}

const Header = () => {
  const extractState = store => store.header
  const actionMap = {
    fetchVisitor: () => dispatch => fetchData()
      .then(value => dispatch({ name: 'setVisitor', value }))
  }

  const [state, actions] = useRedux(extractState, actionMap)

  useEffect(actions.fetchVisitor, []);
  return (
    <>
      <div className='hero'>
        <h1 className='title'>Hello {state.visitor}</h1>
      </div>
      {/*language=CSS*/}
      <style jsx>{`
        .hero {
          background: #1e347b;
          color: #FFF;
          padding: 24px;
        }

        .title {
          text-align: center;
        }
      `}</style>
    </>
  );
}

export default Header