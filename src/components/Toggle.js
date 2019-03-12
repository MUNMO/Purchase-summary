import React, { Component } from 'react';
import ToggleData from './ToggleData';

class Toggle extends Component {
    constructor() {
        super();
        this.state = {
            active: true
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle(){
        let { active } = this.state;
        this.setState({
            active: !active
        });
    }

    render() {
        const { labels, className, itemDetails } = this.props;
        const { active } = this.state;
        return (
            <div className={className}>
                {
                    active 
                    ? <a className="cursor-pointer" onClick={this.toggle}>{labels.default} + </a>
                    : <div>
                    <a className="cursor-pointer" onClick={this.toggle}>{labels.action} - </a>
                    <ToggleData label={labels.action} itemDetails={itemDetails} />
                    </div>

                }
            </div>
        );
    }
}

export default Toggle;
