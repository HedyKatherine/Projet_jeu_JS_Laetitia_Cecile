// Secret button
let choices = 0;

// Default value
let winner = ``;

function displpayPagesGame(){
      document.getElementById('home').style.display = "none";
      document.getElementById('divPlayground').style.display = "block";
}

function match () {
    // Checks that the characters' scores have been updated.
    // Can be deleted when running tests are over.
    console.log(`${character_1.name}: ${character_1.score}`);
    console.log(`${character_2.name}: ${character_2.score}`);

    function nonedisplay () {
        // Hides the "POW!" button.
        checkscores.style.display = `none`;
    }
    setTimeout(nonedisplay, 500);

    function compareCharValues () {
        // Declares a winner.
        // Characters have something to say about it.
        if (character_1.score > character_2.score) {
            winner = character_1.name;
            win_conclusion.innerHTML = `<p>${winner} gagne&nbsp;!</p>`;
            win_message.innerHTML = `<p id="win_char1">C'est moi&nbsp;!</p>`;
        } else if (character_1.score < character_2.score) {
            winner = character_2.name;
            win_conclusion.innerHTML = `<p>${winner} gagne&nbsp!</p>`;
            win_message.innerHTML = `<p id="win_char2">C'est moi&nbsp;!</p>`;
        } else {
            winner = `Ex aequo`;
            win_conclusion.innerHTML = `<p>${winner} !</p>`;
            win_message.innerHTML = `<p id="win_charboth">Il faut nous prendre<br>tous les deux&nbsp;!</p>`;
        }
    }
    setTimeout(compareCharValues, 1000);

    function hidePlayground () {
        // Hides Playground.
        playGround.classList.remove(`showPlayground`);
        playGround.classList.add(`hidePlayground`);
    }
    setTimeout(hidePlayground, 8000);

    function displaybtn () {
        // Shows "RELOAD" button.
        reloadbtn.style.display = `block`;
    }
    setTimeout(displaybtn, 8000);

    function ablebtn () {
        // Reload button is only clickable when fully visible.
        reloadbtn.removeAttribute(`disabled`);
    }
    setTimeout(ablebtn, 10000);
}

function matchButton () {
    // The "POW" button is only visible when 4 qualities in total (2 for each character) have been chosen.
    if (choices == 4) {
        checkscores.style.display = `block`;
    } else {
        checkscores.style.display = `none`;
    }
}

/* Leela (Character 1, on the left)*/
let character_1 = {
    name: `Leela`,
    score: 100
};

function char1_qual_good(arg) {
    // Hides row 1 buttons for Leela.
    function nonedisplay () {
        char1_good_buttons.style.display = `none`;
    }
    setTimeout(nonedisplay, 300);
    function goodChoiceText() {
        // Quality chosen in row 1 for Leela.
        // Leela's face changes.
        // Leela has something to say.
        // Leela's value is updated (for the match).
        switch (arg) {
            case 1 :
                char1_good_choice.innerHTML = `égocentrique`;
                char1.innerHTML = `Z`;
                char1_message.innerHTML = `<p id="ego_1">C'est tout moi !</p>`;
                character_1.score += 10;
                break;
            case 2 :
                char1_good_choice.innerHTML = `asocial`;
                char1.innerHTML = `F`;
                char1_message.innerHTML = `<p id="aso_1">M'en fiche !</p>`;
                character_1.score += 20;
                break;
            case 3 :
                char1_good_choice.innerHTML = `agressif`;
                char1.innerHTML = `A`;
                char1_message.innerHTML = `<p id="hos_1">T'as dit quoi ?</p>`;
                character_1.score += 30;
                break;
            case 4 :
                char1_good_choice.innerHTML = `capricieux`;
                char1.innerHTML = `O`;
                char1_message.innerHTML = `<p id="brat_1">Faut voir...</p>`;
                character_1.score += 40;
                break;
            case 5 :
                char1_good_choice.innerHTML = `cinglé`;
                char1.innerHTML = `V`;
                char1_message.innerHTML = `<p id="crazy_1">C'est toi<br>qui dit ça ?</p>`;
                character_1.score += 50;
                break;
        }
    }
    setTimeout(goodChoiceText, 300);
    choices += 1;
    setTimeout(matchButton, 2500);
}

