import React, {PureComponent} from 'react'
import  {connect} from 'react-redux'
 import  {RecommendWrapper,RecommendItem} from '../style'
class Recommend extends PureComponent {
  
  render(){
    return (
      <RecommendWrapper>
        {
          this.props.list.map((item) => {
            return (
              <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}/>
            )
          })
        }
      </RecommendWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'recommendList'])
  }
}

export default connect(mapStateToProps, null)(Recommend)