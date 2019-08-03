import styles from './index.css'
import {Provider} from 'react-redux'
import store from '../store/store'
function BasicLayout(props) {
  return (
    <Provider store = {store}>
      <div className = {styles.body}>
        {props.children}
      </div>
    </Provider> 
  );
}
export default BasicLayout;
