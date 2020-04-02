import React from 'react';
import Button, {ButtonType, ButtonSize} from "./components/Button/button";
function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Button btnType={ButtonType.Danger} size={ButtonSize.Large} disabled>button</Button>
        <hr/>

        <Button btnType={ButtonType.Primary} size={ButtonSize.Small} disabled>button</Button>        <hr/>

        <Button disabled>button</Button>
        <hr/>
        <Button btnType={ButtonType.Link} href={'https://www.baidu.cn'}  size={ButtonSize.Large}>button</Button>        <hr/>

        <Button btnType={ButtonType.Link} href={'https://www.baidu.cn'}  disabled size={ButtonSize.Large}>button</Button>

      </header>
    </div>
  );
}

export default App;
