import React, {useContext} from "react";
import classNames from 'classnames';
import {MenuContext} from "./menu"
export interface MenuItemProps {
  className?:string;
  index?:number;
  children?:React.ReactNode;
  disabled?:boolean;
  style?:React.CSSProperties
}
const Menu : React.FC<MenuItemProps> = function (props:MenuItemProps) {
  const {disabled, style, className, index, children} = props;
  const context = useContext(MenuContext);

  const classes = classNames('zlh-menu-item', className, {
    'is-disabled':  disabled,
    'isActive': context.index === index
  });
  const HandleClick = () => {
    if (context.onSelect && !disabled && index) {
      context.onSelect(index);
    }
  }
  return (
    <li className={classes} style={style} onClick={HandleClick}>
      {children}
    </li>
  )
}
export default Menu;