import React, { createElement, useContext, useDebugValue, useEffect, useMemo, useRef, useState } from "react";

//#region rolldown:runtime
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function() {
	return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function() {
	return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from$1, except, desc) => {
	if (from$1 && typeof from$1 === "object" || typeof from$1 === "function") for (var keys = __getOwnPropNames(from$1), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k$1) => from$1[k$1]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from$1, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));

//#endregion
//#region \0rollupPluginBabelHelpers.js
function _OverloadYield(e, d) {
	this.v = e, this.k = d;
}
function _objectWithoutProperties(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
function _taggedTemplateLiteral(e, t) {
	return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
function _typeof(o) {
	"@babel/helpers - typeof";
	return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o$1) {
		return typeof o$1;
	} : function(o$1) {
		return o$1 && "function" == typeof Symbol && o$1.constructor === Symbol && o$1 !== Symbol.prototype ? "symbol" : typeof o$1;
	}, _typeof(o);
}
function AsyncGenerator(e) {
	var r, t;
	function resume(r$1, t$1) {
		try {
			var n = e[r$1](t$1), o = n.value, u = o instanceof _OverloadYield;
			Promise.resolve(u ? o.v : o).then(function(t$2) {
				if (u) {
					var i = "return" === r$1 ? "return" : "next";
					if (!o.k || t$2.done) return resume(i, t$2);
					t$2 = e[i](t$2).value;
				}
				settle(n.done ? "return" : "normal", t$2);
			}, function(e$1) {
				resume("throw", e$1);
			});
		} catch (e$1) {
			settle("throw", e$1);
		}
	}
	function settle(e$1, n) {
		switch (e$1) {
			case "return":
				r.resolve({
					value: n,
					done: !0
				});
				break;
			case "throw":
				r.reject(n);
				break;
			default: r.resolve({
				value: n,
				done: !1
			});
		}
		(r = r.next) ? resume(r.key, r.arg) : t = null;
	}
	this._invoke = function(e$1, n) {
		return new Promise(function(o, u) {
			var i = {
				key: e$1,
				arg: n,
				resolve: o,
				reject: u,
				next: null
			};
			t ? t = t.next = i : (r = t = i, resume(e$1, n));
		});
	}, "function" != typeof e.return && (this.return = void 0);
}
var init___rollupPluginBabelHelpers = __esm({ "\\0rollupPluginBabelHelpers.js"() {
	AsyncGenerator.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function() {
		return this;
	}, AsyncGenerator.prototype.next = function(e) {
		return this._invoke("next", e);
	}, AsyncGenerator.prototype.throw = function(e) {
		return this._invoke("throw", e);
	}, AsyncGenerator.prototype.return = function(e) {
		return this._invoke("return", e);
	};
} });

//#endregion
//#region ../../../node_modules/.pnpm/tslib@2.6.2/node_modules/tslib/tslib.es6.mjs
init___rollupPluginBabelHelpers();
var _assign = function __assign() {
	_assign = Object.assign || function __assign$1(t) {
		for (var s, i = 1, n = arguments.length; i < n; i++) {
			s = arguments[i];
			for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
		}
		return t;
	};
	return _assign.apply(this, arguments);
};
function __spreadArray(to, from$1, pack) {
	if (pack || arguments.length === 2) {
		for (var i = 0, l = from$1.length, ar; i < l; i++) if (ar || !(i in from$1)) {
			if (!ar) ar = Array.prototype.slice.call(from$1, 0, i);
			ar[i] = from$1[i];
		}
	}
	return to.concat(ar || Array.prototype.slice.call(from$1));
}

//#endregion
//#region ../../../node_modules/.pnpm/@emotion+memoize@0.8.1/node_modules/@emotion/memoize/dist/emotion-memoize.cjs.dev.js
var require_emotion_memoize_cjs_dev = __commonJS({ "../../../node_modules/.pnpm/@emotion+memoize@0.8.1/node_modules/@emotion/memoize/dist/emotion-memoize.cjs.dev.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	function memoize$1(fn) {
		var cache = Object.create(null);
		return function(arg) {
			if (cache[arg] === void 0) cache[arg] = fn(arg);
			return cache[arg];
		};
	}
	exports["default"] = memoize$1;
} });

//#endregion
//#region ../../../node_modules/.pnpm/@emotion+memoize@0.8.1/node_modules/@emotion/memoize/dist/emotion-memoize.cjs.js
var require_emotion_memoize_cjs = __commonJS({ "../../../node_modules/.pnpm/@emotion+memoize@0.8.1/node_modules/@emotion/memoize/dist/emotion-memoize.cjs.js"(exports, module) {
	module.exports = require_emotion_memoize_cjs_dev();
} });

//#endregion
//#region ../../../node_modules/.pnpm/@emotion+is-prop-valid@1.2.2/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.cjs.dev.js
var require_emotion_is_prop_valid_cjs_dev = __commonJS({ "../../../node_modules/.pnpm/@emotion+is-prop-valid@1.2.2/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.cjs.dev.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	var memoize = require_emotion_memoize_cjs();
	function _interopDefault(e) {
		return e && e.__esModule ? e : { "default": e };
	}
	var memoize__default = /* @__PURE__ */ _interopDefault(memoize);
	var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
	var isPropValid = /* @__PURE__ */ memoize__default["default"](
		function(prop) {
			return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
		}
		/* Z+1 */
);
	exports["default"] = isPropValid;
} });

//#endregion
//#region ../../../node_modules/.pnpm/@emotion+is-prop-valid@1.2.2/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.cjs.js
var require_emotion_is_prop_valid_cjs = __commonJS({ "../../../node_modules/.pnpm/@emotion+is-prop-valid@1.2.2/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.cjs.js"(exports, module) {
	module.exports = require_emotion_is_prop_valid_cjs_dev();
} });

//#endregion
//#region ../../../node_modules/.pnpm/@emotion+is-prop-valid@1.2.2/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.cjs.default.js
var require_emotion_is_prop_valid_cjs_default = __commonJS({ "../../../node_modules/.pnpm/@emotion+is-prop-valid@1.2.2/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.cjs.default.js"(exports) {
	exports._default = require_emotion_is_prop_valid_cjs()["default"];
} });
var import_emotion_is_prop_valid_cjs_default = __toESM(require_emotion_is_prop_valid_cjs_default(), 1);

//#endregion
//#region ../../../node_modules/.pnpm/shallowequal@1.1.0/node_modules/shallowequal/index.js
var require_shallowequal = __commonJS({ "../../../node_modules/.pnpm/shallowequal@1.1.0/node_modules/shallowequal/index.js"(exports, module) {
	init___rollupPluginBabelHelpers();
	module.exports = function shallowEqual(objA, objB, compare, compareContext) {
		var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
		if (ret !== void 0) return !!ret;
		if (objA === objB) return true;
		if (_typeof(objA) !== "object" || !objA || _typeof(objB) !== "object" || !objB) return false;
		var keysA = Object.keys(objA);
		var keysB = Object.keys(objB);
		if (keysA.length !== keysB.length) return false;
		var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
		for (var idx = 0; idx < keysA.length; idx++) {
			var key = keysA[idx];
			if (!bHasOwnProperty(key)) return false;
			var valueA = objA[key];
			var valueB = objB[key];
			ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
			if (ret === false || ret === void 0 && valueA !== valueB) return false;
		}
		return true;
	};
} });
var import_shallowequal = __toESM(require_shallowequal());

