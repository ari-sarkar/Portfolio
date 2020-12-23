import React, { useEffect, useState } from "react";
import "../stylesheets/Projects.scss";
import frog from "../Media/memorygame/frog.jpg";
import turtle from "../Media/memorygame/turtle.jpg";
import bird from "../Media/memorygame/bird.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Projects = props => {
  const [count, Setcount] = useState(0);
  const [count1, Setcount1] = useState(0);
  const [count2, Setcount2] = useState(0);
  const [count3, Setcount3] = useState(0);
  const [count4, Setcount4] = useState(0);
  const [count5, Setcount5] = useState(0);
  useEffect(() => {
    const tlvsvs = gsap.timeline({
      scrollTrigger: {
        trigger: ".project-container",
        start: "-=200",
        end: "bottom bottom",
        //markers:{startColor: "white", endColor: "white", fontSize: "18px", fontWeight: "bold", indent: 20},
      },
    });
    tlvsvs.fromTo(
      ".project-initial",
      { autoAlpha: 0 },
      { autoAlpha: 1, stagger: 0.5 }
    );
  }, []);
  // ********************************************************************
  // ********************************************************************

  useEffect(() => {
    //TO DO APP START
    let inp = document.querySelector(".input");
    let btn = document.querySelector(".button");
    let uL = document.querySelector(".unorderList");

    btn.addEventListener("click", () => {
      let newList = document.createElement("li");
      let lText = document.createTextNode(inp.value);
      newList.appendChild(lText);
      let delBtn = document.createElement("button");
      delBtn.classList.add("btn-del");
      newList.appendChild(delBtn);
      uL.appendChild(newList);
      delBtn.addEventListener("click", () => {
        newList.style.display = "none";
      });
    });
    //TO DO APP END
    //Vowel Counter APP Start
    const input = document.getElementById("input");
    const button = document.getElementById("button");
    const output = document.getElementById("output");
    button.addEventListener("click", () => {
      let count = 0;
      const vowels = ["a", "e", "i", "o", "u"];
      let inputArray = [...input.value];
      console.log(inputArray);
      for (let i = 0; i < inputArray.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
          if (vowels[j] === inputArray[i]) {
            count++;
          }
        }
      }
      output.innerHTML = "The no of Vowels are : " + count;
    });
    //Vowel Counter APP End
    //Memory Game Start
    const overlay = document.querySelectorAll(".overlay");
    const image = document.querySelectorAll(".image"),
      eachIndexs = [];
    overlay.forEach(element => {
      element.addEventListener("click", () => {
        element.style.display = "none";
      });
    });
    image.forEach((element, index) => {
      element.addEventListener("mouseover", () => {
        eachIndexs.push(index);
        //console.log(eachIndexs)
        const eac = eachIndexs.slice(0, 2);
        //console.log(eac[1]);
        let a = eac[0];
        let b = eac[1];
        if (image[b]) {
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
        }
      });
    });
    //Memory Game End
    //Note Taker App
    const inputNoteTaker = document.querySelector("#input-note-taker");
    const buttonNoteTaker = document.querySelector("#button-note-taker");
    const displayNotes = document.querySelector(".displayNotes");
    buttonNoteTaker.addEventListener("click", () => {
      displayNotes.innerHTML =
        displayNotes.innerHTML + "<br>" + inputNoteTaker.value;
    });
    //Note Taker App End
    //Form Verification
    const name = document.getElementById("name");
    const phone = document.getElementById("phone");
    // const email = document.getElementById("email");
    // const add = document.getElementById("add");
    const submitButton = document.getElementById("submit");

    submitButton.addEventListener("click", () => {
      if (name.value.length < 3) {
        alert("Please Write Your Full Name");
      }
      if (phone.value.length < 11) {
        alert("Please Write a Correct No");
      }
    });
    //Form Verification End
    //Expense Tracker
    const nameExpenseTracker = document.querySelector("#nameInput");
    const date = document.querySelector("#dateInput");
    const price = document.querySelector("#priceInput");
    const buttonExpenseTracker = document.querySelector("#button-expense");
    const table = document.querySelector("#myTable");
    // Function
    buttonExpenseTracker.addEventListener("click", (e) => {
        e.preventDefault();
       const row = table.insertRow(1);
       const cell1 = row.insertCell(0);
       const cell2 = row.insertCell(1);
       const cell3 = row.insertCell(2);
       cell1.innerText = nameExpenseTracker.value;
       cell2.innerText = date.value;
       cell3.innerText = price.value;
    })
    //Expense Tracker End
  }, []);

  return (
    <section className="project-container">
      <div className="projects-layout-container">
        <div className="projects-layout">
          <div className="project-initial">
            <p onClick={() => Setcount(count + 1)}>
              To Do<br></br>App
            </p>
          </div>
          <div className="project-initial">
            <p onClick={() => Setcount1(count1 + 1)}>
              Vowel<br></br> Counter
            </p>
          </div>
          <div className="project-initial">
            <p onClick={() => Setcount2(count2 + 1)}>
              Memory<br></br> Game
            </p>
          </div>
          <div className="project-initial">
            <p onClick={() => Setcount3(count3 + 1)}>
              Note <br></br>Taker
            </p>
          </div>
          <div className="project-initial">
            <p onClick={() => Setcount4(count4 + 1)}>
              Form <br></br>Verification
            </p>
          </div>
          <div className="project-initial">
            <p onClick={() => Setcount5(count5 + 1)}>
              Expense<br></br> Tracker
            </p>
          </div>
        </div>
        {/* ******************************JS PROJECTS 0 START****************************************** */}
        <div
          className={count === 0 ? "projects-wrapper-hide" : "projects-wrapper"}
        >
          <div className="back-btn" onClick={() => Setcount(count - 1)}>
            <svg className="svg-icon" viewBox="0 0 20 20">
              <path
                fill="none"
                d="M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0
	L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109
	c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483
	c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788
	S18.707,9.212,18.271,9.212z"
              ></path>
            </svg>
          </div>
          <div className="Contanier-jsProjects">
            {/* --------------TO DO APP---------------- */}
            <h6>My To-Do List</h6>
            <input class="input" />
            <button class="button">ADD</button>
            <div>
              <ul class="unorderList"></ul>
            </div>
            {/* --------------TO DO APP END---------------- */}
          </div>
        </div>
        {/* ******************************JS PROJECTS 0 END****************************************** */}

        {/* ******************************JS PROJECTS 1 START****************************************** */}
        <div
          className={
            count1 === 0 ? "projects-wrapper-hide" : "projects-wrapper"
          }
        >
          <div className="back-btn" onClick={() => Setcount1(count1 - 1)}>
            <svg class="svg-icon" viewBox="0 0 20 20">
              <path
                fill="none"
                d="M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0
	L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109
	c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483
	c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788
	S18.707,9.212,18.271,9.212z"
              ></path>
            </svg>
          </div>
          <div className="Contanier-jsProjects">
            {/* --------------Vowel Counter APP---------------- */}
            <h6>Vowel Counter App</h6>
            <input id="input" type="text" />
            <button id="button">Count Vowels</button>
            <div id="output"></div>
            {/* --------------Vowel Counter APP END---------------- */}
          </div>
        </div>
        {/* ******************************JS PROJECTS 1 END****************************************** */}

        {/* ******************************JS PROJECTS 2 START****************************************** */}
        <div
          className={
            count2 === 0 ? "projects-wrapper-hide" : "projects-wrapper"
          }
        >
          <div className="back-btn" onClick={() => Setcount2(count2 - 1)}>
            <svg class="svg-icon" viewBox="0 0 20 20">
              <path
                fill="none"
                d="M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0
	L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109
	c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483
	c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788
	S18.707,9.212,18.271,9.212z"
              ></path>
            </svg>
          </div>
          <div className="Contanier-jsProjects">
            {/* --------------Memory Game---------------- */}
            <h6>Memory Game</h6>
            <div className="game-Wrapper">
              <div className="img-overlay-container">
                <img src={turtle} alt="turtle" className="image" />
                <div className="overlay"></div>
              </div>
              <div className="img-overlay-container">
                <img src={bird} alt="bird" className="image" />
                <div className="overlay"></div>
              </div>
              <div className="img-overlay-container">
                <img src={frog} alt="frog" className="image" />
                <div className="overlay"></div>
              </div>
              <div className="img-overlay-container">
                <img src={frog} alt="frog" className="image" />
                <div className="overlay"></div>
              </div>
              <div className="img-overlay-container">
                <img src={turtle} alt="turtle" className="image" />
                <div className="overlay"></div>
              </div>
              <div className="img-overlay-container">
                <img src={bird} alt="bird" className="image" />
                <div className="overlay"></div>
              </div>
            </div>
            {/* --------------Memory Game END---------------- */}
          </div>
        </div>
        {/* ******************************JS PROJECTS 2 END****************************************** */}

        {/* ******************************JS PROJECTS 3 START****************************************** */}
        <div
          className={
            count3 === 0 ? "projects-wrapper-hide" : "projects-wrapper"
          }
        >
          <div className="back-btn" onClick={() => Setcount3(count3 - 1)}>
            <svg class="svg-icon" viewBox="0 0 20 20">
              <path
                fill="none"
                d="M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0
	L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109
	c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483
	c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788
	S18.707,9.212,18.271,9.212z"
              ></path>
            </svg>
          </div>
          <div className="Contanier-jsProjects">
            {/* --------------Note Taker App---------------- */}
            <h6>My Notebook</h6>
            <span className="note">Note:</span>
            <input id="input-note-taker" />
            <button id="button-note-taker">Add Note</button>
            <div className="displayNotes"></div>
            {/* --------------Note Taker App END---------------- */}
          </div>
        </div>
        {/* ******************************JS PROJECTS 3 END****************************************** */}

        {/* ******************************JS PROJECTS 4 START****************************************** */}
        <div
          className={
            count4 === 0 ? "projects-wrapper-hide" : "projects-wrapper"
          }
        >
          <div className="back-btn" onClick={() => Setcount4(count4 - 1)}>
            <svg class="svg-icon" viewBox="0 0 20 20">
              <path
                fill="none"
                d="M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0
	L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109
	c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483
	c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788
	S18.707,9.212,18.271,9.212z"
              ></path>
            </svg>
          </div>
          <div className="Contanier-jsProjects">
            {/* --------------Form Verification ---------------- */}
            <h6>Form Verification</h6>
            <form id="form">
              <label for="name">Name:</label>
              <br />
              <input type="text" id="name" pattern="[A-Za-z]+" required />
              <br />
              <label for="phone">Phone:</label>
              <br />
              <input
                type="text"
                id="phone"
                pattern="^(0|[1-9][0-9]*)$"
                required
              />
              <br />
              <label for="email">E-mail:</label>
              <br />
              <input type="email" id="email" required />
              <br />
              <label for="add">ADD:</label>
              <br />
              <input type="text" id="add" placeholder="optional" />
              <br />
              <button type="submit" id="submit">Submit</button>
            </form>
            {/* --------------Form Verification END---------------- */}
          </div>
        </div>
        {/* ******************************JS PROJECTS 4 END****************************************** */}

        {/* ******************************JS PROJECTS 5 START****************************************** */}
        <div
          className={
            count5 === 0 ? "projects-wrapper-hide" : "projects-wrapper"
          }
        >
          <div className="back-btn" onClick={() => Setcount5(count5 - 1)}>
            <svg class="svg-icon" viewBox="0 0 20 20">
              <path
                fill="none"
                d="M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0
	L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109
	c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483
	c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788
	S18.707,9.212,18.271,9.212z"
              ></path>
            </svg>
          </div>
          <div className="Contanier-jsProjects">
            {/* --------------Expense Tracker---------------- */}
            <h6>Expense Tracker</h6>
              <form className="expense-form">
                <label for="nameInput">NAME</label>
                <br />
                <input id="nameInput" />
                <label for="dateInput">DATE</label>
                <br />
                <input id="dateInput" placeholder="dd-mm-yyyy" />
                <br />
                <label for="priceInput">PRICE</label>
                <br />
                <input id="priceInput" />
                <br />
                <button id="button-expense">Add</button>
              </form>
            <div>
              <table id="myTable">
                <tr>
                  <th>NAME</th>
                  <th>DATE</th>
                  <th>PRICE</th>
                </tr>
              </table>
            </div>
            {/* --------------Expense Tracker END---------------- */}
          </div>
        </div>
        {/* ******************************JS PROJECTS 5 END****************************************** */}
      </div>
    </section>
  );
};
export default Projects;
