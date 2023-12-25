import { Container, Tabs, rem } from "@mantine/core";

import classes from "./Body.module.css";
import { PAGE_CONTAINER_SIZE, tabs } from "../../util/consts";
import Home from "../Tabs/Home/Home";
import Birds from "../Tabs/Birds/Birds";
import Insects from "../Tabs/Insects/Insects";
import Others from "../Tabs/Others/Others";
import { useContext } from "react";
import { TabContext, TabDispatchContext } from "../../context/TabContext";
import {
    IconButterfly,
    IconDog,
    IconFeather,
    IconHome,
} from "@tabler/icons-react";

const iconStyle = { width: rem(12), height: rem(12) };

const iconMap: { [key: string]: JSX.Element } = {
    Home: <IconHome style={iconStyle} />,
    Birds: <IconFeather style={iconStyle} />,
    Insects: <IconButterfly style={iconStyle} />,
    Others: <IconDog style={iconStyle} />,
};

const items = tabs.map((tab) => (
    <Tabs.Tab value={tab} key={tab} leftSection={iconMap[tab]}>
        {tab}
    </Tabs.Tab>
));

const Body = () => {
    const activeTab = useContext(TabContext);
    const setActiveTab = useContext(TabDispatchContext);

    return (
        <Tabs
            defaultValue="Home"
            variant="outline"
            classNames={{
                // root: classes.tabs,
                list: classes.tabsList,
                tab: classes.tab,
            }}
            value={activeTab}
            onChange={(value) => setActiveTab(value)}
        >
            <div className={classes.tabs}>
                <Container size={PAGE_CONTAINER_SIZE}>
                    <Tabs.List justify="center">{items}</Tabs.List>
                </Container>
            </div>

            <div className={classes.tabContent}>
                <Tabs.Panel value="Home">
                    {" "}
                    <Home />{" "}
                </Tabs.Panel>
                <Tabs.Panel value="Birds">
                    {" "}
                    <Birds />{" "}
                </Tabs.Panel>
                <Tabs.Panel value="Insects">
                    {" "}
                    <Insects />{" "}
                </Tabs.Panel>
                <Tabs.Panel value="Others">
                    {" "}
                    <Others />
                </Tabs.Panel>
            </div>
        </Tabs>
    );
};

export default Body;