//#endregion
//#region ../../../node_modules/.pnpm/stylis@4.3.2/node_modules/stylis/src/Enum.js
var MS = "-ms-";
var MOZ = "-moz-";
var WEBKIT = "-webkit-";
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";
var LAYER = "@layer";

//#endregion
//#region ../../../node_modules/.pnpm/stylis@4.3.2/node_modules/stylis/src/Utility.js
var abs = Math.abs;
var from = String.fromCharCode;
var assign = Object.assign;
function hash(value, length$1) {
	return charat(value, 0) ^ 45 ? (((length$1 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
function trim(value) {
	return value.trim();
}
function match(value, pattern) {
	return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
	return value.replace(pattern, replacement);
}
function indexof(value, search, position$1) {
	return value.indexOf(search, position$1);
}
function charat(value, index) {
	return value.charCodeAt(index) | 0;
}
function substr(value, begin, end) {
	return value.slice(begin, end);
}
function strlen(value) {
	return value.length;
}
function sizeof(value) {
	return value.length;
}
function append(value, array) {
	return array.push(value), value;
}
function combine(array, callback) {
	return array.map(callback).join("");
}
function filter(array, pattern) {
	return array.filter(function(value) {
		return !match(value, pattern);
	});
}

//#endregion
//#region ../../../node_modules/.pnpm/stylis@4.3.2/node_modules/stylis/src/Tokenizer.js
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root, parent, type, props, children, length$1, siblings) {
	return {
		value,
		root,
		parent,
		type,
		props,
		children,
		line,
		column,
		length: length$1,
		"return": "",
		siblings
	};
}
function copy(root, props) {
	return assign(node("", null, null, "", null, null, 0, root.siblings), root, { length: -root.length }, props);
}
function lift(root) {
	while (root.root) root = copy(root.root, { children: [root] });
	append(root, root.siblings);
}
/**
* @return {number}
*/
function _char() {
	return character;
}
function prev() {
	character = position > 0 ? charat(characters, --position) : 0;
	if (column--, character === 10) column = 1, line--;
	return character;
}
function next() {
	character = position < length ? charat(characters, position++) : 0;
	if (column++, character === 10) column = 1, line++;
	return character;
}
function peek() {
	return charat(characters, position);
}
function caret() {
	return position;
}
function slice(begin, end) {
	return substr(characters, begin, end);
}
function token(type) {
	switch (type) {
		case 0:
		case 9:
		case 10:
		case 13:
		case 32: return 5;
		case 33:
		case 43:
		case 44:
		case 47:
		case 62:
		case 64:
		case 126:
		case 59:
		case 123:
		case 125: return 4;
		case 58: return 3;
		case 34:
		case 39:
		case 40:
		case 91: return 2;
		case 41:
		case 93: return 1;
	}
	return 0;
}
function alloc(value) {
	return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
	return characters = "", value;
}
function delimit(type) {
	return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
	while (character = peek()) if (character < 33) next();
	else break;
	return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index, count) {
	while (--count && next()) if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97) break;
	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
	while (next()) switch (character) {
		case type: return position;
		case 34:
		case 39:
			if (type !== 34 && type !== 39) delimiter(character);
			break;
		case 40:
			if (type === 41) delimiter(type);
			break;
		case 92:
			next();
			break;
	}
	return position;
}
function commenter(type, index) {
	while (next()) if (type + character === 57) break;
	else if (type + character === 84 && peek() === 47) break;
	return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index) {
	while (!token(peek())) next();
	return slice(index, position);
}

//#endregion
//#region ../../../node_modules/.pnpm/stylis@4.3.2/node_modules/stylis/src/Parser.js
function compile(value) {
	return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0;
	var offset = 0;
	var length$1 = pseudo;
	var atrule = 0;
	var property = 0;
	var previous = 0;
	var variable = 1;
	var scanning = 1;
	var ampersand = 1;
	var character$1 = 0;
	var type = "";
	var props = rules;
	var children = rulesets;
	var reference = rule;
	var characters$1 = type;
	while (scanning) switch (previous = character$1, character$1 = next()) {
		case 40: if (previous != 108 && charat(characters$1, length$1 - 1) == 58) {
			if (indexof(characters$1 += replace(delimit(character$1), "&", "&\f"), "&\f", abs(index ? points[index - 1] : 0)) != -1) ampersand = -1;
			break;
		}
		case 34:
		case 39:
		case 91:
			characters$1 += delimit(character$1);
			break;
		case 9:
		case 10:
		case 13:
		case 32:
			characters$1 += whitespace(previous);
			break;
		case 92:
			characters$1 += escaping(caret() - 1, 7);
			continue;
		case 47:
			switch (peek()) {
				case 42:
				case 47:
					append(comment(commenter(next(), caret()), root, parent, declarations), declarations);
					break;
				default: characters$1 += "/";
			}
			break;
		case 123 * variable: points[index++] = strlen(characters$1) * ampersand;
		case 125 * variable:
		case 59:
		case 0:
			switch (character$1) {
				case 0:
				case 125: scanning = 0;
				case 59 + offset:
					if (ampersand == -1) characters$1 = replace(characters$1, /\f/g, "");
					if (property > 0 && strlen(characters$1) - length$1) append(property > 32 ? declaration(characters$1 + ";", rule, parent, length$1 - 1, declarations) : declaration(replace(characters$1, " ", "") + ";", rule, parent, length$1 - 2, declarations), declarations);
					break;
				case 59: characters$1 += ";";
				default:
					append(reference = ruleset(characters$1, root, parent, index, offset, rules, points, type, props = [], children = [], length$1, rulesets), rulesets);
					if (character$1 === 123) if (offset === 0) parse(characters$1, root, reference, reference, props, rulesets, length$1, points, children);
					else switch (atrule === 99 && charat(characters$1, 3) === 110 ? 100 : atrule) {
						case 100:
						case 108:
						case 109:
						case 115:
							parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length$1, children), children), rules, children, length$1, points, rule ? props : children);
							break;
						default: parse(characters$1, reference, reference, reference, [""], children, 0, points, children);
					}
			}
			index = offset = property = 0, variable = ampersand = 1, type = characters$1 = "", length$1 = pseudo;
			break;
		case 58: length$1 = 1 + strlen(characters$1), property = previous;
		default:
			if (variable < 1) {
				if (character$1 == 123) --variable;
				else if (character$1 == 125 && variable++ == 0 && prev() == 125) continue;
			}
			switch (characters$1 += from(character$1), character$1 * variable) {
				case 38:
					ampersand = offset > 0 ? 1 : (characters$1 += "\f", -1);
					break;
				case 44:
					points[index++] = (strlen(characters$1) - 1) * ampersand, ampersand = 1;
					break;
				case 64:
					if (peek() === 45) characters$1 += delimit(next());
					atrule = peek(), offset = length$1 = strlen(type = characters$1 += identifier(caret())), character$1++;
					break;
				case 45: if (previous === 45 && strlen(characters$1) == 2) variable = 0;
			}
	}
	return rulesets;
}
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length$1, siblings) {
	var post = offset - 1;
	var rule = offset === 0 ? rules : [""];
	var size = sizeof(rule);
	for (var i = 0, j$1 = 0, k$1 = 0; i < index; ++i) for (var x$1 = 0, y$1 = substr(value, post + 1, post = abs(j$1 = points[i])), z$1 = value; x$1 < size; ++x$1) if (z$1 = trim(j$1 > 0 ? rule[x$1] + " " + y$1 : replace(y$1, /&\f/g, rule[x$1]))) props[k$1++] = z$1;
	return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length$1, siblings);
}
function comment(value, root, parent, siblings) {
	return node(value, root, parent, COMMENT, from(_char()), substr(value, 2, -2), 0, siblings);
}
function declaration(value, root, parent, length$1, siblings) {
	return node(value, root, parent, DECLARATION, substr(value, 0, length$1), substr(value, length$1 + 1, -1), length$1, siblings);
}

