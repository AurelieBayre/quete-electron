// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const today = new Date()
const presentTime = today.toLocaleTimeString()

const displayTime = document.getElementById('displayTime')
displayTime.innerHTML = presentTime