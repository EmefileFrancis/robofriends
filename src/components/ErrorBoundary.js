import React, { Component } from 'react'

class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasErrors: false
        };
    }

    static getDerivedStateFromError(error){
        return { hasErrors: true }
    }

    componentDidCatch(){
        console.log('Error occurred.')
    }

    render(){
        if(this.state.hasErrors){
            return <h1 className='f2'>oooppss!!! this is not good.</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;