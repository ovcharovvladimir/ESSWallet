import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Identicon from '../identicon'
import Tooltip from '../tooltip-v2'
import copyToClipboard from 'copy-to-clipboard'
import { CARDS_VARIANT } from './sender-to-recipient.constants'

const variantHash = {
  [CARDS_VARIANT]: 'sender-to-recipient--cards',
}

export default class SenderToRecipient extends PureComponent {
  static propTypes = {
    senderName: PropTypes.string,
    senderAddress: PropTypes.string,
    recipientName: PropTypes.string,
    recipientAddress: PropTypes.string,
    t: PropTypes.func,
    variant: PropTypes.oneOf([CARDS_VARIANT]),
    addressOnly: PropTypes.bool,
    assetImage: PropTypes.string,
  }


  static contextTypes = {
    t: PropTypes.func,
  }

  state = {
    senderAddressCopied: false,
    recipientAddressCopied: false,
  }

  renderSenderAddress () {
    const { t } = this.context

    return (
      <Tooltip
        position="bottom"
        title={this.state.senderAddressCopied ? t('copiedExclamation') : t('copyAddress')}
        wrapperClassName="sender-to-recipient__tooltip-wrapper"
        containerClassName="sender-to-recipient__tooltip-container"
        onHidden={() => this.setState({ senderAddressCopied: false })}
      >

    </Tooltip>
    )
  }

  renderRecipientWithAddress () {
    const { t } = this.context
    const {recipientAddress} = this.props

    return (
      <div
        className="sender-to-recipient__party sender-to-recipient__party--recipient sender-to-recipient__party--recipient-with-address"
        onClick={() => {
          this.setState({ recipientAddressCopied: true })
          copyToClipboard(recipientAddress)
        }}
      >
        <Tooltip
          position="bottom"
          title={this.state.recipientAddressCopied ? t('copiedExclamation') : t('copyAddress')}
          wrapperClassName="sender-to-recipient__tooltip-wrapper"
          containerClassName="sender-to-recipient__tooltip-container"
          onHidden={() => this.setState({ recipientAddressCopied: false })}
        >
        </Tooltip>
      </div>
    )
  }

  renderRecipientWithoutAddress () {
    return (
      <div className="sender-to-recipient__party sender-to-recipient__party--recipient">
        { !this.props.addressOnly && <i className="fa fa-file-text-o" /> }
        <div className="sender-to-recipient__name">
          { this.context.t('newContract') }
        </div>
      </div>
    )
  }

  renderArrow () {
    return this.props.variant === CARDS_VARIANT
      ? (
        <div className="sender-to-recipient__arrow-container">
          <img
            height={20}
            src="./images/caret-right.svg"
          />
        </div>
      ) : (
        <div className="sender-to-recipient__arrow-container">
          <div className="sender-to-recipient__arrow-circle">
            <img
              height={15}
              width={15}
              src="./images/arrow-right.svg"
            />
          </div>
        </div>
      )
  }

  render () {
    const { recipientAddress, variant } = this.props

    return (
      <div className={classnames(variantHash[variant])}>

        {
          recipientAddress
            ? this.renderRecipientWithAddress()
            : this.renderRecipientWithoutAddress()
        }
      </div>
    )
  }
}
