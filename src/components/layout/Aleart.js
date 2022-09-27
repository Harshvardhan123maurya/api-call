1,12 +1,14 @@
import React from 'react'
import React, { useContext } from 'react'
import AlertContext from '../../contexts/alert/alertContext';

const Alert = (props) => {
    if(props.alert === null){
const Alert = () => {
    const alertContext = useContext(AlertContext);
    if(alertContext.alert === null){
        return;
    }
  return (
    <div className={`alert alert-${props.alert.type}`}>
        <i className='fas fa-info-circle'></i> {props.alert.msg}
    <div className={`alert alert-${alertContext.alert.type}`}>
        <i className='fas fa-info-circle'></i> {alertContext.alert.msg}
    </div>
  )
}