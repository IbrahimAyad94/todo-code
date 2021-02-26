import React, {useContext} from 'react'
import AppContext from '../../../context/Context';

import css from './Counter.module.css';
const counter = () => {
    const appContext = useContext(AppContext);
    return (
          <div className={css.Counter}>
              <div className={[css.Count, css.Wait].join(' ')}><span>{appContext.inProgress}</span></div>
              <div className={[css.Count, css.Done].join(' ')}><span>{appContext.done}</span></div>
              {/* <div className={[css.Count, css.Delete].join(' ')}><span>{appContext.inProgress + appContext.done}</span></div> */}
          </div>
    )
}

export default counter
