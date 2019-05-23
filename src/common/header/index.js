import React, {Component} from 'react';
import { connect } from 'react-redux';
import {HeaderWrapper, Logo,Nav, NavItem,NavSearch,Addition,Button,SearchWrapper} from './style'
import {CSSTransition} from 'react-transition-group'
class Header extends Component {

  render() {
    return (
      <HeaderWrapper>
        <Logo/>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={this.props.focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch className={this.props.focused ? 'focused' : ''}
                onFocus={() => this.props.handleInputFocus()}
                onBlur={() => this.props.handleInputBlur()}
              ></NavSearch>
            </CSSTransition>
            <span className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe617;</span>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="write">
            <span className="iconfont">&#xe602;</span>
            写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.header.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = {
        type: 'search_focus'
      }
      dispatch(action)
    },
    handleInputBlur() {
      const action = {
        type: 'search_blur'
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);