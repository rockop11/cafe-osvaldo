import React from "react";
import styles from "./productList.module.css";

const index = ({ title, itemsList }) => {
  return (
    <div className={styles.productListContainer}>
      <h3 className={styles.productListTitle}>{title}</h3>

      <ul>
        <li>
          {itemsList.map((item, i) => {
            return (
              <div key={i} className={styles.itemsContainer}>
                <p className={styles.productTitle}>{item.product}</p>{" "}
                <p className={styles.productPrice}>${item.price}</p>
              </div>
            );
          })}
        </li>
      </ul>
    </div>
  );
};

export default index;
