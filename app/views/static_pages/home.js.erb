$(document).ready(function () {
	handleRefresh("http://meteo.ozzyboshi.com:8888/WeatherStation/MeteoServices/Readings/lastReading/updateMeteo");
	setInterval(function () {handleRefresh("http://meteo.ozzyboshi.com:8888/WeatherStation/MeteoServices/Readings/lastReading/updateMeteo")}, 30000);
	
	print_termometro($('#termometroesterno'));
	print_termometro($('#termometrointerno'));
	
	print_gauge($('#gaugeumiditaesterna'),100);
	print_gauge($('#gaugeumiditainterna'),100);
	
	print_gauge_pressione($('#gaugepressione'),1600);
	print_gauge_vento($('#gaugevento'),1600);
	
	print_termometro_pioggia($('#termometropioggia'));
});

function handleRefresh(url) {
	var newScriptElement = document.createElement("script");
	newScriptElement.setAttribute("src",url);
	newScriptElement.setAttribute("id","jsonp");

	var oldScriptElement = document.getElementById("jsonp");
	var head = document.getElementsByTagName("head")[0];
	if (oldScriptElement == null)
		head.appendChild(newScriptElement);
	else{
		head.replaceChild(newScriptElement, oldScriptElement);	
	}
}
function updateMeteo(sales) {
	var date = new Date(String(sales[0].data).replace(" ","T")+"Z");
	
	$("#data").text(date.toString());
	$("#tempesterna").text(sales[0].temperatura_esterna*1+" °");
	$("#tempinterna").text(sales[0].temperatura_interna*1+" °");
	$("#umiesterna").text(sales[0].umidita_esterna*1+"%");
	$("#umiinterna").text(sales[0].umidita_interna*1+"%");
	$("#ventomedio").text(sales[0].vento_medio*1+" Km/h");
	$("#ventoraffica").text(sales[0].vento_raffica*1+" Km/h");
	$("#pressione").text(sales[0].pressione*1+" hPa");
	
	
	$('#termometroesterno').jqxLinearGauge('animationDuration', 1000);
	$('#termometroesterno').jqxLinearGauge('value',sales[0].temperatura_esterna*1);
	
	$('#termometrointerno').jqxLinearGauge('animationDuration', 1000);
	$('#termometrointerno').jqxLinearGauge('value',sales[0].temperatura_interna*1);
	
	$("#gaugeumiditaesterna").jqxGauge('setValue', sales[0].umidita_esterna*1);
	$("#gaugeumiditainterna").jqxGauge('setValue', sales[0].umidita_interna*1);
	
	$("#gaugepressione").jqxGauge('setValue', sales[0].pressione*1);

	$("#gaugevento").jqxGauge('setValue', 90+(22.5*sales[0].vento_direzione));
	$('#termometropioggia').jqxLinearGauge('value',sales[0].pioggia_parziale_day*1);
	$("#pioggiamezzanotte").text(sales[0].pioggia_parziale_day*1+" mm");
}

function print_termometro(divobjectselector)
{
	var theme = getDemoTheme(),
				majorTicks = { size: '15%', interval: 10 },
				minorTicks = { size: '5%', interval: 2.5, style: { 'stroke-width': 1, stroke: '#aaaaaa'} },
				labels = { interval: 10 };
				
	divobjectselector.jqxLinearGauge({
				orientation: 'vertical',
				labels: labels,
				ticksMajor: majorTicks,
				ticksMinor: minorTicks,
				max: 60,
				value: -60,
				pointer: { size: '6%', style: { fill: '#FF0000'} },
				colorScheme: 'scheme05',
	});
	divobjectselector.jqxLinearGauge({ pointer: { pointerType: 'default', size: '5%', visible: true, offset: -5,style: { fill: '#FF0000'}}});
	divobjectselector.jqxLinearGauge({height: 250 });
	divobjectselector.jqxLinearGauge({width: 100 })
	divobjectselector.jqxLinearGauge({min: -10 });
}

