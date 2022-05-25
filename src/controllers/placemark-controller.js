export const placemarkController = {
    index: {
      handler: async function (request, h) {
        const loggedInUser = request.auth.credentials;
        return h.view("Discover", { title: "Discover", user: loggedInUser });
      },
    },
    report: {
      handler: async function (request, h) {
        const loggedInUser = request.auth.credentials;
        return h.view("Report", {
          title: "All destinations",
          user: loggedInUser,
        });
      },
    },
    addnew: {
      handler: async function (request, h) {
        try {
          const loggedInUser = request.auth.credentials;
          return h.redirect("/discover");
        } catch (err) {
          return h.view("main", { errors: [{ message: err.message }] });
        }
      },
    },
  };