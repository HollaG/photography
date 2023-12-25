import classes from "./Others.module.css";
import { OTHERS_DATA, UNIQUE_OTHERS_COUNT } from "../../../util/data";

import { Highlight, Text } from "@mantine/core";
import Gallery from "../../reusables/Gallery/Gallery";

const Others = () => {
    const str = `Currently tracking ${UNIQUE_OTHERS_COUNT.toString()} different other wildlife`;

    return (
        <div className={classes.tabContent}>
            <Text ta="center" fw={500}>
                {" "}
                Click on an image to view it full-size!
            </Text>
            <Highlight
                highlight={UNIQUE_OTHERS_COUNT.toString()}
                ta="center"
                mb={"md"}
            >
                {str}
            </Highlight>
            <Gallery folderName="Others" images={OTHERS_DATA} />
        </div>
    );
};

export default Others;
