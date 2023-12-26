import {
    Image,
    Container,
    Title,
    Text,
    List,
    Anchor,
    Avatar,
    Center,
    Flex,
    Button,
    Paper,
    Group,
    SimpleGrid,
    Box,
    ScrollArea,
    em,
} from "@mantine/core";

import classes from "./Home.module.css";
import {
    ALL_IMAGES,
    ALL_UNIQUE_COUNT,
    GENERAL_DATA,
    UNIQUE_ALL,
    UNIQUE_LOCATIONS,
    UNIQUE_LOCATIONS_COUNT,
    getRandomImage,
} from "../../../util/data";
import {
    IconCamera,
    IconFeather,
    IconMapPins,
    IconRefresh,
} from "@tabler/icons-react";
import { useContext, useState } from "react";
import ImageComponent from "../../reusables/Image/ImageComponent";
import { TabDispatchContext } from "../../../context/TabContext";
import { SearchDispatchContext } from "../../../context/SearchContext";
import { useMediaQuery } from "@mantine/hooks";
import { theme } from "../../../theme";

export default function Home() {
    const setActiveTab = useContext(TabDispatchContext);
    const setSearchQuery = useContext(SearchDispatchContext);
    // get a random image lmao
    let img = getRandomImage();

    const [_, setC] = useState(true);

    const belowSm = useMediaQuery(`(max-width:${em(768)})`);
    const infoCardHeight = belowSm ? 75 : 200;
    return (
        <Container size="md">
            <div className={classes.inner}>
                <div className={classes.content}>
                    <Center>
                        <Image
                            src={"self.jpg"}
                            className={classes.image}
                            hiddenFrom="md"
                        />
                    </Center>

                    <Title className={classes.title}>
                        Hi, I'm{" "}
                        <span className={classes.highlight}>Marcus.</span>{" "}
                    </Title>
                    <Text mt="md">
                        I'm an avid wildlife photographer! I love to take
                        pictures of any and all wildlife. <br />I dabble in
                        other genres too sometimes!
                    </Text>
                    <Text c="dimmed" mt="md">
                        I'm also a software developer! Check out my portfolio{" "}
                        <Anchor href="https://marcussoh.com" target="_blank">
                            here!
                        </Anchor>
                    </Text>

                    <Text mt={20}> I share my photos on these platforms: </Text>
                    <List mt={10} spacing="sm">
                        <List.Item
                            icon={
                                <Avatar
                                    radius={"sm"}
                                    size={48}
                                    src="icons/instagram.png"
                                    className={classes.clickableIcon}
                                    component="a"
                                    href="https://www.instagram.com/colouredmarkers_?igsh=MW85OWNtZDl0enkxNA=="
                                    target="_blank"
                                />
                            }
                        >
                            <Anchor
                                href="https://www.instagram.com/colouredmarkers_?igsh=MW85OWNtZDl0enkxNA=="
                                target="_blank"
                            >
                                {" "}
                                Instagram{" "}
                            </Anchor>{" "}
                            is where I upload the nicest pictures{" "}
                            <Anchor
                                href="https://www.instagram.com/colouredmarkers_?igsh=MW85OWNtZDl0enkxNA=="
                                target="_blank"
                            >
                                @colouredmarkers
                            </Anchor>
                        </List.Item>
                        <List.Item
                            icon={
                                <Avatar
                                    radius={"sm"}
                                    src="icons/inaturalist.png"
                                    className={classes.clickableIcon}
                                    size="48"
                                    component="a"
                                    href="https://www.inaturalist.org/people/marcussoh"
                                    target="_blank"
                                />
                            }
                        >
                            <Anchor
                                href="https://www.inaturalist.org/people/marcussoh"
                                target="_blank"
                            >
                                iNaturalist
                            </Anchor>{" "}
                            is where I upload all my sightings
                        </List.Item>
                        <List.Item
                            icon={
                                <Avatar
                                    radius={"sm"}
                                    src="icons/ebird.png"
                                    className={classes.clickableIcon}
                                    size="48"
                                    component="a"
                                    href="https://ebird.org/profile/Mjc2NDYzMQ"
                                    target="_blank"
                                />
                            }
                        >
                            <Anchor
                                href="https://ebird.org/profile/Mjc2NDYzMQ"
                                target="_blank"
                            >
                                eBird
                            </Anchor>{" "}
                            is for all my bird-related activity
                        </List.Item>
                    </List>

                    {/* <Group mt={30}>
                        <Button
                            radius="xl"
                            size="md"
                            className={classes.control}
                        >
                            Get started
                        </Button>
                        <Button
                            variant="default"
                            radius="xl"
                            size="md"
                            className={classes.control}
                        >
                            Source code
                        </Button>
                    </Group> */}
                </div>
                <Image
                    src={"self.jpg"}
                    className={classes.image}
                    visibleFrom="md"
                />
            </div>
            <Box mb={30}>
                <Flex justify={"center"} align={"center"} gap={12} mb={30}>
                    <Title size={"h3"} ta="center">
                        {" "}
                        A random picture from my collection{" "}
                    </Title>
                    <Button
                        leftSection={<IconRefresh />}
                        size="sm"
                        variant="light"
                        onClick={() => setC((prev) => !prev)}
                    >
                        New image
                    </Button>
                </Flex>

                <ImageComponent
                    {...img}
                    src={`/${img.type}/${img.name}/${img.fileName}`}
                    nameOnClick={(_) => {
                        setActiveTab(img.type);
                        setSearchQuery(img.name);
                    }}
                    tagOnClick={(_) => {
                        setActiveTab(img.type);
                        setSearchQuery(img.tag);
                    }}
                />
            </Box>

            <div className={classes.root}>
                <div className={classes.stat}>
                    <Text className={classes.count}>
                        <IconCamera /> {ALL_IMAGES.length + GENERAL_DATA.length}
                    </Text>
                    <Text className={classes.infoTitle}>PHOTOS TAKEN</Text>
                    <Text className={classes.description}>
                        <ScrollArea h={infoCardHeight}>
                            <Text
                                className={classes.infoTitleSmall}
                                size="xs"
                                tt="uppercase"
                                fw={700}
                                mt={6}
                            >
                                Main Camera
                            </Text>
                            <div>Canon EOS R6</div>
                            <Text
                                className={classes.infoTitleSmall}
                                size="xs"
                                tt="uppercase"
                                fw={700}
                                mt={12}
                            >
                                Lenses
                            </Text>
                            <div>Sigma 100-400mm C with 1.4x Teleconverter</div>
                            <div>Canon 100mm F2.8L Macro</div>
                            <div>Sigma 24mm F1.4 Art</div>
                        </ScrollArea>
                    </Text>
                </div>
                <div className={classes.stat}>
                    <Text className={classes.count}>
                        <IconFeather /> {ALL_UNIQUE_COUNT}
                    </Text>
                    <Text className={classes.infoTitle}>SPECIES OBSERVED</Text>
                    <Text className={classes.description}>
                        <ScrollArea h={infoCardHeight}>
                            {UNIQUE_ALL.map((data, key) => (
                                <div
                                    key={key}
                                    onClick={() => {
                                        setActiveTab(data.type);
                                        setSearchQuery(data.name);
                                    }}
                                    style={{ cursor: "pointer" }}
                                >
                                    {" "}
                                    {data.name}{" "}
                                </div>
                            ))}
                        </ScrollArea>
                    </Text>
                </div>
                <div className={classes.stat}>
                    <Text className={classes.count}>
                        <IconMapPins /> {UNIQUE_LOCATIONS_COUNT}
                    </Text>
                    <Text className={classes.infoTitle}>LOCATIONS VISITED</Text>
                    <Text className={classes.description}>
                        <ScrollArea h={infoCardHeight}>
                            {UNIQUE_LOCATIONS.map((data, key) => (
                                <div key={key}> {data.location} </div>
                            ))}
                        </ScrollArea>
                    </Text>
                </div>
            </div>
        </Container>
    );
}
