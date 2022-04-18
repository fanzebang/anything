export default {
	loginBgAnimation(){
		(function($){
			var canvas = $('#bg').children('canvas'),
				background = canvas[0],
				foreground1 = canvas[1],
				foreground2 = canvas[2],
				config = {
					circle: {
						amount: 18,
						layer: 3,
						color: [157, 97, 207],
						alpha: 0.3
					},
					line: {
						amount: 12,
						layer: 3,
						color: [255, 255, 255],
						alpha: 0.3
					},
					speed: 0.5,
					angle: 20
				};
		
			if (background.getContext){
				var bctx = background.getContext('2d'),
					fctx1 = foreground1.getContext('2d'),
					fctx2 = foreground2.getContext('2d'),
					M = window.Math, // Cached Math
					degree = config.angle/360*M.PI*2,
					circles = [],
					lines = [],
					wWidth, wHeight, timer;
				
				requestAnimationFrame = window.requestAnimationFrame || 
					window.mozRequestAnimationFrame ||
					window.webkitRequestAnimationFrame ||
					window.msRequestAnimationFrame ||
					window.oRequestAnimationFrame ||
					function(callback, element) { setTimeout(callback, 1000 / 60); };
		
				cancelAnimationFrame = window.cancelAnimationFrame ||
					window.mozCancelAnimationFrame ||
					window.webkitCancelAnimationFrame ||
					window.msCancelAnimationFrame ||
					window.oCancelAnimationFrame ||
					clearTimeout;
		
				var setCanvasHeight = function(){
					wWidth = $(window).width();
					wHeight = $(window).height(),
		
					canvas.each(function(){
						this.width = wWidth;
						this.height = wHeight;
					});
				};
		
				var drawCircle = function(x, y, radius, color, alpha){
					var gradient = fctx1.createRadialGradient(x, y, radius, x, y, 0);
					gradient.addColorStop(0, 'rgba('+color[0]+','+color[1]+','+color[2]+','+alpha+')');
					gradient.addColorStop(1, 'rgba('+color[0]+','+color[1]+','+color[2]+','+(alpha-0.1)+')');
		
					fctx1.beginPath();
					fctx1.arc(x, y, radius, 0, M.PI*2, true);
					fctx1.fillStyle = gradient;
					fctx1.fill();
				};
		
				var drawLine = function(x, y, width, color, alpha){
					var endX = x+M.sin(degree)*width,
						endY = y-M.cos(degree)*width,
						gradient = fctx2.createLinearGradient(x, y, endX, endY);
					gradient.addColorStop(0, 'rgba('+color[0]+','+color[1]+','+color[2]+','+alpha+')');
					gradient.addColorStop(1, 'rgba('+color[0]+','+color[1]+','+color[2]+','+(alpha-0.1)+')');
		
					fctx2.beginPath();
					fctx2.moveTo(x, y);
					fctx2.lineTo(endX, endY);
					fctx2.lineWidth = 3;
					fctx2.lineCap = 'round';
					fctx2.strokeStyle = gradient;
					fctx2.stroke();
				};
		
				var drawBack = function(){
					bctx.clearRect(0, 0, wWidth, wHeight);
		
					var gradient = [];
					
					gradient[0] = bctx.createRadialGradient(wWidth*0.3, wHeight*0.1, 0, wWidth*0.3, wHeight*0.1, wWidth*0.9);
					gradient[0].addColorStop(0, 'rgb(0, 26, 77)');
					gradient[0].addColorStop(1, 'transparent');
		
					bctx.translate(wWidth, 0);
					bctx.scale(-1,1);
					bctx.beginPath();
					bctx.fillStyle = gradient[0];
					bctx.fillRect(0, 0, wWidth, wHeight);
		
					gradient[1] = bctx.createRadialGradient(wWidth*0.1, wHeight*0.1, 0, wWidth*0.3, wHeight*0.1, wWidth);
					gradient[1].addColorStop(0, 'rgb(0, 150, 240)');
					gradient[1].addColorStop(0.8, 'transparent');
		
					bctx.translate(wWidth, 0);
					bctx.scale(-1,1);
					bctx.beginPath();
					bctx.fillStyle = gradient[1];
					bctx.fillRect(0, 0, wWidth, wHeight);
		
					gradient[2] = bctx.createRadialGradient(wWidth*0.1, wHeight*0.5, 0, wWidth*0.1, wHeight*0.5, wWidth*0.5);
					gradient[2].addColorStop(0, 'rgb(40, 20, 105)');
					gradient[2].addColorStop(1, 'transparent');
		
					bctx.beginPath();
					bctx.fillStyle = gradient[2];
					bctx.fillRect(0, 0, wWidth, wHeight);
				};
		
				var animate = function(){
					var sin = M.sin(degree),
						cos = M.cos(degree);
		
					if (config.circle.amount > 0 && config.circle.layer > 0){
						fctx1.clearRect(0, 0, wWidth, wHeight);
						for (var i=0, len = circles.length; i<len; i++){
							var item = circles[i],
								x = item.x,
								y = item.y,
								radius = item.radius,
								speed = item.speed;
		
							if (x > wWidth + radius){
								x = -radius;
							} else if (x < -radius){
								x = wWidth + radius
							} else {
								x += sin*speed;
							}
		
							if (y > wHeight + radius){
								y = -radius;
							} else if (y < -radius){
								y = wHeight + radius;
							} else {
								y -= cos*speed;
							}
		
							item.x = x;
							item.y = y;
							drawCircle(x, y, radius, item.color, item.alpha);
						}
					}
		
					if (config.line.amount > 0 && config.line.layer > 0){
						fctx2.clearRect(0, 0, wWidth, wHeight);
						for (var j=0, len = lines.length; j<len; j++){
							var item = lines[j],
								x = item.x,
								y = item.y,
								width = item.width,
								speed = item.speed;
		
							if (x > wWidth + width * sin){
								x = -width * sin;
							} else if (x < -width * sin){
								x = wWidth + width * sin;
							} else {
								x += sin*speed;
							}
		
							if (y > wHeight + width * cos){
								y = -width * cos;
							} else if (y < -width * cos){
								y = wHeight + width * cos;
							} else {
								y -= cos*speed;
							}
							
							item.x = x;
							item.y = y;
							drawLine(x, y, width, item.color, item.alpha);
						}
					}
		
					timer = requestAnimationFrame(animate);
				};
		
				var createItem = function(){
					circles = [];
					lines = [];
		
					if (config.circle.amount > 0 && config.circle.layer > 0){
						for (var i=0; i<config.circle.amount/config.circle.layer; i++){
							for (var j=0; j<config.circle.layer; j++){
								circles.push({
									x: M.random() * wWidth,
									y: M.random() * wHeight,
									radius: M.random()*(20+j*5)+(20+j*5),
									color: config.circle.color,
									alpha: M.random()*0.2+(config.circle.alpha-j*0.1),
									speed: config.speed*(1+j*0.5)
								});
							}
						}
					}
		
					if (config.line.amount > 0 && config.line.layer > 0){
						for (var m=0; m<config.line.amount/config.line.layer; m++){
							for (var n=0; n<config.line.layer; n++){
								lines.push({
									x: M.random() * wWidth,
									y: M.random() * wHeight,
									width: M.random()*(20+n*5)+(20+n*5),
									color: config.line.color,
									alpha: M.random()*0.2+(config.line.alpha-n*0.1),
									speed: config.speed*(1+n*0.5)
								});
							}
						}
					}
		
					cancelAnimationFrame(timer);
					timer = requestAnimationFrame(animate);
					drawBack();
				};
		
				$(document).ready(function(){
					setCanvasHeight();
					createItem();
				});
				$(window).resize(function(){
					setCanvasHeight();
					createItem();
				});
			}
		})(jQuery);
	},
	numAnimation(){
				(function($){
					$.fn.numberRock=function(options){
						var defaults={
							speed:24,
							count:100
						};
						var opts=$.extend({}, defaults, options);

						var div_by = 100,
						count=opts["count"],
						speed = Math.floor(count / div_by),
						sum=0,
						$display = this,
						run_count = 1,
						int_speed = opts["speed"];
						var int = setInterval(function () {
							if (run_count <= div_by&&speed!=0) {
								$display.text(sum=speed * run_count);
								run_count++;
							} else if (sum < count) {
								$display.text(++sum);
							} else {
								clearInterval(int);
							}
						}, int_speed);
					}

				})(jQuery);
	},

	created(){

		( function() {

			function SVG3DTagCloud( element, params ) {
		
				var settings = {
		
					entries: [],
					width: 480,
					height: 480,
					radius: '70%',
					radiusMin: 75,
					bgDraw: true,
					bgColor: '#000',
					opacityOver: 1.00,
					opacityOut: 0.05,
					opacitySpeed: 6,
					fov: 800,
					speed: 2,
					fontFamily: 'Arial, sans-serif',
					fontSize: '15',
					fontColor: '#fff',
					fontWeight: 'normal',//bold
					fontStyle: 'normal',//italic 
					fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
					fontToUpperCase: false,
					tooltipFontFamily: 'Arial, sans-serif',
					tooltipFontSize: '15',
					tooltipFontColor: '#fff',
					tooltipFontWeight: 'normal',//bold
					tooltipFontStyle: 'normal',//italic 
					tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
					tooltipFontToUpperCase: false,
					tooltipTextAnchor: 'left',
					tooltipDiffX: 0,
					tooltipDiffY: 10,
					animatingSpeed: 0.01,
					animatingRadiusLimit: 1.3
		
				};
					
				//---
		
				if ( params !== undefined )
					for ( var prop in params )
						if ( params.hasOwnProperty( prop ) && settings.hasOwnProperty( prop ) )
							settings[ prop ] = params[ prop ];
		
				//---
		
				if ( !settings.entries.length )
					return false;
		
				//---
		
				var entryHolder = [];
				var tooltip;
		
				var radius;
				var diameter;
		
				var mouseReact = true;
				var mousePos = { x: 0, y: 0 };
		
				var center2D;
				var center3D = { x: 0, y: 0, z: 0 };
		
				var speed = { x: 0, y: 0 };
		
				var position = { sx: 0, cx: 0, sy: 0, cy: 0 };
		
				var MATHPI180 = Math.PI / 180;
		
				var svg;
				var svgNS = 'http://www.w3.org/2000/svg';
		
				var bg;
		
				var animFrameId;
				var radius_factor = 1;
				
				//---
		
				function destroy() {
					window.cancelAnimFrame( animFrameId );
					window.removeEventListener( 'resize', resizeHandler );
					if(bg){
						svg.removeChild( bg );
					}
					if(svg){
						element.removeChild( svg );
						svg.removeEventListener( 'mousemove', mouseMoveHandler );
						svg = null;
					}
				}
		
				function init() {
		
					svg = document.createElementNS( svgNS, 'svg' );
					svg.addEventListener( 'mousemove', mouseMoveHandler );
		
					element.appendChild( svg );
		
					if ( settings.bgDraw ) {
				
						bg = document.createElementNS( svgNS, 'rect' );
						bg.setAttribute( 'x', 0 );
						bg.setAttribute( 'y', 0 );
						bg.setAttribute( 'fill', settings.bgColor );
		
						svg.appendChild( bg );
		
					}
		
					//---
					
					addEntries();
					reInit();
					animloop();
		
					//---
		
					window.addEventListener( 'resize', resizeHandler );
		
				};
		
				function reInit() {
		
					var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
					var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
		
					var svgWidth = windowWidth;
					var svgHeight = windowHeight;
		
					if ( settings.width.toString().indexOf( '%' ) > 0 || settings.height.toString().indexOf( '%' ) > 0 ) {
		
						svgWidth = Math.round( element.offsetWidth / 100 * parseInt( settings.width ) );
						svgHeight = Math.round( svgWidth / 100 * parseInt( settings.height ) );
		
					} else {
		
						svgWidth = parseInt( settings.width );
						svgHeight = parseInt( settings.height );
		
					}
		
					if ( windowWidth <= svgWidth )
						svgWidth = windowWidth;
		
					if ( windowHeight <= svgHeight )
						svgHeight = windowHeight;
		
					//---
		
					center2D = { x: svgWidth / 2, y: svgHeight / 2 };
		
					speed.x = settings.speed / center2D.x;
					speed.y = settings.speed / center2D.y;
		
					if ( svgWidth >= svgHeight )
						diameter = svgHeight / 100 * parseInt( settings.radius );
					else
						diameter = svgWidth / 100 * parseInt( settings.radius );
		
					if ( diameter < 1 )
						diameter = 1;
		
					radius = diameter / 2;
		
					if ( radius < settings.radiusMin ) {
		
						radius = settings.radiusMin;
						diameter = radius * 2;
		
					}
		
					//---
		
					svg.setAttribute( 'width', svgWidth );
					svg.setAttribute( 'height', svgHeight );
		
					if ( settings.bgDraw ) {
		
						bg.setAttribute( 'width', svgWidth );
						bg.setAttribute( 'height', svgHeight );
		
					}
		
					//---
		
					setEntryPositions( radius * radius_factor );
		
				};
		
				//---
		
				function setEntryPositions( radius ) {
		
					for ( var i = 0, l = entryHolder.length; i < l; i++ ) {
		
						setEntryPosition( entryHolder[ i ], radius );
		
					}
		
				};
		
				function setEntryPosition( entry, radius ) {
		
					var dx = entry.vectorPosition.x - center3D.x;
					var dy = entry.vectorPosition.y - center3D.y;
					var dz = entry.vectorPosition.z - center3D.z;
		
					var length = Math.sqrt( dx * dx + dy * dy + dz * dz );
		
					entry.vectorPosition.x /= length;
					entry.vectorPosition.y /= length;
					entry.vectorPosition.z /= length;
		
					entry.vectorPosition.x *= radius;
					entry.vectorPosition.y *= radius;
					entry.vectorPosition.z *= radius;
		
				};
		
				function addEntry( index, entryObj, x, y, z ) {
					
					var entry = {};
		
						if ( typeof entryObj.label != 'undefined' ) {
		
							entry.element = document.createElementNS( svgNS, 'text' );
							entry.element.setAttribute( 'x', 0 );
							entry.element.setAttribute( 'y', 0 );
							entry.element.setAttribute( 'fill', settings.fontColor );
							entry.element.setAttribute( 'font-family', settings.fontFamily );
							entry.element.setAttribute( 'font-size', entryObj.fontSize ? entryObj.fontSize : settings.fontSize );
							entry.element.setAttribute( 'font-weight', settings.fontWeight );
							entry.element.setAttribute( 'font-style', settings.fontStyle );
							entry.element.setAttribute( 'font-stretch', settings.fontStretch );
							entry.element.setAttribute( 'text-anchor', 'middle' );
							entry.element.textContent = settings.fontToUpperCase ? entryObj.label.toUpperCase() : entryObj.label;
		
						} else if ( typeof entryObj.image != 'undefined' ) {
		
							entry.element = document.createElementNS( svgNS, 'image' );
							entry.element.setAttribute( 'x', 0 );
							entry.element.setAttribute( 'y', 0 );
							entry.element.setAttribute( 'width', entryObj.width );
							entry.element.setAttribute( 'height', entryObj.height );
							entry.element.setAttribute( 'id', 'image_' + index );
							entry.element.setAttributeNS( 'ff','href', entryObj.image );
		
							entry.diffX = entryObj.width / 2;
							entry.diffY = entryObj.height / 2;
							
						}
		
						entry.link = document.createElementNS( svgNS, 'a' );
						entry.link.setAttributeNS( 'ff', 'xlink:href', entryObj.url );
						entry.link.setAttribute( 'target', entryObj.target );
						entry.link.addEventListener( 'mouseover', mouseOverHandler, true );
						entry.link.addEventListener( 'mouseout', mouseOutHandler, true );
						entry.link.appendChild( entry.element );
		
						if ( typeof entryObj.tooltip != 'undefined' ) {
		
							entry.tooltip = true;
							entry.tooltipLabel = settings.tooltipFontToUpperCase ? entryObj.tooltip.toUpperCase() : entryObj.tooltip;;
		
						} else {
		
							entry.tooltip = false;
		
						}
		
						entry.index = index;
						entry.mouseOver = false;
		
						entry.vectorPosition = { x:x, y:y, z:z };
						entry.vector2D = { x:0, y:0 };
		
					svg.appendChild( entry.link );
						
					return entry;
				
				};
		
				function addEntries() {
		
					var tooltip = false;
		
					for ( var i = 1, l = settings.entries.length + 1; i < l; i++ ) {
		
						var phi = Math.acos( -1 + ( 2 * i ) / l );
						var theta = Math.sqrt( l * Math.PI ) * phi;
		
						var x = Math.cos( theta ) * Math.sin( phi );
						var y = Math.sin( theta ) * Math.sin( phi );
						var z = Math.cos( phi );
		
						var entry = addEntry( i - 1, settings.entries[ i - 1 ], x, y, z );
						
						entryHolder.push( entry );
		
						if ( typeof settings.entries[ i - 1 ].tooltip != 'undefined' ) {
		
							tooltip = true;
		
						}
					
					}
		
					if ( tooltip ) {
		
						addTooltip();
		
					}
				
				};
		
				function addTooltip() {
		
					tooltip = document.createElementNS( svgNS, 'text' );
					tooltip.setAttribute( 'x', 0 );
					tooltip.setAttribute( 'y', 0 );
					tooltip.setAttribute( 'fill', settings.tooltipFontColor );
					tooltip.setAttribute( 'font-family', settings.tooltipFontFamily );
					tooltip.setAttribute( 'font-size', settings.tooltipFontSize );
					tooltip.setAttribute( 'font-weight', settings.tooltipFontWeight );
					tooltip.setAttribute( 'font-style', settings.tooltipFontStyle );
					tooltip.setAttribute( 'font-stretch', settings.tooltipFontStretch );
					tooltip.setAttribute( 'text-anchor', settings.tooltipTextAnchor );
					tooltip.textContent = '';
		
					svg.appendChild( tooltip );
		
				};
		
				function getEntryByElement( element ) {
		
					for ( var i = 0, l = entryHolder.length; i < l; i++ ) {
		
						var entry = entryHolder[ i ];
		
						if ( entry.element.getAttribute( 'x' ) === element.getAttribute( 'x' ) && 
							 entry.element.getAttribute( 'y' ) === element.getAttribute( 'y' ) ) {
		
							return entry;
		
						}
		
					}
		
					return;
		
				};
		
				function highlightEntry( entry ) {
		
					for ( var i = 0, l = entryHolder.length; i < l; i++ ) {
		
						var e = entryHolder[ i ];
		
						if ( e.index === entry.index ) {
		
							e.mouseOver = true; 
		
						} else {
		
							e.mouseOver = false; 
		
						}
		
					} 
		
				};
		
				//---
		
				function showTooltip( entry ) {
		
					if ( entry.tooltip ) {
		
						tooltip.setAttribute( 'x', entry.vector2D.x - settings.tooltipDiffX );
						tooltip.setAttribute( 'y', entry.vector2D.y - settings.tooltipDiffY );
		
						tooltip.textContent = settings.tooltipFontToUpperCase ? entry.tooltipLabel.toUpperCase() : entry.tooltipLabel;
		
						tooltip.setAttribute( 'opacity', 1.0 );
		
					}
		
				};
		
				function hideTooltip( entry ) {
		
					tooltip.setAttribute( 'opacity', 0.0 );
		
				};
		
				//---
					
				function render() { 
		
					var fx = speed.x * mousePos.x - settings.speed;
					var fy = settings.speed - speed.y * mousePos.y;
					
					var angleX = fx * MATHPI180;
					var angleY = fy * MATHPI180;
		
					position.sx = Math.sin( angleX );
					position.cx = Math.cos( angleX );
					position.sy = Math.sin( angleY );
					position.cy = Math.cos( angleY );
		
					//---
		
					for ( var i = 0, l = entryHolder.length; i < l; i++ ) {
			
						var entry = entryHolder[ i ];
		
						//---
		
						if ( mouseReact ) {
		
							var rx = entry.vectorPosition.x;
							var rz = entry.vectorPosition.y * position.sy + entry.vectorPosition.z * position.cy;
		
							entry.vectorPosition.x = rx * position.cx + rz * position.sx;
							entry.vectorPosition.y = entry.vectorPosition.y * position.cy + entry.vectorPosition.z * -position.sy;
							entry.vectorPosition.z = rx * -position.sx + rz * position.cx;
		
						}
		
						//---
		
						var scale = settings.fov / ( settings.fov + entry.vectorPosition.z );
		
						entry.vector2D.x = entry.vectorPosition.x * scale + center2D.x; 
						entry.vector2D.y = entry.vectorPosition.y * scale + center2D.y;
						
						//---
		
						if ( entry.diffX && entry.diffY ) {
		
							entry.vector2D.x -= entry.diffX;
							entry.vector2D.y -= entry.diffY;
		
						}
		
						//---
		
						entry.element.setAttribute( 'x', entry.vector2D.x );
						entry.element.setAttribute( 'y', entry.vector2D.y );
		
						//---
		
						var opacity;
		
						if ( mouseReact ) {
		
							opacity = ( radius - entry.vectorPosition.z ) / diameter;
		
							if ( opacity < settings.opacityOut ) {
		
								opacity = settings.opacityOut;
		
							}
		
						} else {
		
							opacity = parseFloat( entry.element.getAttribute( 'opacity' ) );
		
							if ( entry.mouseOver ) {
		
								opacity += ( settings.opacityOver - opacity ) / settings.opacitySpeed;
		
							} else {
		
								opacity += ( settings.opacityOut - opacity ) / settings.opacitySpeed;
		
							}
		
						}
		
						entry.element.setAttribute( 'opacity', opacity * (1 - ((radius_factor - 1) / (settings["animatingRadiusLimit"] - 1))) );
						
					}
		
					//---
		
					entryHolder = entryHolder.sort( function( a, b ) {
		
						return ( b.vectorPosition.z - a.vectorPosition.z );
		
					} );
		
				};
		
				//---
		
				window.requestAnimFrame = ( function() {
		
					return  window.requestAnimationFrame       ||
							window.webkitRequestAnimationFrame ||
							window.mozRequestAnimationFrame    ||
							function( callback ) {
								return window.setTimeout( callback, 1000 / 60 );
							};
		
				} )();
		
				window.cancelAnimFrame = ( function() {
		
					if(window.requestAnimationFrame){
						return window.cancelAnimationFrame;
					} else if(window.webkitRequestAnimationFrame){
						return window.webkitCancelAnimationFrame;
					} else if(window.mozRequestAnimationFrame){
						return window.mozCancelAnimationFrame;
					}
					return window.clearTimeout;
		
				} )();
		
					
				function animloop() {
		
					animFrameId = requestAnimFrame( animloop );
		
					render();
		
				};
		
				//---
		
				function mouseOverHandler( event ) {
		
					mouseReact = false;
		
					//---
		
					var entry = getEntryByElement( event.target );
		
					highlightEntry( entry );
		
					if ( entry.tooltip ) {
		
						showTooltip( entry );
		
					}
		
				};
		
				function mouseOutHandler( event ) {
		
					mouseReact = true;
		
					//---
		
					var entry = getEntryByElement( event.target );
		
					if ( entry.tooltip ) {
		
						hideTooltip( entry );
		
					}
		
				};
		
				//---
		
				function mouseMoveHandler( event ) {
		
					mousePos = getMousePos( svg, event );
		
				};
		
				function getMousePos( svg, event ) {
		
					var rect = svg.getBoundingClientRect();
		
					return { 
		
						x: event.clientX - rect.left, 
						y: event.clientY - rect.top 
		
					};
		
				};
		
				//---
		
				function resizeHandler( event ) {
		
					reInit();
		
				};
		
				function setRadiusFactor( factor ){
					radius_factor = Math.min(Math.max(factor,1),settings["animatingRadiusLimit"]);
					reInit();
				};
		
				function resetRadiusFactor(){
					setRadiusFactor(1);
				};
		
				function setEntries( entries ){
					destroy();
					settings["entries"] = entries;
					init();
				};
		
				var animOut_cb = false, animIn_cb = false, animating = false;
		
				function _animOut(){
					if( animating = radius_factor < settings["animatingRadiusLimit"] ){
						setRadiusFactor( radius_factor + settings["animatingSpeed"] );
						requestAnimFrame( _animOut );
					} else {
						if(typeof animOut_cb === 'function'){
							animOut_cb();
							animOut_cb = false;
						}
					}
				};
		
				function _animIn(){
					if( animating = radius_factor > 1 ){
						setRadiusFactor( radius_factor - settings["animatingSpeed"] );
						requestAnimFrame( _animIn );
					} else {
						if(typeof animIn_cb === 'function'){
							animIn_cb();
							animIn_cb = false;
						}
					}
					
				};
		
				function animOut( callback ){
					if(!animating){
						radius_factor = 1;
						animOut_cb = callback;
						_animOut();
					}
				};
		
				function animIn( callback ){
					if(!animating){
						radius_factor = settings["animatingRadiusLimit"];
						animIn_cb = callback;
						_animIn();
					}
				};
				
				//---
		
				init();
		
				//API
				this.destroy = destroy;
				this.animOut = animOut;
				this.animIn = animIn;
				this.setEntries = setEntries;
			};
		
			window.SVG3DTagCloud = SVG3DTagCloud;
		
		} () );
		
		if ( typeof jQuery !== 'undefined' ) {
		
			( function( $ ) {
		
				$.fn.svg3DTagCloud = function( params ) {
		
					var args = arguments;
		
					return this.each( function() {
		
						if ( !$.data( this, 'plugin_SVG3DTagCloud' ) ) {
		
							$.data( this, 'plugin_SVG3DTagCloud', new SVG3DTagCloud( this, params ) );
		
						} else {
		
							var plugin = $.data( this, 'plugin_SVG3DTagCloud' );
		
							if ( plugin[ params ] ) {
		
								plugin[ params ].apply( this, Array.prototype.slice.call( args, 1 ) );
		
							} else {
		
								$.error( 'Method ' +  params + ' does not exist on jQuery.svg3DTagCloud' );
		
							}
		
						}
		
					} );
		
				};
				
			} ( jQuery ) );
		
		}



	}




// 	created() {
// 			!function(){
// 				function t(t, e) {
// 					function n() {
// 						A = document.createElementNS(E, "svg"),
// 						A.addEventListener("mousemove", v),
// 						t.appendChild(A),
// 						p.bgDraw && (P = document.createElementNS(E, "rect"), P.setAttribute("x", 0), P.setAttribute("y", 0), P.setAttribute("fill", p.bgColor), A.appendChild(P)),
// 						a(),
// 						i(),
// 						d(),
// 						window.addEventListener("resize", y)
// 					}
// 					function i() {
// 						var e = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
// 						n = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
// 						i = e,
// 						r = n;
// 						p.width.toString().indexOf("%") > 0 || p.height.toString().indexOf("%") > 0 ? (i = Math.round(t.offsetWidth / 100 * parseInt(p.width)), r = Math.round(i / 100 * parseInt(p.height))) : (i = parseInt(p.width), r = parseInt(p.height)),
// 						i >= e && (i = e),
// 						r >= n && (r = n),
// 						b = {
// 							x: i / 2,
// 							y: r / 2
// 						},
// 						O.x = p.speed / b.x,
// 						O.y = p.speed / b.y,
// 						w = i >= r ? r / 100 * parseInt(p.radius) : i / 100 * parseInt(p.radius),
// 						1 > w && (w = 1),
// 						x = w / 2,
// 						x < p.radiusMin && (x = p.radiusMin, w = 2 * x),
// 						A.setAttribute("width", i),
// 						A.setAttribute("height", r),
// 						p.bgDraw && (P.setAttribute("width", i), P.setAttribute("height", r)),
// 						o(x)
// 					}
// 					function o(t) {
// 						for (var e = 0,
// 						n = S.length; n > e; e++) r(S[e], t)
// 					}
// 					function r(t, e) {
// 						var n = t.vectorPosition.x - C.x,
// 						i = t.vectorPosition.y - C.y,
// 						o = t.vectorPosition.z - C.z,
// 						r = Math.sqrt(n * n + i * i + o * o);
// 						t.vectorPosition.x /= r,
// 						t.vectorPosition.y /= r,
// 						t.vectorPosition.z /= r,
// 						t.vectorPosition.x *= e,
// 						t.vectorPosition.y *= e,
// 						t.vectorPosition.z *= e
// 					}
// 					function s(t, e, n, i, o) {
// 						var r = {};
// 						return r.element = document.createElementNS(E, "text"),
// 						r.element.setAttribute("x", 0),
// 						r.element.setAttribute("y", 0),
// 						r.element.setAttribute("fill", p.fontColor),
// 						r.element.setAttribute("font-family", p.fontFamily),
// 						r.element.setAttribute("font-size", p.fontSize),
// 						r.element.setAttribute("font-weight", p.fontWeight),
// 						r.element.setAttribute("font-style", p.fontStyle),
// 						r.element.setAttribute("font-stretch", p.fontStretch),
// 						r.element.setAttribute("text-anchor", "middle"),
// 						r.element.textContent = p.fontToUpperCase ? e.label.toUpperCase() : e.label,
// 						r.link = document.createElementNS(E, "a"),
// 						r.link.setAttributeNS("", "xlink:href", e.url),
// 						r.link.setAttribute("target", e.target),
// 						r.link.addEventListener("mouseover", f, !0),
// 						r.link.addEventListener("mouseout", h, !0),
// 						r.link.appendChild(r.element),
// 						r.index = t,
// 						r.mouseOver = !1,
// 						r.vectorPosition = {
// 							x: n,
// 							y: i,
// 							z: o
// 						},
// 						r.vector2D = {
// 							x: 0,
// 							y: 0
// 						},
// 						A.appendChild(r.link),
// 						r
// 					}
// 					function a() {
// 						for (var t = 1,
// 						e = p.entries.length + 1; e > t; t++) {
// 							var n = Math.acos( - 1 + (2 * t - 1) / e),
// 							i = Math.sqrt(e * Math.PI) * n,
// 							o = Math.cos(i) * Math.sin(n),
// 							r = Math.sin(i) * Math.sin(n),
// 							a = Math.cos(n),
// 							u = s(t - 1, p.entries[t - 1], o, r, a);
							
// 							S.push(u)
// 						}
// 					}
// 					function u(t) {
// 						for (var e = 0,
// 						n = S.length; n > e; e++) {
// 							var i = S[e];
// 							if (i.element.getAttribute("x") === t.getAttribute("x") && i.element.getAttribute("y") === t.getAttribute("y")) return i
// 						}
// 					}
// 					function c(t) {
// 						for (var e = u(t), n = 0, i = S.length; i > n; n++) {
// 							var o = S[n];
// 							o.index === e.index ? o.mouseOver = !0 : o.mouseOver = !1
// 						}
// 					}
// 					function l() {
// 						var t = O.x * z.x - p.speed,
// 						e = p.speed - O.y * z.y,
// 						n = t * k,
// 						i = e * k;
// 						D.sx = Math.sin(n),
// 						D.cx = Math.cos(n),
// 						D.sy = Math.sin(i),
// 						D.cy = Math.cos(i);
// 						for (var o = 0,
// 						r = S.length; r > o; o++) {
// 							var s = S[o];
// 							if (M) {
// 								var a = s.vectorPosition.x,
// 								u = s.vectorPosition.y * D.sy + s.vectorPosition.z * D.cy;
// 								s.vectorPosition.x = a * D.cx + u * D.sx,
// 								s.vectorPosition.y = s.vectorPosition.y * D.cy + s.vectorPosition.z * -D.sy,
// 								s.vectorPosition.z = a * -D.sx + u * D.cx
// 							}
// 							var c = p.fov / (p.fov + s.vectorPosition.z);
// 							s.vector2D.x = s.vectorPosition.x * c + b.x,
// 							s.vector2D.y = s.vectorPosition.y * c + b.y,
// 							s.element.setAttribute("x", s.vector2D.x),
// 							s.element.setAttribute("y", s.vector2D.y);
// 							var l;
// 							M ? (l = (x - s.vectorPosition.z) / w, l < p.opacityOut && (l = p.opacityOut)) : (l = parseFloat(s.element.getAttribute("opacity")), l += s.mouseOver ? (p.opacityOver - l) / p.opacitySpeed: (p.opacityOut - l) / p.opacitySpeed),
// 							s.element.setAttribute("opacity", l)
// 						}
// 						S = S.sort(function(t, e) {
// 							return e.vectorPosition.z - t.vectorPosition.z
// 						})
// 					}
// 					function d() {
// 						requestAnimFrame(d),
// 						l()
// 					}
// 					function f(t) {
// 						M = !1,
// 						c(t.target)
// 					}
// 					function h(t) {
// 						M = !0
// 					}
// 					function v(t) {
// 						z = m(A, t)
// 					}
// 					function m(t, e) {
// 						var n = t.getBoundingClientRect();
// 						return {
// 							x: e.clientX - n.left,
// 							y: e.clientY - n.top
// 						}
// 					}
// 					function y(t) {
// 						i()
// 					}
// 					var p = {
// 						entries: [],
// 						width: 480,
// 						height: 480,
// 						radius: "70%",
// 						radiusMin: 75,
// 						bgDraw: !0,
// 						bgColor: "#000",
// 						opacityOver: 1,
// 						opacityOut: .05,
// 						opacitySpeed: 6,
// 						fov: 800,
// 						speed: 2,
// 						fontFamily: "Arial, sans-serif",
// 						fontSize: "15",
// 						fontColor: "#fff",
// 						fontWeight: "normal",
// 						fontStyle: "normal",
// 						fontStretch: "normal",
// 						fontToUpperCase: !1
// 					};
// 					if (void 0 !== e) for (var g in e) e.hasOwnProperty(g) && p.hasOwnProperty(g) && (p[g] = e[g]);
// 					if (!p.entries.length) return ! 1;
// 					var x, w, b, A, P, S = [],
// 					M = !0,
// 					z = {
// 						x: 0,
// 						y: 0
// 					},
// 					C = {
// 						x: 0,
// 						y: 0,
// 						z: 0
// 					},
// 					O = {
// 						x: 0,
// 						y: 0
// 					},
// 					D = {
// 						sx: 0,
// 						cx: 0,
// 						sy: 0,
// 						cy: 0
// 					},
// 					k = Math.PI / 180,
// 					E = "";
// 					window.requestAnimFrame = function() {
// 						return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
// 						function(t) {
// 							window.setTimeout(t, 1e3 / 60)
// 						}
// 					} (),
// 					n()
// 				}
// 				window.SVG3DTagCloud = t
			
// 			} (),
// 			"undefined" != typeof jQuery && !
// 			function(t) {
// 				t.fn.svg3DTagCloud = function(e) {
// 					console.log(e)
// 					return this.each(function() {
// 						t.data(this, "plugin_SVG3DTagCloud") || t.data(this, "plugin_SVG3DTagCloud", new SVG3DTagCloud(this, e))
// 					})
// 				}
// 			} (jQuery);
// 	}
}