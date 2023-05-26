import "./App.css";
import load from "./imgs/loading.png";
import tick from "./imgs/tick.png";
function Load() {
  function handleClick() {
    const loadElem = document.querySelector(".element");
    loadElem.style.display = "block";
    const btn = document.querySelector(".btn");
    btn.style.display = "none";
    const tickElem = document.querySelector(".tick");
    tickElem.style.display = "none";
    setTimeout(() => {
      loadElem.style.display = "none";
      tickElem.style.display = "block";
      setTimeout(() => {
        btn.style.display = "flex";
        tickElem.style.display = "none";
      }, 1400);
    }, 2000);
  }
  return (
    <div>
      <button className="btn" onClick={handleClick}>
        Click me
      </button>
      <img className="element" src={load} alt="jhz" />
      <img className="tick" src={tick} alt="jz" />
    </div>
  );
}
export default Load;
