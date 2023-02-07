const data = [
    {
        "breed": "Labrador Retriever",
        "origin": "Canada,USA",
        "popularity": "1",
        "temperament": ["Cheerful", "Gentle", "Friendly", "Intelligent"],
        "photo": "https://www.luckyandlady.com/wp-content/uploads/2019/03/Labrador-Retriever-Most-Popular-Dog-Breed.png"
    },
    {
        "breed": "German Shepard",
        "origin": "Germany",
        "popularity": "2",
        "temperament": ["Corageous", "Intelligent", "Loyal", "Watchful"],
        "photo": "https://www.akc.org/wp-content/uploads/2017/11/German-Shepherd-on-White-00.jpg"
    },
    {
        "breed": "Golden Retriever",
        "origin": "United Kingdom",
        "popularity": "3",
        "temperament": ["Intelligent", "Kind", "Friendly", "Confident"],
        "photo": "https://dogtime.com/assets/uploads/gallery/golden-retriever-dogs-and-puppies/golden-retriever-dogs-puppies-8.jpg"
    },
    {
        "breed": "French Bulldog",
        "origin": "France, UK",
        "popularity": "4",
        "temperament": ["Playful", "Sociable", "Friendly", "Lively", "Patient"],
        "photo": "https://bowwowinsurance.com.au/wp-content/uploads/2018/10/french-bulldog-frenchie-700x700.jpg"

    },
    {
        "breed": "Bulldog",
        "origin": "United Kingdom",
        "popularity": "5",
        "temperament": ["Friendly", "Docile", "Willful", "Gregarious"],
        "photo": "https://dogtime.com/assets/uploads/gallery/bulldog-dog-breed-pictures/1-threequartersitting.jpg"

    },
    {
        "breed": "Beagle",
        "origin": "United Kingdom",
        "popularity": "6",
        "temperament": ["Gentle", "Intelligent", "Even Tempered", "Determined"],
        "photo": "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-07/Beagle.jpg"

    },
    {
        "breed": "Poodle",
        "origin": "Germany, France",
        "popularity": "7",
        "temperament": ["Intelligent", "Faithful", "Trainable", "Instinctual"],
        "photo": "https://www.akc.org/wp-content/uploads/2017/11/Poodle-MP.jpg"

    },
    {
        "breed": "German Shorthaired Pointer",
        "origin": "Germany",
        "popularity": "9",
        "temperament": ["Intelligent", "Trainable", "Boisterous", "Cooperative"],
        "photo": "https://www.akc.org/wp-content/uploads/2017/11/German-Shorthaired-Pointer-On-White-07.jpg"

    },
    {
        "breed": "Yorkshire Terrier",
        "origin": "United Kingdom",
        "popularity": "10",
        "temperament": ["Independent", "Intelligent", "Corageous", "Confident"],
        "photo": "https://www.purina.co.uk/sites/default/files/2022-08/Yorkshire-Terrier.jpg"

    },
    {
        "breed": "Siberian Husky",
        "origin": "Siberia",
        "popularity": "8",
        "temperament": ["Friendly", "Intelligent", "Independent", "Active"],
        "photo": "https://live.staticflickr.com/65535/16508131268_279d944dea_b.jpg"
    },
    {
        "breed": "Dachshund",
        "origin": "Germany",
        "popularity": "7",
        "temperament": ["Loyal", "Playful", "Brave", "Friendly"],
        "photo": "https://dogtime.com/assets/uploads/2011/01/file_23020_dachshund-dog-breed.jpg"
    },
    {
        "breed": "Chow Chow",
        "origin": "China",
        "popularity": "17",
        "temperament": ["Independent", "Protective", "Loyal", "Aloof"],
        "photo": "http://cdn.akc.org/content/hero/chow_chow_bod_hero.jpg"
    },
    {
        "breed": "Belgian Malinois",
        "origin": "Belgium",
        "popularity": "19",
        "temperament": ["Active", "Intelligent", "Protective", "Trainable"],
        "photo": "https://www.akc.org/wp-content/uploads/2017/11/Belgian-Malinois-On-White-01.jpg"
    },
    {
        "breed": "Bloodhounds",
        "origin": "Belgium",
        "popularity": "15",
        "temperament": ["Friendly", "Determined", "Independent", "Scent-driven"],
        "photo": "https://www.purina.co.uk/sites/default/files/2021-02/BREED%20Hero_0017_bloodhound.jpg"
    },
    {
        "breed": "Borzois",
        "origin": "Russia",
        "popularity": "14",
        "temperament": ["Graceful", "Independent", "Sensitive", "Affectionate"],
        "photo": "https://www.dogproductpicker.com/wp-content/uploads/2019/06/Borzoi-Dog-Breed-Information-All-You-Need-to-Know.jpg"
    },
    {
        "breed": "Brittanys",
        "origin": "France",
        "popularity": "12",
        "temperament": ["Friendly", "Active", "Lively", "Energetic"],
        "photo": "https://s36700.pcdn.co/wp-content/uploads/2019/11/2006_Breeds_Brittany_GettyImages-1079748500.png"
    },
    {
        "breed": "Bullmastiffs",
        "origin": "England",
        "popularity": "16",
        "temperament": ["Gentle", "Loyal", "Protective", "Good-natured"],
        "photo": "https://www.akc.org/wp-content/uploads/2017/11/Bullmastiff-puppy-standing.jpg"
    },
    {
        "breed": "Dalmatians",
        "origin": "Croatia",
        "popularity": "13",
        "temperament": ["Friendly", "Energetic", "Outgoing", "Intelligent"],
        "photo": "https://www.akc.org/wp-content/uploads/2017/11/Dalmatian-On-White-01.jpg"
    },
    {
        "breed": "Fox Terriers",
        "origin": "England",
        "popularity": "18",
        "temperament": ["Energetic", "Playful", "Tenacious", "Friendly"],
        "photo": "https://www.purina-arabia.com/sites/default/files/2021-02/BREED%20Hero_0050_fox_terrier_wire.jpg"
    },
    {
        "breed": "Chihuahua",
        "origin": "Mexico",
        "popularity": "2",
        "temperament": ["Bold", "Playful", "Sassy", "Lively"],
        "photo": "https://www.akc.org/wp-content/uploads/2017/11/Chihuahua-standing-in-three-quarter-view.jpg"
    },
    {
        "breed": "Shih Tzu",
        "origin": "China",
        "popularity": "4",
        "temperament": ["Friendly", "Outgoing", "Playful", "Affectionate"],
        "photo": "https://www.akc.org/wp-content/uploads/2017/11/Shih-Tzu-On-White-01.jpg"
    },
    {
        "breed": "Akitas",
        "origin": "Japan",
        "popularity": "31",
        "temperament": ["Confident", "Protective", "Dominant", "Independent"],
        "photo": "https://www.akc.org/wp-content/uploads/2017/11/Belgian-Malinois-On-White-01.jpg"
    },
    {
        "breed": "Alaskan Malamute",
        "origin": "Alaska",
        "popularity": "24",
        "temperament": ["Bold", "Loyal", "Independent", "Playful"],
        "photo": "https://europetnet.com/images/dogbreeds/alaskanmalamute.jpg"
    },
    {
        "breed": "Otterhound",
        "origin": "England",
        "popularity": "90",
        "temperament": ["Friendly", "Loyal", "Protective", "Independent"],
        "photo": "https://europetnet.com/images/dogbreeds/alaskanmalamute.jpg"
    }
]

export default data;