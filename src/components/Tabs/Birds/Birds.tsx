import { Center, Image, SimpleGrid } from "@mantine/core";

const BIRD_IMAGES = [
    {
        name: "Ashy Tailorbird",
        tag: "Tailorbirds",
        fileName: "R6__4248.jpg",
        description: "",
        location: "",
    },
    {
        name: "Asian Glossy Starling",
        tag: "Starlings",
        fileName: "IMG_9352.jpg",
        description: "",
        location: "",
    },
    {
        name: "Asian Glossy Starling",
        tag: "Starlings",
        fileName: "R6__9517.jpg",
        description: "",
        location: "",
    },
    {
        name: "Black Swan",
        tag: "Swans",
        fileName: "R6__9038.jpg",
        description: "",
        location: "",
    },
    {
        name: "Black-Naped Oriole",
        tag: "Orioles",
        fileName: "IMG_1438.jpg",
        description: "",
        location: "",
    },
    {
        name: "Black-Naped Oriole",
        tag: "Orioles",
        fileName: "R6__4132.jpg",
        description: "",
        location: "",
    },
    {
        name: "Brahminy Kite",
        tag: "Kites",
        fileName: "R6__2927.jpg",
        description: "",
        location: "",
    },
    {
        name: "Buffy Fish Owl",
        tag: "Owls",
        fileName: "bfo.jpg",
        description: "",
        location: "",
    },
    {
        name: "Collared Kingfisher",
        tag: "Kingfishers",
        fileName: "R6__4074.jpg",
        description: "",
        location: "",
    },
    {
        name: "Collared Kingfisher",
        tag: "Kingfishers",
        fileName: "R6__4914.jpg",
        description: "",
        location: "",
    },
    {
        name: "Collared Kingfisher",
        tag: "Kingfishers",
        fileName: "R6__9913.jpg",
        description: "",
        location: "",
    },
    {
        name: "Common Flameback",
        tag: "Woodpeckers",
        fileName: "R6__7680.jpg",
        description: "",
        location: "",
    },
    {
        name: "Common Iora",
        tag: "Ioras",
        fileName: "IMG_1416 2.jpg",
        description: "",
        location: "",
    },
    {
        name: "Common Kingfisher",
        tag: "Kingfishers",
        fileName: "R6__9129.jpg",
        description: "",
        location: "",
    },
    {
        name: "Common Redshank",
        tag: "Redshanks",
        fileName: "R6__8992.jpg",
        description: "",
        location: "",
    },
    {
        name: "Common Sandpiper",
        tag: "Sandpipers",
        fileName: "R6__4257.jpg",
        description: "",
        location: "",
    },
    {
        name: "Common Tern",
        tag: "Terns",
        fileName: "IMG_1545.jpg",
        description: "",
        location: "",
    },
    {
        name: "Copper-Throated Sunbird",
        tag: "Sunbirds",
        fileName: "R6__1222.jpg",
        description: "",
        location: "",
    },
    {
        name: "Crimson Sunbird",
        tag: "Sunbirds",
        fileName: "R6__9071.jpg",
        description: "",
        location: "",
    },
    {
        name: "Eurasian Tree Sparrow",
        tag: "Sparrows",
        fileName: "IMG_1794.jpg",
        description: "",
        location: "",
    },
    {
        name: "Gray Heron",
        tag: "Herons",
        fileName: "R6__0850.jpg",
        description: "",
        location: "",
    },
    {
        name: "Gray Heron",
        tag: "Herons",
        fileName: "R6__9754.JPG",
        description: "",
        location: "",
    },
    {
        name: "Great Egret",
        tag: "Egrets",
        fileName: "R6__8984.jpg",
        description: "",
        location: "",
    },
    {
        name: "Great-Billed Heron",
        tag: "Herons",
        fileName: "R6__9037.jpg",
        description: "",
        location: "",
    },
    {
        name: "Greater Racket-Tailed Drongo",
        tag: "Drongos",
        fileName: "R6__9064.jpg",
        description: "",
        location: "",
    },
    {
        name: "House Crow",
        tag: "Crows",
        fileName: "R6__4652.jpg",
        description: "",
        location: "",
    },
    {
        name: "Javan Mynah",
        tag: "Mynahs",
        fileName: "IMG_1393.jpg",
        description: "",
        location: "",
    },
    {
        name: "Lineated Barbet",
        tag: "Barbets",
        fileName: "R6__9080.jpg",
        description: "",
        location: "",
    },
    {
        name: "Little Egret",
        tag: "Egrets",
        fileName: "R6__0596.jpg",
        description: "",
        location: "",
    },
    {
        name: "Little Egret",
        tag: "Egrets",
        fileName: "R6__3969.jpg",
        description: "",
        location: "",
    },
    {
        name: "Medium Egret",
        tag: "Egrets",
        fileName: "R6__4155.jpg",
        description: "",
        location: "",
    },
    {
        name: "Milky Stork",
        tag: "Storks",
        fileName: "R6__4002.jpg",
        description: "",
        location: "",
    },
    {
        name: "Olive-Backed Sunbird",
        tag: "Sunbirds",
        fileName: "IMG_9342.jpg",
        description: "",
        location: "",
    },
    {
        name: "Olive-Backed Sunbird",
        tag: "Sunbirds",
        fileName: "IMG_9964.jpg",
        description: "",
        location: "",
    },
    {
        name: "Olive-Backed Sunbird",
        tag: "Sunbirds",
        fileName: "R6__7365.jpg",
        description: "",
        location: "",
    },
    {
        name: "Oriental Dollarbird",
        tag: "Rollers",
        fileName: "R6__5366.jpg",
        description: "",
        location: "",
    },
    {
        name: "Oriental Honey Buzzard",
        tag: "Buzzards",
        fileName: "R6__3585.jpg",
        description: "",
        location: "",
    },
    {
        name: "Oriental Magpie Robin",
        tag: "Robins",
        fileName: "R6__9175.jpg",
        description: "",
        location: "",
    },
    {
        name: "Oriental Pied Hornbill",
        tag: "Hornbills",
        fileName: "R6__2707.jpg",
        description: "",
        location: "",
    },
    {
        name: "Oriental Pied Hornbill",
        tag: "Hornbills",
        fileName: "R6__7628.jpg",
        description: "",
        location: "",
    },
    {
        name: "Pacific Swallow",
        tag: "Swallows",
        fileName: "R6__8027.jpg",
        description: "",
        location: "",
    },
    {
        name: "Pied Triller",
        tag: "Cuckooshrikes",
        fileName: "R6__4171.jpg",
        description: "",
        location: "",
    },
    {
        name: "Pink-Necked Green Pigeon",
        tag: "Pigeons",
        fileName: "R6__0901.jpg",
        description: "",
        location: "",
    },
    {
        name: "Pink-Necked Green Pigeon",
        tag: "Pigeons",
        fileName: "R6__4306.jpg",
        description: "",
        location: "",
    },
    {
        name: "Red Junglefowl",
        tag: "Chickens",
        fileName: "R6__2542.jpg",
        description: "",
        location: "",
    },
    {
        name: "Red-Breasted Parakeet",
        tag: "Parakeets",
        fileName: "R6__1918.jpg",
        description: "",
        location: "",
    },
    {
        name: "Scarlet-Backed Flowerpecker",
        tag: "Flowerpeckers",
        fileName: "R6__8773.jpg",
        description: "",
        location: "",
    },
    {
        name: "Spotted Dove",
        tag: "Doves",
        fileName: "R6__4172.jpg",
        description: "",
        location: "",
    },
    {
        name: "Spotted Dove",
        tag: "Doves",
        fileName: "R6__7417.jpg",
        description: "",
        location: "",
    },
    {
        name: "Spotted Wood Owl",
        tag: "Owls",
        fileName: "R6__2165.jpg",
        description: "",
        location: "",
    },
    {
        name: "Spotted Wood Owl",
        tag: "Owls",
        fileName: "R6__8229.jpg",
        description: "",
        location: "",
    },
    {
        name: "Stork-Billed Kingfisher",
        tag: "Kingfishers",
        fileName: "R6__9863.JPG",
        description: "",
        location: "",
    },
    {
        name: "Striated Heron",
        tag: "Herons",
        fileName: "R6__4236.jpg",
        description: "",
        location: "",
    },
    {
        name: "Whimbrel",
        tag: "Whimbrels",
        fileName: "R6__8974.jpg",
        description: "",
        location: "",
    },
    {
        name: "White-Bellied Sea Eagle",
        tag: "Eagles",
        fileName: "R6__0399.jpg",
        description: "",
        location: "",
    },
    {
        name: "White-Bellied Sea Eagle",
        tag: "Eagles",
        fileName: "R6__3032.jpg",
        description: "",
        location: "",
    },
    {
        name: "White-Bellied Sea Eagle",
        tag: "Eagles",
        fileName: "R6__2878.jpg",
        description: "",
        location: "",
    },
    {
        name: "White-Breasted Waterhen",
        tag: "Waterbirds",
        fileName: "IMG_0321.jpg",
        description: "",
        location: "",
    },
    {
        name: "White-Breasted Waterhen",
        tag: "Waterbirds",
        fileName: "R6__8958.jpg",
        description: "",
        location: "",
    },
    {
        name: "White-Crested Laughingthrush",
        tag: "Laughingthrushes",
        fileName: "R6__3602.JPG",
        description: "",
        location: "",
    },
    {
        name: "White-Throated Kingfisher",
        tag: "Kingfishers",
        fileName: "R6__8643.jpg",
        description: "",
        location: "",
    },
    {
        name: "Yellow Bittern",
        tag: "Bitterns",
        fileName: "R6__8655.jpg",
        description: "",
        location: "",
    },
    {
        name: "Yellow-Vented Bulbul",
        tag: "Bulbuls",
        fileName: "R6__7486.jpg",
        description: "",
        location: "",
    },
    {
        name: "Yellow-Vented Bulbul",
        tag: "Bulbuls",
        fileName: "R6__8121.jpg",
        description: "",
        location: "",
    },
    {
        name: "Zebra Dove",
        tag: "Doves",
        fileName: "R6__4325.jpg",
        description: "",
        location: "",
    },
];

import classes from "./Birds.module.css";
import ImageComponent from "../../reusables/Image/ImageComponent";

const BIRDS_SORTED_BY_NAME = BIRD_IMAGES.sort((a, b) =>
    a.tag < b.tag ? -1 : 1
);

const Birds = () => {
    return (
        <div className={classes.tabContent}>
            <section id="photos" className={classes.photos}>
                {/* {BIRDS_SORTED_BY_NAME.map((bird, index) => (
                    <div key={index} className={classes.image}>
                        <ImageComponent
                            description=""
                            title={bird.name}
                            src={`/Birds/${bird.name}/${bird.fileName}`}
                            tag={bird.tag}
                        />
                    </div>
                ))} */}
            </section>
            <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }}>
                {BIRDS_SORTED_BY_NAME.map((bird, index) => (
                    <Center key={index}>
                        <ImageComponent
                            description=""
                            title={bird.name}
                            src={`/Birds/${bird.name}/${bird.fileName}`}
                            tag={bird.tag}
                        />
                    </Center>
                ))}
            </SimpleGrid>
        </div>
    );
};

export default Birds;
