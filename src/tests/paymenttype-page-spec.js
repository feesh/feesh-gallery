import React from 'react';
import { mount } from 'enzyme';
import { assert } from 'chai';

import PaymentType from '../components/paymenttype-section';
import scenarios from '../assets/json/scenarios.json';

describe('Payment Type page', () => {
  const page = mount(<PaymentType estimate={scenarios.scenario_16} />);

  describe('sections', () => {
    it('should render the payment type section', () => {
      assert.lengthOf(page.find('.content__est-paytype'), 1);
    });

    it('should render two payment types', () => {
      assert.lengthOf(page.find('.paytype'), 2);
    });

    it('should only have one selected payment type', () => {
      assert.lengthOf(page.find('.paytype.selected'), 1);
    });
  });

  describe('panel interactions', () => {
    const panels = page.find('.paytype');

    it('insurance panel should be selected when clicked', () => {
      const insurancePanel = panels.at(0);

      insurancePanel.simulate('click');

      assert.ok(insurancePanel.hasClass('selected'));
    });

    it('selfpay panel should be selected when clicked', () => {
      const selfpayPanel = panels.at(1);

      selfpayPanel.simulate('click');

      assert.ok(selfpayPanel.hasClass('selected'));
    });
  });
});
