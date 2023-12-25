import { Image, Text } from "@mantine/core";

import classes from "./ImageComponent.module.css";

const ImageComponent = ({
    src,
    title,
    tag,
    description,
}: {
    src: string;
    title: string;
    tag: string;
    description: string;
}) => {
    return (
        <div className={classes.container}>
            <Image src={src} className={classes.image} />
            <div className={classes.labelContainer}>
                <Text>
                    {" "}
                    {tag} / {title}{" "}
                </Text>
            </div>
        </div>
    );
};

export default ImageComponent;
