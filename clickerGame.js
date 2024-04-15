let counter = 0;

document.addEventListener("keydown", event => {
    if (event.code === "Space") {
        counter++;
        document.getElementById("myText").innerHTML = 'You have clicked ' + counter + ' times';
        if (counter >= 20) {
            document.getElementById("doge1").innerHTML = 'Keep working to impress master doge';
        }
        if (counter >= 50) {
            document.getElementById("doge2").innerHTML = 'Master doge is impressed';
        }
        if (counter >= 100) {
            document.getElementById("doge3").innerHTML = 'The almighty doge asks you:';
        }
        if (counter >= 125) {
            document.getElementById("doge4").innerHTML = 'Would you like to become a doge yourself, young student?';
            if (!document.getElementById("doge-button1")) {
                const button1 = document.createElement('button');
                button1.id = 'doge-button1';
                button1.innerHTML = 'Yes!';
                button1.onclick = function () {
                    document.getElementById("YesDoge1").innerHTML = 'Ok then, i must get a potion.';
                        if(counter >= 125) {
                            document.getElementById("YesDoge2").innerHTML = 'Master doge comes back with a purplish looking liquid in his hand.';
                            if (counter >= 125) {
                                if (counter >= 125 || button1.onclick == true) {
                                    document.getElementById("YesDoge3").innerHTML = 'Drink it, he says. Do you drink it?';
                                    button1.onclick = function () {
                                        document.getElementById("YesDoge4").innerHTML = 'Your body melts and starts to rearrange itself into the form of a doge, you can no longer talk and are stuck in this inferior form forever.';
                                        document.getElementById("TheEnd").innerHTML = 'THE END';
                                    }
                                }
                            } 
                        } 
                };
                document.body.appendChild(button1);
            }
            if (!document.getElementById("doge-button2")) {
                const button2 = document.createElement('button');
                button2.id = 'doge-button2';
                button2.innerHTML = 'No!';
                button2.onclick = function () {
                    document.getElementById("NoDoge1").innerHTML = 'Wrong answer, you are killed by master doge for being so uptight.';
                    document.getElementById("TheEnd").innerHTML = 'THE END';
                };
                document.body.appendChild(button2);
            }
        }
    }
});

