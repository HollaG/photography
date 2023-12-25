import cx from "clsx";
import { useState } from "react";
import {
    Container,
    Avatar,
    UnstyledButton,
    Group,
    Text,
    Menu,
    Tabs,
    Burger,
    rem,
    useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";
import { PAGE_CONTAINER_SIZE } from "../../util/consts";

const user = {
    name: "Jane Spoonfighter",
    email: "janspoon@fighter.dev",
    image: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png",
};

const tabs = ["Home", "Birds", "Insects", "Others"];

export const items = tabs.map((tab) => (
    <Tabs.Tab value={tab.toLowerCase()} key={tab}>
        {tab}
    </Tabs.Tab>
));

export function Header() {
    const theme = useMantineTheme();
    const [opened, { toggle }] = useDisclosure(false);
    const [userMenuOpened, setUserMenuOpened] = useState(false);

    return (
        <div className={classes.header}>
            <Container
                className={classes.mainSection}
                size={PAGE_CONTAINER_SIZE}
            >
                <Group justify="space-between">
                    <Text> Marcus Soh </Text>

                    <Burger
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="xs"
                        size="sm"
                    />
                </Group>
            </Container>
            {/* <Container size="xl">
                <Tabs
                    defaultValue="Home"
                    variant="outline"
                    visibleFrom="sm"
                    classNames={{
                        root: classes.tabs,
                        list: classes.tabsList,
                        tab: classes.tab,
                    }}
                >
                    <Tabs.List>{items}</Tabs.List>
                </Tabs>
            </Container> */}
        </div>
    );
}