function print_gauge(divobjectselector,maxvalue)
{
	var labels = { visible: true, position: 'inside' };
	$(divobjectselector).jqxGauge({
				ranges: [{ startValue: 0, endValue: 20, style: { fill: '#e2e2e2', stroke: '#e2e2e2' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 },
						{ startValue: 20, endValue: 40, style: { fill: '#f6de54', stroke: '#f6de54' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 },
						{ startValue: 40, endValue: 60, style: { fill: '#db5016', stroke: '#db5016' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 },
						{ startValue: 60, endValue: 80, style: { fill: '#db5016', stroke: '#db5016' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 },
						{ startValue: 80, endValue: 100, style: { fill: '#d12841', stroke: '#d32841' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 }
				],
				cap: { radius: 0.04 },
				caption: { offset: [0, -25], value: '%', position: 'bottom' },
				value: 0,
				style: { stroke: '#ffffff', 'stroke-width': '1px', fill: '#ffffff' },
				animationDuration: 1500,
				colorScheme: 'scheme04',
				labels: labels,
				ticksMinor: { interval: 10, size: '7%' },
				ticksMajor: { interval: 20, size: '15%' }
	});
	$(divobjectselector).jqxGauge({ width: 160 });
	$(divobjectselector).jqxGauge({ height: 160 });
	$(divobjectselector).jqxGauge({ max: maxvalue });
}
function print_gauge_pressione(divobjectselector,maxvalue)
{
	var labels = { visible: true, position: 'inside',interval:100 };
	$(divobjectselector).jqxGauge({
				ranges: [{ startValue: 950, endValue: 1000, style: { fill: '#e2e2e2', stroke: '#e2e2e2' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 },
						{ startValue: 1000, endValue: 1050, style: { fill: '#f6de54', stroke: '#f6de54' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 },
						{ startValue: 1050, endValue: 1100, style: { fill: '#db5016', stroke: '#db5016' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 },
						{ startValue: 1100, endValue: 1150, style: { fill: '#d12841', stroke: '#d32841' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 }
				],
				cap: { radius: 0.04 },
				caption: { offset: [0, -25], value: 'hPa', position: 'bottom' },
				value: 0,
				style: { stroke: '#ffffff', 'stroke-width': '1px', fill: '#ffffff' },
				animationDuration: 1500,
				colorScheme: 'scheme04',
				labels: labels,
				ticksMinor: { interval: 10, size: '7%' },
				ticksMajor: { interval: 50, size: '15%' }
	});
	$(divobjectselector).jqxGauge({ width: 220 });
	$(divobjectselector).jqxGauge({ height: 220 });
	$(divobjectselector).jqxGauge({ min: 950 });
	$(divobjectselector).jqxGauge({ max: 1150 });
}
function print_gauge_vento(divobjectselector,maxvalue)
{
	//var labels = { visible: false, position: 'inside',interval:100 };
	
	$(divobjectselector).jqxGauge({
				cap: { radius: 0.04 },
				value: 0,
				style: { stroke: '#ffffff', 'stroke-width': '1px', fill: '#ffffff' },
				animationDuration: 1500,
				colorScheme: 'scheme04',
				pointer: { length: '50%', width: '10%' },
				ticksMinor: { interval: 22.5, size: '5%' },
				ticksMajor: { interval: 45, size: '15%' },
				labels: {
					position: 'outside',distance: '198px',interval: 45,
					formatValue: function (val) 
					{
						if (val == 0) return 'W';
						else if (val == 45) return 'NW';
						else if (val == 135) return 'NE';
						else if (val == 225) return 'SE';
						else if (val == 315) return 'SW';
						else if (val == 90 ) {
							return 'N';
						}
						else if (val == 180 ) {
							return 'E';
						}
						else if (val == 270 ) {
							return 'S';
						}
						return '';
					}
				},
	});
	$(divobjectselector).jqxGauge({ width: 220 });
	$(divobjectselector).jqxGauge({ height: 220 });
	$(divobjectselector).jqxGauge({ min: 0 });
	$(divobjectselector).jqxGauge({ max: 360 });
	$(divobjectselector).jqxGauge({ startAngle: 0 });
	$(divobjectselector).jqxGauge({ endAngle: 360 });
}

function print_termometro_pioggia(divobjectselector)
{
	var theme = getDemoTheme(),
				majorTicks = { size: '15%', interval: 2 },
				minorTicks = { size: '5%', interval: 1, style: { 'stroke-width': 1, stroke: '#aaaaaa'} },
				labels = { interval: 2 };
				
	divobjectselector.jqxLinearGauge({
				orientation: 'vertical',
				labels: labels,
				ticksMajor: majorTicks,
				ticksMinor: minorTicks,
				max: 20,
				value: 0,
				pointer: { size: '6%', style: { fill: '#FF0000'} },
				colorScheme: 'scheme05',
	});
	divobjectselector.jqxLinearGauge({ pointer: { pointerType: 'default', size: '5%', visible: true, offset: -5,style: { fill: '#FF0000'}}});
	divobjectselector.jqxLinearGauge({height: 250 });
	divobjectselector.jqxLinearGauge({width: 100 })
	divobjectselector.jqxLinearGauge({min: 0 });
}
