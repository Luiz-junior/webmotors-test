import React from 'react';
import './styles.scss';

const Select = props => {
  const { sectionName, label, className, onChangeMake, firstOption, list } = props;

  return (
    <div className={`section-select ${sectionName}`}>
      <div className="div-label-select">
        <label className="label-select">{label}:</label>
      </div>
      <select className={`selects ${className}`} onChange={(e) => onChangeMake(e)}>
        <option value="">{firstOption}</option>
        {
          list && (
            list.map(item => (
              <option key={item.ID} value={item.ID}>{item.Name}</option>
            ))
          )
        }
      </select>
    </div>
  );
};

export default Select;