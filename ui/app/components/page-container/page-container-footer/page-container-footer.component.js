import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '../../button'

export default class PageContainerFooter extends Component {

  static propTypes = {
    children: PropTypes.node,
    onCancel: PropTypes.func,
    cancelText: PropTypes.string,
    onSubmit: PropTypes.func,
    submitText: PropTypes.string,
    disabled: PropTypes.bool,
    submitButtonType: PropTypes.string,
  }

  static contextTypes = {
    t: PropTypes.func,
  }

  render () {
    const {
      children,
      // onCancel,
      // cancelText,
      onSubmit,
      submitText,
      disabled,
      submitButtonType,
    } = this.props

    return (
      <div className="page-container__footer">

        <header>
          {/* <Button
            type="default"
            large
            className="page-container__footer-button"
            onClick={e => onCancel(e)}
          >
            { cancelText || this.context.t('cancel') }
          </Button> */}

          <Button
            type={submitButtonType || 'primary'}
            className="page-container__footer-button"
            disabled={disabled}
            onClick={e => onSubmit(e)}
          >
            { submitText || this.context.t('add') }
          </Button>
        </header>

        {children && (
          <footer>
            {children}
          </footer>
        )}

      </div>
    )
  }

}
