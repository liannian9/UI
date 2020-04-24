import React from 'react';
import Button, {ButtonType, ButtonSize} from "./components/Button/button";

function App() {
  const clickevent = {
    onClick:() => console.log('clickevent')
  }
  const handleChangeFile = (e:React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files)
  }
  return (
    <div className="App">
      <header className="App-header">
        <div {...clickevent}>clickevent</div>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Large} disabled>button</Button>
        <hr/>

        <Button btnType={ButtonType.Primary} size={ButtonSize.Small} disabled>button</Button>        <hr/>

        <Button disabled>button</Button>
        <hr/>
        <Button btnType={ButtonType.Link} href={'https://www.baidu.cn'}  target="_blank" size={ButtonSize.Large}>button</Button>        <hr/>

        <Button btnType={ButtonType.Link} href={'https://www.baidu.cn'}  disabled size={ButtonSize.Large}>button</Button>
        <input type="file" onChange={handleChangeFile}/>
      </header>
    </div>
  );
}

export default App;
