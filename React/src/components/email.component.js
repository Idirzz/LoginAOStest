import React, { Component} from "react";


export default class email extends Component {
    constructor(props){
        super(props);
        this.state = {
            email : "",
            emailStyle : "field",
        }
    }
    onChangeEmail = (e) => {
        let string = e.target.value;
        if (string.length <= 50)
        {
            if (string != null && string.match(/^[a-zA-Z0-9.]{1,50}@[a-zA-Z]{1,50}\.[a-z]{1,9}$/))
            {
                this.props.onChange({email : { value : string, status : true}})
                return this.setState({email : string, emailStyle : "field"})
            }
            else
            {
                this.props.onChange({email : { value : string, status : false}})
                return this.setState({email : string, emailStyle : "field error"})
            }
        }
    }

    componentDidMount = () => {
        if (this.props.default)
            this.setState({ email : this.props.default })
    }

    render() {
        return (
                <div className={this.state.emailStyle}>
                    <label>Email</label>
                    <input id="email" value={this.state.email} onChange={this.onChangeEmail} placeholder="Testmail@gmail.com" type="email" />
                </div>
        )
    }
}