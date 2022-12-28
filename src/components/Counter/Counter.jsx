// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  counterDecrementAction,
  counterIncrementAction,
  counterReset,
} from "../../redux/counter/counterActions";
import s from "./Counter.module.scss";

// const actionDecrement = (step) => {
//   return {
//     type: "actionDecrement",
//     payload: step,
//   };
// };

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter);
  
  // const [step, setStep] = useState(10);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Counter</h1>
      <p className={s.count}>{counter}</p>
      <div className={s.btnsWrapper}>
        <button
          className={s.btn}
          type="button"
          onClick={() => dispatch(counterDecrementAction(20))}
        >
          -
        </button>
        <button
          className={s.btn}
          type="button"
          onClick={() => dispatch(counterReset())}
        >
          100
        </button>
        <button
          className={s.btn}
          type="button"
          onClick={() => dispatch(counterIncrementAction(15))}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
