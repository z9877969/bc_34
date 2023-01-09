import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "../../redux/counter/counterSlice";
import s from "./Counter.module.scss";

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Counter</h1>
      <p className={s.count}>{counter}</p>
      <div className={s.btnsWrapper}>
        <button
          className={s.btn}
          type="button"
          onClick={() => dispatch(decrement(20))}
        >
          -
        </button>
        <button
          className={s.btn}
          type="button"
          onClick={() => dispatch(reset())}
        >
          100
        </button>
        <button
          className={s.btn}
          type="button"
          onClick={() => dispatch(increment(15))}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
