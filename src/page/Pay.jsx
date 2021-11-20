/* eslint-disable eqeqeq */
import React, { useState } from 'react';
import { Card } from 'antd';
import 'antd/dist/antd.css';

import { Button } from '../Components';
import '../style/Pay.scss';

function Pay() {
  const [state, setState] = useState(false);
  const [active, setActive] = useState(3);

  const [pay, setPay] = useState(100);

  return (
    <>
      <h1 className={pay == 100 ? 'title' : 'red_title'}>
        {pay == 100 ? "U'll pay" : 'Price'} {pay}${' '}
        {pay != 100 && "isn't active!"}
      </h1>
      <div className='cards'>
        <Card
          onClick={() => {
            setState(true);
            setPay(10);
            setActive(1);
          }}
          className={active == 1 ? 'lightslate_grey card' : 'card'}
          style={{ width: 100 }}
        >
          10$
        </Card>
        <Card
          onClick={() => {
            setState(true);
            setPay(50);
            setActive(2);
          }}
          className={active == 2 ? 'lightslate_grey card' : 'card'}
          style={{ width: 100 }}
        >
          50$
        </Card>
        <Card
          onClick={() => {
            setState(false);
            setPay(100);
            setActive(3);
          }}
          className={active == 3 ? 'lightslate_grey card' : 'card'}
          style={{ width: 100 }}
        >
          100$
        </Card>
      </div>

      <div className='button'>
        <Button text={'Pay'} status={state} function={setState} />
      </div>
    </>
  );
}

export default Pay;
