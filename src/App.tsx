import { Box, ThemeProvider } from '@mui/material';
import { PhoneRate } from './phoneRate';
import styles from './App.module.scss';
import { theme } from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box className={styles.wrapperPage}>
        <PhoneRate />
      </Box>
    </ThemeProvider>
  );
};

export default App;
