import React, {PropTypes as t} from 'react';

const Select = ({items, onSelect, size, value}) =>
  <select onChange={onSelect} size={size} value={value}>
    {
      items.map(item => <option key={item}>{item}</option>)
    }
  </select>;

Select.propTypes = {
  items: t.arrayOf(t.string).isRequired,
  onSelect: t.func.isRequired,
  size: t.number,
  value: t.string
};

export default Select;
