import React from 'react';
import { connect } from 'react-redux';
import Example from '../components/Example';

const ExampleContainer = (...props) => {
  return (
    <div>
      <Example {...props} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  state: state,
});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ExampleContainer);
