$(document).ready(() => {
    var tags = [] // initialize empty tags

    console.log("tags selected: ", tags);

    $(".tags").click((event) => {
        event.preventDefault();

        console.log(event.target.textContent);

        // add remove to tags here
    })
});