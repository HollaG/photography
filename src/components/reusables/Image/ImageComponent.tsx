import { Flex, Image, Text } from "@mantine/core";

import classes from "./ImageComponent.module.css";
import { TAG_NAME_SEPARATOR } from "../../../util/consts";

interface ImageProps {
    src: string;
    name: string;
    tag: string;
    description: string;

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
    tagOnClick,
    nameOnClick,
}: ImageProps) => {
    return (
        <div className={classes.container}>
            <Image src={src} className={classes.image} />
            <Flex className={classes.labelContainer} gap={4}>
                <Text
                    onClick={() => (tagOnClick ? tagOnClick(tag) : null)}
                    className={tagOnClick && classes.clickable}
                >
                    {" "}
                    {tag}{" "}
                </Text>
                <Text c="dimmed">{TAG_NAME_SEPARATOR}</Text>
                <Text
                    onClick={() => (nameOnClick ? nameOnClick(name) : null)}
                    className={nameOnClick && classes.clickable}
                >
                    {name}
                </Text>
            </Flex>
        </div>
    );
};

export default ImageComponent;
