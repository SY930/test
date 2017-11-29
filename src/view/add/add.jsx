/**
 * Created by SONG on 2017/11/28.
 */
import React, {Component} from 'react'
import './index.css'
class AddUser extends Component {
    constructor(){
     super();
     this.state={

     }
    }
    submit =()=>{

    };
    render() {
        return (
            <div className="content">
                <div className="inp">
                    <label htmlFor="userId">id:</label>
                    <input type="text" id="userId"  />
                </div>
                <div className="inp">
                    <label htmlFor="userName">name:</label>
                    <input type="text" id="userName" required maxLength='50' onChange={}/>
                </div>
                <div className="inp">
                    <label htmlFor="userEmail">邮箱:</label>
                    <input type="text" id="userEmail" required maxLength='100'/>
                </div>
                <button className="btn" onClick={this.submit}>提交</button>
            </div>
        )
    }
}
export default AddUser