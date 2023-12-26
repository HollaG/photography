export type ImageData = {
    name: string;
    tag: string;
    fileName: string;
    description: string;
    location: string;
    type: "Birds" | "Insects" | "Others" | "General";
};

const BIRD_IMAGES: ImageData[] = [
    {
        type: "Birds",
        name: "Ashy Tailorbird",
        tag: "Tailorbirds",
        fileName: "R6__4248.webp",
        description: "",
        location: "Pasir Ris Park",
    },
    {
        type: "Birds",
        name: "Asian Glossy Starling",
        tag: "Starlings",
        fileName: "IMG_9352.webp",
        description: "",
        location: "Tampines Eco Green",
    },
    {
        type: "Birds",
        name: "Asian Glossy Starling",
        tag: "Starlings",
        fileName: "R6__9517.webp",
        description: "",
        location: "Sungei Buloh Wetland Reserve",
    },
    {
        type: "Birds",
        name: "Black Swan",
        tag: "Swans",
        fileName: "R6__9038.webp",
        description: "",
        location: "Sungei Buloh Wetland Reserve",
    },
    {
        type: "Birds",
        name: "Black-Naped Oriole",
        tag: "Orioles",
        fileName: "IMG_1438.webp",
        description: "",
        location: "Bedok Reservoir Park",
    },
    {
        type: "Birds",
        name: "Black-Naped Oriole",
        tag: "Orioles",
        fileName: "R6__4132.webp",
        description: "",
        location: "Pasir Ris Park",
    },
    {
        type: "Birds",
        name: "Brahminy Kite",
        tag: "Kites",
        fileName: "R6__2927.webp",
        description: "",
        location: "Pasir Ris Park",
    },
    {
        type: "Birds",
        name: "Buffy Fish Owl",
        tag: "Owls",
        fileName: "bfo.webp",
        description: "",
        location: "Sungei Buloh Wetland Reserve",
    },
    {
        type: "Birds",
        name: "Collared Kingfisher",
        tag: "Kingfishers",
        fileName: "R6__4074.webp",
        description: "",
        location: "Pasir Ris Park",
    },
    {
        type: "Birds",
        name: "Collared Kingfisher",
        tag: "Kingfishers",
        fileName: "R6__4914.webp",
        description: "",
        location: "Bedok Reservoir Park",
    },
    {
        type: "Birds",
        name: "Collared Kingfisher",
        tag: "Kingfishers",
        fileName: "R6__9913.webp",
        description: "",
        location: "Sungei Buloh Wetland Reserve",
    },
    {
        type: "Birds",
        name: "Common Flameback",
        tag: "Woodpeckers",
        fileName: "R6__7680.webp",
        description: "",
        location: "Pasir Ris Park",
    },
    {
        type: "Birds",
        name: "Common Iora",
        tag: "Ioras",
        fileName: "IMG_1416 2.webp",
        description: "",
        location: "Bedok Reservoir Park",
    },
    {
        type: "Birds",
        name: "Common Kingfisher",
        tag: "Kingfishers",
        fileName: "R6__9129.webp",
        description: "",
        location: "Singapore Botanic Gardens",
    },
    {
        type: "Birds",
        name: "Common Redshank",
        tag: "Redshanks",
        fileName: "R6__8992.webp",
        description: "",
        location: "Sungei Buloh Wetland Reserve",
    },
    {
        type: "Birds",
        name: "Common Sandpiper",
        tag: "Sandpipers",
        fileName: "R6__4257.webp",
        description: "",
        location: "Sungei Buloh Wetland Reserve",
    },
    {
        type: "Birds",
        name: "Common Tern",
        tag: "Terns",
        fileName: "IMG_1545.webp",
        description: "",
        location: "Bedok Reservoir Park",
    },
    {
        type: "Birds",
        name: "Copper-Throated Sunbird",
        tag: "Sunbirds",
        fileName: "R6__1222.webp",
        description: "",
        location: "Sungei Buloh Wetland Reserve",
    },
    {
        type: "Birds",
        name: "Crimson Sunbird",
        tag: "Sunbirds",
        fileName: "R6__9071.webp",
        description: "",
        location: "Singapore Botanic Gardens",
    },
    {
        type: "Birds",
        name: "Eurasian Tree Sparrow",
        tag: "Sparrows",
        fileName: "IMG_1794.webp",
        description: "",
        location: "Bedok Reservoir Park",
    },
    {
        type: "Birds",
        name: "Gray Heron",
        tag: "Herons",
        fileName: "R6__0850.webp",
        description: "",
        location: "Sungei Buloh Wetland Reserve",
    },
    {
        type: "Birds",
        name: "Gray Heron",
        tag: "Herons",
        fileName: "R6__9754.webp",
        description: "",
        location: "Pasir Ris Park",
    },
    {
        type: "Birds",
        name: "Great Egret",
        tag: "Egrets",
        fileName: "R6__8984.webp",
        description: "",
        location: "Sungei Buloh Wetland Reserve",
    },
    {
        type: "Birds",
        name: "Great-Billed Heron",
        tag: "Herons",
        fileName: "R6__9037.webp",
        description: "",
        location: "Sungei Buloh Wetland Reserve",
    },
    {
        type: "Birds",
        name: "Greater Racket-Tailed Drongo",
        tag: "Drongos",
        fileName: "R6__9064.webp",
        description: "",
        location: "Singapore Botanic Gardens",
    },
    {
        type: "Birds",
        name: "House Crow",
        tag: "Crows",
        fileName: "R6__4652.webp",
        description: "",
        location: "Bedok Reservoir Park",
    },
    {
        type: "Birds",
        name: "Javan Mynah",
        tag: "Mynahs",
        fileName: "IMG_1393.webp",
        description: "",
        location: "Bedok Reservoir Park",
    },
    {
        type: "Birds",
        name: "Lineated Barbet",
        tag: "Barbets",
        fileName: "R6__9080.webp",
        description: "",
        location: "Singapore Botanic Gardens",
    },
    {
        type: "Birds",
        name: "Little Egret",
        tag: "Egrets",
        fileName: "R6__0596.webp",
        description: "",
        location: "Sungei Buloh Wetland Reserve",
    },
    {
        type: "Birds",
        name: "Little Egret",
        tag: "Egrets",
        fileName: "R6__3969.webp",
        description: "",
        location: "Sungei Buloh Wetland Reserve",
    },
    {
        type: "Birds",
        name: "Medium Egret",
        tag: "Egrets",
        fileName: "R6__4155.webp",
        description: "",
        location: "Sungei Buloh Wetland Reserve",
    },
    {
        type: "Birds",
        name: "Milky Stork",
        tag: "Storks",
        fileName: "R6__4002.webp",
        description: "",
        location: "Sungei Buloh Wetland Reserve",
    },
    {
        type: "Birds",
        name: "Olive-Backed Sunbird",
        tag: "Sunbirds",
        fileName: "IMG_9342.webp",
        description: "",
        location: "Tampines Eco Green",
    },
    {
        type: "Birds",
        name: "Olive-Backed Sunbird",
        tag: "Sunbirds",
        fileName: "IMG_9964.webp",
        description: "",
        location: "Pasir Ris Park",
    },
    {
        type: "Birds",
        name: "Olive-Backed Sunbird",
        tag: "Sunbirds",
        fileName: "R6__7365.webp",
        description: "",
        location: "Jurong Lake Gardens",
    },
    {
        type: "Birds",
        name: "Oriental Dollarbird",
        tag: "Rollers",
        fileName: "R6__5366.webp",
        description: "",
        location: "National University of Singapore",
    },
    {
        type: "Birds",
        name: "Oriental Honey Buzzard",
        tag: "Buzzards",
        fileName: "R6__3585.webp",
        description: "",
        location: "Pasir Ris Park",
    },
    {
        type: "Birds",
        name: "Oriental Magpie Robin",
        tag: "Robins",
        fileName: "R6__9175.webp",
        description: "",
        location: "Singapore Botanic Gardens",
    },
    {
        type: "Birds",
        name: "Oriental Pied Hornbill",
        tag: "Hornbills",
        fileName: "R6__2707.webp",
        description: "",
        location: "Pasir Ris Park",
    },
    {
        type: "Birds",
        name: "Oriental Pied Hornbill",
        tag: "Hornbills",
        fileName: "R6__7628.webp",
        description: "",
        location: "Pasir Ris Park",
    },
    {
        type: "Birds",
        name: "Pacific Swallow",
        tag: "Swallows",
        fileName: "R6__8027.webp",
        description: "",
        location: "Pasir Ris Park",
    },
    {
        type: "Birds",
        name: "Pied Triller",
        tag: "Cuckooshrikes",
        fileName: "R6__4171.webp",
        description: "",
        location: "Sungei Buloh Wetland Reserve",
    },
    {
        type: "Birds",
        name: "Pink-Necked Green Pigeon",
        tag: "Pigeons",
        fileName: "R6__0901.webp",
        description: "",
        location: "Sungei Buloh Wetland Reserve",
    },
    {
        type: "Birds",
        name: "Pink-Necked Green Pigeon",
        tag: "Pigeons",
        fileName: "R6__4306.webp",
        description: "",
        location: "Sungei Buloh Wetland Reserve",
    },
    {
        type: "Birds",
        name: "Red Junglefowl",
        tag: "Chickens",
        fileName: "R6__2542.webp",
        description: "",
        location: "Pasir Ris Park",
    },
    {
        type: "Birds",
        name: "Red Junglefowl",
        tag: "Chickens",
        fileName: "IMG_0340.webp",
        description: "",
        location: "Pasir Ris Park",
    },
    {
        type: "Birds",
        name: "Red-Breasted Parakeet",
        tag: "Parakeets",
        fileName: "R6__1918.webp",
        description: "",
        location: "Pasir Ris Park",
    },
    {
        type: "Birds",
        name: "Red-Breasted Parakeet",
        tag: "Parakeets",
        fileName: "R6__0284.webp",
        description: "",
        location: "Tampines Eco Green",
    },
    {
        type: "Birds",
        name: "Scarlet-Backed Flowerpecker",
        tag: "Flowerpeckers",
        fileName: "R6__8773.webp",
        description: "",
        location: "Sungei Buloh Wetland Reserve",
    },
    {
        type: "Birds",
        name: "Spotted Dove",
        tag: "Doves",
        fileName: "R6__4172.webp",
        description: "",
        location: "Sungei Buloh Wetland Reserve",
    },
    {
        type: "Birds",
        name: "Spotted Dove",
        tag: "Doves",
        fileName: "R6__7417.webp",
        description: "",
        location: "Jurong Lake Gardens",
    },
    {
        type: "Birds",
        name: "Spotted Wood Owl",
        tag: "Owls",
        fileName: "R6__2165.webp",
        description: "",
        location: "Pasir Ris Park",
    },
    {
        type: "Birds",
        name: "Spotted Wood Owl",
        tag: "Owls",
        fileName: "R6__8229.webp",
        description: "",
        location: "Pasir Ris Park",
    },
    {
        type: "Birds",
        name: "Stork-Billed Kingfisher",
        tag: "Kingfishers",
        fileName: "R6__9863.webp",
        description: "",
        location: "Pasir Ris Park",
    },
    {
        type: "Birds",
        name: "Striated Heron",
        tag: "Herons",
        fileName: "R6__4236.webp",
        description: "",
        location: "Sungei Buloh Wetland Reserve",
    },
    {
        type: "Birds",
        name: "Whimbrel",
        tag: "Whimbrels",
        fileName: "R6__8974.webp",
        description: "",
        location: "Sungei Buloh Wetland Reserve",
    },
    {
        type: "Birds",
        name: "White-Bellied Sea Eagle",
        tag: "Eagles",
        fileName: "R6__0399.webp",
        description: "",
        location: "Sungei Buloh Wetland Reserve",
    },
    {
        type: "Birds",
        name: "White-Bellied Sea Eagle",
        tag: "Eagles",
        fileName: "R6__3032.webp",
        description: "",
        location: "Pasir Ris Park",
    },
    {
        type: "Birds",
        name: "White-Bellied Sea Eagle",
        tag: "Eagles",
        fileName: "R6__2878.webp",
        description: "",
        location: "Pasir Ris Park",
    },
    {
        type: "Birds",
        name: "White-Breasted Waterhen",
        tag: "Waterbirds",
        fileName: "IMG_0321.webp",
        description: "",
        location: "Pasir Ris Park",
    },
    {
        type: "Birds",
        name: "White-Breasted Waterhen",
        tag: "Waterbirds",
        fileName: "R6__8958.webp",
        description: "",
        location: "Sungei Buloh Wetland Reserve",
    },
    {
        type: "Birds",
        name: "White-Crested Laughingthrush",
        tag: "Laughingthrushes",
        fileName: "R6__3602.webp",
        description: "",
        location: "National University of Singapore",
    },
    {
        type: "Birds",
        name: "White-Throated Kingfisher",
        tag: "Kingfishers",
        fileName: "R6__8643.webp",
        description: "",
        location: "Sungei Buloh Wetland Reserve",
    },
    {
        type: "Birds",
        name: "Yellow Bittern",
        tag: "Bitterns",
        fileName: "R6__8655.webp",
        description: "",
        location: "Sungei Buloh Wetland Reserve",
    },
    {
        type: "Birds",
        name: "Yellow-Vented Bulbul",
        tag: "Bulbuls",
        fileName: "R6__7486.webp",
        description: "",
        location: "Jurong Lake Gardens",
    },
    {
        type: "Birds",
        name: "Yellow-Vented Bulbul",
        tag: "Bulbuls",
        fileName: "R6__8121.webp",
        description: "",
        location: "Pasir Ris Park",
    },
    {
        type: "Birds",
        name: "Zebra Dove",
        tag: "Doves",
        fileName: "R6__4325.webp",
        description: "",
        location: "Sungei Buloh Wetland Reserve",
    },
];

