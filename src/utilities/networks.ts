export const NETWORKS: networks = {
    1: {
        name: "Main Ethereum Network",
        etherscan: 'https://etherscan.io',
        infura: 'http://mainnet.infura.io',
        marketplace: '',
        protobufjs: ''
    },
    3: {
        name: "Ropsten Test Network",
        etherscan: 'https://ropsten.etherscan.io',
        infura: 'https://ropsten.infura.io',
        // marketplace:'https://2kdmghhbyk.execute-api.us-east-1.amazonaws.com/ropsten/',
        marketplace: 'https://1qr45jt71g.execute-api.us-east-1.amazonaws.com/ropsten/',
        protobufjs: 'https://protojs.singularitynet.io/ropsten/',
        default: true
    },
    4: {
        name: "Rinkeby Test Network",
        etherscan: 'https://rinkeby.etherscan.io',
        infura: 'https://rinkeby.infura.io',
        marketplace: '',
        protobufjs: ''
    },
    42: {
        name: "Kovan Test Network",
        etherscan: 'https://kovan.etherscan.io',
        infura: 'https:/kovan.infura.io',
        marketplace: 'https://2kdmghhbyk.execute-api.us-east-1.amazonaws.com/kovan/',
        protobufjs: 'https://protojs.singularitynet.io/kovan/'
    },
};

export function getMarketplaceURL(chainId: number) {
    return (chainId in NETWORKS ? NETWORKS[chainId]['marketplace'] : undefined);
}

export function getProtobufjsURL(chainId: number) {
    return (chainId in NETWORKS ? NETWORKS[chainId]['protobufjs'] : undefined);
}

interface networks {
    [key: number]: {
        name: string,
        etherscan: string,
        infura: string,
        marketplace: string,
        protobufjs: string,
        default?:boolean
    }
}

