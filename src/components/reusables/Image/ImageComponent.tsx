import { Flex, Image, Text } from "@mantine/core";

import classes from "./ImageComponent.module.css";

interface ImageProps {
    src: string;
    name: string;
    tag: string;
    description: string;
    location?: string;

    // If specified, calls the provided function when the `tag` text is clicked.
    tagOnClick?: (tag: string) => void;

    // if specified, calls the provided function when the `name` text is clicked
    nameOnClick?: (name: string) => void;
}

/**
 * Displays an image, along with accompanying text to describe it.
 *
 * @param param0
 * @returns
 */
const ImageComponent = ({
    src,
    name,
    tag,
    // description,
    location,
    tagOnClick,
    nameOnClick,
}: ImageProps) => {
    return (
        <div className={classes.container}>
            <Image
                src={src}
                className={classes.image}
                onClick={() => window.open(src.replace(".webp", ".jpg"))}
                alt={name}
            />
            {tag && (
                <Flex className={classes.labelContainer2} gap={4} fz={"xs"}>
                    <Text
                        onClick={() => (tagOnClick ? tagOnClick(tag) : null)}
                        className={tagOnClick && classes.clickable}
                        fz="xs"
                    >
                        {" "}
                        {tag}{" "}
                    </Text>
                </Flex>
            )}
            {(name || location) && (
                <Flex
                    className={classes.labelContainer}
                    gap={4}
                    fz="xs"
                    direction={"column"}
                >
                    {name && (
                        <Text
                            onClick={() =>
                                nameOnClick ? nameOnClick(name) : null
                            }
                            className={nameOnClick && classes.clickable}
                            fz="xs"
                        >
                            {name}
                        </Text>
                    )}

                    {location?.length ? (
                        <Text size="xxs"> {location} </Text>
                    ) : (
                        <></>
                    )}
                </Flex>
            )}
        </div>
    );
};

export default ImageComponent;
