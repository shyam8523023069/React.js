import React, {Component} from 'react';
 
const HocCompo = (WrapComponent, value )=> {
    // const hocCompo = WrapComponent => {
    // class HocCompo extends Component {
     class NewHocCompo extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
   
        counter = () => {
            this.setState(prevState =>{
                return{

                    count : prevState.count + value
                }
            })
        }
        render() {
         console.log(this.props.name)
            return (
                <div>
                    <WrapComponent 
                    Incount ={this.state.count}
                    Incounter = {this.counter}  
                    {...this.props} />
                    
                </div>
            )
        }
    }
    return NewHocCompo
    // return HocCompo
}
export default HocCompo;
// export default hocCompo;