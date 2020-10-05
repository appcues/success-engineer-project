import React from "react";

function pearsonEvent() {
  window.Appcues.track("Grades, one student AND one published assignment");
}

function ampEvent() {
  window.amplitude.getInstance().logEvent('Amp_Event');
}


const Home = () => {
  return (
    <div >
      <h1 data-info="bob">Welcome to Awesome Company, Inc.</h1>
      <button onclick={pearsonEvent() }>This is a button </button>
      <button onclick={ampEvent()}> take me there</button>
    </div>
  );
};

export default Home;
