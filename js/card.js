// cards html
azkar.forEach(zekr => {
    container.innerHTML += `
    <div class="card p-20 rad-6" data-repeat="${zekr.repeat}">
        <h3 class="m-none">${zekr.main}</h3>
        <p class="m-none txt">${zekr.info}</p>
        <p class="m-none txt repeat-text w-fit"></p>
        <div class="counter-holder m-c w-fit flex-align-c">
            <button class="taspeh">تكرار</button>
            <span class="num">0</span>
            <button class="reset">إعادة</button>
        </div>
    </div>
    `
})
