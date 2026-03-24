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
                        <h1>Lorem ipsum</h1>
                        <p>Lorem ipsum</p>
                    </div>`

                // Append content
                content.appendChild(parentContainer);
            }
        }
        
        function closeWindow(element) {
            const parent = element.parentNode.parentNode;
            parent.style.display = "none";
        }

        createPopupWindows();