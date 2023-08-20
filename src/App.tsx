import { ThemeProvider } from 'styled-components';
import { DeviceProvider } from './contexts/deviceWidth/index.context';
import AppLayout from './layouts/AppLayout';
import { Theme, GlobalStyles, LibStyleOverrides } from './layouts/Theme';

const App = () => (
    <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <LibStyleOverrides />
        <DeviceProvider>
            <AppLayout />
        </DeviceProvider>
    </ThemeProvider>
);

export default App;
