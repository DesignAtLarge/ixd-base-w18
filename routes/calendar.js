/*
 * GET home page.
 */

exports.view = function (req, res) {
  res.render("calendar", {
    savedEvent: [
      {
        weekNum: "Week One",
        events: [
          {
            clubEvent: "Bonfire",
            clubName: "VSA",
            location: "Blacks Beach",
            date: "02/27/21",
          },
          {
            clubEvent: "GBM #1",
            clubName: "Astronomy Club at UCSD",
            location: "Price Theater",
            date: "02/27/21",
          },
        ],
      },

      {
        weekNum: "Week Two",
        events: [
          {
            clubEvent: "Bonfire",
            clubName: "Digital Arts and Media",
            location: "Digital Media Library",
            date: "03/2/21",
          },
          {
            clubEvent: "GBM $1",
            clubName: "Food Cooperative at UCSD",
            location: "Food Co-op room",
            date: "03/6/21",
          },
        ],
      },
    ],
  });
};
