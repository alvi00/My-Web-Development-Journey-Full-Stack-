//useState is used to change something in the interface 
//useEffect is used to call a function at the begging for once

import { useEffect, useState } from "react";

export default function App() {
  // State to store the fetched advice
  const [setadvice, advice] = useState("");

  // State to keep track of the count of advice fetched
  const [setcount, getcount] = useState(-1);

  // useEffect is used to fetch the first piece of advice when the component loads
  useEffect(function () {
    getadvice(); // Call the function to fetch advice when the component is mounted
  }, []); // Empty dependency array ensures this runs only once, after the component is first rendered

  // Function to fetch advice from the API
  async function getadvice() {
    const res = await fetch("https://api.adviceslip.com/advice"); // Fetch data from the advice API
    const data = await res.json(); // Convert the response to JSON
    advice(data.slip.advice); // Update the advice state with the fetched advice
    getcount((a) => a + 1); // Increment the count of advice fetched
  }

  return (
    <div>
      {/* Display the fetched advice */}
      <h1>{setadvice}</h1>

      {/* Button to fetch new advice on click */}
      <button onClick={getadvice}>Get Advice</button>

      {/* Render the Massage component and pass the count as a prop */}
      <Massage setcount={setcount} />
    </div>
  );

  // Component to display the count of messages (advice) read
  function Massage(props) {
    return <p>You have read {props.setcount} massages</p>;
  }
}
