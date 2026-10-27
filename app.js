const phases=[
{name:"Lua Nova",emoji:"🌑",description:"A face iluminada da Lua está voltada majoritariamente para longe da Terra, e sua face visível parece escura."},
{name:"Crescente Inicial",emoji:"🌒",description:"Uma pequena porção da face visível começa a ficar iluminada após a Lua Nova."},
{name:"Quarto Crescente",emoji:"🌓",description:"Aproximadamente metade do disco lunar visível está iluminada e a fração iluminada continua aumentando."},
{name:"Gibosa Crescente",emoji:"🌔",description:"Mais da metade do disco visível está iluminada, aproximando-se da Lua Cheia."},
{name:"Lua Cheia",emoji:"🌕",description:"A face da Lua voltada para a Terra parece quase totalmente iluminada."},
{name:"Gibosa Minguante",emoji:"🌖",description:"Depois da Lua Cheia, a fração iluminada observada da Terra começa a diminuir."},
{name:"Quarto Minguante",emoji:"🌗",description:"Aproximadamente metade do disco visível está iluminada, com a fração iluminada diminuindo."},
{name:"Minguante Final",emoji:"🌘",description:"Resta uma faixa iluminada que diminui até a próxima Lua Nova."}
];
const nav=document.querySelector("#phases");const moon=document.querySelector("#moon");const title=document.querySelector("#phase");const description=document.querySelector("#description");const count=document.querySelector("#count");
function selectPhase(index){const p=phases[index];moon.textContent=p.emoji;moon.setAttribute("aria-label",p.name);title.textContent=p.name;description.textContent=p.description;count.textContent=`${index+1} / ${phases.length}`;nav.querySelectorAll("button").forEach((button,i)=>button.setAttribute("aria-pressed",String(i===index)));}
phases.forEach((p,i)=>{const button=document.createElement("button");button.type="button";button.innerHTML=`<span class="emoji" aria-hidden="true">${p.emoji}</span>${p.name}`;button.addEventListener("click",()=>selectPhase(i));nav.appendChild(button);});selectPhase(0);
