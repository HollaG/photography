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
import { GROUPED_BY_TAG, ImageData } from "../../util/data";

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
        location.toLowerCase().includes(searchQuery.toLowerCase())
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

    return (
        <Modal
            opened={opened}
            onClose={close}
            withCloseButton={false}
            size="xl"
        >
            {/* Modal content */}
            <Flex gap={6} direction={"column"}>
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
                                    close();
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
                            >
                                Search
                            </Button>{" "}
                        </Flex>
                    }
                    rightSectionWidth={"7.5rem"}
                />
                {/* <Divider /> */}

                <Flex direction={"column"} gap={9}>
                    {Object.keys(GROUPED_BY_TAG)
                        .sort((a, b) => (a < b ? -1 : 1)) // sort alphabetically
                        .map((tag, index1) => (
                            <Flex direction={"column"} gap={6} key={index1}>
                                <Divider
                                    label={`${tag} (${GROUPED_BY_TAG[tag].length})`}
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
                                            GROUPED_BY_TAG[tag][0]?.type ||
                                                "Home"
                                        );
                                    }}
                                />
                                {GROUPED_BY_TAG[tag].map((data, index2) => (
                                    <SearchResult
                                        key={`search-${index2}`}
                                        data={data}
                                        localSearchQuery={localSearchQuery}
                                        close={close}
                                        setLocalSearchQuery={
                                            setLocalSearchQuery
                                        }
                                    />
                                ))}
                            </Flex>
                        ))}
                </Flex>
            </Flex>
        </Modal>
    );
};

const SearchResult = ({
    data,
    localSearchQuery,
    setLocalSearchQuery,
    close,
}: {
    data: ImageData;
    localSearchQuery: string;
    close: () => void;
    setLocalSearchQuery: (query: string) => void;
}) => {
    const setSearchQuery = useContext(SearchDispatchContext);
    const setActiveTab = useContext(TabDispatchContext);
    if (
        !includedInSearch(localSearchQuery, data.tag, data.name, data.location)
    ) {
        return null;
    }
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
            variant="subtle"
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
                <Text size="xs" c="dark">
                    {data.type}
                </Text>
            </Flex>
        </Button>
    );
};

export default SearchModal;
