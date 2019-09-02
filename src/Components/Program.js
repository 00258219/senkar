import React from 'react';
import { FormattedMessage } from 'react-intl';

class Program extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullP: null,
    };
  }

  componentDidMount(){
    if(this.props.fullB){
      this.setState({fullP: <p style={{textAlign:"right", paddingRight:"4%"}}>*Full Project*</p>,  })
    }
  }

  render(){
    return (
      <div style={style.divF}>
        <p className="p-h3">
            <FormattedMessage id={this.props.tittle}/>
        </p>
        <div style={style.div_program}>
          {this.props.codeP}
        </div>
        <p>
            Links: Python, Javascript, C++
        </p>
        {this.state.fullP}
      </div>
    );
  }
}

var style ={
  divF:{
    width: "92%",
    borderRadius: 4,
    border: "solid 1px #CDCDCD",
    marginLeft:"2%",
    marginBottom: 20,
  },
  div_program:{
    height: 200,
    width: "97%",
    backgroundColor: "#F0F0F0",
    marginBottom: 12,
    padding:0,
  }

}

export default Program;
