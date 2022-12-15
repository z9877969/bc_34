import clsx from "clsx";
import s from "./Container.module.scss";

const Container = ({ children, jc, display }) => {
  return (
    <div className={clsx(display && s[display], jc && s["jc-" + jc])}>
      {children}
    </div>
  );
};

export default Container;
