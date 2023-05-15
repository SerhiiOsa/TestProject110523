const SIGN_IN = document.getElementById('sign-in-form');
        const HELLO_FRIEND = document.getElementById('hello-friend');
        const WELLCOME_BACK = document.getElementById('welcome-back');
        const CREATE_ACCOUNT = document.getElementById('create-account');
        const BLOCK_RIGHT = document.getElementById('block-right');
        const BLOCK_LEFT = document.getElementById('block-left');
        let position = 768;
        HELLO_FRIEND.style.left = '768px';
        WELLCOME_BACK.style.left = '0px';
        BLOCK_RIGHT.style.left = '1536px';
        CREATE_ACCOUNT.style.left = '1536px';
        BLOCK_LEFT.style.left = '-768px';
        SIGN_IN.style.left = '0px';

        let moveElement = null;

        function signUp() {
            let moveElement = setInterval(() => {
                if(position === 0) {
                    clearInterval(moveElement);
                    moveElement = null;
                } else {
                    position -=4;
                    CREATE_ACCOUNT.style.left = position + 768 + 'px';
                    SIGN_IN.style.left = position - 768 + 'px';
                }
            }, 1);
        };

        function signIn() {
            let moveElement = setInterval(() => {
                if(position === 768) {
                    clearInterval(moveElement);
                    moveElement = null;
                } else {
                    position +=4;
                    CREATE_ACCOUNT.style.left = position + 768 + 'px';
                    SIGN_IN.style.left = position - 768 + 'px';
                }
            }, 1);
        };