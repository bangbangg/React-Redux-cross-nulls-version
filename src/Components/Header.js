import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { changeFirst,changeSecond } from '../Actions/actions';



export const Header = () => {
  const dispatch = useDispatch();
  const clickCount = useSelector(state=> state.app.count )
  const nickName1 = useSelector(state=> state.header.player_1 )
  const nickName2 = useSelector(state=> state.header.player_2 )

  const [player1, setPlayer1] = useState("X")
  const [player2, setPlayer2] = useState("O")

  let choise = 
  (clickCount===9? "Ходы закончились" : 
  clickCount%2 ===0 || clickCount ===0 ? `Твой ход : ${nickName1}` : `Твой ход : ${nickName2}`);

  
  
  return (
    <div>
      <div className = "mini_container">
        <div className = "name_changer">
          <input 
            type="text" 
            className = "input" 
            placeholder = "Change your name"   
            onChange = {ev=>{setPlayer1(ev.target.value)}}
          />
          <button className = "btn" onClick= {()=>dispatch(changeFirst(player1))}>
            OK
          </button>
        </div>

        <div className = "name_changer">
          <input 
            type="text" 
            className = "input" 
            placeholder = "Change your name" 
            onChange = {ev=>{setPlayer2(ev.target.value)}}
          />
          <button className = "btn" onClick= {()=>dispatch(changeSecond(player2))}>
            OK
          </button>
        </div>
      </div>

      <div className = "mini_container">
        <span className = "desc">Player 1: {nickName1}</span>
        <span className = "desc">Player 2:{nickName2}</span>
      </div>

      <div className = "mini_container">
        <span className = "desc img_container1"></span>
        <span className = "desc img_container2"></span>
      </div>
      <div className = "mini_container2">
        <span> {choise} </span>
      </div>
    </div>
  )
}


