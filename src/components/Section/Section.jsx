import React from 'react';
import PropTypes from 'prop-types';

const Section = ({title, children}) => {
        return (
          <>
                <h3>{title}</h3>
                {children}
          </>
        )
      }

export default Section
      
      Section.propTypes = {
          title: PropTypes.string.isRequired,
      //     children: PropTypes.node.isRequired
      }