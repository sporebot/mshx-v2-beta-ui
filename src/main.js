const { fetch, Body } = window.__TAURI__.http
const { WebviewWindow } = window.__TAURI__.window
const { open, save } = window.__TAURI__.dialog
const { readBinaryFile, writeTextFile } = window.__TAURI__.fs
const mainWindow = WebviewWindow.getByLabel("main")

let outputWindow = new WebviewWindow("output", {
    url: "output.html",
    visible: false,
    title: "mushyhax² [beta] - Output",
    width: 400,
    height: 500
});

mainWindow.onCloseRequested(async (event) => {
    outputWindow.close()
})

const refreshOutput = () => {
    outputWindow = new WebviewWindow("output", {
        url: "output.html",
        visible: false,
        title: "mushyhax² [beta] - Output",
        width: 400,
        height: 500
    });

    outputWindow.once("tauri://error", console.log)
}

outputWindow.once('tauri://created', () => {
    outputWindow.onCloseRequested(async (event) => {
        setTimeout(refreshOutput, 50);
    });
});

outputWindow.once("tauri://error", console.log)

const tabHolder = document.querySelector(".tab-holder")
const baseTab = document.getElementById("tab-0")

baseTab.remove()

const tabs = {}
let selectedTab

const selectTab = (tab) => {
    if (selectedTab != tab && !tab.deleted) {
        selectedTab.element.classList.remove("tab-active")
        selectedTab = tab
        tab.element.classList.add("tab-active")

        window.editor.setValue(tab.contents)
    }
}

const createTab = (name, contents) => {
    const tab = {
        name: name,
        contents: contents
    }

    let count = 0
    let originalName = name
    while (tabs[name]) {
        count++

        name = originalName + ` (${count})`
    }

    const tabElement = baseTab.cloneNode(true)

    if (Object.keys(tabs).length <= 0) {
        selectedTab = tab
        window.editor.setValue(contents)
    } else {
        tabElement.classList.remove("tab-active")
    }

    tabElement.onclick = () => {
        selectTab(tab)
    }

    tabElement.children[0].innerHTML = name
    tabElement.children[1].onclick = () => {
        if (tabHolder.children.length > 1) {
            tabElement.remove()
            tab.deleted = true
            delete tabs[name]

            const newTabElement = tabHolder.children[tabHolder.children.length - 1]

            for (var key in tabs) {
                const newTab = tabs[key]

                console.log(key, newTab, newTabElement, newTab.element == newTabElement)
                if (newTab.element == newTabElement) {
                    selectTab(newTab)
                }
            }
        }
    }
    tabHolder.appendChild(tabElement)

    tab.element = tabElement
    tabs[name] = tab
    return tab
}

const newTabButton = document.getElementById("tab-button-new")
const outputButton = document.querySelector(".output-button")
const executeButton = document.querySelector(".run-button")
const saveAsButton = document.getElementById("save-file")
const openButton = document.getElementById("open-file")

outputButton.onclick = () => {
    outputWindow.show()
}

window.editorCreated = () => {
    createTab("main.lua", "local function getTruth()\n\treturn \"mushyhax on top\"\nend\n\nprint(getTruth())")

    window.editor.getModel().onDidChangeContent((e) => {
        if (selectedTab) {
            selectedTab.contents = window.editor.getValue()
        }
    })

    executeButton.onclick = () => {
        fetch("http://127.0.0.1:58280/add-to-queue", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: Body.text(window.editor.getValue())
        })
    }

    newTabButton.onclick = () => {
        selectTab(createTab(`untitled.lua`, "print(\"mushyhaxo on top!!\")"))
    }

    openButton.onclick = async () => {
        const selected = await open({
            multiple: true,
            filters: [{
                name: 'script',
                extensions: ['lua', 'luau']
            }]
        });

        const textDecoder = new TextDecoder("utf-8")

        if (Array.isArray(selected)) {
            selected.forEach(async path => {
                const script = textDecoder.decode(await readBinaryFile(path))
                const fileName = path.replace(/^.*[\\/]/, '')

                const tab = createTab(fileName, script)
                tab.file = path
                tab.fileName = fileName

                selectTab(tab)
            })
        }
    }

    saveAsButton.onclick = async () => {
        if (selectedTab) {
            const filePath = await save({
                filters: [{
                    name: "script",
                    extensions: ["lua"]
                }]
            });

            if(filePath){
                writeTextFile(filePath, selectedTab.contents)
            }
        }
    }
}