(() => {

    let amazon, amazonProduct;
    let currentProduct = ""

    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const {type, value, productId} = obj;

        if (type === "NEW") {
            currentProduct = productId;
        }

    })
})()