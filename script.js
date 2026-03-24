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

function createPopupWindows() {
    console.log("Creating windows");
    const content = document.getElementById('content');
    for (let i = 0; i < 100; i++) {
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

function playAudio() {
    const audio = new Audio("audio/pop.mp3");
    audio.play();
}
        
function closeWindow(element) {
    playAudio();
    const parent = element.parentNode.parentNode;
    parent.style.display = "none";
}

createPopupWindows();