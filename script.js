function errorMessages() {
    const msgs = [
        "That's not a number, that's a cry for help.",
        "NaN NaN NaN NaN Batman! (Please enter a real number).",
        "I asked for a number, not a keyboard smash.",
        "Even my imaginary friend thinks that's an imaginary number.",
        "Error: User logic not found. Please type a digit.",
        "Did your cat step on the keyboard?",
        "Look, I'm just a script, but even I know that's not a valid integer.",
        "Please enter a number that exists in this dimension.",
        "Math.exe has stopped working.",
        "I would process that, but I just don't want to.",
        "Are we inventing new math now?",
        "Task failed. Please try hitting numbers instead of hopes and dreams.",
        "My developer didn't pay me enough to calculate that.",
        "Hold on, let me ask my abacus... nope, it says that's invalid."
    ]

    return msgs[Math.floor(Math.random() * msgs.length)];
}

function randomTitle() {
    const titles = [
        "Call #9X-XXX-XXXX",
        "Brand new Toothpaste X!",
        "You've Won a Free Cursor!",
        "Hot Singles In Your Local Array",
        "Download More RAM Here",
        "ERROR 404: Motivation Not Found",
        "Dentists HATE This One Weird Trick",
        "Is Your Refrigerator Running?",
        "URGENT: Your CSS is broken",
        "Congratulations! You are the 1,000,000th visitor!",
        "One Weird Loop To Rule Them All",
        "Free V-Bucks Inside (Real)"
    ];

    return titles[Math.floor(Math.random() * titles.length)];
}

function randomText() {
    const texts = [
        "New popup Windows created when page refreshes!",
        "I was bored so i created this website.",
        "It's not a bug, it's an undocumented feature.",
        "Warning: May contain traces of spaghetti code.",
        "Click here to claim your virtual high-five.",
        "I learned CSS just to fail at centering this div.",
        "Don't look behind you. Just kidding, it's just your shadow.",
        "If you are reading this, you owe me a coffee.",
        "Are you sure you want to close this window? Wait, you can't.",
        "My code works, I have no idea why.",
        "Please do not feed the algorithms.",
        "Task failed successfully."
    ];

    return texts[Math.floor(Math.random() * texts.length)];
}

function createPopupWindows(NoW) {
    if (typeof(NoW) !== "number") {
        console.error(NoW + " value received: Expected type 'number'");
    } else {
        console.log("[Note]: Creating windows");
        const content = document.getElementById('content');
        for (let i = 0; i < NoW; i++) {
            // x + y values for position, rgb for container color
            const x = Math.floor(Math.random() * 100);
            const y = Math.floor(Math.random() * 100);
            const r = Math.floor(Math.random() * 255);
            const g = Math.floor(Math.random() * 255);
            const b = Math.floor(Math.random() * 255);
            
            // Parent Container For Div
            const parentContainer = document.createElement('div');
            parentContainer.setAttribute('id', `container-${i+1}`);
            parentContainer.setAttribute('class', 'container-window');

            // styling
            parentContainer.style.left = `${x}%`;
            parentContainer.style.top = `${y}%`;
            parentContainer.style.transform = `translate(-${x}%,-${y}%)`;
            parentContainer.style.width = "15vw";

            // random colors
            parentContainer.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

            // Insert content to container div
            parentContainer.innerHTML = `
                <div class="close-bar">
                    <button onclick="closeWindow(this)" id="close-btn">X</button>
                </div>
                <div class="text-styling">
                    <h1>${randomTitle()}</h1>
                    <p>${randomText()}</p>
                </div>`

            // Append content
            content.appendChild(parentContainer);
        }
    }
    
}

function playAudio() {
    const audio = new Audio("audio/pop.mp3");
    audio.play();
}
        
function closeWindow(element) {
    playAudio();
    const parent = element.parentNode.parentNode; // window div
    const parentOfParent = parent.parentNode; // content div
    
    parentOfParent.removeChild(parent); // Remove window div
    const count = document.querySelectorAll('#content div').length; // check count
    if (count === 0) {
        console.log("[Note]: Closed all windows, showing congrats message");
        showCongrats()
        document.getElementById("finishedSubmit").addEventListener('click', function() {
        const NoWval = parseInt(document.getElementById('NoW').value);
        try {
            if (NoWval < 1 || !NoWval) {
                const errorMsg = document.getElementById('errorMsg');
                errorMsg.textContent = errorMessages();
                errorMsg.style.display = "block";
                console.error("[Error]: Failed to create windows value of NoWval: " + NoWval);
            } else {
                console.log("[Note]: Creating " + NoWval + " windows");
                createPopupWindows(NoWval);
                parentOfParent.removeChild(document.getElementById('finished'));

            }
        } catch(error) {
            console.log("error: " + error);
        }
        });
    } else {
        console.log("Closing window.");
    }
}

// Show when count == 0
function showCongrats() {
    const content = document.getElementById('content');
    const container = document.createElement('div');
    container.setAttribute('class', 'finished');
    container.setAttribute('id', 'finished');
    container.innerHTML = `
        <!-- Show when finished -->
        <h1>Congrats!</h1>
        <p>You have closed all popup windows!</p>
        <p>You can now regenerate many popup windows as you wish</p>
        <div class="form">
            <input id="NoW" type="number" placeholder="Enter number">
            <button id="finishedSubmit">Regenerate!</button>
        </div>
        <p id="errorMsg" style="display: none;"></p>`;
    content.appendChild(container);
}

createPopupWindows(100);