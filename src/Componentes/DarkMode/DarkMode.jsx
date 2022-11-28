import React from 'react'
import '../../App.css'
import Button from '../Button/Button';

function DarkMode(props) {
  return (
   <span><Button estilo= 'buttonDark'> <div onClick={props.onClick} className={props.estilo} id= {props.id}>DarkMode</div></Button></span>
  )
}

export default DarkMode;