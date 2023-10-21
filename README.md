# mediumclapper.js aka spreadtheclap.js

Did you know you can clap for someone’s content up to 50 times on Medium?

Well, you can.

<img src="https://miro.medium.com/v2/resize:fit:1400/1*-ZfzOpFN9Bb7_aJMICow8A.png" width="600" />

And to protect you from carpal tunnel syndrome, I packaged that behavior into a little extension for Chrome.

**It works like this:**

Wanna give it a little test-drive without committing?

Open up your developer tools (right-click & choose inspect)

<img src="https://miro.medium.com/v2/resize:fit:2000/1*b5LwHOfF61dJHVT0D2XxLg.png" width="600" />

**Then, navigate to the “console”:**

<img src="https://miro.medium.com/v2/resize:fit:2000/1*lVkDNoxANrtOj_g2yQDhvg.png" width="600" />

And if you have a bunch of caca (that’s Spanish for 💩) in your Console you can click the little 🚫 icon to clear it:

<img src="https://miro.medium.com/v2/resize:fit:2000/1*rWbZxnFqAdE1ycH6INTTTg.png" width="600" />

**Then:**

1.  copy the JavaScript code below
2.  paste it into the Console area
3.  press the Return key

_and spread the clap!_

(Scroll up to the top of this article before you press enter if you want to see it in action)

```js
let clapButton = document.querySelector('button\[data-testid="headerClapButton"\]');  
if (clapButton) {  
    const events = \['mousedown', 'mouseup', 'click'\];  
  
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
```

Want the extension?
===================

I submitted the extension to the Chrome app store and it’s pending approval as of this writing…

![](https://miro.medium.com/v2/resize:fit:5992/1*ljyORvkq4Q5nYLJAUL6qtQ.png)

But if you’re too excited to sit around when you could be clappin’ it up — you’re welcome to grab the bootleg here:

👉 [https://serp.ly/@serp/serp-clapper-medium](https://serp.ly/@serp/serp-clapper-medium)

That’s all for now!

_Cheers,_

_Stay funky 🦩,_

_& spread the Clap 👏_
