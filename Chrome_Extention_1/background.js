alert("Hi")

function MyGenericClick(info, tab){
    console.log("Clicked on page:", info, tab)
}

function MyImageClick(info, tab){
    console.log("clicked on image:", info, tab)
}

chrome.contextMenus.create({
    "title": "Share",
    "context": ["page"],
    "onClick": MyGenericClick
})

chrome.contextMenus.create({
    "title": "Share Image",
    "cotext": ["image"],
    "onClick": MyImageClick
})