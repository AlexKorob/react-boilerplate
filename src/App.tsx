import React from 'react';
import 'shared/styles/index.module.scss';
import 'animate.css';
import Routes from 'routes';
import styles from 'shared/styles/index.module.scss';

function App() {
  return (
    <main className={styles.main} id={'main'}>
      <Routes />
    </main>
  );
}

export default App;
