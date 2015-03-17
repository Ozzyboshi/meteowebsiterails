function handleRefresh1(url) {
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

var last=0.0;
	var lastmin=0.0;
	var lastmax=0.0;
	var chart_vento_medio;
	function updateMeteo(sales) {
                $('#gauge').jqxLinearGauge('animationDuration', 1000);
		last=sales[0].temperatura_esterna*1;
		$('#gauge').jqxLinearGauge('value',last);

		
		
		$('#gauge2').jqxLinearGauge('animationDuration', 1000);
		last=sales[0].temperatura_interna*1;
		$('#gauge2').jqxLinearGauge('value',last);		

		$('#descrizionetemperatura').text("Temperatura: "+sales[0].temperatura_esterna+"°C");
		$('#descrizioneora').text("Rilevata il :"+sales[0].data);

		$('#descrizionetemperatura2').text("Temperatura: "+sales[0].temperatura_interna+"°C");
		$('#descrizioneora2').text("Rilevata il :"+sales[0].data);

		var last2="Umidita esterna :"+sales[0].umidita_esterna+"%";
		$('#gaugeumidita').jqxGauge({ caption: { value: last2, position: 'bottom', offset: [0, 10], visible: true }});
		$('#gaugeumidita').jqxGauge('animationDuration', 1000);
		var lastumidita=sales[0].umidita_esterna*1;
		$('#gaugeumidita').jqxGauge('value',lastumidita);

		last2="Umidita interna :"+sales[0].umidita_interna+"%";
		$('#gaugeumidita2').jqxGauge({ caption: { value: last2, position: 'bottom', offset: [0, 10], visible: true }});
		$('#gaugeumidita2').jqxGauge('animationDuration', 1000);
		lastumidita=sales[0].umidita_interna*1;
		$('#gaugeumidita2').jqxGauge('value',lastumidita);

		var point = chart_vento_medio.series[0].points[0],
		            newVal,
		            inc = Math.round((Math.random() - 0.5) * 20);
		point.update(sales[0].vento_medio*1.852);	

		var point2 = chart_vento_raffica.series[0].points[0],
		            newVal,
		            inc = Math.round((Math.random() - 0.5) * 20);
		point2.update(sales[0].vento_raffica*1.852);
		//chart_vento_medio.series[0].setData([sales[0].vento_medio*1]);

		var point3 = chart_pressione_esterna.series[0].points[0],
		            newVal,
		            inc = Math.round((Math.random() - 0.5) * 20);
		point3.update(sales[0].pressione*1);

		var point4 = chart_pioggia_parziale.series[0].points[0],
		            newVal,
		            inc = Math.round((Math.random() - 0.5) * 20);
		point4.update(sales[0].pioggia_parziale*1);


	}

	function updateMeteoMin(sales) {
                
		lastmin=sales[0].temperatura_esterna*1;
		$('#gauge3').jqxLinearGauge('animationDuration', 1000);
		$('#gauge3').jqxLinearGauge('value',lastmin);
		$('#descrizionetemperatura3').text("Temperatura: "+sales[0].temperatura_esterna+"°C");
		$('#descrizioneora3').text("Rilevata il :"+sales[0].data);
	}
	function updateMeteoMax(sales) {
                
		lastmax=sales[0].temperatura_esterna*1;
		$('#gauge4').jqxLinearGauge('animationDuration', 1000);
		$('#gauge4').jqxLinearGauge('value',lastmax);
		$('#descrizionetemperatura4').text("Temperatura: "+sales[0].temperatura_esterna+"°C");
		$('#descrizioneora4').text("Rilevata il :"+sales[0].data);
	}

        $(document).ready(function () {
		updateLinks();
		//var url="http://192.34.62.109:8080/WeatherStation/MeteoServices/Readings/lastReading/updateMeteo";
		handleRefresh1("http://meteo.ozzyboshi.com:8888/WeatherStation/MeteoServices/Readings/lastReading/updateMeteo");
		setInterval(function () {handleRefresh1("http://meteo.ozzyboshi.com:8888/WeatherStation/MeteoServices/Readings/lastReading/updateMeteo")}, 30000);

		//var url="http://192.34.62.109:8080/WeatherStation/MeteoServices/Readings/lastMinReading/updateMeteoMin";
		handleRefresh1("http://meteo.ozzyboshi.com:8888/WeatherStation/MeteoServices/Readings/lastMinReading/updateMeteoMin");
		setInterval(function () {handleRefresh1("http://meteo.ozzyboshi.com:8888/WeatherStation/MeteoServices/Readings/lastMinReading/updateMeteoMin")},30000);

		//var url="http://192.34.62.109:8080/WeatherStation/MeteoServices/Readings/lastMaxReading/updateMeteoMax";
		handleRefresh1("http://meteo.ozzyboshi.com:8888/WeatherStation/MeteoServices/Readings/lastMaxReading/updateMeteoMax");
		setInterval(function () {handleRefresh1("http://meteo.ozzyboshi.com:8888/WeatherStation/MeteoServices/Readings/lastMaxReading/updateMeteoMax")},30000);

            var theme = getDemoTheme(),
                majorTicks = { size: '15%', interval: 10 },
                minorTicks = { size: '5%', interval: 2.5, style: { 'stroke-width': 1, stroke: '#aaaaaa'} },
                labels = { interval: 10 };

	    $('#jqxTabs').jqxTabs({ width: screen.width-40, theme: theme, selectionTracker: true, animationType: 'fade' });

            $('#gauge').jqxLinearGauge({
                orientation: 'vertical',
                labels: labels,
                ticksMajor: majorTicks,
                ticksMinor: minorTicks,
                max: 60,
                value: -60,
                pointer: { size: '6%', style: { fill: '#FF0000'} },
                colorScheme: 'scheme05',
                
            });
		$('#gauge').jqxLinearGauge({ pointer: { pointerType: 'default', size: '5%', visible: true, offset: -5,style: { fill: '#FF0000'}}});
		$('#gauge').jqxLinearGauge({height: 500 });
		$('#gauge').jqxLinearGauge({width: 200 })
		$('#gauge').jqxLinearGauge({min: -10 });

	 $('#gauge2').jqxLinearGauge({
                orientation: 'vertical',
                labels: labels,
                ticksMajor: majorTicks,
                ticksMinor: minorTicks,
                max: 60,
                value: -60,
                pointer: { size: '6%', style: { fill: '#FF0000'} },
                colorScheme: 'scheme05',
                
            });
		$('#gauge2').jqxLinearGauge({ pointer: { pointerType: 'default', size: '5%', visible: true, offset: -5,style: { fill: '#FF0000'}}});
		$('#gauge2').jqxLinearGauge({height: 500 });
		$('#gauge2').jqxLinearGauge({width: 200 })
		$('#gauge2').jqxLinearGauge({min: -10 });

	$('#gauge3').jqxLinearGauge({
                orientation: 'vertical',
                labels: labels,
                ticksMajor: majorTicks,
                ticksMinor: minorTicks,
                max: 60,
                value: -60,
                pointer: { size: '6%' },
                colorScheme: 'scheme05',
                
            });
		$('#gauge3').jqxLinearGauge({ pointer: { pointerType: 'default', size: '5%', visible: true, offset: -5}});
		$('#gauge3').jqxLinearGauge({height: 500 });
		$('#gauge3').jqxLinearGauge({width: 200 })
		$('#gauge3').jqxLinearGauge({min: -10 });

	$('#gauge4').jqxLinearGauge({
                orientation: 'vertical',
                labels: labels,
                ticksMajor: majorTicks,
                ticksMinor: minorTicks,
                max: 60,
                value: -60,
                pointer: { size: '6%' },
                colorScheme: 'scheme05',
                
            });
		$('#gauge4').jqxLinearGauge({ pointer: { pointerType: 'default', size: '5%', visible: true, offset: -5,style: { fill: '#FF0000'}}});
		$('#gauge4').jqxLinearGauge({height: 500 });
		$('#gauge4').jqxLinearGauge({width: 200 })
		$('#gauge4').jqxLinearGauge({min: -10 });

	 var labels = { visible: true, position: 'inside' },
                theme = getDemoTheme();
	$('#gaugeumidita').jqxGauge({
                ranges: [{ startValue: 0, endValue: 30, style: { fill: '#e2e2e2', stroke: '#e2e2e2' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 },
                         { startValue: 30, endValue: 60, style: { fill: '#f6de54', stroke: '#f6de54' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 },
                         { startValue: 60, endValue: 90, style: { fill: '#db5016', stroke: '#db5016' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 },
                         { startValue: 90, endValue: 100, style: { fill: '#d02841', stroke: '#d02841' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 }
                ],
                cap: { radius: 0.04 },
                caption: { offset: [0, -25], value: 'Umidita esterna :', position: 'bottom' },
                value: 0,
                style: { stroke: '#ffffff', 'stroke-width': '1px', fill: '#ffffff' },
                animationDuration: 0,
                colorScheme: 'scheme04',
                labels: labels,
                ticksMinor: { interval: 5, size: '5%' },
                ticksMajor: { interval: 10, size: '10%' }
            }); 
	     $('#gaugeumidita').jqxGauge({ max: 100 });  
	     $('#gaugeumidita').jqxGauge({ min: 0 });  

	$('#gaugeumidita2').jqxGauge({
                ranges: [{ startValue: 0, endValue: 30, style: { fill: '#e2e2e2', stroke: '#e2e2e2' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 },
                         { startValue: 30, endValue: 60, style: { fill: '#f6de54', stroke: '#f6de54' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 },
                         { startValue: 60, endValue: 90, style: { fill: '#db5016', stroke: '#db5016' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 },
                         { startValue: 90, endValue: 100, style: { fill: '#d02841', stroke: '#d02841' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 }
                ],
                cap: { radius: 0.04 },
                caption: { offset: [0, -25], value: 'Umidita esterna :', position: 'bottom' },
                value: 0,
                style: { stroke: '#ffffff', 'stroke-width': '1px', fill: '#ffffff' },
                animationDuration: 0,
                colorScheme: 'scheme04',
                labels: labels,
                ticksMinor: { interval: 5, size: '5%' },
                ticksMajor: { interval: 10, size: '10%' }
            }); 
	     $('#gaugeumidita2').jqxGauge({ max: 100 });  
	     $('#gaugeumidita2').jqxGauge({ min: 0 });


//$('#container').highcharts({
chart_vento_medio = new Highcharts.Chart({
	
	    chart: {
		renderTo: 'container',
	        type: 'gauge',
	        plotBackgroundColor: null,
	        plotBackgroundImage: null,
	        plotBorderWidth: 0,
	        plotShadow: false
	    },
	    
	    title: {
	        text: 'Vento medio'
	    },
	    
	    pane: {
	        startAngle: -150,
	        endAngle: 150,
	        background: [{
	            backgroundColor: {
	                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
	                stops: [
	                    [0, '#FFF'],
	                    [1, '#333']
	                ]
	            },
	            borderWidth: 0,
	            outerRadius: '109%'
	        }, {
	            backgroundColor: {
	                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
	                stops: [
	                    [0, '#333'],
	                    [1, '#FFF']
	                ]
	            },
	            borderWidth: 1,
	            outerRadius: '107%'
	        }, {
	            // default background
	        }, {
	            backgroundColor: '#DDD',
	            borderWidth: 0,
	            outerRadius: '105%',
	            innerRadius: '103%'
	        }]
	    },
	       
	    // the value axis
	    yAxis: {
	        min: 0,
	        max: 38,
	        
	        minorTickInterval: 'auto',
	        minorTickWidth: 1,
	        minorTickLength: 10,
	        minorTickPosition: 'inside',
	        minorTickColor: '#666',
	
	        tickPixelInterval: 30,
	        tickWidth: 2,
	        tickPosition: 'inside',
	        tickLength: 10,
	        tickColor: '#666',
	        labels: {
	            step: 2,
	            rotation: 'auto'
	        },
	        title: {
	            text: 'km/h'
	        },
	        plotBands: [{
	            from: 0,
	            to: 120,
	            color: '#55BF3B' // green
	        }, {
	            from: 120,
	            to: 160,
	            color: '#DDDF0D' // yellow
	        }, {
	            from: 160,
	            to: 200,
	            color: '#DF5353' // red
	        }]        
	    },
	
	    series: [{
	        name: 'Speed',
	        data: [0.00],
	        tooltip: {
	            valueSuffix: ' km/h'
	        }
	    }]
	})

chart_vento_raffica = new Highcharts.Chart({
	
	    chart: {
		renderTo: 'container2',
	        type: 'gauge',
	        plotBackgroundColor: null,
	        plotBackgroundImage: null,
	        plotBorderWidth: 0,
	        plotShadow: false
	    },
	    
	    title: {
	        text: 'Raffica'
	    },
	    
	    pane: {
	        startAngle: -150,
	        endAngle: 150,
	        background: [{
	            backgroundColor: {
	                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
	                stops: [
	                    [0, '#FFF'],
	                    [1, '#333']
	                ]
	            },
	            borderWidth: 0,
	            outerRadius: '109%'
	        }, {
	            backgroundColor: {
	                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
	                stops: [
	                    [0, '#333'],
	                    [1, '#FFF']
	                ]
	            },
	            borderWidth: 1,
	            outerRadius: '107%'
	        }, {
	            // default background
	        }, {
	            backgroundColor: '#DDD',
	            borderWidth: 0,
	            outerRadius: '105%',
	            innerRadius: '103%'
	        }]
	    },
	       
	    // the value axis
	    yAxis: {
	        min: 0,
	        max: 38,
	        
	        minorTickInterval: 'auto',
	        minorTickWidth: 1,
	        minorTickLength: 10,
	        minorTickPosition: 'inside',
	        minorTickColor: '#666',
	
	        tickPixelInterval: 30,
	        tickWidth: 2,
	        tickPosition: 'inside',
	        tickLength: 10,
	        tickColor: '#666',
	        labels: {
	            step: 2,
	            rotation: 'auto'
	        },
	        title: {
	            text: 'km/h'
	        },
	        plotBands: [{
	            from: 0,
	            to: 120,
	            color: '#55BF3B' // green
	        }, {
	            from: 120,
	            to: 160,
	            color: '#DDDF0D' // yellow
	        }, {
	            from: 160,
	            to: 200,
	            color: '#DF5353' // red
	        }]        
	    },
	
	    series: [{
	        name: 'Speed',
	        data: [0.00],
	        tooltip: {
	            valueSuffix: ' km/h'
	        }
	    }]
	}
	
);
chart_pressione_esterna = new Highcharts.Chart({
	
	    chart: {
		renderTo: 'container3',
	        type: 'gauge',
	        plotBackgroundColor: null,
	        plotBackgroundImage: null,
	        plotBorderWidth: 0,
	        plotShadow: false
	    },
	    
	    title: {
	        text: 'Pressione esterna'
	    },
	    
	    pane: {
	        startAngle: -150,
	        endAngle: 150,
	        background: [{
	            backgroundColor: {
	                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
	                stops: [
	                    [0, '#FFF'],
	                    [1, '#333']
	                ]
	            },
	            borderWidth: 0,
	            outerRadius: '109%'
	        }, {
	            backgroundColor: {
	                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
	                stops: [
	                    [0, '#333'],
	                    [1, '#FFF']
	                ]
	            },
	            borderWidth: 1,
	            outerRadius: '107%'
	        }, {
	            // default background
	        }, {
	            backgroundColor: '#DDD',
	            borderWidth: 0,
	            outerRadius: '105%',
	            innerRadius: '103%'
	        }]
	    },
	       
	    // the value axis
	    yAxis: {
	        min: 980,
	        max: 1045,
	        
	        minorTickInterval: 'auto',
	        minorTickWidth: 1,
	        minorTickLength: 10,
	        minorTickPosition: 'inside',
	        minorTickColor: '#666',
	
	        tickPixelInterval: 30,
	        tickWidth: 2,
	        tickPosition: 'inside',
	        tickLength: 10,
	        tickColor: '#666',
	        labels: {
	            step: 5,
	            rotation: 'auto'
	        },
	        title: {
	            text: 'hpa'
	        },
	        plotBands: [{
	            from: 980,
	            to: 1000,
	            color: '#55BF3B' // green
	        }, {
	            from: 1000,
	            to: 1020,
	            color: '#DDDF0D' // yellow
	        }, {
	            from: 1020,
	            to: 1045,
	            color: '#DF5353' // red
	        }]        
	    },
	
	    series: [{
	        name: 'Speed',
	        data: [0.00],
	        tooltip: {
	            valueSuffix: ' hpa'
	        }
	    }]
	}
	);
	
	chart_pioggia_parziale = new Highcharts.Chart({
	
	    chart: {
		renderTo: 'container4',
	        type: 'gauge',
	        plotBackgroundColor: null,
	        plotBackgroundImage: null,
	        plotBorderWidth: 0,
	        plotShadow: false
	    },
	    
	    title: {
	        text: 'Precipitazioni'
	    },
	    
	    pane: {
	        startAngle: -150,
	        endAngle: 150,
	        background: [{
	            backgroundColor: {
	                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
	                stops: [
	                    [0, '#FFF'],
	                    [1, '#333']
	                ]
	            },
	            borderWidth: 0,
	            outerRadius: '109%'
	        }, {
	            backgroundColor: {
	                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
	                stops: [
	                    [0, '#333'],
	                    [1, '#FFF']
	                ]
	            },
	            borderWidth: 1,
	            outerRadius: '107%'
	        }, {
	            // default background
	        }, {
	            backgroundColor: '#DDD',
	            borderWidth: 0,
	            outerRadius: '105%',
	            innerRadius: '103%'
	        }]
	    },
	       
	    // the value axis
	    yAxis: {
	        min: 0,
	        max: 10,
	        
	        minorTickInterval: 'auto',
	        minorTickWidth: 1,
	        minorTickLength: 10,
	        minorTickPosition: 'inside',
	        minorTickColor: '#666',
	
	        tickPixelInterval: 30,
	        tickWidth: 2,
	        tickPosition: 'inside',
	        tickLength: 10,
	        tickColor: '#666',
	        labels: {
	            step: 2,
	            rotation: 'auto'
	        },
	        title: {
	            text: 'mm'
	        },
	        plotBands: [{
	            from: 0,
	            to: 3,
	            color: '#55BF3B' // green
	        }, {
	            from: 3,
	            to: 6,
	            color: '#DDDF0D' // yellow
	        }, {
	            from: 6,
	            to: 10,
	            color: '#DF5353' // red
	        }]        
	    },
	
	    series: [{
	        name: 'Speed',
	        data: [0.00],
	        tooltip: {
	            valueSuffix: ' mm'
	        }
	    }]
	}
	);

        });
