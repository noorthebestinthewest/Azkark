// #region darkmode
const toggle_checkbox = document.getElementById('theme-btn')
const current_theme = localStorage.getItem('theme') || 'light'
if (current_theme === 'dark') {
    document.body.classList.remove('light-mode')
    document.body.classList.add('dark-mode')
    toggle_checkbox.checked = true
} else {
    document.body.classList.add('light-mode')
    document.body.classList.remove('dark-mode')
    toggle_checkbox.checked = false
}

toggle_checkbox.addEventListener('change', () => {
    if (toggle_checkbox.checked) {
        document.body.classList.remove('light-mode')
        document.body.classList.add('dark-mode')
        localStorage.setItem('theme', 'dark')
    } else {
        document.body.classList.add('light-mode')
        document.body.classList.remove('dark-mode')
        localStorage.setItem('theme', 'light')
    }
})
// #endregion
// #region dropdown menu
const box = document.getElementById('box');
const cont = document.getElementById('cont');
const icon = document.getElementById('icon')
box.addEventListener('click', (e) => {
    e.stopPropagation();
    cont.classList.toggle('open');
    icon.classList.toggle('open');
});

document.addEventListener('click', (e) => {
    if (!cont.contains(e.target) && !box.contains(e.target)) {
        cont.classList.remove('open');
        icon.classList.remove('open');
    }
});
// #endregion
// #region taspe7 counter
const cards = document.querySelectorAll('.card')
cards.forEach(card => {
    let count = 0
    const num = card.querySelector(".num")
    const taspeh = card.querySelector(".taspeh")
    const reset = card.querySelector(".reset")
    const repeat = Number(card.dataset.repeat)
    const repeat_text = card.querySelector('.repeat-text')

    taspeh.addEventListener('click', () => {
        count = count + 1
        num.textContent = count
        if (count === repeat) {
            taspeh.disabled = true
            card.classList.toggle('done')
        }
    })
    reset.addEventListener('click', () => {
        count = 0
        num.textContent = count
        taspeh.disabled = false
        card.classList.remove('done')
    })

    repeat_text.textContent = `التكرار : ${repeat} مرات`
})
// #endregion
