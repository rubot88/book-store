import React, { Component } from 'react';
import ErrorIndincator from '../error-indicator';
import './error-boundary';

export default class ErrorBoundary extends Component {
    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        });
    }
    render() {
        if (this.state.hasError) return <ErrorIndincator />;
        return this.props.children;

    }
};