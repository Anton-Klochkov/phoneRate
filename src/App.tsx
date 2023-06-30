import { Box } from '@mui/material';
import { PhoneRate } from './phoneRate';
import styles from './App.module.scss';

const App = () => {
  return (
    <Box className={styles.wrapperPage}>
      <PhoneRate />
    </Box>
  );
};

export default App;