const INSECT_IMAGES: ImageData[] = [
    {
        type: "Insects",
        name: "Batik Golden Web Spider",
        tag: "Spiders",
        fileName: "R6__3894-Enhanced-NR.webp",
        description: "",
        location: "Sungei Buloh Wetland Reserve",
    },
    {
        type: "Insects",
        name: "Collared Threadtail",
        tag: "Damselflies",
        fileName: "R6__5513.webp",
        description: "",
        location: "Thomson Nature Park",
    },
    {
        type: "Insects",
        name: "Common Birdwing",
        tag: "Butterflies",
        fileName: "R6__9134.webp",
        description: "",
        location: "Sungei Buloh Wetland Reserve",
    },
    {
        type: "Insects",
        name: "Common Palmfly",
        tag: "Butterflies",
        fileName: "R6__3556.webp",
        description: "",
        location: "National University of Singapore",
    },
    {
        type: "Insects",
        name: "Common Parasol",
        tag: "Dragonflies",
        fileName: "R6__5699.webp",
        description: "",
        location: "Thomson Nature Park",
    },
    {
        type: "Insects",
        name: "Common Parasol",
        tag: "Dragonflies",
        fileName: "R6__8879.webp",
        description: "",
        location: "Sungei Buloh Wetland Reserve",
    },
    {
        type: "Insects",
        name: "Dark-Tipped Forest-Skimmer",
        tag: "Dragonflies",
        fileName: "R6__5724.webp",
        description: "R6__7567.webp",
        location: "Thomson Nature Park",
    },
    {
        type: "Insects",
        name: "Hübner's Wasp Moth",
        tag: "Moths",
        fileName: "R6__7567.webp",
        description: "",
        location: "Jurong Lake Gardens",
    },
    {
        type: "Insects",
        name: "Limnometra Ciliata",
        tag: "Water Striders",
        fileName: "R6__0991.webp",
        description: "",
        location: "Sungei Buloh Wetland Reserve",
    },
    {
        type: "Insects",
        name: "Malayan Plum Judy",
        tag: "Butterflies",
        fileName: "R6__3482.webp",
        description: "",
        location: "National University of Singapore",
    },
    {
        type: "Insects",
        name: "Nisitrus Malaya",
        tag: "Grasshoppers",
        fileName: "R6__3475.webp",
        description: "",
        location: "National University of Singapore",
    },
    {
        type: "Insects",
        name: "Painted Jezebel",
        tag: "Butterflies",
        fileName: "R6__5458.webp",
        description: "",
        location: "Thomson Nature Park",
    },
    {
        type: "Insects",
        name: "Palm King",
        tag: "Butterflies",
        fileName: "R6__9007.webp",
        description: "",
        location: "Sungei Buloh Wetland Reserve",
    },
    {
        type: "Insects",
        name: "Rufous-Legged Grasshopper",
        tag: "Grasshoppers",
        fileName: "R6__0300.webp",
        description: "",
        location: "Sungei Buloh Wetland Reserve",
    },
    {
        type: "Insects",
        name: "Scarlet Skimmer",
        tag: "Dragonflies",
        fileName: "R6__0322.webp",
        description: "",
        location: "Sungei Buloh Wetland Reserve",
    },
    {
        type: "Insects",
        name: "Short-Banded Sailor",
        tag: "Butterflies",
        fileName: "R6__8810.webp",
        description: "",
        location: "Sungei Buloh Wetland Reserve",
    },
    {
        type: "Insects",
        name: "Treehugger",
        tag: "Dragonflies",
        fileName: "R6__5494-Enhanced-NR.webp",
        description: "",
        location: "Thomson Nature Park",
    },
    {
        type: "Insects",
        name: "Variable Sentinel",
        tag: "Dragonflies",
        fileName: "R6__5567.webp",
        description: "",
        location: "Thomson Nature Park",
    },
    {
        type: "Insects",
        name: "Variegated Green Skimmer",
        tag: "Dragonflies",
        fileName: "R6__4033.webp",
        description: "",
        location: "Sungei Buloh Wetland Reserve",
    },
    {
        type: "Insects",
        name: "Yellow-Barred Flutterer",
        tag: "Dragonflies",
        fileName: "R6__8834.webp",
        description: "",
        location: "Sungei Buloh Wetland Reserve",
    },
];

