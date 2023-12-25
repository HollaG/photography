import cx from "clsx";
import { useContext, useState } from "react";
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
    Autocomplete,
    Title,
    Button,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";
import { PAGE_CONTAINER_SIZE } from "../../util/consts";
import { IconArrowRight, IconSearch } from "@tabler/icons-react";
import {
    SearchContext,
    SearchDispatchContext,
} from "../../context/SearchContext";
import { AUTOCOMPLETE_DATA } from "../../util/data";

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

    const searchQuery = useContext(SearchContext);
    const setSearchQuery = useContext(SearchDispatchContext);

    return (
        <div className={classes.header}>
            <Container
                className={classes.mainSection}
                size={PAGE_CONTAINER_SIZE}
            >
                <Group justify="space-between">
                    <Title size={"h4"}> Marcus Soh </Title>

                    <Autocomplete
                        className={classes.search}
                        placeholder="Search"
                        leftSection={
                            <IconSearch
                                style={{ width: rem(16), height: rem(16) }}
                                stroke={1.5}
                            />
                        }
                        data={AUTOCOMPLETE_DATA}
                        visibleFrom="xs"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e)}
                    />

                    <Button
                        variant="light"
                        rightSection={<IconArrowRight size={14} />}
                        component="a"
                        href="https://marcussoh.com"
                        target="_blank"
                    >
                        My Web Dev portfolio
                    </Button>
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
