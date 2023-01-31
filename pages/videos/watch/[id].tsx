import RelatedVideo from '@/components/relatedVideo';
import SelectedVideo from '@/components/selectedVideo';
import type { NextPage } from 'next';
import styles from './watch.module.css';

const Watch: NextPage = () => {
  return (
    <div className={styles.watch}>
      <SelectedVideo />
      <RelatedVideo />
    </div>
  );
};

export default Watch;
