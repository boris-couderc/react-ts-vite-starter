import { Link } from 'react-router-dom'

import styles from './Home.module.pcss'

const Home = () => {
  return (
    <>
      <div className={styles.home}>
        Home content
        <br />
        <Link to='/page'>Page</Link>
      </div>
    </>
  )
}

export default Home
