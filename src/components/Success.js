import React, {Component} from 'react';

class Success extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="rect">
                    <div className="l-Title">
                        <p>Ура! Замочек прикреплен к мосту!</p>
                    </div>
                </div>
            </div>
        );
    }    

}
export default Success;