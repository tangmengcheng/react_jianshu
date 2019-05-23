import styled from 'styled-components'
import logoPic from '../../images/logo.png';

export const HeaderWrapper = styled.div`
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
`

export const Logo = styled.a.attrs({
  href: '/'
})`
  height: 56px;
  position: absolute;
  left:0;
  top:0;
  width: 100px;
  display: block;
  background: url(${logoPic});
  background-size: contain;
`

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  padding-right: 70px;
  box-sizing: border-box;
  margin: 0 auto;
`

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  box-sizing: border-box;
  height: 38px;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  padding: 0 30px 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  font-size: 14px;
  color: #777;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
`

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top:0;
  height: 56px;
`
export const Button = styled.div`
  float: right;
  line-height: 38px;
  margin-top: 9px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  margin-right: 20px;
  padding: 0 20px;
  font-size: 14px;
  &.reg {
    color: #ec6149;
    cursor: pointer;
  }
  &.write {
    color: #fff;
    background: #ec6149;
    cursor: pointer;
  }
`
export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  .slide-enter {
    width: 160px;
    transition: all .2s ease-out;
  }
  .slide-enter-active {
    width: 240px;
  }
  .slide-exit {
    transition: all .2s ease-out;
  }
  .slide-exit-active {
    width: 160px;
  }
  .iconfont { 
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    line-height: 30px;
    text-align: center;
    &.focused {
      background: #777;
      color: #ffff;
    }
  }
`