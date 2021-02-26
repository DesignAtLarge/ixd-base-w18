/*
 * GET filter1.
 */



exports.view = function(request, response){
    response.render('filter', {
        'activities': [
            {
              "Category": "exercise",
              "Activity": "Yoga",
              "minTime": 30,
              "Tags": "indoor",
              "Image": "https://unsplash.com/photos/dkg-zps94uw",
              "Link": "https://www.youtube.com/watch?v=FRAEaBtP2r4&feature=emb_title",
              "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
              "Category": "exercise",
              "Activity": "Yoga",
              "minTime": 30,
              "Tags": "indoor",
              "Image": "https://unsplash.com/photos/dkg-zps94uw",
              "Link": "https://www.youtube.com/watch?v=v7AYKMP6rOE&feature=emb_title",
              "Description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              "Category": "exercise",
              "Activity": "Yoga",
              "minTime": 40,
              "Tags": "indoor",
              "Image": "https://unsplash.com/photos/dkg-zps94uw",
              "Link": "https://www.youtube.com/watch?v=oBu-pQG6sTY&feature=emb_title",
              "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
              "Category": "exercise",
              "Activity": "Yoga",
              "minTime": 60,
              "Tags": "indoor",
              "Image": "https://unsplash.com/photos/dkg-zps94uw",
              "Link": "https://www.youtube.com/watch?v=w0cLgFg4Zsw&feature=emb_title",
              "Description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              "Category": "exercise",
              "Activity": "Yoga",
              "minTime": 10,
              "Tags": "indoor",
              "Image": "https://unsplash.com/photos/dkg-zps94uw",
              "Link": "https://www.youtube.com/watch?v=4pKly2JojMw&feature=emb_title",
              "Description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
              "Category": "exercise",
              "Activity": "Yoga",
              "minTime": 15,
              "Tags": "indoor",
              "Image": "https://unsplash.com/photos/dkg-zps94uw",
              "Link": "https://www.youtube.com/watch?v=4vTJHUDB5ak&feature=emb_title",
              "Description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              "Category": "exercise",
              "Activity": "Biking",
              "minTime": 20,
              "Tags": "outdoor",
              "Image": "https://unsplash.com/photos/IE9PKXWpRGU",
              "Link": "",
              "Description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
              "Category": "exercise",
              "Activity": "Jump rope",
              "minTime": 5,
              "Tags": "both",
              "Image": "https://unsplash.com/photos/7QYd1VxLRbM",
              "Link": "",
              "Description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              "Category": "exercise",
              "Activity": "hula hoop",
              "minTime": 5,
              "Tags": "both",
              "Image": "https://unsplash.com/photos/HC1I-tgIDq0",
              "Link": "",
              "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
              "Category": "exercise",
              "Activity": "going for a walk",
              "minTime": 10,
              "Tags": "outdoor",
              "Image": "https://unsplash.com/photos/nVDB1IGq64s",
              "Link": "",
              "Description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
              "Category": "exercise",
              "Activity": "going for a run",
              "minTime": 10,
              "Tags": "outdoor",
              "Image": "https://unsplash.com/photos/7DCZgKyp8vw",
              "Link": "",
              "Description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              "Category": "music",
              "Activity": "make a spotify playlist",
              "minTime": 10,
              "Tags": "indoor",
              "Image": "https://unsplash.com/photos/3NgcTH0CFJg",
              "Link": "",
              "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
              "Category": "music",
              "Activity": "learn a new piece of music with the intrument you play",
              "minTime": 20,
              "Tags": "indoor",
              "Image": "https://unsplash.com/photos/bu-6kNWQj6U",
              "Link": "",
              "Description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
              "Category": "music",
              "Activity": "listen to an album from an artist you've never heard of",
              "minTime": 20,
              "Tags": "indoor",
              "Image": "https://unsplash.com/photos/tgmyo9lWll4",
              "Link": "",
              "Description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              "Category": "music",
              "Activity": "write a song",
              "minTime": 10,
              "Tags": "indoor",
              "Image": "https://unsplash.com/photos/ddwbTn5HDdQ",
              "Link": "",
              "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
              "Category": "music",
              "Activity": "look up your current mood on spotify and listen to that playlist",
              "minTime": 10,
              "Tags": "indoor",
              "Image": "https://unsplash.com/photos/RNYB6v3XoE8",
              "Link": "",
              "Description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
              "Category": "creative",
              "Activity": "paint",
              "minTime": 10,
              "Tags": "indoor",
              "Image": "https://unsplash.com/photos/QrYt4_K5TIc",
              "Link": "",
              "Description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              "Category": "creative",
              "Activity": "draw",
              "minTime": 10,
              "Tags": "indoor",
              "Image": "https://unsplash.com/photos/eKkeKfDt1Vk",
              "Link": "",
              "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
              "Category": "creative",
              "Activity": "color",
              "minTime": 10,
              "Tags": "indoor",
              "Image": "https://unsplash.com/photos/ZsvuETrThX8",
              "Link": "",
              "Description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
              "Category": "creative",
              "Activity": "craft something for a friend",
              "minTime": 15,
              "Tags": "indoor",
              "Image": "https://unsplash.com/photos/lJU5KvoHQHk",
              "Link": "",
              "Description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              "Category": "creative",
              "Activity": "decorate something for your room",
              "minTime": 15,
              "Tags": "indoor",
              "Image": "https://unsplash.com/photos/4W5WWKaxsKs",
              "Link": "",
              "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
              "Category": "creative",
              "Activity": "sidewalk chalk in your neighborhood or nearby park",
              "minTime": 10,
              "Tags": "outdoor",
              "Image": "https://unsplash.com/photos/StgZKNLVeJg",
              "Link": "",
              "Description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
              "Category": "creative",
              "Activity": "take a photograph of yourself and edit it",
              "minTime": 10,
              "Tags": "both",
              "Image": "https://unsplash.com/photos/ZcOaFnQ8ACk",
              "Link": "",
              "Description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              "Category": "creative",
              "Activity": "make a graphic",
              "minTime": 10,
              "Tags": "indoor",
              "Image": "https://unsplash.com/photos/ubIWo074QlU",
              "Link": "",
              "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
              "Category": "creative",
              "Activity": "take a photograph of something in your house from a different point of view",
              "minTime": 10,
              "Tags": "indoor",
              "Image": "https://unsplash.com/photos/9ryNj0e_XNY",
              "Link": "",
              "Description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
              "Category": "creative",
              "Activity": "do a puzzle",
              "minTime": 20,
              "Tags": "indoor",
              "Image": "https://unsplash.com/photos/LuaT29bdjMA",
              "Link": "",
              "Description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              "Category": "creative",
              "Activity": "start a journal, or continue journalling",
              "minTime": 10,
              "Tags": "indoor",
              "Image": "https://unsplash.com/photos/CKlHKtCJZKk",
              "Link": "",
              "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
              "Category": "creative",
              "Activity": "write a poem",
              "minTime": 10,
              "Tags": "indoor",
              "Image": "https://unsplash.com/photos/NUQtVifTqs4",
              "Link": "",
              "Description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
              "Category": "creative",
              "Activity": "write a song",
              "minTime": 10,
              "Tags": "indoor",
              "Image": "https://unsplash.com/photos/ddwbTn5HDdQ",
              "Link": "",
              "Description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              "Category": "creative",
              "Activity": "write a letter to a penpal",
              "minTime": 10,
              "Tags": "indoor",
              "Image": "https://unsplash.com/photos/U_DJOoSDhNo",
              "Link": "",
              "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
              "Category": "creative",
              "Activity": "upcycle a piece of clothing",
              "minTime": 30,
              "Tags": "indoor",
              "Image": "https://unsplash.com/photos/WgRj6Hc7yZw",
              "Link": "",
              "Description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
              "Category": "creative",
              "Activity": "design a tattoo",
              "minTime": 10,
              "Tags": "indoor",
              "Image": "https://unsplash.com/photos/77yU7LB7gBk",
              "Link": "",
              "Description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              "Category": "nature",
              "Activity": "plant a seed",
              "minTime": 10,
              "Tags": "outdoor",
              "Image": "https://unsplash.com/photos/4PG6wLlVag4",
              "Link": "",
              "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
              "Category": "nature",
              "Activity": "go on a walk",
              "minTime": 10,
              "Tags": "outdoor",
              "Image": "https://unsplash.com/photos/nVDB1IGq64s",
              "Link": "",
              "Description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
              "Category": "nature",
              "Activity": "go on a hike",
              "minTime": 10,
              "Tags": "outdoor",
              "Image": "https://unsplash.com/photos/Yizrl9N_eDA",
              "Link": "",
              "Description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              "Category": "nature",
              "Activity": "tend to your garden",
              "minTime": 20,
              "Tags": "outdoor",
              "Image": "https://unsplash.com/photos/sFydXGrt5OA",
              "Link": "",
              "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
              "Category": "nature",
              "Activity": "read about a plant in your garden",
              "minTime": 10,
              "Tags": "outdoor",
              "Image": "https://unsplash.com/photos/D9hyvnamCn0",
              "Link": "",
              "Description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
              "Category": "learning",
              "Activity": "read a book that you've been meaning to read",
              "minTime": 40,
              "Tags": "indoor",
              "Image": "https://unsplash.com/photos/4RNLzJzEMMs",
              "Link": "",
              "Description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              "Category": "learning",
              "Activity": "read an article about ____",
              "minTime": 30,
              "Tags": "indoor",
              "Image": "https://unsplash.com/photos/dwbzzB03gUE",
              "Link": "",
              "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
              "Category": "learning",
              "Activity": "listen to an audiobook",
              "minTime": 30,
              "Tags": "indoor",
              "Image": "https://unsplash.com/photos/v0HbU2CNJFs",
              "Link": "",
              "Description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
              "Category": "learning",
              "Activity": "listen to a podcast",
              "minTime": 30,
              "Tags": "indoor",
              "Image": "https://unsplash.com/photos/UUPpu2sYV6E",
              "Link": "",
              "Description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              "Category": "learning",
              "Activity": "whats your favorite animal? read an article about them.",
              "minTime": 10,
              "Tags": "indoor",
              "Image": "https://unsplash.com/photos/BuQ1RZckYW4",
              "Link": "",
              "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
              "Category": "learning",
              "Activity": "read the first news article that pops up when you click the \"News\" tab on Google",
              "minTime": 15,
              "Tags": "indoor",
              "Image": "https://unsplash.com/photos/aId-xYRTlEc",
              "Link": "",
              "Description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
              "Category": "relaxation",
              "Activity": "yoga",
              "minTime": 30,
              "Tags": "both",
              "Image": "https://unsplash.com/photos/dkg-zps94uw",
              "Link": "https://www.youtube.com/watch?v=hJbRpHZr_d0&feature=emb_title",
              "Description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              "Category": "relaxation",
              "Activity": "meditate",
              "minTime": 20,
              "Tags": "both",
              "Image": "https://unsplash.com/photos/NTyBbu66_SI",
              "Link": "https://www.youtube.com/watch?v=rM_km4E3NYs",
              "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
              "Category": "relaxation",
              "Activity": "meditate",
              "minTime": 10,
              "Tags": "both",
              "Image": "https://unsplash.com/photos/NTyBbu66_SI",
              "Link": "https://www.youtube.com/watch?v=6p_yaNFSYao",
              "Description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
              "Category": "relaxation",
              "Activity": "meditate",
              "minTime": 5,
              "Tags": "both",
              "Image": "https://unsplash.com/photos/NTyBbu66_SI",
              "Link": "https://www.youtube.com/watch?v=i50ZAs7v9es",
              "Description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              "Category": "relaxation",
              "Activity": "meditate",
              "minTime": 15,
              "Tags": "both",
              "Image": "https://unsplash.com/photos/NTyBbu66_SI",
              "Link": "https://www.youtube.com/watch?v=p29mwfzpNc4",
              "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
              "Category": "relaxation",
              "Activity": "do a face mask",
              "minTime": 10,
              "Tags": "indoor",
              "Image": "https://unsplash.com/photos/AyqNM8D2aEI",
              "Link": "",
              "Description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
              "Category": "relaxation",
              "Activity": "stretch",
              "minTime": 30,
              "Tags": "both",
              "Image": "https://unsplash.com/photos/We6cFKHo8sQ",
              "Link": "https://www.youtube.com/watch?v=qULTwquOuT4",
              "Description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              "Category": "relaxation",
              "Activity": "stretch",
              "minTime": 5,
              "Tags": "both",
              "Image": "https://unsplash.com/photos/We6cFKHo8sQ",
              "Link": "https://www.youtube.com/watch?v=pH6KMX0V7d0",
              "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
              "Category": "kitchen fun",
              "Activity": "bake bread",
              "minTime": 60,
              "Tags": "indoor",
              "Image": "https://unsplash.com/photos/ir3VHDcw-fY",
              "Link": "",
              "Description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
              "Category": "kitchen fun",
              "Activity": "bake a cake",
              "minTime": 60,
              "Tags": "indoor",
              "Image": "https://unsplash.com/photos/3K6qK5ZA_7w",
              "Link": "",
              "Description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              "Category": "kitchen fun",
              "Activity": "bake cupcakes",
              "minTime": 30,
              "Tags": "indoor",
              "Image": "https://unsplash.com/photos/IVcI_J7ETLg",
              "Link": "",
              "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
              "Category": "kitchen fun",
              "Activity": "make pasta from scratch",
              "minTime": 60,
              "Tags": "indoor",
              "Image": "https://unsplash.com/photos/JG5tkvNqbZk",
              "Link": "",
              "Description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
              "Category": "kitchen fun",
              "Activity": "make your favorite dish from your childhood",
              "minTime": 30,
              "Tags": "indoor",
              "Image": "https://unsplash.com/photos/geG4C3qyiG0",
              "Link": "",
              "Description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              "Category": "kitchen fun",
              "Activity": "bake cookies",
              "minTime": 30,
              "Tags": "indoor",
              "Image": "https://unsplash.com/photos/tDoHiqXl9b8",
              "Link": "",
              "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
              "Category": "kitchen fun",
              "Activity": "recreate your favorite resturaunt meal",
              "minTime": 60,
              "Tags": "indoor",
              "Image": "https://unsplash.com/photos/nj22gb3XKCM",
              "Link": "",
              "Description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
              "Category": "productivity",
              "Activity": "clean/organize your bathroom",
              "minTime": 15,
              "Tags": "indoor",
              "Image": "https://unsplash.com/photos/d0WU6KSp918",
              "Link": "",
              "Description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              "Category": "productivity",
              "Activity": "organize your closet",
              "minTime": 20,
              "Tags": "indoor",
              "Image": "https://unsplash.com/photos/XjR-Y8PKeww",
              "Link": "",
              "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
              "Category": "productivity",
              "Activity": "rotate your mattress",
              "minTime": 5,
              "Tags": "indoor",
              "Image": "https://unsplash.com/photos/h_xf5vHZmRM",
              "Link": "",
              "Description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
              "Category": "productivity",
              "Activity": "update your resume",
              "minTime": 15,
              "Tags": "indoor",
              "Image": "https://unsplash.com/photos/7iSEHWsxPLw",
              "Link": "",
              "Description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              "Category": "productivity",
              "Activity": "make some personal finance goals, or check in with your past financial goals",
              "minTime": 20,
              "Tags": "indoor",
              "Image": "https://unsplash.com/photos/IrRbSND5EUc",
              "Link": "",
              "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
          ]
      });
    };
  
  