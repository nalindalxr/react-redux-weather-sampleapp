import React from 'react';
import _ from 'lodash';
import { Sparklines , SparklinesLine , SparklinesReferenceLine } from 'react-sparklines';

function average(data){
	
	return _.round(_.sum(data)/data.length);
	
}

const Chart = (props) => {
	
	return (
		<div>
			<Sparklines height={240} width={320} data={props.data} >
				<SparklinesLine color={props.color} />
				<SparklinesReferenceLine type="avg" />
			</Sparklines>
			<div>
				{average(props.data)}
			</div>
		</div>
		
	);
	
}

export default Chart;