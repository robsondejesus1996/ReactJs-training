/* eslint-disable react/prop-types */
import styles from "./Avatar.module.css";



export function Avatar({ hasBorder= true, src}) {


  return (
    <img
      // eslint-disable-next-line react/prop-types
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
}
