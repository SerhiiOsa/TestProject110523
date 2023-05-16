const SIGN_IN = document.getElementById('sign-in-form');
const HELLO_FRIEND = document.getElementById('hello-friend');
const WELLCOME_BACK = document.getElementById('welcome-back');
const CREATE_ACCOUNT = document.getElementById('create-account');
const BLOCK_RIGHT = document.getElementById('block-right');
const BLOCK_LEFT = document.getElementById('block-left');
let SCREEN_WIDTH = window.innerWidth;
let position = null;
let moveSize = null;
let moveElement = null;
let visibleElement = SIGN_IN;

if(SCREEN_WIDTH >= 2000) {
    position = 768;
    moveSize = 768;
    HELLO_FRIEND.style.left = '768px';
    BLOCK_RIGHT.style.left = '1536px';
    CREATE_ACCOUNT.style.left = '1536px';
    BLOCK_LEFT.style.left = '-768px';
    SIGN_IN.style.top = '0px';
    CREATE_ACCOUNT.style.top = '0px';
    WELLCOME_BACK.style.left = '0px';
    SIGN_IN.style.left = '0px';
}

if(SCREEN_WIDTH >= 1600 && SCREEN_WIDTH < 2000) {
    position = 614;
    moveSize = 614;
    HELLO_FRIEND.style.left = '614px';
    BLOCK_RIGHT.style.left = '1228px';
    CREATE_ACCOUNT.style.left = '1228px';
    BLOCK_LEFT.style.left = '-614px';
    SIGN_IN.style.top = '0px';
    CREATE_ACCOUNT.style.top = '0px';
    WELLCOME_BACK.style.left = '0px';
    SIGN_IN.style.left = '0px';
}

if(SCREEN_WIDTH >= 1100 && SCREEN_WIDTH < 1600) {
    position = 478;
    moveSize = 478;
    HELLO_FRIEND.style.left = '478px';
    BLOCK_RIGHT.style.left = '956px';
    CREATE_ACCOUNT.style.left = '956px';
    BLOCK_LEFT.style.left = '-478px';
    SIGN_IN.style.top = '0px';
    CREATE_ACCOUNT.style.top = '0px';
    WELLCOME_BACK.style.left = '0px';
    SIGN_IN.style.left = '0px';
}

if(SCREEN_WIDTH >= 800 && SCREEN_WIDTH < 1100) {
    position = 368;
    moveSize = 368;
    HELLO_FRIEND.style.left = '368px';
    BLOCK_RIGHT.style.left = '736px';
    CREATE_ACCOUNT.style.left = '736px';
    BLOCK_LEFT.style.left = '-368px';
    SIGN_IN.style.top = '0px';
    CREATE_ACCOUNT.style.top = '0px';
    WELLCOME_BACK.style.left = '0px';
    SIGN_IN.style.left = '0px';
}

if(SCREEN_WIDTH >= 541 && SCREEN_WIDTH < 800) {
    position = 0;
    moveSize = 541;
    HELLO_FRIEND.style.left = '0px';
    WELLCOME_BACK.style.left = '-541px';
    SIGN_IN.style.top = '336px';
    CREATE_ACCOUNT.style.top = '336px';
    BLOCK_RIGHT.style.left = '541px';
    CREATE_ACCOUNT.style.left = '541px';
    BLOCK_LEFT.style.left = '-541px';
}

if(SCREEN_WIDTH < 541) {
    position = 0;
    moveSize = 360;
    HELLO_FRIEND.style.left = '0px';
    WELLCOME_BACK.style.left = '-360px';
    SIGN_IN.style.top = '260px';
    CREATE_ACCOUNT.style.top = '260px';
    BLOCK_RIGHT.style.left = '360px';
    CREATE_ACCOUNT.style.left = '360px';
    BLOCK_LEFT.style.left = '-360px';
}

