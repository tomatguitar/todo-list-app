import React, { Component } from 'react';

import './item-status-filter.css';

class ItemStatusFilter extends Component {
  constructor() {
    super();
    this.buttons = [
      { name: 'all', label: 'All' },
      { name: 'active', label: 'Active' },
      { name: 'done', label: 'Done' },
    ];
  }

  render() {
    const { filter, onFilterChange } = this.props;
    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const classSecond = isActive ? 'btn-info' : 'btn-outline-secondary';
      return (
        <button
          type="button"
          className={`btn ${classSecond}`}
          key={name}
          onClick={() => onFilterChange(name)}
        >
          {label}
        </button>
      );
    });
    return <div className="btn-group">{buttons}</div>;
  }
}

export default ItemStatusFilter;
