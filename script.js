
const hotels = [

    // =========================
    // KATHMANDU
    // =========================

    {
        city: "Kathmandu",
        name: "Lemon Tree premier",
        image: "images/f-1.jpg",
        location: "Budhanilkantha, Kathmandu, Nepal",
        price: "NPR 9,999",
        rating: 5,
        map: "https://www.google.com/maps/place/Lemon+Tree+Premier+-+Budhanilkantha,+Kathmandu/@27.7794809,85.3687833,16.86z"
    },

    {
        city: "Kathmandu",
        name: "The Dwarika",
        image: "images/f-2.jpg",
        location: "Battisputali Rd, Kathmandu, Nepal",
        price: "NPR 50,000",
        rating: 5,
        map: "https://www.google.com/maps/place/The+Dwarika's/@27.7053205,85.3395832,16.52z"
    },

    {
        city: "Kathmandu",
        name: "Aarya Hotel and Spa",
        image: "images/f-3.jpg",
        location: "Thamel Marg 32, Kathmandu, Nepal",
        price: "NPR 12,999",
        rating: 5,
        map: "https://www.google.com/maps/place/Aarya+Hotel+and+Spa+-+Eternal+Heritage/@27.7133499,85.3082458,17z"
    },

    {
        city: "Kathmandu",
        name: "Hotel Thrive, A Tropical Courtyard",
        image: "images/f-4.jpg",
        location: "Dhobichaur, Thamel, Kathmandu, Nepal",
        price: "NPR 12,999",
        rating: 5,
        map: "https://www.google.com/maps/place/Hotel+Thrive/@27.7124463,85.3049388,17z"
    },


    // =========================
    // POKHARA
    // =========================

    {
        city: "Pokhara",
        name: "Sarangkot Mountain Lodge",
        image: "images/p-1.jpg",
        location: "Sarangkot Rd, Pokhara, Nepal",
        price: "NPR 20,500",
        rating: 5,
        map: "https://www.google.com/maps/place/Sarangkot+Mountain+Lodge/@28.2478473,83.940999,15.22z"
    },

    {
        city: "Pokhara",
        name: "Bar Peepal Resort",
        image: "images/p-2.jpg",
        location: "Mani Marg Street no. 28, Lakeside Rd, Pokhara 33700, Nepal",
        price: "NPR 16,500",
        rating: 5,
        map: "https://www.google.com/maps/place/Bar+Peepal+Resort+Pokhara/@28.2121691,83.961085,16.15z"
    },

    {
        city: "Pokhara",
        name: "Hotel Barahi Pokhara",
        image: "images/p-3.jpg",
        location: "6 Lakeside Rd, Pokhara 33700, Nepal",
        price: "NPR 20,000",
        rating: 5,
        map: "https://www.google.com/maps/place/Hotel+Barahi+Pokhara/@28.2083927,83.9562079,17z"
    },

    {
        city: "Pokhara",
        name: "Majestic Lake Front Hotel & Suites",
        image: "images/p-4.jpg",
        location: "Street 18B, Lakeside Rd, Pokhara 33700, Nepal",
        price: "NPR 9,850",
        rating: 5,
        map: "https://www.google.com/maps/place/Majestic+Lake+Front+Hotel+%26+Suites/@28.2176902,83.9556288,17z"
    },


    // =========================
    // BHAKTAPUR
    // =========================

    {
        city: "Bhaktapur",
        name: "Hotel Heritage",
        image: "images/B-1.jpg",
        location: "Suryabinayak 44800, Bhaktapur, Nepal",
        price: "NPR 10,100",
        rating: 5,
        map: "https://www.google.com/maps/place/Hotel+Heritage+Bhaktapur/@27.6674397,85.4223029,17z"
    },

    {
        city: "Bhaktapur",
        name: "Hotel Bhadgaon",
        image: "images/B-2.jpg",
        location: "Barahisthan, Bhaktapur 44800, Nepal",
        price: "NPR 5,650",
        rating: 5,
        map: "https://www.google.com/maps/place/Hotel+Bhadgaon/@27.6673248,85.4250966,17z"
    },

    {
        city: "Bhaktapur",
        name: "Shiva Guest House",
        image: "images/p-3.jpg",
        location: "Durbar square, Bhaktapur, Nepal",
        price: "NPR 4,500",
        rating: 5,
        map: "https://www.google.com/maps/place/Shiva+Guest+House/@27.6718108,85.4260281,17z"
    },

    {
        city: "Bhaktapur",
        name: "Nag Pukhu Guest House",
        image: "images/b-4.jpg",
        location: "Nag Pukhu, Bhaktapur, Nepal",
        price: "NPR 3,100",
        rating: 5,
        map: "https://www.google.com/maps/place/Nag+Pukhu+Guest+House/@27.6744227,85.4302108,17z"
    },


    // =========================
    // PATAN
    // =========================

    {
        city: "Patan",
        name: "Shakya House",
        image: "images/patan1.jpg",
        location: "M8GM+53V, Lalitpur 44700, Nepal",
        price: "NPR 4,000",
        rating: 5,
        map: "https://www.google.com/maps/place/Shakya+House/@27.6790186,85.3229635,16.65z"
    },

    {
        city: "Patan",
        name: "Stilly Inn",
        image: "images/patan2.jpg",
        location: "Maitri Marg, Lalitpur 44600, Nepal",
        price: "NPR 2,500",
        rating: 5,
        map: "https://www.google.com/maps/place/Stilly+Inn/@27.6830076,85.3120016,17z"
    },

    {
        city: "Patan",
        name: "Silu Homes by Hostmandu",
        image: "images/patan3.webp",
        location: "Durbar square, Bhaktapur, Nepal",
        price: "NPR 4,500",
        rating: 5,
        map: "https://www.google.com/maps/place/Shiva+Guest+House/@27.6718108,85.4260281,17z"
    },

    {
        city: "Patan",
        name: "Nyadha House Bed & Breakfast",
        image: "images/patan4.jpg",
        location: "Nyadhal Tole House Number 319, Lalitpur 44600, Nepal",
        price: "NPR 3,200",
        rating: 5,
        map: "https://www.google.com/maps/place/Nyadha+House+Bed+%26+Breakfast/@27.6774222,85.3201729,17z"
    },


    // =========================
    // NAGARKOT
    // =========================

    {
        city: "Nagarkot",
        name: "Hotel View Point Nagarkot",
        image: "images/n-4.jpg",
        location: "Stupa Resort Rd, Baluwapati Deupur 44812, Nepal",
        price: "NPR 16,200",
        rating: 5,
        map: "https://www.google.com/maps/place/Hotel+View+Point/@27.7238282,85.5051373,14.82z"
    },

    {
        city: "Nagarkot",
        name: "Club Himalaya by ACE Hotels, Nagarkot",
        image: "images/n-3.jpg",
        location: "Club Himalaya Nagarkot Resort, Mahamanjushree Nagarkot 44812, Nepal",
        price: "NPR 15,000",
        rating: 5,
        map: "https://www.google.com/maps/place/Club+Himalaya+by+ACE+Hotels,+Nagarkot/@27.7167335,85.5176787,17z"
    },

    {
        city: "Nagarkot",
        name: "Tamang Heritage Homestay",
        image: "images/n-1.jpg",
        location: "PF6Q+8CF, Mahamanjushree Nagarkot 44812, Nepal",
        price: "NPR 3,000",
        rating: 5,
        map: "https://www.google.com/maps/place/Tamang+Heritage+Homestay/@27.7191833,85.5046814,17z"
    },

    {
        city: "Nagarkot",
        name: "Paradise Villa",
        image: "images/n-2.jpg",
        location: "Mahamanjushree Nagarkot, Nepal",
        price: "NPR 2,650",
        rating: 5,
        map: "https://www.google.com/maps/place/Hotel+Paradise+Villa+Nagarkot/@27.7154977,85.5151601,16.41z"
    },


    // =========================
    // LUMBINI
    // =========================

    {
        city: "Lumbini",
        name: "Golden Buddha Hotel",
        image: "images/lumbini1.jpg",
        location: "SANAPA RUPANDEHI LUMBINI GATE NO 5, Lumbini, Nepal",
        price: "NPR 1,500",
        rating: 5,
        map: "https://www.google.com/maps/place/HOTEL+GOLDEN+BUDDHA/@27.4706732,83.2771454,15.64z"
    },

    {
        city: "Lumbini",
        name: "Siddhartha Guest House",
        image: "images/lumbini2.jpg",
        location: "Lankapur, Lumbini, Nepal",
        price: "NPR 1,200",
        rating: 5,
        map: "https://www.google.com/maps/place/Siddhartha+Guest+House/@27.4622597,83.2807536,17z"
    },

    {
        city: "Lumbini",
        name: "Lumbini Five Elements Hotel",
        image: "images/lumbini3.jpg",
        location: "Lumbini Sanskritik, Nepal",
        price: "NPR 7,500",
        rating: 5,
        map: "https://www.google.com/maps/place/Lumbini+Five+Elements+Hotel/@27.4724926,83.2839919,17z"
    },

    {
        city: "Lumbini",
        name: "Buddha Maya Garden by KGH Group",
        image: "images/lumbini4.jpg",
        location: "Lumbini Sanskritik 32900, Nepal",
        price: "NPR 8,650",
        rating: 5,
        map: "https://www.google.com/maps/place/Buddha+Maya+Hotel+Palace+Pvt.+Ltd./@27.485818,83.275045,13.86z"
    },


    // =========================
    // CHITWAN
    // =========================

    {
        city: "Chitwan",
        name: "Hotel Tharu Garden And Beer Bar",
        image: "images/chitwan1.jpg",
        location: "Ratnanagar, Chitwan, Nepal",
        price: "NPR 1,200",
        rating: 5,
        map: "https://www.google.com/maps/place/Tharu+Garden/@27.5750326,84.4995498,17z"
    },

    {
        city: "Chitwan",
        name: "Park Safari Resort, Chitwan National Park",
        image: "images/chitwan2.jpg",
        location: "Sauraha Road, Ratnanagar, Chitwan, Nepal",
        price: "NPR 8,000",
        rating: 5,
        map: "https://www.google.com/maps/place/Park+Safari+Resort/@27.5799003,84.4895708,16.31z"
    },

    {
        city: "Chitwan",
        name: "Jungle Villa Resort",
        image: "images/chitwan3.jpg",
        location: "Infront of Chitwan National Park, Patihani, Chitwan, Nepal",
        price: "NPR 18,000",
        rating: 5,
        map: "https://www.google.com/maps/place/Tamang+Heritage+Homestay/@27.7191833,85.5046814,17z"
    },

    {
        city: "Chitwan",
        name: "Hotel Kavya Inn",
        image: "images/Chitwan4.jpg",
        location: "Sital Chowk, Bharatpur, Chitwan, Nepal",
        price: "NPR 2,350",
        rating: 5,
        map: "https://www.google.com/maps/place/Hotel+Kavya+Inn+Chitwan/@27.6541763,84.4386317,15.37z"
    },


    // =========================
    // BANDIPUR
    // =========================

    {
        city: "Bandipur",
        name: "Depche Village Resort",
        image: "images/bandipur1.jpg",
        location: "Dumre-Bandipur Rd, Bandipur, Nepal",
        price: "NPR 5,200",
        rating: 5,
        map: "https://www.google.com/maps/place/Depche+Village+Bandipur/@27.7699345,83.8600888,8.63z"
    },

    {
        city: "Bandipur",
        name: "Bandipur Bazar Ghar",
        image: "images/bandipur2.jpg",
        location: "Bandipur Bazar, Nepal",
        price: "NPR 12,000",
        rating: 5,
        map: "https://www.google.com/maps/place/Bazar+Ghar/@27.9375531,84.404025,17z"
    },

    {
        city: "Bandipur",
        name: "Bandipur chhen",
        image: "images/bandipur3.jpg",
        location: "Chandeni - 2, Bandipur 33904, Nepal",
        price: "NPR 7,700",
        rating: 5,
        map: "https://www.google.com/maps/place/Bandipur+Chhen/@27.9373993,84.4034381,17z"
    },

    {
        city: "Bandipur",
        name: "Bandipur Mountain Resort",
        image: "images/bandipur4.jpg",
        location: "Tundikhel, Bandipur, Nepal",
        price: "NPR 10,350",
        rating: 5,
        map: "https://www.google.com/maps/place/Bandipur+Mountain+Resort/@27.9437535,84.4012803,17z"
    }

];
const cityContainers = {
    Kathmandu: document.getElementById("kathmandu"),
    Pokhara: document.getElementById("pokhara"),
    Bhaktapur: document.getElementById("bhaktapur"),
    Patan: document.getElementById("patan"),
    Nagarkot: document.getElementById("nagarkot"),
    Lumbini: document.getElementById("lumbini"),
    Chitwan: document.getElementById("chitwan"),
    Bandipur: document.getElementById("bandipur")
};
function showHotels(city = "all") {

    // Remove only previously generated hotel cards
    document.querySelectorAll(".generated-hotel").forEach(card => {
        card.remove();
    });

    hotels.forEach(hotel => {

        // If a city is selected, skip other cities
        if (city !== "all" && hotel.city !== city) {
            return;
        }

        const container = cityContainers[hotel.city];

        if (!container) {
            return;
        }

        const card = document.createElement("div");

        card.className = "list generated-hotel";

        card.innerHTML = `
            <div>
                <img src="${hotel.image}" alt="${hotel.name}">
            </div>

            <div class="text1">

                <h2>${hotel.name}</h2>

                <div class="rating">
                    ${"★".repeat(hotel.rating)}
                </div>

                <a href="${hotel.map}" target="_blank">
                    ${hotel.location}
                </a>

                <div class="price">
                    <span>Starting from:</span>
                    <strong>${hotel.price}</strong>
                </div>

                <button class="book" data-hotel="${hotel.name}">
                    Book Now
                </button>

            </div>
        `;

        container.appendChild(card);
    });

    // Hide/show city sections
    Object.keys(cityContainers).forEach(cityName => {

        if (city === "all" || city === cityName) {
            cityContainers[cityName].style.display = "block";
        } else {
            cityContainers[cityName].style.display = "none";
        }

    });
};
showHotels();
document.querySelectorAll(".side-menu a").forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const city = this.getAttribute("data-city");

        showHotels(city);

        // Go back to the hotel list
        document.querySelector(".listing").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});

var button = document.getElementById("close");
var blueBox = document.getElementById("blue-box");


// Close
button.addEventListener("click", () => {
    blueBox.style.display = "none";
});


// Book Now
document.addEventListener("click", (e) => {

    if (e.target.classList.contains("book")) {
        blueBox.style.display = "block";
    }

});