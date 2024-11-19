
import { AlertProps } from "../../types"
import styles from './Alert.module.css'
 
export default function Alert( {children}: AlertProps) {
  return (
    <div className={styles.alert}>{children}</div>
  )
}
