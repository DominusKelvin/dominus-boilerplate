import ReactDOM from "react-dom";
import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.authFunc = this.authFunc.bind(this);
    }
    authFunc() {
        const authData = {data: "Auth on my site"};

        if (WavesKeeper) {
            WavesKeeper.auth( authData )
            .then(auth => {
                console.log( auth );

            })
            .catch(error => {
                console.log(error);
            });
        } else {
            alert("To Auth WavesKeeper Should be Installed.");
        }
    }
    render() {
        return (
            <div className="container mt-3">
                <blockquote class="blockquote text-center mb-1 text-muted">
                <p class="mb-0">Everything will be tokenized and connected by a blockchain one day.</p>
                <footer class="blockquote-footer">Fred Ehrsam </footer>
                </blockquote>
                <section className="mt-3 text-center">
                <input className="btn btn-primary" type="submit" value="Login with Waves to see why" onClick={this.authFunc}/>
                </section>
            </div>
        )
    }
}

const app = document.getElementById('app');

if (app) {
    ReactDOM.render(<App/>, app)
}