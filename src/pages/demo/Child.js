import React,{Component} from 'react'
export default class Child extends Component{
    constructor(props){
        super(props)
        this.state = {
            count:0
        };
    }
    componentWillMount(){
        console.log('will mount');
    }

    componentDidMount(){
        console.log('did mount');
    }

    componentWillReceiveProps(newProps){
        console.log('will props'+newProps.name)
    }

    shouldComponentUpdate(){
        console.log('should update');
        return true;
    }

    componentWillUpdate(){
        console.log('will update');
    }

    componentDidUpdate(){
        console.log('did update');
    }
    // state = {
    //     count:0
    // }

    render (){

        return(
            <div style={{padding:50}}>
            <p>这里是子组件。测试子组件的生命周期介绍</p>
             <p>{this.props.name}</p>
             </div>
        )
    }
}