import { Component } from "react";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    handleClick = () => {
        if (this.state.count < 50) {
            this.setState({
                count: this.state.count + 1
            })
        }
    } 

    render() {
        return (
            <div style={{ marginTop: '40px', textAlign: 'center', color: '#777', padding: '20px', borderTop: '1px solid #eee' }}>
                <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>Wanna to count?</h2>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>Value: {this.state.count}</h3>
                <button 
                    onClick={this.handleClick}
                    style={{
                        padding: '8px 16px',
                        backgroundColor: '#333',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Click
                </button>
            </div>
        )
    }
}

export default Footer;