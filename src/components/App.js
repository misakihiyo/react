import React, { Component } from 'react';

class Random extends Component{
    render(){
        const sthcal = this.props.value;
        const numbers = [1,2,4,3,2]
        const double = numbers.map((number)=> <li>{number}</li>);

        if (sthcal % 5 == 0){
            return(
                <div> {sthcal} divisible 
                <ul>{double}</ul>
                </div>
            )
        }

        else{
            return(
                <div> {sthcal} not divisible</div>
            )
        }

    }
}


class App extends Component {
    constructor(props){
        super(props);
        this.state ={
            count : 0,
            isToggleOn : true,
            value : ""
        }


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.timeId = setInterval(() => {
            this.acall()            
        }, 1000);
    }

    acall(){
        this.setState({
            count : this.state.count + 1
        })
    }

    componentWillUnmount(){
        clearInterval(this.timeId);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        alert('A name was submitted was' + this.state.value)
        event.preventDefault();
    }
    
    handleClick() {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
      }


    render(){
        return(
            <div>
                Counting this interval as {this.state.count}
                <Random value = {this.state.count}/>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>

                <form onSubmit = {this.handleSubmit}>
                    <label>
                        Name:
                        <input type = "text" value = {this.state.value} onChange= {this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default App; 