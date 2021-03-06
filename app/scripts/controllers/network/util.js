const {
  ESSENTIA,
  ESSENTIAMAINNET,
  RINKEBY,
  KOVAN,
  MAINNET,
  ROPSTEN_CODE,
  ROPSTEN_DISPLAY_NAME,
  ESSENTIA_CODE,
  ESSENTIAMAINNET_CODE,
  RINKEYBY_CODE,
  KOVAN_CODE,
  ESSENTIA_DISPLAY_NAME,
  ESSENTIAMAINNET_DISPLAY_NAME,
  RINKEBY_DISPLAY_NAME,
  KOVAN_DISPLAY_NAME,
  MAINNET_DISPLAY_NAME,
} = require('./enums')

const networkToNameMap = {
  [ESSENTIA]: ESSENTIA_DISPLAY_NAME,
  [ESSENTIAMAINNET]: ESSENTIAMAINNET_DISPLAY_NAME,
  [RINKEBY]: RINKEBY_DISPLAY_NAME,
  [KOVAN]: KOVAN_DISPLAY_NAME,
  [MAINNET]: MAINNET_DISPLAY_NAME,
  [ROPSTEN_CODE]: ROPSTEN_DISPLAY_NAME,
  [RINKEYBY_CODE]: RINKEBY_DISPLAY_NAME,
  [KOVAN_CODE]: KOVAN_DISPLAY_NAME,
  [ESSENTIA_CODE]: ESSENTIA_DISPLAY_NAME,
  [ESSENTIAMAINNET_CODE]: ESSENTIAMAINNET_DISPLAY_NAME,
}

const getNetworkDisplayName = key => networkToNameMap[key]

module.exports = {
  getNetworkDisplayName,
}
