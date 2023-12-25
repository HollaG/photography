import { createContext, useState } from "react";

const SearchContext = createContext("");
const SearchDispatchContext = createContext<any>(undefined);

function SearchProvider({
    children,
}: {
    children: React.ReactElement | React.ReactElement[];
}) {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <SearchContext.Provider value={searchQuery}>
            <SearchDispatchContext.Provider value={setSearchQuery}>
                {children}
            </SearchDispatchContext.Provider>
        </SearchContext.Provider>
    );
}

export { SearchContext, SearchProvider, SearchDispatchContext };
