import { Container, Tabs } from "@mantine/core";
import { items } from "../Header/Header";

import classes from "./Body.module.css";
import { PAGE_CONTAINER_SIZE } from "../../util/consts";
import Home from "../Tabs/Home/Home";
import Birds from "../Tabs/Birds/Birds";

const Body = () => {
    return (
        <Tabs
            defaultValue="home"
            variant="outline"
            classNames={{
                // root: classes.tabs,
                list: classes.tabsList,
                tab: classes.tab,
            }}
        >
            <div className={classes.tabs}>
                <Container size={PAGE_CONTAINER_SIZE}>
                    <Tabs.List>{items}</Tabs.List>
                </Container>
            </div>

            <div className={classes.tabContent}>
                <Tabs.Panel value="home">
                    {" "}
                    <Home />{" "}
                </Tabs.Panel>
                <Tabs.Panel value="birds">
                    {" "}
                    <Birds />{" "}
                </Tabs.Panel>
                <Tabs.Panel value="insects"> insects page </Tabs.Panel>
                <Tabs.Panel value="others"> others page </Tabs.Panel>
            </div>
        </Tabs>
    );
};

export default Body;
