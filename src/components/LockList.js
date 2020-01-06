import React, {Component} from 'react';
import LockContent from "../components/LockContent";
import {getUserData} from "../api/UserData";
import {delete_lock_id} from "../api/DeleteLock";

class LockList extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            username: '',
            data: [[]]
          };
    }

    reloadUserData = () => {
        console.log("Запрос на получение данных..");
        getUserData("11").then((data) => {
            this.setState({'data': data});
        });
        
    };

    clickDeleteHandler(id){
        console.log("Запрос на удаление данных..");
      //  const id_lock = this.state.data[5];
        console.log(id)
      // delete_lock_id(id_lock);
    }

    render() {   
      let cardContent = ( 
          <div id="l-Text" class="l-Text">
              <div class="design_lock">
            <p>Пользователь: username</p>
            <p>Проверить наличие замочка?</p>
            </div>
            <button type="submit" class="btn btn-danger" onClick={this.reloadUserData}>Проверить</button>

       </div>
       );
        if (typeof this.state.data == "undefined"){
             cardContent = (
                <div class="design_lock">
                <div id="l-Text" class="l-Text">
                    <p>У вас нет замочка.</p>
                    </div>
              </div>
            );
        }

        else {
           
            if (this.state.data[1] === "yellow")
            {
                cardContent = (
                    <div id="l-Text" class="l-Text">
                        <div class="design_lock">
                        <p>Пользователь: {this.state.data[0]}</p>
                        <p>Дизайн:<img className="image" src={require('../style/img/замок3.png')}/></p>
                        <p>Человек: {this.state.data[2]}</p>
                        <p>Сообщение: {this.state.data[3]}</p>
                        <p>Размер: {this.state.data[4]}</p>
                        </div>
                        <button type="submit" class="btn btn-danger" onClick={this.clickDeleteHandler}>Удалить замочек</button>   
                  </div>
                );
            }
            if (this.state.data[1] === "blue")
            {
                cardContent = (
                    <div id="l-Text" class="l-Text">  
                    <div class="design_lock"> 
                        <p>Пользователь: {this.state.data[0]}</p>
                        <p>Дизайн:<img className="image" src={require('../style/img/замок2.png')}/></p>
                        <p>Человек: {this.state.data[2]}</p>
                        <p>Сообщение: {this.state.data[3]}</p>
                        <p>Размер: {this.state.data[4]}</p>
                        </div>
                        <button type="submit" class="btn btn-danger" onClick={this.clickDeleteHandler}>Удалить замочек</button>   
                  </div>
                );
            }
            if (this.state.data[1] === "red")
            {
                var id = this.state.data[5];
                cardContent = (
            <div className="card" style={{width: '24rem' }}>
                <div className="form-group">
                    <div id="l-Text" class="l-Text">    
                    <div class="design_lock">
                        <img className="image" src={require('../style/img/замок.png')}/>
                        <p>Пользователь: {this.state.data[0]}</p>
                        <p>Человек: {this.state.data[2]}</p>
                        <p>Сообщение: {this.state.data[3]}</p>
                        <p>Размер: {this.state.data[4]}</p>
                    </div>
                        <button type="submit" class="btn btn-danger" onClick={this.clickDeleteHandler(id)}>Удалить замочек</button>   
                  </div>
                  </div>
                 </div> 
                  
                );
            }
        }
      
        
        return (
            <div className="card" style={{width: '24rem' }}>
                <div className="form-group">
                    {cardContent}
               </div>
            </div>
    );
    
}
}

export default LockList;