const OTHERS_IMAGES: ImageData[] = [
    {
        type: "Others",
        name: "Boddart's Blue-Spotted Mudskipper",
        tag: "Mudskippers",
        fileName: "R6__3941.webp",
        description: "",
        location: "Sungei Buloh Wetland Reserve",
    },
    {
        type: "Others",
        name: "Common Sun Skink",
        tag: "Skinks",
        fileName: "R6__8722.webp",
        description: "",
        location: "Sungei Buloh Wetland Reserve",
    },
    {
        type: "Others",
        name: "Estuarine Crocodile",
        tag: "Crocodiles",
        fileName: "R6__9137.webp",
        description: "",
        location: "Sungei Buloh Wetland Reserve",
    },
    {
        type: "Others",
        name: "Estuarine Crocodile",
        tag: "Crocodiles",
        fileName: "R6__0467.webp",
        description: "",
        location: "Sungei Buloh Wetland Reserve",
    },
    {
        type: "Others",
        name: "Giant Mudskipper",
        tag: "Mudskippers",
        fileName: "R6__8817.webp",
        description: "",
        location: "Sungei Buloh Wetland Reserve",
    },
    {
        type: "Others",
        name: "Lesser Short-Nosed Fruit Bat",
        tag: "Bats",
        fileName: "lesser dog-faced fruit bat.webp",
        description: "",
        location: "Sungei Buloh Wetland Reserve",
    },
    {
        type: "Others",
        name: "Mangrove Jellyfish",
        tag: "Jellyfishes",
        fileName: "R6__9971.webp",
        description: "",
        location: "Sungei Buloh Wetland Reserve",
    },
    {
        type: "Others",
        name: "Mangrove Viper",
        tag: "Snakes",
        fileName: "R6__9107.webp",
        description: "",
        location: "Sungei Buloh Wetland Reserve",
    },
    {
        type: "Others",
        name: "Oriental Garden Lizard",
        tag: "Lizards",
        fileName: "IMG_0098.webp",
        description: "",
        location: "Pasir Ris Park",
    },
    {
        type: "Others",
        name: "Oriental Garden Lizard",
        tag: "Lizards",
        fileName: "R6__7695.webp",
        description: "",
        location: "Jurong Lake Gardens",
    },
    {
        type: "Others",
        name: "Paradise Flying Snake",
        tag: "Snakes",
        fileName: "R6__8930.webp",
        description: "",
        location: "Sungei Buloh Wetland Reserve",
    },
    {
        type: "Others",
        name: "Plaintain Squirrel",
        tag: "Squirrels",
        fileName: "R6__8358.webp",
        description: "",
        location: "Pasir Ris Park",
    },
    {
        type: "Others",
        name: "Red-Eared Slider",
        tag: "Turtles",
        fileName: "IMG_9435.webp",
        description: "",
        location: "Tampines Eco Green",
    },
    {
        type: "Others",
        name: "Smooth-Coated Otter",
        tag: "Otters",
        fileName: "R6__9154.webp",
        description: "",
        location: "Sungei Buloh Wetland Reserve",
    },
    {
        type: "Others",
        name: "Southeast Asian Water Monitor",
        tag: "Monitor Lizards",
        fileName: "R6__5795.webp",
        description: "",
        location: "National University of Singapore",
    },
];

