import { GetStaticProps } from 'next';

import { FiUser, FiCalendar } from 'react-icons/fi';
import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

import Header from '../components/Header';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home() {
  return (
    <>
      <head>
        <title>Home | spacetraveling</title>
      </head>
      <main className={commonStyles.container}>
        <Header />
        <div className={styles.content}>
          <a>
            <h1>titulo</h1>
            <h3>sub titulo</h3>
            <div className={styles.postFooter}>
              <time>
                <FiCalendar />
                data{' '}
              </time>
              <p>
                <FiUser />
                autor{' '}
              </p>
            </div>
          </a>
          <button type="button">Carregar mais posts</button>
        </div>
      </main>
    </>
  );
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient();
//   // const postsResponse = await prismic.query(TODO);

//   // TODO
// };
