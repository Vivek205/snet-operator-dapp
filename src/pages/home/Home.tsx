import React, { Component } from 'react';
import ConnectWallet from '../connectWallet/ConnectWallet';
import Operator from '../operator';

interface IProps {
	web3Initialized: boolean;
	network: any;
}

class Home extends Component<IProps> {

	render() {
		return (
			<React.Fragment>
				{this.props.web3Initialized ? <Operator network={this.props.network} /> : <ConnectWallet />}
			</React.Fragment>
		)
	}
}

export default Home;