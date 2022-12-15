import s from "./Filter.module.css";

const Filter = ({ productsFilter, handleFilterChange }) => {
  return (
    <div className={s.container}>
      <ul className={s.list}>
        <li className={s.item}>
          <input
            className={s.input}
            name="filter"
            value="apple"
            type="checkbox"
            id="apple"
            checked={productsFilter.includes("apple")}
            onChange={handleFilterChange}
          />
          <label className={s.label} htmlFor="apple">
            Apple
          </label>
        </li>
        <li className={s.item}>
          <input
            className={s.input}
            name="filter"
            value="xiaomi"
            type="checkbox"
            id="xiaomi"
            checked={productsFilter.includes("xiaomi")}
            onChange={handleFilterChange}
          />
          <label className={s.label} htmlFor="xiaomi">
            Xiaomi
          </label>
        </li>
        <li className={s.item}>
          <input
            className={s.input}
            name="filter"
            value="samsung"
            type="checkbox"
            id="samsung"
            checked={productsFilter.includes("samsung")}
            onChange={handleFilterChange}
          />
          <label className={s.label} htmlFor="samsung">
            Samsung
          </label>
        </li>
        <li className={s.item}>
          <input
            className={s.input}
            name="filter"
            value="zte"
            type="checkbox"
            id="zte"
            checked={productsFilter.includes("zte")}
            onChange={handleFilterChange}
          />
          <label className={s.label} htmlFor="zte">
            Zte
          </label>
        </li>
        <li className={s.item}>
          <input
            className={s.input}
            name="filter"
            value="huawei"
            type="checkbox"
            id="huawei"
            checked={productsFilter.includes("huawei")}
            onChange={handleFilterChange}
          />
          <label className={s.label} htmlFor="huawei">
            Huawei
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Filter;
