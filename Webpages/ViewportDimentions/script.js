// themes
const themes = [
    'light', 'dark',
]

const theme_toggle = document.getElementById('theme-toggle')
theme_toggle.addEventListener('change', () => {
    const currentTheme = themes.find(theme => document.documentElement.classList.contains(theme))
    const currentIndex = themes.indexOf(currentTheme)
    const nextIndex = (currentIndex + 1) % themes.length
    setTheme(themes[nextIndex])

    theme_toggle.nextElementSibling.classList.remove('themeChange-label')
    void theme_toggle.offsetWidth
    theme_toggle.nextElementSibling.classList.add('themeChange-label')
})

function setTheme(theme) {
    themes.forEach(current => {
        document.documentElement.classList.remove(current)

    })
    document.documentElement.classList.add(theme)
}



// generate apps

// icons: https://www.flaticon.com/
const apps = [
    { name: 'vk', nickname: 'desinev', link: 'https://vk.com/desinev', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968835.png' },
    { name: 'telegram', nickname: 'DesineV', link: 'https://t.me/DesineV', icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111646.png' },
    { name: 'discord', nickname: 'desine_', link: 'https://discord.gg/5dhcH8xQRB', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968756.png' },
    { name: 'youtube', nickname: 'desine_', link: 'https://www.youtube.com/@desine_', icon: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png' },
    { name: 'steam', nickname: 'Desine', link: 'https://steamcommunity.com/profiles/76561198355622108/', icon: 'https://cdn-icons-png.flaticon.com/512/15466/15466225.png' },
    { name: 'github', nickname: 'Desine', link: 'https://github.com/Desine', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968896.png' }
];



const business_card_ul = document.querySelector('.business-card ul')

apps.forEach(app => {
    const icon = document.createElement('img')
    icon.alt = 'app-icon'
    icon.src = app.icon
    icon.onclick = () => window.open(app.link, '_blank')

    const nickname = document.createElement('p')
    nickname.innerHTML = app.nickname
    nickname.addEventListener('click', () => {
        const textarea = document.createElement('textarea')
        textarea.value = app.nickname
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)

        showMessageModal("Скопировано: " + app.nickname)
    })

    const qrcode = document.createElement('img')
    setQrcode(qrcode, app.link)

    const li = document.createElement('li')
    li.appendChild(icon)
    li.appendChild(nickname)
    li.appendChild(qrcode)

    setTimeout(() => {
        business_card_ul.appendChild(li)
        li.classList.add('arrive')
    }, (apps.indexOf(app)) * 110)
});
setTimeout(() => {
    document.querySelector('.name').parentNode.classList.add('arrive')
}, 0)


function setQrcode(img, src) {
    img.alt = 'QR-code'
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${src}`
    img.onclick = () => showQrcodePopup(img.src)
}

setQrcode(document.querySelector('.name').nextElementSibling, window.location.href)


// qrcode modal
const popup_qrcode = document.querySelector('.qrcode-modal')

function showQrcodePopup(src) {
    popup_qrcode.firstElementChild.src = src
    popup_qrcode.style.display = ''
}

popup_qrcode.onclick = () => {
    popup_qrcode.style.display = 'none'
}

// message modal
const message_modal = document.querySelector('.message-modal')
function showMessageModal(message) {
    message_modal.textContent = message

    message_modal.style.animationName = ''
    void message_modal.offsetHeight
    message_modal.style.animationName = 'message-modal'
}