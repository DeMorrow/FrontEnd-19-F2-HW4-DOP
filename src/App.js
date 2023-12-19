import './style.css'

function App() {
  let one = document.getElementById("lel")
  let two = document.getElementById("kek")
  let three = document.getElementById("lol")
  let interval;
  function NoHope() {
   interval =  setInterval(() =>{
    let one = document.getElementById("lel")
    let two = document.getElementById("kek")
    let three = document.getElementById("lol")
      one.innerHTML++;
      if (one.innerHTML / 60 === 1) {
        one.innerHTML = 0
        two.innerHTML++;
      } if (two.innerHTML / 60 === 1){
        two.innerHTML = 0
        three.innerHTML++;
      }
    }, 1000)
  }
  return (
    <div>
      <h1 id="wacky">Stopwatch.com</h1>
      <h1 id="lel">0</h1>
      <h1 id="kek">00</h1>
      <h1 id="lol">00</h1>
      <p id="l">Seconds</p>
      <p id="d">Minutes</p>
      <p id="m">Hours</p>
      <h1 id="lel1"></h1>
      <h1 id="kek2"></h1>
      <h1 id="lol3"></h1>
      <h1 id="last"></h1>
      <button id="hopeless" onClick={() =>{
        NoHope();
        let hopeless = document.getElementById("hopeless")
        hopeless.disabled = true
  }}>Start</button>
      <button id="light" onClick={() =>{
        let one = document.getElementById("lel")
        let two = document.getElementById("kek")
        let three = document.getElementById("lol")
        let meh = document.getElementById("lel1")
        let me2 = document.getElementById("kek2")
        let men = document.getElementById("lol3")
        let last = document.getElementById("last")
        last.innerHTML = "Last Record"
        meh.innerHTML = one.innerHTML
        me2.innerHTML = two.innerHTML
        men.innerHTML = three.innerHTML
        clearInterval(interval)
        let hopeless = document.getElementById("hopeless")
        hopeless.disabled = false
      }}>Stop</button>
      <button id="dark" onClick={() => {
        let one = document.getElementById("lel")
        let two = document.getElementById("kek")
        let three = document.getElementById("lol")
        let meh = document.getElementById("lel1")
        let me2 = document.getElementById("kek2")
        let men = document.getElementById("lol3")
        let last = document.getElementById("last")
        last.innerHTML = "Last Record"
        meh.innerHTML = one.innerHTML
        me2.innerHTML = two.innerHTML
        men.innerHTML = three.innerHTML
        clearInterval(interval)
        one.innerHTML = 0
        two.innerHTML = "00"
        three.innerHTML = "00"
        let hopeless = document.getElementById("hopeless")
        hopeless.disabled = false
      }}>Clear</button>
    </div>
  );
}

export default App;


