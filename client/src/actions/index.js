import types from './types';
import axios from 'axios';

export function signup(userInfo){
    return dispatch => {
        axios.post('/auth/signup', userInfo).then(resp => {
            console.log('Resp from server:', resp);
            localStorage.setItem('token', resp.data.token);

            dispatch({
                type: types.SIGNUP,
                payload: resp.data
            });
        });
    }
}

export function signin(userInfo){
    return dispatch => {
        axios.post('/auth/signin', userInfo).then( resp => {
            console.log('Signin Resp:', resp);

            localStorage.setItem('token', resp.data.token);

            dispatch({
                type: types.SIGNIN,
                payload: resp.data
            });
        });
    }
}

export function jwtSignin(){
    return dispatch => {
        axios.get('/auth/get-user', {headers: { authorization: localStorage.getItem('token')}}).then( resp => {
            dispatch({
                type: types.SIGNIN,
                payload: resp.data
            });
        });
    }
}

export function signout(){
    localStorage.removeItem('token');

    return {
        type: types.SIGNOUT
    }
}

export function getRoomList(){
    return dispatch => {
        axios.get(
            '/api/room-list',
            { headers: { authorization: localStorage.token }}
        ).then( resp => {
                dispatch({
                    type: types.GET_ROOM_LIST,
                    payload: resp.data
                });
            });
        }
}
