import './App.css';
import React from "react";


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            heroes: [],
            error: 'Insert fields'
        };

    }

    getData = async (event) => {
        const url = "http://localhost:3000/superheroes";
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            var resVal = await response.json()
            this.setState({ heroes: resVal });
        } catch (error) {
            console.error(error.message);
        }
    }

    sendData = async (event) => {
        event.preventDefault(); //no redirect after post
        if (this.state.error.length > 0) return;
        const form = document.querySelector("#fileinfo");
        const url = "http://localhost:3000/superheroes?";
        const formData = new FormData(form);
        const queryString = new URLSearchParams(formData).toString();
        const response = await fetch(url + queryString, {
            method: 'POST', body: queryString
        });
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        this.getData();
    }
    //validate humility
    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        let err = '';
        if (isNaN(target.value)) {
            err = `${name} can only be a number!`
        }
        else if (target.value < 1 || target.value > 10) {
            err = `${name} should be between 1 and 10!`
        }
        if (!target.value) {
            err = `${name}  cannot be empty!`
        }
        this.setState({
            error: err
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    
                    <form method="post" name="fileinfo" id="fileinfo" onSubmit={this.sendData}>
                        Name<br/><input name="name"></input><br />
                        Superpower<br/><input name="superpower"></input><br />
                        Humility<br/><input name="humility" onChange={(e) => this.handleInputChange(e)}></input><br />
                        {this.state.error && <span>{this.state.error}</span>}<br/>
                        <button type="submit">This is also a superhero</button>
                        
                    </form>
                    <br />
                    <button onClick={this.getData}>Who are the superheroes?</button>
                    <div>
                        {this.state.heroes.map(hero => <div key={hero.name}>I am {hero.name}<br />My superpower is {hero.superpower}<br />{hero.humility}/10 Humility<hr></hr></div>)}
                    </div>
                    
                </header>
            </div>
        );
    }
}
export default App;
