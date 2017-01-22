// libraries
import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  return _.round(_.sum(data) / data.length);
}

export default (props) => {

  const CHART_HEIGHT = 120;
  const CHART_WIDTH  = 180;

  return (
    <div>
      <Sparklines height={CHART_HEIGHT} width={CHART_WIDTH} data={props.data}>
        <SparklinesLine color={props.color}/>
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  );
}
