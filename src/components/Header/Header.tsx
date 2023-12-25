import { useContext } from "react";
import {
    Container,
    Group,
    rem,
    Autocomplete,
    Title,
    Button,
    Flex,
    Avatar,
    CloseButton,
    ActionIcon,
    Box,
} from "@mantine/core";

import classes from "./Header.module.css";
import { PAGE_CONTAINER_SIZE } from "../../util/consts";
import { IconArrowRight, IconCode, IconSearch } from "@tabler/icons-react";
import {
    SearchContext,
    SearchDispatchContext,
} from "../../context/SearchContext";
import { AUTOCOMPLETE_DATA_GROUPED } from "../../util/data";
import { useDisclosure } from "@mantine/hooks";
import SearchModal from "../SearchModal/SearchModal";

export function Header() {
    const searchQuery = useContext(SearchContext);
    const setSearchQuery = useContext(SearchDispatchContext);

    const [opened, { open, close }] = useDisclosure(false);

    const AutocompleteComponent = (
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
            // visibleFrom="sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e)}
            onClick={(e) => {
                open();
                // e.preventDefault();
                // e.stopPropagation();
            }}
            readOnly
            rightSection={
                <CloseButton
                    aria-label="Clear input"
                    onClick={() => setSearchQuery("")}
                    style={{
                        display: searchQuery ? undefined : "none",
                    }}
                />
            }
        />
    );
    return (
        <div className={classes.header}>
            <SearchModal opened={opened} close={close} />
            <Container
                className={classes.mainSection}
                size={PAGE_CONTAINER_SIZE}
            >
                <Group justify="space-between">
                    <Flex align={"center"} gap={"sm"}>
                        <Avatar src="self.jpg" alt="It's me!" size="md" />
                        <Title size={"h4"}> Marcus Soh </Title>
                    </Flex>
                    <Flex
                        visibleFrom="sm"
                        className={classes.searchContainerBig}
                        justify={"center"}
                    >
                        {AutocompleteComponent}
                    </Flex>
                    <Button
                        variant="light"
                        rightSection={<IconArrowRight size={14} />}
                        component="a"
                        href="https://marcussoh.com"
                        target="_blank"
                        visibleFrom="sm"
                    >
                        My Web Dev portfolio
                    </Button>

                    <Button
                        variant="light"
                        rightSection={<IconArrowRight size={14} />}
                        component="a"
                        href="https://marcussoh.com"
                        target="_blank"
                        hiddenFrom="sm"
                        size="xs"
                    >
                        My Web Dev portfolio
                    </Button>
                </Group>
                <Box hiddenFrom="sm" mt={12}>
                    {AutocompleteComponent}
                </Box>
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
