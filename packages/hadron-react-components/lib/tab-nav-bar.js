const React = require('react');
const map = require('lodash.map');

/**
 * Represents tabbed navigation with a tabbed header and content.
 */
class TabNavBar extends React.Component {

  /**
   * Instantiate the tab nav bar.
   *
   * @param {Object} props - The props.
   */
  constructor(props) {
    super(props);
    this.state = {
      paused: false,
      activeTabIndex: props.activeTabIndex || 0
    };
  }

  /**
   * Handle component receiving new props.
   *
   * @param {Object} nextProps - The new props.
   */
  componentWillReceiveProps(nextProps) {
    if (nextProps.activeTabIndex !== undefined) {
      this.setState({
        activeTabIndex: nextProps.activeTabIndex
      });
    }
  }

  /**
   * Handle a tab being clicked.
   *
   * @param {Number} idx - The tab index.
   * @param {Event} evt - The event.
   */
  onTabClicked(idx, evt) {
    evt.preventDefault();
    this.setState({ activeTabIndex: idx });
    if (this.props.onTabClicked) {
      this.props.onTabClicked(idx, this.props.tabs[idx]);
    }
  }

  /**
   * Render the tabs.
   *
   * @returns {React.Component} The tabs.
   */
  renderTabs() {
    const listItems = map(this.props.tabs, (tab, idx) => React.createElement(
      'li',
      { onClick: this.onTabClicked.bind(this, idx),
        id: tab.replace(/ /g, '_'),
        key: `tab-${idx}`,
        'data-test-id': `${tab.toLowerCase().replace(/ /g, '-')}-tab`,
        className: `tab-nav-bar tab-nav-bar-tab ${idx === this.state.activeTabIndex ? 'tab-nav-bar-is-selected' : ''}` },
      React.createElement(
        'span',
        { className: 'tab-nav-bar tab-nav-bar-link', href: '#' },
        tab
      )
    ));
    return React.createElement(
      'ul',
      { className: 'tab-nav-bar tab-nav-bar-tabs' },
      listItems
    );
  }

  /**
   * Only render the active view, mounting it and unmounting all non-active views.
   *
   * @return {React.Element}    active view
   */
  renderActiveView() {
    return this.props.views[this.state.activeTabIndex];
  }

  /**
   * Render all views, but only make the active view visible. This is done
   * by wrapping all views in their own div, and setting the `hidden` class
   * on all but the active div.
   *
   * @return {React.Element}    div of all views
   */
  renderViews() {
    const tabbedViews = map(this.props.views, (view, idx) => {
      return React.createElement(
        'div',
        {
          key: `tab-content-${idx}`,
          'data-test-id': `${this.props.tabs[idx].toLowerCase().replace(/ /g, '-')}-content`,
          className: idx === this.state.activeTabIndex ? 'tab' : 'tab hidden' },
        view
      );
    });

    return React.createElement(
      'div',
      { className: 'tab-views' },
      tabbedViews
    );
  }

  /**
   * Render the component.
   *
   * @returns {React.Component} The component.
   */
  render() {
    return React.createElement(
      'div',
      { className: `tab-nav-bar tab-nav-bar-is-${this.props.theme}-theme` },
      React.createElement(
        'div',
        { className: 'tab-nav-bar tab-nav-bar-header' },
        this.renderTabs()
      ),
      this.props.mountAllViews ? this.renderViews() : this.renderActiveView()
    );
  }
}

TabNavBar.propTypes = {
  theme: React.PropTypes.oneOf(['dark', 'light']),
  activeTabIndex: React.PropTypes.number,
  mountAllViews: React.PropTypes.bool,
  tabs: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  views: React.PropTypes.arrayOf(React.PropTypes.element).isRequired,
  onTabClicked: React.PropTypes.func
};

TabNavBar.defaultProps = {
  theme: 'light',
  activeTabIndex: 0,
  mountAllViews: true
};

TabNavBar.displayName = 'TabNavBar';

module.exports = TabNavBar;