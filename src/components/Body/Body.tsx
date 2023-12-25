import { Container, Tabs } from "@mantine/core";
import { items } from "../Header/Header";

import classes from "./Body.module.css";
import { PAGE_CONTAINER_SIZE } from "../../util/consts";
import Home from "../Tabs/Home/Home";
import Birds from "../Tabs/Birds/Birds";
import Insects from "../Tabs/Insects/Insects";
import Others from "../Tabs/Others/Others";

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
                <Tabs.Panel value="insects">
                    {" "}
                    <Insects />{" "}
                </Tabs.Panel>
                <Tabs.Panel value="others">
                    {" "}
                    <Others />
                </Tabs.Panel>
            </div>
        </Tabs>
    );
};

export default Body;
