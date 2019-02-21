// =================================
// START: Web3 deploy code
// =================================

/* beautify ignore:start */
var zscContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"outL","type":"bytes32[2]"},{"name":"inL","type":"bytes32[2]"},{"name":"inOutR","type":"bytes32[2]"},{"name":"y","type":"bytes32[2]"},{"name":"yBar","type":"bytes32[2]"},{"name":"proof","type":"bytes"},{"name":"signature","type":"bytes32[3]"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"ethAddrs","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"y","type":"bytes32[2]"},{"name":"bTransfer","type":"uint256"}],"name":"fund","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"acc","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"ctr","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"pTransfers","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"y","type":"bytes32[2]"},{"name":"bTransfer","type":"uint256"},{"name":"proof","type":"bytes"},{"name":"signature","type":"bytes32[3]"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"y","type":"bytes32[2]"}],"name":"rollOver","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"domainHash","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_coin","type":"address"},{"name":"_chainId","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"roller","type":"bytes32[2]"}],"name":"RollOverOccurred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"funder","type":"bytes32[2]"}],"name":"FundOccurred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"burner","type":"bytes32[2]"}],"name":"BurnOccurred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"sender","type":"bytes32[2]"},{"indexed":false,"name":"recipient","type":"bytes32[2]"}],"name":"TransferOccurred","type":"event"}]);
/* beautify ignore:end */

// =================================
// END: Web3 deploy code
// =================================

var _chainId = 10;

