"use strict";

var PHI = PHI || {};

(function (out) {
	
	var RGBA = function (r, g, b, a) {
		this.r = r || 0;
		this.g = g || 0;
		this.b = b || 0;
		this.a = a || 1;
	};
	
	RGBA.prototype = {
		
		add: function (other) {
			this.r += other.r;
			this.g += other.g;
			this.b += other.b;
			this.a += other.a;
			
			return this;
		},
		
		substract: function (other) {
			this.r -= other.r;
			this.g -= other.g;
			this.b -= other.b;
			this.a += other.a;

			return this;
		},
		
		divideByNumber: function (num) {
			this.r = this.r / num;
			this.g = this.g / num;
			this.b = this.b / num;
			this.b = this.a / num;

			return this;
		},
		
		toArray: function () {
			return [this.r, this.g, this.b, this.a];
		},
		
		toString: function () {			
			return "rgba(" + (this.r | 0) + ", " + (this.g | 0) + ", " + (this.b | 0) + ", " + this.a +")";
		},
		
		clone: function () {
			return new RGBA(this.r, this.g, this.b, this.a);
		}
	};
	
	var Gradient = function (start, stop) {
		this.start = start || new RGBA();
		this.stop = stop || new RGBA();
	};
	
	Gradient.prototype = {
		
		add: function (other) {
			this.start.add(other.start);
			this.stop.add(other.stop);
			
			return this;
		},
		
		substract: function (other) {
			this.start.substract(other.start);
			this.stop.substract(other.stop);
			
			return this;
		},
		
		divideByNumber: function (num) {
			this.start.divideByNumber(num);
			this.stop.divideByNumber(num);
			
			return this;
		},
		
		clone: function () {
			return new Gradient(this.start.clone(), this.stop.clone());
		}
	};
	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}

	var AnimGradient = function () {
		
		this.index = -1;
		this.nextIndex = 0;
		this.transitionTime = 12;
		this.step = 0;
		this.stepsPerGradient = Math.round(this.transitionTime * 60);

		this.gradient = new Gradient();
		this.gradientStep = new Gradient();
		
		this.gradients = [
			new Gradient(new RGBA(22, 126, 118), new RGBA(48, 0, 59)),
			new Gradient(new RGBA(128, 179, 171), new RGBA(30, 41, 58)),
			new Gradient(new RGBA(48, 0, 59), new RGBA(18, 21, 36)),
			new Gradient(new RGBA(255, 207, 160), new RGBA(162, 19, 27))
		];
		
		this.next();
	};
	
	AnimGradient.prototype = {
		
		getNextIndex: function () {
			return (this.index + 1 < this.gradients.length) ? this.index + 1 : 0;
		},
	
		next: function () {
			
			this.index = this.getNextIndex();
			this.nextIndex = this.getNextIndex();
			
			this.gradient = this.gradients[this.index].clone();
			this.gradientStep = this.gradients[this.nextIndex].clone().substract(this.gradient).divideByNumber(this.stepsPerGradient);
		},
		
		update: function () {

			// this.gradient.add(this.gradientStep);
			// this.step++;
			
			// if (this.step > this.stepsPerGradient) {
			// 	this.step = 0;
			// 	this.next();
			// }
		},
		
		draw: function (container) {			
			container.style.backgroundImage = "-webkit-gradient(linear, left bottom, right top, from("+this.gradient.start.toString()+"), to("+this.gradient.stop.toString()+"))";
			container.style.backgroundImage = "-moz-linear-gradient(45deg, "+this.gradient.start.toString()+", "+this.gradient.stop.toString()+")";
			container.style.backgroundImage = "-ms-linear-gradient(45deg, "+this.gradient.start.toString()+", "+this.gradient.stop.toString()+")";
		}
	};
	
	var Particle = function (radius, color) {
				
		this.x = Math.random() * window.innerWidth;
		this.y = Math.random() * window.innerHeight;
		this.vx = -1 + 1 * Math.random();
		this.vy = -1 + 1 * Math.random();
		
		this.radius = radius;
		this.color = color;
		this.blur = Math.floor(-7 * Math.random() + 9) / 10;
		
		this.draw = function(ctx) {
			
			ctx.fillStyle = "white";
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.radius, 0, Math.PI * this.radius, !1);
			ctx.fillStyle = this.color.toString();
			ctx.fill();
		}
	};
	
	var ParticleEngine = function () {
		
		this.draw = function (canvas) {
			var ctx = canvas.getContext("2d")
		
			canvas.globalCompositeOperation  = "lighter";
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			
			// Draw lines
			this.drawLines(ctx);
			
			// Draw particles
			for (var i = 0; i < this.particles.length; i++) {
				var p = this.particles[i];
				p.draw(ctx)
			}
		};
		
		this.drawLines = function (ctx) {
			
			for (var i = 0; i < this.lines.length; i++) {
				
				var line = this.lines[i],
					p1 = line.p1,
					p2 = line.p2,
					gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
				

				gradient.addColorStop("0", p1.color.toString());
				gradient.addColorStop("1", p2.color.toString());
				
				ctx.beginPath();
				ctx.strokeStyle = gradient;
				ctx.lineCap = "round";
				ctx.lineJoin = "round";
				ctx.moveTo(p1.x, p1.y);
				ctx.lineTo(p2.x, p2.y);
				ctx.lineWidth = 4;
				ctx.stroke();
				ctx.closePath();
			}
		};
		
		this.update = function () {
			
			this.lines = [];
			
			for (var i = 0; i < this.particles.length; i++) {
				
				var p = this.particles[i];

				p.x += p.vx;
				p.y += p.vy;
				
				if (p.x > window.innerWidth + p.radius) {
					p.x = p.radius;
				} else if (p.x < 0 - p.radius) {
					p.x = window.innerWidth - p.radius;
				}
				
				if (p.y > window.innerHeight + p.radius) {
					p.y = p.radius;
				} else if (p.y < 0 - p.radius) {
					p.y = window.innerHeight - p.radius;
				}
				
				for (var j = i + 1; j < this.particles.length; j++) {
					var p2 = this.particles[j];
					this.distance(p, p2)
				}
			}
		};
  
		this.isCloseToMargin = function (p) {
			return p.x > window.innerWidth + p.radius || p.x < 0 - p.radius || p.y > window.innerHeight + p.radius || p.y < 0 - p.radius;
		},

		this.distance = function (p1, p2) {
			
			var dist, 
				dx = p1.x - p2.x,
				dy = p1.y - p2.y,
				dist = Math.sqrt(dx * dx + dy * dy);

			// if (this.minDist >= dist) {
				
			// 	if (p1.color.toString() != p2.color.toString()) {
			// 		this.lines.push({p1: p1, p2: p2});
			// 	}
				
			// 	var ax = dx / (1e3 * this.velocity),
			// 		ay = dy / (1e3 * this.velocity);
				
			// 	p1.vx -= ax;
			// 	p1.vy -= ay;
			// 	p2.vx += ax;
			// 	p2.vy += ay;
				
			// }
		};
		
		this.init = function () {
			
			this.particles = [];
			this.particles = [];
			this.lines = [];
			this.colors = [];
			
			this.velocity = 100;
			this.minDist = 40;
			
			var particleCount = 50, 
				radius = 3,
				colors = [
					new RGBA(36, 22, 104, 0.45),	// black
					new RGBA(255, 255, 255, 0.2),	// white
				];
			
			
			for (var i = 0; particleCount > i; i++) {
				this.particles.push(new Particle(radius, colors[Math.floor(Math.random() * colors.length)]));
			}
		};
	};
	
	var Background = function (canvas, options) {
		this.canvas = canvas;
		this.gradient = new AnimGradient();
		this.disableParticles = options && options.disableParticles;
		
		if (this.disableParticles !== true) {
			this.particleEngine = new ParticleEngine();
		}
		
		window.onresize = function() {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		window.requestAnimFrame = (function () {
			return  window.requestAnimationFrame || 
					window.webkitRequestAnimationFrame || 
					window.mozRequestAnimationFrame    ||
					function( callback ){
						window.setTimeout(callback, 1000 / 60);
					};
		})();
	};
	
	Background.prototype = {
		
		init: function () {
			this.canvas.width = window.innerWidth;
			this.canvas.height = window.innerHeight;
			
			if (this.disableParticles !== true) {
				this.particleEngine.init();
			}
			
			this.animLoop();
		},
			
		draw: function () {
			//this.gradient.draw(this.canvas);
			
			if (this.disableParticles !== true) {
				this.particleEngine.draw(this.canvas);
			}
		},
	
		update: function () {
			//this.gradient.update();
			
			if (this.disableParticles !== true) {
				this.particleEngine.update();
			}
		},
		
		animLoop: function () {
			this.update();
			this.draw();
			window.requestAnimFrame(this.animLoop.bind(this));
		}
	};
			
	// Export
	out.Background = Background;
	
}(PHI));