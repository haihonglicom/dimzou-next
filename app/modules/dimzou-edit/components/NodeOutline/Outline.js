import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { LabelButton } from '../ScrollButton';

import './style.scss'

function Outline(props) {
  const { data } = props;
  // item: { id, label }
  const content = data && data.map((item) => {
    const targetHash = `#content-${item.id}`;
    return (
      <div
        key={item.id}
        className="dz-DimzouOutline__heading dz-DimzouOutline__heading_2"
        style={{ '--heading-level': 2}}
      >
        <LabelButton
          className={classNames({
            'is-active': props.activeHash === targetHash,
          })}
          data-target={targetHash}
          onClick={() => {
            props.onItemClick(targetHash);
          }}
          data-node-level='heading'
        >
          {item.label}
        </LabelButton>
      </div>
    )
  });
  return (
    <div 
      className={classNames("dz-DimzouOutline", {
        'has-content': content && content.length,
      })}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {content}
    </div>
  )
}

Outline.propTypes = {
  data: PropTypes.array,
  onItemClick: PropTypes.func, // 
  activeHash: PropTypes.string,
}

export default Outline;