const SIGN_IN = document.getElementById('sign-in-form');
const HELLO_FRIEND = document.getElementById('hello-friend');
const WELLCOME_BACK = document.getElementById('welcome-back');
const CREATE_ACCOUNT = document.getElementById('create-account');
const BLOCK_RIGHT = document.getElementById('block-right');
const BLOCK_LEFT = document.getElementById('block-left');
const SCREEN_WIDTH = window.innerWidth;
let position = null;
let moveSize = null;
WELLCOME_BACK.style.left = '0px';
SIGN_IN.style.left = '0px';
let moveElement = null;

if(SCREEN_WIDTH >= 2000) {
    position = 768;
    moveSize = 768;
    HELLO_FRIEND.style.left = '768px';
    BLOCK_RIGHT.style.left = '1536px';
    CREATE_ACCOUNT.style.left = '1536px';
    BLOCK_LEFT.style.left = '-768px';
}

if(SCREEN_WIDTH >= 1300 && SCREEN_WIDTH < 2000) {
    position = 614;
    moveSize = 614;
    HELLO_FRIEND.style.left = '614px';
    BLOCK_RIGHT.style.left = '1228px';
    CREATE_ACCOUNT.style.left = '1228px';
    BLOCK_LEFT.style.left = '-614px';
}

if(SCREEN_WIDTH >= 800 && SCREEN_WIDTH < 1300) {
    position = 368;
    moveSize = 368;
    HELLO_FRIEND.style.left = '368px';
    BLOCK_RIGHT.style.left = '736px';
    CREATE_ACCOUNT.style.left = '736px';
    BLOCK_LEFT.style.left = '-368px';
}

function signUp() {
    if(SCREEN_WIDTH >= 800) {
        moveElement = setInterval(() => {
            if(position <= 0) {
                clearInterval(moveElement);
                moveElement = null;
            } else {
                position -=4;
                CREATE_ACCOUNT.style.left = position + moveSize + 'px';
                SIGN_IN.style.left = position - moveSize + 'px';
            }
        }, 1);
    } else{
        return;
    }
};

function signIn() {
    if(SCREEN_WIDTH >= 800) {
        moveElement = setInterval(() => {
            if(position >= moveSize) {
                clearInterval(moveElement);
                moveElement = null;
            } else {
                position +=4;
                CREATE_ACCOUNT.style.left = position + moveSize + 'px';
                SIGN_IN.style.left = position - moveSize + 'px';
            }
        }, 1);
    } else {
        return;
    }
};

console.log(SCREEN_WIDTH);