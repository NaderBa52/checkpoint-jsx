
import './App.css';
import mymotoimage from "./moto.jpg"
function App() {
  return (
    <div className="App">
    <div style={{border:'solid 1 black',maxWidth:'100vw'}}>

<h1 class="title-red">Benamor Nader</h1>



<img src="/car.jpg" />

<br />

<img src={mymotoimage}/> 

</div>

<video width="820" height="640" controls>

<source src="myvideo.mp4" type="video/mp4"/>

</video>
    </div>
  );
}

export default App;
