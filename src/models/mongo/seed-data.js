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
      lat: "49.00514526265753", 
      lng: "12.070902491875282",
      city: "Regensburg",
      addedBy: "->users.phil",
      category: "->categories.dorm",
    },
    nettoGessler: {
      name: "REWE",
      street: "Dr.-Gessler-Str.",
      houseNumber: "2",
      zipCode: "93051",
      city: "Regensburg",
      lat: "49.00483243679845",
      lng: "12.06905198768946",
      addedBy: "->users.gloria",
      category: "->categories.supermarket",
    },
    deutschePost582: {
      name: "Deutsche Post Filiale 582",
      street: "Konrad-Adenauer-Allee",
      houseNumber: "34",
      zipCode: "93051",
      city: "Regensburg",
      lat: "48.99743738855907",
      lng: "12.069185015380741",
      addedBy: "->users.mitch",
      category: "->categories.postal",
    }
  }
};