import './style.css'

// erste Aufgabe gecodet von steffen
// const inputItem = document.querySelector('#inputText') as HTMLInputElement;
// // wir nehmen input weil wir mit dem value arbeiten und damit ist es verfügbar 
// const button = document.querySelector ('button') as HTMLButtonElement;
// const list = document.querySelector ('#mylist') as HTMLElement;

// button?.addEventListener('click', () => {
//     console.log("click");

//     if (inputItem.value.trim() === "") {
//         console.log("bitte gib etwas ein");
        
//     }
//     const createListItem = document.createElement('li');
//     console.log((createListItem));
//     createListItem.textContent = inputItem.value.trim();
//     console.log(createListItem);
    
//     list.appendChild(createListItem);
//     inputItem.value = ""
// })

// elvis operator ersetzt IF also wenn bzw. ob der BTN geklickt wurde 
// bei jedem klick wird das element erstellt 
// dann wird bei jedem klick der value noch danach gezogen 
//
// zweite Aufgabe LVL 1 vorgecodet von steffen 
const exampleClass = document.querySelector('.example') as NodeListOf<HTMLElement>;
console.log(exampleClass);
// nodelist ist aufgebaut wie ein array 
// warum nur array like und nicht ein array 
// weil wir nicht alle methoden zur verfügung haben wie bei arrays 
exampleClass[4]?.addEventListener("click", () => {
    for (let i= 0; i <exampleClass.length; i++){
        exampleClass[i].style.backgroundColor = "black";
    }
})


