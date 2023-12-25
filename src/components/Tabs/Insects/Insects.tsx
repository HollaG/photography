import classes from "./Insects.module.css";
import { BIRD_DATA, INSECT_DATA, UNIQUE_INSECTS } from "../../../util/data";

import { Highlight, Text } from "@mantine/core";
import Gallery from "../../reusables/Gallery/Gallery";

const Insects = () => {
    const str = `Currently tracking ${UNIQUE_INSECTS.toString()} different insects`;

    return (
        <div className={classes.tabContent}>
            <Text ta="center" fw={500}>
                {" "}
                Click on an image to view it full-size!
            </Text>
            <Highlight
                highlight={UNIQUE_INSECTS.toString()}
                ta="center"
                mb={"md"}
            >
                {str}
            </Highlight>
            <Gallery folderName="Insects" images={INSECT_DATA} />
        </div>
    );
};

export default Insects;
