import {injectable} from "tsyringe"

@injectable()
export class serviceModal{
    name:string="anjas mara dwi setiadi";
    width:number=0;
    heigth:number=0;
    stateModel:boolean=false;

    constructor(){
    };

    newValue(){
        console.log("nama saya = "+this.name)
    }

    toggleModel(value:boolean){
        this.stateModel=value
    }

    // kenapa tidak bisa function
    handleResize(){
        window.addEventListener('resize',this.size)
        // this.size()
    }

    size():number{
        this.heigth=window.innerHeight
        this.width = window.innerWidth

        return this.heigth, this.width
        // console.log("nilai height"+this.heigth)
    }

    // tidak bisa mennungkan ini untuk 
    // function size():void{

    // }
}