// TODO wir typisieren zunächst die notwendigen HTML elemente 
const inputElement = document.querySelector('#inputText') as HTMLInputElement;
const buttonElement = document.querySelector('#button') as HTMLInputElement;
const listElement = document.querySelector ('#myList') as HTMLUListElement; 
// ? wir schreiben die funktion zum hinzufügen eines elements zur liste 
function addItem(): void {
    const inputValue: string = inputElement.value;

    if (inputValue !== ''){
        // ein neues li wird erstellt
        const listItem = document.createElement ('li')
        listItem.textContent = inputValue;
        listElement.appendChild(listItem);
        inputElement.value = ''; 
    }
}
buttonElement.addEventListener('click', addItem)
// TODO die liste funktioniert, jetzt bauen wir noch ein event.listener für die enter eingabe ein und der user kann eingaben machen ohne den button zu drücken 




