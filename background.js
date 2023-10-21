chrome.action.onClicked.addListener((tab) => {
    if (chrome.scripting) {
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            files: ['content.js']
        });
    } else {
        console.error("Chrome scripting API not available");
    }
});
