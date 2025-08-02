
let addtask = document.querySelector('#addtask')
let inputtask = document.querySelector('#inputtask')
let inputspace = document.querySelector('#inputspace')

let denybtn = document.querySelector('#denybtn')
let Confirmbtn = document.querySelector('#Confirmbtn')

let tasks = document.querySelector('.tasks')

taskspace = false

TDL = []


let showspace = () => {
    if (taskspace == false) {
        taskspace = true
        inputspace.classList.remove('d-none')
        inputspace.classList.add('d-flex')
        addtask.innerText = 'close'
    } else {
        taskspace = false
        inputspace.classList.remove('d-flex')
        inputspace.classList.add('d-none')
        addtask.innerText = 'Add Task +'
    }
}

let showtasklist = () => {
    tasks.innerHTML = ''
    TDL.forEach((el, index) => {
        tasks.innerHTML += `
                        <div class="to-do d-flex justify-content-between col-12 p-3">
                        <div class="d-flex align-items-center gap-2 overflow-hidden">
                        <button class="remove mb-2" onclick="remove(${index})">X</button>
                    <h3>${el.text}</h3>
                    </div>
                    <label class="cyber-checkbox">
                        <input type="checkbox" ${el.done ? 'checked' : ''} onclick="checkchange(${index})" />
                        <span class="cyber-checkbox__mark">
                            <div class="cyber-checkbox__box">
                                <svg class="cyber-checkbox__check" viewBox="0 0 12 10">
                                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                </svg>
                            </div>
                            <div class="cyber-checkbox__effects">
                                <div class="cyber-checkbox__spark"></div>
                                <div class="cyber-checkbox__spark"></div>
                                <div class="cyber-checkbox__spark"></div>
                                <div class="cyber-checkbox__spark"></div>
                            </div>
                            <div class="cyber-checkbox__particles">
                                <div class="particle-1"></div>
                                <div class="particle-2"></div>
                                <div class="particle-3"></div>
                                <div class="particle-4"></div>
                                <div class="particle-5"></div>
                                <div class="particle-6"></div>
                                <div class="particle-7"></div>
                                <div class="particle-8"></div>
                            </div>
                        </span>
                    </label>

                </div>
                
`
    })

}

let added = () => {
    let taskText = inputtask.value;
    let taskobj = { text: taskText }
    if (taskText === "") {
        alert("You can't enter empty value");
        
    }else{
    TDL.push(taskobj)
    inputtask.value = ""
    showtasklist()
    }

};

let remove = (index) => {
    let confirmation = confirm('Are you sure you want to delete this?')
    if (confirmation == true) {
        TDL.splice(index, 1)
        showtasklist()
    } else {
        showtasklist()
    }

}

let denied = () => {
    inputtask.value = ""
    showspace()
}

let checkchange = (index) => {
    if (TDL[index].done === true) {
        TDL[index].done = false
    } else {
        TDL[index].done = true
    }
}


