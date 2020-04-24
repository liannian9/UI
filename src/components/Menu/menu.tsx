import React, {useState} from "react";
import classNames from 'classnames';
import {MenuItemProps} from "./menuItem"
type modeType = 'horizontal' | 'vertical';
type SelectCallBack = (index:number) => void
export interface MenuProps {
  className?:string;
  defaultIndex?:number;
  mode?:modeType;
  children?:React.ReactNode;
  onSelect?:SelectCallBack;
  style?:React.CSSProperties
}
export interface contextProps {
  index:number,
  onSelect?:SelectCallBack;
}
export const MenuContext= React.createContext<contextProps>({index:0});

const Menu : React.FC<MenuProps> = function (props:MenuProps) {
  const {mode, style, className, defaultIndex, children, onSelect,  ...restprops} = props;
  const [currentIndex, setCurrentIndex] = useState(defaultIndex);
  const classes = classNames('zlh-menu', className, {
    'menu-vertical':  mode === 'vertical',

  });
  const handleClick = (index:number) => {
    setCurrentIndex(index);
    if (onSelect) {
      onSelect(index);
    }
  }
  const passContext:contextProps = {
    index:currentIndex || 0,
    onSelect:handleClick
  }
  console.log(restprops);
  const say = (e:React.SyntheticEvent, index:number) => {
    console.log(index)
  }
  return (
    <MenuContext.Provider value={passContext}>

    <ul className={classes} style={style}>
      {
        React.Children.map(children, (item, index) => {
          if (React.isValidElement(item)) {
            return React.cloneElement<MenuItemProps & {onClick:(e:React.SyntheticEvent) => void}>(item, {index, onClick:(e) => say(e, index)})
          }
          return item;
        })
      }
    </ul>
    </MenuContext.Provider>
  )
}
Menu.defaultProps = {
  mode:'horizontal',
  defaultIndex:0
}
export default Menu;