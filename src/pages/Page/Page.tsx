import { Link } from 'react-router-dom'

import styles from './Page.module.pcss'
import Counter from '~/features/counter/Counter'

const Page = () => {
  return (
    <>
      <div className={styles.page}>
        <p>Page content</p>
        <p>
          <Link to='/'>Home</Link>
        </p>
        <Counter />
      </div>
    </>
  )
}

export default Page
