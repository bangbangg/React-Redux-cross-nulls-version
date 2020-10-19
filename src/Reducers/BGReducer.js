import {FF,FS,FT,SF,SS,ST,TF,TS,TT} from "../Actions/types"
const initialState = {
   count: 0,
   ff: '',
   fs: '',
   ft: '',
   sf: '',
   ss: '',
   st: '',
   tf: '',
   ts: '',
   tt: '',

  }
  
  export const BGReducer  = (state = initialState,action) => {
    switch (action.type){
      case FF:
        if (state.ff === "" ){
        return {...state, ff: action.count , count: state.count + 1}}
        else {return {...state, ff: state.ff , count: state.count}}
      case FS:
        if (state.fs === "" ){
          return {...state, fs: action.count , count: state.count + 1}}
          else {return {...state, fs: state.fs , count: state.count}}
      case FT:
        if (state.ft === "" ){
          return {...state, ft: action.count , count: state.count + 1}}
          else {return {...state, ft: state.ft , count: state.count}}     
      case SF:
        if (state.sf === "" ){
          return {...state, sf: action.count , count: state.count + 1}}
          else {return {...state, sf: state.sf , count: state.count}}
      case SS:
        if (state.ss === "" ){
          return {...state, ss: action.count , count: state.count + 1}}
          else {return {...state, ss: state.ss, count: state.count}}
      case ST:
        if (state.st === "" ){
          return {...state, st: action.count , count: state.count + 1}}
          else {return {...state, st: state.st , count: state.count}} 
      case TF:
        if (state.tf === "" ){
          return {...state, tf: action.count , count: state.count + 1}}
          else {return {...state, tf: state.tf , count: state.count}}
      case TS:
        if (state.ts === "" ){
          return {...state, ts: action.count , count: state.count + 1}}
          else {return {...state, ts: state.ts , count: state.count}}
      case TT:
        if (state.tt === "" ){
          return {...state, tt: action.count , count: state.count + 1}}
          else {return {...state, tt: state.tt , count: state.count}}  
      default : return state
    }
  }