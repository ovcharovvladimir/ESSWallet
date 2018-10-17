import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class PageContainerContent extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render () {
    return (
      <div className="page-container__content scroll">
        {this.props.children}
      </div>
    )
  }

}
