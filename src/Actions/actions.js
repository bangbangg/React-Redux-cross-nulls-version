import {CHANGE_FIRST,CHANGE_SECOND,FF,FS,FT,SF,SS,ST,TF,TS,TT} from './types'



export const changeFirst = (player1) => {
  return {
    type:CHANGE_FIRST,
    player1,
  }
}

export const changeSecond = (player2) => {
  return {
    type:CHANGE_SECOND,
    player2,
  }
}

export const ff = (count) => {
  return {
    type: FF,
    count,
  }
}

export const fs = (count) => {
  return {
    type: FS,
    count,
  }
}

export const ft = (count) => {
  return {
    type: FT,
    count,
  }
}

export const sf = (count) => {
  return {
    type: SF,
    count,
  }
}

export const ss = (count) => {
  return {
    type: SS,
    count,
  }
}

export const st = (count) => {
  return {
    type: ST,
    count,
  }
}

export const tf = (count) => {
  return {
    type: TF,
    count,
  }
}

export const ts = (count) => {
  return {
    type: TS,
    count,
  }
}

export const tt = (count) => {
  return {
    type: TT,
    count,
  }
}