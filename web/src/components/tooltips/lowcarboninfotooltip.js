import React from 'react';
import { connect } from 'react-redux';

import { __ } from '../../helpers/translation';
import { LOW_CARBON_INFO_TOOLTIP_KEY } from '../../helpers/constants';

import Tooltip from '../tooltip';

const mapStateToProps = state => ({
  visible: state.application.tooltipDisplayMode === LOW_CARBON_INFO_TOOLTIP_KEY,
});

const LowCarbonInfoTooltip = ({ visible }) => {
  if (!visible) return null;

  return (
    <Tooltip id="lowcarb-info-tooltip">
      <b>{__('tooltips.lowcarbon')}</b>
      <br />
      <small>{__('tooltips.lowCarbDescription')}</small>
      <br />
    </Tooltip>
  );
};

export default connect(mapStateToProps)(LowCarbonInfoTooltip);
