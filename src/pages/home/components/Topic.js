import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {TopicWrapper,TopicItem} from '../style';

class Topic extends PureComponent {
  
  render(){
    return (
      <TopicWrapper>
        {
          this.props.topicList.map((item) => {
            return (
              <TopicItem key={item.get('id')}>
                <img className="topic-pic" alt={item.get('title')} src={item.get('imgUrl')}/>
                {item.get('title')}
            </TopicItem>
            )
          })
        }
        
      </TopicWrapper>
    )
  }
}

const mapStetaToProps = (state) => {
  return {
    topicList: state.getIn(["home", "topList"])
  }
}

export default connect(mapStetaToProps, null) (Topic)