const GENERAL_IMAGES: ImageData[] = [
    {
        type: "General",
        name: "",
        tag: "",
        fileName: "1.webp",
        description: "",
        location: "",
    },
    {
        type: "General",
        name: "",
        tag: "",
        fileName: "2.webp",
        description: "",
        location: "",
    },
    {
        type: "General",
        name: "",
        tag: "",
        fileName: "3.webp",
        description: "",
        location: "",
    },
    {
        type: "General",
        name: "",
        tag: "",
        fileName: "4.webp",
        description: "",
        location: "",
    },
    {
        type: "General",
        name: "",
        tag: "",
        fileName: "5.webp",
        description: "",
        location: "",
    },
    {
        type: "General",
        name: "",
        tag: "",
        fileName: "6.webp",
        description: "",
        location: "",
    },
    {
        type: "General",
        name: "",
        tag: "",
        fileName: "7.webp",
        description: "",
        location: "",
    },
    {
        type: "General",
        name: "",
        tag: "",
        fileName: "8.webp",
        description: "",
        location: "",
    },
    {
        type: "General",
        name: "",
        tag: "",
        fileName: "9.webp",
        description: "",
        location: "",
    },
    {
        type: "General",
        name: "",
        tag: "",
        fileName: "10.webp",
        description: "",
        location: "",
    },
];

