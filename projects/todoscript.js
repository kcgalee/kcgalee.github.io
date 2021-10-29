var app = new function() {
    this.ele=document.getElementById('tasks');
    this.tasks=[]

    //Create
    this.Add = function() {
        ele = document.getElementById('add-todo');
        var task=ele.value;
        if(task){
            this.tasks.push(task.trim());
            ele.value='';
            this.fetchAll();
        }
    };

    //Read
    this.fetchAll = function() {
        var data='';

        if(this.tasks.length>0){
            for(i=0;i<this.tasks.length;i++){
                data+='<tr>';
                data+='<td>'+(i+1)+'. '+this.tasks[i]+'</td/>';
                data+='<td><button onclick="app.Edit('+i+')" class="btn btn-warning">Edit</button></td>'
                data+='<td><button onclick="app.Delete('+i+')" class="btn btn-danger">Delete</button></td>'
                data+='</tr>'
            }
        }
        this.Count(this.tasks.length);
        return this.ele.innerHTML = data;
    };

    //Update
    this.Edit = function(item) {
        ele = document.getElementById('edit-todo');
        ele.value=this.tasks[item];
        document.getElementById('edit-box').style.display='block';
        self=this;

        document.getElementById('save-edit').onsubmit=function() {
            var task = ele.value;
            if(task){
                self.tasks.splice(item, 1, task.trim());
                self.fetchAll()
                closeInput();
            }
        }
    };

    //Delete
    this.Delete = function(item) {
        this.tasks.splice(item,1);
        this.fetchAll();
    };

    this.Count = function(data) {  
        var ele = document.getElementById('counter');
        var name = 'Tasks';
        if (data) {
            if (data==1){
                name='Task';
            }
            ele.innerHTML = data+' '+name;
        }
        else {
            ele.innerHTML = "No "+name;
        }
    };
}

app.fetchAll();

function closeInput() {
    document.getElementById('edit-box').style.display='none';
}