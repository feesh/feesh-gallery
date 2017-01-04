import React from 'react';
import { mount } from 'enzyme';
import { assert } from 'chai';

import SelfPay from '../components/selfpay-section';
import scenarios from '../assets/json/scenarios.json';

describe('Self Pay page', () => {
  const page = mount(<SelfPay estimate={scenarios.scenario_16} />);

  describe('sections', () => {
    it('should render the confirm section', () => {
      assert.lengthOf(page.find('.content__est-confirm'), 1);
    });

    it('should render two buttons - close and pay now', () => {
      assert.lengthOf(page.find('.btn'), 2);
    });
  });
});