window.addEventListener("resize", function() {
    SCREEN_WIDTH = window.innerWidth;
    if(SCREEN_WIDTH >= 2000) {
        moveSize = 768;
        HELLO_FRIEND.style.left = '768px';
        BLOCK_RIGHT.style.left = '1536px';
        BLOCK_LEFT.style.left = '-768px';
        SIGN_IN.style.top = '0px';
        CREATE_ACCOUNT.style.top = '0px';
        WELLCOME_BACK.style.left = '0px';
        if(visibleElement === CREATE_ACCOUNT) {
            position = 0;
            CREATE_ACCOUNT.style.left = '768px';
            SIGN_IN.style.left = '-768px';
        } 
        if(visibleElement === SIGN_IN) {
            position = 768;
            CREATE_ACCOUNT.style.left = '1536px';
            SIGN_IN.style.left = '0px';
        }
    }
    
    if(SCREEN_WIDTH >= 1600 && SCREEN_WIDTH < 2000) {
        moveSize = 614;
        HELLO_FRIEND.style.left = '614px';
        BLOCK_RIGHT.style.left = '1228px';
        BLOCK_LEFT.style.left = '-614px';
        SIGN_IN.style.top = '0px';
        CREATE_ACCOUNT.style.top = '0px';
        WELLCOME_BACK.style.left = '0px';
        if(visibleElement === CREATE_ACCOUNT) {
            position = 0;
            CREATE_ACCOUNT.style.left = '614px';
            SIGN_IN.style.left = '-614px';
        } 
        if(visibleElement === SIGN_IN) {
            position = 614;
            CREATE_ACCOUNT.style.left = '1228px';
            SIGN_IN.style.left = '0px';
        }
    }
    
    if(SCREEN_WIDTH >= 1100 && SCREEN_WIDTH < 1600) {
        moveSize = 478;
        HELLO_FRIEND.style.left = '478px';
        BLOCK_RIGHT.style.left = '956px';
        BLOCK_LEFT.style.left = '-478px';
        SIGN_IN.style.top = '0px';
        CREATE_ACCOUNT.style.top = '0px';
        WELLCOME_BACK.style.left = '0px';
        if(visibleElement === CREATE_ACCOUNT) {
            position = 0;
            CREATE_ACCOUNT.style.left = '478px';
            SIGN_IN.style.left = '-478px';
        } 
        if(visibleElement === SIGN_IN) {
            position = 478;
            CREATE_ACCOUNT.style.left = '956px';
            SIGN_IN.style.left = '0px';
        }
    }
    
    if(SCREEN_WIDTH >= 800 && SCREEN_WIDTH < 1100) {
        moveSize = 368;
        HELLO_FRIEND.style.left = '368px';
        BLOCK_RIGHT.style.left = '736px';
        BLOCK_LEFT.style.left = '-368px';
        SIGN_IN.style.top = '0px';
        CREATE_ACCOUNT.style.top = '0px';
        WELLCOME_BACK.style.left = '0px';
        if(visibleElement === CREATE_ACCOUNT) {
            position = 0;
            CREATE_ACCOUNT.style.left = '368px';
            SIGN_IN.style.left = '-368px';
        } 
        if(visibleElement === SIGN_IN) {
            position = 368;
            CREATE_ACCOUNT.style.left = '736px';
            SIGN_IN.style.left = '0px';
        }
    }

    if(SCREEN_WIDTH >= 541 && SCREEN_WIDTH < 800) {
        position = 0;
        moveSize = 541;
        SIGN_IN.style.top = '336px';
        CREATE_ACCOUNT.style.top = '336px';
        BLOCK_RIGHT.style.left = '541px';
        BLOCK_LEFT.style.left = '-541px';
        if(visibleElement === CREATE_ACCOUNT) {
            position = 541;
            SIGN_IN.style.left = '-541px';
            CREATE_ACCOUNT.style.left = '0px';
            HELLO_FRIEND.style.left = '1082px';
            WELLCOME_BACK.style.left = '0px';
        }
        if(visibleElement === SIGN_IN) {
            position = 0;
            SIGN_IN.style.left = '0px';
            CREATE_ACCOUNT.style.left = '541px';
            HELLO_FRIEND.style.left = '0px';
            WELLCOME_BACK.style.left = '-541px';
        }
    }

    if(SCREEN_WIDTH < 541) {
        position = 0;
        moveSize = 360;
        HELLO_FRIEND.style.left = '0px';
        WELLCOME_BACK.style.left = '-360px';
        SIGN_IN.style.top = '260px';
        CREATE_ACCOUNT.style.top = '260px';
        BLOCK_RIGHT.style.left = '360px';
        CREATE_ACCOUNT.style.left = '360px';
        BLOCK_LEFT.style.left = '-360px';
        if(visibleElement === CREATE_ACCOUNT) {
            position = 360;
            SIGN_IN.style.left = '--360px';
            CREATE_ACCOUNT.style.left = '0px';
            HELLO_FRIEND.style.left = '720px';
            WELLCOME_BACK.style.left = '0px';
        }
        if(visibleElement === SIGN_IN) {
            position = 0;
            SIGN_IN.style.left = '0px';
            CREATE_ACCOUNT.style.left = '360px';
            HELLO_FRIEND.style.left = '0px';
            WELLCOME_BACK.style.left = '-360px';
        }
    }
});

function signUp() {
    visibleElement = CREATE_ACCOUNT;
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
        moveElement = setInterval(() => {
            if(position >= moveSize) {
                clearInterval(moveElement);
                moveElement = null;
            } else {
                position +=2;
                HELLO_FRIEND.style.left = position + 'px';
                WELLCOME_BACK.style.left = position - moveSize + 'px';
                CREATE_ACCOUNT.style.left = moveSize - position + 'px';
                SIGN_IN.style.left = - position + 'px';
            }
        }, 1);
    }
};

function signIn() {
    visibleElement = SIGN_IN;
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
    } else{
        moveElement = setInterval(() => {
            if(position <= 0) {
                clearInterval(moveElement);
                moveElement = null;
            } else {
                position -=2;
                HELLO_FRIEND.style.left = position + 'px';
                WELLCOME_BACK.style.left = position - moveSize + 'px';
                CREATE_ACCOUNT.style.left = moveSize - position + 'px';
                SIGN_IN.style.left = - position + 'px';
            }
        }, 1);
    }
};

console.log(SCREEN_WIDTH);