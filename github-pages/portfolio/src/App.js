import './App.css';

function App() {
  return (
    <>
     <div class="navbar">
    <div class="about"><a href="#About">About Me</a>
    </div>
    <div><a href="#Experience">Experience</a></div>
    <div class="contacts"><a href="#Contacts">Contacts</a></div>
  </div>

  <div id="section1">
  <div class="child">
    <p class="heading">Aleeza Ahmed</p>
    <p class="bio"><span class="bold">A Hardworking Developer,</span><span class="italics">with big goals</span></p>
  </div>
  <div class="child-2"><p>image of me</p></div>
</div>

  <div id="About">
    <div class="child-3">
    <p class="heading">About Me</p>
    <p class="bio"><span class="bold">Innovative. Passionate. Creative.</span></p>
  </div>
  </div>

  <div id="Experience">
    <div class="child-4">
      <p class="heading">Experience</p>
      <div class="top">
      <div class="one">
      <img src="./resources/images/project 1.png" height="150px" width="150px"></img>
      <a href="https://4lza.github.io/circumferenceCalculator/" target="_blank"><p class="pone">Circumference Calculator</p></a>
    </div>
    <div class="two">
    <img src="./resources/images/project 1.png" height="150px" width="150px"></img>
      <a href="4lza.github.io/mainCounter/" target="_blank"><p class="pone">Counter</p></a>
    </div>
      </div>
      <div class="bottom">
      <div class="three">
      <img src="" height="150px" width="150px"></img>
      <a href="https://4lza.github.io/randomNumberGenerator/" target="_blank"><p class="pthree">Random Number</p></a>
    </div>
    <div class="four">
      <img src="" height="150px" width="150px"></img>
      <p class="pfour">Project four</p>
    </div>
    </div>
  </div>
  </div>

  <div id="Contacts">
    <div class="child-5">
      <p class="heading">Contacts</p>
    <div class="socials">
    <div class="Twitter">
      <img src='./resources/images/twitter logo.png' height="100px"></img>
      <p>Twitter</p>
    </div>
    <div class="Linkedin">
      <img src='./resources/images/linkedin logo.png' height="100px"></img>
      <p>Linkedin</p>
    </div>
    <div class="GitHub">
      <img src='./resources/images/github logo.png' height="100px"></img>
      <p>GitHub</p>
    </div>
    </div>
    </div>
    </div>
    </>
    );
}

export default App;
