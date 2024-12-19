import styles from "./Display.module.css";

const Display=({displayValue})=>{
return <input class={styles.display} type='text' value={displayValue} readOnly />
}
export default Display;