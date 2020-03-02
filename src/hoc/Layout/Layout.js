import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import styles from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }
    openSideDrawerHandler = () => {
        this.setState((prevState)=>{
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }
    render () {
        return (
            <Aux>
                <div>
                    <Toolbar 
                        openSideDrawer={this.openSideDrawerHandler}
                    />
                    <SideDrawer 
                        open={this.state.showSideDrawer}
                        close={this.sideDrawerClosedHandler}
                    /> 
                    Backdrop
                </div>
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;
