import { useContext } from "react";
import {
    Container,
    Group,
    Tabs,
    rem,
    Autocomplete,
    Title,
    Button,
    Flex,
    Avatar,
} from "@mantine/core";

import classes from "./Header.module.css";
import { PAGE_CONTAINER_SIZE } from "../../util/consts";
import { IconArrowRight, IconSearch } from "@tabler/icons-react";
import {
    SearchContext,
    SearchDispatchContext,
} from "../../context/SearchContext";
import { AUTOCOMPLETE_DATA_GROUPED } from "../../util/data";

const tabs = ["Home", "Birds", "Insects", "Others"];

export const items = tabs.map((tab) => (
    <Tabs.Tab value={tab.toLowerCase()} key={tab}>
        {tab}
    </Tabs.Tab>
));

export function Header() {
    const searchQuery = useContext(SearchContext);
    const setSearchQuery = useContext(SearchDispatchContext);

    return (
        <div className={classes.header}>
            <Container
                className={classes.mainSection}
                size={PAGE_CONTAINER_SIZE}
            >
                <Group justify="space-between">
                    <Flex align={"center"} gap={"sm"}>
                        <Avatar src="self.jpg" alt="It's me!" size="md" />
                        <Title size={"h4"}> Marcus Soh </Title>
                    </Flex>

                    <Autocomplete
                        className={classes.search}
                        placeholder="Search"
                        leftSection={
                            <IconSearch
                                style={{ width: rem(16), height: rem(16) }}
                                stroke={1.5}
                            />
                        }
                        data={AUTOCOMPLETE_DATA_GROUPED}
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
