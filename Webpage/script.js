

// generate qr code and set link
const qrcode = document.querySelectorAll('.qrcode')

qrcode.forEach(qr => {
    const link = qr.parentNode.querySelector('.qrcode-link')
    if (link == null) return

    qr.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${link.textContent}`
    qr.onclick = () => show_qrcode_popup(qr.src)

    const icon = qr.parentNode.querySelector('.social-icon')
    if (icon == null) return
    // icon.onclick = () => window.location.href = link.textContent
    icon.onclick = () => window.open(link.textContent, '_blank');
});

const popup_qrcode = document.querySelector('.qrcode-modal')

function show_qrcode_popup(src) {
    const img = popup_qrcode.querySelector('img')
    img.src = src
    popup_qrcode.style.display = 'flex'

    let size = Math.min(window.innerHeight, window.innerWidth)
    size = Math.min(size, 300)
    img.height = size
    img.width = size
}

popup_qrcode.onclick = () => {
    popup_qrcode.style.display = 'none'
}

