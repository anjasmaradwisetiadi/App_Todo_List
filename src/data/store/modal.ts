import {typeToggle} from '../../domain/domain'

export const modalReusable = {
    state:{
        height: 0,
        width: 0,
        modal:false,
        stateModeEditAdd:'add',
        idEditCard:'',
        indexCard:0
    },

    mutations:{
        setToggleModal(state:any,payload:typeToggle){
            state.modal=payload.toggleModal;
            state.stateModeEditAdd=payload.stateMode;
            state.idEditCard=payload.id;
            state.indexCard=payload.index;
          },

        setHandleRisize(state:any, payload:any) {
            state.width = payload.width;
            state.height = payload.height;
        },
        setCloseModal(state:any,payload:any){
            state.modal=payload;
        },
    },
    getters:{
        getModeEditAdd:(state:any):string=>{
            return state.stateModeEditAdd
        },

        getToggleModal:(state:any):boolean=>{
            return state.modal
        },

        widthModal:(state:any):number=>{
            return state.width
        },
        heightModal:(state:any):number=>{
            return state.height
        },
        getIdEditCard:(state:any):string=>{
            return state.idEditCard
        },
        getIndexCard:(state:any):number=>{
            return state.indexCard
        }
        
    },

}