// themes
const theme_toggle = document.getElementById('theme-toggle')
theme_toggle.addEventListener('change', () => {
    change_theme()
    theme_toggle.classList.remove('themeChange-input')
    theme_toggle.nextElementSibling.classList.remove('themeChange-label')
    void theme_toggle.parentNode.offsetWidth // Принудительная перерисовка, чтобы обновить анимацию
    theme_toggle.classList.add('themeChange-input');
    theme_toggle.nextElementSibling.classList.add('themeChange-label')
})

function change_theme() {
    document.documentElement.classList.remove('light', 'dark')
    if (theme_toggle.checked) document.documentElement.classList.add('dark')
    else document.documentElement.classList.add('light')
}

// set dark theme if it's late
const hours = new Date().getHours()
if (hours <= 3 || hours >= 21) {
    theme_toggle.checked = true
    change_theme()
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

    const qrcode = document.createElement('img')
    setQrcode(qrcode, app.link)

    const li = document.createElement('li')
    li.appendChild(icon)
    li.appendChild(nickname)
    li.appendChild(qrcode)
    business_card_ul.appendChild(li)

    setTimeout(() => {
        li.classList.add('arrive')
    }, (apps.indexOf(app) + 1) * 110)
});

setTimeout(() => {
    document.querySelector('.name').parentNode.classList.add('arrive')
}, 1)


function setQrcode(img, src) {
    img.alt = 'QR-code'
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${src}`
    img.onclick = () => show_qrcode_popup(img.src)
}

setQrcode(document.querySelector('.name').nextElementSibling, window.location.href)


// qrcode modal
const popup_qrcode = document.querySelector('.qrcode-modal')

popup_qrcode.onclick = () => {
    popup_qrcode.style.display = 'none'
    popup_qrcode.style.backgroundColor = 'rgba(0, 0, 0, 0)'
}

function show_qrcode_popup(src) {
    popup_qrcode.children[0].src = src
    popup_qrcode.style = ''

    popup_qrcode.style.backgroundColor = 'rgba(0, 0, 0, 0.95)'
}


