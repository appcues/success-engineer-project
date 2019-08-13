import React from "react";

function pearsonEvent() {
  window.Appcues.track("Grades, one student AND one published assignment");
}

function getName() {
  prompt("What is your name?", "Your Name");
}

const Home = () => {
  return (
    <div>
      <h1>Welcome to Awesome Company, Inc.</h1>
      <button onClick={pearsonEvent()}>This is a button </button>
    </div>
  );
};

export default Home;
