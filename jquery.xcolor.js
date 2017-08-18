(function ($, undefined) {
	var color_names = {
		"aliceblue": "f0f8ff",
		"antiquewhite": "faebd7",
		"aqua": "0ff",
		"aquamarine": "7fffd4",
		"azure": "f0ffff",
		"beige": "f5f5dc",
		"bisque": "ffe4c4",
		"black": "000",
		"blanchedalmond": "ffebcd",
		"blue": "00f",
		"blueviolet": "8a2be2",
		"brown": "a52a2a",
		"burlywood": "deb887",
		"burntsienna": "ea7e5d",
		"cadetblue": "5f9ea0",
		"chartreuse": "7fff00",
		"chocolate": "d2691e",
		"coral": "ff7f50",
		"cornflowerblue": "6495ed",
		"cornsilk": "fff8dc",
		"crimson": "dc143c",
		"cyan": "0ff",
		"darkblue": "00008b",
		"darkcyan": "008b8b",
		"darkgoldenrod": "b8860b",
		"darkgray": "a9a9a9",
		"darkgreen": "006400",
		"darkgrey": "a9a9a9",
		"darkkhaki": "bdb76b",
		"darkmagenta": "8b008b",
		"darkolivegreen": "556b2f",
		"darkorange": "ff8c00",
		"darkorchid": "9932cc",
		"darkred": "8b0000",
		"darksalmon": "e9967a",
		"darkseagreen": "8fbc8f",
		"darkslateblue": "483d8b",
		"darkslategray": "2f4f4f",
		"darkslategrey": "2f4f4f",
		"darkturquoise": "00ced1",
		"darkviolet": "9400d3",
		"deeppink": "ff1493",
		"deepskyblue": "00bfff",
		"dimgray": "696969",
		"dimgrey": "696969",
		"dodgerblue": "1e90ff",
		"firebrick": "b22222",
		"floralwhite": "fffaf0",
		"forestgreen": "228b22",
		"fuchsia": "f0f",
		"gainsboro": "dcdcdc",
		"ghostwhite": "f8f8ff",
		"gold": "ffd700",
		"goldenrod": "daa520",
		"gray": "808080",
		"green": "008000",
		"greenyellow": "adff2f",
		"grey": "808080",
		"honeydew": "f0fff0",
		"hotpink": "ff69b4",
		"indianred": "cd5c5c",
		"indigo": "4b0082",
		"ivory": "fffff0",
		"khaki": "f0e68c",
		"lavender": "e6e6fa",
		"lavenderblush": "fff0f5",
		"lawngreen": "7cfc00",
		"lemonchiffon": "fffacd",
		"lightblue": "add8e6",
		"lightcoral": "f08080",
		"lightcyan": "e0ffff",
		"lightgoldenrodyellow": "fafad2",
		"lightgray": "d3d3d3",
		"lightgreen": "90ee90",
		"lightgrey": "d3d3d3",
		"lightpink": "ffb6c1",
		"lightsalmon": "ffa07a",
		"lightseagreen": "20b2aa",
		"lightskyblue": "87cefa",
		"lightslategray": "789",
		"lightslategrey": "789",
		"lightsteelblue": "b0c4de",
		"lightyellow": "ffffe0",
		"lime": "0f0",
		"limegreen": "32cd32",
		"linen": "faf0e6",
		"magenta": "f0f",
		"maroon": "800000",
		"mediumaquamarine": "66cdaa",
		"mediumblue": "0000cd",
		"mediumorchid": "ba55d3",
		"mediumpurple": "9370db",
		"mediumseagreen": "3cb371",
		"mediumslateblue": "7b68ee",
		"mediumspringgreen": "00fa9a",
		"mediumturquoise": "48d1cc",
		"mediumvioletred": "c71585",
		"midnightblue": "191970",
		"mintcream": "f5fffa",
		"mistyrose": "ffe4e1",
		"moccasin": "ffe4b5",
		"navajowhite": "ffdead",
		"navy": "000080",
		"oldlace": "fdf5e6",
		"olive": "808000",
		"olivedrab": "6b8e23",
		"orange": "ffa500",
		"orangered": "ff4500",
		"orchid": "da70d6",
		"palegoldenrod": "eee8aa",
		"palegreen": "98fb98",
		"paleturquoise": "afeeee",
		"palevioletred": "db7093",
		"papayawhip": "ffefd5",
		"peachpuff": "ffdab9",
		"peru": "cd853f",
		"pink": "ffc0cb",
		"plum": "dda0dd",
		"powderblue": "b0e0e6",
		"purple": "800080",
		"red": "f00",
		"rosybrown": "bc8f8f",
		"royalblue": "4169e1",
		"saddlebrown": "8b4513",
		"salmon": "fa8072",
		"sandybrown": "f4a460",
		"seagreen": "2e8b57",
		"seashell": "fff5ee",
		"sienna": "a0522d",
		"silver": "c0c0c0",
		"skyblue": "87ceeb",
		"slateblue": "6a5acd",
		"slategray": "708090",
		"slategrey": "708090",
		"snow": "fffafa",
		"springgreen": "00ff7f",
		"steelblue": "4682b4",
		"tan": "d2b48c",
		"teal": "008080",
		"thistle": "d8bfd8",
		"tomato": "ff6347",
		"turquoise": "40e0d0",
		"violet": "ee82ee",
		"wheat": "f5deb3",
		"white": "fff",
		"whitesmoke": "f5f5f5",
		"yellow": "ff0",
		"yellowgreen": "9acd32"
	}, _RGBAtoCSS;
	function xColor(color) {
		function _normalize(n, s) {

			var m;

			if (undefined !== n) {
				n = parseFloat(n);
			}

			if (undefined === s) {
				s = 255;
				m = 255;
			} else if (1 === s) {

				if (undefined === n || 1 === n) {
					return 1;
				}
				s = 100;
				m = 1;
			} else {
				m = s;
			}

			if (isNaN(n) || n <= 0) {
				return 0;
			}

			if (s < n) {
				return m;
			}

			if (n < 1 || 1 === s) {
				if (1 === m) {
					return n;
				} else {
					return (n * m) | 0;
				}
			}
			return n * m / s;
		}

		function _hsl(h,s,l) {
			h = _normalize(h, 360) / 360;
			s = _normalize(s, 1);
			l = _normalize(l, 1);

			if (0 === s) {
				l = Math.round(255 * l);
				return [l, l, l];
			}

			function _hue(v1, v2, h) {
				h = ++h % 1;

				if (6 * h < 1) return v1 + (v2 - v1) * 6 * h;
				if (2 * h < 1) return v2;
				if (3 * h < 2) return v1 + (v2 - v1) * (4 - 6 * h);
				return v1;
			}

			var v = l < .5 ? (l + l * s) : (l + s - l * s);
			var m = l + l - v;

			return [
			Math.round(255 *_hue(m, v, h + 1 / 3)),
			Math.round(255 *_hue(m, v, h)),
			Math.round(255 *_hue(m, v, h - 1 / 3)) ];
		}

		function _hsv(h,s,v) {

			h = _normalize(h, 360) / 60;
			s = _normalize(s, 1);
			v = _normalize(v, 1);

			var hi = h|0;
			var f = h - hi;

			var p = Math.round(255 * v * (1 - s));
			var q = Math.round(255 * v * (1 - s * f));
			var t = Math.round(255 * v * (1 - s * (1 - f)));
				v = Math.round(255 * v);

			switch(hi) {
			case 1:
				return [q, v, p];
			case 2:
				return [p, v, t];
			case 3:
				return [p, q, v];
			case 4:
				return [t, p, v];
			case 5:
				return [v, p, q];
			}
			return [v, t, p];
		}

		this["setColor"] = function (color) {

			this.success = true;

			if ("number" === typeof color) {

				this["a"] =((color >> 24) & 0xff) / 255;
				this["r"] = (color >> 16) & 0xff;
				this["g"] = (color >>  8) & 0xff;
				this["b"] = (color      ) & 0xff;
				return;
			}

			while ("object" === typeof color) {

				if (0 in color && 1 in color && 2 in color) {
					this["a"] = _normalize(color[3], 1);
					this["r"] = _normalize(color[0]);
					this["g"] = _normalize(color[1]);
					this["b"] = _normalize(color[2]);
					return;
				} else if ('r' in color && 'g' in color && 'b' in color) {
					this["a"] = _normalize(color["a"], 1);
					this["r"] = _normalize(color["r"]);
					this["g"] = _normalize(color["g"]);
					this["b"] = _normalize(color["b"]);
					return;
				} else if ('h' in color && 's' in color) {

					var rgb;

					if ('l' in color) {
						rgb = _hsl(color["h"], color["s"], color["l"]);
					} else if ('v' in color) {
						rgb = _hsv(color["h"], color["s"], color["v"]);
					} else if ('b' in color) {
						rgb = _hsv(color["h"], color["s"], color["b"]);
					} else {
						break;
					}

					this["a"] = _normalize(color["a"], 1);
					this["r"] = rgb[0];
					this["g"] = rgb[1];
					this["b"] = rgb[2];
					return;
				}
				break;
			}

			if ("string" === typeof color) {

				color = color.toLowerCase().replace(/[^a-z0-9,.()#%]/g, '');

				var part, c;

				if ('transparent' === color) {
					this["a"] = /* void */
					this["r"] = /* void */
					this["g"] = /* void */
					this["b"] = 0;
					return;
				}

				if ('rand' === color) {

					c = Math.random() * 0xffffff|0;

					this["a"] = 1;
					this["r"] = ((c >> 16) & 0xff);
					this["g"] = ((c >>  8) & 0xff);
					this["b"] = ((c      ) & 0xff);
					return;
				}

				if (undefined !== color_names[color]) {
					color = '#' + color_names[color];
				}

				// #ff9000, #ff0000
				if ((part = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/.exec(color))) {
					this["a"] = 1;
					this["r"] = parseInt(part[1], 16);
					this["g"] = parseInt(part[2], 16);
					this["b"] = parseInt(part[3], 16);
					return;
				}

				// #f00, fff
				if ((part = /^#?([0-9a-f])([0-9a-f])([0-9a-f])$/.exec(color))) {
					this["a"] = 1;
					this["r"] = parseInt(part[1] + part[1], 16);
					this["g"] = parseInt(part[2] + part[2], 16);
					this["b"] = parseInt(part[3] + part[3], 16);
					return;
				}

				// rgb(1, 234, 56)
				if ((part = /^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3})(,([0-9.]+))?\)$/.exec(color))) {
					this["a"] = _normalize(part[5], 1);
					this["r"] = _normalize(part[1]);
					this["g"] = _normalize(part[2]);
					this["b"] = _normalize(part[3]);
					return;
				}

				// rgb(66%, 55%, 44%) in [0,100]%, [0,100]%, [0,100]%
				if ((part = /^rgba?\(([0-9.]+\%),([0-9.]+\%),([0-9.]+\%)(,([0-9.]+)\%?)?\)$/.exec(color))) {
					this["a"] = _normalize(part[5], 1);
					this["r"] = Math.round(2.55 * _normalize(part[1], 100));
					this["g"] = Math.round(2.55 * _normalize(part[2], 100));
					this["b"] = Math.round(2.55 * _normalize(part[3], 100));
					return;
				}

				// hsv(64, 40, 16) in [0, 360], [0,100], [0,100]
				if ((part = /^hs([bvl])a?\((\d{1,3}),(\d{1,3}),(\d{1,3})(,([0-9.]+))?\)$/.exec(color))) {
					var func;
					if ("l" === part[1]) {
						func = _hsl;
					} else {
						func = _hsv;
					}

					c = func(parseInt(part[2], 10), parseInt(part[3], 10), parseInt(part[4], 10));

					this["a"] = _normalize(part[6], 1);
					this["r"] = c[0];
					this["g"] = c[1];
					this["b"] = c[2];
					return;
				}

				// 1, 234, 56
				if ((part = /^(\d{1,3}),(\d{1,3}),(\d{1,3})(,([0-9.]+))?$/.exec(color))) {
					this["a"] = _normalize(part[5], 1);
					this["r"] = _normalize(part[1]);
					this["g"] = _normalize(part[2]);
					this["b"] = _normalize(part[3]);
					return;
				}
			}
			this.success = false;
		};

		this["getColor"] = function (type) {

			if (undefined !== type) switch (type.toLowerCase()) {
				case "rgb":
					return this["getRGB"]();
				case "hsv":
				case "hsb":
					return this["getHSV"]();
				case "hsl":
					return this["getHSL"]();
				case "int":
					return this["getInt"]();
				case "array":
					return this["getArray"]();
				case "fraction":
					return this["getFraction"]();
				case "css":
				case "style":
					return this["getCSS"]();
				case "name":
					return this["getName"]();
			}
			return this["getHex"]();
		};

		this["getRGB"] = function () {

			if (this.success) {

				return {
					"r": this["r"],
					"g": this["g"],
					"b": this["b"],
					"a": this["a"]
				};
			}
			return null;
		};

		this["getCSS"] = function () {

			if (this.success) {

				if (0 === this["a"]) {
					return "transparent";
				}

				if (1 === this["a"]) {
					return 'rgb(' + this["r"] + ',' + this["g"] + ',' + this["b"] + ')';
				}
				return _RGBAtoCSS(this["r"], this["g"], this["b"], this["a"]);
			}
			return null;
		};

		this["getArray"] = function () {

			if (this.success) {
				return [this["r"], this["g"], this["b"], 100 * this["a"]|0];
			}
			return null;
		};

		this["getName"] = function () {

			if (this.success) {

				var lowest = null;
				var lowest_ndx;

				var table = color_names;

				var a = this["getHSL"]();

				for (var i in table) {

					/* We do not handle transparency */
					var b = new xColor(table[i])["getHSL"]();

					var tmp = Math.sqrt(.5 * (a["h"] - b["h"]) * (a["h"] - b["h"]) + .5 * (a["s"] - b["s"]) * (a["s"] - b["s"]) + (a["l"] - b["l"]) * (a["l"] - b["l"]));

					if (null === lowest || tmp < lowest) {
						lowest = tmp;
						lowest_ndx = i;
					}
				}
				return lowest_ndx;
			}
			return null;
		};

		this["getFraction"] = function () {

			if (this.success) {

				return {
					"r": this["r"] / 255,
					"g": this["g"] / 255,
					"b": this["b"] / 255,
					"a": this["a"]
				};
			}
			return null;
		};

		this["getHSL"] = function () {

			// inspiration: http://130.113.54.154/~monger/hsl-rgb.html
			if (this.success) {

				var r = this["r"] / 255;
				var g = this["g"] / 255;
				var b = this["b"] / 255;

				var min = Math.min(r, g, b);
				var max = Math.max(r, g, b);
				var delta = max - min;

				var h, s, l = (max + min) / 2;

				if (0 === delta) {
					h = 0;
					s = 0;
				} else {

					if (r === max) {
						h = (g - b) / delta;
					} else if (g === max) {
						h = 2 + (b - r) / delta;
					} else {
						h = 4 + (r - g) / delta;
					}

					s = delta / (l < .5 ? max + min : 2 - max - min);
				}
				return {
					"h": Math.round( 60 * ((6 + h) % 6)),
					"s": Math.round(100 * s),
					"l": Math.round(100 * l),
					"a": this["a"]
				};
			}
			return null;
		};

		this["getHSV"] = function () {

			if (this.success) {

				var r = this["r"] / 255;
				var g = this["g"] / 255;
				var b = this["b"] / 255;

				/*
				if (r > g) {
					max = r;
					min = g;
				} else {
					min = r;
					max = g;
				}

				if (b > max)
					max = b;

				if (b < min)
					min = b;
				*/

				var min = Math.min(r, g, b);
				var max = Math.max(r, g, b);
				var delta = max - min;

				var h, s, v = max;

				if (0 === max) {
					s = 0;
				} else {
					s = delta / max;
				}

				if (0 === delta) {
					h = 0;
				} else if (r === max) {
					h = (g - b) / delta;
				} else if (g === max) {
					h = 2 + (b - r) / delta;
				} else {
					h = 4 + (r - g) / delta;
				}

				return {
					"h": Math.round( 60 * ((6 + h) % 6)),
					"s": Math.round(100 * s),
					"v": Math.round(100 * v),
					"a": this["a"]
				};
			}
			return null;
		};

		this["getHex"] = function () {

			if (this.success) {

				var chars = "0123456789abcdef";

				var r1 = this["r"] >> 4;
				var g1 = this["g"] >> 4;
				var b1 = this["b"] >> 4;

				var r2 = this["r"] & 0xf;
				var g2 = this["g"] & 0xf;
				var b2 = this["b"] & 0xf;

				return '#'
					+ chars.charAt(r1) + chars.charAt(r2)
					+ chars.charAt(g1) + chars.charAt(g2)
					+ chars.charAt(b1) + chars.charAt(b2);
			}
			return null;
		};

		this["getInt"] = function (alpha) {

			if (this.success) {
				if (undefined !== alpha) {
					return ((100 * this["a"]|0) << 24 ^ this["r"] << 16 ^ this["g"] << 8 ^ this["b"]);
				}
				return (this["r"] << 16 ^ this["g"] << 8 ^ this["b"]) & 0xffffff;
			}
			return null;
		};

		this["toString"] = function () {
			return this["getHex"]();
		};

		this["setColor"](color);
	}
	function xColorMix() {
		this["analogous"] = function (col, results, slices) {

			if (undefined === results) {
				results = 8;
			}

			if (undefined === slices) {
				slices = 30;
			}
			var c = new xColor(col);
			if (c.success) {
				var hsv = c["getHSV"]();
				var part = 360 / slices, ret = [ c ];
				var saturat = 100/results;
				hsv["s"] = saturat;
				for (hsv["h"] = ((hsv["h"] - (part * results >> 1)) + 720) % 360; --results; ) {
					hsv["h"]+= part;
					hsv["h"]%= 1440;
					hsv["s"]+= saturat;

					ret.push(new xColor(hsv));
				}
				return ret;
			}
			return null;
		};
	}

	$["xcolor"] = new xColorMix();

}(jQuery));