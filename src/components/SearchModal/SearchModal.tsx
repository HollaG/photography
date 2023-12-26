import {
    Button,
    Divider,
    Flex,
    Modal,
    Text,
    TextInput,
    rem,
} from "@mantine/core";

import {
    IconButterfly,
    IconDog,
    IconFeather,
    IconSearch,
} from "@tabler/icons-react";
import { useContext, useEffect, useState } from "react";
import {
    SearchContext,
    SearchDispatchContext,
} from "../../context/SearchContext";
import { GROUPED_BY_TAG, ImageData, convertToAcronym } from "../../util/data";

import { TabDispatchContext } from "../../context/TabContext";

type ModalProps = {
    opened: boolean;
    close: () => void;
};

const includedInSearch = (
    searchQuery: string,
    tag: string,
    name: string,
    location: string
) => {
    if (searchQuery === "") return true;
    return (
        tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
        name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        convertToAcronym(location)
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
    );
};

const SearchModal = ({ opened, close }: ModalProps) => {
    // const [opened, { open, close }] = useDisclosure(false);

    const searchQuery = useContext(SearchContext);
    const setSearchQuery = useContext(SearchDispatchContext);
    const setActiveTab = useContext(TabDispatchContext);

    const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);

    useEffect(() => {
        setLocalSearchQuery(searchQuery);
    }, [searchQuery]);

    // LF a solution to copy the scrolling of documentation websites
    // This solution doesn't work, it's too laggy for one.
    // const [currentHighlightedIndex, setCurrentHighlightedIndex] = useState(0);
    // on down arrow, increment 1
    // on up arrow, decrement 1
    // Mousetrap.bind("down", (e) => {
    //     if (!opened) return;
    //     e.preventDefault();
    //     setCurrentHighlightedIndex((prev) => prev + 1);
    // });

    // Mousetrap.bind("up", (e) => {
    //     if (!opened) return;
    //     e.preventDefault();
    //     setCurrentHighlightedIndex((prev) => prev - 1);
    // });

    // const curIndex = useRef(0);
    // const incr = () => curIndex.current++;
    // curIndex.current = 0;
    return (
        <Modal
            opened={opened}
            onClose={close}
            withCloseButton={false}
            size="xl"
        >
            {/* Modal content */}
            <Flex gap={6} direction={"column"}>
                <form onSubmit={(e) => e.preventDefault()}>
                    <TextInput
                        leftSection={
                            <IconSearch
                                style={{ width: rem(16), height: rem(16) }}
                                stroke={1.5}
                            />
                        }
                        placeholder="Search for something..."
                        value={localSearchQuery}
                        onChange={(e) => setLocalSearchQuery(e.target.value)}
                        variant="unstyled"
                        rightSection={
                            <Flex gap={4}>
                                <Button
                                    size="compact-sm"
                                    variant="light"
                                    onClick={() => {
                                        setLocalSearchQuery("");
                                        setSearchQuery("");
                                        // close();
                                    }}
                                >
                                    Clear
                                </Button>
                                <Button
                                    variant="gradient"
                                    size="compact-sm"
                                    gradient={{
                                        from: "green",
                                        to: "cyan",
                                        deg: 90,
                                    }}
                                    onClick={() => {
                                        setSearchQuery(localSearchQuery);

                                        close();
                                    }}
                                    type="submit"
                                >
                                    Search
                                </Button>{" "}
                            </Flex>
                        }
                        rightSectionWidth={"7.5rem"}
                    />
                </form>
                {/* <Divider /> */}

                <Flex direction={"column"} gap={9}>
                    {Object.keys(GROUPED_BY_TAG)
                        .sort((a, b) => (a < b ? -1 : 1)) // sort alphabetically
                        .map((tag, index1) => {
                            const results = resultsInGroup(
                                GROUPED_BY_TAG[tag],
                                localSearchQuery
                            );
                            if (results.length === 0) return null;
                            else {
                                return (
                                    <Flex
                                        direction={"column"}
                                        gap={6}
                                        key={index1}
                                    >
                                        <Divider
                                            label={`${tag} (${results.length})`}
                                            labelPosition="left"
                                            style={{
                                                textDecoration: "underline",
                                                cursor: "pointer",
                                            }}
                                            onClick={() => {
                                                setSearchQuery(tag);
                                                setLocalSearchQuery(tag);
                                                close();
                                                setActiveTab(
                                                    results[0]?.type || "Home"
                                                );
                                            }}
                                        />
                                        {results.map((data, index2) => {
                                            return (
                                                <SearchResult
                                                    key={`search-${index2}`}
                                                    data={data}
                                                    close={close}
                                                    setLocalSearchQuery={
                                                        setLocalSearchQuery
                                                    }
                                                />
                                            );
                                        })}
                                    </Flex>
                                );
                            }
                        })}
                </Flex>
            </Flex>
        </Modal>
    );
};

/**
 * Gets the results of this "group" of images - grouped by genus e.g. Butterflies
 * @param group
 * @param searchQuery
 * @returns
 */
const resultsInGroup = (group: ImageData[], searchQuery: string) => {
    const results: ImageData[] = [];
    for (const data of group) {
        if (includedInSearch(searchQuery, data.tag, data.name, data.location)) {
            results.push(data);
        }
    }
    return results;
};

const SearchResult = ({
    data,
    setLocalSearchQuery,
    close,
}: {
    data: ImageData;
    close: () => void;
    setLocalSearchQuery: (query: string) => void;
}) => {
    const setSearchQuery = useContext(SearchDispatchContext);
    const setActiveTab = useContext(TabDispatchContext);

    let icon = null;

    if (data.type === "Birds") {
        icon = (
            <IconFeather
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
            />
        );
    } else if (data.type === "Insects") {
        icon = (
            <IconButterfly
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
            />
        );
    } else if (data.type === "Others") {
        icon = (
            <IconDog style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
        );
    }
    return (
        <Button
            variant={"subtle"}
            color="black"
            style={{ height: "auto", textAlign: "left" }}
            justify="flex-start"
            leftSection={icon}
            onClick={() => {
                setSearchQuery(data.name);
                close();
                setActiveTab(data.type);
                setLocalSearchQuery(data.name);
            }}
        >
            <Flex direction={"column"} pl={4}>
                <Text>{data.name}</Text>
                <Flex gap={4}>
                    <Text size="xs" c="dark">
                        {data.type}
                    </Text>
                    <Text size="xs" c="dimmed">
                        {" "}
                        @{" "}
                    </Text>
                    <Text size="xs" c="dark">
                        {convertToAcronym(data.location)}
                    </Text>
                </Flex>
            </Flex>
        </Button>
    );
};

export default SearchModal;
