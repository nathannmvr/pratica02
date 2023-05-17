import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import Group from './src/screen/Group';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto';
import { Loading } from './src/components/Loading';

export default function App() {

  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});

  return (
    <ThemeProvider theme={theme}>
      { fontsLoaded ? <Group /> : <Loading />} 
      <StatusBar
        style="light"
      />
    </ThemeProvider>
  );
}