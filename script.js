
let eng_or_heb = 'eng';

// Script for the language page

// Makes the game in English
function playing_in_english() {

    eng_or_heb = 'eng';
    location.reload()
    // First page
    // document.getElementById('h1_landing_page').innerHTML = 'Welcome!';
    // document.getElementById('h3_landing_page').innerHTML = 'Want to play sudoku ?';
    // document.getElementById('main_div_username_and_password').style.direction = 'ltr';
    // document.getElementById('div_username').innerHTML = 'Please enter your username';
    // document.getElementById('username').placeholder = 'username';
    // document.getElementById('div_password').innerHTML = 'Please enter your password';
    // document.getElementById('password').placeholder = 'password';
    // document.getElementById('Lets_go_button').innerHTML = "Let's go";

    // // Second page
    // document.getElementById('h2_in_selection_page').innerHTML = 'hi';
    // document.getElementById('selection_page').style.direction = 'ltr';
    // document.getElementById('h3_in_selection_page').innerHTML = 'good to see you';
    // document.getElementById('p_in_selection_page').innerHTML = 'Please select the difficulty level you want to play';
    // document.getElementById('easy_header').innerHTML = 'easy';
    // document.getElementById('normal_header').innerHTML = 'normal';
    // document.getElementById('Hard_header').innerHTML = 'קשה';


}

// Makes the game in Hebrew
function playing_in_hebrew() {

    eng_or_heb = 'heb';
    // First page
    document.getElementById('h1_landing_page').innerHTML = '! ברוך הבא';
    document.getElementById('h3_landing_page').innerHTML = '? רוצה לשחק סודוקו';
    document.getElementById('main_div_username_and_password').style.direction = 'rtl';
    document.getElementById('div_username').innerHTML = 'נא הקלד את שם המשתמש שלך';
    document.getElementById('username').placeholder = 'שם משתמש';
    document.getElementById('div_password').innerHTML = 'נא הקלד את הסיסמה שלך';
    document.getElementById('password').placeholder = 'סיסמה';
    document.getElementById('Lets_go_button').innerHTML = 'בוא נתחיל';

    // Second page
    document.getElementById('h2_in_selection_page').innerHTML = 'היי';
    document.getElementById('selection_page').style.direction = 'rtl';
    document.getElementById('h3_in_selection_page').innerHTML = 'טוב לראות אותך';
    document.getElementById('p_in_selection_page').innerHTML = 'בחר את רמת הקושי שאתה רוצה לשחק';
    document.getElementById('easy_header').innerHTML = 'קל';
    document.getElementById('easy_Explanation').innerHTML = 'תקבל סודוקו שצריך לפתור 25%';
    document.getElementById('easy_button').innerHTML = 'משחק קל';
    document.getElementById('normal_header').innerHTML = 'בינוני';
    document.getElementById('normal_Explanation').innerHTML = 'תקבל סודוקו שצריך לפתור 50%';
    document.getElementById('normal_button').innerHTML = 'משחק בינוני';
    document.getElementById('Hard_header').innerHTML = 'קשה';
    document.getElementById('Hard_Explanation').innerHTML = 'תקבל סודוקו שצריך לפתור 75%';
    document.getElementById('Hard_button').innerHTML = 'משחק קשה';



}

// Moves to the selection page
function landing_page() {

    let user = document.getElementById('username').value;
    let pass = document.getElementById('password').value;

    if (user != 'abcd') {

        if (eng_or_heb == 'heb') {
            document.getElementById('username_error').innerHTML = 'שם משתמש לא תקין, תנסה שוב בבקשה.';
            document.getElementById('username_error').style.textAlign = "right";
        }
        else {
            document.getElementById('username_error').innerHTML = 'Invalid username, please try again.';
        }
    }

    if (pass != 1234) {

        if (eng_or_heb == 'heb') {
            document.getElementById('password_error').innerHTML = 'סיסמה לא תקינה, תנסה שוב בבקשה.';
            document.getElementById('password_error').style.textAlign = "right";
        }
        else {
            document.getElementById('password_error').innerHTML = 'Invalid password, please try again.';
        }
    }

    if (user == 'abcd' && pass == 1234) {
        document.getElementById('landing_page').style.display = 'none';
        document.getElementById('selection_page').style.display = 'block';
        document.getElementById('h2_in_selection_page').innerHTML += ' ' + user + '!';
    }
}

//Raises and returns the language buttons
function language_buttons_display_block() {
    document.getElementById('language_buttons').style.display = 'block';
}
function language_buttons_display_none() {
    document.getElementById('language_buttons').style.display = 'none';
}