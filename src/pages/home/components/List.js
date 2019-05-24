import React, {PureComponent} from 'react'
import  {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {ListItem,ListInfo,LoadMore} from '../style'
import * as actionCreator from '../store/actionCreators'
class List extends PureComponent {
  
  render(){
    const { list, getMoreList, page } = this.props;
    return (
      <div>
        {
          list.map((item,index) => {
            return (
              <Link to="/detail" key={index}>
                <ListItem>
                  <img className="list-pic" alt="阿里" src={item.get('imgUrl')} />
                  <ListInfo>
                    <h3 className="title">{item.get('title')}</h3>
                    <p className="desc">{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={() => getMoreList(page)}>阅读更多</LoadMore>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMoreList(page) {
      console.log(page)
      dispatch(actionCreator.getMoreList(page))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)