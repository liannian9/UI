import React from "react";
import classNames from 'classnames';

export type AlertType = 'success' | 'warning' | 'danger' | 'default';
export interface AlertProps {
  type?:AlertType;
  canClose?:boolean;
  children?:any;
  className?:string;
  style?:React.CSSProperties
}

const Alert:React.FC<AlertProps> = (props:AlertProps) => {
  const {type, canClose, children, style, className} = props;
  const classes = classNames('zlh-alert', className, {
    [`alert-${type}`]:type
  })
  const closeAlert = (e:React.SyntheticEvent) => {
    let node = e.currentTarget.parentNode;
    node?.parentNode?.removeChild(node);
  }

    return (
    <div className={classes} style={style}>
      {children}
      {canClose && <span onClick={(e:React.SyntheticEvent) => closeAlert(e)}>关闭</span>}
    </div>
  );
}
Alert.defaultProps={
  canClose:true,
  type:'default'
}
export default Alert;