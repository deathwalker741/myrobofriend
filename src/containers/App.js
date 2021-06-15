import React from 'react';
import SearchBox from '../components/SearchBox'
import Cardlist from '../components/Cardlist';
import Scroll from '../components/Scroll';
// import { robot } from './robot';

class App extends React.Component {

    constructor(){
        super();
        this.state = {
            robot: [],
            Searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robot : users}));
    }

    onSearchChange = (event) => {
        this.setState({ Searchfield: event.target.value});  
    }


    render(){
        const filteredRobots = this.state.robot.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.Searchfield.toLowerCase());
        });
        if(this.state.robot.length === 0){
            return <h1>Loading</h1>;
        }else{
    return(
        <div>
            <h1 className="f1">ROBOFRIENDS</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
            <Cardlist robot={filteredRobots}/>
            </Scroll>
            
        </div>
    )
        }
    }
}

export default App;
