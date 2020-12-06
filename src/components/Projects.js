import React, { useEffect } from "react";
import "../stylesheets/Projects.scss";
import frog from "../Media/memorygame/frog.jpg";
import turtle from "../Media/memorygame/turtle.jpg";
import bird from "../Media/memorygame/bird.jpg";
const Projects = () => {
  useEffect(() => {
    // VOWEL COUNTER APP START
    const input = document.getElementById("input");
    const button = document.getElementById("button");
    const output = document.getElementById("output");
    if (button) {
      button.addEventListener("click", () => {
        console.log("Dad");
        let count = 0;
        const vowels = ["a", "e", "i", "o", "u"];
        let inputArray = [...input.value];
        //console.log(inputArray);
        for (let i = 0; i < inputArray.length; i++) {
          for (let j = 0; j < vowels.length; j++) {
            if (vowels[j] === inputArray[i]) {
              count++;
            }
          }
        }
        output.innerHTML = "The no of Vowels are : " + count;
      });
    }
    // VOWEL COUNTER APP END
    // TO DO  APP START
    let inp = document.querySelector(".input");
    let btn = document.querySelector(".button");
    let uL = document.querySelector(".unorderList");
    if (btn) {
      btn.addEventListener("click", () => {
        let newList = document.createElement("li");
        console.log(newList);
        let lText = document.createTextNode(inp.value);
        newList.appendChild(lText);
        let delBtn = document.createElement("button");
        delBtn.classNameList.add("btn-del");
        newList.appendChild(delBtn);
        uL.appendChild(newList);
        delBtn.addEventListener("click", () => {
          newList.style.display = "none";
        });
      });
    }

    // TO DO  APP END
    // NOTE TAKER  APP START
    const input2 = document.querySelector("#input2");
    const button2 = document.querySelector("#button2");
    const displayNotes = document.querySelector(".displayNotes");
    if (button2) {
      button2.addEventListener("click", () => {
        displayNotes.innerHTML =
          displayNotes.innerHTML + "<br>" * +input2.value;
      });
    }

    // NOTE TAKER  APP END
    //   Expense TRACKER APP START
    const name = document.querySelector("#nameInput");
    const date = document.querySelector("#dateInput");
    const price = document.querySelector("#priceInput");
    const button3 = document.querySelector("#button3");
    const table = document.querySelector("#myTable");
    // Function
    if (button3) {
      button3.addEventListener("click", e => {
        e.preventDefault();
        const row = table.insertRow(1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        cell1.innerText = name.value;
        cell2.innerText = date.value;
        cell3.innerText = price.value;
      });
    }

    //   Expense TRACKER APP END
    // MEMORY GAME START
    const black = document.querySelectorAll(".black");
    const image = document.querySelectorAll(".image");
      let eachIndexs = [];
    black.forEach((element, index) => {
      // FOR LOOPOING THROUGH EACH ELEMENT IN BLACK OBJECT
      element.addEventListener("click", () => {
        element.style.display = "none";
      });
    });
    image.forEach((element, index) => {
      element.addEventListener("mouseover", () => {
        eachIndexs.push(index);
        const eac = eachIndexs.slice(0, 2);
        let a = eac[0];
        let b = eac[1];
        if (image[a].alt === image[b].alt) {
          setTimeout(() => {
            alert("You Won");
            window.location.reload();
          }, 100);
        } else {
          setTimeout(() => {
            alert("Better luck next time!");
            window.location.reload();
          });
        }
      });
    });
    // MEMORY GAME END
  }, []);

  // ********************************************************************
  return (
    <section className="project-container">
      {/* VOWEL COUNTER APP START */}
      <div className="project-wrapper">
        <input id="input" type="text"/>
        <button id="button">Count Vowels</button>
        <div id="output"></div>
      </div>
      {/* VOWEL COUNTER APP END */}
      {/* TO DO  APP START */}
      <div className="project-wrapper">
        <h4>My To-Do List</h4>
        <input className="input" />
        <button className="button">Add</button>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <ul className="unorderList"></ul>
        </div>
      </div>
      {/* TO DO  APP END */}
      {/* NOTE TAKER  APP START */}
      <div className="project-wrapper">
        <h4>Add your Notes here:</h4>
        <span>Note:</span>
        <input id="input2"/>
        <button id="button2">
          Add Note
        </button>
        <div className="displayNotes"></div>
      </div>
      {/* NOTE TAKER  APP END */}
      {/* Expense TRACKER APP START */}
      <div className="project-wrapper">
        <h4 >
          Expense List
        </h4>
        <div>
          <form>
            <label for="nameInput">NAME</label>
            <br />
            <input id="nameInput" />
            <label for="dateInput">
              DATE
            </label>
            <br />
            <input
              id="dateInput"
              placeholder="dd-mm-yyyy"
            />
            <br />
            <label for="priceInput">
              PRICE
            </label>
            <br />
            <input id="priceInput" />
            <br />
            <button id="button3">
              Add
            </button>
          </form>
        </div>
        <div>
          <table
            style={{ width: "100%", backgroundColor: "rgb(204, 197, 191)" }}
            id="myTable"
          >
            <td>
              <th style={{ border: "1px solid black" }}>NAME</th>
              <th style={{ border: "1px solid black" }}>DATE</th>
              <th style={{ border: "1px solid black" }}>PRICE</th>
            </td>
          </table>
        </div>
      </div>
      {/* Expense TRACKER APP END */}
      {/* MEMORY GAME START */}
      <div className="project-wrapper">
        <div className="imageWrapper">
          <div className="blackContainer">
            <img src={turtle} alt="turtle" className="image" />
            <div className="black"></div>
          </div>
          <div className="blackContainer">
            <img src={bird} alt="bird" className="image" />
            <div className="black"></div>
          </div>
          <div className="blackContainer">
            <img src={frog} alt="frog" className="image" />
            <div className="black"></div>
          </div>
          <div className="blackContainer">
            <img src={frog} alt="frog" className="image" />
            <div className="black"></div>
          </div>
          <div className="blackContainer">
            <img src={turtle} alt="turtle" className="image" />
            <div className="black"></div>
          </div>
          <div className="blackContainer">
            <img src={bird} alt="bird" className="image" />
            <div className="black"></div>
          </div>
        </div>
      </div>
      {/* MEMORY GAME END */}
    </section>
  );
};
export default Projects;
