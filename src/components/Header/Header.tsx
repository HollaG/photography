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
    Box,
    Kbd,
    em,
} from "@mantine/core";

import classes from "./Header.module.css";
import { PAGE_CONTAINER_SIZE } from "../../util/consts";
import { IconArrowRight, IconSearch } from "@tabler/icons-react";
import {
    SearchContext,
    SearchDispatchContext,
} from "../../context/SearchContext";
import { AUTOCOMPLETE_DATA_GROUPED } from "../../util/data";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import SearchModal from "../SearchModal/SearchModal";

import Mousetrap from "mousetrap";
import { TabContext, TabDispatchContext } from "../../context/TabContext";

export function Header() {
    const searchQuery = useContext(SearchContext);
    const setSearchQuery = useContext(SearchDispatchContext);
    const setActiveTab = useContext(TabDispatchContext);
    const activeTab = useContext(TabContext);

    const [opened, { open, close }] = useDisclosure(false);

    // track when user does CTRL K
    Mousetrap.bind(["command+k", "ctrl+k"], (e) => {
        e.preventDefault();
        e.stopPropagation();

        open();
    });
    const belowSm = useMediaQuery(`(max-width:${em(768)})`);

    const rightSectionWidth = belowSm ? em(28) : em(100);
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
            onClick={() => {
                open();
            }}
            readOnly
            rightSection={
                <Flex align={"center"} justify={"end"}>
                    <Kbd size="xs" visibleFrom="sm">
                        CTRL + K
                    </Kbd>
                    <CloseButton
                        aria-label="Clear input"
                        onClick={() => setSearchQuery("")}
                        style={{
                            display: searchQuery ? undefined : "none",
                        }}
                    />{" "}
                </Flex>
            }
            rightSectionWidth={rightSectionWidth}
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
                    <Flex
                        align={"center"}
                        gap={"sm"}
                        onClick={() => setActiveTab("Home")}
                        style={{
                            cursor:
                                activeTab === "Home" ? "default" : "pointer",
                        }}
                    >
                        <Avatar src="self.webp" alt="It's me!" size="md" />
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
        </div>
    );
}
