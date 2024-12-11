// «б»н«д«  «бќ«’… »«бё’’
const stories = [
    {
        name: "бнжднб гн”н",
        start: "жхбѕ гн”н Ён гѕнд… —ж”«—нж »«б√—ћд нд° жж«ће  Ќѕн«  ’Ќн… Ён ЎЁжб е.",
        challenge: " г  ‘ќн’е »дё’ е—гжд «бдгж° жбг  яд √”— е ё«ѕ—… Џбм  Ќгб  ябЁ… Џб«ће.",
        turningPoint: "«б Ќё »√я«ѕнгн… »—‘бжд… «б н ѕЏг  Џб«ће жёѕг  бе «б»н∆… «бгЋ«бн… б Ўжн— ге«—« е.",
        result: "√’»Ќ √Ќѕ √Џўг б«Џ»н я—… «бёѕг Ён «б «—нќ."
    },
    {
        name: "гЌгѕ ’б«Ќ",
        start: "д‘√ Ён ё—н… ’џн—… »г’— жя«д нёЎЏ ”«Џ«  Ўжнб… ббж’жб ≈бм «б ѕ—н».",
        challenge: "дё’ «бгж«—ѕ ж«б≈гя«дн«  Ён »н∆ е «бгЌбн….",
        turningPoint: "«д÷г«ге бд«ѕн «бгё«жбжд «бЏ—»° ЌнЋ «я ”» «бЁ—’… ббўеж— √г«г «б√дѕн… «бя»—м.",
        result: "√’»Ќ ж«Ќѕр« гд √Ё÷б «бб«Џ»нд Ён «бЏ«бг."
    },
    {
        name: "я—н” н«дж —жд«бѕж",
        start: "жхбѕ Ён г«ѕн—« »«б»— џ«б жд‘√ Ён »н∆… г ж«÷Џ….",
        challenge: " —я √”— е Ён ”д ’џн—… бб«д÷г«г ≈бм √я«ѕнгн… ”»ж— ндџ б‘»жд….",
        turningPoint: "«д ё«бе ≈бм г«д‘” — нжд«н ѕ ЌнЋ Ўж— ге«—« е ж√’»Ќ дћгр« Џ«бгнр«.",
        result: "ж«Ќѕ гд √Џўг «бб«Џ»нд Ён  «—нќ я—… «бёѕг."
    },
    {
        name: "“нд «бѕнд “нѕ«д",
        start: "д‘√ Ён гѕнд… г—”нбн« »Ё—д”« ж”Ў Џ«∆б… г ж«÷Џ….",
        challenge: "ж«ће ’Џж»«  я»н—… б≈Ћ»«  дЁ”е яб«Џ» Ён »ѕ«н« е.",
        turningPoint: "«д÷г«ге ≈бм Ё—нё нжЁд ж” «б≈нЎ«бн ЌнЋ √ўе— ге«—« е Џбм «бг” жм «бЏ«бгн.",
        result: "√’»Ќ √”Ўж—… яб«Џ» жгѕ—»."
    }
];

// ѕ«б… б≈÷«Ё… «бё’’
function addStory(story) {
    const container = document.getElementById('stories-container');

    const storyDiv = document.createElement('div');
    storyDiv.classList.add('story');
    
    storyDiv.innerHTML = `
        <h2>${story.name}</h2>
        <p><strong>«б»ѕ«н…:</strong> ${story.start}</p>
        <p><strong>«б Ќѕн:</strong> ${story.challenge}</p>
        <p><strong>«бдёЎ… «бЁ«’б…:</strong> ${story.turningPoint}</p>
        <p><strong>«бд нћ…:</strong> ${story.result}</p>
    `;

    container.appendChild(storyDiv);
}

// ≈÷«Ё… «бё’’ ≈бм «б’ЁЌ…
stories.forEach(story => {
    addStory(story);
});

// ≈÷«Ё… «бд’ «б —жнћн
const promoDiv = document.createElement('div');
promoDiv.classList.add('promo');
promoDiv.innerHTML = `
    <h3>яг« д—м Ён ё’… гн”н° «б ѕ—н» «б’ЌнЌ ж«б»н∆… «бѕ«Џг… н’дЏ«д «бЁ—ё.</h3>
    <p>Ён √я«ѕнгн… <strong>FIRST ACADEMY</strong>° дƒгд »√д яб б«Џ» бѕне Ё—’… бняжд дћгр«.</p>
`;
document.getElementById('stories-container').appendChild(promoDiv);

// ≈÷«Ё… «бд’ «б —жнћн «б√ќн—
const promoDiv2 = document.createElement('div');
promoDiv2.classList.add('promo');
promoDiv2.innerHTML = `
    <h3>«»ѕ√ гџ«г— я «бя—жн… «бнжг гЏ √я«ѕнгн… FIRST ACADEMY!</h3>
    <p>«д÷г ≈бнд« «б¬д б яжд ћ“Ѕр« гд Џ«∆б… «бдћ«Ќ. <a href="https://wa.me/201090603880">”ћб ед«</a></p>
`;
document.getElementById('stories-container').appendChild(promoDiv2);

document.body.addEventListener('click', function(e) {
    var ball = document.createElement('div');
    ball.classList.add('ball');
    ball.style.left = `${e.clientX - 15}px`;  // б Ќѕнѕ гжёЏ «бя—… »д«Ѕр Џбм гя«д «б÷џЎ
    ball.style.top = `${e.clientY - 15}px`;   // б Ќѕнѕ гжёЏ «бя—… »д«Ѕр Џбм гя«д «б÷џЎ
    document.body.appendChild(ball);

    // ≈“«б… «бя—… »Џѕ √д  д ен гд «бЌ—я…
    setTimeout(() => {
        ball.remove();
    }, 2000);  // жё  «б≈“«б… »Џѕ 2 Ћ«дн…
});

