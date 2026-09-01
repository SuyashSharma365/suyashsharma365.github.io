const user = {
    name: "Suyash",
    age: 25,
    gender : "Male",
};

console.log(Object.getPrototypeOf(user));



async function getUserData(){
    const response = await fetch("https://api.github.com/users?per_page=30");
    const data = await response.json();
    console.log(data);
    const length = data.length;
    const elment = document.createElement("div");
    for(let i = 0 ; i < length ; i++ ){
        const img = document.createElement("img");
        const name = document.createElement("h2");
        img.src = data[i].avatar_url;
        name.textContent = data[i].login;
        elment.appendChild(img);
        elment.appendChild(name);
    }

    document.body.appendChild(elment);
}


getUserData();





