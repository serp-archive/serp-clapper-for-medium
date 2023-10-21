let clapButton = document.querySelector('button[data-testid="headerClapButton"]');
if (clapButton) {
    const events = ['mousedown', 'mouseup', 'click'];

    async function performClap() {
        for (let i = 0; i < 50; i++) {
            events.forEach(eventType => {
                let event = new MouseEvent(eventType, {
                    'view': window,
                    'bubbles': true,
                    'cancelable': true
                });
                clapButton.dispatchEvent(event);
            });
            await new Promise(resolve => setTimeout(resolve, 10));  // Introducing a 10ms delay between claps
        }
        console.log("+50 Claps! Now, go join the SERP community!");
    }


    performClap();
} else {
    console.log("Clap button not found!");
}
