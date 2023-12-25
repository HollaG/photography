import { TAG_NAME_SEPARATOR } from "./consts";

const BIRD_IMAGES = [
    {
        name: "Ashy Tailorbird",
        tag: "Tailorbirds",
        fileName: "R6__4248.webp",
        description: "",
        location: "",
    },
    {
        name: "Asian Glossy Starling",
        tag: "Starlings",
        fileName: "IMG_9352.webp",
        description: "",
        location: "",
    },
    {
        name: "Asian Glossy Starling",
        tag: "Starlings",
        fileName: "R6__9517.webp",
        description: "",
        location: "",
    },
    {
        name: "Black Swan",
        tag: "Swans",
        fileName: "R6__9038.webp",
        description: "",
        location: "",
    },
    {
        name: "Black-Naped Oriole",
        tag: "Orioles",
        fileName: "IMG_1438.webp",
        description: "",
        location: "",
    },
    {
        name: "Black-Naped Oriole",
        tag: "Orioles",
        fileName: "R6__4132.webp",
        description: "",
        location: "",
    },
    {
        name: "Brahminy Kite",
        tag: "Kites",
        fileName: "R6__2927.webp",
        description: "",
        location: "",
    },
    {
        name: "Buffy Fish Owl",
        tag: "Owls",
        fileName: "bfo.webp",
        description: "",
        location: "",
    },
    {
        name: "Collared Kingfisher",
        tag: "Kingfishers",
        fileName: "R6__4074.webp",
        description: "",
        location: "",
    },
    {
        name: "Collared Kingfisher",
        tag: "Kingfishers",
        fileName: "R6__4914.webp",
        description: "",
        location: "",
    },
    {
        name: "Collared Kingfisher",
        tag: "Kingfishers",
        fileName: "R6__9913.webp",
        description: "",
        location: "",
    },
    {
        name: "Common Flameback",
        tag: "Woodpeckers",
        fileName: "R6__7680.webp",
        description: "",
        location: "",
    },
    {
        name: "Common Iora",
        tag: "Ioras",
        fileName: "IMG_1416 2.webp",
        description: "",
        location: "",
    },
    {
        name: "Common Kingfisher",
        tag: "Kingfishers",
        fileName: "R6__9129.webp",
        description: "",
        location: "",
    },
    {
        name: "Common Redshank",
        tag: "Redshanks",
        fileName: "R6__8992.webp",
        description: "",
        location: "",
    },
    {
        name: "Common Sandpiper",
        tag: "Sandpipers",
        fileName: "R6__4257.webp",
        description: "",
        location: "",
    },
    {
        name: "Common Tern",
        tag: "Terns",
        fileName: "IMG_1545.webp",
        description: "",
        location: "",
    },
    {
        name: "Copper-Throated Sunbird",
        tag: "Sunbirds",
        fileName: "R6__1222.webp",
        description: "",
        location: "",
    },
    {
        name: "Crimson Sunbird",
        tag: "Sunbirds",
        fileName: "R6__9071.webp",
        description: "",
        location: "",
    },
    {
        name: "Eurasian Tree Sparrow",
        tag: "Sparrows",
        fileName: "IMG_1794.webp",
        description: "",
        location: "",
    },
    {
        name: "Gray Heron",
        tag: "Herons",
        fileName: "R6__0850.webp",
        description: "",
        location: "",
    },
    {
        name: "Gray Heron",
        tag: "Herons",
        fileName: "R6__9754.webp",
        description: "",
        location: "",
    },
    {
        name: "Great Egret",
        tag: "Egrets",
        fileName: "R6__8984.webp",
        description: "",
        location: "",
    },
    {
        name: "Great-Billed Heron",
        tag: "Herons",
        fileName: "R6__9037.webp",
        description: "",
        location: "",
    },
    {
        name: "Greater Racket-Tailed Drongo",
        tag: "Drongos",
        fileName: "R6__9064.webp",
        description: "",
        location: "",
    },
    {
        name: "House Crow",
        tag: "Crows",
        fileName: "R6__4652.webp",
        description: "",
        location: "",
    },
    {
        name: "Javan Mynah",
        tag: "Mynahs",
        fileName: "IMG_1393.webp",
        description: "",
        location: "",
    },
    {
        name: "Lineated Barbet",
        tag: "Barbets",
        fileName: "R6__9080.webp",
        description: "",
        location: "",
    },
    {
        name: "Little Egret",
        tag: "Egrets",
        fileName: "R6__0596.webp",
        description: "",
        location: "",
    },
    {
        name: "Little Egret",
        tag: "Egrets",
        fileName: "R6__3969.webp",
        description: "",
        location: "",
    },
    {
        name: "Medium Egret",
        tag: "Egrets",
        fileName: "R6__4155.webp",
        description: "",
        location: "",
    },
    {
        name: "Milky Stork",
        tag: "Storks",
        fileName: "R6__4002.webp",
        description: "",
        location: "",
    },
    {
        name: "Olive-Backed Sunbird",
        tag: "Sunbirds",
        fileName: "IMG_9342.webp",
        description: "",
        location: "",
    },
    {
        name: "Olive-Backed Sunbird",
        tag: "Sunbirds",
        fileName: "IMG_9964.webp",
        description: "",
        location: "",
    },
    {
        name: "Olive-Backed Sunbird",
        tag: "Sunbirds",
        fileName: "R6__7365.webp",
        description: "",
        location: "",
    },
    {
        name: "Oriental Dollarbird",
        tag: "Rollers",
        fileName: "R6__5366.webp",
        description: "",
        location: "",
    },
    {
        name: "Oriental Honey Buzzard",
        tag: "Buzzards",
        fileName: "R6__3585.webp",
        description: "",
        location: "",
    },
    {
        name: "Oriental Magpie Robin",
        tag: "Robins",
        fileName: "R6__9175.webp",
        description: "",
        location: "",
    },
    {
        name: "Oriental Pied Hornbill",
        tag: "Hornbills",
        fileName: "R6__2707.webp",
        description: "",
        location: "",
    },
    {
        name: "Oriental Pied Hornbill",
        tag: "Hornbills",
        fileName: "R6__7628.webp",
        description: "",
        location: "",
    },
    {
        name: "Pacific Swallow",
        tag: "Swallows",
        fileName: "R6__8027.webp",
        description: "",
        location: "",
    },
    {
        name: "Pied Triller",
        tag: "Cuckooshrikes",
        fileName: "R6__4171.webp",
        description: "",
        location: "",
    },
    {
        name: "Pink-Necked Green Pigeon",
        tag: "Pigeons",
        fileName: "R6__0901.webp",
        description: "",
        location: "",
    },
    {
        name: "Pink-Necked Green Pigeon",
        tag: "Pigeons",
        fileName: "R6__4306.webp",
        description: "",
        location: "",
    },
    {
        name: "Red Junglefowl",
        tag: "Chickens",
        fileName: "R6__2542.webp",
        description: "",
        location: "",
    },
    {
        name: "Red-Breasted Parakeet",
        tag: "Parakeets",
        fileName: "R6__1918.webp",
        description: "",
        location: "",
    },
    {
        name: "Scarlet-Backed Flowerpecker",
        tag: "Flowerpeckers",
        fileName: "R6__8773.webp",
        description: "",
        location: "",
    },
    {
        name: "Spotted Dove",
        tag: "Doves",
        fileName: "R6__4172.webp",
        description: "",
        location: "",
    },
    {
        name: "Spotted Dove",
        tag: "Doves",
        fileName: "R6__7417.webp",
        description: "",
        location: "",
    },
    {
        name: "Spotted Wood Owl",
        tag: "Owls",
        fileName: "R6__2165.webp",
        description: "",
        location: "",
    },
    {
        name: "Spotted Wood Owl",
        tag: "Owls",
        fileName: "R6__8229.webp",
        description: "",
        location: "",
    },
    {
        name: "Stork-Billed Kingfisher",
        tag: "Kingfishers",
        fileName: "R6__9863.webp",
        description: "",
        location: "",
    },
    {
        name: "Striated Heron",
        tag: "Herons",
        fileName: "R6__4236.webp",
        description: "",
        location: "",
    },
    {
        name: "Whimbrel",
        tag: "Whimbrels",
        fileName: "R6__8974.webp",
        description: "",
        location: "",
    },
    {
        name: "White-Bellied Sea Eagle",
        tag: "Eagles",
        fileName: "R6__0399.webp",
        description: "",
        location: "",
    },
    {
        name: "White-Bellied Sea Eagle",
        tag: "Eagles",
        fileName: "R6__3032.webp",
        description: "",
        location: "",
    },
    {
        name: "White-Bellied Sea Eagle",
        tag: "Eagles",
        fileName: "R6__2878.webp",
        description: "",
        location: "",
    },
    {
        name: "White-Breasted Waterhen",
        tag: "Waterbirds",
        fileName: "IMG_0321.webp",
        description: "",
        location: "",
    },
    {
        name: "White-Breasted Waterhen",
        tag: "Waterbirds",
        fileName: "R6__8958.webp",
        description: "",
        location: "",
    },
    {
        name: "White-Crested Laughingthrush",
        tag: "Laughingthrushes",
        fileName: "R6__3602.webp",
        description: "",
        location: "",
    },
    {
        name: "White-Throated Kingfisher",
        tag: "Kingfishers",
        fileName: "R6__8643.webp",
        description: "",
        location: "",
    },
    {
        name: "Yellow Bittern",
        tag: "Bitterns",
        fileName: "R6__8655.webp",
        description: "",
        location: "",
    },
    {
        name: "Yellow-Vented Bulbul",
        tag: "Bulbuls",
        fileName: "R6__7486.webp",
        description: "",
        location: "",
    },
    {
        name: "Yellow-Vented Bulbul",
        tag: "Bulbuls",
        fileName: "R6__8121.webp",
        description: "",
        location: "",
    },
    {
        name: "Zebra Dove",
        tag: "Doves",
        fileName: "R6__4325.webp",
        description: "",
        location: "",
    },
];