function _deployZSC(coin) {
    // =================================
    // START: Web3 deploy code
    // =================================
    var zsc = zscContract.new(
        coin,
        _chainId, {
            from: web3.eth.accounts[0],
            data: '0x6080604052604051620000129062000196565b604051809103906000f0801580156200002f573d6000803e3d6000fd5b50600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060006003553480156200008257600080fd5b5060405160408062002b5883398101806040526040811015620000a457600080fd5b810190808051906020019092919080519060200190929190505050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060006040517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f81527fc9d54de6bfed12ed581fc7d2c1ae5f8778aaf7c177d117fdbb15c71c94be6f8860208201527fae209a0b48f21c054280f2455d32cf309387644879d9acbd8ffc199163811885604082015282606082015230608082015260a0812091505080600181905550505050620001a4565b6104c3806200269583390190565b6124e180620001b46000396000f3fe608060405234801561001057600080fd5b50600436106100b0576000357c01000000000000000000000000000000000000000000000000000000009004806373edb37b1161008357806373edb37b1461026757806380a25373146102a9578063ba909191146102ff578063d246fda014610396578063dfe86ac5146103c4576100b0565b8063151c4d8d146100b557806342b30cd61461016b5780635464befb146101d95780635b7f82f414610211575b600080fd5b61016960048036036101c08110156100cc57600080fd5b8101908080604001909192919290806040019091929192908060400190919291929080604001909192919290806040019091929192908035906020019064010000000081111561011b57600080fd5b82018360208201111561012d57600080fd5b8035906020019184600183028401116401000000008311171561014f57600080fd5b9091929391929390806060019091929192905050506103e2565b005b6101976004803603602081101561018157600080fd5b8101908080359060200190929190505050610b67565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61020f600480360360608110156101ef57600080fd5b810190808060400190919291929080359060200190929190505050610b9a565b005b6102516004803603606081101561022757600080fd5b8101908080359060200190929190803590602001909291908035906020019092919050505061113f565b6040518082815260200191505060405180910390f35b6102936004803603602081101561027d57600080fd5b8101908080359060200190929190505050611178565b6040518082815260200191505060405180910390f35b6102e9600480360360608110156102bf57600080fd5b81019080803590602001909291908035906020019092919080359060200190929190505050611190565b6040518082815260200191505060405180910390f35b610394600480360360e081101561031557600080fd5b8101908080604001909192919290803590602001909291908035906020019064010000000081111561034657600080fd5b82018360208201111561035857600080fd5b8035906020019184600183028401116401000000008311171561037a57600080fd5b9091929391929390806060019091929192905050506111c9565b005b6103c2600480360360408110156103ac57600080fd5b810190808060400190919291929050505061186d565b005b6103cc611cb9565b6040518082815260200191505060405180910390f35b60008560405160200180826002602002808284378083019250505091505060405160208183030381529060405280519060200120905060008560405160200180826002602002808284378083019250505091505060405160208183030381529060405280519060200120905061045661225c565b60046000848152602001908152602001600020600280602002604051908101604052809291906000905b828210156104d9578382600202016002806020026040519081016040528092919082600280156104c5576020028201915b8154815260200190600101908083116104b1575b505050505081526020019060010190610480565b5050505090506001604051825151815260208351015160208201526040600460408301377f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000060808201526040808201606060408401600060075af18216915060408351608083600060065af1821691506020830151518152602080840151015160208201526040608460408301377f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000060808201526040808201606060408401600060075af18216915060406020840151608083600060065af1821691508115156105c257600080fd5b5050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ea59a87f82600060028110151561061157fe5b602002015183600160028110151561062557fe5b60200201518e8e8e8e8e8e8e6040518a63ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808a600260200280838360005b8381101561068757808201518184015260208101905061066c565b5050505090500189600260200280838360005b838110156106b557808201518184015260208101905061069a565b5050505090500188600260200280828437600081840152601f19601f82011690508083019250505087600260200280828437600081840152601f19601f82011690508083019250505086600260200280828437600081840152601f19601f82011690508083019250505085600260200280828437600081840152601f19601f82011690508083019250505084600260200280828437600081840152601f19601f820116905080830192505050806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509a505050505050505050505060206040518083038186803b1580156107b457600080fd5b505afa1580156107c8573d6000803e3d6000fd5b505050506040513d60208110156107de57600080fd5b81019080805190602001909291905050501515610863576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f696e76616c6964207472616e736665722070726f6f660000000000000000000081525060200191505060405180910390fd5b61098483886002806020026040519081016040528092919082600260200280828437600081840152601f19601f8201169050808301925050505050508d6002806020026040519081016040528092919082600260200280828437600081840152601f19601f8201169050808301925050505050508d6002806020026040519081016040528092919082600260200280828437600081840152601f19601f8201169050808301925050505050508d6002806020026040519081016040528092919082600260200280828437600081840152601f19601f820116905080830192505050505050896003806020026040519081016040528092919082600360200280828437600081840152601f19601f820116905080830192505050505050611cbf565b80600460008581526020019081526020016000209060026109a692919061228a565b5060056000838152602001908152602001600020600280602002604051908101604052809291906000905b82821015610a2a57838260020201600280602002604051908101604052809291908260028015610a16576020028201915b815481526020019060010190808311610a02575b5050505050815260200190600101906109d1565b50505050905060016040518251518152602083510151602082015260406044604083013760408351608083600060065af18216915060208301515181526020808401510151602082015260406084604083013760406020840151608083600060065af182169150811515610a9d57600080fd5b50508060056000848152602001908152602001600020906002610ac192919061228a565b5060076000848152602001908152602001600020600081548092919060010191905055507f83765117c3b928a41bed86a98483b38eaef15844fce22ba1f498b5a7119cbbdc88886040518083600260200280828437600081840152601f19601f82011690508083019250505082600260200280828437600081840152601f19601f8201169050808301925050509250505060405180910390a15050505050505050505050565b60066020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008260405160200180826002602002808284378083019250505091505060405160208183030381529060405280519060200120905064010000000082101515610c4c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4465706f73697420616d6f756e74206f7574206f662072616e67652e0000000081525060200191505060405180910390fd5b6401000000006003548301101515610caf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602881526020018061243f6028913960400191505060405180910390fd5b600060076000838152602001908152602001600020541415610d3757336006600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160076000838152602001908152602001600020819055505b610d3f61225c565b604080519081016040528060408051908101604052806000600102815260200160006001028152508152602001604080519081016040528060006001028152602001600060010281525081525090506040517f077da99d806abd13c9f15ece5398525119d11e11e9836b2ee7d23f6159ad87d481527f01485efa927f2ad41bff567eec88f32fb0a0f706588b4e41a8d587d008b7f875602082015283604082015260408251606083600060075af11515610df857600080fd5b50600460008381526020019081526020016000206000600281101515610e1a57fe5b60020201600280602002604051908101604052809291908260028015610e55576020028201915b815481526020019060010190808311610e41575b5050505050816001600281101515610e6957fe5b60200201819052506040518151518152602082510151602082015260208201515160408201526020808301510151606082015260408251608083600060065af11515610eb457600080fd5b50806000600281101515610ec457fe5b6020020151600460008481526020019081526020016000206000600281101515610eea57fe5b60020201906002610efc9291906122da565b506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd6006600085815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1630866040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b15801561102857600080fd5b505af115801561103c573d6000803e3d6000fd5b505050506040513d602081101561105257600080fd5b810190808051906020019092919050505015156110d7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f5472616e736665722066726f6d2073656e646572206661696c6564000000000081525060200191505060405180910390fd5b826003600082825401925050819055507fee09cc7fa61426187b532bb1fee93c0642109da02bcd9cfae5525c1df14ded96846040518082600260200280828437600081840152601f19601f82011690508083019250505091505060405180910390a150505050565b60046020528260005260406000208260028110151561115a57fe5b600202018160028110151561116b57fe5b0160009250925050505481565b60076020528060005260406000206000915090505481565b6005602052826000526040600020826002811015156111ab57fe5b60020201816002811015156111bc57fe5b0160009250925050505481565b60008560405160200180826002602002808284378083019250505091505060405160208183030381529060405280519060200120905084600011158015611214575064010000000085105b1515611288576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f5472616e7366657220616d6f756e74206f7574206f662072616e67650000000081525060200191505060405180910390fd5b61129061225c565b60046000838152602001908152602001600020600280602002604051908101604052809291906000905b82821015611313578382600202016002806020026040519081016040528092919082600280156112ff576020028201915b8154815260200190600101908083116112eb575b5050505050815260200190600101906112ba565b5050505090506001604051825151815260208351015160208201527f077da99d806abd13c9f15ece5398525119d11e11e9836b2ee7d23f6159ad87d460408201527f01485efa927f2ad41bff567eec88f32fb0a0f706588b4e41a8d587d008b7f8756060820152877f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000010360808201526040808201606060408401600060075af18216915060408351608083600060065af1821691508115156113d457600080fd5b5050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f43fd09c82600060028110151561142357fe5b602002015183600160028110151561143757fe5b60200201518a8a8a8a6040518763ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018087600260200280838360005b8381101561149657808201518184015260208101905061147b565b5050505090500186600260200280838360005b838110156114c45780820151818401526020810190506114a9565b5050505090500185600260200280828437600081840152601f19601f820116905080830192505050848152602001806020018281038252848482818152602001925080828437600081840152601f19601f82011690508083019250505097505050505050505060206040518083038186803b15801561154257600080fd5b505afa158015611556573d6000803e3d6000fd5b505050506040513d602081101561156c57600080fd5b810190808051906020019092919050505015156115f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f696e76616c6964206275726e2070726f6f66000000000000000000000000000081525060200191505060405180910390fd5b6116338287856003806020026040519081016040528092919082600360200280828437600081840152601f19601f820116905080830192505050505050611fc6565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb6006600085815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16886040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561172a57600080fd5b505af115801561173e573d6000803e3d6000fd5b505050506040513d602081101561175457600080fd5b810190808051906020019092919050505015156117bc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603481526020018061240b6034913960400191505060405180910390fd5b80600460008481526020019081526020016000209060026117de92919061228a565b506007600083815260200190815260200160002060008154809291906001019190505550856003600082825403925050819055507fc4f538d91f144975b9e9d73db4fb5881b5373593b10c8d16c02546accae806f0876040518082600260200280828437600081840152601f19601f82011690508083019250505091505060405180910390a150505050505050565b6000816040516020018082600260200280828437808301925050509150506040516020818303038152906040528051906020012090506006600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561195c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602881526020018061248e6028913960400191505060405180910390fd5b61196461231a565b60806040519081016040528060046000858152602001908152602001600020600060028110151561199157fe5b600202016002806020026040519081016040528092919082600280156119cc576020028201915b8154815260200190600101908083116119b8575b505050505081526020016005600085815260200190815260200160002060006002811015156119f757fe5b60020201600280602002604051908101604052809291908260028015611a32576020028201915b815481526020019060010190808311611a1e575b50505050508152602001600460008581526020019081526020016000206001600281101515611a5d57fe5b60020201600280602002604051908101604052809291908260028015611a98576020028201915b815481526020019060010190808311611a84575b50505050508152602001600560008581526020019081526020016000206001600281101515611ac357fe5b60020201600280602002604051908101604052809291908260028015611afe576020028201915b815481526020019060010190808311611aea575b5050505050815250905060016040518251518152602083510151602082015260208301515160408201526020808401510151606082015260408351608083600060065af1821691506040830151518152602060408401510151602082015260608301515160408201526020606084015101516060820152604080840151608083600060065af182169150811515611b9457600080fd5b50506040805190810160405280826000600481101515611bb057fe5b60200201518152602001826002600481101515611bc957fe5b602002015181525060046000848152602001908152602001600020906002611bf292919061228a565b50604080519081016040528060408051908101604052806000600102815260200160006001028152508152602001604080519081016040528060006001028152602001600060010281525081525060056000848152602001908152602001600020906002611c6192919061228a565b507f32d5319a46863eb82eacf55828338d265f5eea9b15a8d5c77bdaeea16ff34e4c836040518082600260200280828437600081840152601f19601f82011690508083019250505091505060405180910390a1505050565b60015481565b60006001549050600080600760008a815260200190815260200160002054905060606040805190810160405280601c81526020017f19457468657265756d205369676e6564204d6573736167653a0a333200000000815250905060405161190181528460208201527fa749c2b2aa979f63aed9ba228701786d8f263ff542fe87003a0ec711252431fe60408201528951606082015260208a0151608082015260406060820120606082015288516080820152602089015160a0820152604060808201206080820152875160a0820152602088015160c0820152604060a082012060a0820152865160c0820152602087015160e0820152604060c082012060c08201528260e082015260c0604082012060408201526042601e8201209350506000600182856040516020018083805190602001908083835b602083101515611e1b5780518252602082019150602081019050602083039250611df6565b6001836020036101000a0380198251168184511680821785525050505050509050018281526020019250505060405160208183030381529060405280519060200120876000600381101515611e6c57fe5b602002015160019004886001600381101515611e8457fe5b6020020151896002600381101515611e9857fe5b602002015160405160008152602001604052604051808581526020018460ff1660ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015611ef4573d6000803e3d6000fd5b505050602060405103519050600660008c815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515611fb9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806124676027913960400191505060405180910390fd5b5050505050505050505050565b600060015490506000806007600087815260200190815260200160002054905060606040805190810160405280601c81526020017f19457468657265756d205369676e6564204d6573736167653a0a333200000000815250905060405161190181528460208201527f9d72b69945fb58354dfc76c7c1408fc89879b343a0105554190526fc4171d45560408201528660608201528260808201526060604082012060408201526042601e8201209350506000600182856040516020018083805190602001908083835b6020831015156120b4578051825260208201915060208101905060208303925061208f565b6001836020036101000a038019825116818451168082178552505050505050905001828152602001925050506040516020818303038152906040528051906020012087600060038110151561210557fe5b60200201516001900488600160038110151561211d57fe5b602002015189600260038110151561213157fe5b602002015160405160008152602001604052604051808581526020018460ff1660ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa15801561218d573d6000803e3d6000fd5b5050506020604051035190506006600089815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515612252576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806124676027913960400191505060405180910390fd5b5050505050505050565b6080604051908101604052806002905b612274612349565b81526020019060019003908161226c5790505090565b826002800281019282156122c9579160200282015b828111156122c8578251829060026122b892919061236b565b509160200191906002019061229f565b5b5090506122d691906123ab565b5090565b8260028101928215612309579160200282015b828111156123085782518255916020019190600101906122ed565b5b50905061231691906123d7565b5090565b610100604051908101604052806004905b612333612349565b81526020019060019003908161232b5790505090565b6040805190810160405280600290602082028038833980820191505090505090565b826002810192821561239a579160200282015b8281111561239957825182559160200191906001019061237e565b5b5090506123a791906123d7565b5090565b6123d491905b808211156123d057600081816123c791906123fc565b506002016123b1565b5090565b90565b6123f991905b808211156123f55760008160009055506001016123dd565b5090565b90565b50600081556001016000905556fe546869732073686f756c646e2774206661696c2e2e2e20536f6d657468696e672077656e74207365766572656c792077726f6e6746756e642070757368657320636f6e74726163742070617374206d6178696d756d2076616c75652e5369676e617475726520696e76616c6964206f7220666f722077726f6e6720616464726573732e4e6f207065726d697373696f6e20746f20726f6c6c206f7665722074686973206163636f756e742ea165627a7a72305820b1585371afe3c80f692b9c9d91c8564f49ccbf863a3fcce23df2c029da1643fa0029608060405234801561001057600080fd5b506104a3806100206000396000f3fe608060405234801561001057600080fd5b5060043610610053576000357c010000000000000000000000000000000000000000000000000000000090048063ea59a87f14610058578063f43fd09c14610130575b600080fd5b61011660048036036101e081101561006f57600080fd5b8101908080604001909192919290806040019091929192908060400190919291929080604001909192919290806040019091929192908060400190919291929080604001909192919290803590602001906401000000008111156100d257600080fd5b8201836020820111156100e457600080fd5b8035906020019184600183028401116401000000008311171561010657600080fd5b90919293919293905050506101ea565b604051808215151515815260200191505060405180910390f35b6101d0600480360361010081101561014757600080fd5b81019080806040019091929192908060400190919291929080604001909192919290803590602001909291908035906020019064010000000081111561018c57600080fd5b82018360208201111561019e57600080fd5b803590602001918460018302840111640100000000831117156101c057600080fd5b9091929391929390505050610332565b604051808215151515815260200191505060405180910390f35b6000806060600973ffffffffffffffffffffffffffffffffffffffff16600036604051808383808284378083019250505092505050600060405180830381855afa9150503d806000811461025a576040519150601f19603f3d011682016040523d82523d6000602084013e61025f565b606091505b509150915081801561030e575060017f01000000000000000000000000000000000000000000000000000000000000000281601f81518110151561029f57fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b1561031e57600192505050610325565b6000925050505b9998505050505050505050565b6000806060600a73ffffffffffffffffffffffffffffffffffffffff16600036604051808383808284378083019250505092505050600060405180830381855afa9150503d80600081146103a2576040519150601f19603f3d011682016040523d82523d6000602084013e6103a7565b606091505b5091509150818015610456575060017f01000000000000000000000000000000000000000000000000000000000000000281601f8151811015156103e757fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b156104665760019250505061046d565b6000925050505b969550505050505056fea165627a7a723058208cdf0c2ea172f0da01fce83623d956b61fbda338d5fb228bd03766530c7155110029',
            gas: '4700000'
        },
        function(e, contract) {
            if (typeof contract.address !== 'undefined') {
                console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
            }
        })
    // =================================
    // END: Web3 deploy code
    // =================================
    return zsc;
}

