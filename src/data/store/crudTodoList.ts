import {typeCrudTodoList} from '../../domain/domain';

export const crudTodoList={
    state:{
        todoList:[
            {
                id:"1",
                title:'Title ToDo List',
                priorty:'secondary',
                time:"13 januari 2019",
                description:"harus mengerjakan task / ticket"
            }
        ],
        stateAdd:false
    },
    mutations:{
        addTodoList(state:any,payload:typeCrudTodoList){
            state.todoList.push(payload)
        },
        deleteTodoList(state:any,payload:string){
            state.todoList=state.todoList.filter((item:any) =>item.id != payload)
        },

        buttonAddTodoList(state:any,payload:any){
            state.stateAdd=payload
        }
    },
    getters:{
        getTodoList:(state:any)=>{
            return state.todoList
        },
        getStateAdd:(state: any)=>{
            return state.stateAdd
        }
    }
}