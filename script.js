$('document').ready(() => {

    // TIMING OUT ---------------------------------->
    function getMessage(msg) {
        console.log(msg);
    };
    getMessage('Scheisse!');

    setTimeout(() => {
        console.log('Que paso?');
    }, 500);

    function getWords(word) {
        setTimeout(() => {
            console.log(word[0]);
        });
        setTimeout(() => {
            console.log(word[3]);
        }, 3500);
        setTimeout(() => {
            console.log(word[2]);
        }, 2500);
        setTimeout(() => {
            console.log(word[1]);
        }, 1500);

    }
    getWords([':)', 'my', 'cat', 'farted']);

    function donezo(msg) {
        setTimeout(() => {
            console.log(msg);
        }, 5000);
    }
    donezo('El trabajo esta terminado.');

    // CALLBACKS AND RECURSION ---------------------------------->
    const countdown = (num, callback) => {
        setTimeout(() => {
            if (num > 0) {
                console.log(num);
                countdown(num - 1, callback);
            } else {
                callback();
            }
        }, 1000);
    };
    const callback = () => console.log('Done Done Dooooooone!');

    countdown(3, callback);

    // PROMISES, PROMISES ---------------------------------->

    const lunchTime = true;

    const orderMeSomeFood() {
        return new Promise((resolve, reject) => {
            
                if (lunchTime) {
                    lunch = 'Milk steak with a side of trash cake.';
                    drink = 'Nickolodeon Slime';
                    resolve(lunch, drink);
                } else {
                    console.log('false'); 
                }
            
        });
        
    };
    order()
        .then((a) => {
            console.log(a);
        }).catch((e) => {
            console.log(e);
        })
        // .then((a)) => {
        //     console.log
        // }, (err) => {

        // }
});