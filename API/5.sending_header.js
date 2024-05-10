let url = `https://icanhazdadjoke.com/`;

let h2 = document.querySelector("h2");
let button = document.querySelector("button");
async function alvi() {
  try {
    const info = {
      headers: {
        Accept: "text/plain"
      }
    };
    let res = await axios.get(url, info);
    console.log(res.data);
  } catch (err) {
    console.log("Sorry");
  }
}
button.addEventListener("click", alvi);