function char1_qual_bad(arg) {
    // Hides row 2 buttons for Leela.
    function nonedisplay () {
        char1_bad_buttons.style.display = `none`;
    }
    setTimeout(nonedisplay, 300);
    function badChoiceText() {
        // Quality chosen in row 2 for Leela.
        // Leela's face changes.
        // Leela has something to say.
        // Leela's value is updated (for the match).
        switch (arg) {
            case 1 :
                char1_bad_choice.innerHTML = `romantique`;
                char1.innerHTML = `M`;
                char1_message.innerHTML = `<p id="love_1">Ciao Bella !</p>`;
                character_1.score -= 10;
                break;
            case 2 :
                char1_bad_choice.innerHTML = `cérébral`;
                char1.innerHTML = `R`;
                char1_message.innerHTML = `<p id="smart_1">C'est pas faux !</p>`;
                character_1.score -= 20;
                break;
            case 3 :
                char1_bad_choice.innerHTML = `familier`;
                char1.innerHTML = `Q`;
                char1_message.innerHTML = `<p id="friend_1">Comment ça va ?</p>`;
                character_1.score -= 30;
                break;
            case 4 :
                char1_bad_choice.innerHTML = `intrépide`;
                char1.innerHTML = `C`;
                char1_message.innerHTML = `<p id="bold_1">C'est parti !</p>`;
                character_1.score -= 20;
                break;
            case 5 :
                char1_bad_choice.innerHTML = `pacifique`;
                char1.innerHTML = `L`;
                char1_message.innerHTML = `<p id="calm_1">Qui me parle ?</p>`;
                character_1.score -= 30;
                break;
        }
    }
    setTimeout(badChoiceText, 300);
    choices += 1;
    setTimeout(matchButton, 2500);
}

/* Leelo (Character 2, on the right) */

let character_2 = {
    name: `Leelo`,
    score: 100
};

function char2_qual_good(arg) {
    // Hides row 1 buttons for Leelo.
    function nonedisplay () {
        char2_good_buttons.style.display = `none`;
    }
    setTimeout(nonedisplay, 300);
    function goodChoiceText() {
        // Quality chosen in row 1 for Leelo.
        // Leelo's face changes.
        // Leelo has something to say.
        // Leelo's value is updated (for the match).
        switch (arg) {
            case 1 :
                char2_good_choice.innerHTML = `égocentrique`;
                char2.innerHTML = `Z`;
                char2_message.innerHTML = `<p id="ego_2">C'est tout moi !</p>`;
                character_2.score += 10;
                break;
            case 2 :
                char2_good_choice.innerHTML = `asocial`;
                char2.innerHTML = `F`;
                char2_message.innerHTML = `<p id="aso_2">M'en fiche !</p>`;
                character_2.score += 20;
                break;
            case 3 :
                char2_good_choice.innerHTML = `agressif`;
                char2.innerHTML = `A`;
                char2_message.innerHTML = `<p id="hos_2">T'as dit quoi ?</p>`;
                character_2.score += 30;
                break;
            case 4 :
                char2_good_choice.innerHTML = `capricieux`;
                char2.innerHTML = `O`;
                char2_message.innerHTML = `<p id="brat_2">Faut voir...</p>`;
                character_2.score += 40;
                break;
            case 5 :
                char2_good_choice.innerHTML = `cinglé`;
                char2.innerHTML = `V`;
                char2_message.innerHTML = `<p id="crazy_2">C'est toi<br>qui dit ça ?</p>`;
                character_2.score += 50;
                break;
            }
        }
    setTimeout(goodChoiceText, 300);
    choices += 1;
    setTimeout(matchButton, 2500);
}

function char2_qual_bad(arg) {
    // Hides row 2 buttons for Leelo.
    function nonedisplay () {
        char2_bad_buttons.style.display = `none`;
    }
    setTimeout(nonedisplay, 300);
    function badChoiceText() {
        // Quality chosen in row 2 for Leelo.
        // Leelo's face changes.
        // Leelo has something to say.
        // Leelo's value is updated (for the match).
        switch (arg) {
            case 1 :
                char2_bad_choice.innerHTML = `romantique`;
                char2.innerHTML = `M`;
                char2_message.innerHTML = `<p id="love_2">Ciao Bella !</p>`;
                character_2.score -= 10;
                break;
            case 2 :
                char2_bad_choice.innerHTML = `cérébral`;
                char2.innerHTML = `R`;
                char2_message.innerHTML = `<p id="smart_2">C'est pas faux !</p>`;
                character_2.score -= 20;
                break;
            case 3 :
                char2_bad_choice.innerHTML = `familier`;
                char2.innerHTML = `Q`;
                char2_message.innerHTML = `<p id="friend_2">Comment ça va ?</p>`;
                character_2.score -= 30;
                break;
            case 4 :
                char2_bad_choice.innerHTML = `intrépide`;
                char2.innerHTML = `C`;
                char2_message.innerHTML = `<p id="bold_2">C'est parti !</p>`;
                character_2.score -= 20;
                break;
            case 5 :
                char2_bad_choice.innerHTML = `pacifique`;
                char2.innerHTML = `L`;
                char2_message.innerHTML = `<p id="calm_2">Qui me parle ?</p>`;
                character_2.score -= 30;
                break;
            }
    }
    setTimeout(badChoiceText, 300);
    choices += 1;
    setTimeout(matchButton, 2500);
}
