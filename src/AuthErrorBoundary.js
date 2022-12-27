import {Component} from 'react';
import { redirect } from 'react-router-dom';

class AuthErrorBoundary extends Component {
    constructor(props) {
    super(props);
    this.state = { hasError: false };
    }
    
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return {
            hasError: true,
        };
    }
    
    componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service like AppSignal
    // logErrorToMyService(error, errorInfo);
    //alert('error');
    }
    
    render() {
        const { hasError } = this.state;
        
        if (hasError) {
            redirect('/login')
        }

        return this.props.children;
    }
};

export default AuthErrorBoundary;