function _recoverZSC(address) {
    var zsc = zscContract.at(address);
    return zsc;
}

var demo = (function() {
    return {
        deployZSC: function(coin) {
            return _deployZSC(coin);
        },
        recoverZSC: function(address) {
            return _recoverZSC(address);
        },
    };
})();


function tracker(zsc) {
    this.zsc = zsc;
    this.available = 0; // reflects WOULD-BE value in acc (i.e., if rollOver were called). do not touch this manually
    // had to make it public only so that it could be modified by callbacks. don't change it yourself!
    this.pending = 0; // represents an estimate of pTransfers alone. this is used to speed up peeking when transfers are received

    var that = this;
    var keypair = zether.createAccount(); // private
    var yHash = web3.sha3(keypair['y'][0].slice(2) + keypair['y'][1].slice(2), { encoding: 'hex' });
    var friends = {};

    zsc.TransferOccurred(function(error, event) { // automatically watch for incoming transfers
        if (error) {
            console.log("Error: " + error);
        } else {
            if (that.mine(event.args['recipient'])) {
                var sender = "unknown address " + event.args['sender'];
                for (var name in friends) {
                    if (friends[name][0] == event.args['sender'][0] && friends[name][1] == event.args['sender'][1]) {
                        sender = name;
                        break;
                    }
                }
                // var difference = peek - that.available;
                that.check(); // change pending internally
                console.log("Transfer received from " + sender + "! New balance is " + (that.available + that.pending) + ".");
                // hard actually to report the net new value.
                // agree... and the balance mismatch with current account is causing proof to fail
                // i add a current account balance read everytime before transfer/withdraw to fix it
            }
        }
    });

    // these sign functions are specialized and ad-hoc. todo: implement general EIP-712.
    var signTransfer = function(yBar, outL, inL, inOutR) {
        var domainHash = that.zsc.domainHash().slice(2)
        var typeHash = 'a749c2b2aa979f63aed9ba228701786d8f263ff542fe87003a0ec711252431fe' // keccak256 hash of "ZETHER_TRANSFER_SIGNATURE(bytes32[2] yBar,bytes32[2] inL,bytes32[2] outL, bytes32[2] inOutR,uint256 count)"
        var yBarHash = web3.sha3(yBar[0].slice(2) + yBar[1].slice(2), { encoding: 'hex' }).slice(2)
        var outLHash = web3.sha3(outL[0].slice(2) + outL[1].slice(2), { encoding: 'hex' }).slice(2)
        var inLHash = web3.sha3(inL[0].slice(2) + inL[1].slice(2), { encoding: 'hex' }).slice(2)
        var inOutRHash = web3.sha3(inOutR[0].slice(2) + inOutR[1].slice(2), { encoding: 'hex' }).slice(2)
        var count = web3.padLeft(web3.toHex(that.zsc.ctr(yHash)).slice(2), 64)
        var hashStruct = web3.sha3(typeHash + yBarHash + outLHash + inLHash + inOutRHash + count, { encoding: 'hex' }).slice(2)
        var message = web3.sha3("1901" + domainHash + hashStruct, { encoding: 'hex' })
        var signature = web3.eth.sign(eth.accounts[0], message).slice(2)
        return ["0x00000000000000000000000000000000000000000000000000000000000000" + signature.slice(128), "0x" + signature.slice(0, 64), "0x" + signature.slice(64, 128)]
    }

    var signBurn = function(value) {
        var domainHash = that.zsc.domainHash().slice(2)
        var typeHash = '9d72b69945fb58354dfc76c7c1408fc89879b343a0105554190526fc4171d455' // keccak256 hash of "ZETHER_BURN_SIGNATURE(uint256 bTransfer,uint256 count)"
        var value = web3.padLeft(web3.toHex(value).slice(2), 64)
        var count = web3.padLeft(web3.toHex(that.zsc.ctr(yHash)).slice(2), 64)
        var hashStruct = web3.sha3(typeHash + value + count, { encoding: 'hex' }).slice(2)
        var message = web3.sha3("1901" + domainHash + hashStruct, { encoding: 'hex' })
        var signature = web3.eth.sign(eth.accounts[0], message).slice(2)
        return ["0x00000000000000000000000000000000000000000000000000000000000000" + signature.slice(128), "0x" + signature.slice(0, 64), "0x" + signature.slice(64, 128)]
    }

    this.me = function() {
        return keypair.y
    }

    this.secret = function() {
        return keypair.x;
    }

    this.mine = function(address) { // only used by callbacks...
        return address[0] == keypair['y'][0] && address[1] == keypair['y'][1];
    }

    this.friend = function(name, address) {
        friends[name] = address;
        return "Friend added.";
    }

    this.check = function() {
        var pTransfers = [
            [this.zsc.pTransfers(yHash, 0, 0), this.zsc.pTransfers(yHash, 0, 1)],
            [this.zsc.pTransfers(yHash, 1, 0), this.zsc.pTransfers(yHash, 1, 1)]
        ];
        this.pending = zether.readBalance(pTransfers[0], pTransfers[1], keypair['x'], this.pending, this.pending + 1000000); // hardcoded range...?
    }

    // still useful for debug
    this.peek = function() {
        var acc = [
            [this.zsc.acc(yHash, 0, 0), this.zsc.acc(yHash, 0, 1)],
            [this.zsc.acc(yHash, 1, 0), this.zsc.acc(yHash, 1, 1)]
        ];
        var available = zether.readBalance(acc[0], acc[1], keypair['x'], 0, 1000000); // hardcoded range...?
        var pTransfers = [
            [this.zsc.pTransfers(yHash, 0, 0), this.zsc.pTransfers(yHash, 0, 1)],
            [this.zsc.pTransfers(yHash, 1, 0), this.zsc.pTransfers(yHash, 1, 1)]
        ];
        var pending = zether.readBalance(pTransfers[0], pTransfers[1], keypair['x'], 0, 1000000); // hardcoded range...?
        return {
            "available": available,
            "pending": pending
        }
    }

    this.deposit = function(value) {
        var events = this.zsc.FundOccurred();
        var timer = setTimeout(function() {
            events.stopWatching();
            console.log("deposit event listener expired...")
        }, 5000)
        events.watch(function(error, event) {
            clearTimeout(timer);
            if (error) {
                console.log("Error: " + error);
            } else {
                if (that.mine(event.args['funder'])) {
                    that.available += value;
                    // ^^^ this makes sense now that deposits are immediately folded into acc, as opposed to pending
                    // the benefit is that large deposits can be made without later inducing delays (i.e., when the next transfer/withdrawal is made)
                    // the cost is that an attempt to simultaneously deposit and transfer will cause problems
                    // this is a design choice; i am happy to revisit...
                    console.log("Deposit of " + value + " was successful. Balance is now " + (that.available + that.pending) + ".");
                    events.stopWatching();
                }
            }
        });

        this.zsc.fund(keypair['y'], value, { from: eth.accounts[0], gas: 5470000 });
        return "Initiating deposit.";
    }

    this.transfer = function(name, value) {
        if (value > this.available) {
            if (value > this.available + this.pending) {
                throw "Requested transfer amount of " + value + " exceeds available balance of " + (this.available + this.pending) + ".";
            } else {
                var events = this.zsc.RollOverOccurred();
                var timer = setTimeout(function() {
                    events.stopWatching();
                    console.log("rollover listener expired...")
                }, 5000)
                events.watch(function(error, event) {
                    clearTimeout(timer);
                    if (error) {
                        console.log("Error: " + error);
                    } else {
                        console.log("===== roll over =====")
                        if (that.mine(event.args['roller'])) {
                            // that.available = peek; // warning: peek could become out-of-date for rapid calls?!?
                            that.available += that.pending;
                            that.pending = 0;
                            events.stopWatching();
                            that.transfer(name, value);
                        }
                    }
                });
                this.zsc.rollOver(keypair['y'], { from: eth.accounts[0], gas: 5470000 });
                return "Initiating transfer.";
            }
        }
        var acc = [
            [this.zsc.acc(yHash, 0, 0), this.zsc.acc(yHash, 0, 1)],
            [this.zsc.acc(yHash, 1, 0), this.zsc.acc(yHash, 1, 1)]
        ];
        var proof = zether.proveTransfer(acc[0], acc[1], keypair['y'], friends[name], keypair['x'], value, this.available - value);
        var signature = signTransfer(friends[name], proof['outL'], proof['inL'], proof['inOutR']);
        var events = this.zsc.TransferOccurred();
        var timer = setTimeout(function() {
            events.stopWatching();
            console.log("transfer listener expired...")
        }, 5000)
        events.watch(function(error, event) {
            clearTimeout(timer);
            if (error) {
                console.log("Error: " + error);
            } else {
                if (that.mine(event.args['sender'])) {
                    that.available -= value;
                    console.log("Transfer of " + value + " was successful. Balance now " + (that.available + that.pending) + ".");
                    events.stopWatching();
                }
            }
        });
        this.zsc.transfer(proof['outL'], proof['inL'], proof['inOutR'], keypair['y'], friends[name], proof['proof'], signature, { from: eth.accounts[0], gas: 5470000 });
        return "Initiating transfer.";
    }

    this.withdraw = function(value) {
        if (value > this.available) {
            if (value > this.available + this.pending) {
                throw "Requested transfer amount of " + value + " exceeds available balance of " + (this.available + this.pending) + "."
            } else {
                var events = this.zsc.RollOverOccurred();
                var timer = setTimeout(function() {
                    events.stopWatching();
                    console.log("rollover event listener expired...")
                }, 5000)
                events.watch(function(error, event) {
                    clearTimeout(timer);
                    if (error) {
                        console.log("Error: " + error);
                    } else {
                        console.log("===== roll over =====")
                        if (that.mine(event.args['roller'])) {
                            // that.available = peek; // warning: peek could become out-of-date for rapid calls?!?
                            that.available += that.pending;
                            that.pending = 0;
                            events.stopWatching();
                            that.withdraw(value);
                        }
                    }
                });
                this.zsc.rollOver(keypair['y'], { from: eth.accounts[0], gas: 5470000 });
                return "Initiating withdrawal.";
            }
        }
        var acc = [
            [this.zsc.acc(yHash, 0, 0), this.zsc.acc(yHash, 0, 1)],
            [this.zsc.acc(yHash, 1, 0), this.zsc.acc(yHash, 1, 1)]
        ];
        var proof = zether.proveBurn(acc[0], acc[1], keypair['y'], value, keypair['x'], this.available - value);
        var signature = signBurn(value);
        var events = this.zsc.BurnOccurred();
        var timer = setTimeout(function() {
            events.stopWatching();
            console.log("withdraw listener expired...")
        }, 5000)
        events.watch(function(error, event) {
            clearTimeout(timer);
            if (error) {
                console.log("Error: " + error);
            } else {
                if (that.mine(event.args['burner'])) {
                    that.available -= value;
                    console.log("Withdrawal of " + value + " was successful. Balance now " + (that.available + that.pending) + ".");
                    events.stopWatching();
                }
            }
        });
        this.zsc.burn(keypair['y'], value, proof, signature, { from: eth.accounts[0], gas: 5470000 });
        return "Initiating withdrawal.";
    }

    this.zsc.fund(keypair['y'], 0, { from: eth.accounts[0], gas: 5470000 }); // dummy "registration" deposit
}