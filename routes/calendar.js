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
            date: "02/29/21",
          },
          {
            clubEvent: "Bonfire",
            clubName: "VSA",
            location: "Blacks Beach",
            date: "02/29/21",
          },
        ],
      },

      {
        weekNum: "Week Two",
        events: [
          {
            clubEvent: "Bonfire",
            clubName: "VSA",
            location: "Blacks Beach",
            date: "02/29/21",
          },
          {
            clubEvent: "Bonfire",
            clubName: "VSA",
            location: "Blacks Beach",
            date: "02/29/21",
          },
        ],
      },
    ],
  });
};