//#endregion
//#region ../../../node_modules/.pnpm/stylis@4.3.2/node_modules/stylis/src/Prefixer.js
function prefix(value, length$1, children) {
	switch (hash(value, length$1)) {
		case 5103: return WEBKIT + "print-" + value + value;
		case 5737:
		case 4201:
		case 3177:
		case 3433:
		case 1641:
		case 4457:
		case 2921:
		case 5572:
		case 6356:
		case 5844:
		case 3191:
		case 6645:
		case 3005:
		case 6391:
		case 5879:
		case 5623:
		case 6135:
		case 4599:
		case 4855:
		case 4215:
		case 6389:
		case 5109:
		case 5365:
		case 5621:
		case 3829: return WEBKIT + value + value;
		case 4789: return MOZ + value + value;
		case 5349:
		case 4246:
		case 4810:
		case 6968:
		case 2756: return WEBKIT + value + MOZ + value + MS + value + value;
		case 5936: switch (charat(value, length$1 + 11)) {
			case 114: return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
			case 108: return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
			case 45: return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
		}
		case 6828:
		case 4268:
		case 2903: return WEBKIT + value + MS + value + value;
		case 6165: return WEBKIT + value + MS + "flex-" + value + value;
		case 5187: return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
		case 5443: return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/g, "") + (!match(value, /flex-|baseline/) ? MS + "grid-row-" + replace(value, /flex-|-self/g, "") : "") + value;
		case 4675: return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/g, "") + value;
		case 5548: return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
		case 5292: return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
		case 6060: return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
		case 4554: return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
		case 6187: return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
		case 5495:
		case 3959: return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
		case 4968: return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
		case 4200:
			if (!match(value, /flex-|baseline/)) return MS + "grid-column-align" + substr(value, length$1) + value;
			break;
		case 2592:
		case 3360: return MS + replace(value, "template-", "") + value;
		case 4384:
		case 3616:
			if (children && children.some(function(element, index) {
				return length$1 = index, match(element.props, /grid-\w+-end/);
			})) return ~indexof(value + (children = children[length$1].value), "span", 0) ? value : MS + replace(value, "-start", "") + value + MS + "grid-row-span:" + (~indexof(children, "span", 0) ? match(children, /\d+/) : +match(children, /\d+/) - +match(value, /\d+/)) + ";";
			return MS + replace(value, "-start", "") + value;
		case 4896:
		case 4128: return children && children.some(function(element) {
			return match(element.props, /grid-\w+-start/);
		}) ? value : MS + replace(replace(value, "-end", "-span"), "span ", "") + value;
		case 4095:
		case 3583:
		case 4068:
		case 2532: return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
		case 8116:
		case 7059:
		case 5753:
		case 5535:
		case 5445:
		case 5701:
		case 4933:
		case 4677:
		case 5533:
		case 5789:
		case 5021:
		case 4765:
			if (strlen(value) - 1 - length$1 > 6) switch (charat(value, length$1 + 1)) {
				case 109: if (charat(value, length$1 + 4) !== 45) break;
				case 102: return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length$1 + 3) == 108 ? "$3" : "$2-$3")) + value;
				case 115: return ~indexof(value, "stretch", 0) ? prefix(replace(value, "stretch", "fill-available"), length$1, children) + value : value;
			}
			break;
		case 5152:
		case 5920: return replace(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(_$1, a, b$1, c, d, e, f$1) {
			return MS + a + ":" + b$1 + f$1 + (c ? MS + a + "-span:" + (d ? e : +e - +b$1) + f$1 : "") + value;
		});
		case 4949:
			if (charat(value, length$1 + 6) === 121) return replace(value, ":", ":" + WEBKIT) + value;
			break;
		case 6444:
			switch (charat(value, charat(value, 14) === 45 ? 18 : 11)) {
				case 120: return replace(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
				case 100: return replace(value, ":", ":" + MS) + value;
			}
			break;
		case 5719:
		case 2647:
		case 2135:
		case 3927:
		case 2391: return replace(value, "scroll-", "scroll-snap-") + value;
	}
	return value;
}

//#endregion
//#region ../../../node_modules/.pnpm/stylis@4.3.2/node_modules/stylis/src/Serializer.js
function serialize(children, callback) {
	var output = "";
	for (var i = 0; i < children.length; i++) output += callback(children[i], i, children, callback) || "";
	return output;
}
function stringify(element, index, children, callback) {
	switch (element.type) {
		case LAYER: if (element.children.length) break;
		case IMPORT:
		case DECLARATION: return element["return"] = element["return"] || element.value;
		case COMMENT: return "";
		case KEYFRAMES: return element["return"] = element.value + "{" + serialize(element.children, callback) + "}";
		case RULESET: if (!strlen(element.value = element.props.join(","))) return "";
	}
	return strlen(children = serialize(element.children, callback)) ? element["return"] = element.value + "{" + children + "}" : "";
}

