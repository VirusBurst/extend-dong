var button = document.getElementById('button')
var statusEl = document.getElementById('status')
var enabled

chrome.storage.sync.get(['disable'], function (options) {
    enabled = !options.disable
    execute()
})

function updateView() {
    if (!!enabled) {
        button.classList.add('enabled')
        statusEl.innerText = 'enabled'
    } else {
        button.classList.remove('enabled')
        statusEl.innerText = 'disabled'
    }
}

function execute() {
    updateView()

    button.onclick = function toggleStatus() {
        enabled = !enabled
        updateView()

        chrome.storage.sync.set({ disable: !enabled })
    }
}