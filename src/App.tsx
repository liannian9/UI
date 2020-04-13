import React from 'react';
import Button, {ButtonType, ButtonSize} from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import Alert from "./components/Alert/alert";
function App() {
  let {a, ...b} = {
    a:1,
    c:3,
    d:4
  }
  console.log(a, b);
  const say = () => {
    console.log('app')
  }
  return (
    <div className="App">
      <Alert className="alert-tset">
        <div onClick={say}>123</div>
      </Alert>
      <Menu onSelect={(index) => {console.log(index)}} defaultIndex={2}>
        <MenuItem disabled={true}>1</MenuItem>
        <MenuItem>2</MenuItem>
        <MenuItem>3</MenuItem>
        689
        <MenuItem>4</MenuItem>
        <p>5</p>
        <span>6</span>
        <div>7</div>
      </Menu>
      <header className="App-header">

        <Button btnType={ButtonType.Danger} size={ButtonSize.Large} disabled>button</Button>
        <hr/>

        <Button btnType={ButtonType.Primary} size={ButtonSize.Small} disabled>button</Button>        <hr/>

        <Button disabled>button</Button>
        <hr/>
        <Button btnType={ButtonType.Link} href={'https://www.baidu.cn'}  target="_blank" size={ButtonSize.Large}>button</Button>        <hr/>

        <Button btnType={ButtonType.Link} href={'https://www.baidu.cn'}  disabled size={ButtonSize.Large}>button</Button>

      </header>
    </div>
  );
}

export default App;
