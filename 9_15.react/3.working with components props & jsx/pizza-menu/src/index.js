import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza -Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Our restaurant name is Nigga Cheez</h1>;
}

function Menu() {
  return (
    <div>
      {pizzaData.map((i) => {
        return <Pizza pizzaObj={i} key={i.name} />;
      })}

      {/* <Pizza
        name="Creamy chicken and sausage"
        intridients="Cheese, water"
        price={10}
        src="pizzas/focaccia.jpg"
      /> */}
    </div>
  );
}

function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut === true) {
  //   return null;
  // } else {
  return (
    //so here as you know that react can only return one element at a time
    //so what we do is put everything is a div
    //but what we can do is use react fragment which is <> </> by this we can return multiple elements at a time
    <>
      <h1 className={`alvi ${pizzaObj.soldOut ? "anas" : ""}`}>
        {pizzaObj.name}
      </h1>
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <p>Price :{pizzaObj.price}</p>
    </>
  );
  // }
}
function Footer() {
  const hour = new Date().getHours();
  const openhour = 13;
  const closedhour = 17;
  const isopen = hour >= openhour && openhour <= closedhour;
  const alvi = check(isopen);
  console.log(isopen);
  return <footer className="alvi">{alvi}</footer>;
}

function check(isopen) {
  let alvi = "";
  if (isopen === true) {
    alvi = "We are open";
  } else {
    alvi = "we are closed";
  }
  return alvi;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
