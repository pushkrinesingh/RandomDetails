let btn = document.querySelector(".btn");
let image = document.querySelector("img");
let names = document.querySelector("h1");
let email = document.querySelector("h2");

//Using async and await
// btn.addEventListener("click", fetchdata);

// async function fetchdata() {
//   try {
//     let details = await fetch("https://randomuser.me/api/");
//     const data = await details.json();
//     const { title, first, last } = data.results[0].name;

//     names.textContent = title + " " + first + " " + last;

//     email.textContent = data.results[0].email;

//     image.src = data.results[0].picture.large;
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }

//using then and catch

btn.addEventListener("click", () => {
  fetch("https://randomuser.me/api/")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const { title, first, last } = data.results[0].name;

      names.textContent = "Name: " + title + " " + first + " " + last;

      email.textContent = "Email: " + data.results[0].email;

      image.src = data.results[0].picture.large;
    })
    .catch((error) => {
      console.log("Error:", error);
    });
});
