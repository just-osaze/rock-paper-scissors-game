/*==================================================================================================
 * This is quite scattered. I myself is fed up but i'll do by best for anyone be able to understand 
 * ==================================================================================================*/

/*========================================
 * Get all the modal id 
 *========================================*/

 //get the game
let xGame = document.getElementById('game');

//get the paper modal
let paperModal = document.getElementById('pModal');
let paperModal1 = document.getElementById("pModal1");

// get the rock modal
let rockModal = document.getElementById('rModal');
let rockModal1 = document.getElementById('rModal1')

// get the scissors modal
let scissorsModal = document.getElementById('sModal');
let scissorsModal1 = document.getElementById('sModal1');

/*==================================================== 
* Get the buttons that open each modal
*===================================================== */

//get button that opens the paper modal
let paperButton = document.getElementById('pap');

// get the button that opens the rock modal
let rockButton = document.getElementById('rck');

// get the button that opens the scissors modal
let scissorsButton = document.getElementById('sci');

//get the button that takes the page one step back
let goBack = document.getElementById("goBack");

/**===========================================================
 * Functions for opening the paper, rock and scissors buttons
 * And randomly selecting each characters
 *===========================================================*/

//open the paper modal when user clicks on the paper button
paperButton.onclick = function() {
    let char1 = document.getElementById('pModal');
    let char2 = document.getElementById('pModal1');

    let buttonArray = [char1, char2];
    let rom = Math.floor(Math.random() * buttonArray.length);

    if (rom == 0) {
        paperModal.style.display = 'block';
        xGame.style.display = 'none';
    }
    if (rom == 1) {
        paperModal1.style.display = 'block';
        xGame.style.display = 'none';
    }    
}

// open the rock modal when user clicks on rock button
rockButton.onclick = function () {
    let char1 = document.getElementById('rModal');
    let char2 = document.getElementById('rModal1');

    rockModal.style.display = "block";
    xGame.style.display = "none";
}

// open the scissors modal when user clicks on scissors button
scissorsButton.onclick = function () {
    scissorsModal.style.display = "block";
    xGame.style.display = "none";
}

/*====================================================
 * script for the rules button on game.html (I'm not sure why it's not working on index.html. So i wrote another one)
 *====================================================*/
// get the modal
let myModal = document.getElementById("modal");

// get button that opens the rules modal
let myButton = document.getElementById("btn");

// get the button that closes the modal
let myClose = document.getElementsByClassName("close")[0];

// open the modal when user clicks the rules button
myButton.onclick = function() {
    myModal.style.display ="block";
}

// close the modal when user click on (x)
myClose.onclick = function() {
    modal.style.display = "none";
}
/*==========================================================
 * Script for rules button on index.html 
 *==========================================================*/
// open the modal when user clicks the rules button

function go()  {
    let myModal1 = document.getElementById("modal1");
    myModal1.style.display ="block";
}

// close the modal when the user click the (x) button
function myMod()  {
    let myModal1 = document.getElementById("modal1");
    myModal1.style.display ="none";
}

/*=============================================================
 *Script for closing each selected character modal
 *=============================================================*/

// get the button that closes the selected characters modal
let charBtn1 = document.getElementById("goBack");
let charBtn2 = document.getElementById("goBack1");
let charBtn3 = document.getElementById("goBack3");

//Functions for going back one step from the character modal  
charBtn1.onclick = function() {
    paperModal.style.display = "none";
    xGame.style.display = "block";
}
charBtn2.onclick = function() {
    paperModal1.style.display = "none";
    xGame.style.display = "block";
}
charBtn3.onclick = function() {
    scissorsModal.style.display = "none";
    xGame.style.display = "block";
}
charBtn3.onclick = function() {
    rockModal.style.display = "none";
    xGame.style.display = "block";
}

function closeMe () {
    goBack.style.display = "none";
}

/**=========================================================
 * script for linking the easy button to the game.html page
 *==========================================================*/

function easy() {
    let stageEasy = document.getElementById("stage");
    let main1 = document.getElementById("mainy");
    let cancleBoard = document.getElementById("scoreBoard1");

    stageEasy.style.display ="none";
    main1.style.display = "block";
    cancleBoard.style.display = "none";
}
/* 
 * <section id="pModal" class="picked">
      <!-- codes for choosing paper(win) -->
        <div class="win">
            <button class="paper">
                <img src="images/icon-paper.svg" alt="paper">
            </button>
            <p class="rockP">YOU PICKED</p>
        </div>        
        <!-- codes for dark circle -->
        <div class="win">
            <span class="circle"></span>
            <p class="scissorsP">THE HOUSE PICKED</p>
        </div>
    </section> 

    <section id = "rModal" class="picked">
      <div class="win">
          <button class="rock">
              <img src="images/icon-rock.svg" alt="rock">
          </button>
          <p class="rockP">YOU PICKED</p>
      </div>        
      <div class="win">
          <span class="circle"></span>
          <p class="scissorsP">THE HOUSE PICKED</p>
      </div>
    </section>

    <section id="sModal" class="picked">
        <div class="pick">
            <button class="scissors">
                <img src="images/icon-scissors.svg" alt="scissors">
            </button>
            <p class="rockP">YOU PICKED</p>
        </div>        
        <div class="win">
            <span class="circle3"></span>
            <p class="scissorsP">THE HOUSE PICKED</p>
        </div>
    </section>

 */