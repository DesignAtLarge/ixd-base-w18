function authFB(res){
    console.log("authenticating with Facebook");

    console.log(res);

    $.get("/api/user/" + res.id, (response) => {
        console.log(response);
        if(response.user.length === 0){
            console.log("no user found, attempting to create user...");
            $.post("/api/user", { name: res.name, idToken: res.id, history: []}, (res) => {
                console.log(res);
                setTimeout(() => {
                    $(location).attr('href', '/about');
                }, 10);
            })
        } else {
            console.log("user found: " + response.user[0])
            setTimeout(() => {
                $(location).attr('href', '/about');
            }, 10);
        }
    });

    // $.get("/api/user/0", (res) => {
    //     console.log(res);
    // });
}

function authGPlus(res){
    console.log("authenticating with Google Plus");

    console.log(res);
    setTimeout(() => {
        $(location).attr('href', '/about');
    }, 10);
}

