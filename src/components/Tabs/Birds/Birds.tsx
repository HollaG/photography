import classes from "./Birds.module.css";
import ImageComponent from "../../reusables/Image/ImageComponent";
import { BIRD_DATA } from "../../../util/data";
import { useContext } from "react";
import {
    SearchContext,
    SearchDispatchContext,
} from "../../../context/SearchContext";
import { TAG_NAME_SEPARATOR } from "../../../util/consts";

const Birds = () => {
    const searchQuery = useContext(SearchContext);
    const setSearchQuery = useContext(SearchDispatchContext);

    // const splitSearch = searchQuery.split(" ");
    const filteredData = BIRD_DATA.filter((bird) => {
        // return splitSearch.some(
        //     (v) =>
        //         bird.name.toLowerCase().includes(v.toLowerCase()) ||
        //         bird.tag.toLowerCase().includes(v.toLowerCase())
        // );
        return `${bird.tag} ${TAG_NAME_SEPARATOR} ${bird.name}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
    });

    return (
        <div className={classes.tabContent}>
            <section id="photos" className={classes.photos}>
                {filteredData.map((bird, index) => (
                    <div key={index} className={classes.image}>
                        <ImageComponent
                            description=""
                            name={bird.name}
                            src={`/Birds/${bird.name}/${bird.fileName}`}
                            tag={bird.tag}
                            tagOnClick={(tag) => setSearchQuery(tag)}
                            nameOnClick={(name) => setSearchQuery(name)}
                        />
                    </div>
                ))}
            </section>
            {/* <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }}>
                {filteredData.map((bird, index) => (
                    <Center key={index}>
                        <ImageComponent
                            description=""
                            name={bird.name}
                            src={`/Birds/${bird.name}/${bird.fileName}`}
                            tag={bird.tag}
                            tagOnClick={(tag) => setSearchQuery(tag)}
                            nameOnClick={(name) => setSearchQuery(name)}
                        />
                    </Center>
                ))}
            </SimpleGrid> */}
        </div>
    );
};

export default Birds;
