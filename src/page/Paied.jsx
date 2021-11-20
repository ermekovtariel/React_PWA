/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { StepBackwardOutlined } from '@ant-design/icons';

import '../style/Paied.scss';

function Payed() {
  return (
    <div className='next_page'>
      <h1 className='title'>You are Awesome!!!</h1>
      <h4 className='title'>TNX FOR 100$</h4>
      <Link className='link' to='/'>
        <Button className={'button'} icon={<StepBackwardOutlined />}>
          Back
        </Button>
      </Link>
    </div>
  );
}

export default Payed;
