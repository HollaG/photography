import classes from "./General.module.css";
import { GENERAL_DATA } from "../../../util/data";

import { Text } from "@mantine/core";
import Gallery from "../../reusables/Gallery/Gallery";

const General = () => {
    return (
        <div className={classes.tabContent}>
            <Text ta="center" fw={500} mb={"md"}>
                {" "}
                Click on an image to view it full-size!
            </Text>

            <Gallery folderName="Birds" images={GENERAL_DATA} />
        </div>
    );
};

export default General;
