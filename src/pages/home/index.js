import React, {PureComponent} from 'react';
import  {connect} from 'react-redux';
import Topic from './components/Topic';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import List from './components/List';
import {HomeWrapper,HomeLeft,HomeRight, BcakTop} from './style';
import * as actionCreators from './store/actionCreators'

class Home extends PureComponent {

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }

  handleScrollTop() {
    window.scrollTo(0, 0)
  }
  
  render(){
    return (
      <HomeWrapper>
        <HomeLeft>
          <img alt="" className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {
          this.props.show ? <BcakTop onClick={() => this.handleScrollTop()}>顶部</BcakTop> : null
        }
      </HomeWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    show: state.getIn(['home', 'showScroll'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeHomeData () {
      dispatch(actionCreators.getHomeInfo())
    },
    changeScrollTopShow(e) {
      if(document.documentElement.scrollTop > 300) {
        dispatch(actionCreators.toggleTopShow(true))
      } else {
        dispatch(actionCreators.toggleTopShow(false))
      }
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)