export const ALL_IMAGES = [...BIRD_IMAGES, ...INSECT_IMAGES, ...OTHERS_IMAGES];

export const BIRD_DATA = BIRD_IMAGES.sort((a, b) => (a.tag < b.tag ? -1 : 1));

export const INSECT_DATA = INSECT_IMAGES.sort((a, b) =>
    a.tag < b.tag ? -1 : 1
);

export const OTHERS_DATA = OTHERS_IMAGES.sort((a, b) =>
    a.tag < b.tag ? -1 : 1
);

// randomize the array
export const GENERAL_DATA = GENERAL_IMAGES.sort(() => Math.random() - 0.5);

// Group an array of objects by a key, except for General Images
export const UNIQUE_ALL = uniquify(ALL_IMAGES, "name").sort((a, b) =>
    a.name < b.name ? -1 : 1
);
export const GROUPED_BY_TAG = UNIQUE_ALL.reduce((acc, item) => {
    const { tag } = item;

    if (!acc[tag]) {
        acc[tag] = [];
    }

    acc[tag].push(item);

    return acc;
}, {} as { [key: string]: typeof BIRD_DATA });

// convert into the form needed by Autocomplete
export const AUTOCOMPLETE_DATA_GROUPED = Object.keys(GROUPED_BY_TAG)
    .map((tag) => {
        return {
            group: tag,
            items: unique(
                GROUPED_BY_TAG[tag].map((item) => `${item.name}`).sort()
            ),
        };
    })
    .sort((a, b) => (a.group < b.group ? -1 : 1));