export const ALL_IMAGES = [...BIRD_IMAGES];

export const BIRD_DATA = BIRD_IMAGES.sort((a, b) => (a.tag < b.tag ? -1 : 1));

// Group an array of objects by a key
const GROUPED_BY_TAG = BIRD_DATA.reduce((acc, birdData) => {
    const { tag } = birdData;

    if (!acc[tag]) {
        acc[tag] = [];
    }

    acc[tag].push(birdData);

    return acc;
}, {} as { [key: string]: typeof BIRD_DATA });

// convert into the form needed by Autocomplete
export const AUTOCOMPLETE_DATA_GROUPED = Object.keys(GROUPED_BY_TAG).map(
    (tag) => {
        return {
            group: tag,
            items: unique(
                GROUPED_BY_TAG[tag].map((birdData) => `${birdData.name}`).sort()
            ),
        };
    }
);

export const AUTOCOMPLETE_DATA = unique(
    BIRD_IMAGES.map(
        (birdData) => `${birdData.tag} ${TAG_NAME_SEPARATOR} ${birdData.name}`
    ).sort()
);

export const UNIQUE_BIRDS = unique(
    BIRD_IMAGES.map((birdData) => birdData.name)
).length;

/**
 * Removes duplicates.
 *
 * @param arr The array to process
 * @returns
 */
function unique(arr: any[]) {
    return arr.filter((v, i) => arr.indexOf(v) === i);
}

/**
 * Get a random image from all images in repository
 * @returns
 */
export function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * ALL_IMAGES.length);
    return ALL_IMAGES[randomIndex];
}