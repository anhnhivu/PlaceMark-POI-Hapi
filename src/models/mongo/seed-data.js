export const seedData = {
  users: {
    _model: "User",
    testAdmin: {
      firstName: "admin",
      lastName: "account",
      email: "admin@mail.com",
      password: "admin-secret-password",
      role: "admin",
    },
    testuser: {
      firstName: "Sam",
      lastName: "Smith",
      email: "sam@smith.com",
      password: "fireonfire",
    },
    phil: {
      firstName: "Phil",
      lastName: "Dunphy",
      email: "phil@dunphy.com",
      password: "luke-alex-haley",
    },
    mitch: {
      firstName: "Mitchell",
      lastName: "Pritchett",
      email: "mitchell@pritchett.com",
      password: "lily-rexford",
    },
    gloria: {
      firstName: "Gloria",
      lastName: "Ramirez",
      email: "gloria-pritchett@ramirez.com",
      password: "manny-fulgencio",
    },
  },
  categories: {
    _model: "Category",
    dorm: {
      name: "Dormitory",
      type: "dorm",
      color: "#4fff95",
    },
    supermarket: {
      name: "Supermarket",
      type: "supermarket",
      color: "#db661d",
    },
    postal: {
      name: "Postal Office",
      type: "postal",
      color: "#ffee03",
    },
    hospital: {
      name: "Hospital",
      type: "hospital",
      color: "#329ac7",
    },
  },
  points: {
    _model: "Point",
    gessler: {
      name: "Gesslerheim",
      street: "Dr.-Gessler-Str.",
      houseNumber: "1-7",
      zipCode: "93051",
      city: "Regensburg",
      lat: "49.00514526265753", 
      lng: "12.070902491875282",
      addedBy: "->users.admin",
      category: "->categories.dorm",
      img:"https://res.cloudinary.com/dhhiozzhl/image/upload/v1656523669/Gesslerheim_nntgtt.jpg",
      description:"The residential complex built in 1977 provides all in all 529 dwelling places that are spread over four houses. The single houses (house 3, 5 and 7) were renovated house by house in the period from 2004 to 2009. The renovation of house 1 was finished in April 2019. As forms of living, there are 505 apartments with a private bathroom and a joint kitchen as well as 24 apartments as shared-living flats for two occupants, in which two tenants each share a kitchen and a bathroom.",
    },
    stadel: {
      name: "Brückstraße - Amberger Stadel",
      street: "Brückstraße",
      houseNumber: "2",
      zipCode: "93047",
      city: "Regensburg",
      lat: "49.021148393884175", 
      lng: "12.09681015155862",
      addedBy: "->users.admin",
      category: "->categories.dorm",
      img:"https://res.cloudinary.com/dhhiozzhl/image/upload/v1656524292/stadel_vrimin.jpg",
      description:"The barn, which was built from 1485 to 1492, was originally used as a salt barn and was rebuilt as a residential and business building in 1902/03. Since 1992, the building hosts all in all 35 dwelling places for students. As forms of housing, three complete single flats inclusive kitchen and bathroom are available as well as 32 flats in form of shared living for two people, in which two occupants share one kitchen and bathroom at a time.",
    },
    franz: {
      name: "Franz-Mayer Wohnheim",
      street: "Franz-Mayer-Straße",
      houseNumber: "13",
      zipCode: "93053",
      city: "Regensburg",
      lat: "49.002263319910874", 
      lng: "12.104862717230269",
      addedBy: "->users.admin",
      category: "->categories.dorm",
      img:"https://res.cloudinary.com/dhhiozzhl/image/upload/v1656524506/franz_aunvcy.jpg",
      description:"The Studentenwerk's newest residential complex is located in close vicinity to the University of Regensburg and OTH Regensburg on the area of the former Nibelungenkaserne. The new building consists of 204 dwelling places on five floors. 138 of these rooms are single complete apartments (with own kitchen and own bathroom). 34 rooms are divided into shared apartments for two people and 32 rooms are divided into shared apartments for four people, where the tenants share the kitchens. Each room contains built-in furniture consisting of a bed and a wardrobe. The rooms also contain movable furnishings, such as desks with matching chairs. Each shared apartment has a common room with its own kitchen and each room has its own balcony.",
    },
    erbert: {
      name: "Brückstraße - Amberger Stadel",
      street: "Friedrich-Ebert-Straße",
      houseNumber: "1-3a",
      zipCode: "93051",
      city: "Regensburg",
      lat: "49.00475604467909", 
      lng: "12.071482610711028",
      addedBy: "->users.admin",
      category: "->categories.dorm",
      img:"https://res.cloudinary.com/dhhiozzhl/image/upload/v1656525550/erbert_rebyrf.jpg",
      description:"The residential complex built in 1993 provides all in all 149 dwelling places spread over two houses. As forms of living, shared-living flats for three and five occupants are available, in which the occupants each share one kitchen and a bathroom. The apartments are partly equipped with balconies.",
    },
    wahlen: {
      name: "Wahlenstraße - Goldener Turm",
      street: "Wahlenstraße ",
      houseNumber: "16",
      zipCode: "93047",
      city: "Regensburg",
      lat: "49.019358579953476", 
      lng: "12.095302682371837",
      addedBy: "->users.admin",
      category: "->categories.dorm",
      img:"https://res.cloudinary.com/dhhiozzhl/image/upload/v1656525550/wahlen_pwu6bz.jpg",
      description:"The tower, which was built around 1260 in two building phases, served as a watchtower in the Middle Ages and was therefore also fortified in the upper floors. The name Goldener Turn (Golden Tower) derives from the inn that was located inside the tower in the 17th century. Since its renovation in 1985, the building has been providing all in all 43 dwelling places for students. As forms of living, two complete single apartments are available with a private kitchen and a bathroom as well as 41 apartments in shared-living flats, where the occupants share the kitchens and bathrooms.",
    },
    ludwig: {
      name: "Ludwig-Thoma-Straße",
      street: "Ludwig-Thoma-Straße",
      houseNumber: "15-17",
      zipCode: "93051",
      city: "Regensburg",
      lat: "49.00134974358786", 
      lng: "12.08692269771126",
      addedBy: "->users.admin",
      category: "->categories.dorm",
      img:"https://res.cloudinary.com/dhhiozzhl/image/upload/v1656525550/ludwig_npxktr.jpg",
      description:"The residential complex, which was built in 1973 and expanded in 1976, provides all in all 264 dwelling spaces spread over four houses. Both houses were renovated in 2010 and 2013. As forms of living, two disabled-friendly complete single apartments with a private kitchen and a private bathroom are available as well as 236 apartments with a private bathroom and a kitchen for collective use as well as 26 apartments in partly disabled-friendly shared-living flats for two and three occupants, where the occupants each share the kitchens and bathrooms. For students with restricted ability, three lifts are available.",
    },
    oswald: {
      name: "Weißgerbergraben - Oswaldstift",
      street: "Weißgerbergraben",
      houseNumber: "3",
      zipCode: "93047",
      city: "Regensburg",
      lat: "49.02136074439034", 
      lng: "12.090542968876992",
      addedBy: "->users.admin",
      category: "->categories.dorm",
      img:"https://res.cloudinary.com/dhhiozzhl/image/upload/v1656525550/oswald_msg4py.jpg",
      description:"The house, which has been used as a residential complex since 1976, provides all in all 33 dwelling places and was completely renovated in 2012. As forms of living, 23 apartments with a private bathroom and a kitchen for collective use are available as well as ten apartments in form of shared-living flats for two occupants, where both occupants each share a kitchen and a bathroom.",
    },
    plato: {
      name: "Plato-Wild-Straße",
      street: "Plato-Wild-Straße",
      houseNumber: "2-2a",
      zipCode: "93053",
      city: "Regensburg",
      lat: "49.00975296028802", 
      lng: "12.117131941886804",
      addedBy: "->users.admin",
      category: "->categories.dorm",
      img:"https://res.cloudinary.com/dhhiozzhl/image/upload/v1656525550/plato_qrfykd.jpg",
      description:"The houses, which have been used as residential complex since 1993, provide all in all 121 dwelling places in a very quiet location directly next to the east park. As forms of living, 121 apartments with kitchens and bathrooms for collective use in shared-living communities are available. The 14 disabled-friendly apartments on the ground floor are suitable for wheelchair users and provide barrier-free sanitary facilities.",
    },
    untere: {
      name: "Untere Bachgasse",
      street: "Untere Bachgasse",
      houseNumber: "13",
      zipCode: "93047",
      city: "Regensburg",
      lat: "49.01898237301311", 
      lng: "12.095154813052124",
      addedBy: "->users.admin",
      category: "->categories.dorm",
      img:"https://res.cloudinary.com/dhhiozzhl/image/upload/v1656525616/untere_epkgdn.jpg",
      description:"The house, which has been used as a residential complex since 1979, provides all in all 25 dwelling places in the middle of the old town and was completely renovated in 2016. As forms of living, 13 complete single apartments with a private kitchen and bathroom are available as well as twelve apartments in form of shared-living flats for two occupants, where both occupants each share one kitchen and one bathroom.",
    },
    vitus: {
      name: "Vitusstraße",
      street: "Vitusstraße",
      houseNumber: "2",
      zipCode: "93051",
      city: "Regensburg",
      lat: "48.998227169785785", 
      lng: "12.084578933093102",
      addedBy: "->users.admin",
      category: "->categories.dorm",
      img:"https://res.cloudinary.com/dhhiozzhl/image/upload/v1656525550/vitus_tfcthh.jpg",
      description:"The residential complex, which was built in 1969 and which was expanded in line with a renovation in 1997, provides all in all 220 dwelling places. As forms of living, 38 complete single apartments with a private kitchen and bathroom are available as well as 122 apartments in form of shared-living flats for two occupants, where both occupants each share one kitchen and bathroom. Further 60 apartments in form of shared-living flats for ten occupants complement the housing offer, where ten tenants each share one kitchen and several bathrooms.",
    },
    vor: {
      name: "Vor der Grieb",
      street: "Vor der Grieb",
      houseNumber: "1-5",
      zipCode: "93047",
      city: "Regensburg",
      lat: "49.019655878902896", 
      lng: "12.0941558283923",
      addedBy: "->users.admin",
      category: "->categories.dorm",
      img:"https://res.cloudinary.com/dhhiozzhl/image/upload/v1656525551/vor_yq8xs1.jpg",
      description:"The historical building has been used as a residential complex since 1984 and provides all in all 74 dwelling places. As forms of living, two complete single apartments with a private kitchen and bathroom are available as well as ten apartments in form of shared-living communities, where both occupants each share one kitchen and one bathroom. Further 62 apartments in form of shared-living communities complement the housing offer, where three to six tenants each share one kitchen and several bathrooms.",
    },

    reweGessler: {
      name: "REWE",
      street: "Dr.-Gessler-Str.",
      houseNumber: "2",
      zipCode: "93051",
      city: "Regensburg",
      lat: "49.00483243679845",
      lng: "12.06905198768946",
      addedBy: "->users.admin",
      category: "->categories.supermarket",
      img: "https://res.cloudinary.com/dhhiozzhl/image/upload/v1656527697/rewe-gessler_ooxwqz.jpg",
      description: "Rewe is a supermarket chain in Germany and the main brand of Rewe Group headquartered in Cologne. The name originated from an abbreviation of the original name Revisionsverband der Westkauf-Genossenschaften. With about 3,300 stores, Rewe is the second largest food retailer in Germany behind Edeka.",
    },
    nettoArnulf: {
      name: "Netto Marken-Discount",
      street: "Arnulfsplatz",
      houseNumber: "4A",
      zipCode: "93047",
      city: "Regensburg",
      lat: "49.02032216696009",
      lng: "12.088391641731999",
      addedBy: "->users.admin",
      category: "->categories.supermarket",
      img: "https://res.cloudinary.com/dhhiozzhl/image/upload/v1656527698/netto-arnulf_j9vjts.png",
      description: "Netto Marken-Discount is a German discount supermarket chain owned by the German supermarket cooperative Edeka Group, and operates mostly in the south and west of Germany. The company reached its 1000th store in 2004, then aggressively expanded to the 4000th store in 2009, making it the largest discounter in Germany.",
    },
    nettoCity: {
      name: "Netto City",
      street: "Schwarze-Bären-Straße",
      houseNumber: "8",
      zipCode: "93047",
      city: "Regensburg",
      lat: "49.01856257987317",
      lng: "12.09931889097246",
      addedBy: "->users.admin",
      category: "->categories.supermarket",
      img: "https://res.cloudinary.com/dhhiozzhl/image/upload/v1656527698/netto-city_cvjcxm.png",
      description: "Netto Marken-Discount is a German discount supermarket chain owned by the German supermarket cooperative Edeka Group, and operates mostly in the south and west of Germany. The company reached its 1000th store in 2004, then aggressively expanded to the 4000th store in 2009, making it the largest discounter in Germany.",
    },
    aldiBalwin: {
      name: "ALDI",
      street: "Balwinusstraße",
      houseNumber: "2",
      zipCode: "93051",
      city: "Regensburg",
      lat: "49.01064802599096",
      lng: "12.084062438029962",
      addedBy: "->users.admin",
      category: "->categories.supermarket",
      img: "https://res.cloudinary.com/dhhiozzhl/image/upload/v1656527698/Screen_Shot_2022-06-29_at_20.17.59_bmqgra.png",
      description: "Simplicity is an integral part of ALDI SÜD. Thanks to the simple structure of our branches and the simple arrangement of our products, everyone can quickly find what they need. Our product selection also makes it easy for our customers: it includes all goods for daily needs and at an optimal price-performance ratio. This makes shopping uncomplicated and relaxed. The product information also contributes to this: nutritional information, labels, seals and codes of origin show at a glance what is contained in the product or where it comes from.",
    },
    aldiRennweg: {
      name: "ALDI SÜD",
      street: "Rennweg",
      houseNumber: "18",
      zipCode: "93049",
      city: "Regensburg",
      lat: "49.01420548972401",
      lng: "12.048976421220878",
      addedBy: "->users.admin",
      category: "->categories.supermarket",
      img: "https://res.cloudinary.com/dhhiozzhl/image/upload/v1656527698/Screen_Shot_2022-06-29_at_20.17.59_bmqgra.png",
      description: "Simplicity is an integral part of ALDI SÜD. Thanks to the simple structure of our branches and the simple arrangement of our products, everyone can quickly find what they need. Our product selection also makes it easy for our customers: it includes all goods for daily needs and at an optimal price-performance ratio. This makes shopping uncomplicated and relaxed. The product information also contributes to this: nutritional information, labels, seals and codes of origin show at a glance what is contained in the product or where it comes from.",
    },

    deutschePost582: {
      name: "Deutsche Post Filiale 582",
      street: "Konrad-Adenauer-Allee",
      houseNumber: "34",
      zipCode: "93051",
      city: "Regensburg",
      lat: "48.99743738855907",
      lng: "12.069185015380741",
      addedBy: "->users.admin",
      category: "->categories.postal",
      img: "https://res.cloudinary.com/dhhiozzhl/image/upload/v1656527717/deutschepost_rouoq9.jpg",
      description: "Deutsche Post delivers mail and parcel in Germany and the world. It is an expert provider of dialogue marketing and press distribution services as well as corporate communications solutions. Deutsche Post is a corporate brand of the mail and logistics Group Deutsche Post DHL.",
    },
    deutschePost593: {
      name: "Deutsche Post Filiale 593",
      street: "St.-Wolfgang-Straße",
      houseNumber: "11",
      zipCode: "93051",
      city: "Regensburg",
      lat: "49.00642770558359",
      lng: "12.122617359812528",
      addedBy: "->users.admin",
      category: "->categories.postal",
      img: "https://res.cloudinary.com/dhhiozzhl/image/upload/v1656527717/deutschepost_rouoq9.jpg",
      description: "Deutsche Post delivers mail and parcel in Germany and the world. It is an expert provider of dialogue marketing and press distribution services as well as corporate communications solutions. Deutsche Post is a corporate brand of the mail and logistics Group Deutsche Post DHL.",
    },
    deutschePost591: {
      name: "Deutsche Post Filiale 591",
      street: "Silberne-Kranz-Gasse, Fischmarkt",
      houseNumber: "1",
      zipCode: "93047",
      city: "Regensburg",
      lat: "49.0260172008515",
      lng: "12.095494862363578",
      addedBy: "->users.admin",
      category: "->categories.postal",
      img: "https://res.cloudinary.com/dhhiozzhl/image/upload/v1656527717/deutschepost_rouoq9.jpg",
      description: "Deutsche Post delivers mail and parcel in Germany and the world. It is an expert provider of dialogue marketing and press distribution services as well as corporate communications solutions. Deutsche Post is a corporate brand of the mail and logistics Group Deutsche Post DHL.",
    },
    deutschePost416: {
      name: "Deutsche Post Filiale 416",
      street: "Landshuter Str.",
      houseNumber: "110",
      zipCode: "93053",
      city: "Regensburg",
      lat: "49.0062024941556",
      lng: "12.123647328070081",
      addedBy: "->users.admin",
      category: "->categories.postal",
      img: "https://res.cloudinary.com/dhhiozzhl/image/upload/v1656527717/deutschepost_rouoq9.jpg",
      description: "Deutsche Post delivers mail and parcel in Germany and the world. It is an expert provider of dialogue marketing and press distribution services as well as corporate communications solutions. Deutsche Post is a corporate brand of the mail and logistics Group Deutsche Post DHL.",
    },
    deutschePost585: {
      name: "Deutsche Post Filiale 585",
      street: "Prüfeninger Str.",
      houseNumber: "62",
      zipCode: "93049",
      city: "Regensburg",
      lat: "49.01960080142136",
      lng: "12.069917317221163",
      addedBy: "->users.admin",
      category: "->categories.postal",
      img: "https://res.cloudinary.com/dhhiozzhl/image/upload/v1656527717/deutschepost_rouoq9.jpg",
      description: "Deutsche Post delivers mail and parcel in Germany and the world. It is an expert provider of dialogue marketing and press distribution services as well as corporate communications solutions. Deutsche Post is a corporate brand of the mail and logistics Group Deutsche Post DHL.",
    },

    unihospital: {
      name: "University Hospital Regensburg",
      street: "Franz-Josef-Strauß-Allee",
      houseNumber: "11",
      zipCode: "93053",
      city: "Regensburg",
      lat: "48.991438326273204",
      lng: "12.087770076569846",
      addedBy: "->users.admin",
      category: "->categories.hospital",
      img: "https://res.cloudinary.com/dhhiozzhl/image/upload/v1656527698/uni-hospital_temiyz.png",
      description: "The University Hospital Regensburg covers all the essential specialties in medicine and dentistry and branches into 28 clinics, polyclinics, institutes and departments with over 4,900 employees. Approximately 700 of these are doctors, more than 1,700 nurses. Furthermore approximately 1,200 employees are accounted for in the medical-technical services and 500 in administration and building services in addition to this. This makes the hospital in this city the third largest employer following BMW and Continental.",
    },
    caritas: {
      name: "Caritas-Krankenhaus St. Josef",
      street: "Landshuter Str.",
      houseNumber: "65",
      zipCode: "93053",
      city: "Regensburg",
      lat: "49.00933779524565",
      lng: "12.11817521105782",
      addedBy: "->users.admin",
      category: "->categories.hospital",
      img: "https://res.cloudinary.com/dhhiozzhl/image/upload/v1656527697/caritas_qsefll.jpg",
      description: "In terms of medical care, the Regensburg Caritas Hospital St. Josef has played an important role in the region since 1950. Eight specialist departments with over 330 beds, more than 700 employees and last but not least the cooperation with the University of Regensburg as an academic teaching hospital are evidence of the high level of expertise.",
    },
    
    kauflandinnen: {
      name: "Kaufland Regensburg-Innenstadt",
      street: "Friedenstraße",
      houseNumber: "23",
      zipCode: "93053",
      city: "Regensburg",
      lat: "49.017053879974014",
      lng: "12.099958153271261",
      addedBy: "->users.admin",
      category: "->categories.supermarket",
      img: "https://res.cloudinary.com/dhhiozzhl/image/upload/v1656527697/kaufland_ym2lu7.jpg",
      description: "Kaufland is a German hypermarket chain, part of the Schwarz Gruppe which also owns Lidl. The hypermarket directly translates to English as 'buy-land'. It opened its first store in 1984 in Neckarsulm and quickly expanded to become a major chain in what was formerly East Germany. ",
    }
  }
};