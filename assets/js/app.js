let refresh = document.querySelector('.btn__refresh');
let userData = null;

const request = async (url) => {
    try {
        let res = await fetch(url);
        let data = await res.json();
        userData = data.results[0];
        displayInfo(userData);
    } catch (error) {
        console.error(error);
    }
};

refresh.addEventListener('click', function () {
    request("https://randomuser.me/api/?nat=au,ca,ch,de,es,fi,us");
});




let buttons = document.querySelectorAll('.btn');

buttons.forEach((value, index) => {
    value.addEventListener("click", () => {
        let text = document.querySelector(".info__text");
        let title = document.querySelector(".info__title");

        if (userData === null) {
            alert("Data not available");
        } else
        if (index === 0) {
            showName(userData, text, title);
        } else if (index === 1) {
            showEmail(userData, text, title);
        } else if (index === 2) {
            showBirthday(userData, text, title);
        } else if (index === 3) {
            showAddress(userData, text, title);
        } else if (index === 4) {
            showNumber(userData, text, title);
        } else if (index === 5) {
            showPassword(userData, text, title);
        }
    });
});


function displayInfo(data) {
    let text = document.querySelector(".info__text");
    let title = document.querySelector(".info__title");
    let userImage = document.querySelector("#user-image");

    text.innerHTML = "Hi, My name is";
    title.innerHTML = `${data.name.first} ${data.name.second}`;

    userImage.src = data.picture.large;
}


function showName(data, text, title) {
    text.innerHTML = "Hi, My name is";
    title.innerHTML = `${data.name.first} ${data.name.second}`;
}


function showEmail(data, text, title) {
    text.innerHTML = "My email address is";
    title.innerHTML = `${data.email}`;
}


function showBirthday(data, text, title) {
    const day = data.dob.date.slice(8, 10);
    const month = data.dob.date.slice(5, 7);
    const year = data.dob.date.slice(0, 4);

    text.innerHTML = "My birthday is";
    title.innerHTML = `${day}/${month}/${year}`;
}


function showAddress(data, text, title) {
    text.innerHTML = "My address is";
    title.innerHTML = `${data.location.country}, ${data.location.city}`;
}


function showNumber(data, text, title) {
    text.innerHTML = "My phone number is";
    title.innerHTML = `${data.phone}`;
}


function showPassword(data, text, title) {
    text.innerHTML = "My password is";
    title.innerHTML = `${data.login.password}`;
}