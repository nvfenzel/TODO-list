$(function (){

fetchTask();

    $('#formitnew').submit(function(e) {
        const postData = {
            text: $('#itnew').val(),
            list: $('#slist').val(),
            completed: 'false'
        };

        $.post('taskAdd.php', postData, function (response) {
            fetchTask()
            console.log(response)
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

    $(document).on('click', '.chk', function () {
        let elemento = $(this)[0].parentElement.parentElement;
        let idEl = $(elemento).attr('data-id');
        console.log(idEl);
        $.post('taskEdit.php', {"idEl": idEl}, function (response) {
                console.log(response);
           });                
     });

        $(document).on('click', '.task-delete', function () {
    let element = $(this)[0].parentElement;
    let idPE = $(element).attr('data-id');
     console.log(idPE);
    $.post('taskDelete.php', {idPE}, function (response) {
       fetchTask();
    });
    });
});
