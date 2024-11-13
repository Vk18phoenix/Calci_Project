var calci = document.getElementById("container");

calci.innerHTML += `
  <div style="width: 350px; padding: 20px; box-sizing: border-box; background-color: blue; border-radius: 10px; box-shadow: 0px 4px 8px rgba(0,0,0,0.2); margin-right: 38vw; margin-left: 38vw; margin-top: 10vh;">
    <div style="background-color: #8A9A5B; padding: 15px; border-radius: 10px; display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
      <input type="text" id="display" style="flex: 1; width: 105px; height: 40px; font-size: 1.5em; text-align: right; background-color: #f0f0f0; border: 1px solid black; border-radius: 5px; padding-right: 10px;" disabled>
      <button onclick="clearDisplay()" style="background-color: black; color: green; width: 50px; height: 40px; font-size: 1em;">C</button>
    </div>
    
    <div style="display: grid; grid-template-columns: repeat(4, 70px); gap: 10px;">
      <button onclick="display_Data(1)" class="button_Tag">1</button>
      <button onclick="display_Data(2)" class="button_Tag">2</button>
      <button onclick="display_Data(3)" class="button_Tag">3</button>
      <button onclick="display_Data('/')" class="button_Tag">/</button>
      
      <button onclick="display_Data(4)" class="button_Tag">4</button>
      <button onclick="display_Data(5)" class="button_Tag">5</button>
      <button onclick="display_Data(6)" class="button_Tag">6</button>
      <button onclick="display_Data('-')" class="button_Tag">-</button>

      <button onclick="display_Data(7)" class="button_Tag">7</button>
      <button onclick="display_Data(8)" class="button_Tag">8</button>
      <button onclick="display_Data(9)" class="button_Tag">9</button>
      <button onclick="display_Data('+')" class="button_Tag">+</button>

      <button onclick="display_Data('.')" class="button_Tag">.</button>
      <button onclick="display_Data(0)" class="button_Tag">0</button>
      <button onclick="calculateResult()" class="button_Tag">=</button>
      <button onclick="display_Data('*')" class="button_Tag"">*</button>
    </div>
  </div>
`;

document.querySelectorAll(".button_Tag").forEach(button => {
button.style.backgroundColor = "black";
button.style.boxShadow = "0px 4px 8px #90EE90";
button.style.color = "green";
button.style.height = "40px";
button.style.fontSize = "1.2em";
});

function display_Data(val){
    document.getElementById("display").value += val;
    display.style.color = "red";
}

function calculateResult() {
    let display = document.getElementById("display");
    display.value = eval(display.value);
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

