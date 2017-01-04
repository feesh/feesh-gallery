import React from 'react';
import { mount } from 'enzyme';
import { assert } from 'chai';

import App from '../app';
import scenarios from '../assets/json/scenarios.json';

describe('Main page', () => {
  const page = mount(<App estimate={scenarios.scenario_16} />);

  describe('sections', () => {
    it('should render the Welcome (intro) section', () => {
      assert.lengthOf(page.find('.content__est-intro'), 1);
    });

    it('should render the PaymentInfo (select) section', () => {
      assert.lengthOf(page.find('.content__est-select'), 1);
    });

    it('should render the Education (info) section', () => {
      assert.lengthOf(page.find('.content__est-info'), 1);
    });
  });

  describe('accordion interaction', () => {
    const selfpayAccordion = page.find('#est-selfpay');
    const insuranceAccordion = page.find('#est-insurance');

    it('selfpay should be active (have an active class) when clicked', () => {
      selfpayAccordion.simulate('click');
      assert.ok(selfpayAccordion.hasClass('accordion-active'));
    });

    it('insurance should be active (have an active class) when clicked', () => {
      insuranceAccordion.simulate('click');
      assert.ok(insuranceAccordion.hasClass('accordion-active'));
    });
  });
});
