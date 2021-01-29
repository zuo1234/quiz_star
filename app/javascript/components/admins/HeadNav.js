import React from "react"
import {Menu} from 'antd'
import {StarTwoTone} from '@ant-design/icons'
import './HeadNav.less'
class HeadNav extends React.Component {
  state = {
        current: 'home',
    }
    render(){
        return (
            <div id="HeadNav">
                <div className="nav-wrap">
                    <div className="nav-logo-wrap">
                        <StarTwoTone twoToneColor="#eb2f96" />
                    </div>
                    <div className="nav-list-wrap">
                        <Menu
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                        >
                            <Menu.Item key="home">
                                <a href="/admin/home">首页</a>
                            </Menu.Item>
                            <Menu.Item key="article">
                                <a href="/admins/quiz/">问卷列表</a>
                            </Menu.Item>
                            <Menu.Item key="resource">
                                <a href="/admins/quiz/new">新建问卷</a>
                            </Menu.Item>
                        </Menu>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeadNav
