import React, { Component} from "react";


export default class password extends Component {
    constructor(props){
        super(props);
        this.state = {
            password : "",
            passwordhidden : "password",
            eyestyle : "link eye icon",
            labelstyle : "field",
            passwordCorrect : "ui icon input",
        }
    }
    onChangepassword = async (e) => {
        let string = e.target.value;
        if (string != null && string.length <= 32)
        {
            if (string != null && string.length > 1)
            {
                this.props.onChange({pwd : { value : string, status : true}})
                return this.setState({password : string, passwordCorrect : "ui icon input", labelstyle : "field"})
            }
            else
            {
                this.props.onChange({pwd : { value : string, status : false}})
                return this.setState({password : string, passwordCorrect : "ui icon input field error", labelstyle : "field error"})
            }
        }
    }
    onClickEye = () => {
        if (this.state.passwordhidden === "password")
            this.setState({passwordhidden : "text", eyestyle : " link eye slash icon"})
        else
            this.setState({passwordhidden : "password", eyestyle : "link eye icon"})
    }

    render() {
        return (
            <div>
                <div className="field">
                    <div className={this.state.labelstyle}>
                        <label>Password</label>
                    </div>
                    <div className={this.state.passwordCorrect}>
                        <input id="password" className={this.state.passwordCorrect} value={this.state.password} onChange={this.onChangepassword} type={this.state.passwordhidden} />
                        <i onClick={this.onClickEye} className={this.state.eyestyle}></i>
                    </div>
                </div>
            </div>
        )
    }
}