module.exports = function (network) {
  const net = parseInt(network)
  let prefix
  switch (net) {
    case 1: // main net
      prefix = ''
      break
    case 3: // essentia test net
      prefix = 'essentia.'
      break
    case 4: // rinkeby test net
      prefix = 'rinkeby.'
      break
      case 5678: // essentia test net
      prefix = 'essentia.'
      break
      case 4201: // essentia main net
      prefix = 'essentia.'
      break
    case 42: // kovan test net
      prefix = 'kovan.'
      break
    default:
      prefix = ''
  }
  return prefix
}
