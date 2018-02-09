import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRoomList } from '../actions';

class Chat extends Component {
    constructor(props){
        super(props);

        // this.socket = openSocket('http://localhost:3500');

        // this.sendMessage = this.sendMessage.bind(this);
    }

    sendMessage(){
        // this.socket.emit('chat message', 'Hello hard coded');
    }

    componentDidMount(){
        // this.socket.on('chat message', msg => {
        //     console.log('Message Received:', msg);
        // });

        this.props.getRoomList();
    }

    render(){
        console.log('This is rooms:', this.props.rooms);

        const roomList = this.props.rooms.map((room, index) => {
            return (
                <li key={index} className="collection-item avatar">
                    <i className="circle green"></i>
                    <Link to={`/chat/${room._id}`} className="title">{room.name}</Link>
                </li>
            )
        });

        return (
            <div>
                <h1>Chat Lobby</h1>
                <ul className="collection">
                    {roomList}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        rooms: state.chat.rooms
    }
}

export default connect(mapStateToProps, { getRoomList })(Chat);
