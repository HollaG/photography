import {
    Image,
    Container,
    Title,
    Text,
    List,
    Anchor,
    Avatar,
} from "@mantine/core";

import classes from "./Home.module.css";
import { getRandomImage } from "../../../util/data";

export default function Home() {
    // get a random image lmao
    const img = getRandomImage();
    return (
        <Container size="md">
            <div className={classes.inner}>
                <div className={classes.content}>
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
                <Image src={"self.jpg"} className={classes.image} />
            </div>
            <div>
                <Title size={"h3"} ta="center">
                    {" "}
                    A random picture from my collection{" "}
                </Title>
                <Image mt={30} src={`/Birds/${img.name}/${img.fileName}`} />
            </div>
        </Container>
    );
}
