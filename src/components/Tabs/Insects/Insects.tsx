import classes from "./Insects.module.css";
import { INSECT_DATA, UNIQUE_INSECTS_COUNT } from "../../../util/data";
import { Highlight, Text } from "@mantine/core";
import Gallery from "../../reusables/Gallery/Gallery";

const Insects = () => {
    const str = `Currently tracking ${UNIQUE_INSECTS_COUNT.toString()} different insects`;

    return (
        <div className={classes.tabContent}>
            <Text ta="center" fw={500}>
                {" "}
                Click on an image to view it full-size!
            </Text>
            <Highlight
                highlight={UNIQUE_INSECTS_COUNT.toString()}
                ta="center"
                mb={"md"}
            >
                {str}
            </Highlight>
            <Gallery images={INSECT_DATA} />
        </div>
    );
};

export default Insects;
