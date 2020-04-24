import React from "react";
import classNames from 'classnames';
export enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}
export enum ButtonType {
  Primary = 'primary',
  Danger = 'danger',
  Default = 'default',
  Link = 'link',
}
export interface BaseButtonProps {
  className?:string;
  disabled?:boolean;
  size?:ButtonSize;
  btnType?:ButtonType;
  children:React.ReactNode;
  href?:string
}
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;
//Partial 蒋必须属性转换为可选属性
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
const Button : React.FC<ButtonProps> = function Button (props:ButtonProps) {
  const {btnType, disabled, size, children, className, href, ...restprops} = props;
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]:btnType,
    [`btn-${size}`]:size,
    'disabled': (btnType === ButtonType.Link) && disabled
  });
  if (btnType === ButtonType.Link && href) {
    return (
      <a className={classes} {...restprops} href={href}>
        {children}
      </a>
    )
  } else {
    return (
      <button className={classes} {...restprops} disabled={disabled}>
        {children}
      </button>
    );
  }
}
Button.defaultProps = {
  disabled:false,
  btnType:ButtonType.Default
}

export default Button;