//#endregion
//#region ../../../node_modules/.pnpm/stylis@4.3.2/node_modules/stylis/src/Middleware.js
function middleware(collection) {
	var length$1 = sizeof(collection);
	return function(element, index, children, callback) {
		var output = "";
		for (var i = 0; i < length$1; i++) output += collection[i](element, index, children, callback) || "";
		return output;
	};
}
function rulesheet(callback) {
	return function(element) {
		if (!element.root) {
			if (element = element["return"]) callback(element);
		}
	};
}
function prefixer(element, index, children, callback) {
	if (element.length > -1) {
		if (!element["return"]) switch (element.type) {
			case DECLARATION:
				element["return"] = prefix(element.value, element.length, children);
				return;
			case KEYFRAMES: return serialize([copy(element, { value: replace(element.value, "@", "@" + WEBKIT) })], callback);
			case RULESET: if (element.length) return combine(children = element.props, function(value) {
				switch (match(value, callback = /(::plac\w+|:read-\w+)/)) {
					case ":read-only":
					case ":read-write":
						lift(copy(element, { props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")] }));
						lift(copy(element, { props: [value] }));
						assign(element, { props: filter(children, callback) });
						break;
					case "::placeholder":
						lift(copy(element, { props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")] }));
						lift(copy(element, { props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")] }));
						lift(copy(element, { props: [replace(value, /:(plac\w+)/, MS + "input-$1")] }));
						lift(copy(element, { props: [value] }));
						assign(element, { props: filter(children, callback) });
						break;
				}
				return "";
			});
		}
	}
}

//#endregion
//#region ../../../node_modules/.pnpm/@emotion+unitless@0.8.1/node_modules/@emotion/unitless/dist/emotion-unitless.cjs.dev.js
var require_emotion_unitless_cjs_dev = __commonJS({ "../../../node_modules/.pnpm/@emotion+unitless@0.8.1/node_modules/@emotion/unitless/dist/emotion-unitless.cjs.dev.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	var unitlessKeys = {
		animationIterationCount: 1,
		aspectRatio: 1,
		borderImageOutset: 1,
		borderImageSlice: 1,
		borderImageWidth: 1,
		boxFlex: 1,
		boxFlexGroup: 1,
		boxOrdinalGroup: 1,
		columnCount: 1,
		columns: 1,
		flex: 1,
		flexGrow: 1,
		flexPositive: 1,
		flexShrink: 1,
		flexNegative: 1,
		flexOrder: 1,
		gridRow: 1,
		gridRowEnd: 1,
		gridRowSpan: 1,
		gridRowStart: 1,
		gridColumn: 1,
		gridColumnEnd: 1,
		gridColumnSpan: 1,
		gridColumnStart: 1,
		msGridRow: 1,
		msGridRowSpan: 1,
		msGridColumn: 1,
		msGridColumnSpan: 1,
		fontWeight: 1,
		lineHeight: 1,
		opacity: 1,
		order: 1,
		orphans: 1,
		tabSize: 1,
		widows: 1,
		zIndex: 1,
		zoom: 1,
		WebkitLineClamp: 1,
		fillOpacity: 1,
		floodOpacity: 1,
		stopOpacity: 1,
		strokeDasharray: 1,
		strokeDashoffset: 1,
		strokeMiterlimit: 1,
		strokeOpacity: 1,
		strokeWidth: 1
	};
	exports["default"] = unitlessKeys;
} });

//#endregion
//#region ../../../node_modules/.pnpm/@emotion+unitless@0.8.1/node_modules/@emotion/unitless/dist/emotion-unitless.cjs.js
var require_emotion_unitless_cjs = __commonJS({ "../../../node_modules/.pnpm/@emotion+unitless@0.8.1/node_modules/@emotion/unitless/dist/emotion-unitless.cjs.js"(exports, module) {
	module.exports = require_emotion_unitless_cjs_dev();
} });

//#endregion
//#region ../../../node_modules/.pnpm/@emotion+unitless@0.8.1/node_modules/@emotion/unitless/dist/emotion-unitless.cjs.default.js
var require_emotion_unitless_cjs_default = __commonJS({ "../../../node_modules/.pnpm/@emotion+unitless@0.8.1/node_modules/@emotion/unitless/dist/emotion-unitless.cjs.default.js"(exports) {
	exports._default = require_emotion_unitless_cjs()["default"];
} });
var import_emotion_unitless_cjs_default = __toESM(require_emotion_unitless_cjs_default(), 1);

//#endregion
//#region ../../../node_modules/.pnpm/styled-components@6.1.15_re_132d7391b1f4333b8d7519ab70e99878/node_modules/styled-components/dist/styled-components.browser.esm.js
init___rollupPluginBabelHelpers();
var f = "undefined" != typeof process && void 0 !== process.env && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", m = "active", y = "data-styled-version", v = "6.1.15", g = "/*!sc*/\n", S = "undefined" != typeof window && "HTMLElement" in window, w = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env && void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== process.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== process.env.REACT_APP_SC_DISABLE_SPEEDY && process.env.REACT_APP_SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env && void 0 !== process.env.SC_DISABLE_SPEEDY && "" !== process.env.SC_DISABLE_SPEEDY ? "false" !== process.env.SC_DISABLE_SPEEDY && process.env.SC_DISABLE_SPEEDY : true), b = {}, E = /invalid hook call/i, N = new Set(), P = function P$1(t, n) {
	{
		var o = n ? " with the id of \"".concat(n, "\"") : "", s = "The component ".concat(t).concat(o, " has been created dynamically.\n") + "You may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.", i = console.error;
		try {
			var a = !0;
			console.error = function(t$1) {
				for (var n$1 = [], o$1 = 1; o$1 < arguments.length; o$1++) n$1[o$1 - 1] = arguments[o$1];
				E.test(t$1) ? (a = !1, N["delete"](s)) : i.apply(void 0, __spreadArray([t$1], n$1, !1));
			}, useRef(), a && !N.has(s) && (console.warn(s), N.add(s));
		} catch (e) {
			E.test(e.message) && N["delete"](s);
		} finally {
			console.error = i;
		}
	}
}, _ = Object.freeze([]), C = Object.freeze({});
function I(e, t, n) {
	return void 0 === n && (n = C), e.theme !== n.theme && e.theme || t || n.theme;
}
var A = new Set([
	"a",
	"abbr",
	"address",
	"area",
	"article",
	"aside",
	"audio",
	"b",
	"base",
	"bdi",
	"bdo",
	"big",
	"blockquote",
	"body",
	"br",
	"button",
	"canvas",
	"caption",
	"cite",
	"code",
	"col",
	"colgroup",
	"data",
	"datalist",
	"dd",
	"del",
	"details",
	"dfn",
	"dialog",
	"div",
	"dl",
	"dt",
	"em",
	"embed",
	"fieldset",
	"figcaption",
	"figure",
	"footer",
	"form",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"header",
	"hgroup",
	"hr",
	"html",
	"i",
	"iframe",
	"img",
	"input",
	"ins",
	"kbd",
	"keygen",
	"label",
	"legend",
	"li",
	"link",
	"main",
	"map",
	"mark",
	"menu",
	"menuitem",
	"meta",
	"meter",
	"nav",
	"noscript",
	"object",
	"ol",
	"optgroup",
	"option",
	"output",
	"p",
	"param",
	"picture",
	"pre",
	"progress",
	"q",
	"rp",
	"rt",
	"ruby",
	"s",
	"samp",
	"script",
	"section",
	"select",
	"small",
	"source",
	"span",
	"strong",
	"style",
	"sub",
	"summary",
	"sup",
	"table",
	"tbody",
	"td",
	"textarea",
	"tfoot",
	"th",
	"thead",
	"time",
	"tr",
	"track",
	"u",
	"ul",
	"use",
	"var",
	"video",
	"wbr",
	"circle",
	"clipPath",
	"defs",
	"ellipse",
	"foreignObject",
	"g",
	"image",
	"line",
	"linearGradient",
	"marker",
	"mask",
	"path",
	"pattern",
	"polygon",
	"polyline",
	"radialGradient",
	"rect",
	"stop",
	"svg",
	"text",
	"tspan"
]), O = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, D = /(^-|-$)/g;
function R(e) {
	return e.replace(O, "-").replace(D, "");
}
var T = /(a)(d)/gi, k = 52, j = function j$1(e) {
	return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function x(e) {
	var t, n = "";
	for (t = Math.abs(e); t > k; t = t / k | 0) n = j(t % k) + n;
	return (j(t % k) + n).replace(T, "$1-$2");
}
var V, F = 5381, M = function M$1(e, t) {
	for (var n = t.length; n;) e = 33 * e ^ t.charCodeAt(--n);
	return e;
}, z = function z$1(e) {
	return M(F, e);
};
function $(e) {
	return x(z(e) >>> 0);
}
function B(e) {
	return "string" == typeof e && e || e.displayName || e.name || "Component";
}
function L(e) {
	return "string" == typeof e && e.charAt(0) === e.charAt(0).toLowerCase();
}
var G = "function" == typeof Symbol && Symbol["for"], Y = G ? Symbol["for"]("react.memo") : 60115, W = G ? Symbol["for"]("react.forward_ref") : 60112, q = {
	childContextTypes: !0,
	contextType: !0,
	contextTypes: !0,
	defaultProps: !0,
	displayName: !0,
	getDefaultProps: !0,
	getDerivedStateFromError: !0,
	getDerivedStateFromProps: !0,
	mixins: !0,
	propTypes: !0,
	type: !0
}, H = {
	name: !0,
	length: !0,
	prototype: !0,
	caller: !0,
	callee: !0,
	arguments: !0,
	arity: !0
}, U = {
	$$typeof: !0,
	compare: !0,
	defaultProps: !0,
	displayName: !0,
	propTypes: !0,
	type: !0
}, J = ((V = {})[W] = {
	$$typeof: !0,
	render: !0,
	defaultProps: !0,
	displayName: !0,
	propTypes: !0
}, V[Y] = U, V);
function X(e) {
	return ("type" in (t = e) && t.type.$$typeof) === Y ? U : "$$typeof" in e ? J[e.$$typeof] : q;
	var t;
}
var Z = Object.defineProperty, K = Object.getOwnPropertyNames, Q = Object.getOwnPropertySymbols, ee = Object.getOwnPropertyDescriptor, te = Object.getPrototypeOf, ne = Object.prototype;
function oe(e, t, n) {
	if ("string" != typeof t) {
		if (ne) {
			var o = te(t);
			o && o !== ne && oe(e, o, n);
		}
		var r = K(t);
		Q && (r = r.concat(Q(t)));
		for (var s = X(e), i = X(t), a = 0; a < r.length; ++a) {
			var c = r[a];
			if (!(c in H || n && n[c] || i && c in i || s && c in s)) {
				var l = ee(t, c);
				try {
					Z(e, c, l);
				} catch (e$1) {}
			}
		}
	}
	return e;
}
function re(e) {
	return "function" == typeof e;
}
function se(e) {
	return "object" == _typeof(e) && "styledComponentId" in e;
}
function ie(e, t) {
	return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function ae(e, t) {
	if (0 === e.length) return "";
	for (var n = e[0], o = 1; o < e.length; o++) n += t ? t + e[o] : e[o];
	return n;
}
function ce(e) {
	return null !== e && "object" == _typeof(e) && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function le(e, t, n) {
	if (void 0 === n && (n = !1), !n && !ce(e) && !Array.isArray(e)) return t;
	if (Array.isArray(t)) for (var o = 0; o < t.length; o++) e[o] = le(e[o], t[o]);
	else if (ce(t)) for (var o in t) e[o] = le(e[o], t[o]);
	return e;
}
function ue(e, t) {
	Object.defineProperty(e, "toString", { value: t });
}
var pe = {
	1: "Cannot create styled-component for component: %s.\n\n",
	2: "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
	3: "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
	4: "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
	5: "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
	6: "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
	7: "ThemeProvider: Please return an object from your \"theme\" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n",
	8: "ThemeProvider: Please make your \"theme\" prop an object.\n\n",
	9: "Missing document `<head>`\n\n",
	10: "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
	11: "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
	12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",
	13: "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",
	14: "ThemeProvider: \"theme\" prop is required.\n\n",
	15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",
	16: "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",
	17: "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n",
	18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`"
};
function de() {
	for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
	for (var n = e[0], o = [], r = 1, s = e.length; r < s; r += 1) o.push(e[r]);
	return o.forEach(function(e$1) {
		n = n.replace(/%[a-z]/, e$1);
	}), n;
}
function he(t) {
	for (var n = [], o = 1; o < arguments.length; o++) n[o - 1] = arguments[o];
	return new Error(de.apply(void 0, __spreadArray([pe[t]], n, !1)).trim());
}
var fe = function() {
	function e(e$1) {
		this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e$1;
	}
	return e.prototype.indexOfGroup = function(e$1) {
		for (var t = 0, n = 0; n < e$1; n++) t += this.groupSizes[n];
		return t;
	}, e.prototype.insertRules = function(e$1, t) {
		if (e$1 >= this.groupSizes.length) {
			for (var n = this.groupSizes, o = n.length, r = o; e$1 >= r;) if ((r <<= 1) < 0) throw he(16, "".concat(e$1));
			this.groupSizes = new Uint32Array(r), this.groupSizes.set(n), this.length = r;
			for (var s = o; s < r; s++) this.groupSizes[s] = 0;
		}
		for (var i = this.indexOfGroup(e$1 + 1), a = (s = 0, t.length); s < a; s++) this.tag.insertRule(i, t[s]) && (this.groupSizes[e$1]++, i++);
	}, e.prototype.clearGroup = function(e$1) {
		if (e$1 < this.length) {
			var t = this.groupSizes[e$1], n = this.indexOfGroup(e$1), o = n + t;
			this.groupSizes[e$1] = 0;
			for (var r = n; r < o; r++) this.tag.deleteRule(n);
		}
	}, e.prototype.getGroup = function(e$1) {
		var t = "";
		if (e$1 >= this.length || 0 === this.groupSizes[e$1]) return t;
		for (var n = this.groupSizes[e$1], o = this.indexOfGroup(e$1), r = o + n, s = o; s < r; s++) t += "".concat(this.tag.getRule(s)).concat(g);
		return t;
	}, e;
}(), me = 1 << 30, ye = new Map(), ve = new Map(), ge = 1, Se = function Se$1(e) {
	if (ye.has(e)) return ye.get(e);
	for (; ve.has(ge);) ge++;
	var t = ge++;
	if ((0 | t) < 0 || t > me) throw he(16, "".concat(t));
	return ye.set(e, t), ve.set(t, e), t;
}, we = function we$1(e, t) {
	ge = t + 1, ye.set(e, t), ve.set(t, e);
}, be = "style[".concat(f, "][").concat(y, "=\"").concat(v, "\"]"), Ee = new RegExp("^".concat(f, "\\.g(\\d+)\\[id=\"([\\w\\d-]+)\"\\].*?\"([^\"]*)")), Ne = function Ne$1(e, t, n) {
	for (var o, r = n.split(","), s = 0, i = r.length; s < i; s++) (o = r[s]) && e.registerName(t, o);
}, Pe = function Pe$1(e, t) {
	for (var n, o = (null !== (n = t.textContent) && void 0 !== n ? n : "").split(g), r = [], s = 0, i = o.length; s < i; s++) {
		var a = o[s].trim();
		if (a) {
			var c = a.match(Ee);
			if (c) {
				var l = 0 | parseInt(c[1], 10), u = c[2];
				0 !== l && (we(u, l), Ne(e, u, c[3]), e.getTag().insertRules(l, r)), r.length = 0;
			} else r.push(a);
		}
	}
}, _e = function _e$1(e) {
	for (var t = document.querySelectorAll(be), n = 0, o = t.length; n < o; n++) {
		var r = t[n];
		r && r.getAttribute(f) !== m && (Pe(e, r), r.parentNode && r.parentNode.removeChild(r));
	}
};
function Ce() {
	return "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : null;
}
var Ie = function Ie$1(e) {
	var t = document.head, n = e || t, o = document.createElement("style"), r = function(e$1) {
		var t$1 = Array.from(e$1.querySelectorAll("style[".concat(f, "]")));
		return t$1[t$1.length - 1];
	}(n), s = void 0 !== r ? r.nextSibling : null;
	o.setAttribute(f, m), o.setAttribute(y, v);
	var i = Ce();
	return i && o.setAttribute("nonce", i), n.insertBefore(o, s), o;
}, Ae = function() {
	function e(e$1) {
		this.element = Ie(e$1), this.element.appendChild(document.createTextNode("")), this.sheet = function(e$2) {
			if (e$2.sheet) return e$2.sheet;
			for (var t = document.styleSheets, n = 0, o = t.length; n < o; n++) {
				var r = t[n];
				if (r.ownerNode === e$2) return r;
			}
			throw he(17);
		}(this.element), this.length = 0;
	}
	return e.prototype.insertRule = function(e$1, t) {
		try {
			return this.sheet.insertRule(t, e$1), this.length++, !0;
		} catch (e$2) {
			return !1;
		}
	}, e.prototype.deleteRule = function(e$1) {
		this.sheet.deleteRule(e$1), this.length--;
	}, e.prototype.getRule = function(e$1) {
		var t = this.sheet.cssRules[e$1];
		return t && t.cssText ? t.cssText : "";
	}, e;
}(), Oe = function() {
	function e(e$1) {
		this.element = Ie(e$1), this.nodes = this.element.childNodes, this.length = 0;
	}
	return e.prototype.insertRule = function(e$1, t) {
		if (e$1 <= this.length && e$1 >= 0) {
			var n = document.createTextNode(t);
			return this.element.insertBefore(n, this.nodes[e$1] || null), this.length++, !0;
		}
		return !1;
	}, e.prototype.deleteRule = function(e$1) {
		this.element.removeChild(this.nodes[e$1]), this.length--;
	}, e.prototype.getRule = function(e$1) {
		return e$1 < this.length ? this.nodes[e$1].textContent : "";
	}, e;
}(), De = function() {
	function e(e$1) {
		this.rules = [], this.length = 0;
	}
	return e.prototype.insertRule = function(e$1, t) {
		return e$1 <= this.length && (this.rules.splice(e$1, 0, t), this.length++, !0);
	}, e.prototype.deleteRule = function(e$1) {
		this.rules.splice(e$1, 1), this.length--;
	}, e.prototype.getRule = function(e$1) {
		return e$1 < this.length ? this.rules[e$1] : "";
	}, e;
}(), Re = S, Te = {
	isServer: !S,
	useCSSOMInjection: !w
}, ke = function() {
	function e(e$1, n, o) {
		void 0 === e$1 && (e$1 = C), void 0 === n && (n = {});
		var r = this;
		this.options = _assign(_assign({}, Te), e$1), this.gs = n, this.names = new Map(o), this.server = !!e$1.isServer, !this.server && S && Re && (Re = !1, _e(this)), ue(this, function() {
			return function(e$2) {
				for (var t = e$2.getTag(), n$1 = t.length, o$1 = "", r$1 = function r$2(n$2) {
					var r$2 = function(e$3) {
						return ve.get(e$3);
					}(n$2);
					if (void 0 === r$2) return "continue";
					var s$1 = e$2.names.get(r$2), i = t.getGroup(n$2);
					if (void 0 === s$1 || !s$1.size || 0 === i.length) return "continue";
					var a = "".concat(f, ".g").concat(n$2, "[id=\"").concat(r$2, "\"]"), c = "";
					void 0 !== s$1 && s$1.forEach(function(e$3) {
						e$3.length > 0 && (c += "".concat(e$3, ","));
					}), o$1 += "".concat(i).concat(a, "{content:\"").concat(c, "\"}").concat(g);
				}, s = 0; s < n$1; s++) r$1(s);
				return o$1;
			}(r);
		});
	}
	return e.registerId = function(e$1) {
		return Se(e$1);
	}, e.prototype.rehydrate = function() {
		!this.server && S && _e(this);
	}, e.prototype.reconstructWithOptions = function(n, o) {
		return void 0 === o && (o = !0), new e(_assign(_assign({}, this.options), n), this.gs, o && this.names || void 0);
	}, e.prototype.allocateGSInstance = function(e$1) {
		return this.gs[e$1] = (this.gs[e$1] || 0) + 1;
	}, e.prototype.getTag = function() {
		return this.tag || (this.tag = (e$1 = function(e$2) {
			var t = e$2.useCSSOMInjection, n = e$2.target;
			return e$2.isServer ? new De(n) : t ? new Ae(n) : new Oe(n);
		}(this.options), new fe(e$1)));
		var e$1;
	}, e.prototype.hasNameForId = function(e$1, t) {
		return this.names.has(e$1) && this.names.get(e$1).has(t);
	}, e.prototype.registerName = function(e$1, t) {
		if (Se(e$1), this.names.has(e$1)) this.names.get(e$1).add(t);
		else {
			var n = new Set();
			n.add(t), this.names.set(e$1, n);
		}
	}, e.prototype.insertRules = function(e$1, t, n) {
		this.registerName(e$1, t), this.getTag().insertRules(Se(e$1), n);
	}, e.prototype.clearNames = function(e$1) {
		this.names.has(e$1) && this.names.get(e$1).clear();
	}, e.prototype.clearRules = function(e$1) {
		this.getTag().clearGroup(Se(e$1)), this.clearNames(e$1);
	}, e.prototype.clearTag = function() {
		this.tag = void 0;
	}, e;
}(), je = /&/g, xe = /^\s*\/\/.*$/gm;
function Ve(e, t) {
	return e.map(function(e$1) {
		return "rule" === e$1.type && (e$1.value = "".concat(t, " ").concat(e$1.value), e$1.value = e$1.value.replaceAll(",", ",".concat(t, " ")), e$1.props = e$1.props.map(function(e$2) {
			return "".concat(t, " ").concat(e$2);
		})), Array.isArray(e$1.children) && "@keyframes" !== e$1.type && (e$1.children = Ve(e$1.children, t)), e$1;
	});
}
function Fe(e) {
	var t, n, o, r = void 0 === e ? C : e, s = r.options, i = void 0 === s ? C : s, a = r.plugins, c = void 0 === a ? _ : a, l = function l$1(e$1, o$1, r$1) {
		return r$1.startsWith(n) && r$1.endsWith(n) && r$1.replaceAll(n, "").length > 0 ? ".".concat(t) : e$1;
	}, u = c.slice();
	u.push(function(e$1) {
		e$1.type === RULESET && e$1.value.includes("&") && (e$1.props[0] = e$1.props[0].replace(je, n).replace(o, l));
	}), i.prefix && u.push(prefixer), u.push(stringify);
	var p = function p$1(e$1, r$1, s$1, a$1) {
		void 0 === r$1 && (r$1 = ""), void 0 === s$1 && (s$1 = ""), void 0 === a$1 && (a$1 = "&"), t = a$1, n = r$1, o = new RegExp("\\".concat(n, "\\b"), "g");
		var c$1 = e$1.replace(xe, ""), l$1 = compile(s$1 || r$1 ? "".concat(s$1, " ").concat(r$1, " { ").concat(c$1, " }") : c$1);
		i.namespace && (l$1 = Ve(l$1, i.namespace));
		var p$1 = [];
		return serialize(l$1, middleware(u.concat(rulesheet(function(e$2) {
			return p$1.push(e$2);
		})))), p$1;
	};
	return p.hash = c.length ? c.reduce(function(e$1, t$1) {
		return t$1.name || he(15), M(e$1, t$1.name);
	}, F).toString() : "", p;
}
var Me = new ke(), ze = Fe(), $e = /* @__PURE__ */ React.createContext({
	shouldForwardProp: void 0,
	styleSheet: Me,
	stylis: ze
}), Be = $e.Consumer, Le = /* @__PURE__ */ React.createContext(void 0);
function Ge() {
	return useContext($e);
}
function Ye(e) {
	var t = useState(e.stylisPlugins), n = t[0], r = t[1], c = Ge().styleSheet, l = useMemo(function() {
		var t$1 = c;
		return e.sheet ? t$1 = e.sheet : e.target && (t$1 = t$1.reconstructWithOptions({ target: e.target }, !1)), e.disableCSSOMInjection && (t$1 = t$1.reconstructWithOptions({ useCSSOMInjection: !1 })), t$1;
	}, [
		e.disableCSSOMInjection,
		e.sheet,
		e.target,
		c
	]), u = useMemo(function() {
		return Fe({
			options: {
				namespace: e.namespace,
				prefix: e.enableVendorPrefixes
			},
			plugins: n
		});
	}, [
		e.enableVendorPrefixes,
		e.namespace,
		n
	]);
	useEffect(function() {
		(0, import_shallowequal.default)(n, e.stylisPlugins) || r(e.stylisPlugins);
	}, [e.stylisPlugins]);
	var d = useMemo(function() {
		return {
			shouldForwardProp: e.shouldForwardProp,
			styleSheet: l,
			stylis: u
		};
	}, [
		e.shouldForwardProp,
		l,
		u
	]);
	return /* @__PURE__ */ React.createElement($e.Provider, { value: d }, /* @__PURE__ */ React.createElement(Le.Provider, { value: u }, e.children));
}
var We = function() {
	function e(e$1, t) {
		var n = this;
		this.inject = function(e$2, t$1) {
			void 0 === t$1 && (t$1 = ze);
			var o = n.name + t$1.hash;
			e$2.hasNameForId(n.id, o) || e$2.insertRules(n.id, o, t$1(n.rules, o, "@keyframes"));
		}, this.name = e$1, this.id = "sc-keyframes-".concat(e$1), this.rules = t, ue(this, function() {
			throw he(12, String(n.name));
		});
	}
	return e.prototype.getName = function(e$1) {
		return void 0 === e$1 && (e$1 = ze), this.name + e$1.hash;
	}, e;
}(), qe = function qe$1(e) {
	return e >= "A" && e <= "Z";
};
function He(e) {
	for (var t = "", n = 0; n < e.length; n++) {
		var o = e[n];
		if (1 === n && "-" === o && "-" === e[0]) return e;
		qe(o) ? t += "-" + o.toLowerCase() : t += o;
	}
	return t.startsWith("ms-") ? "-" + t : t;
}
var Ue = function Ue$1(e) {
	return null == e || !1 === e || "" === e;
}, _Je = function Je(t) {
	var n, o, r = [];
	for (var s in t) {
		var i = t[s];
		t.hasOwnProperty(s) && !Ue(i) && (Array.isArray(i) && i.isCss || re(i) ? r.push("".concat(He(s), ":"), i, ";") : ce(i) ? r.push.apply(r, __spreadArray(__spreadArray(["".concat(s, " {")], _Je(i), !1), ["}"], !1)) : r.push("".concat(He(s), ": ").concat((n = s, null == (o = i) || "boolean" == typeof o || "" === o ? "" : "number" != typeof o || 0 === o || n in import_emotion_unitless_cjs_default._default || n.startsWith("--") ? String(o).trim() : "".concat(o, "px")), ";")));
	}
	return r;
};
function Xe(e, t, n, o) {
	if (Ue(e)) return [];
	if (se(e)) return [".".concat(e.styledComponentId)];
	if (re(e)) {
		if (!re(s = e) || s.prototype && s.prototype.isReactComponent || !t) return [e];
		var r = e(t);
		return "object" != _typeof(r) || Array.isArray(r) || r instanceof We || ce(r) || null === r || console.error("".concat(B(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Xe(r, t, n, o);
	}
	var s;
	return e instanceof We ? n ? (e.inject(n, o), [e.getName(o)]) : [e] : ce(e) ? _Je(e) : Array.isArray(e) ? Array.prototype.concat.apply(_, e.map(function(e$1) {
		return Xe(e$1, t, n, o);
	})) : [e.toString()];
}
function Ze(e) {
	for (var t = 0; t < e.length; t += 1) {
		var n = e[t];
		if (re(n) && !se(n)) return !1;
	}
	return !0;
}
var Ke = z(v), Qe = function() {
	function e(e$1, t, n) {
		this.rules = e$1, this.staticRulesId = "", this.isStatic = false, this.componentId = t, this.baseHash = M(Ke, t), this.baseStyle = n, ke.registerId(t);
	}
	return e.prototype.generateAndInjectStyles = function(e$1, t, n) {
		var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e$1, t, n) : "";
		if (this.isStatic && !n.hash) if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) o = ie(o, this.staticRulesId);
		else {
			var r = ae(Xe(this.rules, e$1, t, n)), s = x(M(this.baseHash, r) >>> 0);
			if (!t.hasNameForId(this.componentId, s)) {
				var i = n(r, ".".concat(s), void 0, this.componentId);
				t.insertRules(this.componentId, s, i);
			}
			o = ie(o, s), this.staticRulesId = s;
		}
		else {
			for (var a = M(this.baseHash, n.hash), c = "", l = 0; l < this.rules.length; l++) {
				var u = this.rules[l];
				if ("string" == typeof u) c += u, a = M(a, u);
				else if (u) {
					var p = ae(Xe(u, e$1, t, n));
					a = M(a, p + l), c += p;
				}
			}
			if (c) {
				var d = x(a >>> 0);
				t.hasNameForId(this.componentId, d) || t.insertRules(this.componentId, d, n(c, ".".concat(d), void 0, this.componentId)), o = ie(o, d);
			}
		}
		return o;
	}, e;
}(), et = /* @__PURE__ */ React.createContext(void 0), tt = et.Consumer;
var rt = {}, st = new Set();
function it(e, r, s) {
	var i = se(e), a = e, c = !L(e), p = r.attrs, d = void 0 === p ? _ : p, h = r.componentId, f$1 = void 0 === h ? function(e$1, t) {
		var n = "string" != typeof e$1 ? "sc" : R(e$1);
		rt[n] = (rt[n] || 0) + 1;
		var o = "".concat(n, "-").concat($(v + n + rt[n]));
		return t ? "".concat(t, "-").concat(o) : o;
	}(r.displayName, r.parentComponentId) : h, m$1 = r.displayName, y$1 = void 0 === m$1 ? function(e$1) {
		return L(e$1) ? "styled.".concat(e$1) : "Styled(".concat(B(e$1), ")");
	}(e) : m$1, g$1 = r.displayName && r.componentId ? "".concat(R(r.displayName), "-").concat(r.componentId) : r.componentId || f$1, S$1 = i && a.attrs ? a.attrs.concat(d).filter(Boolean) : d, w$1 = r.shouldForwardProp;
	if (i && a.shouldForwardProp) {
		var b$1 = a.shouldForwardProp;
		if (r.shouldForwardProp) {
			var E$1 = r.shouldForwardProp;
			w$1 = function w$2(e$1, t) {
				return b$1(e$1, t) && E$1(e$1, t);
			};
		} else w$1 = b$1;
	}
	var N$1 = new Qe(s, g$1, i ? a.componentStyle : void 0);
	function O$1(e$1, r$1) {
		return function(e$2, r$2, s$1) {
			var i$1 = e$2.attrs, a$1 = e$2.componentStyle, c$1 = e$2.defaultProps, p$1 = e$2.foldedComponentIds, d$1 = e$2.styledComponentId, h$1 = e$2.target, f$2 = React.useContext(et), m$2 = Ge(), y$2 = e$2.shouldForwardProp || m$2.shouldForwardProp;
			useDebugValue(d$1);
			var v$1 = I(r$2, f$2, c$1) || C, g$2 = function(e$3, n, o) {
				for (var r$3, s$2 = _assign(_assign({}, n), {
					className: void 0,
					theme: o
				}), i$2 = 0; i$2 < e$3.length; i$2 += 1) {
					var a$2 = re(r$3 = e$3[i$2]) ? r$3(s$2) : r$3;
					for (var c$2 in a$2) s$2[c$2] = "className" === c$2 ? ie(s$2[c$2], a$2[c$2]) : "style" === c$2 ? _assign(_assign({}, s$2[c$2]), a$2[c$2]) : a$2[c$2];
				}
				return n.className && (s$2.className = ie(s$2.className, n.className)), s$2;
			}(i$1, r$2, v$1), S$2 = g$2.as || h$1, w$2 = {};
			for (var b$2 in g$2) void 0 === g$2[b$2] || "$" === b$2[0] || "as" === b$2 || "theme" === b$2 && g$2.theme === v$1 || ("forwardedAs" === b$2 ? w$2.as = g$2.forwardedAs : y$2 && !y$2(b$2, S$2) || (w$2[b$2] = g$2[b$2], y$2 || (0, import_emotion_is_prop_valid_cjs_default._default)(b$2) || st.has(b$2) || !A.has(S$2) || (st.add(b$2), console.warn("styled-components: it looks like an unknown prop \"".concat(b$2, "\" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)")))));
			var E$2 = function(e$3, t) {
				var n = Ge(), o = e$3.generateAndInjectStyles(t, n.styleSheet, n.stylis);
				return useDebugValue(o), o;
			}(a$1, g$2);
			e$2.warnTooManyClasses && e$2.warnTooManyClasses(E$2);
			var N$2 = ie(p$1, d$1);
			return E$2 && (N$2 += " " + E$2), g$2.className && (N$2 += " " + g$2.className), w$2[L(S$2) && !A.has(S$2) ? "class" : "className"] = N$2, s$1 && (w$2.ref = s$1), /* @__PURE__ */ createElement(S$2, w$2);
		}(D$1, e$1, r$1);
	}
	O$1.displayName = y$1;
	var D$1 = /* @__PURE__ */ React.forwardRef(O$1);
	return D$1.attrs = S$1, D$1.componentStyle = N$1, D$1.displayName = y$1, D$1.shouldForwardProp = w$1, D$1.foldedComponentIds = i ? ie(a.foldedComponentIds, a.styledComponentId) : "", D$1.styledComponentId = g$1, D$1.target = i ? a.target : e, Object.defineProperty(D$1, "defaultProps", {
		get: function get() {
			return this._foldedDefaultProps;
		},
		set: function set(e$1) {
			this._foldedDefaultProps = i ? function(e$2) {
				for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
				for (var o = 0, r$1 = t; o < r$1.length; o++) le(e$2, r$1[o], !0);
				return e$2;
			}({}, a.defaultProps, e$1) : e$1;
		}
	}), P(y$1, g$1), D$1.warnTooManyClasses = function(e$1, t) {
		var n = {}, o = !1;
		return function(r$1) {
			if (!o && (n[r$1] = !0, Object.keys(n).length >= 200)) {
				var s$1 = t ? " with the id of \"".concat(t, "\"") : "";
				console.warn("Over ".concat(200, " classes were generated for component ").concat(e$1).concat(s$1, ".\n") + "Consider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"), o = !0, n = {};
			}
		};
	}(y$1, g$1), ue(D$1, function() {
		return ".".concat(D$1.styledComponentId);
	}), c && oe(D$1, e, {
		attrs: !0,
		componentStyle: !0,
		displayName: !0,
		foldedComponentIds: !0,
		shouldForwardProp: !0,
		styledComponentId: !0,
		target: !0
	}), D$1;
}
function at(e, t) {
	for (var n = [e[0]], o = 0, r = t.length; o < r; o += 1) n.push(t[o], e[o + 1]);
	return n;
}
var ct = function ct$1(e) {
	return Object.assign(e, { isCss: !0 });
};
function lt(t) {
	for (var n = [], o = 1; o < arguments.length; o++) n[o - 1] = arguments[o];
	if (re(t) || ce(t)) return ct(Xe(at(_, __spreadArray([t], n, !0))));
	var r = t;
	return 0 === n.length && 1 === r.length && "string" == typeof r[0] ? Xe(r) : ct(Xe(at(r, n)));
}
function ut(n, o, r) {
	if (void 0 === r && (r = C), !o) throw he(1, o);
	var s = function s$1(t) {
		for (var s$1 = [], i = 1; i < arguments.length; i++) s$1[i - 1] = arguments[i];
		return n(o, r, lt.apply(void 0, __spreadArray([t], s$1, !1)));
	};
	return s.attrs = function(e) {
		return ut(n, o, _assign(_assign({}, r), { attrs: Array.prototype.concat(r.attrs, e).filter(Boolean) }));
	}, s.withConfig = function(e) {
		return ut(n, o, _assign(_assign({}, r), e));
	}, s;
}
var pt = function pt$1(e) {
	return ut(it, e);
}, dt = pt;
A.forEach(function(e) {
	dt[e] = pt(e);
});
var ht = function() {
	function e(e$1, t) {
		this.rules = e$1, this.componentId = t, this.isStatic = Ze(e$1), ke.registerId(this.componentId + 1);
	}
	return e.prototype.createStyles = function(e$1, t, n, o) {
		var r = o(ae(Xe(this.rules, t, n, o)), ""), s = this.componentId + e$1;
		n.insertRules(s, s, r);
	}, e.prototype.removeStyles = function(e$1, t) {
		t.clearRules(this.componentId + e$1);
	}, e.prototype.renderStyles = function(e$1, t, n, o) {
		e$1 > 2 && ke.registerId(this.componentId + e$1), this.removeStyles(e$1, n), this.createStyles(e$1, t, n, o);
	}, e;
}();
var vt = function() {
	function e() {
		var e$1 = this;
		this._emitSheetCSS = function() {
			var t = e$1.instance.toString();
			if (!t) return "";
			var n = Ce(), o = ae([
				n && "nonce=\"".concat(n, "\""),
				"".concat(f, "=\"true\""),
				"".concat(y, "=\"").concat(v, "\"")
			].filter(Boolean), " ");
			return "<style ".concat(o, ">").concat(t, "</style>");
		}, this.getStyleTags = function() {
			if (e$1.sealed) throw he(2);
			return e$1._emitSheetCSS();
		}, this.getStyleElement = function() {
			var n;
			if (e$1.sealed) throw he(2);
			var r = e$1.instance.toString();
			if (!r) return [];
			var s = ((n = {})[f] = "", n[y] = v, n.dangerouslySetInnerHTML = { __html: r }, n), i = Ce();
			return i && (s.nonce = i), [/* @__PURE__ */ React.createElement("style", _assign({}, s, { key: "sc-0-0" }))];
		}, this.seal = function() {
			e$1.sealed = !0;
		}, this.instance = new ke({ isServer: !0 }), this.sealed = !1;
	}
	return e.prototype.collectStyles = function(e$1) {
		if (this.sealed) throw he(2);
		return /* @__PURE__ */ React.createElement(Ye, { sheet: this.instance }, e$1);
	}, e.prototype.interleaveWithNodeStream = function(e$1) {
		throw he(3);
	}, e;
}(), gt = {
	StyleSheet: ke,
	mainSheet: Me
};
"undefined" != typeof navigator && "ReactNative" === navigator.product && console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native");
var St = "__sc-".concat(f, "__");
"undefined" != typeof window && (window[St] || (window[St] = 0), 1 === window[St] && console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."), window[St] += 1);

//#endregion
//#region src/elements/Button/index.js
init___rollupPluginBabelHelpers();
var _excluded = ["children"];
var _templateObject;
var ButtonWrap = dt.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n"])));
function Button(props) {
	var children = props.children, rest = _objectWithoutProperties(props, _excluded);
	return /* @__PURE__ */ React.createElement(ButtonWrap, rest, children);
}
var Button_default = Button;

//#endregion
export { Button_default as Button };