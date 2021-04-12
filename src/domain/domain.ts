export class typeToggle{
    public toggleModal: boolean;
    public stateMode:string;
    public id:string|null;
    public index:number|null;

    constructor(toggleModal:boolean, stateMode:string, id:string, index:number){
        this.toggleModal=toggleModal;
        this.stateMode=stateMode;
        this.id=id;
        this.index=index;
    }
}

export class typeCrudTodoList{
    public id:string;
    public title: string;
    public priorty:string;
    public time:string;
    public description:string;

    constructor(id:string,title:string, priorty:string, time:string, description:string){
        this.id=id
        this.title=title;
        this.priorty=priorty;
        this.time=time;
        this.description=description;
    }
}
