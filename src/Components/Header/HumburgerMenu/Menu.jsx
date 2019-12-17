import React from 'react';
import './Menu.css';
import MenuNav from './MenuNav/MenuNav';

export default class HumMenu extends React.Component {
    state = {
        isActive: false,
        isClosed: true,
    }

    toggleActive() {
        if (this.state.isActive) {
            this.setState({
                isActive: false,
                isClosed: true,
            });
        } else {
            this.setState({
                isActive: true,
                isClosed: false,
            });
        }
    }

    render() {
        return <>
            <div className='Hum-menu' onClick={() => this.toggleActive()}>
                {
                    this.state.isActive ? <div className='Menu-exit'></div>

                    :
                
                    <div className="Menu-btn"></div>
                }
            </div>

            {
                !this.state.isClosed && <MenuNav {...this.props} isClosed={this.state.isClosed}/>
            }
        </>
    }
}