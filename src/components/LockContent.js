//Карточка для 1 замка

import React, { Component } from 'react';
import {delete_lock_id} from "../api/DeleteLock";

class LockContent extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state.size = "Размер замка";
    this.state.color = "Цвет замка ";
    this.state.name = "С кем повесили замочек ";
    this.state.message = "Сообщение:";
  }

  clickHandler(){
      delete_lock_id();
      console.log("Мы тут")
     
  }

  render() {
    
    let cardContent = (
        <div id="l-Text" class="l-Text">
            <p>{this.state.size}</p>
      </div>
    );

    return (
            <div className="card" style={{width: '24rem' }}>
                <div className="form-group">
                  {cardContent}
                  <button type="submit" class="btn btn-danger" onClick={this.clickHandler}>Удалить</button>
                </div>
            </div>
    );
  }
}

export default LockContent;