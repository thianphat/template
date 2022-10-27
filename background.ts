console.log("Background Page")

chrome.tabs.onUpdated.addListener( (tabId, tab) => {
    if (tab.url && tab.url.includes("amazon.com/")) {
        const queryParameters = tab.url.split("?")[-1];
        // const urlParameters = new URLSearchParams(queryParameters);
        console.log("I'm on Amazon!")

        chrome.tabs.sendMessage(tabId, {
            type: "NEW",
            productId: queryParameters,
        })
    }
})