$(function (){

let countCasa;
let countTrabajo;
let countGeneral;

fetchTask();

    $('#formitnew').submit(function(e) {
        const postData = {
            text: $('#itnew').val(),
            list: $('#slist').val(),
            completed: 'true'
        };

        $.post('taskAdd.php', postData, function (response) {
            fetchTask()
            console.log('Se obtiene algo?')
            $('#formitnew').trigger('reset');
        });
        e.preventDefault();
    });


        function fetchTask() {
        $.ajax({
            url: 'taskList.php',
            type: 'GET',
            cache: false,
            success: function (response) {
            let tasks = JSON.parse(response);
            let countCasa = (tasks.filter(x => x.list == 'Casa')).length;
            let countTrabajo = (tasks.filter(x => x.list == 'Trabajo')).length;
            let countGeneral = (tasks.filter(x => x.list == 'General')).length;
            
                let temp =
        `
                    <div class="list">
                <h3>Casa</h3> 
                <p>${countCasa} tareas</p>           
            </div>
                <div class="list">
                <h3>General</h3> 
                <p>${countGeneral} tareas</p>           
            </div>
                <div class="list">
                <h3>Trabajo</h3> 
                <p>${countTrabajo} tareas</p>           
            </div>
        `;
    $('#lists').html(temp);

            let template = '';
            tasks.forEach(task => {
                template += 
                 `
            <div class="todo" data-id="${task.id}">
                <label class="checkbox-container">${task.text}
                    <input class="chk" type="checkbox" ${(task.completed=='true')? 'checked="checked"': ''} />
                    <span class="checkmark"></span>
                </label>
                <button class="task-delete"></button>
            </div>
        `
            });
            $('#todos').html(template);
            }
        });
    };
    let pedo = 7;
    


    $(document).on('click', '.chk', function () {
        let elemento = $(this)[0].parentElement.parentElement;
        let idEl = $(elemento).attr('data-id');
        console.log(idEl);
        $.post('taskEdit.php', {"idEl": idEl}, function (response) {
                console.log(response);
           });                
            // });
     });

        $(document).on('click', '.task-delete', function () {
    let element = $(this)[0].parentElement;
    let idPE = $(element).attr('data-id');
     console.log(idPE);
    $.post('taskDelete.php', {idPE}, function (response) {
       fetchTask();
    });
    });

 


// (function(){
//     const input = document.querySelector('#itnew');
//     const form = document.querySelector('#formitnew');
//     const selectList = document.querySelector('#slist');
//     const listsContainer = document.querySelector('#lists');

//     let todos = []
//     let lists = [
//         {id: uuidv4(), text: 'General', count: 0},
//         {id: uuidv4(), text: 'Casa', count: 0},
//         {id: uuidv4(), text: 'Trabajo', count: 0}
//     ];

//     document.addEventListener('DOMContentLoaded', e =>{
//         refreshUI();
//         lists.forEach( list =>{
//             selectList.innerHTML += `<option value=${list.id}>${list.text}</option>`
//         })
//     });

//     function Todo(id, text, list, completed){
//         return {id: id, text: text, list: list, completed: completed}
//     }

//     form.addEventListener('submit', e =>{
//         e.preventDefault();
//         const text = input.value.trim();
//         const listId = selectList.value;

//         if (text === '') return false;

//         const newTodo = new Todo(uuidv4(), text, listId, false);

//         todos.push(newTodo);
//         input.value = '';

//         refreshUI();
//     });

//     function refreshUI(){
//         renderTodos();
//         renderLists();
//     }

//     function renderTodos(){
//         const todosContainer = document.querySelector('#todos');
//         todosContainer.innerHTML = '';

//         todos.forEach(todo => {
//             todosContainer.innerHTML += renderTodo(todo);
//         });

//         document.querySelectorAll('.todo label input').forEach(item => {
//             item.addEventListener('click', e => {
//                 const id = e.target.parentNode.parentNode.getAttribute('data-id');
//                 const index = todos.findIndex(todo => todo.id === id);

//                 todos[index].completed = !todos[index].completed
//             })
//         })

//         document.querySelectorAll('.todo button').forEach(item => {
//             item.addEventListener('click', e => {
//                 const id = e.target.parentNode.getAttribute('data-id');
//                 const obj = getItemAndIndex(todos, {id: id});

//                 todos.splice(obj.index, 1);

//                 renderLists();
//                 renderTodos();
//             })
//         });
//     }


//     function getItemAndIndex(arr, obj){
//         let i = 0;
//         const key = Object.keys(obj);
//         const value = obj[key];
//         for (i = 0; i < arr.length; i++){
//             if(arr[i][key] === value){
//                 return { index: i, item:arr[i]};
//             }
//         }
//     }
    
//     function renderTodo(todo){
//         return `
//             <div class="todo" data-id="${todo.id}">
//                 <label class="checkbox-container">${todo.text}
//                     <input type="checkbox" ${(todo.completed)? 'checked="checked"': ''} />
//                     <span class="checkmark"></span>
//                 </label>
//                 <button></button>
//             </div>
//         `;
//     }

//     function renderLists(){
//         lists.forEach(list => {
//             list.count = 0;
//         });

//         todos.forEach(todo =>{
//             lists.forEach(list =>{
//                 if(todo.list === list.id){
//                     list.count++;
//                 }
//             })
//         });

//         listsContainer.innerHTML = '';
//         lists.forEach(list =>{
//             listsContainer.innerHTML += renderListItem(list);
//         });
//     }

//     function renderListItem(list){
//         return `
//             <div class="list">
//                 <h3>${list.text}</h3> 
//                 <p>${list.count} tareas</p>           
//             </div>
//         `;
//     }
//     function uuidv4(){
//         return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
//             var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r& 0x3 | 0x8);
//             return v.toString(16);
//         });
//     }

// })();

});