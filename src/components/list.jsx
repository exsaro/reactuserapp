import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


export class ListComp extends Component {
    state = { }

    render() {
        return (
        <table className="table">
            <thead>
            <tr>
                <th>Name</th>
                <th>Email id</th>
                <th>Mobile no.</th>
                <th></th>
            </tr>
            </thead>
            {(this.props.list.length > 0) ? 
            this.props.list.map((t, i) => (
                <tbody id={i}>
                <tr>
                    <td>{t.list.name}</td>
                    <td>{t.list.email}</td>
                    <td>{t.list.mobile}</td>
                    <td><Link to={`/edit/${t.id}`}><button className="btn btn-primary btn-sm">Edit</button></Link></td>
                </tr>
                </tbody>
            ))
            : "No items to show"}
        </table>
        );
    }
    
    
}



const mapStateToProps = state => {
    return ({
        list: state.lists
    })
}


export default connect(mapStateToProps)(ListComp)