import { createContext, useState } from "react";

const TabContext = createContext<string | null>("Home");
const TabDispatchContext = createContext<
    React.Dispatch<React.SetStateAction<string | null>>
>(() => {});

function TabProvider({
    children,
}: {
    children: React.ReactElement | React.ReactElement[];
}) {
    const [activeTab, setActiveTab] = useState<string | null>("Home");

    return (
        <TabContext.Provider value={activeTab}>
            <TabDispatchContext.Provider value={setActiveTab}>
                {children}
            </TabDispatchContext.Provider>
        </TabContext.Provider>
    );
}

export { TabContext, TabProvider, TabDispatchContext };
