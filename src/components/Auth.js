import React, { Component } from 'react';
import '../style/auth.css';
import {isRegistered} from "../api/IsRegistered";

class Auth extends Component {

    constructor(props) {
        super(props);
        this.state = {
          isLoggedIn: false,
          data: []
        };
    }
    
    clickHandler() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        isRegistered(String(username))
 
    }

    isRegistered = () => {
        isRegistered(String(document.getElementById("username").value)).then((data) => {  
            if(data.length != 0)
            this.setState({'isLoggedIn': true});
		
        });    
    };

    render() {
        return (
            <div class="container">
            <div class="row">                
                <div class="card">
                    <div class="card-body">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Логин</label>
                            <input type="text" class="form-control" id="username"></input>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Пароль</label>
                            <input type="password" class="form-control" id="password"></input>
                        </div>
                        <div class="form-group">
                            <div class="main-checkbox">
                                <input value="None" id="checkbox1" name="check" type="checkbox"></input>
                                <label for="checkbox1"></label>
                            </div>
                            <span class="text">Запомнить</span>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-default" onClick={this.clickHandler}>Войти</button>
                        </div>
                    </div> 
                </div>  
            </div> 
        </div>
        );
    }   
}
export default Auth;
