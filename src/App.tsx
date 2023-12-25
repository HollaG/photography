import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { resolver, theme } from "./theme";
import { Header } from "./components/Header/Header";
import Body from "./components/Body/Body";
import { SearchProvider } from "./context/SearchContext";
import { TabProvider } from "./context/TabContext";

export default function App() {
    return (
        <MantineProvider theme={theme} cssVariablesResolver={resolver}>
            <SearchProvider>
                <TabProvider>
                    <Header />
                    <Body />
                </TabProvider>
            </SearchProvider>
        </MantineProvider>
    );
}
