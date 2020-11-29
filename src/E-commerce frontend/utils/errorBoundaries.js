import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false,
            error: "",
            errorInfo: "",
            eventId: ""
        }
    }
    static getDerivedStateFromError(error) {
        return { hasError: true }
    }
    componentDidCatch(error, errorInfo) {
        this.setState({error, errorInfo})
    }
    render() {
        return (
            <div>
                {console.log(this.state.hasError)}
                {this.state.hasError === true ? (<div className="card my-5">
                    <div className="card-header">
                        <p>
                            An error has occurred in this component.{" "}
                            <span
                                style={{ cursor: "pointer", color: "#0077FF" }}
                                onClick={() => {
                                    window.location.reload();
                                }}
                            >
                                Reload this page
                </span>{" "}
                        </p>
                    </div>
                </div>) : this.props.children}
            </div>
        )
    }
}

export default ErrorBoundary
