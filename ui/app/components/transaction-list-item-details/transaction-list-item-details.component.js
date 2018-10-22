import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import SenderToRecipient from '../sender-to-recipient'
import { FIELDS_VARIANT } from '../sender-to-recipient/sender-to-recipient.constants'
import TransactionActivityLog from '../transaction-activity-log'
import TransactionBreakdown from '../transaction-breakdown'
import Button from '../button'
import prefixForNetwork from '../../../lib/etherscan-prefix-for-network'

export default class TransactionListItemDetails extends PureComponent {
  static contextTypes = {
    t: PropTypes.func,
  }

  static propTypes = {
    onCancel: PropTypes.func,
    onRetry: PropTypes.func,
    showCancel: PropTypes.bool,
    showRetry: PropTypes.bool,
    transaction: PropTypes.object,
  }

  handleEtherscanClick = () => {
    const { hash, metamaskNetworkId } = this.props.transaction

    const prefix = prefixForNetwork(metamaskNetworkId)
    const etherscanUrl = `https://${prefix}etherscan.io/tx/${hash}`
    global.platform.openWindow({ url: etherscanUrl })
    this.setState({ showTransactionDetails: true })
  }

  handleCancel = event => {
    const { onCancel } = this.props

    event.stopPropagation()
    onCancel()
  }

  handleRetry = event => {
    const { onRetry } = this.props

    event.stopPropagation()
    onRetry()
  }

  render () {
    const { t } = this.context
    const { transaction, showCancel, showRetry } = this.props
    const { txParams: { to, from } = {} } = transaction

    return (
      <div className="transaction-list-item-details">
        <div className="transaction-list-item-details__col">
          <TransactionBreakdown
            transaction={transaction}
          />
        </div>
        <div className="transaction-list-item-details__col">
          <SenderToRecipient
            variant={FIELDS_VARIANT}
            addressOnly
            recipientAddress={to}
            senderAddress={from}
          />
        </div>
      </div>
    )
  }
}
