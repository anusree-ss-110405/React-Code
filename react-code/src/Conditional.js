import React, { Component } from 'react';import 'bootstrap/dist/css/bootstrap.css';
class Conditionalrendering extends Component {state = { count: 0 ,name:"Zero"}
changeCount(){ if(this.state.count===0 )
return"Zero";
else if(this.state.count===10)return"Ten";
else
return this.state.count;
}
changeColor1(){ let str="btn btn-";
if(this.state.count===0){str+="danger";
}
else {
str+="success";
}
return str;
}
changeColor2(){
let str="btn btn-"; if(this.state.count===10){str+="danger";
}
else {
str+="success";
}
return str;
}
render() {
return (<div style={{textAlign:'center',padding:50}}>
<h1 style={{padding:100}}> Conditional Rendering:</h1>
<button className={this.changeColor1()}style={{width:100,height:50}}
disabled={this.state.count===0} onClick={() =>
{ this.setState({ count: this.state.count - 1 }) }}>- </button>
<span style={{padding:50,fontSize:27}}>{this.changeCount()}</span>
<button className={this.changeColor2()}
style={{width:100,height:50}}disabled={this.state.count===10}
onClick={() => { this.setState({ count: this.state.count + 1 }) }}>+</button>
</div>);
}
}
export default Conditionalrendering;

