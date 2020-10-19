import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {ff,fs,ft,sf,ss,st,tf,ts,tt} from '../Actions/actions'

export const Arena = () => {

  const click_count = useSelector(state=> state.app.count );

  const f_1 = useSelector(state=> state.app.ff );
  const f_2 = useSelector(state=> state.app.fs );
  const f_3 = useSelector(state=> state.app.ft  );
  const s_1 = useSelector(state=> state.app.sf  );
  const s_2 = useSelector(state=> state.app.ss );
  const s_3 = useSelector(state=> state.app.st  );
  const t_1 = useSelector(state=> state.app.tf  );
  const t_2 = useSelector(state=> state.app.ts );
  const t_3 = useSelector(state=> state.app.tt  );
   

  function Winner() {
    let combos = [
      [f_1,f_2,f_3],
      [s_1,s_2,s_3],
      [t_1,t_2,t_3],
      [f_1,s_1,t_1],
      [f_2,s_2,t_2],
      [f_3,s_3,t_3],
      [f_1,s_2,t_3],
      [f_3,s_2,t_1],
    ]

    for (let comb of combos) {
      if(
        comb[0] === comb[1] && comb[1] === comb[2] && comb[0] !== ""
      ) { return `Победили "${comb[0]}"`}
    } return ""
  }

  let result = Winner();


  const dispatch = useDispatch();
  console.log(click_count)

  function dell() {
    localStorage.setItem('reduxState', JSON.stringify({}));
    window.location.reload()
  }

  let toggle = (click_count%2 ===0 || click_count ===0 ? "X" : "O");

  
  return (
    
    <div className = "container">
      <div className = "mini_container2 winner">{result}</div>
      <table className = "rows_columns" >
      <tbody>
        <tr>
          <th className = "th" onClick = {()=>dispatch(ff(toggle))}>{f_1}</th>
          <th className = "th" onClick = {()=>dispatch(fs(toggle))}>{f_2}</th>
          <th className = "th" onClick = {()=>dispatch(ft(toggle))}>{f_3}</th>
        </tr>
        <tr> 
          <th className = "th" onClick = {()=>dispatch(sf(toggle))}>{s_1}</th>
          <th className = "th" onClick = {()=>dispatch(ss(toggle))}>{s_2}</th>
          <th className = "th" onClick = {()=>dispatch(st(toggle))}>{s_3}</th>
        </tr>
        <tr>
          <th className = "th" onClick = {()=>dispatch(tf(toggle))}>{t_1}</th>
          <th className = "th" onClick = {()=>dispatch(ts(toggle))}>{t_2}</th>
          <th className = "th" onClick = {()=>dispatch(tt(toggle))}>{t_3}</th>
        </tr>
        </tbody>
      </table>
      <button onClick={()=>dell()} className='ripple btn '> Start new game </button>
    </div>

  )
}


