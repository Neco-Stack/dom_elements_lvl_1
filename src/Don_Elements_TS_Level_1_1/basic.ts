// // TODO wir typisieren zunächst die notwendigen HTML elemente 
// const inputElement = document.querySelector('#inputText') as HTMLInputElement;
// const btnElement = document.querySelector('#button') as HTMLInputElement;
// const listElement = document.querySelector ('#myList') as HTMLUListElement; 
// // ? wir schreiben die funktion zum hinzufügen eines elements zur liste 
// function addItem(): void {
//     const inputValue: string = inputElement.value;

//     if (inputValue !== ''){
//         // ein neues li wird erstellt
//         const listItem = document.createElement ('li')
//         listItem.textContent = inputValue;
//         listElement.appendChild(listItem);
//         inputElement.value = ''; 
//     }
// }
// btnElement.addEventListener('click', addItem)
// // TODO die liste funktioniert, jetzt bauen wir noch ein event.listener für die enter eingabe ein und der user kann eingaben machen ohne den button zu drücken 
// // ? hier beginnt die zweite aufgabe dom_elements_lvl_1
// const elements = document.querySelectorAll('.example');
// const buttonElement = document.querySelector('button.example') as HTMLButtonElement;
// function getRandomColor () {
//     const colors = ['red', 'blue', 'green']; 
//     return colors [Math.floor(Math.random()* colors.length)];
// }
// function changeBackgroundColor ():void {
//     const newColor: string = getRandomColor();
//     for (let i: number = 0; i<elements.length; i++){
//         (elements[i] as HTMLElement).style.backgroundColor = newColor;
// }
// }
// buttonElement.addEventListener('click', changeBackgroundColor);
const deleteBtn = document.getElementById("removeBtn") as HTMLButtonElement; 
const select = document.getElementById ("farbeAuswahlen") as HTMLSelectElement; 

deleteBtn.addEventListener('click', (event) => {
    event.preventDefault()
    if (select.options.length > 0){
        const selectedIndex = select.selectedIndex;
        select.remove(selectedIndex)
    }
})



