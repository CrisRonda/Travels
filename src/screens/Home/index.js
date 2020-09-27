import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Layout from 'src/components/Layouts/WithNavigation';
import {fakedata} from 'src/constans';
const Home = () => {
  const [index, setIndex] = useState(0);
  const {principal, details} = fakedata[index];
  const onChange = (value) => {
    const lengthData = fakedata.length;
    const newIndex = index + value;
    if (lengthData === newIndex) {
      setIndex(0);
    }
    if (newIndex <= 0) {
      setIndex(lengthData - 1);
    }
    if (newIndex >= 0 && newIndex < lengthData) {
      setIndex(newIndex);
    }
  };
  return (
    <Layout
      principal={principal}
      details={details}
      image={principal.photo}
      onBack={() => onChange(-1)}
      onNext={() => onChange(1)}></Layout>
  );
};
Home.propTypes = {};
Home.defaultProps = {};
export default Home;