export const BIRDS_GROUPED_BY_TAG = BIRD_IMAGES.reduce((acc, item) => {
    const { tag } = item;

    if (!acc[tag]) {
        acc[tag] = [];
    }

    acc[tag].push(item);

    return acc;
}, {} as { [key: string]: typeof BIRD_DATA });

export const UNIQUE_BIRDS_COUNT = unique(
    BIRD_IMAGES.map((birdData) => birdData.name)
).length;

export const UNIQUE_INSECTS_COUNT = unique(
    INSECT_IMAGES.map((insectData) => insectData.name)
).length;

export const UNIQUE_OTHERS_COUNT = unique(
    OTHERS_IMAGES.map((otherData) => otherData.name)
).length;

export const ALL_UNIQUE_COUNT =
    UNIQUE_BIRDS_COUNT + UNIQUE_INSECTS_COUNT + UNIQUE_OTHERS_COUNT;

export const UNIQUE_LOCATIONS = uniquify(ALL_IMAGES, "location").sort((a, b) =>
    a.location < b.location ? -1 : 1
);
export const UNIQUE_LOCATIONS_COUNT = UNIQUE_LOCATIONS.length;

console.log(UNIQUE_LOCATIONS);
/**
 * Removes duplicates.
 *
 * @param arr The array to process
 * @returns
 */
function unique<T>(arr: T[]) {
    return arr.filter((v, i) => arr.indexOf(v) === i);
}

/**
 * Removes duplicates from a complex array.
 *
 * @param arr The array to process
 * @param property The property of the object to make unique by
 * @returns
 */
function uniquify<T>(arr: T[], property: keyof T) {
    return arr.filter(
        (v, i) => arr.findIndex((item) => item[property] === v[property]) === i
    );
}

/**
 * Get a random image from all images in repository
 * @returns
 */
export function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * ALL_IMAGES.length);
    return ALL_IMAGES[randomIndex];
}

/**
 * Generates an image path based on what type of image is supplied.
 * For images other than GENERAL, the path is:
 * / [ type of image, e.g. Birds ] / [ species, e.g. Ashy Tailorbird ] / [ fileName, e.g. R6_1000.jpg ]
 *
 * For GENERAL images, the path is:
 * / [ General ] / [ fileName ]
 *
 * @param data The image to get the path for
 * @returns
 */
export function getImagePath(data: ImageData) {
    if (data.name) {
        return `/${data.type}/${data.name}/${data.fileName}`;
    } else {
        return `/${data.type}/${data.fileName}`;
    }
}
