const React = require('react');

class StatusRow extends React.Component {

  /**
   * Render status row component.
   *
   * @returns {React.Component} The component.
   */
  render() {
    let className = 'status-row';
    if (this.props.style !== 'default') {
      className += ` status-row-has-${this.props.style}`;
    }
    return React.createElement(
      'div',
      { className: className },
      this.props.children
    );
  }
}

StatusRow.propTypes = {
  style: React.PropTypes.oneOf(['default', 'warning', 'error']),
  children: React.PropTypes.node
};

StatusRow.defaultProps = {
  style: 'default'
};

StatusRow.displayName = 'StatusRow';

module.exports = StatusRow;