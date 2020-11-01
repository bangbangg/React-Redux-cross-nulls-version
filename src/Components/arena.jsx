import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ff, fs, ft, sf, ss, st, tf, ts, tt } from '../Actions/actions';

export const Arena = () => {

  const clickCount = useSelector((state) => state.app.count);

  const F1 = useSelector((state) => state.app.ff);
  const F2 = useSelector((state) => state.app.fs);
  const F3 = useSelector((state) => state.app.ft);
  const S1 = useSelector((state) => state.app.sf);
  const S2 = useSelector((state) => state.app.ss);
  const S3 = useSelector((state) => state.app.st);
  const T1 = useSelector((state) => state.app.tf);
  const T2 = useSelector((state) => state.app.ts);
  const T3 = useSelector((state) => state.app.tt);
   

  function Winner() {
    const combos = [
      [F1, F2, F3],
      [S1, S2, S3],
      [T1, T2, T3],
      [F1, S1, T1],
      [F2, S2, T2],
      [F3, S3, T3],
      [F1, S2, T3],
      [F3, S2, T1],
    ];

    for (const comb of combos) {
      if (
        comb[0] === comb[1] && comb[1] === comb[2] && comb[0] !== ''
      ) { return `Победили "${comb[0]}"`; }
    } return '';
  }

  const result = Winner();

  const dispatch = useDispatch();

  function dell() {
    localStorage.setItem('reduxState', JSON.stringify({}));
    window.location.reload();
  }

  const toggle = (clickCount % 2 === 0 || clickCount === 0 ? 'X' : 'O');

  return (
    <div className="container">
      <div className="mini_container2 winner">{ result }</div>
      <table className="rows_columns">
        <tbody>
          <tr>
            <th className="th" onClick={() => dispatch(ff(toggle))}>{ F1 }</th>
            <th className="th" onClick={() => dispatch(fs(toggle))}>{ F2 }</th>
            <th className="th" onClick={() => dispatch(ft(toggle))}>{ F3 }</th>
          </tr>
          <tr>
            <th className="th" onClick={() => dispatch(sf(toggle))}>{ S1 }</th>
            <th className="th" onClick={() => dispatch(ss(toggle))}>{ S2 }</th>
            <th className="th" onClick={() => dispatch(st(toggle))}>{ S3 }</th>
          </tr>
          <tr>
            <th className="th" onClick={() => dispatch(tf(toggle))}>{ T1 }</th>
            <th className="th" onClick={() => dispatch(ts(toggle))}>{ T2 }</th>
            <th className="th" onClick={() => dispatch(tt(toggle))}>{ T3 }</th>
          </tr>
        </tbody>
      </table>
      <button onClick={() => dell()} className="ripple btn"> Start new game </button>
    </div>
  );
};
