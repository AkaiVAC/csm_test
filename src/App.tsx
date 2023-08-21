import { ThemeProvider } from 'styled-components';
import { DeviceProvider } from './stores/device/index.provider';
import { Theme, GlobalStyles, LibStyleOverrides } from './themes';
import DefaultLayout from './layouts';
import { Canvas } from './components';

const App = () => (
    <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <LibStyleOverrides />
        <DeviceProvider>
            <DefaultLayout>
                <Canvas />
            </DefaultLayout>
        </DeviceProvider>
    </ThemeProvider>
);

export default App;
