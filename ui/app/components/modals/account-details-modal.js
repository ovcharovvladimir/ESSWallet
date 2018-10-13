const Component = require('react').Component
const PropTypes = require('prop-types')
const h = require('react-hyperscript')
const inherits = require('util').inherits
const connect = require('react-redux').connect
const actions = require('../../actions')
const AccountModalContainer = require('./account-modal-container')
const { getSelectedIdentity } = require('../../selectors')
const genAccountLink = require('../../../lib/account-link.js')
const QrView = require('../qr-code')
const EditableLabel = require('../editable-label')

import Button from '../button'

function mapStateToProps (state) {
  return {
    network: state.metamask.network,
    selectedIdentity: getSelectedIdentity(state),
    keyrings: state.metamask.keyrings,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    // Is this supposed to be used somewhere?
    showQrView: (selected, identity) => dispatch(actions.showQrView(selected, identity)),
    showExportPrivateKeyModal: () => {
      dispatch(actions.showModal({ name: 'EXPORT_PRIVATE_KEY' }))
    },
    hideModal: () => dispatch(actions.hideModal()),
    setAccountLabel: (address, label) => dispatch(actions.setAccountLabel(address, label)),
    copyToClipboard: () => {
      document.querySelector('.qr-ellip-address').select()
      document.execCommand('copy')
    }
  }
}

inherits(AccountDetailsModal, Component)
function AccountDetailsModal () {
  Component.call(this)
}

AccountDetailsModal.contextTypes = {
  t: PropTypes.func,
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(AccountDetailsModal)

// Not yet pixel perfect todos:
  // fonts of qr-header

AccountDetailsModal.prototype.render = function () {
  const {
    selectedIdentity,
    network,
    showExportPrivateKeyModal,
    setAccountLabel,
    keyrings,
    copyToClipboard,
  } = this.props
  const { name, address } = selectedIdentity

  const keyring = keyrings.find((kr) => {
    return kr.accounts.includes(address)
  })

  let exportPrivateKeyFeatureEnabled = true
  // This feature is disabled for hardware wallets
  if (keyring && keyring.type.search('Hardware') !== -1) {
    exportPrivateKeyFeatureEnabled = false
  }

  return h(AccountModalContainer, {}, [
      h(QrView, {
        Qr: {
          data: address,
        },
      }),

      h('div', [

        h('div.account-modal-link', {
          onClick: copyToClipboard
        }, [
          h('div.account-modal-link__img', [
            h('img', {src: '../images/icon-copy.svg'})
          ]),

          h('div.account-modal-link__text', {}, this.context.t('copyAddress1'))
        ]),

        // Holding on redesign for Export Private Key functionality
        exportPrivateKeyFeatureEnabled ? h('div.account-modal-link', {
            onClick: () => showExportPrivateKeyModal()
          }, [
          h('div.account-modal-link__img', [
            h('img', {src: '../images/icon-export.svg'})
          ]),

          h('div.account-modal-link__text', this.context.t('exportPrivateKey'))
        ]) : null,

        h(EditableLabel, {
          className: 'account-modal-link',
          defaultValue: name,
          onSubmit: label => setAccountLabel(address, label),
        }),

        h('div.account-modal-link', {
            onClick: () => global.platform.openWindow({ url: genAccountLink(address, network) })
          }, [
          h('div.account-modal-link__img', [
            h('img', {src: '../images/icon-info.svg'})
          ]),

          h('div.account-modal-link__text', this.context.t('etherscanView'))
        ]),

        // h('div.account-modal-link.delete', [
        //   h('div.account-modal-link__img', [
        //     h('img', {src: '../images/icon-trash.svg'})
        //   ]),
        //
        //   h('div.account-modal-link__text', {
        //     onClick: () => global.platform.openWindow({ url: genAccountLink(address, network) })
        //   }, this.context.t('deleteAccount'))
        // ])

      ])
  ])
}
