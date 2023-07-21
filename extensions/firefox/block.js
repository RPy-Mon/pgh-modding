browser.webRequest.onBeforeRequest.addListener(
    () => {
        return {cancel: true}
    },
    {urls: ["https://static.porngameshub.com/combiner/protection.js"]},
    ["blocking"]
)