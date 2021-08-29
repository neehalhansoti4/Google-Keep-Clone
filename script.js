const addButton = document.querySelector('#add');

const updateLSData = () => {
    const textAreaData = document.querySelectorAll('textarea');
    const notes = [];

    // notes.add(value);
    console.log(textAreaData);
    textAreaData.forEach((note) => {
        return notes.push(note.value);
    })

    localStorage.setItem('notes', JSON.stringify(notes));
}



const addNewNote = (text = '') => {
    
    const note = document.createElement('div');
    note.classList.add('note');

    const htmlData = `
    
    <div class="operation">
            <button class="edit"><i class="fas fa-edit"></i>    </button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="main ${text ? "" : "hidden"} "></div>
    <textarea class=" ${text ? "hidden" : ""}"></textarea>`;


    note.insertAdjacentHTML('afterbegin',htmlData);


    // getting the referecnes

    const editButton = note.querySelector('.edit');
    const delButton = note.querySelector('.delete');
    const mainDiv = note.querySelector('.main');
    const textArea = note.querySelector('textarea');

    // for deleting the node


    delButton.addEventListener('click', () => {
        note.remove();
        updateLSData();
    });

    // toggle using edit icon

    textArea.value = text;
    mainDiv.innerHTML = text;


    editButton.addEventListener('click', () => {

        mainDiv.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    
    });

    textArea.addEventListener('change', (event) => {

        const value = event.target.value;

        // console.log(value);

        mainDiv.innerHTML = value;

        updateLSData();

    });
        

        document.body.appendChild(note);
        // appends: it appends last child of the node
}


// getting data back from localStorage

const notes = JSON.parse(localStorage.getItem('notes'));

if(notes){notes.forEach((note) => addNewNote(note))};

addButton.addEventListener('click', () => addNewNote());