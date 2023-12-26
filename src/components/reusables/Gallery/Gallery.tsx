import { useContext } from "react";
import {
    SearchContext,
    SearchDispatchContext,
} from "../../../context/SearchContext";
import { TAG_NAME_SEPARATOR } from "../../../util/consts";
import { ImageData } from "../../../util/data";
import ImageComponent from "../Image/ImageComponent";
import classes from "./Gallery.module.css";

type GalleryProps = {
    images: ImageData[];
    folderName: string;
};
const Gallery = ({ images, folderName }: GalleryProps) => {
    const searchQuery = useContext(SearchContext);
    const setSearchQuery = useContext(SearchDispatchContext);

    const filteredData = images.filter((item) => {
        return `${item.tag} ${TAG_NAME_SEPARATOR} ${item.name}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
    });
    return (
        <div>
            <section id="photos" className={classes.photos}>
                {filteredData.map((image, index) => (
                    <div key={index} className={classes.image}>
                        <ImageComponent
                            src={`/${folderName}/${image.name}/${image.fileName}`}
                            {...image}
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

export default Gallery;
