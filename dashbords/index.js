const btn = document.querySelectorAll('.btn li')

btn.forEach((bek) => {
    bek.addEventListener('click', function(){
        removeBtn()
        bek.classList.add('active');
    })
});

function removeBtn(){
    btn.forEach((bek) => {
        bek.classList.remove('active')
    })
}
const bek = document.querySelector('.container .bek')
const btnn = document.querySelector('.btnn');
btnn.addEventListener('click', function(){
    btnn.classList.toggle('bekkk');
    bek.classList.toggle('ol')
});

const knopka = document.querySelector('.knopka');
const bekk = document.querySelector('.bek');

knopka.addEventListener('click', function(){
    knopka.classList.toggle('ggg')
    bekk.classList.toggle('bos')
});