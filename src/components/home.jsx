import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addList, editList, updateList } from '../actions/index';

class Home extends Component {
    state = { 
        name:'',
        email:'',
        mobile:''
     }
    
    componentDidMount(){
        this.props.dispatch(editList(this.props.match.params.id));
    }

    componentDidUpdate(prevProps, prevState){
        debugger;
     if((prevProps.editData && Object.keys(prevProps.editData).length > 0 && prevProps.editData.list.name !==  this.props.editData.list.name) || ((!prevProps.editData || Object.keys(prevProps.editData).length == 0) && this.props.editData && Object.keys(this.props.editData).length > 0 && this.props.editData.list.name))
         this.setState({name:  this.props.editData.list.name, email: this.props.editData.list.email, mobile: this.props.editData.list.mobile})

    //console.log(prevProps, nextProps)

    }
    render() { 
        return ( 
            
            <form onSubmit={this.getFormData}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" onChange={this.getName} name="name" value={this.state.name} placeholder="Your name" />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" onChange={this.getEmail} name="email" value={this.state.email} placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Mobile number</label>
                    <input type="text" className="form-control" onChange={this.getMobile} name="mobile" value={this.state.mobile} placeholder="Mobile number" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
         );
    }
    getName = (e) =>{
        this.setState({name: e.target.value})
    }
    getEmail = (e) =>{
        this.setState({email: e.target.value})
    }
    getMobile = (e) =>{
        this.setState({mobile: e.target.value})
    }
    getFormData = (e) => {
        e.preventDefault();
        if(this.props.editData){
            this.props.dispatch(updateList(this.state))    
        }else{
            this.props.dispatch(addList(this.state))
        }
        
        //console.log(this.state);
        this.setState({
            name:'',
            email:'',
            mobile:''
        })
    }
}



const mapStateToProps = state => {
    return ({
        editData: state.editData
    })
}
 
export default connect(mapStateToProps)(Home)