/*==================================================================================================
 * This is quite scattered. I myself is tired but i'll do by best for anyone be able to understand 
 * ==================================================================================================*/

/**=========================================================
 * script for linking the easy button to the game.html page
 *==========================================================*/

function easy() {
    let stageEasy = document.getElementById('stage');
    let main1 = document.getElementById('mainy');
    let clearBoard = document.getElementById('scoreBoard1');

    setTimeout(function() {
        stageEasy.style.display ="none";
        main1.style.display = "block";
        clearBoard.style.display = "none";
    }, 300);
}

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

//get the button that takes the game page to homepage
let goBack = document.getElementById("goBack");

/*=============================================================
 *Script for closing each selected character modal
 *=============================================================*/

//Functions for going back to the homepage  
// goBack.onclick = function() {
//     let stageEasy = document.getElementById("stage");
//     let clearBoard1 = document.getElementById('scoreBoard1');
//     let clearBoard2 = document.getElementById('scoreBoard2');
//     let clearButton = document.getElementById('goBack');

//     stageEasy.style.display = 'block';
//     xGame.style.display = "noe";

//     clearBoard1.style.display = 'block';
//     clearBoard2.style.display = 'none';
//     clearButton.style.display = "none";
// }

/**===========================================================
 * Functions for opening the paper, rock and scissors buttons
 * And randomly selecting each characters
 *===========================================================*/

//open the paper modal when user clicks on the paper button
paperButton.onclick = function() {
    let char1 = document.getElementById('pModal');
    let char2 = document.getElementById('pModal1');
    let clearBoard = document.getElementById('scoreBoard2');

    let buttonArray = [char1, char2];
    let rom = Math.floor(Math.random() * buttonArray.length);

    if (rom == 0) {
        paperModal.style.display = 'block';
        xGame.style.display = 'none';
        
        setTimeout(function() {
            document.getElementById('lose1').style.display = 'block';
            char1.style.display = 'none';
            clearBoard.style.display = 'none';
        }, 1000);
    }
    if (rom == 1) {
        paperModal1.style.display = 'block';
        xGame.style.display = 'none';

        setTimeout(function() {
            document.getElementById('win1').style.display = 'block';
            char2.style.display = 'none';
            clearBoard.style.display = 'none';
        }, 1000);
    }    
}

// open the rock modal when user clicks on rock button
rockButton.onclick = function () {
    let char1 = document.getElementById('rModal');
    let char2 = document.getElementById('rModal1');
    let clearBoard = document.getElementById('scoreBoard2');

    let buttonArray = [char1, char2];
    let rom = Math.floor(Math.random() * buttonArray.length);

    if (rom == 0) {
        rockModal.style.display = 'block';
        xGame.style.display = 'none';

        setTimeout(function() {
            document.getElementById('win2').style.display = 'block';
            char2.style.display = 'none';
            clearBoard.style.display = 'none';
        }, 1000);
    }
    if (rom == 1) {
        rockModal1.style.display = 'block';
        xGame.style.display = 'none';

        setTimeout(function() {
            document.getElementById('lose3').style.display = 'block';
            char2.style.display = 'block';
            clearBoard.style.display = 'none';
        }, 1000);
    } 
}

// open the scissors modal when user clicks on scissors button
scissorsButton.onclick = function () {
    let char1 = document.getElementById('sModal');
    let char2 = document.getElementById('sModal1');
    let clearBoard = document.getElementById('scoreBoard2');

    let buttonArray = [char1, char2];
    let rom = Math.floor(Math.random() * buttonArray.length);

    if (rom == 0) {
        scissorsModal.style.display = 'block';
        xGame.style.display = 'none';
        
        setTimeout(function() {
            document.getElementById('lose2').style.display = 'block';
            char2.style.display = 'none';
            clearBoard.style.display = 'none';
        }, 1000);
    }
    if (rom == 1) {
        scissorsModal1.style.display = 'block';
        xGame.style.display = 'none';

        setTimeout(function() {
            document.getElementById('win3').style.display = 'block';
            char2.style.display = 'none';
            clearBoard.style.display = 'none';
        }, 1000);
    }
}

/*===================================================================================================================
 * script for the rules button on game page (I'm not sure why it's not working on index.html. So i wrote another one)
 *===================================================================================================================*/
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
 * Script for rules button on homepage
 *==========================================================*/
// open the modal when user clicks the rules button

function openn()  {
    let myModal1 = document.getElementById("modal1");
    myModal1.style.display ="block";
}

// close the modal when the user click the (x) button
function myMod()  {
    let myModal1 = document.getElementById("modal1");
    myModal1.style.display ="none";
}

/*=======================================================
*Script for the playAgain button 
*========================================================*/

// for the paper button
let playButton = document.getElementById('playAgainWin1');
let playButton1 = document.getElementById('playAgainLose1');
let clearModal = document.getElementById('win1');
let clearModal1 = document.getElementById('lose1');

// for scissors button
let playButton2 = document.getElementById('playAgainWin3');
let playButton3 = document.getElementById('playAgainLose2');
let clearModal2 = document.getElementById('win3');
let clearModal3 = document.getElementById('lose2');

// for the rock button
let playButton4 = document.getElementById('playAgainWin2');
let playButton5 = document.getElementById('playAgainLose3');
let clearModal4 = document.getElementById('win2');
let clearModal5 = document.getElementById('lose3');

//function for clicking playAgain button after winning when you choose paper character
playButton.onclick = function() {
    
    xGame.style.display = 'block';
    clearModal.style.display = 'none';

    scoreBoard2.style.display = 'block';
    scoreBoard1.style.display = 'none';
}

//function for clicking playAgain button after losing when you choose paper character
playButton1.onclick = function() {
    
    xGame.style.display = 'block';
    clearModal1.style.display = 'none';

    scoreBoard2.style.display = 'block';
    scoreBoard1.style.display = 'none';
}
playButton2.onclick = function() {
    
    xGame.style.display = 'block';
    clearModal2.style.display = 'none';
    rockModal.style.display = 'none';

    scoreBoard2.style.display = 'block';
    scoreBoard1.style.display = 'none';
}
playButton3.onclick = function() {
    
    xGame.style.display = 'block';
    clearModal3.style.display = 'none';
    scissorsModal.style.display = 'none';

    scoreBoard2.style.display = 'block';
    scoreBoard1.style.display = 'none';
}
playButton4.onclick = function() {
    
    xGame.style.display = 'block';
    clearModal4.style.display = 'none';
    rockModal.style.display = 'none';

    scoreBoard2.style.display = 'block';
    scoreBoard1.style.display = 'none';
}
playButton5.onclick = function() {
    
    xGame.style.display = 'block';
    clearModal5.style.display = 'none';
    rockModal1.style.display = 'none';

    scoreBoard2.style.display = 'block';
    scoreBoard1.style.display = 'none';
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