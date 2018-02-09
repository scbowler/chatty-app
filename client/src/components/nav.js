import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signout } from '../actions';

const Nav = props => {

    function updateNav(){
        if(props.user){

            return [
                <li key="0">
                    <Link to="/chat-lobby">Chat Lobby</Link>
                </li>,
                <li key="1">
                    <Link to="/" onClick={props.signout}>Sign Out</Link> 
                </li>
            ]
        }

        return [
            <li key="0">
                <Link to="/signin">Sign In</Link>
            </li>,
            <li key="1">
                <Link to="/signup">Signup</Link>
            </li>
        ]

    }

    let greeting = '';

    if(props.user){
        const userStyle = {
            color: props.user.color
        }
        greeting = <span style={{paddingLeft: '10px'}}>Hello, <span style={userStyle}>{props.user.username}</span></span>
    }

    return (
        <nav>
            <div className="nav-wrapper">
                <ul className="left">
                    <li>{greeting}</li>
                </ul>
                <Link to="/" className="brand-logo center">Chatty App</Link>
                <ul className="right">
                    {updateNav()}
                </ul>
            </div>
        </nav>
    )
}

function mapStateToProps(state){
    return {
        user: state.user.auth
    }
}

export default connect(mapStateToProps, { signout })(Nav);
