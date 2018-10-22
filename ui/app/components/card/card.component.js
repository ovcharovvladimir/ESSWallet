import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class Card extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    overrideClassName: PropTypes.bool,
    children: PropTypes.node,
  }

  render () {
    const { className, overrideClassName } = this.props

    return (
      <div className={classnames({ 'card': !overrideClassName }, className)}>
        { this.props.children }
      </div>
    )
  }
}
