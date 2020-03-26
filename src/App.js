import React from 'react';
import { Menu } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import './App.css';

const { SubMenu } = Menu;

function App() {
  return (
    <div className="App">
      <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <Menu.Item key="1">Option 1</Menu.Item>
        <SubMenu
          key="sub1"
          title={
            <span>
              <SettingOutlined />
              <span>Navigation Three</span>
            </span>
          }
        >
          <Menu.Item key="9">Option 9</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default App;






// class Sider extends React.Component {
//   handleClick = e => {
//     console.log('click ', e);
//   };

//   render() {
//     return (

//     );
//   }
// }

// ReactDOM.render(<Sider />, mountNode);
