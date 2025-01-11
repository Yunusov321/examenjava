let a = Number(prompt("1 - raqamni kiriting"));
let b = prompt(`Tanlang \n 1)+ \n 2)/ \n 3)* \n 4)-`);
let c = Number(prompt("2 - raqamni kiriting"));

let d1 = document.querySelector('.d1');
let d2 = document.querySelector('.d2');
let d3 = document.querySelector('.d3');

d1.textContent = `${a}`
d3.textContent = `${c}`

let d22 = document.querySelector('.d22');
let d33 = document.querySelector('.d33');

if(b == "1"){
    d2.textContent = '+'
}else if(b == "2"){
    d2.textContent = '/'
}else if(b == "3"){
    d2.textContent = '*'
}else if(b == "4"){
    d2.textContent = '-'
}

d22.addEventListener("click", function(){
    if(b == "1"){
        d2.textContent = '+'
        d33.textContent = `Natija: ${a+c}`
    }else if(b == "2"){
        d2.textContent = '/'
        d33.textContent = `Natija: ${a/c}`
    }else if(b == "3"){
        d2.textContent = '*'
        d33.textContent = `Natija: ${a*c}`
    }else if(b == "4"){
        d2.textContent = '-'
        d33.textContent = `Natija: ${a-c}`
    }
    d33.classList.toggle("d333");
})