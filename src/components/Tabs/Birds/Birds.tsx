import classes from "./Birds.module.css";
import { BIRD_DATA, UNIQUE_BIRDS_COUNT } from "../../../util/data";

import { Highlight, Text } from "@mantine/core";
import Gallery from "../../reusables/Gallery/Gallery";

const Birds = () => {
    const str = `Currently tracking ${UNIQUE_BIRDS_COUNT.toString()} different birds`;

    return (
        <div className={classes.tabContent}>
            <Text ta="center" fw={500}>
                {" "}
                Click on an image to view it full-size!
            </Text>
            <Highlight
                highlight={UNIQUE_BIRDS_COUNT.toString()}
                ta="center"
                mb={"md"}
            >
                {str}
            </Highlight>
            <Gallery images={BIRD_DATA} />
        </div>
    );
};

export default Birds;
