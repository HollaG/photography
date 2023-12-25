import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { resolver, theme } from "./theme";
import { Header } from "./components/Header/Header";
import Body from "./components/Body/Body";
import { SearchProvider } from "./context/SearchContext";

export default function App() {
    return (
        <MantineProvider theme={theme} cssVariablesResolver={resolver}>
            <SearchProvider>
                <Header />
                <Body />
            </SearchProvider>
        </MantineProvider>
    );
}
