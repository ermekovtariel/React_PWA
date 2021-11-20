/* eslint-disable eqeqeq */
import React from 'react';
import { DollarCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import '../style/Paied.scss';

const PayButton = (props) => {
  const { text, status } = props;

  return (
    <Link className='link' to='/paied'>
      <Button
        className='button'
        onClick={() => props.function(!status)}
        disabled={status}
        type='primary'
        icon={<DollarCircleOutlined />}
      >
        {text}
      </Button>
    </Link>
  );
};

export default PayButton;
