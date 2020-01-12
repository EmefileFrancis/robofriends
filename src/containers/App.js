import React, {Component} from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'
import './App.css';

class App extends Component  {
    constructor(props){
        super(props);
        this.state={
            robots: [],
            searchField: ''
        }
        
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .catch(error => {
                throw new Error('Failed Request.')
            })
            .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(
            (robots) => {
                return robots.name.toLowerCase().includes(searchField.toLowerCase())
            }
        );

        this.setState({
                robots: filteredRobots,
                searchField: event.target.value
            }
        );
        
    }

    render(){
        const { robots } = this.state;
        return(
            <div className='tc'>
                <h1 className='f1'>robofriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                {
                    robots.length === 0 ? <h1 className='f2'>loading...</h1> :
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={robots} />
                        </ErrorBoundary>
                    </Scroll>
                }
                
            </div>
        );
    }
    
}

export default App