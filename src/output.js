const { fetch } = window.__TAURI__.http

const outputBody = document.querySelector(".output-body")
const baseLog = document.getElementById("output-log")
const baseWarn = document.getElementById("output-warn")

const clearButton = document.querySelector(".clear-button")
const outputPrintsText = document.querySelector(".output-prints").children[1]
const outputWarningsText = document.querySelector(".output-warnings").children[1]

baseLog.remove()
baseWarn.remove()

let warnCount = 0
let printCount = 0

const sanitize = (input) => {
    input = input.replace(/&/g, '&amp;')
    input = input.replace(/</g, '&lt;')
    input = input.replace(/>/g, '&gt;')

    return input
}

const print = (message, messageType) => {
    if(messageType == "print"){
        const newLog = baseLog.cloneNode(true)
        
        newLog.children[1].innerHTML = sanitize(message)
        outputBody.appendChild(newLog)

        printCount++
    }else if(messageType == "warning"){
        const newWarn = baseWarn.cloneNode(true)
        
        newWarn.children[1].innerHTML = sanitize(message)
        outputBody.appendChild(newWarn)

        warnCount++
    }else{
        print(`unknown message type, ${messageType}`, "warning")
    }

    outputBody.innerHTML += "<br>"
}

outputPrintsText.innerHTML = printCount
outputWarningsText.innerHTML = warnCount

clearButton.onclick = () => {
    outputBody.innerHTML = ""
    printCount = 0
    warnCount = 0

    outputPrintsText.innerHTML = printCount
    outputWarningsText.innerHTML = warnCount
}

let fails = 2
const recursive = async () => {
    try{
        const data = await fetch("http://127.0.0.1:58280/read-message-queue")

        data.data.forEach(item => {
            print(item[0], item[1])
        })

        outputPrintsText.innerHTML = printCount
        outputWarningsText.innerHTML = warnCount
    }catch(e){
        fails++
        print(`failed to check for new output messages! (retrying in ${fails * 1.5} seconds) (is mushyhax running?)`, "warning")
        setTimeout(recursive, fails * 1500)

        outputPrintsText.innerHTML = printCount
        outputWarningsText.innerHTML = warnCount
        return
    }

    setTimeout(recursive, 100);
}

recursive()