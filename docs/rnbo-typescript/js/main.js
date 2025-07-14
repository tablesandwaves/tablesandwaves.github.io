var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/@rnbo/js/dist/rnbo.webaudio.js
var require_rnbo_webaudio = __commonJS({
  "node_modules/@rnbo/js/dist/rnbo.webaudio.js"(exports, module) {
    var root;
    var factory;
    root = exports, factory = function() {
      return (() => {
        var __webpack_modules__ = { 133: (module, __unused_webpack_exports, __webpack_require__) => {
          var Float32Buffer = __webpack_require__(852).Float32Buffer, Float64Buffer = __webpack_require__(852).Float64Buffer, Float32MultiBuffer = __webpack_require__(852).Float32MultiBuffer, Float64MultiBuffer = __webpack_require__(852).Float64MultiBuffer, IntBuffer = __webpack_require__(852).IntBuffer, UInt8Buffer = __webpack_require__(852).UInt8Buffer, SampleBuffer = __webpack_require__(852).SampleBuffer, ExternalLoaderFactory = __webpack_require__(126).ExternalLoaderFactory;
          let Xoshiro = __webpack_require__(925);
          var patcherSerialKey = "XX__PatcherSerialKey__XX", eventTargetKey = "XX__EventTargetKey__XX", ParameterTypeNumber = 0, ParameterTypeBang = 1, ParameterTypeList = 2, ParameterTypeSignal = 3, ParameterTypeCount = 4, IOTypeInput = 0, IOTypeOutput = 1, IOTypeUndefined = 2, INVALID_INDEX = Number.MAX_SAFE_INTEGER;
          function globalrandom() {
            return Math.random();
          }
          function pi01() {
            return Math.PI;
          }
          var rnbo_abs = Math.abs, rnbo_fabs = Math.abs, rnbo_acos = Math.acos, rnbo_acosh = Math.acosh, rnbo_asin = Math.asin, rnbo_asinh = Math.asinh, rnbo_atan = Math.atan, rnbo_atan2 = Math.atan2, rnbo_atanh = Math.atanh, rnbo_cbrt = Math.cbrt, rnbo_ceil = Math.ceil, rnbo_cos = Math.cos, rnbo_cosh = Math.cosh, rnbo_exp = Math.exp, rnbo_expm1 = Math.expm1, rnbo_floor = Math.floor, rnbo_fround = Math.round, rnbo_imul = Math.imul, rnbo_log = Math.log, rnbo_log10 = Math.log10, rnbo_log1p = Math.log1p, rnbo_log2 = Math.log2, rnbo_pow = Math.pow, rnbo_round = rnbo_fround, rnbo_sign = Math.sign, rnbo_sin = Math.sin, rnbo_sinh = Math.sinh, rnbo_sqrt = Math.sqrt, rnbo_tan = Math.tan, rnbo_tanh = Math.tanh, trunc = Math.trunc, rnbo_trunc = Math.trunc, rnbo_number_max = () => Math.MAX_VALUE, rnbo_isnan = isNaN;
          function fixnan(t) {
            return isNaN(t) ? 0 : t;
          }
          function fract(t) {
            return t % 1;
          }
          function fixdenorm(t) {
            return t;
          }
          function isdenorm(t) {
            return false;
          }
          var fastsin = Math.sin, fastcos = Math.cos, fastexp = Math.exp, fastpow = Math.pow, fasttan = Math.tan;
          function nextpoweroftwo(t) {
            return 0 === t ? 1 : (t--, t |= t >> 1, t |= t >> 2, t |= t >> 4, t |= t >> 8, 1 + (t |= t >> 16));
          }
          var MAX_32BIT_INT = Math.pow(2, 32);
          function uint32_add(t, e) {
            var r = t + e;
            return r >= MAX_32BIT_INT && (r -= MAX_32BIT_INT), Math.trunc(r);
          }
          function uint32_trunc(t) {
            return t >>> 0;
          }
          function uint32_rshift(t, e) {
            return t >>> e;
          }
          function imod(t, e) {
            return (0 | t) % (0 | e);
          }
          function imod_nocast(t, e) {
            return t % e;
          }
          function getArrayValueAtIndex(t, e) {
            return t[e];
          }
          function allocateArray(t, e) {
            return new Array(t);
          }
          function createListCopy(t) {
            return t.slice(0);
          }
          function jsCreateListCopy(t) {
            return createListCopy(t);
          }
          function list() {
            let t = [];
            for (let e = 0; e < arguments.length; e++) {
              let r = arguments[e];
              if (Array.isArray(r)) for (let e2 = 0; e2 < r.length; e2++) t.push(r[e2]);
              else t.push(r);
            }
            return t;
          }
          function resizeSignal(t, e, r) {
            for (var n = t || [], i = e; i < r; i++) n[i] = 0;
            return n;
          }
          function freeSignal(t) {
            return null;
          }
          function zeroSignal(t, e) {
            t && t.fill(0);
          }
          function fillSignal(t, e, r, n) {
            t && t.fill(r, n);
          }
          function copySignal(t, e, r) {
            for (let n = 0; n < r; n++) t[n] = e[n];
          }
          function containsValue(t) {
            return void 0 !== t;
          }
          function addressOf(t) {
            return t;
          }
          function systemticks() {
            return Date.now();
          }
          function bitwiseFloat(t) {
            var e = new Uint32Array(1);
            return e[0] = t, new DataView(e.buffer).getFloat32(0, true);
          }
          function imul(t, e) {
            return Math.imul(t, e);
          }
          var MIDI_StatusByteReceived = 1, MIDI_SecondByteReceived = 2, MIDI_NoteOff = 3, MIDI_NoteOn = 4, MIDI_Aftertouch = 5, MIDI_CC = 6, MIDI_ProgramChange = 7, MIDI_ChannelPressure = 8, MIDI_PitchBend = 9, MIDI_Sysex_Started = 10, MIDI_Sysex_Complete = 11, MIDI_Generic = 99, MIDI_InvalidByte = -1, MIDI_NoteOffMask = 128, MIDI_NoteOnMask = 144, MIDI_AfterTouchMask = 160, MIDI_CCMask = 176, MIDI_ProgramChangeMask = 192, MIDI_ChannelPressureMask = 208, MIDI_PitchBendMask = 224, MIDI_QuarterFrame = 241, MIDI_SongPos = 242, MIDI_SongSel = 243, MIDI_TuneRequest = 246, MIDI_SysexStart = 240, MIDI_SysexEnd = 247, MIDI_Clock = 248, MIDI_Start = 250, MIDI_Continue = 251, MIDI_Stop = 252, MIDI_ActiveSense = 254, MIDI_Reset = 255, MIDI_CC_Sustain = 64, MIDI_CC_Sostenuto = 66, MIDI_CC_AllNotesOff = 123, MIDI_CC_PressureMSB = 70, MIDI_CC_PressureLSB = 102, MIDI_CC_TimbreMSB = 74, MIDI_CC_TimbreLSB = 106, MIDI_NoteState_Off = 0, MIDI_NoteState_On = 1, MIDI_NoteState_Sustained = 2, CLOCKS_PER_SEC = 1;
          function parseMidi(t, e, r) {
            if (240 == e) return MIDI_Sysex_Started;
            if (t == MIDI_Sysex_Started) return 247 == e ? MIDI_Sysex_Complete : e <= 127 ? t : MIDI_InvalidByte;
            if (e > 127) return MIDI_StatusByteReceived;
            var n = 240 & r;
            return t == MIDI_StatusByteReceived ? n == MIDI_ProgramChangeMask ? MIDI_ProgramChange : n == MIDI_ChannelPressureMask ? MIDI_ChannelPressure : MIDI_SecondByteReceived : t == MIDI_SecondByteReceived ? n == MIDI_NoteOffMask || n == MIDI_NoteOnMask && 0 == e ? MIDI_NoteOff : n == MIDI_NoteOnMask ? MIDI_NoteOn : n == MIDI_AfterTouchMask ? MIDI_Aftertouch : n == MIDI_CCMask ? MIDI_CC : n == MIDI_PitchBendMask ? MIDI_PitchBend : MIDI_Generic : t;
          }
          function getMIDIChannel(t) {
            var e = 240 & t;
            return e >= 128 && e <= 224 ? 15 & t : 0;
          }
          function initDataRef(t, e, r) {
            return (t = {}).name = e, t.isValid = false, t.wantsFillFlag = false, t.bytesToAllocate = 0, t.channels = 0, t.sampleRate = 0, t.internal = r, t.index = -1, t.wantsFill = function() {
              return this.wantsFillFlag;
            }, t.setWantsFill = function(t2) {
              this.wantsFillFlag = t2;
            }, t.requestSizeInBytes = function(t2, e2) {
              (t2 > this.bytesToAllocate || e2) && (this.bytesToAllocate = t2);
            }, t.getRequestedSizeInBytes = function() {
              return this.bytesToAllocate;
            }, t.resetRequestedSizeInByte = function() {
              this.bytesToAllocate = 0;
            }, t.getSizeInBytes = function() {
              return this.arrayBuffer.byteLength;
            }, t.hasRequestedSize = function() {
              return this.bytesToAllocate > 0;
            }, t.isInternal = function() {
              return this.internal;
            }, t.getIndex = function() {
              return this.index;
            }, t.setIndex = function(t2) {
              this.index = t2;
            }, t.getCurrentIndex = function() {
              return 0;
            }, t.clear = function() {
              t.arrayBuffer = new ArrayBuffer(0);
            }, t.clear(), t;
          }
          function initMultiRef() {
            var t = { index: 0, current: 0, dataRefs: [], count: 0 };
            for (let e = 0; e < arguments.length; e++) t.dataRefs.push(arguments[e]), t.count++;
            return t.setCurrent = function(t2) {
              t2 >= 0 && t2 < this.count && (this.current = t2);
            }, t.getCurrentIndex = function() {
              return this.current;
            }, t.getIndex = function() {
              return this.index;
            }, t.setIndex = function(t2) {
              this.index = t2;
            }, t;
          }
          function updateMultiRef(t, e, r) {
            e.setCurrent && e.getIndex && (e.setCurrent(r), t.getEngine().sendDataRefUpdated(e.getIndex()));
          }
          function updateDataRef(t, e) {
            t.getEngine().sendDataRefUpdated(e.getIndex());
          }
          function reInitDataView(t, e) {
            return new t.reinitConstructor(e);
          }
          function FIXEDSIZEARRAYINIT() {
            let t = arguments[0];
            if (void 0 !== t) {
              let e = new Array(t);
              if (e.fill(0), void 0 !== arguments[1]) {
                let r = Array.from(arguments);
                r.splice(0, 1);
                for (let n = 0; n < t; n++) e[n] = FIXEDSIZEARRAYINIT.apply(null, r);
              }
              return e;
            }
            return new Array();
          }
          function TAG(t) {
            let e = 0;
            for (let r = 0; r < t.length; r++) e = t.charCodeAt(r) + (e << 6) + (e << 16) - e;
            return 0 | e;
          }
          function serializeArrayToList(t, e) {
            return t;
          }
          function deserializeArrayFromList(t, e, r) {
          }
          function serializeDataRef(t) {
            return t.resetRequestedSizeInByte(), t;
          }
          function serializeBuffer(t) {
            return { data: t.arrayBuffer.slice(0), channels: t.channels, sampleRate: t.sampleRate };
          }
          function deserializeBuffer(t, e, r) {
            e.arrayBuffer = r.data.slice(0), t.getEngine().sendDataRefUpdated(e.getIndex());
          }
          function RNBO_ASSERT() {
          }
          function _evalSrc(src) {
            var rnboObj;
            return eval(src), rnboObj;
          }
          function getSubState(t, e) {
            return void 0 === t[e] && (t[e] = {}), t[e];
          }
          function getSubStateAt(t, e, r) {
            return void 0 === t[e] && (t[e] = []), void 0 === t[e][r] && (t[e][r] = {}), t[e][r];
          }
          function stateIsEmpty(t) {
            return 0 === Object.keys(t).length;
          }
          function TransportState(t) {
            return t;
          }
          function listWithSize(t) {
            return new Array(t);
          }
          let intlistWithSize = listWithSize, indexlistWithSize = listWithSize;
          function RNBO_UNUSED() {
          }
          function ENGINE() {
          }
          function EXTERNALENGINE() {
          }
          function INTERNALENGINE() {
          }
          let xoshiro_reset = Xoshiro.reset, xoshiro_next = Xoshiro.next;
          module.exports = { deserializeSrc: function(t) {
            return _evalSrc(t);
          }, deserializeJSON: function(t) {
            var e = t;
            return "string" == typeof e && (e = { src: t }), _evalSrc(e.src);
          }, extractOptionsFromJSON: function(t) {
            var e = t;
            return "string" == typeof e && (e = JSON.parse(t)), e.options ? e.options : {};
          }, evalFunction(functionAsString) {
            var tmpFunction, functionAsString = "tmpFunction = " + functionAsString;
            return eval(functionAsString), tmpFunction;
          }, nextpoweroftwo, ParameterTypeNumber, ParameterTypeBang, ParameterTypeList, ParameterTypeSignal, ParameterTypeCount, IOTypeInput, IOTypeOutput, IOTypeUndefined: IOTypeUndefined.length, TAG };
        }, 852: (t) => {
          function e() {
            let t2 = this.dataRef.getSizeInBytes() / this.BASEARRAYVIEW.BYTES_PER_ELEMENT, e2 = this.getChannels();
            return e2 ? t2 / e2 : 0;
          }
          function r(t2, e2) {
            let r2 = t2 * this.BASEARRAYVIEW.BYTES_PER_ELEMENT * e2;
            this.requestedChannels = e2, this.dataRef.requestSizeInBytes(r2, false);
          }
          function n(t2, e2) {
            return this[this.getChannels() * Math.floor(e2) + t2];
          }
          function i(t2, e2) {
            const r2 = this.getChannels();
            return t2 < 0 || t2 >= r2 || e2 < 0 || e2 >= this.getSize() ? 0 : this[r2 * Math.floor(e2) + t2];
          }
          function s(t2, e2, r2) {
            this[this.getChannels() * Math.floor(e2) + t2] = r2;
          }
          function a(t2, e2, r2) {
            const n2 = this.getChannels();
            t2 < 0 || t2 >= n2 || e2 < 0 || e2 >= this.getSize() || (this[n2 * Math.floor(e2) + t2] = r2);
          }
          function o() {
            return this.dataRef.channels;
          }
          function u() {
            return this.dataRef.sampleRate;
          }
          function h(t2) {
            this.dataRef.sampleRate = t2;
          }
          function f() {
            this.dataRef.clear();
          }
          function c(t2) {
            if (t2 !== this.dataRef.channels) {
              let e2 = this.getSize();
              return this.clear(), this.dataRef.channels = t2, this.setSize(e2);
            }
            return this;
          }
          function l() {
            if (this.isAudioBuffer && this.requestedChannels !== this.getChannels() && 0 !== this.requestedChannels && (this.getChannels() > 0 && this.setZero(), this.dataRef.channels = this.requestedChannels, this.requestedChannels = 0), this.dataRef.bytesToAllocate > 0 && (this.dataRef.bytesToAllocate !== this.dataRef.getSizeInBytes() || !this.dataRef.isInternallyAllocated)) {
              let t2;
              if (this.dataRef.isInternallyAllocated) {
                let e3 = Math.min(this.dataRef.arrayBuffer.byteLength, this.dataRef.bytesToAllocate);
                e3 /= this.BASEARRAYVIEW.BYTES_PER_ELEMENT, t2 = new this.BASEARRAYVIEW(this.dataRef.arrayBuffer, 0, e3);
              }
              this.dataRef.arrayBuffer = new ArrayBuffer(this.dataRef.bytesToAllocate), this.dataRef.isInternallyAllocated = true;
              let e2 = new this.BASEARRAYVIEW(this.dataRef.arrayBuffer);
              return t2 ? e2.set(t2) : this.dataRef.wantsFillFlag = true, b(e2, this.dataRef, this.BASEARRAYVIEW), this.isAudioBuffer && I(e2), e2.reinitConstructor = this.reinitConstructor, e2;
            }
            return this;
          }
          function p(t2) {
            let e2 = this.getChannels();
            return this.requestedChannels = e2, this.dataRef.requestSizeInBytes(t2 * this.BASEARRAYVIEW.BYTES_PER_ELEMENT * e2, true), this.allocateIfNeeded();
          }
          function d() {
            this.fill && this.fill(0);
          }
          function g() {
            return this.touched;
          }
          function m(t2) {
            this.touched = t2;
          }
          function _(t2) {
            this.dataRef.setWantsFill(t2);
          }
          function y() {
            return this.dataRef.getIndex();
          }
          function v() {
            return 0;
          }
          function b(t2, n2, i2) {
            t2.dataRef = n2, t2.BASEARRAYVIEW = i2, t2.getSize = e, t2.requestSize = r, t2.setSize = p, t2.allocateIfNeeded = l, t2.setZero = d, t2.clear = f, t2.getChannels = o, t2.getSampleRate = u, t2.setWantsFill = _, t2.getIndex = y, n2.setZero = function() {
              t2.setZero();
            }, t2.touched = false, t2.getTouched = g, t2.setTouched = m;
          }
          function I(t2) {
            t2.getSample = n, t2.getSampleSafe = i, t2.setSample = s, t2.setSampleSafe = a, t2.setChannels = c, t2.setSampleRate = h, t2.isAudioBuffer = true, t2.requestedChannels = 0, t2.getCurrentIndex = v;
          }
          let w = function(t2, e2) {
            let r2;
            return r2 = t2.arrayBuffer ? new e2(t2.arrayBuffer) : {}, b(r2, t2, e2), r2.reinitConstructor = this.constructor, r2;
          };
          (w.prototype = /* @__PURE__ */ Object.create(null)).constructor = w;
          let E = function(t2, e2) {
            let r2 = w.call(this, t2, e2);
            return I(r2), r2;
          };
          (E.prototype = Object.create(w)).constructor = E;
          let M = function(t2) {
            return E.call(this, t2, Float32Array);
          };
          (M.prototype = Object.create(E.prototype)).constructor = M;
          let A = function(t2) {
            return E.call(this, t2, Float64Array);
          };
          (A.prototype = Object.create(E.prototype)).constructor = A;
          let T = function(t2, e2) {
            let r2 = new e2(t2.dataRefs[t2.current]);
            return r2.multiRef = t2, r2.setCurrent = function(t3) {
              this.multiRef.setCurrent(Math.round(t3));
            }, r2.getIndex = function() {
              return this.multiRef.getIndex();
            }, r2.getCurrentIndex = function() {
              return this.multiRef.getCurrentIndex();
            }, r2.reinitConstructor = this.constructor, r2;
          };
          T.prototype = /* @__PURE__ */ Object.create(null), T.constructor = T;
          let S = function(t2) {
            return T.call(this, t2, M);
          };
          (S.prototype = Object.create(T.prototype)).constructor = S;
          let B = function(t2) {
            return T.call(this, t2, A);
          };
          (B.prototype = Object.create(T.prototype)).constructor = B;
          let P = function(t2) {
            return w.call(this, t2, Int32Array);
          };
          (P.prototype = Object.create(w.prototype)).constructor = P;
          let R = function(t2) {
            return w.call(this, t2, Uint8Array);
          };
          (R.prototype = Object.create(w.prototype)).constructor = R, t.exports = { Float32Buffer: M, Float64Buffer: A, SampleBuffer: A, Float32MultiBuffer: S, Float64MultiBuffer: B, IntBuffer: P, UInt8Buffer: R };
        }, 126: (t) => {
          var e = function() {
          };
          (e.prototype = /* @__PURE__ */ Object.create(null)).constructor = e, e.prototype.setEngineAndPatcher = function() {
          }, e.prototype.initialize = function() {
          }, e.prototype.getNumParameters = function() {
            return 0;
          }, e.prototype.setParameterValue = function() {
          }, e.prototype.prepareToProcess = function() {
          }, e.prototype.process = function() {
          }, t.exports = { ExternalLoaderFactory: function() {
            return console.log("WARNING: Externals are not yet supported in Javascript"), new e();
          } };
        }, 925: (t) => {
          function e(t2, e2, r, n) {
            r[n] = t2[e2] + 0x9e3779b97f4a7c15n, r[n] = 0xbf58476d1ce4e5b9n * (r[n] ^ r[n] >> 30n), r[n] = 0x94d049bb133111ebn * (r[n] ^ r[n] >> 27n), r[n] = r[n] ^ r[n] >> 31n;
          }
          t.exports = { reset: function(t2, r) {
            let n = new BigUint64Array(1);
            n[0] = BigInt(Math.trunc(1e6 * t2)), e(n, 0, r, 0), e(r, 0, r, 1), e(r, 1, r, 2), e(r, 2, r, 3);
          }, next: function(t2) {
            let e2 = new BigUint64Array(1), r = new BigUint64Array(1);
            return r[0] = t2[0] + t2[3], e2[0] = t2[1] << 17n, t2[2] ^= t2[0], t2[3] ^= t2[1], t2[1] ^= t2[2], t2[0] ^= t2[3], t2[2] ^= e2[0], t2[3] = t2[3] << 45n | t2[3] >> 19n, r[0] = r[0] >> 11n, 2220446049250313e-31 * Number(r[0]) - 1;
          } };
        }, 766: (t, e) => {
          e.byteLength = function(t2) {
            var e2 = u(t2), r2 = e2[0], n2 = e2[1];
            return 3 * (r2 + n2) / 4 - n2;
          }, e.toByteArray = function(t2) {
            var e2, r2, s2 = u(t2), a2 = s2[0], o2 = s2[1], h2 = new i(function(t3, e3, r3) {
              return 3 * (e3 + r3) / 4 - r3;
            }(0, a2, o2)), f = 0, c = o2 > 0 ? a2 - 4 : a2;
            for (r2 = 0; r2 < c; r2 += 4) e2 = n[t2.charCodeAt(r2)] << 18 | n[t2.charCodeAt(r2 + 1)] << 12 | n[t2.charCodeAt(r2 + 2)] << 6 | n[t2.charCodeAt(r2 + 3)], h2[f++] = e2 >> 16 & 255, h2[f++] = e2 >> 8 & 255, h2[f++] = 255 & e2;
            return 2 === o2 && (e2 = n[t2.charCodeAt(r2)] << 2 | n[t2.charCodeAt(r2 + 1)] >> 4, h2[f++] = 255 & e2), 1 === o2 && (e2 = n[t2.charCodeAt(r2)] << 10 | n[t2.charCodeAt(r2 + 1)] << 4 | n[t2.charCodeAt(r2 + 2)] >> 2, h2[f++] = e2 >> 8 & 255, h2[f++] = 255 & e2), h2;
          }, e.fromByteArray = function(t2) {
            for (var e2, n2 = t2.length, i2 = n2 % 3, s2 = [], a2 = 16383, o2 = 0, u2 = n2 - i2; o2 < u2; o2 += a2) s2.push(h(t2, o2, o2 + a2 > u2 ? u2 : o2 + a2));
            return 1 === i2 ? (e2 = t2[n2 - 1], s2.push(r[e2 >> 2] + r[e2 << 4 & 63] + "==")) : 2 === i2 && (e2 = (t2[n2 - 2] << 8) + t2[n2 - 1], s2.push(r[e2 >> 10] + r[e2 >> 4 & 63] + r[e2 << 2 & 63] + "=")), s2.join("");
          };
          for (var r = [], n = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, o = s.length; a < o; ++a) r[a] = s[a], n[s.charCodeAt(a)] = a;
          function u(t2) {
            var e2 = t2.length;
            if (e2 % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            var r2 = t2.indexOf("=");
            return -1 === r2 && (r2 = e2), [r2, r2 === e2 ? 0 : 4 - r2 % 4];
          }
          function h(t2, e2, n2) {
            for (var i2, s2, a2 = [], o2 = e2; o2 < n2; o2 += 3) i2 = (t2[o2] << 16 & 16711680) + (t2[o2 + 1] << 8 & 65280) + (255 & t2[o2 + 2]), a2.push(r[(s2 = i2) >> 18 & 63] + r[s2 >> 12 & 63] + r[s2 >> 6 & 63] + r[63 & s2]);
            return a2.join("");
          }
          n["-".charCodeAt(0)] = 62, n["_".charCodeAt(0)] = 63;
        }, 834: (t, e, r) => {
          const n = r(766), i = r(181), s = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
          e.Buffer = u, e.SlowBuffer = function(t2) {
            return +t2 != t2 && (t2 = 0), u.alloc(+t2);
          }, e.INSPECT_MAX_BYTES = 50;
          const a = 2147483647;
          function o(t2) {
            if (t2 > a) throw new RangeError('The value "' + t2 + '" is invalid for option "size"');
            const e2 = new Uint8Array(t2);
            return Object.setPrototypeOf(e2, u.prototype), e2;
          }
          function u(t2, e2, r2) {
            if ("number" == typeof t2) {
              if ("string" == typeof e2) throw new TypeError('The "string" argument must be of type string. Received type number');
              return c(t2);
            }
            return h(t2, e2, r2);
          }
          function h(t2, e2, r2) {
            if ("string" == typeof t2) return function(t3, e3) {
              if ("string" == typeof e3 && "" !== e3 || (e3 = "utf8"), !u.isEncoding(e3)) throw new TypeError("Unknown encoding: " + e3);
              const r3 = 0 | g(t3, e3);
              let n3 = o(r3);
              const i3 = n3.write(t3, e3);
              return i3 !== r3 && (n3 = n3.slice(0, i3)), n3;
            }(t2, e2);
            if (ArrayBuffer.isView(t2)) return function(t3) {
              if (Y(t3, Uint8Array)) {
                const e3 = new Uint8Array(t3);
                return p(e3.buffer, e3.byteOffset, e3.byteLength);
              }
              return l(t3);
            }(t2);
            if (null == t2) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t2);
            if (Y(t2, ArrayBuffer) || t2 && Y(t2.buffer, ArrayBuffer)) return p(t2, e2, r2);
            if ("undefined" != typeof SharedArrayBuffer && (Y(t2, SharedArrayBuffer) || t2 && Y(t2.buffer, SharedArrayBuffer))) return p(t2, e2, r2);
            if ("number" == typeof t2) throw new TypeError('The "value" argument must not be of type number. Received type number');
            const n2 = t2.valueOf && t2.valueOf();
            if (null != n2 && n2 !== t2) return u.from(n2, e2, r2);
            const i2 = function(t3) {
              if (u.isBuffer(t3)) {
                const e3 = 0 | d(t3.length), r3 = o(e3);
                return 0 === r3.length || t3.copy(r3, 0, 0, e3), r3;
              }
              return void 0 !== t3.length ? "number" != typeof t3.length || Z(t3.length) ? o(0) : l(t3) : "Buffer" === t3.type && Array.isArray(t3.data) ? l(t3.data) : void 0;
            }(t2);
            if (i2) return i2;
            if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t2[Symbol.toPrimitive]) return u.from(t2[Symbol.toPrimitive]("string"), e2, r2);
            throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t2);
          }
          function f(t2) {
            if ("number" != typeof t2) throw new TypeError('"size" argument must be of type number');
            if (t2 < 0) throw new RangeError('The value "' + t2 + '" is invalid for option "size"');
          }
          function c(t2) {
            return f(t2), o(t2 < 0 ? 0 : 0 | d(t2));
          }
          function l(t2) {
            const e2 = t2.length < 0 ? 0 : 0 | d(t2.length), r2 = o(e2);
            for (let n2 = 0; n2 < e2; n2 += 1) r2[n2] = 255 & t2[n2];
            return r2;
          }
          function p(t2, e2, r2) {
            if (e2 < 0 || t2.byteLength < e2) throw new RangeError('"offset" is outside of buffer bounds');
            if (t2.byteLength < e2 + (r2 || 0)) throw new RangeError('"length" is outside of buffer bounds');
            let n2;
            return n2 = void 0 === e2 && void 0 === r2 ? new Uint8Array(t2) : void 0 === r2 ? new Uint8Array(t2, e2) : new Uint8Array(t2, e2, r2), Object.setPrototypeOf(n2, u.prototype), n2;
          }
          function d(t2) {
            if (t2 >= a) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a.toString(16) + " bytes");
            return 0 | t2;
          }
          function g(t2, e2) {
            if (u.isBuffer(t2)) return t2.length;
            if (ArrayBuffer.isView(t2) || Y(t2, ArrayBuffer)) return t2.byteLength;
            if ("string" != typeof t2) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t2);
            const r2 = t2.length, n2 = arguments.length > 2 && true === arguments[2];
            if (!n2 && 0 === r2) return 0;
            let i2 = false;
            for (; ; ) switch (e2) {
              case "ascii":
              case "latin1":
              case "binary":
                return r2;
              case "utf8":
              case "utf-8":
                return $(t2).length;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * r2;
              case "hex":
                return r2 >>> 1;
              case "base64":
                return G(t2).length;
              default:
                if (i2) return n2 ? -1 : $(t2).length;
                e2 = ("" + e2).toLowerCase(), i2 = true;
            }
          }
          function m(t2, e2, r2) {
            let n2 = false;
            if ((void 0 === e2 || e2 < 0) && (e2 = 0), e2 > this.length) return "";
            if ((void 0 === r2 || r2 > this.length) && (r2 = this.length), r2 <= 0) return "";
            if ((r2 >>>= 0) <= (e2 >>>= 0)) return "";
            for (t2 || (t2 = "utf8"); ; ) switch (t2) {
              case "hex":
                return R(this, e2, r2);
              case "utf8":
              case "utf-8":
                return T(this, e2, r2);
              case "ascii":
                return B(this, e2, r2);
              case "latin1":
              case "binary":
                return P(this, e2, r2);
              case "base64":
                return A(this, e2, r2);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return D(this, e2, r2);
              default:
                if (n2) throw new TypeError("Unknown encoding: " + t2);
                t2 = (t2 + "").toLowerCase(), n2 = true;
            }
          }
          function _(t2, e2, r2) {
            const n2 = t2[e2];
            t2[e2] = t2[r2], t2[r2] = n2;
          }
          function y(t2, e2, r2, n2, i2) {
            if (0 === t2.length) return -1;
            if ("string" == typeof r2 ? (n2 = r2, r2 = 0) : r2 > 2147483647 ? r2 = 2147483647 : r2 < -2147483648 && (r2 = -2147483648), Z(r2 = +r2) && (r2 = i2 ? 0 : t2.length - 1), r2 < 0 && (r2 = t2.length + r2), r2 >= t2.length) {
              if (i2) return -1;
              r2 = t2.length - 1;
            } else if (r2 < 0) {
              if (!i2) return -1;
              r2 = 0;
            }
            if ("string" == typeof e2 && (e2 = u.from(e2, n2)), u.isBuffer(e2)) return 0 === e2.length ? -1 : v(t2, e2, r2, n2, i2);
            if ("number" == typeof e2) return e2 &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i2 ? Uint8Array.prototype.indexOf.call(t2, e2, r2) : Uint8Array.prototype.lastIndexOf.call(t2, e2, r2) : v(t2, [e2], r2, n2, i2);
            throw new TypeError("val must be string, number or Buffer");
          }
          function v(t2, e2, r2, n2, i2) {
            let s2, a2 = 1, o2 = t2.length, u2 = e2.length;
            if (void 0 !== n2 && ("ucs2" === (n2 = String(n2).toLowerCase()) || "ucs-2" === n2 || "utf16le" === n2 || "utf-16le" === n2)) {
              if (t2.length < 2 || e2.length < 2) return -1;
              a2 = 2, o2 /= 2, u2 /= 2, r2 /= 2;
            }
            function h2(t3, e3) {
              return 1 === a2 ? t3[e3] : t3.readUInt16BE(e3 * a2);
            }
            if (i2) {
              let n3 = -1;
              for (s2 = r2; s2 < o2; s2++) if (h2(t2, s2) === h2(e2, -1 === n3 ? 0 : s2 - n3)) {
                if (-1 === n3 && (n3 = s2), s2 - n3 + 1 === u2) return n3 * a2;
              } else -1 !== n3 && (s2 -= s2 - n3), n3 = -1;
            } else for (r2 + u2 > o2 && (r2 = o2 - u2), s2 = r2; s2 >= 0; s2--) {
              let r3 = true;
              for (let n3 = 0; n3 < u2; n3++) if (h2(t2, s2 + n3) !== h2(e2, n3)) {
                r3 = false;
                break;
              }
              if (r3) return s2;
            }
            return -1;
          }
          function b(t2, e2, r2, n2) {
            r2 = Number(r2) || 0;
            const i2 = t2.length - r2;
            n2 ? (n2 = Number(n2)) > i2 && (n2 = i2) : n2 = i2;
            const s2 = e2.length;
            let a2;
            for (n2 > s2 / 2 && (n2 = s2 / 2), a2 = 0; a2 < n2; ++a2) {
              const n3 = parseInt(e2.substr(2 * a2, 2), 16);
              if (Z(n3)) return a2;
              t2[r2 + a2] = n3;
            }
            return a2;
          }
          function I(t2, e2, r2, n2) {
            return K($(e2, t2.length - r2), t2, r2, n2);
          }
          function w(t2, e2, r2, n2) {
            return K(function(t3) {
              const e3 = [];
              for (let r3 = 0; r3 < t3.length; ++r3) e3.push(255 & t3.charCodeAt(r3));
              return e3;
            }(e2), t2, r2, n2);
          }
          function E(t2, e2, r2, n2) {
            return K(G(e2), t2, r2, n2);
          }
          function M(t2, e2, r2, n2) {
            return K(function(t3, e3) {
              let r3, n3, i2;
              const s2 = [];
              for (let a2 = 0; a2 < t3.length && !((e3 -= 2) < 0); ++a2) r3 = t3.charCodeAt(a2), n3 = r3 >> 8, i2 = r3 % 256, s2.push(i2), s2.push(n3);
              return s2;
            }(e2, t2.length - r2), t2, r2, n2);
          }
          function A(t2, e2, r2) {
            return 0 === e2 && r2 === t2.length ? n.fromByteArray(t2) : n.fromByteArray(t2.slice(e2, r2));
          }
          function T(t2, e2, r2) {
            r2 = Math.min(t2.length, r2);
            const n2 = [];
            let i2 = e2;
            for (; i2 < r2; ) {
              const e3 = t2[i2];
              let s2 = null, a2 = e3 > 239 ? 4 : e3 > 223 ? 3 : e3 > 191 ? 2 : 1;
              if (i2 + a2 <= r2) {
                let r3, n3, o2, u2;
                switch (a2) {
                  case 1:
                    e3 < 128 && (s2 = e3);
                    break;
                  case 2:
                    r3 = t2[i2 + 1], 128 == (192 & r3) && (u2 = (31 & e3) << 6 | 63 & r3, u2 > 127 && (s2 = u2));
                    break;
                  case 3:
                    r3 = t2[i2 + 1], n3 = t2[i2 + 2], 128 == (192 & r3) && 128 == (192 & n3) && (u2 = (15 & e3) << 12 | (63 & r3) << 6 | 63 & n3, u2 > 2047 && (u2 < 55296 || u2 > 57343) && (s2 = u2));
                    break;
                  case 4:
                    r3 = t2[i2 + 1], n3 = t2[i2 + 2], o2 = t2[i2 + 3], 128 == (192 & r3) && 128 == (192 & n3) && 128 == (192 & o2) && (u2 = (15 & e3) << 18 | (63 & r3) << 12 | (63 & n3) << 6 | 63 & o2, u2 > 65535 && u2 < 1114112 && (s2 = u2));
                }
              }
              null === s2 ? (s2 = 65533, a2 = 1) : s2 > 65535 && (s2 -= 65536, n2.push(s2 >>> 10 & 1023 | 55296), s2 = 56320 | 1023 & s2), n2.push(s2), i2 += a2;
            }
            return function(t3) {
              const e3 = t3.length;
              if (e3 <= S) return String.fromCharCode.apply(String, t3);
              let r3 = "", n3 = 0;
              for (; n3 < e3; ) r3 += String.fromCharCode.apply(String, t3.slice(n3, n3 += S));
              return r3;
            }(n2);
          }
          e.kMaxLength = a, u.TYPED_ARRAY_SUPPORT = function() {
            try {
              const t2 = new Uint8Array(1), e2 = { foo: function() {
                return 42;
              } };
              return Object.setPrototypeOf(e2, Uint8Array.prototype), Object.setPrototypeOf(t2, e2), 42 === t2.foo();
            } catch (t2) {
              return false;
            }
          }(), u.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(u.prototype, "parent", { enumerable: true, get: function() {
            if (u.isBuffer(this)) return this.buffer;
          } }), Object.defineProperty(u.prototype, "offset", { enumerable: true, get: function() {
            if (u.isBuffer(this)) return this.byteOffset;
          } }), u.poolSize = 8192, u.from = function(t2, e2, r2) {
            return h(t2, e2, r2);
          }, Object.setPrototypeOf(u.prototype, Uint8Array.prototype), Object.setPrototypeOf(u, Uint8Array), u.alloc = function(t2, e2, r2) {
            return function(t3, e3, r3) {
              return f(t3), t3 <= 0 ? o(t3) : void 0 !== e3 ? "string" == typeof r3 ? o(t3).fill(e3, r3) : o(t3).fill(e3) : o(t3);
            }(t2, e2, r2);
          }, u.allocUnsafe = function(t2) {
            return c(t2);
          }, u.allocUnsafeSlow = function(t2) {
            return c(t2);
          }, u.isBuffer = function(t2) {
            return null != t2 && true === t2.t && t2 !== u.prototype;
          }, u.compare = function(t2, e2) {
            if (Y(t2, Uint8Array) && (t2 = u.from(t2, t2.offset, t2.byteLength)), Y(e2, Uint8Array) && (e2 = u.from(e2, e2.offset, e2.byteLength)), !u.isBuffer(t2) || !u.isBuffer(e2)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
            if (t2 === e2) return 0;
            let r2 = t2.length, n2 = e2.length;
            for (let i2 = 0, s2 = Math.min(r2, n2); i2 < s2; ++i2) if (t2[i2] !== e2[i2]) {
              r2 = t2[i2], n2 = e2[i2];
              break;
            }
            return r2 < n2 ? -1 : n2 < r2 ? 1 : 0;
          }, u.isEncoding = function(t2) {
            switch (String(t2).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "latin1":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return true;
              default:
                return false;
            }
          }, u.concat = function(t2, e2) {
            if (!Array.isArray(t2)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === t2.length) return u.alloc(0);
            let r2;
            if (void 0 === e2) for (e2 = 0, r2 = 0; r2 < t2.length; ++r2) e2 += t2[r2].length;
            const n2 = u.allocUnsafe(e2);
            let i2 = 0;
            for (r2 = 0; r2 < t2.length; ++r2) {
              let e3 = t2[r2];
              if (Y(e3, Uint8Array)) i2 + e3.length > n2.length ? (u.isBuffer(e3) || (e3 = u.from(e3)), e3.copy(n2, i2)) : Uint8Array.prototype.set.call(n2, e3, i2);
              else {
                if (!u.isBuffer(e3)) throw new TypeError('"list" argument must be an Array of Buffers');
                e3.copy(n2, i2);
              }
              i2 += e3.length;
            }
            return n2;
          }, u.byteLength = g, u.prototype.t = true, u.prototype.swap16 = function() {
            const t2 = this.length;
            if (t2 % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (let e2 = 0; e2 < t2; e2 += 2) _(this, e2, e2 + 1);
            return this;
          }, u.prototype.swap32 = function() {
            const t2 = this.length;
            if (t2 % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (let e2 = 0; e2 < t2; e2 += 4) _(this, e2, e2 + 3), _(this, e2 + 1, e2 + 2);
            return this;
          }, u.prototype.swap64 = function() {
            const t2 = this.length;
            if (t2 % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (let e2 = 0; e2 < t2; e2 += 8) _(this, e2, e2 + 7), _(this, e2 + 1, e2 + 6), _(this, e2 + 2, e2 + 5), _(this, e2 + 3, e2 + 4);
            return this;
          }, u.prototype.toString = function() {
            const t2 = this.length;
            return 0 === t2 ? "" : 0 === arguments.length ? T(this, 0, t2) : m.apply(this, arguments);
          }, u.prototype.toLocaleString = u.prototype.toString, u.prototype.equals = function(t2) {
            if (!u.isBuffer(t2)) throw new TypeError("Argument must be a Buffer");
            return this === t2 || 0 === u.compare(this, t2);
          }, u.prototype.inspect = function() {
            let t2 = "";
            const r2 = e.INSPECT_MAX_BYTES;
            return t2 = this.toString("hex", 0, r2).replace(/(.{2})/g, "$1 ").trim(), this.length > r2 && (t2 += " ... "), "<Buffer " + t2 + ">";
          }, s && (u.prototype[s] = u.prototype.inspect), u.prototype.compare = function(t2, e2, r2, n2, i2) {
            if (Y(t2, Uint8Array) && (t2 = u.from(t2, t2.offset, t2.byteLength)), !u.isBuffer(t2)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t2);
            if (void 0 === e2 && (e2 = 0), void 0 === r2 && (r2 = t2 ? t2.length : 0), void 0 === n2 && (n2 = 0), void 0 === i2 && (i2 = this.length), e2 < 0 || r2 > t2.length || n2 < 0 || i2 > this.length) throw new RangeError("out of range index");
            if (n2 >= i2 && e2 >= r2) return 0;
            if (n2 >= i2) return -1;
            if (e2 >= r2) return 1;
            if (this === t2) return 0;
            let s2 = (i2 >>>= 0) - (n2 >>>= 0), a2 = (r2 >>>= 0) - (e2 >>>= 0);
            const o2 = Math.min(s2, a2), h2 = this.slice(n2, i2), f2 = t2.slice(e2, r2);
            for (let t3 = 0; t3 < o2; ++t3) if (h2[t3] !== f2[t3]) {
              s2 = h2[t3], a2 = f2[t3];
              break;
            }
            return s2 < a2 ? -1 : a2 < s2 ? 1 : 0;
          }, u.prototype.includes = function(t2, e2, r2) {
            return -1 !== this.indexOf(t2, e2, r2);
          }, u.prototype.indexOf = function(t2, e2, r2) {
            return y(this, t2, e2, r2, true);
          }, u.prototype.lastIndexOf = function(t2, e2, r2) {
            return y(this, t2, e2, r2, false);
          }, u.prototype.write = function(t2, e2, r2, n2) {
            if (void 0 === e2) n2 = "utf8", r2 = this.length, e2 = 0;
            else if (void 0 === r2 && "string" == typeof e2) n2 = e2, r2 = this.length, e2 = 0;
            else {
              if (!isFinite(e2)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
              e2 >>>= 0, isFinite(r2) ? (r2 >>>= 0, void 0 === n2 && (n2 = "utf8")) : (n2 = r2, r2 = void 0);
            }
            const i2 = this.length - e2;
            if ((void 0 === r2 || r2 > i2) && (r2 = i2), t2.length > 0 && (r2 < 0 || e2 < 0) || e2 > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            n2 || (n2 = "utf8");
            let s2 = false;
            for (; ; ) switch (n2) {
              case "hex":
                return b(this, t2, e2, r2);
              case "utf8":
              case "utf-8":
                return I(this, t2, e2, r2);
              case "ascii":
              case "latin1":
              case "binary":
                return w(this, t2, e2, r2);
              case "base64":
                return E(this, t2, e2, r2);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return M(this, t2, e2, r2);
              default:
                if (s2) throw new TypeError("Unknown encoding: " + n2);
                n2 = ("" + n2).toLowerCase(), s2 = true;
            }
          }, u.prototype.toJSON = function() {
            return { type: "Buffer", data: Array.prototype.slice.call(this.i || this, 0) };
          };
          const S = 4096;
          function B(t2, e2, r2) {
            let n2 = "";
            r2 = Math.min(t2.length, r2);
            for (let i2 = e2; i2 < r2; ++i2) n2 += String.fromCharCode(127 & t2[i2]);
            return n2;
          }
          function P(t2, e2, r2) {
            let n2 = "";
            r2 = Math.min(t2.length, r2);
            for (let i2 = e2; i2 < r2; ++i2) n2 += String.fromCharCode(t2[i2]);
            return n2;
          }
          function R(t2, e2, r2) {
            const n2 = t2.length;
            (!e2 || e2 < 0) && (e2 = 0), (!r2 || r2 < 0 || r2 > n2) && (r2 = n2);
            let i2 = "";
            for (let n3 = e2; n3 < r2; ++n3) i2 += H[t2[n3]];
            return i2;
          }
          function D(t2, e2, r2) {
            const n2 = t2.slice(e2, r2);
            let i2 = "";
            for (let t3 = 0; t3 < n2.length - 1; t3 += 2) i2 += String.fromCharCode(n2[t3] + 256 * n2[t3 + 1]);
            return i2;
          }
          function O(t2, e2, r2) {
            if (t2 % 1 != 0 || t2 < 0) throw new RangeError("offset is not uint");
            if (t2 + e2 > r2) throw new RangeError("Trying to access beyond buffer length");
          }
          function N(t2, e2, r2, n2, i2, s2) {
            if (!u.isBuffer(t2)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (e2 > i2 || e2 < s2) throw new RangeError('"value" argument is out of bounds');
            if (r2 + n2 > t2.length) throw new RangeError("Index out of range");
          }
          function C(t2, e2, r2, n2, i2) {
            X(e2, n2, i2, t2, r2, 7);
            let s2 = Number(e2 & BigInt(4294967295));
            t2[r2++] = s2, s2 >>= 8, t2[r2++] = s2, s2 >>= 8, t2[r2++] = s2, s2 >>= 8, t2[r2++] = s2;
            let a2 = Number(e2 >> BigInt(32) & BigInt(4294967295));
            return t2[r2++] = a2, a2 >>= 8, t2[r2++] = a2, a2 >>= 8, t2[r2++] = a2, a2 >>= 8, t2[r2++] = a2, r2;
          }
          function k(t2, e2, r2, n2, i2) {
            X(e2, n2, i2, t2, r2, 7);
            let s2 = Number(e2 & BigInt(4294967295));
            t2[r2 + 7] = s2, s2 >>= 8, t2[r2 + 6] = s2, s2 >>= 8, t2[r2 + 5] = s2, s2 >>= 8, t2[r2 + 4] = s2;
            let a2 = Number(e2 >> BigInt(32) & BigInt(4294967295));
            return t2[r2 + 3] = a2, a2 >>= 8, t2[r2 + 2] = a2, a2 >>= 8, t2[r2 + 1] = a2, a2 >>= 8, t2[r2] = a2, r2 + 8;
          }
          function x(t2, e2, r2, n2, i2, s2) {
            if (r2 + n2 > t2.length) throw new RangeError("Index out of range");
            if (r2 < 0) throw new RangeError("Index out of range");
          }
          function U(t2, e2, r2, n2, s2) {
            return e2 = +e2, r2 >>>= 0, s2 || x(t2, 0, r2, 4), i.write(t2, e2, r2, n2, 23, 4), r2 + 4;
          }
          function z(t2, e2, r2, n2, s2) {
            return e2 = +e2, r2 >>>= 0, s2 || x(t2, 0, r2, 8), i.write(t2, e2, r2, n2, 52, 8), r2 + 8;
          }
          u.prototype.slice = function(t2, e2) {
            const r2 = this.length;
            (t2 = ~~t2) < 0 ? (t2 += r2) < 0 && (t2 = 0) : t2 > r2 && (t2 = r2), (e2 = void 0 === e2 ? r2 : ~~e2) < 0 ? (e2 += r2) < 0 && (e2 = 0) : e2 > r2 && (e2 = r2), e2 < t2 && (e2 = t2);
            const n2 = this.subarray(t2, e2);
            return Object.setPrototypeOf(n2, u.prototype), n2;
          }, u.prototype.readUintLE = u.prototype.readUIntLE = function(t2, e2, r2) {
            t2 >>>= 0, e2 >>>= 0, r2 || O(t2, e2, this.length);
            let n2 = this[t2], i2 = 1, s2 = 0;
            for (; ++s2 < e2 && (i2 *= 256); ) n2 += this[t2 + s2] * i2;
            return n2;
          }, u.prototype.readUintBE = u.prototype.readUIntBE = function(t2, e2, r2) {
            t2 >>>= 0, e2 >>>= 0, r2 || O(t2, e2, this.length);
            let n2 = this[t2 + --e2], i2 = 1;
            for (; e2 > 0 && (i2 *= 256); ) n2 += this[t2 + --e2] * i2;
            return n2;
          }, u.prototype.readUint8 = u.prototype.readUInt8 = function(t2, e2) {
            return t2 >>>= 0, e2 || O(t2, 1, this.length), this[t2];
          }, u.prototype.readUint16LE = u.prototype.readUInt16LE = function(t2, e2) {
            return t2 >>>= 0, e2 || O(t2, 2, this.length), this[t2] | this[t2 + 1] << 8;
          }, u.prototype.readUint16BE = u.prototype.readUInt16BE = function(t2, e2) {
            return t2 >>>= 0, e2 || O(t2, 2, this.length), this[t2] << 8 | this[t2 + 1];
          }, u.prototype.readUint32LE = u.prototype.readUInt32LE = function(t2, e2) {
            return t2 >>>= 0, e2 || O(t2, 4, this.length), (this[t2] | this[t2 + 1] << 8 | this[t2 + 2] << 16) + 16777216 * this[t2 + 3];
          }, u.prototype.readUint32BE = u.prototype.readUInt32BE = function(t2, e2) {
            return t2 >>>= 0, e2 || O(t2, 4, this.length), 16777216 * this[t2] + (this[t2 + 1] << 16 | this[t2 + 2] << 8 | this[t2 + 3]);
          }, u.prototype.readBigUInt64LE = J(function(t2) {
            V(t2 >>>= 0, "offset");
            const e2 = this[t2], r2 = this[t2 + 7];
            void 0 !== e2 && void 0 !== r2 || q(t2, this.length - 8);
            const n2 = e2 + 256 * this[++t2] + 65536 * this[++t2] + this[++t2] * 2 ** 24, i2 = this[++t2] + 256 * this[++t2] + 65536 * this[++t2] + r2 * 2 ** 24;
            return BigInt(n2) + (BigInt(i2) << BigInt(32));
          }), u.prototype.readBigUInt64BE = J(function(t2) {
            V(t2 >>>= 0, "offset");
            const e2 = this[t2], r2 = this[t2 + 7];
            void 0 !== e2 && void 0 !== r2 || q(t2, this.length - 8);
            const n2 = e2 * 2 ** 24 + 65536 * this[++t2] + 256 * this[++t2] + this[++t2], i2 = this[++t2] * 2 ** 24 + 65536 * this[++t2] + 256 * this[++t2] + r2;
            return (BigInt(n2) << BigInt(32)) + BigInt(i2);
          }), u.prototype.readIntLE = function(t2, e2, r2) {
            t2 >>>= 0, e2 >>>= 0, r2 || O(t2, e2, this.length);
            let n2 = this[t2], i2 = 1, s2 = 0;
            for (; ++s2 < e2 && (i2 *= 256); ) n2 += this[t2 + s2] * i2;
            return i2 *= 128, n2 >= i2 && (n2 -= Math.pow(2, 8 * e2)), n2;
          }, u.prototype.readIntBE = function(t2, e2, r2) {
            t2 >>>= 0, e2 >>>= 0, r2 || O(t2, e2, this.length);
            let n2 = e2, i2 = 1, s2 = this[t2 + --n2];
            for (; n2 > 0 && (i2 *= 256); ) s2 += this[t2 + --n2] * i2;
            return i2 *= 128, s2 >= i2 && (s2 -= Math.pow(2, 8 * e2)), s2;
          }, u.prototype.readInt8 = function(t2, e2) {
            return t2 >>>= 0, e2 || O(t2, 1, this.length), 128 & this[t2] ? -1 * (255 - this[t2] + 1) : this[t2];
          }, u.prototype.readInt16LE = function(t2, e2) {
            t2 >>>= 0, e2 || O(t2, 2, this.length);
            const r2 = this[t2] | this[t2 + 1] << 8;
            return 32768 & r2 ? 4294901760 | r2 : r2;
          }, u.prototype.readInt16BE = function(t2, e2) {
            t2 >>>= 0, e2 || O(t2, 2, this.length);
            const r2 = this[t2 + 1] | this[t2] << 8;
            return 32768 & r2 ? 4294901760 | r2 : r2;
          }, u.prototype.readInt32LE = function(t2, e2) {
            return t2 >>>= 0, e2 || O(t2, 4, this.length), this[t2] | this[t2 + 1] << 8 | this[t2 + 2] << 16 | this[t2 + 3] << 24;
          }, u.prototype.readInt32BE = function(t2, e2) {
            return t2 >>>= 0, e2 || O(t2, 4, this.length), this[t2] << 24 | this[t2 + 1] << 16 | this[t2 + 2] << 8 | this[t2 + 3];
          }, u.prototype.readBigInt64LE = J(function(t2) {
            V(t2 >>>= 0, "offset");
            const e2 = this[t2], r2 = this[t2 + 7];
            void 0 !== e2 && void 0 !== r2 || q(t2, this.length - 8);
            const n2 = this[t2 + 4] + 256 * this[t2 + 5] + 65536 * this[t2 + 6] + (r2 << 24);
            return (BigInt(n2) << BigInt(32)) + BigInt(e2 + 256 * this[++t2] + 65536 * this[++t2] + this[++t2] * 2 ** 24);
          }), u.prototype.readBigInt64BE = J(function(t2) {
            V(t2 >>>= 0, "offset");
            const e2 = this[t2], r2 = this[t2 + 7];
            void 0 !== e2 && void 0 !== r2 || q(t2, this.length - 8);
            const n2 = (e2 << 24) + 65536 * this[++t2] + 256 * this[++t2] + this[++t2];
            return (BigInt(n2) << BigInt(32)) + BigInt(this[++t2] * 2 ** 24 + 65536 * this[++t2] + 256 * this[++t2] + r2);
          }), u.prototype.readFloatLE = function(t2, e2) {
            return t2 >>>= 0, e2 || O(t2, 4, this.length), i.read(this, t2, true, 23, 4);
          }, u.prototype.readFloatBE = function(t2, e2) {
            return t2 >>>= 0, e2 || O(t2, 4, this.length), i.read(this, t2, false, 23, 4);
          }, u.prototype.readDoubleLE = function(t2, e2) {
            return t2 >>>= 0, e2 || O(t2, 8, this.length), i.read(this, t2, true, 52, 8);
          }, u.prototype.readDoubleBE = function(t2, e2) {
            return t2 >>>= 0, e2 || O(t2, 8, this.length), i.read(this, t2, false, 52, 8);
          }, u.prototype.writeUintLE = u.prototype.writeUIntLE = function(t2, e2, r2, n2) {
            t2 = +t2, e2 >>>= 0, r2 >>>= 0, n2 || N(this, t2, e2, r2, Math.pow(2, 8 * r2) - 1, 0);
            let i2 = 1, s2 = 0;
            for (this[e2] = 255 & t2; ++s2 < r2 && (i2 *= 256); ) this[e2 + s2] = t2 / i2 & 255;
            return e2 + r2;
          }, u.prototype.writeUintBE = u.prototype.writeUIntBE = function(t2, e2, r2, n2) {
            t2 = +t2, e2 >>>= 0, r2 >>>= 0, n2 || N(this, t2, e2, r2, Math.pow(2, 8 * r2) - 1, 0);
            let i2 = r2 - 1, s2 = 1;
            for (this[e2 + i2] = 255 & t2; --i2 >= 0 && (s2 *= 256); ) this[e2 + i2] = t2 / s2 & 255;
            return e2 + r2;
          }, u.prototype.writeUint8 = u.prototype.writeUInt8 = function(t2, e2, r2) {
            return t2 = +t2, e2 >>>= 0, r2 || N(this, t2, e2, 1, 255, 0), this[e2] = 255 & t2, e2 + 1;
          }, u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function(t2, e2, r2) {
            return t2 = +t2, e2 >>>= 0, r2 || N(this, t2, e2, 2, 65535, 0), this[e2] = 255 & t2, this[e2 + 1] = t2 >>> 8, e2 + 2;
          }, u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function(t2, e2, r2) {
            return t2 = +t2, e2 >>>= 0, r2 || N(this, t2, e2, 2, 65535, 0), this[e2] = t2 >>> 8, this[e2 + 1] = 255 & t2, e2 + 2;
          }, u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function(t2, e2, r2) {
            return t2 = +t2, e2 >>>= 0, r2 || N(this, t2, e2, 4, 4294967295, 0), this[e2 + 3] = t2 >>> 24, this[e2 + 2] = t2 >>> 16, this[e2 + 1] = t2 >>> 8, this[e2] = 255 & t2, e2 + 4;
          }, u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function(t2, e2, r2) {
            return t2 = +t2, e2 >>>= 0, r2 || N(this, t2, e2, 4, 4294967295, 0), this[e2] = t2 >>> 24, this[e2 + 1] = t2 >>> 16, this[e2 + 2] = t2 >>> 8, this[e2 + 3] = 255 & t2, e2 + 4;
          }, u.prototype.writeBigUInt64LE = J(function(t2, e2 = 0) {
            return C(this, t2, e2, BigInt(0), BigInt("0xffffffffffffffff"));
          }), u.prototype.writeBigUInt64BE = J(function(t2, e2 = 0) {
            return k(this, t2, e2, BigInt(0), BigInt("0xffffffffffffffff"));
          }), u.prototype.writeIntLE = function(t2, e2, r2, n2) {
            if (t2 = +t2, e2 >>>= 0, !n2) {
              const n3 = Math.pow(2, 8 * r2 - 1);
              N(this, t2, e2, r2, n3 - 1, -n3);
            }
            let i2 = 0, s2 = 1, a2 = 0;
            for (this[e2] = 255 & t2; ++i2 < r2 && (s2 *= 256); ) t2 < 0 && 0 === a2 && 0 !== this[e2 + i2 - 1] && (a2 = 1), this[e2 + i2] = (t2 / s2 >> 0) - a2 & 255;
            return e2 + r2;
          }, u.prototype.writeIntBE = function(t2, e2, r2, n2) {
            if (t2 = +t2, e2 >>>= 0, !n2) {
              const n3 = Math.pow(2, 8 * r2 - 1);
              N(this, t2, e2, r2, n3 - 1, -n3);
            }
            let i2 = r2 - 1, s2 = 1, a2 = 0;
            for (this[e2 + i2] = 255 & t2; --i2 >= 0 && (s2 *= 256); ) t2 < 0 && 0 === a2 && 0 !== this[e2 + i2 + 1] && (a2 = 1), this[e2 + i2] = (t2 / s2 >> 0) - a2 & 255;
            return e2 + r2;
          }, u.prototype.writeInt8 = function(t2, e2, r2) {
            return t2 = +t2, e2 >>>= 0, r2 || N(this, t2, e2, 1, 127, -128), t2 < 0 && (t2 = 255 + t2 + 1), this[e2] = 255 & t2, e2 + 1;
          }, u.prototype.writeInt16LE = function(t2, e2, r2) {
            return t2 = +t2, e2 >>>= 0, r2 || N(this, t2, e2, 2, 32767, -32768), this[e2] = 255 & t2, this[e2 + 1] = t2 >>> 8, e2 + 2;
          }, u.prototype.writeInt16BE = function(t2, e2, r2) {
            return t2 = +t2, e2 >>>= 0, r2 || N(this, t2, e2, 2, 32767, -32768), this[e2] = t2 >>> 8, this[e2 + 1] = 255 & t2, e2 + 2;
          }, u.prototype.writeInt32LE = function(t2, e2, r2) {
            return t2 = +t2, e2 >>>= 0, r2 || N(this, t2, e2, 4, 2147483647, -2147483648), this[e2] = 255 & t2, this[e2 + 1] = t2 >>> 8, this[e2 + 2] = t2 >>> 16, this[e2 + 3] = t2 >>> 24, e2 + 4;
          }, u.prototype.writeInt32BE = function(t2, e2, r2) {
            return t2 = +t2, e2 >>>= 0, r2 || N(this, t2, e2, 4, 2147483647, -2147483648), t2 < 0 && (t2 = 4294967295 + t2 + 1), this[e2] = t2 >>> 24, this[e2 + 1] = t2 >>> 16, this[e2 + 2] = t2 >>> 8, this[e2 + 3] = 255 & t2, e2 + 4;
          }, u.prototype.writeBigInt64LE = J(function(t2, e2 = 0) {
            return C(this, t2, e2, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
          }), u.prototype.writeBigInt64BE = J(function(t2, e2 = 0) {
            return k(this, t2, e2, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
          }), u.prototype.writeFloatLE = function(t2, e2, r2) {
            return U(this, t2, e2, true, r2);
          }, u.prototype.writeFloatBE = function(t2, e2, r2) {
            return U(this, t2, e2, false, r2);
          }, u.prototype.writeDoubleLE = function(t2, e2, r2) {
            return z(this, t2, e2, true, r2);
          }, u.prototype.writeDoubleBE = function(t2, e2, r2) {
            return z(this, t2, e2, false, r2);
          }, u.prototype.copy = function(t2, e2, r2, n2) {
            if (!u.isBuffer(t2)) throw new TypeError("argument should be a Buffer");
            if (r2 || (r2 = 0), n2 || 0 === n2 || (n2 = this.length), e2 >= t2.length && (e2 = t2.length), e2 || (e2 = 0), n2 > 0 && n2 < r2 && (n2 = r2), n2 === r2) return 0;
            if (0 === t2.length || 0 === this.length) return 0;
            if (e2 < 0) throw new RangeError("targetStart out of bounds");
            if (r2 < 0 || r2 >= this.length) throw new RangeError("Index out of range");
            if (n2 < 0) throw new RangeError("sourceEnd out of bounds");
            n2 > this.length && (n2 = this.length), t2.length - e2 < n2 - r2 && (n2 = t2.length - e2 + r2);
            const i2 = n2 - r2;
            return this === t2 && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(e2, r2, n2) : Uint8Array.prototype.set.call(t2, this.subarray(r2, n2), e2), i2;
          }, u.prototype.fill = function(t2, e2, r2, n2) {
            if ("string" == typeof t2) {
              if ("string" == typeof e2 ? (n2 = e2, e2 = 0, r2 = this.length) : "string" == typeof r2 && (n2 = r2, r2 = this.length), void 0 !== n2 && "string" != typeof n2) throw new TypeError("encoding must be a string");
              if ("string" == typeof n2 && !u.isEncoding(n2)) throw new TypeError("Unknown encoding: " + n2);
              if (1 === t2.length) {
                const e3 = t2.charCodeAt(0);
                ("utf8" === n2 && e3 < 128 || "latin1" === n2) && (t2 = e3);
              }
            } else "number" == typeof t2 ? t2 &= 255 : "boolean" == typeof t2 && (t2 = Number(t2));
            if (e2 < 0 || this.length < e2 || this.length < r2) throw new RangeError("Out of range index");
            if (r2 <= e2) return this;
            let i2;
            if (e2 >>>= 0, r2 = void 0 === r2 ? this.length : r2 >>> 0, t2 || (t2 = 0), "number" == typeof t2) for (i2 = e2; i2 < r2; ++i2) this[i2] = t2;
            else {
              const s2 = u.isBuffer(t2) ? t2 : u.from(t2, n2), a2 = s2.length;
              if (0 === a2) throw new TypeError('The value "' + t2 + '" is invalid for argument "value"');
              for (i2 = 0; i2 < r2 - e2; ++i2) this[i2 + e2] = s2[i2 % a2];
            }
            return this;
          };
          const j = {};
          function F(t2, e2, r2) {
            j[t2] = class extends r2 {
              constructor() {
                super(), Object.defineProperty(this, "message", { value: e2.apply(this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${t2}]`, this.stack, delete this.name;
              }
              get code() {
                return t2;
              }
              set code(t3) {
                Object.defineProperty(this, "code", { configurable: true, enumerable: true, value: t3, writable: true });
              }
              toString() {
                return `${this.name} [${t2}]: ${this.message}`;
              }
            };
          }
          function L(t2) {
            let e2 = "", r2 = t2.length;
            const n2 = "-" === t2[0] ? 1 : 0;
            for (; r2 >= n2 + 4; r2 -= 3) e2 = `_${t2.slice(r2 - 3, r2)}${e2}`;
            return `${t2.slice(0, r2)}${e2}`;
          }
          function X(t2, e2, r2, n2, i2, s2) {
            if (t2 > r2 || t2 < e2) {
              const n3 = "bigint" == typeof e2 ? "n" : "";
              let i3;
              throw i3 = s2 > 3 ? 0 === e2 || e2 === BigInt(0) ? `>= 0${n3} and < 2${n3} ** ${8 * (s2 + 1)}${n3}` : `>= -(2${n3} ** ${8 * (s2 + 1) - 1}${n3}) and < 2 ** ${8 * (s2 + 1) - 1}${n3}` : `>= ${e2}${n3} and <= ${r2}${n3}`, new j.ERR_OUT_OF_RANGE("value", i3, t2);
            }
            !function(t3, e3, r3) {
              V(e3, "offset"), void 0 !== t3[e3] && void 0 !== t3[e3 + r3] || q(e3, t3.length - (r3 + 1));
            }(n2, i2, s2);
          }
          function V(t2, e2) {
            if ("number" != typeof t2) throw new j.ERR_INVALID_ARG_TYPE(e2, "number", t2);
          }
          function q(t2, e2, r2) {
            if (Math.floor(t2) !== t2) throw V(t2, r2), new j.ERR_OUT_OF_RANGE(r2 || "offset", "an integer", t2);
            if (e2 < 0) throw new j.ERR_BUFFER_OUT_OF_BOUNDS();
            throw new j.ERR_OUT_OF_RANGE(r2 || "offset", `>= ${r2 ? 1 : 0} and <= ${e2}`, t2);
          }
          F("ERR_BUFFER_OUT_OF_BOUNDS", function(t2) {
            return t2 ? `${t2} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
          }, RangeError), F("ERR_INVALID_ARG_TYPE", function(t2, e2) {
            return `The "${t2}" argument must be of type number. Received type ${typeof e2}`;
          }, TypeError), F("ERR_OUT_OF_RANGE", function(t2, e2, r2) {
            let n2 = `The value of "${t2}" is out of range.`, i2 = r2;
            return Number.isInteger(r2) && Math.abs(r2) > 2 ** 32 ? i2 = L(String(r2)) : "bigint" == typeof r2 && (i2 = String(r2), (r2 > BigInt(2) ** BigInt(32) || r2 < -(BigInt(2) ** BigInt(32))) && (i2 = L(i2)), i2 += "n"), n2 += ` It must be ${e2}. Received ${i2}`, n2;
          }, RangeError);
          const W = /[^+/0-9A-Za-z-_]/g;
          function $(t2, e2) {
            let r2;
            e2 = e2 || 1 / 0;
            const n2 = t2.length;
            let i2 = null;
            const s2 = [];
            for (let a2 = 0; a2 < n2; ++a2) {
              if (r2 = t2.charCodeAt(a2), r2 > 55295 && r2 < 57344) {
                if (!i2) {
                  if (r2 > 56319) {
                    (e2 -= 3) > -1 && s2.push(239, 191, 189);
                    continue;
                  }
                  if (a2 + 1 === n2) {
                    (e2 -= 3) > -1 && s2.push(239, 191, 189);
                    continue;
                  }
                  i2 = r2;
                  continue;
                }
                if (r2 < 56320) {
                  (e2 -= 3) > -1 && s2.push(239, 191, 189), i2 = r2;
                  continue;
                }
                r2 = 65536 + (i2 - 55296 << 10 | r2 - 56320);
              } else i2 && (e2 -= 3) > -1 && s2.push(239, 191, 189);
              if (i2 = null, r2 < 128) {
                if ((e2 -= 1) < 0) break;
                s2.push(r2);
              } else if (r2 < 2048) {
                if ((e2 -= 2) < 0) break;
                s2.push(r2 >> 6 | 192, 63 & r2 | 128);
              } else if (r2 < 65536) {
                if ((e2 -= 3) < 0) break;
                s2.push(r2 >> 12 | 224, r2 >> 6 & 63 | 128, 63 & r2 | 128);
              } else {
                if (!(r2 < 1114112)) throw new Error("Invalid code point");
                if ((e2 -= 4) < 0) break;
                s2.push(r2 >> 18 | 240, r2 >> 12 & 63 | 128, r2 >> 6 & 63 | 128, 63 & r2 | 128);
              }
            }
            return s2;
          }
          function G(t2) {
            return n.toByteArray(function(t3) {
              if ((t3 = (t3 = t3.split("=")[0]).trim().replace(W, "")).length < 2) return "";
              for (; t3.length % 4 != 0; ) t3 += "=";
              return t3;
            }(t2));
          }
          function K(t2, e2, r2, n2) {
            let i2;
            for (i2 = 0; i2 < n2 && !(i2 + r2 >= e2.length || i2 >= t2.length); ++i2) e2[i2 + r2] = t2[i2];
            return i2;
          }
          function Y(t2, e2) {
            return t2 instanceof e2 || null != t2 && null != t2.constructor && null != t2.constructor.name && t2.constructor.name === e2.name;
          }
          function Z(t2) {
            return t2 != t2;
          }
          const H = function() {
            const t2 = "0123456789abcdef", e2 = new Array(256);
            for (let r2 = 0; r2 < 16; ++r2) {
              const n2 = 16 * r2;
              for (let i2 = 0; i2 < 16; ++i2) e2[n2 + i2] = t2[r2] + t2[i2];
            }
            return e2;
          }();
          function J(t2) {
            return "undefined" == typeof BigInt ? Q : t2;
          }
          function Q() {
            throw new Error("BigInt not supported");
          }
        }, 181: (t, e) => {
          e.read = function(t2, e2, r, n, i) {
            var s, a, o = 8 * i - n - 1, u = (1 << o) - 1, h = u >> 1, f = -7, c = r ? i - 1 : 0, l = r ? -1 : 1, p = t2[e2 + c];
            for (c += l, s = p & (1 << -f) - 1, p >>= -f, f += o; f > 0; s = 256 * s + t2[e2 + c], c += l, f -= 8) ;
            for (a = s & (1 << -f) - 1, s >>= -f, f += n; f > 0; a = 256 * a + t2[e2 + c], c += l, f -= 8) ;
            if (0 === s) s = 1 - h;
            else {
              if (s === u) return a ? NaN : 1 / 0 * (p ? -1 : 1);
              a += Math.pow(2, n), s -= h;
            }
            return (p ? -1 : 1) * a * Math.pow(2, s - n);
          }, e.write = function(t2, e2, r, n, i, s) {
            var a, o, u, h = 8 * s - i - 1, f = (1 << h) - 1, c = f >> 1, l = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = n ? 0 : s - 1, d = n ? 1 : -1, g = e2 < 0 || 0 === e2 && 1 / e2 < 0 ? 1 : 0;
            for (e2 = Math.abs(e2), isNaN(e2) || e2 === 1 / 0 ? (o = isNaN(e2) ? 1 : 0, a = f) : (a = Math.floor(Math.log(e2) / Math.LN2), e2 * (u = Math.pow(2, -a)) < 1 && (a--, u *= 2), (e2 += a + c >= 1 ? l / u : l * Math.pow(2, 1 - c)) * u >= 2 && (a++, u /= 2), a + c >= f ? (o = 0, a = f) : a + c >= 1 ? (o = (e2 * u - 1) * Math.pow(2, i), a += c) : (o = e2 * Math.pow(2, c - 1) * Math.pow(2, i), a = 0)); i >= 8; t2[r + p] = 255 & o, p += d, o /= 256, i -= 8) ;
            for (a = a << i | o, h += i; h > 0; t2[r + p] = 255 & a, p += d, a /= 256, h -= 8) ;
            t2[r + p - d] |= 128 * g;
          };
        }, 845: (t, e, r) => {
          var n = {};
          (0, r(761).assign)(n, r(880), r(380), r(271)), t.exports = n;
        }, 880: (t, e, r) => {
          var n = r(789), i = r(761), s = r(944), a = r(950), o = r(744), u = Object.prototype.toString;
          function h(t2) {
            if (!(this instanceof h)) return new h(t2);
            this.options = i.assign({ level: -1, method: 8, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: 0, to: "" }, t2 || {});
            var e2 = this.options;
            e2.raw && e2.windowBits > 0 ? e2.windowBits = -e2.windowBits : e2.gzip && e2.windowBits > 0 && e2.windowBits < 16 && (e2.windowBits += 16), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new o(), this.strm.avail_out = 0;
            var r2 = n.deflateInit2(this.strm, e2.level, e2.method, e2.windowBits, e2.memLevel, e2.strategy);
            if (0 !== r2) throw new Error(a[r2]);
            if (e2.header && n.deflateSetHeader(this.strm, e2.header), e2.dictionary) {
              var f2;
              if (f2 = "string" == typeof e2.dictionary ? s.string2buf(e2.dictionary) : "[object ArrayBuffer]" === u.call(e2.dictionary) ? new Uint8Array(e2.dictionary) : e2.dictionary, 0 !== (r2 = n.deflateSetDictionary(this.strm, f2))) throw new Error(a[r2]);
              this.u = true;
            }
          }
          function f(t2, e2) {
            var r2 = new h(e2);
            if (r2.push(t2, true), r2.err) throw r2.msg || a[r2.err];
            return r2.result;
          }
          h.prototype.push = function(t2, e2) {
            var r2, a2, o2 = this.strm, h2 = this.options.chunkSize;
            if (this.ended) return false;
            a2 = e2 === ~~e2 ? e2 : true === e2 ? 4 : 0, "string" == typeof t2 ? o2.input = s.string2buf(t2) : "[object ArrayBuffer]" === u.call(t2) ? o2.input = new Uint8Array(t2) : o2.input = t2, o2.next_in = 0, o2.avail_in = o2.input.length;
            do {
              if (0 === o2.avail_out && (o2.output = new i.Buf8(h2), o2.next_out = 0, o2.avail_out = h2), 1 !== (r2 = n.deflate(o2, a2)) && 0 !== r2) return this.onEnd(r2), this.ended = true, false;
              0 !== o2.avail_out && (0 !== o2.avail_in || 4 !== a2 && 2 !== a2) || ("string" === this.options.to ? this.onData(s.buf2binstring(i.shrinkBuf(o2.output, o2.next_out))) : this.onData(i.shrinkBuf(o2.output, o2.next_out)));
            } while ((o2.avail_in > 0 || 0 === o2.avail_out) && 1 !== r2);
            return 4 === a2 ? (r2 = n.deflateEnd(this.strm), this.onEnd(r2), this.ended = true, 0 === r2) : 2 !== a2 || (this.onEnd(0), o2.avail_out = 0, true);
          }, h.prototype.onData = function(t2) {
            this.chunks.push(t2);
          }, h.prototype.onEnd = function(t2) {
            0 === t2 && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = i.flattenChunks(this.chunks)), this.chunks = [], this.err = t2, this.msg = this.strm.msg;
          }, e.Deflate = h, e.deflate = f, e.deflateRaw = function(t2, e2) {
            return (e2 = e2 || {}).raw = true, f(t2, e2);
          }, e.gzip = function(t2, e2) {
            return (e2 = e2 || {}).gzip = true, f(t2, e2);
          };
        }, 380: (t, e, r) => {
          var n = r(20), i = r(761), s = r(944), a = r(271), o = r(950), u = r(744), h = r(357), f = Object.prototype.toString;
          function c(t2) {
            if (!(this instanceof c)) return new c(t2);
            this.options = i.assign({ chunkSize: 16384, windowBits: 0, to: "" }, t2 || {});
            var e2 = this.options;
            e2.raw && e2.windowBits >= 0 && e2.windowBits < 16 && (e2.windowBits = -e2.windowBits, 0 === e2.windowBits && (e2.windowBits = -15)), !(e2.windowBits >= 0 && e2.windowBits < 16) || t2 && t2.windowBits || (e2.windowBits += 32), e2.windowBits > 15 && e2.windowBits < 48 && 0 == (15 & e2.windowBits) && (e2.windowBits |= 15), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new u(), this.strm.avail_out = 0;
            var r2 = n.inflateInit2(this.strm, e2.windowBits);
            if (r2 !== a.Z_OK) throw new Error(o[r2]);
            if (this.header = new h(), n.inflateGetHeader(this.strm, this.header), e2.dictionary && ("string" == typeof e2.dictionary ? e2.dictionary = s.string2buf(e2.dictionary) : "[object ArrayBuffer]" === f.call(e2.dictionary) && (e2.dictionary = new Uint8Array(e2.dictionary)), e2.raw && (r2 = n.inflateSetDictionary(this.strm, e2.dictionary)) !== a.Z_OK)) throw new Error(o[r2]);
          }
          function l(t2, e2) {
            var r2 = new c(e2);
            if (r2.push(t2, true), r2.err) throw r2.msg || o[r2.err];
            return r2.result;
          }
          c.prototype.push = function(t2, e2) {
            var r2, o2, u2, h2, c2, l2 = this.strm, p = this.options.chunkSize, d = this.options.dictionary, g = false;
            if (this.ended) return false;
            o2 = e2 === ~~e2 ? e2 : true === e2 ? a.Z_FINISH : a.Z_NO_FLUSH, "string" == typeof t2 ? l2.input = s.binstring2buf(t2) : "[object ArrayBuffer]" === f.call(t2) ? l2.input = new Uint8Array(t2) : l2.input = t2, l2.next_in = 0, l2.avail_in = l2.input.length;
            do {
              if (0 === l2.avail_out && (l2.output = new i.Buf8(p), l2.next_out = 0, l2.avail_out = p), (r2 = n.inflate(l2, a.Z_NO_FLUSH)) === a.Z_NEED_DICT && d && (r2 = n.inflateSetDictionary(this.strm, d)), r2 === a.Z_BUF_ERROR && true === g && (r2 = a.Z_OK, g = false), r2 !== a.Z_STREAM_END && r2 !== a.Z_OK) return this.onEnd(r2), this.ended = true, false;
              l2.next_out && (0 !== l2.avail_out && r2 !== a.Z_STREAM_END && (0 !== l2.avail_in || o2 !== a.Z_FINISH && o2 !== a.Z_SYNC_FLUSH) || ("string" === this.options.to ? (u2 = s.utf8border(l2.output, l2.next_out), h2 = l2.next_out - u2, c2 = s.buf2string(l2.output, u2), l2.next_out = h2, l2.avail_out = p - h2, h2 && i.arraySet(l2.output, l2.output, u2, h2, 0), this.onData(c2)) : this.onData(i.shrinkBuf(l2.output, l2.next_out)))), 0 === l2.avail_in && 0 === l2.avail_out && (g = true);
            } while ((l2.avail_in > 0 || 0 === l2.avail_out) && r2 !== a.Z_STREAM_END);
            return r2 === a.Z_STREAM_END && (o2 = a.Z_FINISH), o2 === a.Z_FINISH ? (r2 = n.inflateEnd(this.strm), this.onEnd(r2), this.ended = true, r2 === a.Z_OK) : o2 !== a.Z_SYNC_FLUSH || (this.onEnd(a.Z_OK), l2.avail_out = 0, true);
          }, c.prototype.onData = function(t2) {
            this.chunks.push(t2);
          }, c.prototype.onEnd = function(t2) {
            t2 === a.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = i.flattenChunks(this.chunks)), this.chunks = [], this.err = t2, this.msg = this.strm.msg;
          }, e.Inflate = c, e.inflate = l, e.inflateRaw = function(t2, e2) {
            return (e2 = e2 || {}).raw = true, l(t2, e2);
          }, e.ungzip = l;
        }, 761: (t, e) => {
          var r = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
          function n(t2, e2) {
            return Object.prototype.hasOwnProperty.call(t2, e2);
          }
          e.assign = function(t2) {
            for (var e2 = Array.prototype.slice.call(arguments, 1); e2.length; ) {
              var r2 = e2.shift();
              if (r2) {
                if ("object" != typeof r2) throw new TypeError(r2 + "must be non-object");
                for (var i2 in r2) n(r2, i2) && (t2[i2] = r2[i2]);
              }
            }
            return t2;
          }, e.shrinkBuf = function(t2, e2) {
            return t2.length === e2 ? t2 : t2.subarray ? t2.subarray(0, e2) : (t2.length = e2, t2);
          };
          var i = { arraySet: function(t2, e2, r2, n2, i2) {
            if (e2.subarray && t2.subarray) t2.set(e2.subarray(r2, r2 + n2), i2);
            else for (var s2 = 0; s2 < n2; s2++) t2[i2 + s2] = e2[r2 + s2];
          }, flattenChunks: function(t2) {
            var e2, r2, n2, i2, s2, a;
            for (n2 = 0, e2 = 0, r2 = t2.length; e2 < r2; e2++) n2 += t2[e2].length;
            for (a = new Uint8Array(n2), i2 = 0, e2 = 0, r2 = t2.length; e2 < r2; e2++) s2 = t2[e2], a.set(s2, i2), i2 += s2.length;
            return a;
          } }, s = { arraySet: function(t2, e2, r2, n2, i2) {
            for (var s2 = 0; s2 < n2; s2++) t2[i2 + s2] = e2[r2 + s2];
          }, flattenChunks: function(t2) {
            return [].concat.apply([], t2);
          } };
          e.setTyped = function(t2) {
            t2 ? (e.Buf8 = Uint8Array, e.Buf16 = Uint16Array, e.Buf32 = Int32Array, e.assign(e, i)) : (e.Buf8 = Array, e.Buf16 = Array, e.Buf32 = Array, e.assign(e, s));
          }, e.setTyped(r);
        }, 944: (t, e, r) => {
          var n = r(761), i = true, s = true;
          try {
            String.fromCharCode.apply(null, [0]);
          } catch (t2) {
            i = false;
          }
          try {
            String.fromCharCode.apply(null, new Uint8Array(1));
          } catch (t2) {
            s = false;
          }
          for (var a = new n.Buf8(256), o = 0; o < 256; o++) a[o] = o >= 252 ? 6 : o >= 248 ? 5 : o >= 240 ? 4 : o >= 224 ? 3 : o >= 192 ? 2 : 1;
          function u(t2, e2) {
            if (e2 < 65534 && (t2.subarray && s || !t2.subarray && i)) return String.fromCharCode.apply(null, n.shrinkBuf(t2, e2));
            for (var r2 = "", a2 = 0; a2 < e2; a2++) r2 += String.fromCharCode(t2[a2]);
            return r2;
          }
          a[254] = a[254] = 1, e.string2buf = function(t2) {
            var e2, r2, i2, s2, a2, o2 = t2.length, u2 = 0;
            for (s2 = 0; s2 < o2; s2++) 55296 == (64512 & (r2 = t2.charCodeAt(s2))) && s2 + 1 < o2 && 56320 == (64512 & (i2 = t2.charCodeAt(s2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (i2 - 56320), s2++), u2 += r2 < 128 ? 1 : r2 < 2048 ? 2 : r2 < 65536 ? 3 : 4;
            for (e2 = new n.Buf8(u2), a2 = 0, s2 = 0; a2 < u2; s2++) 55296 == (64512 & (r2 = t2.charCodeAt(s2))) && s2 + 1 < o2 && 56320 == (64512 & (i2 = t2.charCodeAt(s2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (i2 - 56320), s2++), r2 < 128 ? e2[a2++] = r2 : r2 < 2048 ? (e2[a2++] = 192 | r2 >>> 6, e2[a2++] = 128 | 63 & r2) : r2 < 65536 ? (e2[a2++] = 224 | r2 >>> 12, e2[a2++] = 128 | r2 >>> 6 & 63, e2[a2++] = 128 | 63 & r2) : (e2[a2++] = 240 | r2 >>> 18, e2[a2++] = 128 | r2 >>> 12 & 63, e2[a2++] = 128 | r2 >>> 6 & 63, e2[a2++] = 128 | 63 & r2);
            return e2;
          }, e.buf2binstring = function(t2) {
            return u(t2, t2.length);
          }, e.binstring2buf = function(t2) {
            for (var e2 = new n.Buf8(t2.length), r2 = 0, i2 = e2.length; r2 < i2; r2++) e2[r2] = t2.charCodeAt(r2);
            return e2;
          }, e.buf2string = function(t2, e2) {
            var r2, n2, i2, s2, o2 = e2 || t2.length, h = new Array(2 * o2);
            for (n2 = 0, r2 = 0; r2 < o2; ) if ((i2 = t2[r2++]) < 128) h[n2++] = i2;
            else if ((s2 = a[i2]) > 4) h[n2++] = 65533, r2 += s2 - 1;
            else {
              for (i2 &= 2 === s2 ? 31 : 3 === s2 ? 15 : 7; s2 > 1 && r2 < o2; ) i2 = i2 << 6 | 63 & t2[r2++], s2--;
              s2 > 1 ? h[n2++] = 65533 : i2 < 65536 ? h[n2++] = i2 : (i2 -= 65536, h[n2++] = 55296 | i2 >> 10 & 1023, h[n2++] = 56320 | 1023 & i2);
            }
            return u(h, n2);
          }, e.utf8border = function(t2, e2) {
            var r2;
            for ((e2 = e2 || t2.length) > t2.length && (e2 = t2.length), r2 = e2 - 1; r2 >= 0 && 128 == (192 & t2[r2]); ) r2--;
            return r2 < 0 || 0 === r2 ? e2 : r2 + a[t2[r2]] > e2 ? r2 : e2;
          };
        }, 562: (t) => {
          t.exports = function(t2, e, r, n) {
            for (var i = 65535 & t2 | 0, s = t2 >>> 16 & 65535 | 0, a = 0; 0 !== r; ) {
              r -= a = r > 2e3 ? 2e3 : r;
              do {
                s = s + (i = i + e[n++] | 0) | 0;
              } while (--a);
              i %= 65521, s %= 65521;
            }
            return i | s << 16 | 0;
          };
        }, 271: (t) => {
          t.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
        }, 299: (t) => {
          var e = function() {
            for (var t2, e2 = [], r = 0; r < 256; r++) {
              t2 = r;
              for (var n = 0; n < 8; n++) t2 = 1 & t2 ? 3988292384 ^ t2 >>> 1 : t2 >>> 1;
              e2[r] = t2;
            }
            return e2;
          }();
          t.exports = function(t2, r, n, i) {
            var s = e, a = i + n;
            t2 ^= -1;
            for (var o = i; o < a; o++) t2 = t2 >>> 8 ^ s[255 & (t2 ^ r[o])];
            return -1 ^ t2;
          };
        }, 789: (t, e, r) => {
          var n, i = r(761), s = r(564), a = r(562), o = r(299), u = r(950), h = -2, f = 258, c = 262, l = 103, p = 113, d = 666;
          function g(t2, e2) {
            return t2.msg = u[e2], e2;
          }
          function m(t2) {
            return (t2 << 1) - (t2 > 4 ? 9 : 0);
          }
          function _(t2) {
            for (var e2 = t2.length; --e2 >= 0; ) t2[e2] = 0;
          }
          function y(t2) {
            var e2 = t2.state, r2 = e2.pending;
            r2 > t2.avail_out && (r2 = t2.avail_out), 0 !== r2 && (i.arraySet(t2.output, e2.pending_buf, e2.pending_out, r2, t2.next_out), t2.next_out += r2, e2.pending_out += r2, t2.total_out += r2, t2.avail_out -= r2, e2.pending -= r2, 0 === e2.pending && (e2.pending_out = 0));
          }
          function v(t2, e2) {
            s.h(t2, t2.block_start >= 0 ? t2.block_start : -1, t2.strstart - t2.block_start, e2), t2.block_start = t2.strstart, y(t2.strm);
          }
          function b(t2, e2) {
            t2.pending_buf[t2.pending++] = e2;
          }
          function I(t2, e2) {
            t2.pending_buf[t2.pending++] = e2 >>> 8 & 255, t2.pending_buf[t2.pending++] = 255 & e2;
          }
          function w(t2, e2) {
            var r2, n2, i2 = t2.max_chain_length, s2 = t2.strstart, a2 = t2.prev_length, o2 = t2.nice_match, u2 = t2.strstart > t2.w_size - c ? t2.strstart - (t2.w_size - c) : 0, h2 = t2.window, l2 = t2.w_mask, p2 = t2.prev, d2 = t2.strstart + f, g2 = h2[s2 + a2 - 1], m2 = h2[s2 + a2];
            t2.prev_length >= t2.good_match && (i2 >>= 2), o2 > t2.lookahead && (o2 = t2.lookahead);
            do {
              if (h2[(r2 = e2) + a2] === m2 && h2[r2 + a2 - 1] === g2 && h2[r2] === h2[s2] && h2[++r2] === h2[s2 + 1]) {
                s2 += 2, r2++;
                do {
                } while (h2[++s2] === h2[++r2] && h2[++s2] === h2[++r2] && h2[++s2] === h2[++r2] && h2[++s2] === h2[++r2] && h2[++s2] === h2[++r2] && h2[++s2] === h2[++r2] && h2[++s2] === h2[++r2] && h2[++s2] === h2[++r2] && s2 < d2);
                if (n2 = f - (d2 - s2), s2 = d2 - f, n2 > a2) {
                  if (t2.match_start = e2, a2 = n2, n2 >= o2) break;
                  g2 = h2[s2 + a2 - 1], m2 = h2[s2 + a2];
                }
              }
            } while ((e2 = p2[e2 & l2]) > u2 && 0 != --i2);
            return a2 <= t2.lookahead ? a2 : t2.lookahead;
          }
          function E(t2) {
            var e2, r2, n2, s2, u2, h2, f2, l2, p2, d2, g2 = t2.w_size;
            do {
              if (s2 = t2.window_size - t2.lookahead - t2.strstart, t2.strstart >= g2 + (g2 - c)) {
                i.arraySet(t2.window, t2.window, g2, g2, 0), t2.match_start -= g2, t2.strstart -= g2, t2.block_start -= g2, e2 = r2 = t2.hash_size;
                do {
                  n2 = t2.head[--e2], t2.head[e2] = n2 >= g2 ? n2 - g2 : 0;
                } while (--r2);
                e2 = r2 = g2;
                do {
                  n2 = t2.prev[--e2], t2.prev[e2] = n2 >= g2 ? n2 - g2 : 0;
                } while (--r2);
                s2 += g2;
              }
              if (0 === t2.strm.avail_in) break;
              if (h2 = t2.strm, f2 = t2.window, l2 = t2.strstart + t2.lookahead, p2 = s2, d2 = void 0, (d2 = h2.avail_in) > p2 && (d2 = p2), r2 = 0 === d2 ? 0 : (h2.avail_in -= d2, i.arraySet(f2, h2.input, h2.next_in, d2, l2), 1 === h2.state.wrap ? h2.adler = a(h2.adler, f2, d2, l2) : 2 === h2.state.wrap && (h2.adler = o(h2.adler, f2, d2, l2)), h2.next_in += d2, h2.total_in += d2, d2), t2.lookahead += r2, t2.lookahead + t2.insert >= 3) for (u2 = t2.strstart - t2.insert, t2.ins_h = t2.window[u2], t2.ins_h = (t2.ins_h << t2.hash_shift ^ t2.window[u2 + 1]) & t2.hash_mask; t2.insert && (t2.ins_h = (t2.ins_h << t2.hash_shift ^ t2.window[u2 + 3 - 1]) & t2.hash_mask, t2.prev[u2 & t2.w_mask] = t2.head[t2.ins_h], t2.head[t2.ins_h] = u2, u2++, t2.insert--, !(t2.lookahead + t2.insert < 3)); ) ;
            } while (t2.lookahead < c && 0 !== t2.strm.avail_in);
          }
          function M(t2, e2) {
            for (var r2, n2; ; ) {
              if (t2.lookahead < c) {
                if (E(t2), t2.lookahead < c && 0 === e2) return 1;
                if (0 === t2.lookahead) break;
              }
              if (r2 = 0, t2.lookahead >= 3 && (t2.ins_h = (t2.ins_h << t2.hash_shift ^ t2.window[t2.strstart + 3 - 1]) & t2.hash_mask, r2 = t2.prev[t2.strstart & t2.w_mask] = t2.head[t2.ins_h], t2.head[t2.ins_h] = t2.strstart), 0 !== r2 && t2.strstart - r2 <= t2.w_size - c && (t2.match_length = w(t2, r2)), t2.match_length >= 3) if (n2 = s.l(t2, t2.strstart - t2.match_start, t2.match_length - 3), t2.lookahead -= t2.match_length, t2.match_length <= t2.max_lazy_match && t2.lookahead >= 3) {
                t2.match_length--;
                do {
                  t2.strstart++, t2.ins_h = (t2.ins_h << t2.hash_shift ^ t2.window[t2.strstart + 3 - 1]) & t2.hash_mask, r2 = t2.prev[t2.strstart & t2.w_mask] = t2.head[t2.ins_h], t2.head[t2.ins_h] = t2.strstart;
                } while (0 != --t2.match_length);
                t2.strstart++;
              } else t2.strstart += t2.match_length, t2.match_length = 0, t2.ins_h = t2.window[t2.strstart], t2.ins_h = (t2.ins_h << t2.hash_shift ^ t2.window[t2.strstart + 1]) & t2.hash_mask;
              else n2 = s.l(t2, 0, t2.window[t2.strstart]), t2.lookahead--, t2.strstart++;
              if (n2 && (v(t2, false), 0 === t2.strm.avail_out)) return 1;
            }
            return t2.insert = t2.strstart < 2 ? t2.strstart : 2, 4 === e2 ? (v(t2, true), 0 === t2.strm.avail_out ? 3 : 4) : t2.last_lit && (v(t2, false), 0 === t2.strm.avail_out) ? 1 : 2;
          }
          function A(t2, e2) {
            for (var r2, n2, i2; ; ) {
              if (t2.lookahead < c) {
                if (E(t2), t2.lookahead < c && 0 === e2) return 1;
                if (0 === t2.lookahead) break;
              }
              if (r2 = 0, t2.lookahead >= 3 && (t2.ins_h = (t2.ins_h << t2.hash_shift ^ t2.window[t2.strstart + 3 - 1]) & t2.hash_mask, r2 = t2.prev[t2.strstart & t2.w_mask] = t2.head[t2.ins_h], t2.head[t2.ins_h] = t2.strstart), t2.prev_length = t2.match_length, t2.prev_match = t2.match_start, t2.match_length = 2, 0 !== r2 && t2.prev_length < t2.max_lazy_match && t2.strstart - r2 <= t2.w_size - c && (t2.match_length = w(t2, r2), t2.match_length <= 5 && (1 === t2.strategy || 3 === t2.match_length && t2.strstart - t2.match_start > 4096) && (t2.match_length = 2)), t2.prev_length >= 3 && t2.match_length <= t2.prev_length) {
                i2 = t2.strstart + t2.lookahead - 3, n2 = s.l(t2, t2.strstart - 1 - t2.prev_match, t2.prev_length - 3), t2.lookahead -= t2.prev_length - 1, t2.prev_length -= 2;
                do {
                  ++t2.strstart <= i2 && (t2.ins_h = (t2.ins_h << t2.hash_shift ^ t2.window[t2.strstart + 3 - 1]) & t2.hash_mask, r2 = t2.prev[t2.strstart & t2.w_mask] = t2.head[t2.ins_h], t2.head[t2.ins_h] = t2.strstart);
                } while (0 != --t2.prev_length);
                if (t2.match_available = 0, t2.match_length = 2, t2.strstart++, n2 && (v(t2, false), 0 === t2.strm.avail_out)) return 1;
              } else if (t2.match_available) {
                if ((n2 = s.l(t2, 0, t2.window[t2.strstart - 1])) && v(t2, false), t2.strstart++, t2.lookahead--, 0 === t2.strm.avail_out) return 1;
              } else t2.match_available = 1, t2.strstart++, t2.lookahead--;
            }
            return t2.match_available && (n2 = s.l(t2, 0, t2.window[t2.strstart - 1]), t2.match_available = 0), t2.insert = t2.strstart < 2 ? t2.strstart : 2, 4 === e2 ? (v(t2, true), 0 === t2.strm.avail_out ? 3 : 4) : t2.last_lit && (v(t2, false), 0 === t2.strm.avail_out) ? 1 : 2;
          }
          function T(t2, e2, r2, n2, i2) {
            this.good_length = t2, this.max_lazy = e2, this.nice_length = r2, this.max_chain = n2, this.func = i2;
          }
          function S() {
            this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = 8, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new i.Buf16(1146), this.dyn_dtree = new i.Buf16(122), this.bl_tree = new i.Buf16(78), _(this.dyn_ltree), _(this.dyn_dtree), _(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new i.Buf16(16), this.heap = new i.Buf16(573), _(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new i.Buf16(573), _(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
          }
          function B(t2) {
            var e2;
            return t2 && t2.state ? (t2.total_in = t2.total_out = 0, t2.data_type = 2, (e2 = t2.state).pending = 0, e2.pending_out = 0, e2.wrap < 0 && (e2.wrap = -e2.wrap), e2.status = e2.wrap ? 42 : p, t2.adler = 2 === e2.wrap ? 0 : 1, e2.last_flush = 0, s.p(e2), 0) : g(t2, h);
          }
          function P(t2) {
            var e2, r2 = B(t2);
            return 0 === r2 && ((e2 = t2.state).window_size = 2 * e2.w_size, _(e2.head), e2.max_lazy_match = n[e2.level].max_lazy, e2.good_match = n[e2.level].good_length, e2.nice_match = n[e2.level].nice_length, e2.max_chain_length = n[e2.level].max_chain, e2.strstart = 0, e2.block_start = 0, e2.lookahead = 0, e2.insert = 0, e2.match_length = e2.prev_length = 2, e2.match_available = 0, e2.ins_h = 0), r2;
          }
          function R(t2, e2, r2, n2, s2, a2) {
            if (!t2) return h;
            var o2 = 1;
            if (-1 === e2 && (e2 = 6), n2 < 0 ? (o2 = 0, n2 = -n2) : n2 > 15 && (o2 = 2, n2 -= 16), s2 < 1 || s2 > 9 || 8 !== r2 || n2 < 8 || n2 > 15 || e2 < 0 || e2 > 9 || a2 < 0 || a2 > 4) return g(t2, h);
            8 === n2 && (n2 = 9);
            var u2 = new S();
            return t2.state = u2, u2.strm = t2, u2.wrap = o2, u2.gzhead = null, u2.w_bits = n2, u2.w_size = 1 << u2.w_bits, u2.w_mask = u2.w_size - 1, u2.hash_bits = s2 + 7, u2.hash_size = 1 << u2.hash_bits, u2.hash_mask = u2.hash_size - 1, u2.hash_shift = ~~((u2.hash_bits + 3 - 1) / 3), u2.window = new i.Buf8(2 * u2.w_size), u2.head = new i.Buf16(u2.hash_size), u2.prev = new i.Buf16(u2.w_size), u2.lit_bufsize = 1 << s2 + 6, u2.pending_buf_size = 4 * u2.lit_bufsize, u2.pending_buf = new i.Buf8(u2.pending_buf_size), u2.d_buf = 1 * u2.lit_bufsize, u2.l_buf = 3 * u2.lit_bufsize, u2.level = e2, u2.strategy = a2, u2.method = r2, P(t2);
          }
          n = [new T(0, 0, 0, 0, function(t2, e2) {
            var r2 = 65535;
            for (r2 > t2.pending_buf_size - 5 && (r2 = t2.pending_buf_size - 5); ; ) {
              if (t2.lookahead <= 1) {
                if (E(t2), 0 === t2.lookahead && 0 === e2) return 1;
                if (0 === t2.lookahead) break;
              }
              t2.strstart += t2.lookahead, t2.lookahead = 0;
              var n2 = t2.block_start + r2;
              if ((0 === t2.strstart || t2.strstart >= n2) && (t2.lookahead = t2.strstart - n2, t2.strstart = n2, v(t2, false), 0 === t2.strm.avail_out)) return 1;
              if (t2.strstart - t2.block_start >= t2.w_size - c && (v(t2, false), 0 === t2.strm.avail_out)) return 1;
            }
            return t2.insert = 0, 4 === e2 ? (v(t2, true), 0 === t2.strm.avail_out ? 3 : 4) : (t2.strstart > t2.block_start && (v(t2, false), t2.strm.avail_out), 1);
          }), new T(4, 4, 8, 4, M), new T(4, 5, 16, 8, M), new T(4, 6, 32, 32, M), new T(4, 4, 16, 16, A), new T(8, 16, 32, 32, A), new T(8, 16, 128, 128, A), new T(8, 32, 128, 256, A), new T(32, 128, 258, 1024, A), new T(32, 258, 258, 4096, A)], e.deflateInit = function(t2, e2) {
            return R(t2, e2, 8, 15, 8, 0);
          }, e.deflateInit2 = R, e.deflateReset = P, e.deflateResetKeep = B, e.deflateSetHeader = function(t2, e2) {
            return t2 && t2.state ? 2 !== t2.state.wrap ? h : (t2.state.gzhead = e2, 0) : h;
          }, e.deflate = function(t2, e2) {
            var r2, i2, a2, u2;
            if (!t2 || !t2.state || e2 > 5 || e2 < 0) return t2 ? g(t2, h) : h;
            if (i2 = t2.state, !t2.output || !t2.input && 0 !== t2.avail_in || i2.status === d && 4 !== e2) return g(t2, 0 === t2.avail_out ? -5 : h);
            if (i2.strm = t2, r2 = i2.last_flush, i2.last_flush = e2, 42 === i2.status) if (2 === i2.wrap) t2.adler = 0, b(i2, 31), b(i2, 139), b(i2, 8), i2.gzhead ? (b(i2, (i2.gzhead.text ? 1 : 0) + (i2.gzhead.hcrc ? 2 : 0) + (i2.gzhead.extra ? 4 : 0) + (i2.gzhead.name ? 8 : 0) + (i2.gzhead.comment ? 16 : 0)), b(i2, 255 & i2.gzhead.time), b(i2, i2.gzhead.time >> 8 & 255), b(i2, i2.gzhead.time >> 16 & 255), b(i2, i2.gzhead.time >> 24 & 255), b(i2, 9 === i2.level ? 2 : i2.strategy >= 2 || i2.level < 2 ? 4 : 0), b(i2, 255 & i2.gzhead.os), i2.gzhead.extra && i2.gzhead.extra.length && (b(i2, 255 & i2.gzhead.extra.length), b(i2, i2.gzhead.extra.length >> 8 & 255)), i2.gzhead.hcrc && (t2.adler = o(t2.adler, i2.pending_buf, i2.pending, 0)), i2.gzindex = 0, i2.status = 69) : (b(i2, 0), b(i2, 0), b(i2, 0), b(i2, 0), b(i2, 0), b(i2, 9 === i2.level ? 2 : i2.strategy >= 2 || i2.level < 2 ? 4 : 0), b(i2, 3), i2.status = p);
            else {
              var c2 = 8 + (i2.w_bits - 8 << 4) << 8;
              c2 |= (i2.strategy >= 2 || i2.level < 2 ? 0 : i2.level < 6 ? 1 : 6 === i2.level ? 2 : 3) << 6, 0 !== i2.strstart && (c2 |= 32), c2 += 31 - c2 % 31, i2.status = p, I(i2, c2), 0 !== i2.strstart && (I(i2, t2.adler >>> 16), I(i2, 65535 & t2.adler)), t2.adler = 1;
            }
            if (69 === i2.status) if (i2.gzhead.extra) {
              for (a2 = i2.pending; i2.gzindex < (65535 & i2.gzhead.extra.length) && (i2.pending !== i2.pending_buf_size || (i2.gzhead.hcrc && i2.pending > a2 && (t2.adler = o(t2.adler, i2.pending_buf, i2.pending - a2, a2)), y(t2), a2 = i2.pending, i2.pending !== i2.pending_buf_size)); ) b(i2, 255 & i2.gzhead.extra[i2.gzindex]), i2.gzindex++;
              i2.gzhead.hcrc && i2.pending > a2 && (t2.adler = o(t2.adler, i2.pending_buf, i2.pending - a2, a2)), i2.gzindex === i2.gzhead.extra.length && (i2.gzindex = 0, i2.status = 73);
            } else i2.status = 73;
            if (73 === i2.status) if (i2.gzhead.name) {
              a2 = i2.pending;
              do {
                if (i2.pending === i2.pending_buf_size && (i2.gzhead.hcrc && i2.pending > a2 && (t2.adler = o(t2.adler, i2.pending_buf, i2.pending - a2, a2)), y(t2), a2 = i2.pending, i2.pending === i2.pending_buf_size)) {
                  u2 = 1;
                  break;
                }
                u2 = i2.gzindex < i2.gzhead.name.length ? 255 & i2.gzhead.name.charCodeAt(i2.gzindex++) : 0, b(i2, u2);
              } while (0 !== u2);
              i2.gzhead.hcrc && i2.pending > a2 && (t2.adler = o(t2.adler, i2.pending_buf, i2.pending - a2, a2)), 0 === u2 && (i2.gzindex = 0, i2.status = 91);
            } else i2.status = 91;
            if (91 === i2.status) if (i2.gzhead.comment) {
              a2 = i2.pending;
              do {
                if (i2.pending === i2.pending_buf_size && (i2.gzhead.hcrc && i2.pending > a2 && (t2.adler = o(t2.adler, i2.pending_buf, i2.pending - a2, a2)), y(t2), a2 = i2.pending, i2.pending === i2.pending_buf_size)) {
                  u2 = 1;
                  break;
                }
                u2 = i2.gzindex < i2.gzhead.comment.length ? 255 & i2.gzhead.comment.charCodeAt(i2.gzindex++) : 0, b(i2, u2);
              } while (0 !== u2);
              i2.gzhead.hcrc && i2.pending > a2 && (t2.adler = o(t2.adler, i2.pending_buf, i2.pending - a2, a2)), 0 === u2 && (i2.status = l);
            } else i2.status = l;
            if (i2.status === l && (i2.gzhead.hcrc ? (i2.pending + 2 > i2.pending_buf_size && y(t2), i2.pending + 2 <= i2.pending_buf_size && (b(i2, 255 & t2.adler), b(i2, t2.adler >> 8 & 255), t2.adler = 0, i2.status = p)) : i2.status = p), 0 !== i2.pending) {
              if (y(t2), 0 === t2.avail_out) return i2.last_flush = -1, 0;
            } else if (0 === t2.avail_in && m(e2) <= m(r2) && 4 !== e2) return g(t2, -5);
            if (i2.status === d && 0 !== t2.avail_in) return g(t2, -5);
            if (0 !== t2.avail_in || 0 !== i2.lookahead || 0 !== e2 && i2.status !== d) {
              var w2 = 2 === i2.strategy ? function(t3, e3) {
                for (var r3; ; ) {
                  if (0 === t3.lookahead && (E(t3), 0 === t3.lookahead)) {
                    if (0 === e3) return 1;
                    break;
                  }
                  if (t3.match_length = 0, r3 = s.l(t3, 0, t3.window[t3.strstart]), t3.lookahead--, t3.strstart++, r3 && (v(t3, false), 0 === t3.strm.avail_out)) return 1;
                }
                return t3.insert = 0, 4 === e3 ? (v(t3, true), 0 === t3.strm.avail_out ? 3 : 4) : t3.last_lit && (v(t3, false), 0 === t3.strm.avail_out) ? 1 : 2;
              }(i2, e2) : 3 === i2.strategy ? function(t3, e3) {
                for (var r3, n2, i3, a3, o2 = t3.window; ; ) {
                  if (t3.lookahead <= f) {
                    if (E(t3), t3.lookahead <= f && 0 === e3) return 1;
                    if (0 === t3.lookahead) break;
                  }
                  if (t3.match_length = 0, t3.lookahead >= 3 && t3.strstart > 0 && (n2 = o2[i3 = t3.strstart - 1]) === o2[++i3] && n2 === o2[++i3] && n2 === o2[++i3]) {
                    a3 = t3.strstart + f;
                    do {
                    } while (n2 === o2[++i3] && n2 === o2[++i3] && n2 === o2[++i3] && n2 === o2[++i3] && n2 === o2[++i3] && n2 === o2[++i3] && n2 === o2[++i3] && n2 === o2[++i3] && i3 < a3);
                    t3.match_length = f - (a3 - i3), t3.match_length > t3.lookahead && (t3.match_length = t3.lookahead);
                  }
                  if (t3.match_length >= 3 ? (r3 = s.l(t3, 1, t3.match_length - 3), t3.lookahead -= t3.match_length, t3.strstart += t3.match_length, t3.match_length = 0) : (r3 = s.l(t3, 0, t3.window[t3.strstart]), t3.lookahead--, t3.strstart++), r3 && (v(t3, false), 0 === t3.strm.avail_out)) return 1;
                }
                return t3.insert = 0, 4 === e3 ? (v(t3, true), 0 === t3.strm.avail_out ? 3 : 4) : t3.last_lit && (v(t3, false), 0 === t3.strm.avail_out) ? 1 : 2;
              }(i2, e2) : n[i2.level].func(i2, e2);
              if (3 !== w2 && 4 !== w2 || (i2.status = d), 1 === w2 || 3 === w2) return 0 === t2.avail_out && (i2.last_flush = -1), 0;
              if (2 === w2 && (1 === e2 ? s.g(i2) : 5 !== e2 && (s.m(i2, 0, 0, false), 3 === e2 && (_(i2.head), 0 === i2.lookahead && (i2.strstart = 0, i2.block_start = 0, i2.insert = 0))), y(t2), 0 === t2.avail_out)) return i2.last_flush = -1, 0;
            }
            return 4 !== e2 ? 0 : i2.wrap <= 0 ? 1 : (2 === i2.wrap ? (b(i2, 255 & t2.adler), b(i2, t2.adler >> 8 & 255), b(i2, t2.adler >> 16 & 255), b(i2, t2.adler >> 24 & 255), b(i2, 255 & t2.total_in), b(i2, t2.total_in >> 8 & 255), b(i2, t2.total_in >> 16 & 255), b(i2, t2.total_in >> 24 & 255)) : (I(i2, t2.adler >>> 16), I(i2, 65535 & t2.adler)), y(t2), i2.wrap > 0 && (i2.wrap = -i2.wrap), 0 !== i2.pending ? 0 : 1);
          }, e.deflateEnd = function(t2) {
            var e2;
            return t2 && t2.state ? 42 !== (e2 = t2.state.status) && 69 !== e2 && 73 !== e2 && 91 !== e2 && e2 !== l && e2 !== p && e2 !== d ? g(t2, h) : (t2.state = null, e2 === p ? g(t2, -3) : 0) : h;
          }, e.deflateSetDictionary = function(t2, e2) {
            var r2, n2, s2, o2, u2, f2, c2, l2, p2 = e2.length;
            if (!t2 || !t2.state) return h;
            if (2 === (o2 = (r2 = t2.state).wrap) || 1 === o2 && 42 !== r2.status || r2.lookahead) return h;
            for (1 === o2 && (t2.adler = a(t2.adler, e2, p2, 0)), r2.wrap = 0, p2 >= r2.w_size && (0 === o2 && (_(r2.head), r2.strstart = 0, r2.block_start = 0, r2.insert = 0), l2 = new i.Buf8(r2.w_size), i.arraySet(l2, e2, p2 - r2.w_size, r2.w_size, 0), e2 = l2, p2 = r2.w_size), u2 = t2.avail_in, f2 = t2.next_in, c2 = t2.input, t2.avail_in = p2, t2.next_in = 0, t2.input = e2, E(r2); r2.lookahead >= 3; ) {
              n2 = r2.strstart, s2 = r2.lookahead - 2;
              do {
                r2.ins_h = (r2.ins_h << r2.hash_shift ^ r2.window[n2 + 3 - 1]) & r2.hash_mask, r2.prev[n2 & r2.w_mask] = r2.head[r2.ins_h], r2.head[r2.ins_h] = n2, n2++;
              } while (--s2);
              r2.strstart = n2, r2.lookahead = 2, E(r2);
            }
            return r2.strstart += r2.lookahead, r2.block_start = r2.strstart, r2.insert = r2.lookahead, r2.lookahead = 0, r2.match_length = r2.prev_length = 2, r2.match_available = 0, t2.next_in = f2, t2.input = c2, t2.avail_in = u2, r2.wrap = o2, 0;
          }, e.deflateInfo = "pako deflate (from Nodeca project)";
        }, 357: (t) => {
          t.exports = function() {
            this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = false;
          };
        }, 980: (t) => {
          t.exports = function(t2, e) {
            var r, n, i, s, a, o, u, h, f, c, l, p, d, g, m, _, y, v, b, I, w, E, M, A, T;
            r = t2.state, n = t2.next_in, A = t2.input, i = n + (t2.avail_in - 5), s = t2.next_out, T = t2.output, a = s - (e - t2.avail_out), o = s + (t2.avail_out - 257), u = r.dmax, h = r.wsize, f = r.whave, c = r.wnext, l = r.window, p = r.hold, d = r.bits, g = r.lencode, m = r.distcode, _ = (1 << r.lenbits) - 1, y = (1 << r.distbits) - 1;
            t: do {
              d < 15 && (p += A[n++] << d, d += 8, p += A[n++] << d, d += 8), v = g[p & _];
              e: for (; ; ) {
                if (p >>>= b = v >>> 24, d -= b, 0 == (b = v >>> 16 & 255)) T[s++] = 65535 & v;
                else {
                  if (!(16 & b)) {
                    if (0 == (64 & b)) {
                      v = g[(65535 & v) + (p & (1 << b) - 1)];
                      continue e;
                    }
                    if (32 & b) {
                      r.mode = 12;
                      break t;
                    }
                    t2.msg = "invalid literal/length code", r.mode = 30;
                    break t;
                  }
                  I = 65535 & v, (b &= 15) && (d < b && (p += A[n++] << d, d += 8), I += p & (1 << b) - 1, p >>>= b, d -= b), d < 15 && (p += A[n++] << d, d += 8, p += A[n++] << d, d += 8), v = m[p & y];
                  r: for (; ; ) {
                    if (p >>>= b = v >>> 24, d -= b, !(16 & (b = v >>> 16 & 255))) {
                      if (0 == (64 & b)) {
                        v = m[(65535 & v) + (p & (1 << b) - 1)];
                        continue r;
                      }
                      t2.msg = "invalid distance code", r.mode = 30;
                      break t;
                    }
                    if (w = 65535 & v, d < (b &= 15) && (p += A[n++] << d, (d += 8) < b && (p += A[n++] << d, d += 8)), (w += p & (1 << b) - 1) > u) {
                      t2.msg = "invalid distance too far back", r.mode = 30;
                      break t;
                    }
                    if (p >>>= b, d -= b, w > (b = s - a)) {
                      if ((b = w - b) > f && r.sane) {
                        t2.msg = "invalid distance too far back", r.mode = 30;
                        break t;
                      }
                      if (E = 0, M = l, 0 === c) {
                        if (E += h - b, b < I) {
                          I -= b;
                          do {
                            T[s++] = l[E++];
                          } while (--b);
                          E = s - w, M = T;
                        }
                      } else if (c < b) {
                        if (E += h + c - b, (b -= c) < I) {
                          I -= b;
                          do {
                            T[s++] = l[E++];
                          } while (--b);
                          if (E = 0, c < I) {
                            I -= b = c;
                            do {
                              T[s++] = l[E++];
                            } while (--b);
                            E = s - w, M = T;
                          }
                        }
                      } else if (E += c - b, b < I) {
                        I -= b;
                        do {
                          T[s++] = l[E++];
                        } while (--b);
                        E = s - w, M = T;
                      }
                      for (; I > 2; ) T[s++] = M[E++], T[s++] = M[E++], T[s++] = M[E++], I -= 3;
                      I && (T[s++] = M[E++], I > 1 && (T[s++] = M[E++]));
                    } else {
                      E = s - w;
                      do {
                        T[s++] = T[E++], T[s++] = T[E++], T[s++] = T[E++], I -= 3;
                      } while (I > 2);
                      I && (T[s++] = T[E++], I > 1 && (T[s++] = T[E++]));
                    }
                    break;
                  }
                }
                break;
              }
            } while (n < i && s < o);
            n -= I = d >> 3, p &= (1 << (d -= I << 3)) - 1, t2.next_in = n, t2.next_out = s, t2.avail_in = n < i ? i - n + 5 : 5 - (n - i), t2.avail_out = s < o ? o - s + 257 : 257 - (s - o), r.hold = p, r.bits = d;
          };
        }, 20: (t, e, r) => {
          var n = r(761), i = r(562), s = r(299), a = r(980), o = r(881), u = -2, h = 12, f = 30;
          function c(t2) {
            return (t2 >>> 24 & 255) + (t2 >>> 8 & 65280) + ((65280 & t2) << 8) + ((255 & t2) << 24);
          }
          function l() {
            this.mode = 0, this.last = false, this.wrap = 0, this.havedict = false, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new n.Buf16(320), this.work = new n.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
          }
          function p(t2) {
            var e2;
            return t2 && t2.state ? (e2 = t2.state, t2.total_in = t2.total_out = e2.total = 0, t2.msg = "", e2.wrap && (t2.adler = 1 & e2.wrap), e2.mode = 1, e2.last = 0, e2.havedict = 0, e2.dmax = 32768, e2.head = null, e2.hold = 0, e2.bits = 0, e2.lencode = e2.lendyn = new n.Buf32(852), e2.distcode = e2.distdyn = new n.Buf32(592), e2.sane = 1, e2.back = -1, 0) : u;
          }
          function d(t2) {
            var e2;
            return t2 && t2.state ? ((e2 = t2.state).wsize = 0, e2.whave = 0, e2.wnext = 0, p(t2)) : u;
          }
          function g(t2, e2) {
            var r2, n2;
            return t2 && t2.state ? (n2 = t2.state, e2 < 0 ? (r2 = 0, e2 = -e2) : (r2 = 1 + (e2 >> 4), e2 < 48 && (e2 &= 15)), e2 && (e2 < 8 || e2 > 15) ? u : (null !== n2.window && n2.wbits !== e2 && (n2.window = null), n2.wrap = r2, n2.wbits = e2, d(t2))) : u;
          }
          function m(t2, e2) {
            var r2, n2;
            return t2 ? (n2 = new l(), t2.state = n2, n2.window = null, 0 !== (r2 = g(t2, e2)) && (t2.state = null), r2) : u;
          }
          var _, y, v = true;
          function b(t2) {
            if (v) {
              var e2;
              for (_ = new n.Buf32(512), y = new n.Buf32(32), e2 = 0; e2 < 144; ) t2.lens[e2++] = 8;
              for (; e2 < 256; ) t2.lens[e2++] = 9;
              for (; e2 < 280; ) t2.lens[e2++] = 7;
              for (; e2 < 288; ) t2.lens[e2++] = 8;
              for (o(1, t2.lens, 0, 288, _, 0, t2.work, { bits: 9 }), e2 = 0; e2 < 32; ) t2.lens[e2++] = 5;
              o(2, t2.lens, 0, 32, y, 0, t2.work, { bits: 5 }), v = false;
            }
            t2.lencode = _, t2.lenbits = 9, t2.distcode = y, t2.distbits = 5;
          }
          function I(t2, e2, r2, i2) {
            var s2, a2 = t2.state;
            return null === a2.window && (a2.wsize = 1 << a2.wbits, a2.wnext = 0, a2.whave = 0, a2.window = new n.Buf8(a2.wsize)), i2 >= a2.wsize ? (n.arraySet(a2.window, e2, r2 - a2.wsize, a2.wsize, 0), a2.wnext = 0, a2.whave = a2.wsize) : ((s2 = a2.wsize - a2.wnext) > i2 && (s2 = i2), n.arraySet(a2.window, e2, r2 - i2, s2, a2.wnext), (i2 -= s2) ? (n.arraySet(a2.window, e2, r2 - i2, i2, 0), a2.wnext = i2, a2.whave = a2.wsize) : (a2.wnext += s2, a2.wnext === a2.wsize && (a2.wnext = 0), a2.whave < a2.wsize && (a2.whave += s2))), 0;
          }
          e.inflateReset = d, e.inflateReset2 = g, e.inflateResetKeep = p, e.inflateInit = function(t2) {
            return m(t2, 15);
          }, e.inflateInit2 = m, e.inflate = function(t2, e2) {
            var r2, l2, p2, d2, g2, m2, _2, y2, v2, w, E, M, A, T, S, B, P, R, D, O, N, C, k, x, U = 0, z = new n.Buf8(4), j = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
            if (!t2 || !t2.state || !t2.output || !t2.input && 0 !== t2.avail_in) return u;
            (r2 = t2.state).mode === h && (r2.mode = 13), g2 = t2.next_out, p2 = t2.output, _2 = t2.avail_out, d2 = t2.next_in, l2 = t2.input, m2 = t2.avail_in, y2 = r2.hold, v2 = r2.bits, w = m2, E = _2, C = 0;
            t: for (; ; ) switch (r2.mode) {
              case 1:
                if (0 === r2.wrap) {
                  r2.mode = 13;
                  break;
                }
                for (; v2 < 16; ) {
                  if (0 === m2) break t;
                  m2--, y2 += l2[d2++] << v2, v2 += 8;
                }
                if (2 & r2.wrap && 35615 === y2) {
                  r2.check = 0, z[0] = 255 & y2, z[1] = y2 >>> 8 & 255, r2.check = s(r2.check, z, 2, 0), y2 = 0, v2 = 0, r2.mode = 2;
                  break;
                }
                if (r2.flags = 0, r2.head && (r2.head.done = false), !(1 & r2.wrap) || (((255 & y2) << 8) + (y2 >> 8)) % 31) {
                  t2.msg = "incorrect header check", r2.mode = f;
                  break;
                }
                if (8 != (15 & y2)) {
                  t2.msg = "unknown compression method", r2.mode = f;
                  break;
                }
                if (v2 -= 4, N = 8 + (15 & (y2 >>>= 4)), 0 === r2.wbits) r2.wbits = N;
                else if (N > r2.wbits) {
                  t2.msg = "invalid window size", r2.mode = f;
                  break;
                }
                r2.dmax = 1 << N, t2.adler = r2.check = 1, r2.mode = 512 & y2 ? 10 : h, y2 = 0, v2 = 0;
                break;
              case 2:
                for (; v2 < 16; ) {
                  if (0 === m2) break t;
                  m2--, y2 += l2[d2++] << v2, v2 += 8;
                }
                if (r2.flags = y2, 8 != (255 & r2.flags)) {
                  t2.msg = "unknown compression method", r2.mode = f;
                  break;
                }
                if (57344 & r2.flags) {
                  t2.msg = "unknown header flags set", r2.mode = f;
                  break;
                }
                r2.head && (r2.head.text = y2 >> 8 & 1), 512 & r2.flags && (z[0] = 255 & y2, z[1] = y2 >>> 8 & 255, r2.check = s(r2.check, z, 2, 0)), y2 = 0, v2 = 0, r2.mode = 3;
              case 3:
                for (; v2 < 32; ) {
                  if (0 === m2) break t;
                  m2--, y2 += l2[d2++] << v2, v2 += 8;
                }
                r2.head && (r2.head.time = y2), 512 & r2.flags && (z[0] = 255 & y2, z[1] = y2 >>> 8 & 255, z[2] = y2 >>> 16 & 255, z[3] = y2 >>> 24 & 255, r2.check = s(r2.check, z, 4, 0)), y2 = 0, v2 = 0, r2.mode = 4;
              case 4:
                for (; v2 < 16; ) {
                  if (0 === m2) break t;
                  m2--, y2 += l2[d2++] << v2, v2 += 8;
                }
                r2.head && (r2.head.xflags = 255 & y2, r2.head.os = y2 >> 8), 512 & r2.flags && (z[0] = 255 & y2, z[1] = y2 >>> 8 & 255, r2.check = s(r2.check, z, 2, 0)), y2 = 0, v2 = 0, r2.mode = 5;
              case 5:
                if (1024 & r2.flags) {
                  for (; v2 < 16; ) {
                    if (0 === m2) break t;
                    m2--, y2 += l2[d2++] << v2, v2 += 8;
                  }
                  r2.length = y2, r2.head && (r2.head.extra_len = y2), 512 & r2.flags && (z[0] = 255 & y2, z[1] = y2 >>> 8 & 255, r2.check = s(r2.check, z, 2, 0)), y2 = 0, v2 = 0;
                } else r2.head && (r2.head.extra = null);
                r2.mode = 6;
              case 6:
                if (1024 & r2.flags && ((M = r2.length) > m2 && (M = m2), M && (r2.head && (N = r2.head.extra_len - r2.length, r2.head.extra || (r2.head.extra = new Array(r2.head.extra_len)), n.arraySet(r2.head.extra, l2, d2, M, N)), 512 & r2.flags && (r2.check = s(r2.check, l2, M, d2)), m2 -= M, d2 += M, r2.length -= M), r2.length)) break t;
                r2.length = 0, r2.mode = 7;
              case 7:
                if (2048 & r2.flags) {
                  if (0 === m2) break t;
                  M = 0;
                  do {
                    N = l2[d2 + M++], r2.head && N && r2.length < 65536 && (r2.head.name += String.fromCharCode(N));
                  } while (N && M < m2);
                  if (512 & r2.flags && (r2.check = s(r2.check, l2, M, d2)), m2 -= M, d2 += M, N) break t;
                } else r2.head && (r2.head.name = null);
                r2.length = 0, r2.mode = 8;
              case 8:
                if (4096 & r2.flags) {
                  if (0 === m2) break t;
                  M = 0;
                  do {
                    N = l2[d2 + M++], r2.head && N && r2.length < 65536 && (r2.head.comment += String.fromCharCode(N));
                  } while (N && M < m2);
                  if (512 & r2.flags && (r2.check = s(r2.check, l2, M, d2)), m2 -= M, d2 += M, N) break t;
                } else r2.head && (r2.head.comment = null);
                r2.mode = 9;
              case 9:
                if (512 & r2.flags) {
                  for (; v2 < 16; ) {
                    if (0 === m2) break t;
                    m2--, y2 += l2[d2++] << v2, v2 += 8;
                  }
                  if (y2 !== (65535 & r2.check)) {
                    t2.msg = "header crc mismatch", r2.mode = f;
                    break;
                  }
                  y2 = 0, v2 = 0;
                }
                r2.head && (r2.head.hcrc = r2.flags >> 9 & 1, r2.head.done = true), t2.adler = r2.check = 0, r2.mode = h;
                break;
              case 10:
                for (; v2 < 32; ) {
                  if (0 === m2) break t;
                  m2--, y2 += l2[d2++] << v2, v2 += 8;
                }
                t2.adler = r2.check = c(y2), y2 = 0, v2 = 0, r2.mode = 11;
              case 11:
                if (0 === r2.havedict) return t2.next_out = g2, t2.avail_out = _2, t2.next_in = d2, t2.avail_in = m2, r2.hold = y2, r2.bits = v2, 2;
                t2.adler = r2.check = 1, r2.mode = h;
              case h:
                if (5 === e2 || 6 === e2) break t;
              case 13:
                if (r2.last) {
                  y2 >>>= 7 & v2, v2 -= 7 & v2, r2.mode = 27;
                  break;
                }
                for (; v2 < 3; ) {
                  if (0 === m2) break t;
                  m2--, y2 += l2[d2++] << v2, v2 += 8;
                }
                switch (r2.last = 1 & y2, v2 -= 1, 3 & (y2 >>>= 1)) {
                  case 0:
                    r2.mode = 14;
                    break;
                  case 1:
                    if (b(r2), r2.mode = 20, 6 === e2) {
                      y2 >>>= 2, v2 -= 2;
                      break t;
                    }
                    break;
                  case 2:
                    r2.mode = 17;
                    break;
                  case 3:
                    t2.msg = "invalid block type", r2.mode = f;
                }
                y2 >>>= 2, v2 -= 2;
                break;
              case 14:
                for (y2 >>>= 7 & v2, v2 -= 7 & v2; v2 < 32; ) {
                  if (0 === m2) break t;
                  m2--, y2 += l2[d2++] << v2, v2 += 8;
                }
                if ((65535 & y2) != (y2 >>> 16 ^ 65535)) {
                  t2.msg = "invalid stored block lengths", r2.mode = f;
                  break;
                }
                if (r2.length = 65535 & y2, y2 = 0, v2 = 0, r2.mode = 15, 6 === e2) break t;
              case 15:
                r2.mode = 16;
              case 16:
                if (M = r2.length) {
                  if (M > m2 && (M = m2), M > _2 && (M = _2), 0 === M) break t;
                  n.arraySet(p2, l2, d2, M, g2), m2 -= M, d2 += M, _2 -= M, g2 += M, r2.length -= M;
                  break;
                }
                r2.mode = h;
                break;
              case 17:
                for (; v2 < 14; ) {
                  if (0 === m2) break t;
                  m2--, y2 += l2[d2++] << v2, v2 += 8;
                }
                if (r2.nlen = 257 + (31 & y2), y2 >>>= 5, v2 -= 5, r2.ndist = 1 + (31 & y2), y2 >>>= 5, v2 -= 5, r2.ncode = 4 + (15 & y2), y2 >>>= 4, v2 -= 4, r2.nlen > 286 || r2.ndist > 30) {
                  t2.msg = "too many length or distance symbols", r2.mode = f;
                  break;
                }
                r2.have = 0, r2.mode = 18;
              case 18:
                for (; r2.have < r2.ncode; ) {
                  for (; v2 < 3; ) {
                    if (0 === m2) break t;
                    m2--, y2 += l2[d2++] << v2, v2 += 8;
                  }
                  r2.lens[j[r2.have++]] = 7 & y2, y2 >>>= 3, v2 -= 3;
                }
                for (; r2.have < 19; ) r2.lens[j[r2.have++]] = 0;
                if (r2.lencode = r2.lendyn, r2.lenbits = 7, k = { bits: r2.lenbits }, C = o(0, r2.lens, 0, 19, r2.lencode, 0, r2.work, k), r2.lenbits = k.bits, C) {
                  t2.msg = "invalid code lengths set", r2.mode = f;
                  break;
                }
                r2.have = 0, r2.mode = 19;
              case 19:
                for (; r2.have < r2.nlen + r2.ndist; ) {
                  for (; B = (U = r2.lencode[y2 & (1 << r2.lenbits) - 1]) >>> 16 & 255, P = 65535 & U, !((S = U >>> 24) <= v2); ) {
                    if (0 === m2) break t;
                    m2--, y2 += l2[d2++] << v2, v2 += 8;
                  }
                  if (P < 16) y2 >>>= S, v2 -= S, r2.lens[r2.have++] = P;
                  else {
                    if (16 === P) {
                      for (x = S + 2; v2 < x; ) {
                        if (0 === m2) break t;
                        m2--, y2 += l2[d2++] << v2, v2 += 8;
                      }
                      if (y2 >>>= S, v2 -= S, 0 === r2.have) {
                        t2.msg = "invalid bit length repeat", r2.mode = f;
                        break;
                      }
                      N = r2.lens[r2.have - 1], M = 3 + (3 & y2), y2 >>>= 2, v2 -= 2;
                    } else if (17 === P) {
                      for (x = S + 3; v2 < x; ) {
                        if (0 === m2) break t;
                        m2--, y2 += l2[d2++] << v2, v2 += 8;
                      }
                      v2 -= S, N = 0, M = 3 + (7 & (y2 >>>= S)), y2 >>>= 3, v2 -= 3;
                    } else {
                      for (x = S + 7; v2 < x; ) {
                        if (0 === m2) break t;
                        m2--, y2 += l2[d2++] << v2, v2 += 8;
                      }
                      v2 -= S, N = 0, M = 11 + (127 & (y2 >>>= S)), y2 >>>= 7, v2 -= 7;
                    }
                    if (r2.have + M > r2.nlen + r2.ndist) {
                      t2.msg = "invalid bit length repeat", r2.mode = f;
                      break;
                    }
                    for (; M--; ) r2.lens[r2.have++] = N;
                  }
                }
                if (r2.mode === f) break;
                if (0 === r2.lens[256]) {
                  t2.msg = "invalid code -- missing end-of-block", r2.mode = f;
                  break;
                }
                if (r2.lenbits = 9, k = { bits: r2.lenbits }, C = o(1, r2.lens, 0, r2.nlen, r2.lencode, 0, r2.work, k), r2.lenbits = k.bits, C) {
                  t2.msg = "invalid literal/lengths set", r2.mode = f;
                  break;
                }
                if (r2.distbits = 6, r2.distcode = r2.distdyn, k = { bits: r2.distbits }, C = o(2, r2.lens, r2.nlen, r2.ndist, r2.distcode, 0, r2.work, k), r2.distbits = k.bits, C) {
                  t2.msg = "invalid distances set", r2.mode = f;
                  break;
                }
                if (r2.mode = 20, 6 === e2) break t;
              case 20:
                r2.mode = 21;
              case 21:
                if (m2 >= 6 && _2 >= 258) {
                  t2.next_out = g2, t2.avail_out = _2, t2.next_in = d2, t2.avail_in = m2, r2.hold = y2, r2.bits = v2, a(t2, E), g2 = t2.next_out, p2 = t2.output, _2 = t2.avail_out, d2 = t2.next_in, l2 = t2.input, m2 = t2.avail_in, y2 = r2.hold, v2 = r2.bits, r2.mode === h && (r2.back = -1);
                  break;
                }
                for (r2.back = 0; B = (U = r2.lencode[y2 & (1 << r2.lenbits) - 1]) >>> 16 & 255, P = 65535 & U, !((S = U >>> 24) <= v2); ) {
                  if (0 === m2) break t;
                  m2--, y2 += l2[d2++] << v2, v2 += 8;
                }
                if (B && 0 == (240 & B)) {
                  for (R = S, D = B, O = P; B = (U = r2.lencode[O + ((y2 & (1 << R + D) - 1) >> R)]) >>> 16 & 255, P = 65535 & U, !(R + (S = U >>> 24) <= v2); ) {
                    if (0 === m2) break t;
                    m2--, y2 += l2[d2++] << v2, v2 += 8;
                  }
                  y2 >>>= R, v2 -= R, r2.back += R;
                }
                if (y2 >>>= S, v2 -= S, r2.back += S, r2.length = P, 0 === B) {
                  r2.mode = 26;
                  break;
                }
                if (32 & B) {
                  r2.back = -1, r2.mode = h;
                  break;
                }
                if (64 & B) {
                  t2.msg = "invalid literal/length code", r2.mode = f;
                  break;
                }
                r2.extra = 15 & B, r2.mode = 22;
              case 22:
                if (r2.extra) {
                  for (x = r2.extra; v2 < x; ) {
                    if (0 === m2) break t;
                    m2--, y2 += l2[d2++] << v2, v2 += 8;
                  }
                  r2.length += y2 & (1 << r2.extra) - 1, y2 >>>= r2.extra, v2 -= r2.extra, r2.back += r2.extra;
                }
                r2.was = r2.length, r2.mode = 23;
              case 23:
                for (; B = (U = r2.distcode[y2 & (1 << r2.distbits) - 1]) >>> 16 & 255, P = 65535 & U, !((S = U >>> 24) <= v2); ) {
                  if (0 === m2) break t;
                  m2--, y2 += l2[d2++] << v2, v2 += 8;
                }
                if (0 == (240 & B)) {
                  for (R = S, D = B, O = P; B = (U = r2.distcode[O + ((y2 & (1 << R + D) - 1) >> R)]) >>> 16 & 255, P = 65535 & U, !(R + (S = U >>> 24) <= v2); ) {
                    if (0 === m2) break t;
                    m2--, y2 += l2[d2++] << v2, v2 += 8;
                  }
                  y2 >>>= R, v2 -= R, r2.back += R;
                }
                if (y2 >>>= S, v2 -= S, r2.back += S, 64 & B) {
                  t2.msg = "invalid distance code", r2.mode = f;
                  break;
                }
                r2.offset = P, r2.extra = 15 & B, r2.mode = 24;
              case 24:
                if (r2.extra) {
                  for (x = r2.extra; v2 < x; ) {
                    if (0 === m2) break t;
                    m2--, y2 += l2[d2++] << v2, v2 += 8;
                  }
                  r2.offset += y2 & (1 << r2.extra) - 1, y2 >>>= r2.extra, v2 -= r2.extra, r2.back += r2.extra;
                }
                if (r2.offset > r2.dmax) {
                  t2.msg = "invalid distance too far back", r2.mode = f;
                  break;
                }
                r2.mode = 25;
              case 25:
                if (0 === _2) break t;
                if (M = E - _2, r2.offset > M) {
                  if ((M = r2.offset - M) > r2.whave && r2.sane) {
                    t2.msg = "invalid distance too far back", r2.mode = f;
                    break;
                  }
                  M > r2.wnext ? (M -= r2.wnext, A = r2.wsize - M) : A = r2.wnext - M, M > r2.length && (M = r2.length), T = r2.window;
                } else T = p2, A = g2 - r2.offset, M = r2.length;
                M > _2 && (M = _2), _2 -= M, r2.length -= M;
                do {
                  p2[g2++] = T[A++];
                } while (--M);
                0 === r2.length && (r2.mode = 21);
                break;
              case 26:
                if (0 === _2) break t;
                p2[g2++] = r2.length, _2--, r2.mode = 21;
                break;
              case 27:
                if (r2.wrap) {
                  for (; v2 < 32; ) {
                    if (0 === m2) break t;
                    m2--, y2 |= l2[d2++] << v2, v2 += 8;
                  }
                  if (E -= _2, t2.total_out += E, r2.total += E, E && (t2.adler = r2.check = r2.flags ? s(r2.check, p2, E, g2 - E) : i(r2.check, p2, E, g2 - E)), E = _2, (r2.flags ? y2 : c(y2)) !== r2.check) {
                    t2.msg = "incorrect data check", r2.mode = f;
                    break;
                  }
                  y2 = 0, v2 = 0;
                }
                r2.mode = 28;
              case 28:
                if (r2.wrap && r2.flags) {
                  for (; v2 < 32; ) {
                    if (0 === m2) break t;
                    m2--, y2 += l2[d2++] << v2, v2 += 8;
                  }
                  if (y2 !== (4294967295 & r2.total)) {
                    t2.msg = "incorrect length check", r2.mode = f;
                    break;
                  }
                  y2 = 0, v2 = 0;
                }
                r2.mode = 29;
              case 29:
                C = 1;
                break t;
              case f:
                C = -3;
                break t;
              case 31:
                return -4;
              default:
                return u;
            }
            return t2.next_out = g2, t2.avail_out = _2, t2.next_in = d2, t2.avail_in = m2, r2.hold = y2, r2.bits = v2, (r2.wsize || E !== t2.avail_out && r2.mode < f && (r2.mode < 27 || 4 !== e2)) && I(t2, t2.output, t2.next_out, E - t2.avail_out) ? (r2.mode = 31, -4) : (w -= t2.avail_in, E -= t2.avail_out, t2.total_in += w, t2.total_out += E, r2.total += E, r2.wrap && E && (t2.adler = r2.check = r2.flags ? s(r2.check, p2, E, t2.next_out - E) : i(r2.check, p2, E, t2.next_out - E)), t2.data_type = r2.bits + (r2.last ? 64 : 0) + (r2.mode === h ? 128 : 0) + (20 === r2.mode || 15 === r2.mode ? 256 : 0), (0 === w && 0 === E || 4 === e2) && 0 === C && (C = -5), C);
          }, e.inflateEnd = function(t2) {
            if (!t2 || !t2.state) return u;
            var e2 = t2.state;
            return e2.window && (e2.window = null), t2.state = null, 0;
          }, e.inflateGetHeader = function(t2, e2) {
            var r2;
            return t2 && t2.state ? 0 == (2 & (r2 = t2.state).wrap) ? u : (r2.head = e2, e2.done = false, 0) : u;
          }, e.inflateSetDictionary = function(t2, e2) {
            var r2, n2 = e2.length;
            return t2 && t2.state ? 0 !== (r2 = t2.state).wrap && 11 !== r2.mode ? u : 11 === r2.mode && i(1, e2, n2, 0) !== r2.check ? -3 : I(t2, e2, n2, n2) ? (r2.mode = 31, -4) : (r2.havedict = 1, 0) : u;
          }, e.inflateInfo = "pako inflate (from Nodeca project)";
        }, 881: (t, e, r) => {
          var n = r(761), i = 15, s = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], a = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], o = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], u = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
          t.exports = function(t2, e2, r2, h, f, c, l, p) {
            var d, g, m, _, y, v, b, I, w, E = p.bits, M = 0, A = 0, T = 0, S = 0, B = 0, P = 0, R = 0, D = 0, O = 0, N = 0, C = null, k = 0, x = new n.Buf16(16), U = new n.Buf16(16), z = null, j = 0;
            for (M = 0; M <= i; M++) x[M] = 0;
            for (A = 0; A < h; A++) x[e2[r2 + A]]++;
            for (B = E, S = i; S >= 1 && 0 === x[S]; S--) ;
            if (B > S && (B = S), 0 === S) return f[c++] = 20971520, f[c++] = 20971520, p.bits = 1, 0;
            for (T = 1; T < S && 0 === x[T]; T++) ;
            for (B < T && (B = T), D = 1, M = 1; M <= i; M++) if (D <<= 1, (D -= x[M]) < 0) return -1;
            if (D > 0 && (0 === t2 || 1 !== S)) return -1;
            for (U[1] = 0, M = 1; M < i; M++) U[M + 1] = U[M] + x[M];
            for (A = 0; A < h; A++) 0 !== e2[r2 + A] && (l[U[e2[r2 + A]]++] = A);
            if (0 === t2 ? (C = z = l, v = 19) : 1 === t2 ? (C = s, k -= 257, z = a, j -= 257, v = 256) : (C = o, z = u, v = -1), N = 0, A = 0, M = T, y = c, P = B, R = 0, m = -1, _ = (O = 1 << B) - 1, 1 === t2 && O > 852 || 2 === t2 && O > 592) return 1;
            for (; ; ) {
              b = M - R, l[A] < v ? (I = 0, w = l[A]) : l[A] > v ? (I = z[j + l[A]], w = C[k + l[A]]) : (I = 96, w = 0), d = 1 << M - R, T = g = 1 << P;
              do {
                f[y + (N >> R) + (g -= d)] = b << 24 | I << 16 | w | 0;
              } while (0 !== g);
              for (d = 1 << M - 1; N & d; ) d >>= 1;
              if (0 !== d ? (N &= d - 1, N += d) : N = 0, A++, 0 == --x[M]) {
                if (M === S) break;
                M = e2[r2 + l[A]];
              }
              if (M > B && (N & _) !== m) {
                for (0 === R && (R = B), y += T, D = 1 << (P = M - R); P + R < S && !((D -= x[P + R]) <= 0); ) P++, D <<= 1;
                if (O += 1 << P, 1 === t2 && O > 852 || 2 === t2 && O > 592) return 1;
                f[m = N & _] = B << 24 | P << 16 | y - c | 0;
              }
            }
            return 0 !== N && (f[y + N] = M - R << 24 | 64 << 16 | 0), p.bits = B, 0;
          };
        }, 950: (t) => {
          t.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
        }, 564: (t, e, r) => {
          var n = r(761);
          function i(t2) {
            for (var e2 = t2.length; --e2 >= 0; ) t2[e2] = 0;
          }
          var s = 256, a = 286, o = 30, u = 15, h = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], f = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], c = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], l = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], p = new Array(576);
          i(p);
          var d = new Array(60);
          i(d);
          var g = new Array(512);
          i(g);
          var m = new Array(256);
          i(m);
          var _ = new Array(29);
          i(_);
          var y, v, b, I = new Array(o);
          function w(t2, e2, r2, n2, i2) {
            this.static_tree = t2, this.extra_bits = e2, this.extra_base = r2, this.elems = n2, this.max_length = i2, this.has_stree = t2 && t2.length;
          }
          function E(t2, e2) {
            this.dyn_tree = t2, this.max_code = 0, this.stat_desc = e2;
          }
          function M(t2) {
            return t2 < 256 ? g[t2] : g[256 + (t2 >>> 7)];
          }
          function A(t2, e2) {
            t2.pending_buf[t2.pending++] = 255 & e2, t2.pending_buf[t2.pending++] = e2 >>> 8 & 255;
          }
          function T(t2, e2, r2) {
            t2.bi_valid > 16 - r2 ? (t2.bi_buf |= e2 << t2.bi_valid & 65535, A(t2, t2.bi_buf), t2.bi_buf = e2 >> 16 - t2.bi_valid, t2.bi_valid += r2 - 16) : (t2.bi_buf |= e2 << t2.bi_valid & 65535, t2.bi_valid += r2);
          }
          function S(t2, e2, r2) {
            T(t2, r2[2 * e2], r2[2 * e2 + 1]);
          }
          function B(t2, e2) {
            var r2 = 0;
            do {
              r2 |= 1 & t2, t2 >>>= 1, r2 <<= 1;
            } while (--e2 > 0);
            return r2 >>> 1;
          }
          function P(t2, e2, r2) {
            var n2, i2, s2 = new Array(16), a2 = 0;
            for (n2 = 1; n2 <= u; n2++) s2[n2] = a2 = a2 + r2[n2 - 1] << 1;
            for (i2 = 0; i2 <= e2; i2++) {
              var o2 = t2[2 * i2 + 1];
              0 !== o2 && (t2[2 * i2] = B(s2[o2]++, o2));
            }
          }
          function R(t2) {
            var e2;
            for (e2 = 0; e2 < a; e2++) t2.dyn_ltree[2 * e2] = 0;
            for (e2 = 0; e2 < o; e2++) t2.dyn_dtree[2 * e2] = 0;
            for (e2 = 0; e2 < 19; e2++) t2.bl_tree[2 * e2] = 0;
            t2.dyn_ltree[512] = 1, t2.opt_len = t2.static_len = 0, t2.last_lit = t2.matches = 0;
          }
          function D(t2) {
            t2.bi_valid > 8 ? A(t2, t2.bi_buf) : t2.bi_valid > 0 && (t2.pending_buf[t2.pending++] = t2.bi_buf), t2.bi_buf = 0, t2.bi_valid = 0;
          }
          function O(t2, e2, r2, n2) {
            var i2 = 2 * e2, s2 = 2 * r2;
            return t2[i2] < t2[s2] || t2[i2] === t2[s2] && n2[e2] <= n2[r2];
          }
          function N(t2, e2, r2) {
            for (var n2 = t2.heap[r2], i2 = r2 << 1; i2 <= t2.heap_len && (i2 < t2.heap_len && O(e2, t2.heap[i2 + 1], t2.heap[i2], t2.depth) && i2++, !O(e2, n2, t2.heap[i2], t2.depth)); ) t2.heap[r2] = t2.heap[i2], r2 = i2, i2 <<= 1;
            t2.heap[r2] = n2;
          }
          function C(t2, e2, r2) {
            var n2, i2, a2, o2, u2 = 0;
            if (0 !== t2.last_lit) do {
              n2 = t2.pending_buf[t2.d_buf + 2 * u2] << 8 | t2.pending_buf[t2.d_buf + 2 * u2 + 1], i2 = t2.pending_buf[t2.l_buf + u2], u2++, 0 === n2 ? S(t2, i2, e2) : (S(t2, (a2 = m[i2]) + s + 1, e2), 0 !== (o2 = h[a2]) && T(t2, i2 -= _[a2], o2), S(t2, a2 = M(--n2), r2), 0 !== (o2 = f[a2]) && T(t2, n2 -= I[a2], o2));
            } while (u2 < t2.last_lit);
            S(t2, 256, e2);
          }
          function k(t2, e2) {
            var r2, n2, i2, s2 = e2.dyn_tree, a2 = e2.stat_desc.static_tree, o2 = e2.stat_desc.has_stree, h2 = e2.stat_desc.elems, f2 = -1;
            for (t2.heap_len = 0, t2.heap_max = 573, r2 = 0; r2 < h2; r2++) 0 !== s2[2 * r2] ? (t2.heap[++t2.heap_len] = f2 = r2, t2.depth[r2] = 0) : s2[2 * r2 + 1] = 0;
            for (; t2.heap_len < 2; ) s2[2 * (i2 = t2.heap[++t2.heap_len] = f2 < 2 ? ++f2 : 0)] = 1, t2.depth[i2] = 0, t2.opt_len--, o2 && (t2.static_len -= a2[2 * i2 + 1]);
            for (e2.max_code = f2, r2 = t2.heap_len >> 1; r2 >= 1; r2--) N(t2, s2, r2);
            i2 = h2;
            do {
              r2 = t2.heap[1], t2.heap[1] = t2.heap[t2.heap_len--], N(t2, s2, 1), n2 = t2.heap[1], t2.heap[--t2.heap_max] = r2, t2.heap[--t2.heap_max] = n2, s2[2 * i2] = s2[2 * r2] + s2[2 * n2], t2.depth[i2] = (t2.depth[r2] >= t2.depth[n2] ? t2.depth[r2] : t2.depth[n2]) + 1, s2[2 * r2 + 1] = s2[2 * n2 + 1] = i2, t2.heap[1] = i2++, N(t2, s2, 1);
            } while (t2.heap_len >= 2);
            t2.heap[--t2.heap_max] = t2.heap[1], function(t3, e3) {
              var r3, n3, i3, s3, a3, o3, h3 = e3.dyn_tree, f3 = e3.max_code, c2 = e3.stat_desc.static_tree, l2 = e3.stat_desc.has_stree, p2 = e3.stat_desc.extra_bits, d2 = e3.stat_desc.extra_base, g2 = e3.stat_desc.max_length, m2 = 0;
              for (s3 = 0; s3 <= u; s3++) t3.bl_count[s3] = 0;
              for (h3[2 * t3.heap[t3.heap_max] + 1] = 0, r3 = t3.heap_max + 1; r3 < 573; r3++) (s3 = h3[2 * h3[2 * (n3 = t3.heap[r3]) + 1] + 1] + 1) > g2 && (s3 = g2, m2++), h3[2 * n3 + 1] = s3, n3 > f3 || (t3.bl_count[s3]++, a3 = 0, n3 >= d2 && (a3 = p2[n3 - d2]), o3 = h3[2 * n3], t3.opt_len += o3 * (s3 + a3), l2 && (t3.static_len += o3 * (c2[2 * n3 + 1] + a3)));
              if (0 !== m2) {
                do {
                  for (s3 = g2 - 1; 0 === t3.bl_count[s3]; ) s3--;
                  t3.bl_count[s3]--, t3.bl_count[s3 + 1] += 2, t3.bl_count[g2]--, m2 -= 2;
                } while (m2 > 0);
                for (s3 = g2; 0 !== s3; s3--) for (n3 = t3.bl_count[s3]; 0 !== n3; ) (i3 = t3.heap[--r3]) > f3 || (h3[2 * i3 + 1] !== s3 && (t3.opt_len += (s3 - h3[2 * i3 + 1]) * h3[2 * i3], h3[2 * i3 + 1] = s3), n3--);
              }
            }(t2, e2), P(s2, f2, t2.bl_count);
          }
          function x(t2, e2, r2) {
            var n2, i2, s2 = -1, a2 = e2[1], o2 = 0, u2 = 7, h2 = 4;
            for (0 === a2 && (u2 = 138, h2 = 3), e2[2 * (r2 + 1) + 1] = 65535, n2 = 0; n2 <= r2; n2++) i2 = a2, a2 = e2[2 * (n2 + 1) + 1], ++o2 < u2 && i2 === a2 || (o2 < h2 ? t2.bl_tree[2 * i2] += o2 : 0 !== i2 ? (i2 !== s2 && t2.bl_tree[2 * i2]++, t2.bl_tree[32]++) : o2 <= 10 ? t2.bl_tree[34]++ : t2.bl_tree[36]++, o2 = 0, s2 = i2, 0 === a2 ? (u2 = 138, h2 = 3) : i2 === a2 ? (u2 = 6, h2 = 3) : (u2 = 7, h2 = 4));
          }
          function U(t2, e2, r2) {
            var n2, i2, s2 = -1, a2 = e2[1], o2 = 0, u2 = 7, h2 = 4;
            for (0 === a2 && (u2 = 138, h2 = 3), n2 = 0; n2 <= r2; n2++) if (i2 = a2, a2 = e2[2 * (n2 + 1) + 1], !(++o2 < u2 && i2 === a2)) {
              if (o2 < h2) do {
                S(t2, i2, t2.bl_tree);
              } while (0 != --o2);
              else 0 !== i2 ? (i2 !== s2 && (S(t2, i2, t2.bl_tree), o2--), S(t2, 16, t2.bl_tree), T(t2, o2 - 3, 2)) : o2 <= 10 ? (S(t2, 17, t2.bl_tree), T(t2, o2 - 3, 3)) : (S(t2, 18, t2.bl_tree), T(t2, o2 - 11, 7));
              o2 = 0, s2 = i2, 0 === a2 ? (u2 = 138, h2 = 3) : i2 === a2 ? (u2 = 6, h2 = 3) : (u2 = 7, h2 = 4);
            }
          }
          i(I);
          var z = false;
          function j(t2, e2, r2, i2) {
            T(t2, 0 + (i2 ? 1 : 0), 3), function(t3, e3, r3, i3) {
              D(t3), i3 && (A(t3, r3), A(t3, ~r3)), n.arraySet(t3.pending_buf, t3.window, e3, r3, t3.pending), t3.pending += r3;
            }(t2, e2, r2, true);
          }
          e.p = function(t2) {
            z || (function() {
              var t3, e2, r2, n2, i2, s2 = new Array(16);
              for (r2 = 0, n2 = 0; n2 < 28; n2++) for (_[n2] = r2, t3 = 0; t3 < 1 << h[n2]; t3++) m[r2++] = n2;
              for (m[r2 - 1] = n2, i2 = 0, n2 = 0; n2 < 16; n2++) for (I[n2] = i2, t3 = 0; t3 < 1 << f[n2]; t3++) g[i2++] = n2;
              for (i2 >>= 7; n2 < o; n2++) for (I[n2] = i2 << 7, t3 = 0; t3 < 1 << f[n2] - 7; t3++) g[256 + i2++] = n2;
              for (e2 = 0; e2 <= u; e2++) s2[e2] = 0;
              for (t3 = 0; t3 <= 143; ) p[2 * t3 + 1] = 8, t3++, s2[8]++;
              for (; t3 <= 255; ) p[2 * t3 + 1] = 9, t3++, s2[9]++;
              for (; t3 <= 279; ) p[2 * t3 + 1] = 7, t3++, s2[7]++;
              for (; t3 <= 287; ) p[2 * t3 + 1] = 8, t3++, s2[8]++;
              for (P(p, 287, s2), t3 = 0; t3 < o; t3++) d[2 * t3 + 1] = 5, d[2 * t3] = B(t3, 5);
              y = new w(p, h, 257, a, u), v = new w(d, f, 0, o, u), b = new w(new Array(0), c, 0, 19, 7);
            }(), z = true), t2.l_desc = new E(t2.dyn_ltree, y), t2.d_desc = new E(t2.dyn_dtree, v), t2.bl_desc = new E(t2.bl_tree, b), t2.bi_buf = 0, t2.bi_valid = 0, R(t2);
          }, e.m = j, e.h = function(t2, e2, r2, n2) {
            var i2, a2, o2 = 0;
            t2.level > 0 ? (2 === t2.strm.data_type && (t2.strm.data_type = function(t3) {
              var e3, r3 = 4093624447;
              for (e3 = 0; e3 <= 31; e3++, r3 >>>= 1) if (1 & r3 && 0 !== t3.dyn_ltree[2 * e3]) return 0;
              if (0 !== t3.dyn_ltree[18] || 0 !== t3.dyn_ltree[20] || 0 !== t3.dyn_ltree[26]) return 1;
              for (e3 = 32; e3 < s; e3++) if (0 !== t3.dyn_ltree[2 * e3]) return 1;
              return 0;
            }(t2)), k(t2, t2.l_desc), k(t2, t2.d_desc), o2 = function(t3) {
              var e3;
              for (x(t3, t3.dyn_ltree, t3.l_desc.max_code), x(t3, t3.dyn_dtree, t3.d_desc.max_code), k(t3, t3.bl_desc), e3 = 18; e3 >= 3 && 0 === t3.bl_tree[2 * l[e3] + 1]; e3--) ;
              return t3.opt_len += 3 * (e3 + 1) + 5 + 5 + 4, e3;
            }(t2), i2 = t2.opt_len + 3 + 7 >>> 3, (a2 = t2.static_len + 3 + 7 >>> 3) <= i2 && (i2 = a2)) : i2 = a2 = r2 + 5, r2 + 4 <= i2 && -1 !== e2 ? j(t2, e2, r2, n2) : 4 === t2.strategy || a2 === i2 ? (T(t2, 2 + (n2 ? 1 : 0), 3), C(t2, p, d)) : (T(t2, 4 + (n2 ? 1 : 0), 3), function(t3, e3, r3, n3) {
              var i3;
              for (T(t3, e3 - 257, 5), T(t3, r3 - 1, 5), T(t3, n3 - 4, 4), i3 = 0; i3 < n3; i3++) T(t3, t3.bl_tree[2 * l[i3] + 1], 3);
              U(t3, t3.dyn_ltree, e3 - 1), U(t3, t3.dyn_dtree, r3 - 1);
            }(t2, t2.l_desc.max_code + 1, t2.d_desc.max_code + 1, o2 + 1), C(t2, t2.dyn_ltree, t2.dyn_dtree)), R(t2), n2 && D(t2);
          }, e.l = function(t2, e2, r2) {
            return t2.pending_buf[t2.d_buf + 2 * t2.last_lit] = e2 >>> 8 & 255, t2.pending_buf[t2.d_buf + 2 * t2.last_lit + 1] = 255 & e2, t2.pending_buf[t2.l_buf + t2.last_lit] = 255 & r2, t2.last_lit++, 0 === e2 ? t2.dyn_ltree[2 * r2]++ : (t2.matches++, e2--, t2.dyn_ltree[2 * (m[r2] + s + 1)]++, t2.dyn_dtree[2 * M(e2)]++), t2.last_lit === t2.lit_bufsize - 1;
          }, e.g = function(t2) {
            T(t2, 2, 3), S(t2, 256, p), function(t3) {
              16 === t3.bi_valid ? (A(t3, t3.bi_buf), t3.bi_buf = 0, t3.bi_valid = 0) : t3.bi_valid >= 8 && (t3.pending_buf[t3.pending++] = 255 & t3.bi_buf, t3.bi_buf >>= 8, t3.bi_valid -= 8);
            }(t2);
          };
        }, 744: (t) => {
          t.exports = function() {
            this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
          };
        }, 347: (t, e, r) => {
          var n, i;
          r.d(e, { s: () => n, S: () => i }), function(t2) {
            t2[t2.Inport = 0] = "Inport", t2[t2.Outport = 1] = "Outport", t2[t2.Undefined = 2] = "Undefined";
          }(n || (n = {})), function(t2) {
            t2[t2.STOPPED = 0] = "STOPPED", t2[t2.RUNNING = 1] = "RUNNING";
          }(i || (i = {}));
        }, 676: (t, e, r) => {
          r.d(e, { D: () => n });
          const n = 0;
        }, 641: (t, e, r) => {
          var n;
          r.d(e, { OM: () => a, Le: () => s, nc: () => i, n_: () => o }), function(t2) {
            t2[t2.Float32Audio = 0] = "Float32Audio", t2[t2.TypedArray = 1] = "TypedArray";
          }(n || (n = {}));
          class i {
            constructor() {
              this.type = n.TypedArray;
            }
            serialize() {
              return { type: this.type };
            }
          }
          class s {
            constructor(t2, e2) {
              this.channels = 0, this.sampleRate = 0, this.type = n.Float32Audio, this.channels = t2, this.sampleRate = e2;
            }
            static fromAudioBuffer(t2) {
              return new s(t2.numberOfChannels, t2.sampleRate);
            }
            get isInterleaved() {
              return true;
            }
            serialize() {
              return { channels: this.channels, sampleRate: this.sampleRate, type: this.type };
            }
          }
          class a {
            constructor(t2, e2) {
              this.buffer = t2, this._ = e2;
            }
            getAsAudioBuffer(t2) {
              if (this._ instanceof s && this._.channels > 0) {
                const e3 = new Float32Array(this.buffer), r3 = e3.length / this._.channels, n2 = t2.createBuffer(this._.channels, r3, this._.sampleRate);
                for (let t3 = 0; t3 < this._.channels; t3++) {
                  const r4 = n2.getChannelData(t3);
                  for (let i2 = 0, s2 = r4.length; i2 < s2; i2++) r4[i2] = e3[i2 * n2.numberOfChannels + t3];
                }
                return n2;
              }
              const e2 = new Float32Array(this.buffer), r2 = t2.createBuffer(1, e2.length, t2.sampleRate);
              return r2.copyToChannel(e2, 0), r2;
            }
          }
          const o = (t2) => {
            switch (t2.type) {
              case n.Float32Audio:
                return new s(t2.channels, t2.sampleRate);
              case n.TypedArray:
                return new i();
              default:
                throw new Error(`Unable to deserialize RNBODataDesc of type ${t2.type}`);
            }
          };
        }, 191: (t, e, r) => {
          r.d(e, { v: () => o });
          var n = r(163), i = r(347), s = r(389), a = r(133);
          class o {
            constructor() {
              this.I = 0, this.M = 44100, this.A = 64, this.outgoingEvent = new s.BM(), this.parameterChangeEvent = new s.BM(), this.T = this.sampsToMs(this.A);
            }
            static getNonConversionObject() {
              return { applyStepsToNormalizedParameterValue: function(t2) {
                return t2;
              }, convertToNormalizedParameterValue: function(t2) {
                return t2;
              }, convertFromNormalizedParameterValue: function(t2) {
                return t2;
              }, getNumParameters: function() {
                return 0;
              }, constrainParameterValue: function(t2) {
                return t2;
              }, isPolyphonic: false, subpatches: [] };
            }
            static deserializeConversion(t2) {
              if (t2) {
                const e2 = {}, r2 = Object.keys(t2);
                for (let n2 = 0; n2 < r2.length; n2++) {
                  const i2 = r2[n2];
                  if ("subpatches" === i2) {
                    const r3 = Object.keys(t2.subpatches);
                    for (let n3 = 0; n3 < r3.length; n3++) {
                      const i3 = r3[n3], s2 = t2.subpatches[i3], a2 = o.deserializeConversion(s2);
                      s2.isPolyphonic ? e2[i3] = [a2] : e2[i3] = a2;
                    }
                  } else e2[i2] = a.evalFunction(t2[i2]);
                }
                return e2;
              }
              return this.getNonConversionObject();
            }
            getSampleRate() {
              return this.M;
            }
            getSamplesPerBlock() {
              return this.A;
            }
            sampsToMs(t2) {
              return t2 / this.M * 1e3;
            }
            getNumInputChannels() {
              return this.B ? this.B.numInputChannels : 0;
            }
            getNumOutputChannels() {
              return this.B ? this.B.numOutputChannels : 0;
            }
            getNumMIDIInputPorts() {
              return this.B ? this.B.numMidiInputPorts : 0;
            }
            getNumMIDIOutputPorts() {
              return this.B ? this.B.numMidiOutputPorts : 0;
            }
            getNumParameters() {
              return this.B ? this.B.numParameters : 0;
            }
            getNumSignalInParameters() {
              return this.B ? this.B.numSignalInParameters : 0;
            }
            getNumSignalOutParameters() {
              return this.B ? this.B.numSignalOutParameters : 0;
            }
            getPatcherSerial() {
              return void 0 !== this.B ? this.B.patcherSerial : 0;
            }
            getParameterName(t2) {
              if (!this.B || t2 >= this.B.parameters.length) throw new Error(`Parameter index ${t2} out of bounds.`);
              return this.B.parameters[t2].name;
            }
            getParameterId(t2) {
              if (!this.B || t2 >= this.B.parameters.length) throw new Error(`Parameter index ${t2} out of bounds.`);
              return this.B.parameters[t2].paramId;
            }
            getParameterToNormalizedFunction(t2) {
              return (e2) => this.P.convertToNormalizedParameterValue(t2, e2);
            }
            getParameterFromNormalizedFunction(t2) {
              return (e2) => this.P.convertFromNormalizedParameterValue(t2, e2);
            }
            constrainParameterValue(t2) {
              return (e2) => this.P.constrainParameterValue(t2, e2);
            }
            getParameterInfo(t2) {
              if (!this.B || t2 >= this.B.parameters.length) throw new Error(`Parameter index ${t2} out of bounds.`);
              const e2 = this.B.parameters[t2];
              let r2, n2;
              switch (e2.type) {
                case "ParameterTypeBang":
                  n2 = a.ParameterTypeBang;
                  break;
                case "ParameterTypeCount":
                  n2 = a.ParameterTypeCount;
                  break;
                case "ParameterTypeList":
                  n2 = a.ParameterTypeList;
                  break;
                case "ParameterTypeNumber":
                  n2 = a.ParameterTypeNumber;
                  break;
                case "ParameterTypeSignal":
                  n2 = a.ParameterTypeSignal;
                  break;
                default:
                  throw new Error(`Unknown Parameter Type from patcher description ${e2.type}`);
              }
              switch (e2.ioType) {
                case "IOTypeInput":
                  r2 = a.IOTypeInput;
                  break;
                case "IOTypeOutput":
                  r2 = a.IOTypeOutput;
                  break;
                case "IOTypeUndefined":
                  r2 = a.IOTypeUndefined;
                  break;
                default:
                  throw new Error(`Unknown Parameter IOType from patcher description ${e2.type}`);
              }
              return { displayName: e2.displayName, enumValues: e2.enumValues, exponent: e2.exponent, id: e2.paramId, index: t2, initialValue: e2.initialValue, ioType: r2, isEnum: e2.isEnum, max: e2.maximum, min: e2.minimum, name: e2.name, signalIndex: e2.signalIndex, steps: e2.steps, type: n2, unit: e2.unit, visible: e2.visible };
            }
            getNumExternalDataRefs() {
              return void 0 !== this.B ? this.B.externalDataRefs.length : 0;
            }
            getExternalDataId(t2) {
              return void 0 !== this.B ? this.B.externalDataRefs[t2].id : "";
            }
            getExternalDataRefIds() {
              let t2;
              return this.B && (t2 = [], Object.keys(this.B.externalDataRefs).forEach((e2) => {
                let r2 = this.B.externalDataRefs[e2];
                t2.push(r2.id);
              })), t2;
            }
            getExternalDataRefInfos() {
              return void 0 !== this.B ? this.B.externalDataRefs : [];
            }
            getNumMessages() {
              return void 0 !== this.B ? this.B.inports.length + this.B.outports.length : 0;
            }
            getMessageInfos() {
              let t2 = [];
              return void 0 !== this.B && (Object.keys(this.B.outports).forEach((e2) => {
                t2.push({ tag: this.B.outports[e2].tag, type: i.s.Outport, meta: this.B.outports[e2].meta });
              }), Object.keys(this.B.inports).forEach((e2) => {
                t2.push({ tag: this.B.inports[e2].tag, type: i.s.Inport, meta: this.B.inports[e2].meta });
              })), t2;
            }
            removeAllSubscriptions() {
              this.outgoingEvent.removeAllSubscriptions(), this.parameterChangeEvent.removeAllSubscriptions();
            }
            invalidateProcessor() {
            }
            setPatcherDesc(t2) {
              return (0, n.mG)(this, void 0, void 0, function* () {
                this.B = t2, this.P = o.deserializeConversion(this.B.paramConversion);
              });
            }
          }
        }, 916: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
          __webpack_require__.d(__webpack_exports__, { s: () => WASMEngine });
          var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(163), _baseEngine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(191), _wasmHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(158), _event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(555);
          class WASMEngine extends _baseEngine__WEBPACK_IMPORTED_MODULE_0__.v {
            getCurrentTime() {
              return this.R.getCurrentTime();
            }
            setCurrentTime(t) {
              this.R.isReady() && this.R.setCurrentTime(t);
            }
            prepareToProcess(t, e, r) {
              (r || t !== this.M || e !== this.A) && this.R.prepareToProcess(t, e);
            }
            process(t, e, r, n, i, s, a) {
              this.R.process(t, e, r, n, i);
            }
            scheduleMidiEvent(t, e) {
              this.scheduleEvent(new _event__WEBPACK_IMPORTED_MODULE_2__.Ym(this.I, t, e));
            }
            handleParameterEvent(t) {
              this.parameterChangeEvent.emit(new _event__WEBPACK_IMPORTED_MODULE_2__.DB(t.time, t.index, t.value, t.source));
            }
            handleMidiEvent(t) {
              this.outgoingEvent.emit(new _event__WEBPACK_IMPORTED_MODULE_2__.Ym(t.time, t.port, [t.b1, t.b2, t.b3], void 0));
            }
            handleMessageEvent(t) {
              this.outgoingEvent.emit(new _event__WEBPACK_IMPORTED_MODULE_2__.f3(t.time, this.R.resolveTag(t.tag), 0 === t.type ? t.numValue : 1 === t.type ? this.R.retrieveArray(t.listValue) : void 0, this.R.resolveTag(t.objectId)));
            }
            handlePresetEvent(t) {
              this.outgoingEvent.emit(new _event__WEBPACK_IMPORTED_MODULE_2__.bt(t.time, _event__WEBPACK_IMPORTED_MODULE_2__.l0.Touched));
            }
            getParameterValue(t) {
              return this.R.getParameterValue(t);
            }
            get isSync() {
              return true;
            }
            scheduleEvent(t) {
              this.R.scheduleEvent(t);
            }
            setPatcherCode(code) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.mG)(this, void 0, void 0, function* () {
                return new Promise((resolve, reject) => {
                  let restoredRnboModule;
                  const restoredWASM = code + "restoredRnboModule = rnbo_module;";
                  eval(restoredWASM), restoredRnboModule().then((t) => (delete t.then, this.R = new _wasmHelper__WEBPACK_IMPORTED_MODULE_1__.z(this, t), resolve()));
                });
              });
            }
            setExternalData(t, e, r) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.mG)(this, void 0, void 0, function* () {
                this.R.setExternalData(t, e, r);
              });
            }
            releaseExternalData(t) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.mG)(this, void 0, void 0, function* () {
                const [e, r] = this.R.releaseExternalData(t);
                return { data: e, typeDesc: r };
              });
            }
            getPreset() {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.mG)(this, void 0, void 0, function* () {
                return JSON.parse(this.R.getPreset());
              });
            }
            setPreset(t) {
              this.R.setPreset(JSON.stringify(t));
            }
          }
        }, 158: (t, e, r) => {
          r.d(e, { z: () => a });
          var n = r(641), i = r(555), s = r(856);
          class a {
            constructor(t2, e2) {
              this.O = 0, this.N = 0, this.C = false, this.k = new s.aO(), this.U = e2;
              let r2 = new this.U.CoreObject();
              this.j = r2;
              let n2 = { handleParameterEvent: t2.handleParameterEvent.bind(t2), handleMidiEvent: t2.handleMidiEvent.bind(t2), handleMessageEvent: t2.handleMessageEvent.bind(t2), handlePresetEvent: t2.handlePresetEvent.bind(t2) }, i2 = this.U.EventHandler.implement(n2);
              this.F = r2.createParameterInterface(i2);
              for (let t3 = 0; t3 < r2.getNumParameters(); t3++) {
                let e3 = r2.getParameterInfo(t3);
                this.k.addParam(e3, r2.getParameterName(t3));
              }
              this.O = r2.getNumInputChannels() + r2.getNumSignalInParameters(), this.N = r2.getNumOutputChannels(), this.C = true;
            }
            isReady() {
              return this.C;
            }
            pushArray(t2) {
              let e2 = this.j.getArrayPassingHEAP(t2.length);
              return this.U.HEAPF64.set(t2, e2 >> 3), e2;
            }
            retrieveArray(t2) {
              let e2 = [];
              for (let r2 = 0; r2 < t2.size(); r2++) e2.push(t2.get(r2));
              return e2;
            }
            setExternalData(t2, e2, r2) {
              const i2 = new Uint8Array(e2), s2 = this.j.getNewMemoryBuffer(i2.byteLength);
              this.U.HEAPU8.set(i2, s2), r2 instanceof n.Le ? this.j.setExternalAudioBuffer(t2, s2, i2.byteLength, r2.channels, r2.sampleRate) : r2 instanceof n.nc && this.j.setExternalUntypedBuffer(t2, s2, i2.byteLength);
            }
            releaseExternalData(t2) {
              let e2, r2 = this.j.getDataRefIndex(t2), i2 = this.j.getDataRefType(r2), s2 = this.j.getDataRefData(r2), a2 = new Uint8Array(s2.sizeInBytes);
              return a2.set(this.U.HEAPU8.subarray(s2.data, s2.data + s2.sizeInBytes)), e2 = 1 == i2.type ? new n.Le(i2.channels, i2.sampleRate) : new n.nc(), this.j.releaseDataRef(r2), [a2.buffer, e2];
            }
            getCurrentTime() {
              return this.j.getCurrentTime();
            }
            setCurrentTime(t2) {
              this.j.setCurrentTime(t2);
            }
            prepareToProcess(t2, e2) {
              this.j.prepareToProcess(t2, e2);
            }
            process(t2, e2, r2, n2, i2, s2) {
              let a2 = 0, o = 0;
              for (let r3 = 0; r3 < e2 && a2 < this.O; r3++) {
                let e3 = t2[r3], n3 = this.j.getInputChannel(a2);
                this.U.HEAPF64.set(e3, n3 >> 3), a2++;
              }
              if (s2) for (let t3 = a2; t3 < this.O; t3++) {
                let e3 = this.k.getParamName(t3);
                if (void 0 !== e3) {
                  let r3 = this.j.getInputChannel(t3);
                  this.U.HEAPF64.set(this.k.getParamArray(t3, s2[e3], i2), r3 >> 3), a2++;
                }
              }
              this.j.process(a2, this.N, i2);
              for (let t3 = 0; t3 < n2 && o < this.N; t3++) {
                let e3 = r2[t3], n3 = this.j.getOutputChannel(o) >> 3;
                e3.set(this.U.HEAPF64.subarray(n3, n3 + e3.length)), o++;
              }
            }
            resolveTag(t2) {
              return this.j.resolveTag(t2);
            }
            scheduleEvent(t2) {
              t2.type === i.m5.MIDIEvent ? this.j.scheduleMidiEvent(t2.time, t2.port, t2.data[0], t2.data[1], t2.data[2]) : t2.type === i.m5.ParameterEvent ? this.j.scheduleParameterEvent(t2.target, t2.time, t2.value, t2.source) : t2.type === i.m5.ParameterBangEvent ? this.j.scheduleParameterBangEvent(t2.target, t2.time) : t2.type === i.m5.MessageEvent ? Array.isArray(t2.payload) ? this.j.sendListMessage(t2.tag, t2.objectId, this.pushArray(t2.payload), t2.payload.length, t2.time) : "number" == typeof t2.payload ? this.j.sendNumMessage(t2.tag, t2.objectId, t2.payload, t2.time) : void 0 === t2.payload && this.j.sendBangMessage(t2.tag, t2.objectId, t2.time) : t2.type === i.m5.TransportEvent ? this.j.scheduleTransportEvent(t2.time, t2.state) : t2.type === i.m5.TempoEvent ? this.j.scheduleTempoEvent(t2.time, t2.tempo) : t2.type === i.m5.BeatTimeEvent ? this.j.scheduleBeatTimeEvent(t2.time, t2.beattime) : t2.type === i.m5.TimeSignatureEvent && this.j.scheduleTimeSignatureEvent(t2.time, t2.numerator, t2.denominator);
            }
            getNumParameters() {
              return this.j.getNumParameters();
            }
            getParameterValue(t2) {
              return this.j.getParameterValue(t2);
            }
            numIns() {
              return this.O;
            }
            numOuts() {
              return this.N;
            }
            getPreset() {
              return this.j.getPreset();
            }
            setPreset(t2) {
              this.j.setPreset(t2);
            }
          }
        }, 555: (t, e, r) => {
          r.d(e, { j4: () => u, J0: () => y, J9: () => h, Lk: () => f, VH: () => i, m5: () => n, Ym: () => l, f3: () => c, zz: () => d, DB: () => p, bt: () => g, l0: () => s, j6: () => b, gs: () => _, QU: () => v, cr: () => m, gA: () => a, f4: () => I });
          var n, i, s, a, o = r(676);
          !function(t2) {
            t2[t2.BufferTransfer = 0] = "BufferTransfer", t2[t2.ClockEvent = 1] = "ClockEvent", t2[t2.DataRefEvent = 2] = "DataRefEvent", t2[t2.MessageEvent = 3] = "MessageEvent", t2[t2.MIDIEvent = 4] = "MIDIEvent", t2[t2.ParameterEvent = 5] = "ParameterEvent", t2[t2.ParameterBangEvent = 6] = "ParameterBangEvent", t2[t2.PresetEvent = 7] = "PresetEvent", t2[t2.StartupEvent = 8] = "StartupEvent", t2[t2.TransportEvent = 9] = "TransportEvent", t2[t2.TempoEvent = 10] = "TempoEvent", t2[t2.BeatTimeEvent = 11] = "BeatTimeEvent", t2[t2.TimeSignatureEvent = 12] = "TimeSignatureEvent";
          }(n || (n = {}));
          class u {
            constructor(t2 = o.D, e2) {
              this.invalid = false, this.time = t2, this.eventTarget = e2;
            }
            serialize() {
              return { eventTarget: this.eventTarget, invalid: this.invalid, source: this.source, time: this.time };
            }
          }
          class h extends u {
            constructor(t2, e2, r2, i2) {
              super(t2, i2), this.type = n.ClockEvent, this.clockIndex = e2, this.value = r2;
            }
            get hasValue() {
              return void 0 !== this.value;
            }
            serialize() {
              return Object.assign(super.serialize(), { clockIndex: this.clockIndex, type: this.type, value: this.value });
            }
          }
          !function(t2) {
            t2[t2.Update = 1] = "Update";
          }(i || (i = {}));
          class f extends u {
            constructor(t2, e2, r2, i2) {
              super(t2, i2), this.type = n.DataRefEvent, this.dataRefIndex = e2, this.action = r2;
            }
            serialize() {
              return Object.assign(super.serialize(), { action: this.action, dataRefIndex: this.dataRefIndex, type: this.type });
            }
          }
          class c extends u {
            constructor(t2, e2, r2, i2 = "", s2) {
              super(t2, s2), this.type = n.MessageEvent, this.objectId = i2, this.tag = e2, this.payload = r2;
            }
            serialize() {
              return Object.assign(super.serialize(), { payload: this.payload, objectId: this.objectId, tag: this.tag, type: this.type });
            }
          }
          class l extends u {
            constructor(t2, e2, r2, i2) {
              if (super(t2, i2), this.type = n.MIDIEvent, r2.length > 3) throw new Error(`MIDIData can only contain a maximum of 3 bytes. Received ${r2.length}`);
              if (this.data = r2, this.data.length < 3) {
                const t3 = r2.length;
                this.data.length = 3, this.data = this.data.fill(void 0, t3, 3);
              }
              let s2 = 0;
              for (let t3 = 0; t3 < 3; t3++) void 0 !== r2[t3] && s2++;
              if (s2 < 1) throw new Error("MIDIData must at least have the first byte set.");
              this.length = s2, this.status = 240 & r2[0], this.channel = 15 & r2[0], this.port = e2;
            }
            serialize() {
              return Object.assign(super.serialize(), { channel: this.channel, data: this.data, port: this.port, type: this.type });
            }
          }
          class p extends u {
            constructor(t2, e2, r2, i2, s2) {
              super(t2, s2), this.type = n.ParameterEvent, this.target = e2, this.value = r2, this.source = i2;
            }
            serialize() {
              return Object.assign(super.serialize(), { target: this.target, type: this.type, value: this.value });
            }
          }
          class d extends u {
            constructor(t2, e2, r2) {
              super(t2, r2), this.type = n.ParameterBangEvent, this.target = e2;
            }
            serialize() {
              return Object.assign(super.serialize(), { target: this.target, type: this.type });
            }
          }
          !function(t2) {
            t2[t2.Set = 1] = "Set", t2[t2.Touched = 2] = "Touched";
          }(s || (s = {}));
          class g extends u {
            constructor(t2, e2, r2) {
              super(t2, void 0), this.type = n.PresetEvent, this.action = e2, this.preset = r2;
            }
            serialize() {
              return Object.assign(super.serialize(), { action: this.action, type: this.type, preset: this.preset });
            }
          }
          class m extends u {
            constructor(t2, e2) {
              super(t2, void 0), this.type = n.TransportEvent, this.state = e2;
            }
            serialize() {
              return Object.assign(super.serialize(), { state: this.state, type: this.type });
            }
          }
          class _ extends u {
            constructor(t2, e2) {
              super(t2, void 0), this.type = n.TempoEvent, this.tempo = e2;
            }
            serialize() {
              return Object.assign(super.serialize(), { tempo: this.tempo, type: this.type });
            }
          }
          class y extends u {
            constructor(t2, e2) {
              super(t2, void 0), this.type = n.BeatTimeEvent, this.beattime = e2;
            }
            serialize() {
              return Object.assign(super.serialize(), { beattime: this.beattime, type: this.type });
            }
          }
          class v extends u {
            constructor(t2, e2, r2) {
              super(t2, void 0), this.type = n.TimeSignatureEvent, this.numerator = e2, this.denominator = r2;
            }
            serialize() {
              return Object.assign(super.serialize(), { numerator: this.numerator, denominator: this.denominator, type: this.type });
            }
          }
          !function(t2) {
            t2[t2.BEGIN = 0] = "BEGIN", t2[t2.END = 1] = "END";
          }(a || (a = {}));
          class b extends u {
            constructor(t2, e2) {
              super(t2, void 0), this.type = n.StartupEvent, this.phase = e2;
            }
            serialize() {
              return Object.assign(super.serialize(), { phase: this.phase, type: this.type });
            }
          }
          const I = (t2) => {
            switch (t2.type) {
              case n.ClockEvent:
                return new h(t2.time, t2.clockIndex, t2.value, t2.eventTarget);
              case n.DataRefEvent:
                return new f(t2.time, t2.dataRefIndex, t2.action, t2.eventTarget);
              case n.MessageEvent:
                return new c(t2.time, t2.tag, t2.payload, t2.objectId, t2.eventTarget);
              case n.MIDIEvent:
                return new l(t2.time, t2.port, t2.data, t2.eventTarget);
              case n.ParameterEvent:
                return new p(t2.time, t2.target, t2.value, t2.source, t2.eventTarget);
              case n.ParameterBangEvent:
                return new d(t2.time, t2.target, t2.eventTarget);
              case n.PresetEvent:
                return new g(t2.time, t2.action, t2.preset);
              case n.TransportEvent:
                return new m(t2.time, t2.state);
              case n.TempoEvent:
                return new _(t2.time, t2.tempo);
              case n.BeatTimeEvent:
                return new y(t2.time, t2.beattime);
              case n.TimeSignatureEvent:
                return new v(t2.time, t2.numerator, t2.denominator);
              case n.StartupEvent:
                return new b(t2.time, t2.phase);
              default:
                throw new Error(`Unable to deserialize RNBOEvent of type ${t2.type}`);
            }
          };
        }, 400: (t, e, r) => {
          var n, i;
          r.d(e, { r: () => n, E: () => i }), function(t2) {
            t2[t2.Number = 0] = "Number", t2[t2.Bang = 1] = "Bang", t2[t2.List = 2] = "List", t2[t2.Signal = 3] = "Signal", t2[t2.Count = 4] = "Count", t2[t2.Enum = 5] = "Enum";
          }(n || (n = {})), function(t2) {
            t2[t2.All = 0] = "All", t2[t2.Internal = 1] = "Internal";
          }(i || (i = {}));
        }, 856: (t, e, r) => {
          r.d(e, { jN: () => u, IR: () => s, V2: () => o, BX: () => a, EX: () => n.E, rH: () => n.r, aO: () => c, zT: () => f });
          var n = r(400), i = r(389);
          function s(t2) {
            return class extends t2 {
              constructor(...t3) {
                super(), this.changeEvent = new i.BM(), this.L = new i.BM();
                const e2 = t3[0];
                this.X = e2.notificationSetting, this.convertFromNormalizedValue = e2.scaling.convertFromNormalized, this.convertToNormalizedValue = e2.scaling.convertToNormalized, this.constrainParameterValue = e2.scaling.constrainParameterValue, this.initialValue = e2.initialValue, this.V = e2.initialValue, this.displayName = e2.displayName || e2.name, this.exponent = e2.exponent, this.id = e2.id, this.index = e2.index, this.min = e2.min, this.max = e2.max, this.name = e2.name, this.steps = e2.steps, this.unit = e2.unit || "";
              }
              get notificationSetting() {
                return this.X;
              }
              get normalizedValue() {
                return this.convertToNormalizedValue(this.V);
              }
              set normalizedValue(t3) {
                this.q(this.convertFromNormalizedValue(t3));
              }
              W(t3) {
                this.X = t3;
              }
              q(t3) {
                t3 = this.constrainParameterValue(t3), this.V !== t3 && (this.V = t3, this.L.emit(this), this.notificationSetting === n.E.All && this.changeEvent.emit(t3));
              }
              $(t3) {
                this.V = t3, this.changeEvent.emit(t3);
              }
            };
          }
          class a extends s(Object) {
            constructor(t2) {
              super(t2), this.type = n.r.Number;
            }
            get value() {
              return this.V;
            }
            set value(t2) {
              this.q(t2);
            }
          }
          class o extends s(Object) {
            constructor(t2) {
              super(t2), this.type = n.r.Enum, this.G = t2.enumValues;
            }
            get enumValues() {
              return this.G.slice();
            }
            get enumValue() {
              return this.G[this.value];
            }
            set enumValue(t2) {
              const e2 = this.G.indexOf(t2);
              if (e2 < 0) throw new Error(`Invalid EnumValue. ${t2} is not an available value on the enum parameter ${this.name}`);
              this.value = e2;
            }
            get value() {
              return this.V;
            }
            set value(t2) {
              this.q(t2);
            }
          }
          class u extends s(Object) {
            constructor() {
              super(...arguments), this.type = n.r.Bang;
            }
            get isActive() {
              return 1 === this.V;
            }
            bang() {
              this.q(1);
            }
          }
          var h = r(133);
          const f = (t2, e2, r2, i2) => t2.type === n.r.Number && t2.enumValues.length ? new o(Object.assign(Object.assign({}, t2), { scaling: i2, index: e2, notificationSetting: r2 })) : t2.type === n.r.Bang ? new u(Object.assign(Object.assign({}, t2), { scaling: i2, index: e2, notificationSetting: r2 })) : (t2.type, n.r.Number, new a(Object.assign(Object.assign({}, t2), { scaling: i2, index: e2, notificationSetting: r2 })));
          class c {
            constructor() {
              this.K = {}, this.Y = new Float32Array(128);
            }
            addParam(t2, e2) {
              t2.type == h.ParameterTypeSignal && t2.ioType === h.IOTypeInput && (this.K[t2.signalIndex] = { name: e2, param: new Float32Array(128) });
            }
            getParamName(t2) {
              let e2 = this.K[t2];
              return void 0 !== e2 ? e2.name : void 0;
            }
            getParamArray(t2, e2, r2) {
              if (e2.length == r2) return e2;
              {
                let n2 = this.K[t2];
                return n2.param.length != r2 && (n2.param = new Float32Array(r2)), n2.param.fill(e2[0]);
              }
            }
          }
        }, 389: (t, e, r) => {
          r.d(e, { f8: () => n, e1: () => i, I7: () => s, EL: () => o, BM: () => h });
          const n = (() => {
            try {
              if ("object" == typeof WebAssembly && "function" == typeof WebAssembly.instantiate) {
                const t2 = new WebAssembly.Module(Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0));
                if (t2 instanceof WebAssembly.Module) return new WebAssembly.Instance(t2) instanceof WebAssembly.Instance;
              }
            } catch (t2) {
            }
            return false;
          })();
          class i {
            fromRNBOtime(t2) {
              return 1e-3 * t2;
            }
            toRNBOtime(t2) {
              return 1e3 * t2;
            }
          }
          const s = "undefined" != typeof isSecureContext && isSecureContext && "undefined" != typeof AudioWorkletNode;
          let a = Math.pow(10, 4);
          const o = () => (a >= Number.MAX_SAFE_INTEGER && (a = Math.pow(10, 4)), parseInt(`${Date.now().toString(10).slice(-3)}${(a++).toString(10).slice(-4)}`, 10)), u = (t2) => t2.slice();
          class h {
            constructor() {
              this.Z = [], this.H = [];
            }
            get listenerCount() {
              return this.Z.length + this.H.length;
            }
            emit(t2) {
              if (this.Z.length) {
                const e2 = u(this.Z);
                for (let r2 = 0, n2 = e2.length; r2 < n2; r2++) e2[r2](t2);
              }
              if (this.H.length) {
                const e2 = u(this.H);
                for (let r2 = 0, n2 = e2.length; r2 < n2; r2++) e2[r2](t2);
                e2.forEach((t3) => this.unsubscribe(t3));
              }
            }
            once(t2) {
              return this.H.push(t2), { unsubscribe: () => this.unsubscribe(t2) };
            }
            subscribe(t2) {
              return this.Z.push(t2), { unsubscribe: () => this.unsubscribe(t2) };
            }
            unsubscribe(t2) {
              const e2 = this.Z.indexOf(t2);
              e2 >= 0 && this.Z.splice(e2, 1);
              const r2 = this.H.indexOf(t2);
              r2 >= 0 && this.H.splice(r2, 1);
            }
            removeAllSubscriptions() {
              this.Z = [], this.H = [];
            }
          }
        }, 163: (t, e, r) => {
          function n(t2, e2, r2, n2) {
            return new (r2 || (r2 = Promise))(function(i, s) {
              function a(t3) {
                try {
                  u(n2.next(t3));
                } catch (t4) {
                  s(t4);
                }
              }
              function o(t3) {
                try {
                  u(n2.throw(t3));
                } catch (t4) {
                  s(t4);
                }
              }
              function u(t3) {
                var e3;
                t3.done ? i(t3.value) : (e3 = t3.value, e3 instanceof r2 ? e3 : new r2(function(t4) {
                  t4(e3);
                })).then(a, o);
              }
              u((n2 = n2.apply(t2, e2 || [])).next());
            });
          }
          r.d(e, { mG: () => n });
        }, 264: (t) => {
          t.exports = { src: [{ code: 'class RNBOPatcher{constructor(){this._currentTime=0,this.audioProcessSampleCount=0,this.sampleOffsetIntoNextAudioBuffer=0,this.vs=0,this.maxvs=0,this.sr=44100,this.invsr=2267573696e-14,this.zeroBuffer=0,this.dummyBuffer=0,this.voiceIndex=0,this.noteNumber=0}getParameterIndexForID(e){return-1}getNumMidiInputPorts(){return 0}processMidiEvent(e,t,s,r){this.updateTime(e)}getNumMidiOutputPorts(){return 0}process(e,t,s,r,i){this.vs=i,this.updateTime(this.getEngine().getCurrentTime()),this.audioProcessSampleCount=this.msToSamps(this._currentTime,this.sr)}prepareToProcess(e,t){this.vs=t,this.maxvs=t,this.zeroBuffer=resizeSignal(this.zeroBuffer,0,t),this.dummyBuffer=resizeSignal(this.dummyBuffer,0,t),this.sr=e,this.invsr=1/e}msToSamps(e,t){return rnbo_floor(e*t*.001)}sampsToMs(e){return e*(1e3*this.invsr)}getNumInputChannels(){return 0}getNumOutputChannels(){return 0}getDataRef(e){return 0}getNumDataRefs(){return 0}fillDataRef(e,t){e}processDataViewUpdate(e,t){this.updateTime(t)}initialize(e){this.assign_defaults(),this.applyState(e),this.initializeObjects(e),this.allocateDataRefs(),this.startup(e)}initializeObjects(e){}allocateDataRefs(){}startup(e){}setIsMuted(e){}getPatcherSerial(){return 7}extractState(e){e[eventTargetKey]=this,e[patcherSerialKey]=this.getPatcherSerial(),e.p7=1,e.p7_noteNumber=this.noteNumber}applyState(e){e[patcherSerialKey]==this.getPatcherSerial()&&(containsValue(e[eventTargetKey])&&this.getEngine().updatePatcherEventTarget(e[eventTargetKey],this),containsValue(e.p7_noteNumber)&&(this.noteNumber=e.p7_noteNumber))}setParameterValue(e,t,s){this.updateTime(s)}processParameterEvent(e,t,s){this.setParameterValue(e,t,s)}processNormalizedParameterEvent(e,t,s){this.setParameterValueNormalized(e,t,s)}getParameterValue(e){return 0}getNumSignalInParameters(){return 0}getNumParameters(){return 0}getParameterName(e){return"bogus"}getParameterId(e){return"bogus"}getParameterInfo(e,t){e}sendParameter(e){this.getEngine().notifyParameterValueChanged(e,this.getParameterValue(e))}processClockEvent(e,t,s,r){this.updateTime(e)}processOutletAtCurrentTime(e,t,s){}processOutletEvent(e,t,s,r){this.updateTime(r),this.processOutletAtCurrentTime(e,t,s)}sendOutlet(e,t){this.getEngine().sendOutlet(this,e,t)}schedule(e,t){this.getEngine().scheduleClockEvent(this,e,t+this._currentTime)}scheduleValue(e,t,s){this.getEngine().scheduleClockEventWithValue(this,e,t+this._currentTime,s)}stop(e){this.getEngine().flushClockEvents(this,e,!1)}stopWithValue(e,v){this.getEngine().flushClockEventsWithValue(this,e,v,!1)}processNumMessage(e,o,t,s){this.updateTime(t)}processListMessage(e,o,t,s){this.updateTime(t)}resolveTag(e){return""}sendMidiEvent(e,t,s,r){this.getEngine().sendMidiEvent(e,t,s,r)}sendMidiEventList(e,t){this.getEngine().sendMidiEventList(e,t)}updateTime(e){this._currentTime=e,this.sampleOffsetIntoNextAudioBuffer=this.msToSamps(e,this.sr)-this.vs-this.audioProcessSampleCount}assign_defaults(){}setEngineAndPatcher(e,t){this._engineInterface=e,this._parentPatcher=t}getEngine(){return this._engineInterface}getPatcher(){return this._parentPatcher}}rnboObj=new RNBOPatcher;', encoding: "utf-8", type: "js" }], options: { classname: "rnbomatic", minifyOutput: true }, desc: { parameters: [], numParameters: 0, numSignalInParameters: 0, layouts: [{ name: "layout", boxes: [] }], numInputChannels: 0, numOutputChannels: 0, patcherSerial: 0, externalDataRefs: [] } };
        } }, __webpack_module_cache__ = {};
        function __webpack_require__(t) {
          var e = __webpack_module_cache__[t];
          if (void 0 !== e) return e.exports;
          var r = __webpack_module_cache__[t] = { exports: {} };
          return __webpack_modules__[t](r, r.exports, __webpack_require__), r.exports;
        }
        __webpack_require__.n = (t) => {
          var e = t && t.J ? () => t.default : () => t;
          return __webpack_require__.d(e, { a: e }), e;
        }, __webpack_require__.d = (t, e) => {
          for (var r in e) __webpack_require__.o(e, r) && !__webpack_require__.o(t, r) && Object.defineProperty(t, r, { enumerable: true, get: e[r] });
        }, __webpack_require__.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), __webpack_require__.r = (t) => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "J", { value: true });
        };
        var __webpack_exports__ = {};
        return (() => {
          __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, { BangParameter: () => a.jN, BaseDevice: () => m, BaseEvent: () => u.j4, BeatTimeEvent: () => u.J0, CommonParameterMixin: () => a.IR, DataBuffer: () => i.OM, DeviceType: () => d, EnumParameter: () => a.V2, EventSubject: () => s.BM, EventType: () => u.m5, MIDIEvent: () => u.Ym, MessageEvent: () => u.f3, MessagePortType: () => n.s, NumberParameter: () => a.BX, ParameterNotificationSetting: () => a.EX, ParameterType: () => a.rH, PresetEvent: () => u.bt, RNBOPresetEventAction: () => u.l0, ScriptDevice: () => T, TempoEvent: () => u.gs, TimeNow: () => N.D, TimeSignatureEvent: () => u.QU, TransportEvent: () => u.cr, TransportState: () => n.S, WorkletDevice: () => O, createDevice: () => x, version: () => C });
          var t = __webpack_require__(163), e = __webpack_require__(845), r = __webpack_require__.n(e), n = __webpack_require__(347), i = __webpack_require__(641), s = __webpack_require__(389), a = __webpack_require__(856), o = __webpack_require__(400), u = __webpack_require__(555);
          const h = { notificationSetting: o.E.All };
          class f {
            constructor(t2) {
              this.tt = /* @__PURE__ */ new Map(), this.et = /* @__PURE__ */ new Map(), this.id = (0, s.EL)(), this.parameterChangeEvent = new s.BM(), this.rt = (t3) => {
                const e3 = this.tt.get(t3.target);
                if (!e3) return;
                const r2 = t3.value;
                e3.type !== o.r.Bang && r2 === e3.value || (e3.$(r2), this.parameterChangeEvent.emit(e3));
              }, this.nt = (t3) => {
                const e3 = t3.index, r2 = t3.type === o.r.Bang ? 1 : t3.value, n2 = new u.DB(0, e3, r2, this.id, void 0);
                this.it && this.it.scheduleEvent(n2), this.notificationSetting === o.E.All && this.parameterChangeEvent.emit(t3);
              };
              const e2 = Object.assign({}, h, t2);
              this.X = e2.notificationSetting;
            }
            st(t2) {
              return this.tt.get(t2) || void 0;
            }
            ot() {
              for (const t2 of this.tt.values()) t2.L.removeAllSubscriptions(), t2.changeEvent.removeAllSubscriptions();
              this.tt.clear(), this.et.clear();
            }
            ut() {
              if (!this.it) throw new Error("Cannot populate ParameterInterface without setting engine first.");
              this.ot();
              for (let t2 = 0, e2 = this.it.getNumParameters(); t2 < e2; t2++) {
                const e3 = this.it.getParameterInfo(t2);
                if (!e3) continue;
                if (!e3.visible) continue;
                const r2 = (0, a.zT)(e3, t2, this.notificationSetting, { convertFromNormalized: this.it.getParameterFromNormalizedFunction(t2), convertToNormalized: this.it.getParameterToNormalizedFunction(t2), constrainParameterValue: this.it.constrainParameterValue(t2) });
                r2.L.subscribe(this.nt), this.tt.set(t2, r2), this.et.set(e3.id, r2);
              }
            }
            setEngine(t2) {
              if (this.it) throw new Error("ParamInterface already has an engine, which can't be overridden.");
              this.it = t2, this.it.parameterChangeEvent.subscribe(this.rt), this.ut();
            }
            get notificationSetting() {
              return this.X;
            }
            set notificationSetting(t2) {
              for (const e2 of this.tt.values()) e2.W(t2);
              this.X = t2;
            }
            get numParameters() {
              return this.tt.size;
            }
            get parameters() {
              return Array.from(this.tt.values());
            }
            get parametersById() {
              return this.et;
            }
            getParameterName(t2) {
              const e2 = this.st(t2);
              return e2 ? e2.name : void 0;
            }
            destroy() {
              this.it.parameterChangeEvent.unsubscribe(this.rt), this.it = void 0, this.ot(), this.parameterChangeEvent.removeAllSubscriptions();
            }
          }
          var c;
          function l(t2) {
            return void 0 !== t2.file;
          }
          function p(t2) {
            return void 0 !== t2.url;
          }
          !function(t2) {
            t2[t2.AudioBuffer = 1] = "AudioBuffer", t2[t2.DataBuffer = 2] = "DataBuffer", t2[t2.ReferenceBuffer = 3] = "ReferenceBuffer";
          }(c || (c = {}));
          var d, g = __webpack_require__(834).Buffer;
          !function(t2) {
            t2.Script = "script", t2.Worklet = "worklet", t2.Invalid = "invalid";
          }(d || (d = {}));
          class m {
            constructor({ context: t2, parameterNotificationSetting: e2, type: r2 }) {
              this.ht = false, this.ft = "wasm", this.ct = new s.e1(), this.lt = true, this.midiEvent = new s.BM(), this.messageEvent = new s.BM(), this.parameterChangeEvent = new s.BM(), this.invalidateEvent = new s.BM(), this.presetTouchedEvent = new s.BM(), this.dt = (t3) => {
                switch (t3.type) {
                  case u.m5.ClockEvent:
                  case u.m5.DataRefEvent:
                  case u.m5.StartupEvent:
                    break;
                  case u.m5.MIDIEvent:
                    return void this.midiEvent.emit(t3);
                  case u.m5.MessageEvent:
                    return void this.messageEvent.emit(t3);
                  case u.m5.PresetEvent:
                    if (t3.action == u.l0.Touched) return void this.presetTouchedEvent.emit();
                  default:
                    throw console.error(t3), new Error(`Unknown or unsupported RNBOEvent type "${t3.type}"`);
                }
              }, this.gt = (t3) => {
                this.parameterChangeEvent.emit(t3);
              }, this._t = t2, this.yt = r2, this.F = new f({ notificationSetting: e2 });
            }
            vt() {
              if (this.ht) throw new Error("Error while trying to overwrite immutable patcher of an existing device. Please create a new Device using RNBO.createDevice instead.");
            }
            It(t2, e2, r2) {
              this.it && this.it.prepareToProcess(t2, e2, r2);
            }
            wt() {
              if (this.isInvalid) throw new Error("Error: This device has become invalid due to creating a new device from it and is therefore unusable.");
            }
            Et(t2) {
              const e2 = g.from(t2.code, t2.encoding);
              return "zlib" === t2.compression ? r().inflate(e2.toString("binary"), { to: "string" }) : e2.toString("utf-8");
            }
            get context() {
              return this.wt(), this._t;
            }
            get inports() {
              return this.wt(), this.it.getMessageInfos().filter((t2) => t2.type === n.s.Inport);
            }
            get isValid() {
              return this.lt;
            }
            get isInvalid() {
              return !this.lt;
            }
            get numInputChannels() {
              return this.wt(), this.it ? this.it.getNumInputChannels() : 0;
            }
            get numOutputChannels() {
              return this.wt(), this.it ? this.it.getNumOutputChannels() : 0;
            }
            get numMIDIInputPorts() {
              return this.wt(), this.it ? this.it.getNumMIDIInputPorts() : 0;
            }
            get numMIDIOutputPorts() {
              return this.wt(), this.it ? this.it.getNumMIDIOutputPorts() : 0;
            }
            get numParameters() {
              return this.wt(), this.F.numParameters;
            }
            get outports() {
              return this.wt(), this.it.getMessageInfos().filter((t2) => t2.type === n.s.Outport);
            }
            get parameters() {
              return this.wt(), this.F.parameters;
            }
            get messages() {
              return this.wt(), this.it.getMessageInfos();
            }
            get parametersById() {
              return this.wt(), this.F.parametersById;
            }
            get parameterNotificationSetting() {
              return this.wt(), this.F.notificationSetting;
            }
            set parameterNotificationSetting(t2) {
              this.wt(), this.F.notificationSetting = t2;
            }
            get sourceType() {
              return this.ft;
            }
            get type() {
              return this.isInvalid ? d.Invalid : this.yt;
            }
            get dataBufferIds() {
              return this.it.getExternalDataRefIds();
            }
            get dataBufferDescriptions() {
              return this.it.getExternalDataRefInfos();
            }
            setDataBuffer(e2, r2, n2, s2) {
              return (0, t.mG)(this, void 0, void 0, function* () {
                if (!this.dataBufferDescriptions.find((t3) => t3.id === e2)) throw new Error(`Unknown DataBuffer id. A DataBuffer with the id "${e2}" does not exist within the device.`);
                let t2, a2;
                if (r2 instanceof AudioBuffer) {
                  a2 = i.Le.fromAudioBuffer(r2);
                  const e3 = r2.numberOfChannels, n3 = new Float32Array(r2.length * r2.numberOfChannels), s3 = [];
                  for (let t3 = 0; t3 < e3; t3++) {
                    const e4 = new Float32Array(r2.length);
                    r2.copyFromChannel(e4, t3, 0), s3.push(e4);
                  }
                  for (let t3 = 0; t3 < e3; t3++) for (let i2 = 0, a3 = r2.length; i2 < a3; i2++) n3[i2 * e3 + t3] = s3[t3][i2];
                  t2 = n3.buffer;
                } else {
                  if (!n2 || n2 < 0 || isNaN(n2)) throw new Error("Invalid channel count. Expecting a numeric value >= 1");
                  if (!s2 || s2 < 0 || isNaN(s2)) throw new Error("Invalid sample rate. Expecting a numeric value >= 1");
                  t2 = ArrayBuffer.isView(r2) ? r2.buffer.slice(0) : r2.slice(0), a2 = new i.Le(n2, s2);
                }
                yield this.it.setExternalData(e2, t2, a2);
              });
            }
            releaseDataBuffer(e2) {
              return (0, t.mG)(this, void 0, void 0, function* () {
                if (!this.dataBufferDescriptions.find((t3) => t3.id === e2)) throw new Error(`Unknown DataBuffer id. A DataBuffer with the id "${e2}" does not exist within the device.`);
                const { data: t2, typeDesc: r2 } = yield this.it.releaseExternalData(e2);
                return new i.OM(t2, r2);
              });
            }
            static fetchAudioData(e2, r2) {
              return (0, t.mG)(this, void 0, void 0, function* () {
                let t2 = yield fetch(e2), n2 = yield t2.arrayBuffer();
                return new Promise((t3, e3) => {
                  r2.decodeAudioData(n2, t3, e3);
                });
              });
            }
            static bufferDescriptionHasRemoteURL(t2) {
              return !!p(t2) || !(!l(t2) || !t2.file.startsWith("http:") && !t2.file.startsWith("https:"));
            }
            loadDataBufferDependencies(e2) {
              return (0, t.mG)(this, void 0, void 0, function* () {
                return Promise.all(e2.map((e3) => (0, t.mG)(this, void 0, void 0, function* () {
                  try {
                    let t2;
                    if (p(e3) ? t2 = e3.url : l(e3) && (t2 = e3.file), t2) {
                      const r2 = yield m.fetchAudioData(t2, this.context);
                      return this.setDataBuffer(e3.id, r2), { type: "success", id: e3.id };
                    }
                    throw new Error(`Skipping invalid buffer info id: ${e3.id}, type: ${e3.type}`);
                  } catch (t2) {
                    return { type: "fail", error: t2, id: e3.id };
                  }
                })));
              });
            }
            scheduleEvent(t2) {
              this.wt(), this.it && this.it.scheduleEvent(t2);
            }
            destroy() {
              this.wt(), this.F.destroy(), this.it && (this.it.invalidateProcessor(), this.it.removeAllSubscriptions()), this.it = void 0, this.Mt && this.Mt.disconnect(), this.Mt = void 0, delete this.F, delete this.ct, delete this._t, this.lt = false, this.invalidateEvent.emit(), this.invalidateEvent.removeAllSubscriptions(), this.messageEvent.removeAllSubscriptions(), this.midiEvent.removeAllSubscriptions(), this.parameterChangeEvent.removeAllSubscriptions();
            }
            getPreset() {
              return (0, t.mG)(this, void 0, void 0, function* () {
                return this.it.getPreset();
              });
            }
            setPreset(t2) {
              return this.it.setPreset(t2);
            }
          }
          var _ = __webpack_require__(191), y = __webpack_require__(133);
          const v = __webpack_require__(264);
          function b(t2, e2) {
            return t2.time - e2.time;
          }
          function I(t2) {
            t2.sort(b);
          }
          class w extends _.v {
            constructor() {
              super(), this.At = false, this.Tt = false, this.St = void 0, this.Bt = -1, this.Pt = [], this.At = false, this.setPatcherDesc(v.desc), this.setPatcherCode(v.src[0].code);
            }
            Rt(t2) {
              const e2 = t2.eventTarget || this.Dt;
              if (t2.time = Math.max(t2.time, this.I), this.St = t2, t2.type === u.m5.ParameterEvent) {
                const r2 = t2;
                e2.setParameterValue(r2.target, r2.value, t2.time);
              } else if (t2.type === u.m5.ParameterBangEvent) {
                const r2 = t2;
                e2.processParameterBangEvent(r2.target, t2.time);
              } else if (t2.type === u.m5.MIDIEvent) {
                const r2 = t2;
                e2.processMidiEvent(r2.time, r2.port, r2.data, r2.length);
              } else if (t2.type === u.m5.ClockEvent) {
                const r2 = t2;
                e2.processClockEvent(r2.time, r2.clockIndex, r2.hasValue, r2.value);
              } else if (t2.type === u.m5.DataRefEvent) {
                const r2 = t2;
                r2.action === u.VH.Update && e2.processDataViewUpdate(r2.dataRefIndex, r2.time);
              } else if (t2.type === u.m5.MessageEvent) {
                const r2 = t2;
                Array.isArray(r2.payload) ? e2.processListMessage(y.TAG(r2.tag), y.TAG(r2.objectId), r2.time, r2.payload) : void 0 === r2.payload ? e2.processBangMessage(y.TAG(r2.tag), y.TAG(r2.objectId), r2.time) : e2.processNumMessage(y.TAG(r2.tag), y.TAG(r2.objectId), r2.time, r2.payload);
              } else if (t2.type === u.m5.PresetEvent) {
                const e3 = t2;
                e3.action === u.l0.Set && (this.Tt = true, this.Dt.setPreset(e3.time, e3.preset), this.Tt = false);
              } else if (t2.type === u.m5.TransportEvent) {
                const e3 = t2;
                this.Dt.processTransportEvent(e3.time, e3.state);
              } else if (t2.type === u.m5.TempoEvent) {
                const e3 = t2;
                this.Dt.processTempoEvent(e3.time, e3.tempo);
              } else if (t2.type === u.m5.BeatTimeEvent) {
                const e3 = t2;
                this.Dt.processBeatTimeEvent(e3.time, e3.beattime);
              } else if (t2.type === u.m5.TimeSignatureEvent) {
                const e3 = t2;
                this.Dt.processTimeSignatureEvent(e3.time, e3.numerator, e3.denominator);
              } else if (t2.type === u.m5.StartupEvent) {
                const e3 = t2;
                this.Tt = e3.phase === u.gA.BEGIN;
              }
              this.St = void 0;
            }
            getCurrentTime() {
              return this.I;
            }
            setCurrentTime(t2) {
              this.I = t2;
            }
            prepareToProcess(t2, e2, r2) {
              (r2 || t2 !== this.M || e2 !== this.A) && (this.M = t2, this.A = e2, this.T = this.sampsToMs(this.A), this.isSync && this.Dt.prepareToProcess(this.M, this.A));
            }
            process(t2, e2, r2, n2, i2, s2, a2) {
              const o2 = Math.min(e2, this.getNumInputChannels() + this.getNumSignalInParameters()), u2 = Math.min(n2, this.getNumOutputChannels()), h2 = Math.min(i2, this.A);
              for (this.Bt = this.I + this.T, void 0 !== this.midiInput && (this.Pt.push.apply(this.Pt, s2), this.At = true), this.At && (I(this.Pt), this.At = false); this.Pt.length > 0 && this.Pt[0].time < this.Bt; ) this.Rt(this.Pt.shift());
              this.Dt.process(t2, o2, r2, u2, h2), this.I = this.Bt, this.Bt = -1;
            }
            scheduleMidiEvent(t2, e2) {
              this.scheduleEvent(new u.Ym(this.I, t2, e2, this.Dt));
            }
            notifyParameterValueChanged(t2, e2) {
              let r2 = this.St ? this.St.source : void 0;
              this.parameterChangeEvent.emit(new u.DB(this.getCurrentTime(), t2, e2, r2));
            }
            scheduleParameterChange(t2, e2, r2) {
              this.scheduleEvent(new u.DB(this.getCurrentTime(), t2, e2, void 0));
            }
            scheduleParameterBang(t2, e2) {
              this.scheduleEvent(new u.zz(this.getCurrentTime(), t2));
            }
            sendNumMessage(t2, e2, r2) {
              const n2 = new u.f3(this.I, this.Dt.resolveTag(t2), r2, this.Dt.resolveTag(e2));
              this.outgoingEvent.emit(n2);
            }
            sendBangMessage(t2, e2) {
              const r2 = new u.f3(this.I, this.Dt.resolveTag(t2), void 0, this.Dt.resolveTag(e2));
              this.outgoingEvent.emit(r2);
            }
            sendListMessage(t2, e2, r2) {
              const n2 = new u.f3(this.I, this.Dt.resolveTag(t2), r2, this.Dt.resolveTag(e2));
              this.outgoingEvent.emit(n2);
            }
            getParameterValue(t2) {
              return this.Dt.getParameterValue(t2);
            }
            flushClockEvents(t2, e2, r2) {
              this.flushClockEventsWithValue(t2, e2, void 0, r2);
            }
            flushClockEventsWithValue(t2, e2, r2, n2) {
              for (let i2 = 0; i2 < this.Pt.length; i2++) if (this.Pt[i2] instanceof u.J9) {
                const s2 = this.Pt[i2];
                s2.eventTarget !== t2 || s2.clockIndex !== e2 && void 0 !== s2.clockIndex || void 0 !== r2 && s2.value !== r2 || (this.Pt.splice(i2, 1), n2 && this.Rt(s2), i2--);
              }
            }
            deleteClockEvents(t2) {
              this.flushClockEvents(t2, void 0, false);
            }
            scheduleClockEvent(t2, e2, r2) {
              this.scheduleClockEventWithValue(t2, e2, r2, void 0);
            }
            scheduleClockEventWithValue(t2, e2, r2, n2) {
              this.scheduleEvent(new u.J9(r2, e2, n2, t2));
            }
            sendMidiEvent(t2, e2, r2, n2) {
              const i2 = new u.Ym(this.getCurrentTime(), t2, [e2, r2, n2], void 0);
              this.outgoingEvent.emit(i2);
            }
            sendMidiEventList(t2, e2) {
              let r2;
              for (r2 = 2; r2 < e2.length; r2 += 3) this.sendMidiEvent(t2, e2[r2 - 2], e2[r2 - 1], e2[r2]);
              if (r2 -= 3, r2 < e2.length) {
                var n2 = r2 - e2.length;
                this.sendMidiEvent(t2, e2[r2], n2 > 1 ? e2[r2 + 1] : void 0, n2 > 2 ? e2[r2 + 2] : void 0);
              }
            }
            sendOutlet(t2, e2, r2) {
              console.log("sendOutlet", t2, e2, r2);
            }
            updatePatcherEventTarget(t2, e2) {
              for (let r2 = 0; r2 < this.Pt.length; r2++) this.Pt[r2].eventTarget === t2 && (this.Pt[r2].eventTarget = e2, this.Pt[r2].invalid = false);
            }
            rescheduleEventTarget(t2) {
              for (let e2 = 0; e2 < this.Pt.length; e2++) this.Pt[e2].eventTarget === t2 && (this.Pt[e2].invalid = false);
            }
            isInProcess() {
              return this.Bt > -1;
            }
            sendDataRefUpdated(t2) {
              this.scheduleEvent(new u.Lk(this.getCurrentTime(), t2, u.VH.Update, this.Dt));
            }
            get isSync() {
              return true;
            }
            scheduleEvent(t2) {
              this.Pt.push(t2), this.isInProcess() ? I(this.Pt) : this.At = true;
            }
            setPatcherCode(e2) {
              return (0, t.mG)(this, void 0, void 0, function* () {
                const t2 = {};
                this.Dt && this.Dt.extractState(t2), this.Dt = y.deserializeSrc(e2);
                for (let t3 = 0; t3 < this.Pt.length; t3++) this.Pt[t3].eventTarget && (this.Pt[t3].invalid = true);
                this.Dt.setEngineAndPatcher(this, null), this.scheduleEvent(new u.j6(this.I, u.gA.BEGIN)), this.Dt.initialize(t2), this.scheduleEvent(new u.j6(this.I, u.gA.END)), this.Dt.prepareToProcess(this.M, this.A, true);
                for (let t3 = this.Pt.length - 1; t3 >= 0; t3--) this.Pt[t3].invalid && this.Pt.splice(t3, 1);
              });
            }
            setExternalData(e2, r2, n2) {
              return (0, t.mG)(this, void 0, void 0, function* () {
                const t2 = this.Dt.getNumDataRefs();
                for (let s2 = 0; s2 < t2; s2++) {
                  const t3 = this.Dt.getDataRef(s2);
                  if (t3.name == e2) {
                    t3.arrayBuffer = r2, n2 instanceof i.Le && (t3.channels = n2.channels, t3.sampleRate = n2.sampleRate), this.sendDataRefUpdated(s2);
                    break;
                  }
                }
              });
            }
            releaseExternalData(e2) {
              return (0, t.mG)(this, void 0, void 0, function* () {
                const t2 = this.Dt.getNumDataRefs();
                let r2, n2;
                for (let s2 = 0; s2 < t2; s2++) {
                  const t3 = this.Dt.getDataRef(s2);
                  if (t3.name == e2) {
                    r2 = t3.arrayBuffer, t3.arrayBuffer = new ArrayBuffer(0), t3.channels ? (n2 = new i.Le(t3.channels, t3.sampleRate), t3.channels = 0, t3.sampleRate = 0) : n2 = new i.nc(), this.sendDataRefUpdated(s2);
                    break;
                  }
                }
                if (!r2) throw new Error(`Invalid DataBuffer. No DataBuffer with id ${e2} found.`);
                return { data: r2, typeDesc: n2 };
              });
            }
            getPreset() {
              return (0, t.mG)(this, void 0, void 0, function* () {
                let t2 = {};
                return this.Dt.getPreset(t2), t2;
              });
            }
            setPreset(t2) {
              this.scheduleEvent(new u.bt(this.I, u.l0.Set, t2));
            }
            presetTouched() {
              this.Tt || this.outgoingEvent.emit(new u.bt(this.I, u.l0.Touched, void 0));
            }
          }
          var E, M, A = __webpack_require__(916);
          class T extends m {
            constructor({ bufferSize: t2 = 1024, context: e2, parameterNotificationSetting: r2 }, n2) {
              super({ context: e2, parameterNotificationSetting: r2, type: d.Script }), this.bufferSize = t2, this.it = n2 && "wasm" !== n2.sourceType ? n2.it : void 0;
            }
            Ot(t2) {
              const e2 = [], r2 = [], n2 = t2.inputBuffer, i2 = t2.outputBuffer, s2 = n2 ? n2.numberOfChannels : 0, a2 = i2 ? i2.numberOfChannels : 0;
              for (let t3 = 0; t3 < Math.max(s2, a2); t3++) t3 < s2 && (e2[t3] = n2.getChannelData(t3)), t3 < a2 && (r2[t3] = i2.getChannelData(t3));
              this.Nt(1e3 * t2.playbackTime), this.It(t2.outputBuffer.sampleRate, this.bufferSize, false), this.Ct(e2, s2, r2, a2, this.bufferSize, null, null);
            }
            Ct(t2, e2, r2, n2, i2, s2, a2) {
              this.it && this.it.process(t2, e2, r2, n2, i2, s2 || void 0, a2 || void 0);
            }
            Nt(t2) {
              this.it && this.it.setCurrentTime(t2);
            }
            get node() {
              return this.wt(), this.Mt;
            }
            setPatcher(e2, r2) {
              return (0, t.mG)(this, void 0, void 0, function* () {
                this.vt(), this.it || (this.it = "wasm" === r2.type ? new A.s() : new w()), this.ft = r2.type, yield this.it.setPatcherDesc(e2), yield this.it.setPatcherCode(this.Et(r2)), this.F.setEngine(this.it), this.F.parameterChangeEvent.subscribe(this.gt), this.it.outgoingEvent.subscribe(this.dt), this.Mt = this.context.createScriptProcessor(this.bufferSize, this.numInputChannels, Math.max(this.numOutputChannels, 1)), this.node.onaudioprocess = this.Ot.bind(this);
              });
            }
          }
          !function(t2) {
            t2[t2.LoadPatcher = 0] = "LoadPatcher", t2[t2.ScheduleEvent = 1] = "ScheduleEvent", t2[t2.TransferBuffer = 2] = "TransferBuffer", t2[t2.ReleaseBuffer = 3] = "ReleaseBuffer", t2[t2.SetPreset = 4] = "SetPreset", t2[t2.GetPreset = 5] = "GetPreset", t2[t2.Invalidate = 6] = "Invalidate";
          }(E || (E = {})), function(t2) {
            t2[t2.LoadPatcherFinished = 1e3] = "LoadPatcherFinished", t2[t2.OutgoingEvent = 1002] = "OutgoingEvent", t2[t2.ReleasedBuffer = 1003] = "ReleasedBuffer", t2[t2.TransferBufferFinished = 1004] = "TransferBufferFinished", t2[t2.GetPresetResponse = 1005] = "GetPresetResponse";
          }(M || (M = {}));
          class S extends _.v {
            constructor() {
              super(), this.kt = new s.BM(), this.xt = new s.BM(), this.Ut = (t2) => {
                if (t2.id !== M.OutgoingEvent || t2.payload.type !== u.m5.ParameterEvent) if (t2.id !== M.OutgoingEvent) {
                  if (t2.id !== M.LoadPatcherFinished && t2.id !== M.TransferBufferFinished && t2.id !== M.ReleasedBuffer && t2.id !== M.GetPresetResponse) throw new Error(`Unhandled RNBOProcessor event with type ${t2.id}`);
                } else this.outgoingEvent.emit(t2.payload);
                else this.parameterChangeEvent.emit(t2.payload);
              }, this.kt.subscribe(this.Ut);
            }
            get eventSubjects() {
              return { fromProcessorEvent: this.kt, toProcessorEvent: this.xt };
            }
            notifyParameterValueChanged(t2, e2, r2, n2) {
              this.parameterChangeEvent.emit(new u.DB(t2, e2, r2, n2, void 0));
            }
            prepareToProcess(t2, e2, r2) {
            }
            process(t2, e2, r2, n2, i2, s2, a2) {
              throw new Error();
            }
            get isSync() {
              return false;
            }
            scheduleEvent(t2) {
              this.xt.emit({ id: E.ScheduleEvent, payload: t2 });
            }
            setExternalData(t2, e2, r2) {
              return new Promise((n2, i2) => {
                const s2 = this.kt.subscribe((e3) => {
                  e3.id === M.TransferBufferFinished && e3.payload.memoryId === t2 && (s2.unsubscribe(), n2());
                });
                this.xt.emit({ id: E.TransferBuffer, payload: { memoryId: t2, data: e2, typeDesc: r2 } });
              });
            }
            releaseExternalData(t2) {
              return new Promise((e2, r2) => {
                const n2 = this.kt.subscribe((r3) => {
                  r3.id === M.ReleasedBuffer && r3.payload.memoryId === t2 && (n2.unsubscribe(), e2({ data: r3.payload.data, typeDesc: (0, i.n_)(r3.payload.typeDesc) }));
                });
                this.xt.emit({ id: E.ReleaseBuffer, payload: { memoryId: t2 } });
              });
            }
            getPreset() {
              return (0, t.mG)(this, void 0, void 0, function* () {
                return new Promise((t2, e2) => {
                  const r2 = this.kt.subscribe((e3) => {
                    e3.id === M.GetPresetResponse && (r2.unsubscribe(), t2(e3.payload.preset));
                  });
                  this.xt.emit({ id: E.GetPreset });
                });
              });
            }
            setPreset(t2) {
              this.xt.emit({ id: E.SetPreset, payload: { preset: t2 } });
            }
            setPatcherCode(e2) {
              return (0, t.mG)(this, void 0, void 0, function* () {
              });
            }
            removeAllSubscriptions() {
              super.removeAllSubscriptions(), this.xt.removeAllSubscriptions(), this.kt.removeAllSubscriptions();
            }
            invalidateProcessor() {
              this.xt.emit({ id: E.Invalidate });
            }
          }
          const B = () => {
            if (!s.I7) throw new Error("Missing AudioWorklet Support");
            return class extends AudioWorkletNode {
              constructor(t2, e2, r2, n2) {
                super(t2, e2, n2), this.zt = (t3) => {
                  const [e3, r3] = t3.data;
                  if (e3 !== M.OutgoingEvent) if (e3 !== M.LoadPatcherFinished) if (e3 !== M.TransferBufferFinished) if (e3 !== M.ReleasedBuffer) {
                    if (e3 !== M.GetPresetResponse) throw new Error(`Unable to handle received processor message of type ${e3}`);
                    this.jt.fromProcessorEvent.emit({ id: e3, payload: r3 });
                  } else this.jt.fromProcessorEvent.emit({ id: e3, payload: r3 });
                  else this.jt.fromProcessorEvent.emit({ id: e3, payload: r3 });
                  else this.jt.fromProcessorEvent.emit({ id: e3, payload: r3 });
                  else this.jt.fromProcessorEvent.emit({ id: e3, payload: (0, u.f4)(r3) });
                }, this.Ft = (t3) => {
                  t3.id !== E.ScheduleEvent ? t3.id !== E.TransferBuffer ? t3.id !== E.ReleaseBuffer ? t3.id !== E.GetPreset ? t3.id !== E.SetPreset ? t3.id !== E.Invalidate || this.port.postMessage([t3.id]) : this.port.postMessage([t3.id, { preset: t3.payload.preset }]) : this.port.postMessage([t3.id]) : this.port.postMessage([t3.id, { memoryId: t3.payload.memoryId }]) : this.port.postMessage([t3.id, { data: t3.payload.data, memoryId: t3.payload.memoryId, typeDesc: t3.payload.typeDesc.serialize() }], [t3.payload.data]) : this.port.postMessage([t3.id, t3.payload.serialize()]);
                }, this.jt = r2, this.jt.toProcessorEvent.subscribe(this.Ft), this.port.onmessage = this.zt, this.port.start();
              }
              loadPatcher() {
                return (0, t.mG)(this, void 0, void 0, function* () {
                  return new Promise((t2) => {
                    const e2 = this.jt.fromProcessorEvent.subscribe((r2) => {
                      r2.id === M.LoadPatcherFinished && (e2.unsubscribe(), t2());
                    });
                    this.port.postMessage([E.LoadPatcher]);
                  });
                });
              }
            };
          };
          var P = __webpack_require__(834).Buffer;
          const R = __webpack_require__(264), D = { js: '(()=>{var __webpack_modules__={133:(module,__unused_webpack_exports,__webpack_require__)=>{var Float32Buffer=__webpack_require__(852).Float32Buffer,Float64Buffer=__webpack_require__(852).Float64Buffer,Float32MultiBuffer=__webpack_require__(852).Float32MultiBuffer,Float64MultiBuffer=__webpack_require__(852).Float64MultiBuffer,IntBuffer=__webpack_require__(852).IntBuffer,UInt8Buffer=__webpack_require__(852).UInt8Buffer,SampleBuffer=__webpack_require__(852).SampleBuffer,ExternalLoaderFactory=__webpack_require__(126).ExternalLoaderFactory;let Xoshiro=__webpack_require__(925);var patcherSerialKey="XX__PatcherSerialKey__XX",eventTargetKey="XX__EventTargetKey__XX",ParameterTypeNumber=0,ParameterTypeBang=1,ParameterTypeList=2,ParameterTypeSignal=3,ParameterTypeCount=4,IOTypeInput=0,IOTypeOutput=1,IOTypeUndefined=2,INVALID_INDEX=Number.MAX_SAFE_INTEGER;function globalrandom(){return Math.random()}function pi01(){return Math.PI}var rnbo_abs=Math.abs,rnbo_fabs=Math.abs,rnbo_acos=Math.acos,rnbo_acosh=Math.acosh,rnbo_asin=Math.asin,rnbo_asinh=Math.asinh,rnbo_atan=Math.atan,rnbo_atan2=Math.atan2,rnbo_atanh=Math.atanh,rnbo_cbrt=Math.cbrt,rnbo_ceil=Math.ceil,rnbo_cos=Math.cos,rnbo_cosh=Math.cosh,rnbo_exp=Math.exp,rnbo_expm1=Math.expm1,rnbo_floor=Math.floor,rnbo_fround=Math.round,rnbo_imul=Math.imul,rnbo_log=Math.log,rnbo_log10=Math.log10,rnbo_log1p=Math.log1p,rnbo_log2=Math.log2,rnbo_pow=Math.pow,rnbo_round=rnbo_fround,rnbo_sign=Math.sign,rnbo_sin=Math.sin,rnbo_sinh=Math.sinh,rnbo_sqrt=Math.sqrt,rnbo_tan=Math.tan,rnbo_tanh=Math.tanh,trunc=Math.trunc,rnbo_trunc=Math.trunc,rnbo_number_max=()=>Math.MAX_VALUE,rnbo_isnan=isNaN;function fixnan(t){return isNaN(t)?0:t}function fract(t){return t%1}function fixdenorm(t){return t}function isdenorm(t){return!1}var fastsin=Math.sin,fastcos=Math.cos,fastexp=Math.exp,fastpow=Math.pow,fasttan=Math.tan;function nextpoweroftwo(t){return 0===t?1:(t--,t|=t>>1,t|=t>>2,t|=t>>4,t|=t>>8,(t|=t>>16)+1)}var MAX_32BIT_INT=Math.pow(2,32);function uint32_add(t,e){var r=t+e;return r>=MAX_32BIT_INT&&(r-=MAX_32BIT_INT),Math.trunc(r)}function uint32_trunc(t){return t>>>0}function uint32_rshift(t,e){return t>>>e}function imod(t,e){return(0|t)%(0|e)}function imod_nocast(t,e){return t%e}function getArrayValueAtIndex(t,e){return t[e]}function allocateArray(t,e){return new Array(t)}function createListCopy(t){return t.slice(0)}function jsCreateListCopy(t){return createListCopy(t)}function list(){let t=[];for(let e=0;e<arguments.length;e++){let r=arguments[e];if(Array.isArray(r))for(let e=0;e<r.length;e++)t.push(r[e]);else t.push(r)}return t}function resizeSignal(t,e,r){for(var n=t||[],i=e;i<r;i++)n[i]=0;return n}function freeSignal(t){return null}function zeroSignal(t,e){t&&t.fill(0)}function fillSignal(t,e,r,n){t&&t.fill(r,n)}function copySignal(t,e,r){for(let n=0;n<r;n++)t[n]=e[n]}function containsValue(t){return void 0!==t}function addressOf(t){return t}function systemticks(){return Date.now()}function bitwiseFloat(t){var e=new Uint32Array(1);return e[0]=t,new DataView(e.buffer).getFloat32(0,!0)}function imul(t,e){return Math.imul(t,e)}var MIDI_StatusByteReceived=1,MIDI_SecondByteReceived=2,MIDI_NoteOff=3,MIDI_NoteOn=4,MIDI_Aftertouch=5,MIDI_CC=6,MIDI_ProgramChange=7,MIDI_ChannelPressure=8,MIDI_PitchBend=9,MIDI_Sysex_Started=10,MIDI_Sysex_Complete=11,MIDI_Generic=99,MIDI_InvalidByte=-1,MIDI_NoteOffMask=128,MIDI_NoteOnMask=144,MIDI_AfterTouchMask=160,MIDI_CCMask=176,MIDI_ProgramChangeMask=192,MIDI_ChannelPressureMask=208,MIDI_PitchBendMask=224,MIDI_QuarterFrame=241,MIDI_SongPos=242,MIDI_SongSel=243,MIDI_TuneRequest=246,MIDI_SysexStart=240,MIDI_SysexEnd=247,MIDI_Clock=248,MIDI_Start=250,MIDI_Continue=251,MIDI_Stop=252,MIDI_ActiveSense=254,MIDI_Reset=255,MIDI_CC_Sustain=64,MIDI_CC_Sostenuto=66,MIDI_CC_AllNotesOff=123,MIDI_CC_PressureMSB=70,MIDI_CC_PressureLSB=102,MIDI_CC_TimbreMSB=74,MIDI_CC_TimbreLSB=106,MIDI_NoteState_Off=0,MIDI_NoteState_On=1,MIDI_NoteState_Sustained=2,CLOCKS_PER_SEC=1;function parseMidi(t,e,r){if(240==e)return MIDI_Sysex_Started;if(t==MIDI_Sysex_Started)return 247==e?MIDI_Sysex_Complete:e<=127?t:MIDI_InvalidByte;if(e>127)return MIDI_StatusByteReceived;var n=240&r;return t==MIDI_StatusByteReceived?n==MIDI_ProgramChangeMask?MIDI_ProgramChange:n==MIDI_ChannelPressureMask?MIDI_ChannelPressure:MIDI_SecondByteReceived:t==MIDI_SecondByteReceived?n==MIDI_NoteOffMask||n==MIDI_NoteOnMask&&0==e?MIDI_NoteOff:n==MIDI_NoteOnMask?MIDI_NoteOn:n==MIDI_AfterTouchMask?MIDI_Aftertouch:n==MIDI_CCMask?MIDI_CC:n==MIDI_PitchBendMask?MIDI_PitchBend:MIDI_Generic:t}function getMIDIChannel(t){var e=240&t;return e>=128&&e<=224?15&t:0}function initDataRef(t,e,r){return(t={}).name=e,t.isValid=!1,t.wantsFillFlag=!1,t.bytesToAllocate=0,t.channels=0,t.sampleRate=0,t.internal=r,t.index=-1,t.wantsFill=function(){return this.wantsFillFlag},t.setWantsFill=function(t){this.wantsFillFlag=t},t.requestSizeInBytes=function(t,e){(t>this.bytesToAllocate||e)&&(this.bytesToAllocate=t)},t.getRequestedSizeInBytes=function(){return this.bytesToAllocate},t.resetRequestedSizeInByte=function(){this.bytesToAllocate=0},t.getSizeInBytes=function(){return this.arrayBuffer.byteLength},t.hasRequestedSize=function(){return this.bytesToAllocate>0},t.isInternal=function(){return this.internal},t.getIndex=function(){return this.index},t.setIndex=function(t){this.index=t},t.getCurrentIndex=function(){return 0},t.clear=function(){t.arrayBuffer=new ArrayBuffer(0)},t.clear(),t}function initMultiRef(){var t={index:0,current:0,dataRefs:[],count:0};for(let e=0;e<arguments.length;e++)t.dataRefs.push(arguments[e]),t.count++;return t.setCurrent=function(t){t>=0&&t<this.count&&(this.current=t)},t.getCurrentIndex=function(){return this.current},t.getIndex=function(){return this.index},t.setIndex=function(t){this.index=t},t}function updateMultiRef(t,e,r){e.setCurrent&&e.getIndex&&(e.setCurrent(r),t.getEngine().sendDataRefUpdated(e.getIndex()))}function updateDataRef(t,e){t.getEngine().sendDataRefUpdated(e.getIndex())}function reInitDataView(t,e){return new t.reinitConstructor(e)}function FIXEDSIZEARRAYINIT(){let t=arguments[0];if(void 0!==t){let e=new Array(t);if(e.fill(0),void 0!==arguments[1]){let r=Array.from(arguments);r.splice(0,1);for(let n=0;n<t;n++)e[n]=FIXEDSIZEARRAYINIT.apply(null,r)}return e}return new Array}function TAG(t){let e=0;for(let r=0;r<t.length;r++){e=t.charCodeAt(r)+(e<<6)+(e<<16)-e}return 0|e}function serializeArrayToList(t,e){return t}function deserializeArrayFromList(t,e,r){t}function serializeDataRef(t){return t.resetRequestedSizeInByte(),t}function serializeBuffer(t){return{data:t.arrayBuffer.slice(0),channels:t.channels,sampleRate:t.sampleRate}}function deserializeBuffer(t,e,r){e.arrayBuffer=r.data.slice(0),t.getEngine().sendDataRefUpdated(e.getIndex())}function RNBO_ASSERT(){}function _evalSrc(src){var rnboObj;return eval(src),rnboObj}function getSubState(t,e){return void 0===t[e]&&(t[e]={}),t[e]}function getSubStateAt(t,e,r){return void 0===t[e]&&(t[e]=[]),void 0===t[e][r]&&(t[e][r]={}),t[e][r]}function stateIsEmpty(t){return 0===Object.keys(t).length}function TransportState(t){return t}function listWithSize(t){return new Array(t)}let intlistWithSize=listWithSize,indexlistWithSize=listWithSize;function RNBO_UNUSED(){}function ENGINE(){}function EXTERNALENGINE(){}function INTERNALENGINE(){}let xoshiro_reset=Xoshiro.reset,xoshiro_next=Xoshiro.next;module.exports={deserializeSrc:function(t){return _evalSrc(t)},deserializeJSON:function(t){var e=t;return"string"==typeof e&&(e={src:t}),_evalSrc(e.src)},extractOptionsFromJSON:function(t){var e=t;return"string"==typeof e&&(e=JSON.parse(t)),e.options?e.options:{}},evalFunction(functionAsString){var tmpFunction,functionAsString="tmpFunction = "+functionAsString;return eval(functionAsString),tmpFunction},nextpoweroftwo,ParameterTypeNumber,ParameterTypeBang,ParameterTypeList,ParameterTypeSignal,ParameterTypeCount,IOTypeInput,IOTypeOutput,IOTypeUndefined:IOTypeUndefined.length,TAG}},852:t=>{function e(){let t=this.dataRef.getSizeInBytes()/this.BASEARRAYVIEW.BYTES_PER_ELEMENT,e=this.getChannels();return e?t/e:0}function r(t,e){let r=t*this.BASEARRAYVIEW.BYTES_PER_ELEMENT*e;this.requestedChannels=e,this.dataRef.requestSizeInBytes(r,!1)}function n(t,e){return this[this.getChannels()*Math.floor(e)+t]}function i(t,e){const r=this.getChannels();return t<0||t>=r||e<0||e>=this.getSize()?0:this[r*Math.floor(e)+t]}function s(t,e,r){this[this.getChannels()*Math.floor(e)+t]=r}function o(t,e,r){const n=this.getChannels();t<0||t>=n||e<0||e>=this.getSize()||(this[n*Math.floor(e)+t]=r)}function u(){return this.dataRef.channels}function a(){return this.dataRef.sampleRate}function h(t){this.dataRef.sampleRate=t}function f(){this.dataRef.clear()}function c(t){if(t!==this.dataRef.channels){let e=this.getSize();return this.clear(),this.dataRef.channels=t,this.setSize(e)}return this}function l(){if(this.isAudioBuffer&&this.requestedChannels!==this.getChannels()&&0!==this.requestedChannels&&(this.getChannels()>0&&this.setZero(),this.dataRef.channels=this.requestedChannels,this.requestedChannels=0),this.dataRef.bytesToAllocate>0&&(this.dataRef.bytesToAllocate!==this.dataRef.getSizeInBytes()||!this.dataRef.isInternallyAllocated)){let t;if(this.dataRef.isInternallyAllocated){let e=Math.min(this.dataRef.arrayBuffer.byteLength,this.dataRef.bytesToAllocate);e/=this.BASEARRAYVIEW.BYTES_PER_ELEMENT,t=new this.BASEARRAYVIEW(this.dataRef.arrayBuffer,0,e)}this.dataRef.arrayBuffer=new ArrayBuffer(this.dataRef.bytesToAllocate),this.dataRef.isInternallyAllocated=!0;let e=new this.BASEARRAYVIEW(this.dataRef.arrayBuffer);return t?e.set(t):this.dataRef.wantsFillFlag=!0,I(e,this.dataRef,this.BASEARRAYVIEW),this.isAudioBuffer&&w(e),e.reinitConstructor=this.reinitConstructor,e}return this}function d(t){let e=this.getChannels();return this.requestedChannels=e,this.dataRef.requestSizeInBytes(t*this.BASEARRAYVIEW.BYTES_PER_ELEMENT*e,!0),this.allocateIfNeeded()}function p(){this.fill&&this.fill(0)}function m(){return this.touched}function _(t){this.touched=t}function g(t){this.dataRef.setWantsFill(t)}function y(){return this.dataRef.getIndex()}function b(){return 0}function I(t,n,i){t.dataRef=n,t.BASEARRAYVIEW=i,t.getSize=e,t.requestSize=r,t.setSize=d,t.allocateIfNeeded=l,t.setZero=p,t.clear=f,t.getChannels=u,t.getSampleRate=a,t.setWantsFill=g,t.getIndex=y,n.setZero=function(){t.setZero()},t.touched=!1,t.getTouched=m,t.setTouched=_}function w(t){t.getSample=n,t.getSampleSafe=i,t.setSample=s,t.setSampleSafe=o,t.setChannels=c,t.setSampleRate=h,t.isAudioBuffer=!0,t.requestedChannels=0,t.getCurrentIndex=b}let v=function(t,e){let r;return r=t.arrayBuffer?new e(t.arrayBuffer):{},I(r,t,e),r.reinitConstructor=this.constructor,r};(v.prototype=Object.create(null)).constructor=v;let M=function(t,e){let r=v.call(this,t,e);return w(r),r};(M.prototype=Object.create(v)).constructor=M;let E=function(t){return M.call(this,t,Float32Array)};(E.prototype=Object.create(M.prototype)).constructor=E;let S=function(t){return M.call(this,t,Float64Array)};(S.prototype=Object.create(M.prototype)).constructor=S;let T=function(t,e){let r=new e(t.dataRefs[t.current]);return r.multiRef=t,r.setCurrent=function(t){this.multiRef.setCurrent(Math.round(t))},r.getIndex=function(){return this.multiRef.getIndex()},r.getCurrentIndex=function(){return this.multiRef.getCurrentIndex()},r.reinitConstructor=this.constructor,r};T.prototype=Object.create(null),T.constructor=T;let B=function(t){return T.call(this,t,E)};(B.prototype=Object.create(T.prototype)).constructor=B;let A=function(t){return T.call(this,t,S)};(A.prototype=Object.create(T.prototype)).constructor=A;let P=function(t){return v.call(this,t,Int32Array)};(P.prototype=Object.create(v.prototype)).constructor=P;let O=function(t){return v.call(this,t,Uint8Array)};(O.prototype=Object.create(v.prototype)).constructor=O,t.exports={Float32Buffer:E,Float64Buffer:S,SampleBuffer:S,Float32MultiBuffer:B,Float64MultiBuffer:A,IntBuffer:P,UInt8Buffer:O}},126:t=>{var e=function(){};(e.prototype=Object.create(null)).constructor=e,e.prototype.setEngineAndPatcher=function(){},e.prototype.initialize=function(){},e.prototype.getNumParameters=function(){return 0},e.prototype.setParameterValue=function(){},e.prototype.prepareToProcess=function(){},e.prototype.process=function(){},t.exports={ExternalLoaderFactory:function(){return console.log("WARNING: Externals are not yet supported in Javascript"),new e}}},925:t=>{function e(t,e,r,n){r[n]=t[e]+0x9e3779b97f4a7c15n,r[n]=0xbf58476d1ce4e5b9n*(r[n]^r[n]>>30n),r[n]=0x94d049bb133111ebn*(r[n]^r[n]>>27n),r[n]=r[n]^r[n]>>31n}t.exports={reset:function(t,r){let n=new BigUint64Array(1);n[0]=BigInt(Math.trunc(1e6*t)),e(n,0,r,0),e(r,0,r,1),e(r,1,r,2),e(r,2,r,3)},next:function(t){let e=new BigUint64Array(1),r=new BigUint64Array(1);return r[0]=t[0]+t[3],e[0]=t[1]<<17n,t[2]^=t[0],t[3]^=t[1],t[1]^=t[2],t[0]^=t[3],t[2]^=e[0],t[3]=t[3]<<45n|t[3]>>19n,r[0]=r[0]>>11n,2220446049250313e-31*Number(r[0])-1}}},766:(t,e)=>{e.byteLength=function(t){var e=a(t),r=e[0],n=e[1];return 3*(r+n)/4-n},e.toByteArray=function(t){var e,r,s=a(t),o=s[0],u=s[1],h=new i(function(t,e,r){return 3*(e+r)/4-r}(0,o,u)),f=0,c=u>0?o-4:o;for(r=0;r<c;r+=4)e=n[t.charCodeAt(r)]<<18|n[t.charCodeAt(r+1)]<<12|n[t.charCodeAt(r+2)]<<6|n[t.charCodeAt(r+3)],h[f++]=e>>16&255,h[f++]=e>>8&255,h[f++]=255&e;2===u&&(e=n[t.charCodeAt(r)]<<2|n[t.charCodeAt(r+1)]>>4,h[f++]=255&e);1===u&&(e=n[t.charCodeAt(r)]<<10|n[t.charCodeAt(r+1)]<<4|n[t.charCodeAt(r+2)]>>2,h[f++]=e>>8&255,h[f++]=255&e);return h},e.fromByteArray=function(t){for(var e,n=t.length,i=n%3,s=[],o=16383,u=0,a=n-i;u<a;u+=o)s.push(h(t,u,u+o>a?a:u+o));1===i?(e=t[n-1],s.push(r[e>>2]+r[e<<4&63]+"==")):2===i&&(e=(t[n-2]<<8)+t[n-1],s.push(r[e>>10]+r[e>>4&63]+r[e<<2&63]+"="));return s.join("")};for(var r=[],n=[],i="undefined"!=typeof Uint8Array?Uint8Array:Array,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o=0,u=s.length;o<u;++o)r[o]=s[o],n[s.charCodeAt(o)]=o;function a(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");return-1===r&&(r=e),[r,r===e?0:4-r%4]}function h(t,e,n){for(var i,s,o=[],u=e;u<n;u+=3)i=(t[u]<<16&16711680)+(t[u+1]<<8&65280)+(255&t[u+2]),o.push(r[(s=i)>>18&63]+r[s>>12&63]+r[s>>6&63]+r[63&s]);return o.join("")}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},834:(t,e,r)=>{\n/*!\n * The buffer module from node.js, for the browser.\n *\n * @author   Feross Aboukhadijeh <https://feross.org>\n * @license  MIT\n */\nconst n=r(766),i=r(181),s="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;e.Buffer=a,e.SlowBuffer=function(t){+t!=t&&(t=0);return a.alloc(+t)},e.INSPECT_MAX_BYTES=50;const o=2147483647;function u(t){if(t>o)throw new RangeError(\'The value "\'+t+\'" is invalid for option "size"\');const e=new Uint8Array(t);return Object.setPrototypeOf(e,a.prototype),e}function a(t,e,r){if("number"==typeof t){if("string"==typeof e)throw new TypeError(\'The "string" argument must be of type string. Received type number\');return c(t)}return h(t,e,r)}function h(t,e,r){if("string"==typeof t)return function(t,e){"string"==typeof e&&""!==e||(e="utf8");if(!a.isEncoding(e))throw new TypeError("Unknown encoding: "+e);const r=0|m(t,e);let n=u(r);const i=n.write(t,e);i!==r&&(n=n.slice(0,i));return n}(t,e);if(ArrayBuffer.isView(t))return function(t){if(J(t,Uint8Array)){const e=new Uint8Array(t);return d(e.buffer,e.byteOffset,e.byteLength)}return l(t)}(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(J(t,ArrayBuffer)||t&&J(t.buffer,ArrayBuffer))return d(t,e,r);if("undefined"!=typeof SharedArrayBuffer&&(J(t,SharedArrayBuffer)||t&&J(t.buffer,SharedArrayBuffer)))return d(t,e,r);if("number"==typeof t)throw new TypeError(\'The "value" argument must not be of type number. Received type number\');const n=t.valueOf&&t.valueOf();if(null!=n&&n!==t)return a.from(n,e,r);const i=function(t){if(a.isBuffer(t)){const e=0|p(t.length),r=u(e);return 0===r.length||t.copy(r,0,0,e),r}if(void 0!==t.length)return"number"!=typeof t.length||Y(t.length)?u(0):l(t);if("Buffer"===t.type&&Array.isArray(t.data))return l(t.data)}(t);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return a.from(t[Symbol.toPrimitive]("string"),e,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function f(t){if("number"!=typeof t)throw new TypeError(\'"size" argument must be of type number\');if(t<0)throw new RangeError(\'The value "\'+t+\'" is invalid for option "size"\')}function c(t){return f(t),u(t<0?0:0|p(t))}function l(t){const e=t.length<0?0:0|p(t.length),r=u(e);for(let n=0;n<e;n+=1)r[n]=255&t[n];return r}function d(t,e,r){if(e<0||t.byteLength<e)throw new RangeError(\'"offset" is outside of buffer bounds\');if(t.byteLength<e+(r||0))throw new RangeError(\'"length" is outside of buffer bounds\');let n;return n=void 0===e&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,e):new Uint8Array(t,e,r),Object.setPrototypeOf(n,a.prototype),n}function p(t){if(t>=o)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o.toString(16)+" bytes");return 0|t}function m(t,e){if(a.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||J(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError(\'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type \'+typeof t);const r=t.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;let i=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return W(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return G(t).length;default:if(i)return n?-1:W(t).length;e=(""+e).toLowerCase(),i=!0}}function _(t,e,r){let n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return O(this,e,r);case"utf8":case"utf-8":return T(this,e,r);case"ascii":return A(this,e,r);case"latin1":case"binary":return P(this,e,r);case"base64":return S(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return N(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function g(t,e,r){const n=t[e];t[e]=t[r],t[r]=n}function y(t,e,r,n,i){if(0===t.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),Y(r=+r)&&(r=i?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(i)return-1;r=t.length-1}else if(r<0){if(!i)return-1;r=0}if("string"==typeof e&&(e=a.from(e,n)),a.isBuffer(e))return 0===e.length?-1:b(t,e,r,n,i);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):b(t,[e],r,n,i);throw new TypeError("val must be string, number or Buffer")}function b(t,e,r,n,i){let s,o=1,u=t.length,a=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;o=2,u/=2,a/=2,r/=2}function h(t,e){return 1===o?t[e]:t.readUInt16BE(e*o)}if(i){let n=-1;for(s=r;s<u;s++)if(h(t,s)===h(e,-1===n?0:s-n)){if(-1===n&&(n=s),s-n+1===a)return n*o}else-1!==n&&(s-=s-n),n=-1}else for(r+a>u&&(r=u-a),s=r;s>=0;s--){let r=!0;for(let n=0;n<a;n++)if(h(t,s+n)!==h(e,n)){r=!1;break}if(r)return s}return-1}function I(t,e,r,n){r=Number(r)||0;const i=t.length-r;n?(n=Number(n))>i&&(n=i):n=i;const s=e.length;let o;for(n>s/2&&(n=s/2),o=0;o<n;++o){const n=parseInt(e.substr(2*o,2),16);if(Y(n))return o;t[r+o]=n}return o}function w(t,e,r,n){return K(W(e,t.length-r),t,r,n)}function v(t,e,r,n){return K(function(t){const e=[];for(let r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(e),t,r,n)}function M(t,e,r,n){return K(G(e),t,r,n)}function E(t,e,r,n){return K(function(t,e){let r,n,i;const s=[];for(let o=0;o<t.length&&!((e-=2)<0);++o)r=t.charCodeAt(o),n=r>>8,i=r%256,s.push(i),s.push(n);return s}(e,t.length-r),t,r,n)}function S(t,e,r){return 0===e&&r===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(e,r))}function T(t,e,r){r=Math.min(t.length,r);const n=[];let i=e;for(;i<r;){const e=t[i];let s=null,o=e>239?4:e>223?3:e>191?2:1;if(i+o<=r){let r,n,u,a;switch(o){case 1:e<128&&(s=e);break;case 2:r=t[i+1],128==(192&r)&&(a=(31&e)<<6|63&r,a>127&&(s=a));break;case 3:r=t[i+1],n=t[i+2],128==(192&r)&&128==(192&n)&&(a=(15&e)<<12|(63&r)<<6|63&n,a>2047&&(a<55296||a>57343)&&(s=a));break;case 4:r=t[i+1],n=t[i+2],u=t[i+3],128==(192&r)&&128==(192&n)&&128==(192&u)&&(a=(15&e)<<18|(63&r)<<12|(63&n)<<6|63&u,a>65535&&a<1114112&&(s=a))}}null===s?(s=65533,o=1):s>65535&&(s-=65536,n.push(s>>>10&1023|55296),s=56320|1023&s),n.push(s),i+=o}return function(t){const e=t.length;if(e<=B)return String.fromCharCode.apply(String,t);let r="",n=0;for(;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=B));return r}(n)}e.kMaxLength=o,a.TYPED_ARRAY_SUPPORT=function(){try{const t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),a.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}}),a.poolSize=8192,a.from=function(t,e,r){return h(t,e,r)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array),a.alloc=function(t,e,r){return function(t,e,r){return f(t),t<=0?u(t):void 0!==e?"string"==typeof r?u(t).fill(e,r):u(t).fill(e):u(t)}(t,e,r)},a.allocUnsafe=function(t){return c(t)},a.allocUnsafeSlow=function(t){return c(t)},a.isBuffer=function(t){return null!=t&&!0===t.t&&t!==a.prototype},a.compare=function(t,e){if(J(t,Uint8Array)&&(t=a.from(t,t.offset,t.byteLength)),J(e,Uint8Array)&&(e=a.from(e,e.offset,e.byteLength)),!a.isBuffer(t)||!a.isBuffer(e))throw new TypeError(\'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array\');if(t===e)return 0;let r=t.length,n=e.length;for(let i=0,s=Math.min(r,n);i<s;++i)if(t[i]!==e[i]){r=t[i],n=e[i];break}return r<n?-1:n<r?1:0},a.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(t,e){if(!Array.isArray(t))throw new TypeError(\'"list" argument must be an Array of Buffers\');if(0===t.length)return a.alloc(0);let r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;const n=a.allocUnsafe(e);let i=0;for(r=0;r<t.length;++r){let e=t[r];if(J(e,Uint8Array))i+e.length>n.length?(a.isBuffer(e)||(e=a.from(e)),e.copy(n,i)):Uint8Array.prototype.set.call(n,e,i);else{if(!a.isBuffer(e))throw new TypeError(\'"list" argument must be an Array of Buffers\');e.copy(n,i)}i+=e.length}return n},a.byteLength=m,a.prototype.t=!0,a.prototype.swap16=function(){const t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)g(this,e,e+1);return this},a.prototype.swap32=function(){const t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)g(this,e,e+3),g(this,e+1,e+2);return this},a.prototype.swap64=function(){const t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)g(this,e,e+7),g(this,e+1,e+6),g(this,e+2,e+5),g(this,e+3,e+4);return this},a.prototype.toString=function(){const t=this.length;return 0===t?"":0===arguments.length?T(this,0,t):_.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(t){if(!a.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===a.compare(this,t)},a.prototype.inspect=function(){let t="";const r=e.INSPECT_MAX_BYTES;return t=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(t+=" ... "),"<Buffer "+t+">"},s&&(a.prototype[s]=a.prototype.inspect),a.prototype.compare=function(t,e,r,n,i){if(J(t,Uint8Array)&&(t=a.from(t,t.offset,t.byteLength)),!a.isBuffer(t))throw new TypeError(\'The "target" argument must be one of type Buffer or Uint8Array. Received type \'+typeof t);if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),e<0||r>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&e>=r)return 0;if(n>=i)return-1;if(e>=r)return 1;if(this===t)return 0;let s=(i>>>=0)-(n>>>=0),o=(r>>>=0)-(e>>>=0);const u=Math.min(s,o),h=this.slice(n,i),f=t.slice(e,r);for(let t=0;t<u;++t)if(h[t]!==f[t]){s=h[t],o=f[t];break}return s<o?-1:o<s?1:0},a.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},a.prototype.indexOf=function(t,e,r){return y(this,t,e,r,!0)},a.prototype.lastIndexOf=function(t,e,r){return y(this,t,e,r,!1)},a.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}const i=this.length-e;if((void 0===r||r>i)&&(r=i),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let s=!1;for(;;)switch(n){case"hex":return I(this,t,e,r);case"utf8":case"utf-8":return w(this,t,e,r);case"ascii":case"latin1":case"binary":return v(this,t,e,r);case"base64":return M(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return E(this,t,e,r);default:if(s)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),s=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this.i||this,0)}};const B=4096;function A(t,e,r){let n="";r=Math.min(t.length,r);for(let i=e;i<r;++i)n+=String.fromCharCode(127&t[i]);return n}function P(t,e,r){let n="";r=Math.min(t.length,r);for(let i=e;i<r;++i)n+=String.fromCharCode(t[i]);return n}function O(t,e,r){const n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);let i="";for(let n=e;n<r;++n)i+=Z[t[n]];return i}function N(t,e,r){const n=t.slice(e,r);let i="";for(let t=0;t<n.length-1;t+=2)i+=String.fromCharCode(n[t]+256*n[t+1]);return i}function D(t,e,r){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function R(t,e,r,n,i,s){if(!a.isBuffer(t))throw new TypeError(\'"buffer" argument must be a Buffer instance\');if(e>i||e<s)throw new RangeError(\'"value" argument is out of bounds\');if(r+n>t.length)throw new RangeError("Index out of range")}function x(t,e,r,n,i){$(e,n,i,t,r,7);let s=Number(e&BigInt(4294967295));t[r++]=s,s>>=8,t[r++]=s,s>>=8,t[r++]=s,s>>=8,t[r++]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return t[r++]=o,o>>=8,t[r++]=o,o>>=8,t[r++]=o,o>>=8,t[r++]=o,r}function C(t,e,r,n,i){$(e,n,i,t,r,7);let s=Number(e&BigInt(4294967295));t[r+7]=s,s>>=8,t[r+6]=s,s>>=8,t[r+5]=s,s>>=8,t[r+4]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return t[r+3]=o,o>>=8,t[r+2]=o,o>>=8,t[r+1]=o,o>>=8,t[r]=o,r+8}function k(t,e,r,n,i,s){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function U(t,e,r,n,s){return e=+e,r>>>=0,s||k(t,0,r,4),i.write(t,e,r,n,23,4),r+4}function z(t,e,r,n,s){return e=+e,r>>>=0,s||k(t,0,r,8),i.write(t,e,r,n,52,8),r+8}a.prototype.slice=function(t,e){const r=this.length;(t=~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),(e=void 0===e?r:~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);const n=this.subarray(t,e);return Object.setPrototypeOf(n,a.prototype),n},a.prototype.readUintLE=a.prototype.readUIntLE=function(t,e,r){t>>>=0,e>>>=0,r||D(t,e,this.length);let n=this[t],i=1,s=0;for(;++s<e&&(i*=256);)n+=this[t+s]*i;return n},a.prototype.readUintBE=a.prototype.readUIntBE=function(t,e,r){t>>>=0,e>>>=0,r||D(t,e,this.length);let n=this[t+--e],i=1;for(;e>0&&(i*=256);)n+=this[t+--e]*i;return n},a.prototype.readUint8=a.prototype.readUInt8=function(t,e){return t>>>=0,e||D(t,1,this.length),this[t]},a.prototype.readUint16LE=a.prototype.readUInt16LE=function(t,e){return t>>>=0,e||D(t,2,this.length),this[t]|this[t+1]<<8},a.prototype.readUint16BE=a.prototype.readUInt16BE=function(t,e){return t>>>=0,e||D(t,2,this.length),this[t]<<8|this[t+1]},a.prototype.readUint32LE=a.prototype.readUInt32LE=function(t,e){return t>>>=0,e||D(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},a.prototype.readUint32BE=a.prototype.readUInt32BE=function(t,e){return t>>>=0,e||D(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},a.prototype.readBigUInt64LE=H((function(t){V(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||L(t,this.length-8);const n=e+256*this[++t]+65536*this[++t]+this[++t]*2**24,i=this[++t]+256*this[++t]+65536*this[++t]+r*2**24;return BigInt(n)+(BigInt(i)<<BigInt(32))})),a.prototype.readBigUInt64BE=H((function(t){V(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||L(t,this.length-8);const n=e*2**24+65536*this[++t]+256*this[++t]+this[++t],i=this[++t]*2**24+65536*this[++t]+256*this[++t]+r;return(BigInt(n)<<BigInt(32))+BigInt(i)})),a.prototype.readIntLE=function(t,e,r){t>>>=0,e>>>=0,r||D(t,e,this.length);let n=this[t],i=1,s=0;for(;++s<e&&(i*=256);)n+=this[t+s]*i;return i*=128,n>=i&&(n-=Math.pow(2,8*e)),n},a.prototype.readIntBE=function(t,e,r){t>>>=0,e>>>=0,r||D(t,e,this.length);let n=e,i=1,s=this[t+--n];for(;n>0&&(i*=256);)s+=this[t+--n]*i;return i*=128,s>=i&&(s-=Math.pow(2,8*e)),s},a.prototype.readInt8=function(t,e){return t>>>=0,e||D(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},a.prototype.readInt16LE=function(t,e){t>>>=0,e||D(t,2,this.length);const r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},a.prototype.readInt16BE=function(t,e){t>>>=0,e||D(t,2,this.length);const r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},a.prototype.readInt32LE=function(t,e){return t>>>=0,e||D(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},a.prototype.readInt32BE=function(t,e){return t>>>=0,e||D(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},a.prototype.readBigInt64LE=H((function(t){V(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||L(t,this.length-8);const n=this[t+4]+256*this[t+5]+65536*this[t+6]+(r<<24);return(BigInt(n)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+this[++t]*2**24)})),a.prototype.readBigInt64BE=H((function(t){V(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||L(t,this.length-8);const n=(e<<24)+65536*this[++t]+256*this[++t]+this[++t];return(BigInt(n)<<BigInt(32))+BigInt(this[++t]*2**24+65536*this[++t]+256*this[++t]+r)})),a.prototype.readFloatLE=function(t,e){return t>>>=0,e||D(t,4,this.length),i.read(this,t,!0,23,4)},a.prototype.readFloatBE=function(t,e){return t>>>=0,e||D(t,4,this.length),i.read(this,t,!1,23,4)},a.prototype.readDoubleLE=function(t,e){return t>>>=0,e||D(t,8,this.length),i.read(this,t,!0,52,8)},a.prototype.readDoubleBE=function(t,e){return t>>>=0,e||D(t,8,this.length),i.read(this,t,!1,52,8)},a.prototype.writeUintLE=a.prototype.writeUIntLE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){R(this,t,e,r,Math.pow(2,8*r)-1,0)}let i=1,s=0;for(this[e]=255&t;++s<r&&(i*=256);)this[e+s]=t/i&255;return e+r},a.prototype.writeUintBE=a.prototype.writeUIntBE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){R(this,t,e,r,Math.pow(2,8*r)-1,0)}let i=r-1,s=1;for(this[e+i]=255&t;--i>=0&&(s*=256);)this[e+i]=t/s&255;return e+r},a.prototype.writeUint8=a.prototype.writeUInt8=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,1,255,0),this[e]=255&t,e+1},a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},a.prototype.writeBigUInt64LE=H((function(t,e=0){return x(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),a.prototype.writeBigUInt64BE=H((function(t,e=0){return C(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),a.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e>>>=0,!n){const n=Math.pow(2,8*r-1);R(this,t,e,r,n-1,-n)}let i=0,s=1,o=0;for(this[e]=255&t;++i<r&&(s*=256);)t<0&&0===o&&0!==this[e+i-1]&&(o=1),this[e+i]=(t/s>>0)-o&255;return e+r},a.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e>>>=0,!n){const n=Math.pow(2,8*r-1);R(this,t,e,r,n-1,-n)}let i=r-1,s=1,o=0;for(this[e+i]=255&t;--i>=0&&(s*=256);)t<0&&0===o&&0!==this[e+i+1]&&(o=1),this[e+i]=(t/s>>0)-o&255;return e+r},a.prototype.writeInt8=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},a.prototype.writeInt16LE=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},a.prototype.writeInt16BE=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},a.prototype.writeInt32LE=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},a.prototype.writeInt32BE=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},a.prototype.writeBigInt64LE=H((function(t,e=0){return x(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),a.prototype.writeBigInt64BE=H((function(t,e=0){return C(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),a.prototype.writeFloatLE=function(t,e,r){return U(this,t,e,!0,r)},a.prototype.writeFloatBE=function(t,e,r){return U(this,t,e,!1,r)},a.prototype.writeDoubleLE=function(t,e,r){return z(this,t,e,!0,r)},a.prototype.writeDoubleBE=function(t,e,r){return z(this,t,e,!1,r)},a.prototype.copy=function(t,e,r,n){if(!a.isBuffer(t))throw new TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);const i=n-r;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,r,n):Uint8Array.prototype.set.call(t,this.subarray(r,n),e),i},a.prototype.fill=function(t,e,r,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!a.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===t.length){const e=t.charCodeAt(0);("utf8"===n&&e<128||"latin1"===n)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;let i;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(i=e;i<r;++i)this[i]=t;else{const s=a.isBuffer(t)?t:a.from(t,n),o=s.length;if(0===o)throw new TypeError(\'The value "\'+t+\'" is invalid for argument "value"\');for(i=0;i<r-e;++i)this[i+e]=s[i%o]}return this};const j={};function X(t,e,r){j[t]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function F(t){let e="",r=t.length;const n="-"===t[0]?1:0;for(;r>=n+4;r-=3)e=`_${t.slice(r-3,r)}${e}`;return`${t.slice(0,r)}${e}`}function $(t,e,r,n,i,s){if(t>r||t<e){const n="bigint"==typeof e?"n":"";let i;throw i=s>3?0===e||e===BigInt(0)?`>= 0${n} and < 2${n} ** ${8*(s+1)}${n}`:`>= -(2${n} ** ${8*(s+1)-1}${n}) and < 2 ** ${8*(s+1)-1}${n}`:`>= ${e}${n} and <= ${r}${n}`,new j.ERR_OUT_OF_RANGE("value",i,t)}!function(t,e,r){V(e,"offset"),void 0!==t[e]&&void 0!==t[e+r]||L(e,t.length-(r+1))}(n,i,s)}function V(t,e){if("number"!=typeof t)throw new j.ERR_INVALID_ARG_TYPE(e,"number",t)}function L(t,e,r){if(Math.floor(t)!==t)throw V(t,r),new j.ERR_OUT_OF_RANGE(r||"offset","an integer",t);if(e<0)throw new j.ERR_BUFFER_OUT_OF_BOUNDS;throw new j.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${e}`,t)}X("ERR_BUFFER_OUT_OF_BOUNDS",(function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),X("ERR_INVALID_ARG_TYPE",(function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`}),TypeError),X("ERR_OUT_OF_RANGE",(function(t,e,r){let n=`The value of "${t}" is out of range.`,i=r;return Number.isInteger(r)&&Math.abs(r)>2**32?i=F(String(r)):"bigint"==typeof r&&(i=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(i=F(i)),i+="n"),n+=` It must be ${e}. Received ${i}`,n}),RangeError);const q=/[^+/0-9A-Za-z-_]/g;function W(t,e){let r;e=e||1/0;const n=t.length;let i=null;const s=[];for(let o=0;o<n;++o){if(r=t.charCodeAt(o),r>55295&&r<57344){if(!i){if(r>56319){(e-=3)>-1&&s.push(239,191,189);continue}if(o+1===n){(e-=3)>-1&&s.push(239,191,189);continue}i=r;continue}if(r<56320){(e-=3)>-1&&s.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(e-=3)>-1&&s.push(239,191,189);if(i=null,r<128){if((e-=1)<0)break;s.push(r)}else if(r<2048){if((e-=2)<0)break;s.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;s.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;s.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return s}function G(t){return n.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(q,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function K(t,e,r,n){let i;for(i=0;i<n&&!(i+r>=e.length||i>=t.length);++i)e[i+r]=t[i];return i}function J(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function Y(t){return t!=t}const Z=function(){const t="0123456789abcdef",e=new Array(256);for(let r=0;r<16;++r){const n=16*r;for(let i=0;i<16;++i)e[n+i]=t[r]+t[i]}return e}();function H(t){return"undefined"==typeof BigInt?Q:t}function Q(){throw new Error("BigInt not supported")}},181:(t,e)=>{\n/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */\ne.read=function(t,e,r,n,i){var s,o,u=8*i-n-1,a=(1<<u)-1,h=a>>1,f=-7,c=r?i-1:0,l=r?-1:1,d=t[e+c];for(c+=l,s=d&(1<<-f)-1,d>>=-f,f+=u;f>0;s=256*s+t[e+c],c+=l,f-=8);for(o=s&(1<<-f)-1,s>>=-f,f+=n;f>0;o=256*o+t[e+c],c+=l,f-=8);if(0===s)s=1-h;else{if(s===a)return o?NaN:1/0*(d?-1:1);o+=Math.pow(2,n),s-=h}return(d?-1:1)*o*Math.pow(2,s-n)},e.write=function(t,e,r,n,i,s){var o,u,a,h=8*s-i-1,f=(1<<h)-1,c=f>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,d=n?0:s-1,p=n?1:-1,m=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(u=isNaN(e)?1:0,o=f):(o=Math.floor(Math.log(e)/Math.LN2),e*(a=Math.pow(2,-o))<1&&(o--,a*=2),(e+=o+c>=1?l/a:l*Math.pow(2,1-c))*a>=2&&(o++,a/=2),o+c>=f?(u=0,o=f):o+c>=1?(u=(e*a-1)*Math.pow(2,i),o+=c):(u=e*Math.pow(2,c-1)*Math.pow(2,i),o=0));i>=8;t[r+d]=255&u,d+=p,u/=256,i-=8);for(o=o<<i|u,h+=i;h>0;t[r+d]=255&o,d+=p,o/=256,h-=8);t[r+d-p]|=128*m}},264:t=>{t.exports={src:[{code:\'class RNBOPatcher{constructor(){this._currentTime=0,this.audioProcessSampleCount=0,this.sampleOffsetIntoNextAudioBuffer=0,this.vs=0,this.maxvs=0,this.sr=44100,this.invsr=2267573696e-14,this.zeroBuffer=0,this.dummyBuffer=0,this.voiceIndex=0,this.noteNumber=0}getParameterIndexForID(e){return-1}getNumMidiInputPorts(){return 0}processMidiEvent(e,t,s,r){this.updateTime(e)}getNumMidiOutputPorts(){return 0}process(e,t,s,r,i){this.vs=i,this.updateTime(this.getEngine().getCurrentTime()),this.audioProcessSampleCount=this.msToSamps(this._currentTime,this.sr)}prepareToProcess(e,t){this.vs=t,this.maxvs=t,this.zeroBuffer=resizeSignal(this.zeroBuffer,0,t),this.dummyBuffer=resizeSignal(this.dummyBuffer,0,t),this.sr=e,this.invsr=1/e}msToSamps(e,t){return rnbo_floor(e*t*.001)}sampsToMs(e){return e*(1e3*this.invsr)}getNumInputChannels(){return 0}getNumOutputChannels(){return 0}getDataRef(e){return 0}getNumDataRefs(){return 0}fillDataRef(e,t){e}processDataViewUpdate(e,t){this.updateTime(t)}initialize(e){this.assign_defaults(),this.applyState(e),this.initializeObjects(e),this.allocateDataRefs(),this.startup(e)}initializeObjects(e){}allocateDataRefs(){}startup(e){}setIsMuted(e){}getPatcherSerial(){return 7}extractState(e){e[eventTargetKey]=this,e[patcherSerialKey]=this.getPatcherSerial(),e.p7=1,e.p7_noteNumber=this.noteNumber}applyState(e){e[patcherSerialKey]==this.getPatcherSerial()&&(containsValue(e[eventTargetKey])&&this.getEngine().updatePatcherEventTarget(e[eventTargetKey],this),containsValue(e.p7_noteNumber)&&(this.noteNumber=e.p7_noteNumber))}setParameterValue(e,t,s){this.updateTime(s)}processParameterEvent(e,t,s){this.setParameterValue(e,t,s)}processNormalizedParameterEvent(e,t,s){this.setParameterValueNormalized(e,t,s)}getParameterValue(e){return 0}getNumSignalInParameters(){return 0}getNumParameters(){return 0}getParameterName(e){return"bogus"}getParameterId(e){return"bogus"}getParameterInfo(e,t){e}sendParameter(e){this.getEngine().notifyParameterValueChanged(e,this.getParameterValue(e))}processClockEvent(e,t,s,r){this.updateTime(e)}processOutletAtCurrentTime(e,t,s){}processOutletEvent(e,t,s,r){this.updateTime(r),this.processOutletAtCurrentTime(e,t,s)}sendOutlet(e,t){this.getEngine().sendOutlet(this,e,t)}schedule(e,t){this.getEngine().scheduleClockEvent(this,e,t+this._currentTime)}scheduleValue(e,t,s){this.getEngine().scheduleClockEventWithValue(this,e,t+this._currentTime,s)}stop(e){this.getEngine().flushClockEvents(this,e,!1)}stopWithValue(e,v){this.getEngine().flushClockEventsWithValue(this,e,v,!1)}processNumMessage(e,o,t,s){this.updateTime(t)}processListMessage(e,o,t,s){this.updateTime(t)}resolveTag(e){return""}sendMidiEvent(e,t,s,r){this.getEngine().sendMidiEvent(e,t,s,r)}sendMidiEventList(e,t){this.getEngine().sendMidiEventList(e,t)}updateTime(e){this._currentTime=e,this.sampleOffsetIntoNextAudioBuffer=this.msToSamps(e,this.sr)-this.vs-this.audioProcessSampleCount}assign_defaults(){}setEngineAndPatcher(e,t){this._engineInterface=e,this._parentPatcher=t}getEngine(){return this._engineInterface}getPatcher(){return this._parentPatcher}}rnboObj=new RNBOPatcher;\',encoding:"utf-8",type:"js"}],options:{classname:"rnbomatic",minifyOutput:!0},desc:{parameters:[],numParameters:0,numSignalInParameters:0,layouts:[{name:"layout",boxes:[]}],numInputChannels:0,numOutputChannels:0,patcherSerial:0,externalDataRefs:[]}}}},__webpack_module_cache__={};function __webpack_require__(t){var e=__webpack_module_cache__[t];if(void 0!==e)return e.exports;var r=__webpack_module_cache__[t]={exports:{}};return __webpack_modules__[t](r,r.exports,__webpack_require__),r.exports}var __webpack_exports__={};(()=>{var t;function e(t,e,r,n){return new(r||(r=Promise))((function(i,s){function o(t){try{a(n.next(t))}catch(t){s(t)}}function u(t){try{a(n.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,u)}a((n=n.apply(t,e||[])).next())}))}!function(t){t[t.Float32Audio=0]="Float32Audio",t[t.TypedArray=1]="TypedArray"}(t||(t={}));class r{constructor(){this.type=t.TypedArray}serialize(){return{type:this.type}}}class n{constructor(e,r){this.channels=0,this.sampleRate=0,this.type=t.Float32Audio,this.channels=e,this.sampleRate=r}static fromAudioBuffer(t){return new n(t.numberOfChannels,t.sampleRate)}get isInterleaved(){return!0}serialize(){return{channels:this.channels,sampleRate:this.sampleRate,type:this.type}}}var i,s;!function(t){t[t.Inport=0]="Inport",t[t.Outport=1]="Outport",t[t.Undefined=2]="Undefined"}(i||(i={})),function(t){t[t.STOPPED=0]="STOPPED",t[t.RUNNING=1]="RUNNING"}(s||(s={}));(()=>{try{if("object"==typeof WebAssembly&&"function"==typeof WebAssembly.instantiate){const t=new WebAssembly.Module(Uint8Array.of(0,97,115,109,1,0,0,0));if(t instanceof WebAssembly.Module)return new WebAssembly.Instance(t)instanceof WebAssembly.Instance}}catch(t){}})();"undefined"!=typeof isSecureContext&&isSecureContext;Math.pow(10,4);const o=t=>t.slice();class u{constructor(){this.o=[],this.u=[]}get listenerCount(){return this.o.length+this.u.length}emit(t){if(this.o.length){const e=o(this.o);for(let r=0,n=e.length;r<n;r++)e[r](t)}if(this.u.length){const e=o(this.u);for(let r=0,n=e.length;r<n;r++)e[r](t);e.forEach((t=>this.unsubscribe(t)))}}once(t){return this.u.push(t),{unsubscribe:()=>this.unsubscribe(t)}}subscribe(t){return this.o.push(t),{unsubscribe:()=>this.unsubscribe(t)}}unsubscribe(t){const e=this.o.indexOf(t);e>=0&&this.o.splice(e,1);const r=this.u.indexOf(t);r>=0&&this.u.splice(r,1)}removeAllSubscriptions(){this.o=[],this.u=[]}}var a=__webpack_require__(133);class h{constructor(){this.h=0,this.l=44100,this.p=64,this.outgoingEvent=new u,this.parameterChangeEvent=new u,this.m=this.sampsToMs(this.p)}static getNonConversionObject(){return{applyStepsToNormalizedParameterValue:function(t){return t},convertToNormalizedParameterValue:function(t){return t},convertFromNormalizedParameterValue:function(t){return t},getNumParameters:function(){return 0},constrainParameterValue:function(t){return t},isPolyphonic:!1,subpatches:[]}}static deserializeConversion(t){if(t){const e={},r=Object.keys(t);for(let n=0;n<r.length;n++){const i=r[n];if("subpatches"===i){const r=Object.keys(t.subpatches);for(let n=0;n<r.length;n++){const i=r[n],s=t.subpatches[i],o=h.deserializeConversion(s);s.isPolyphonic?e[i]=[o]:e[i]=o}}else e[i]=a.evalFunction(t[i])}return e}return this.getNonConversionObject()}getSampleRate(){return this.l}getSamplesPerBlock(){return this.p}sampsToMs(t){return t/this.l*1e3}getNumInputChannels(){return this._?this._.numInputChannels:0}getNumOutputChannels(){return this._?this._.numOutputChannels:0}getNumMIDIInputPorts(){return this._?this._.numMidiInputPorts:0}getNumMIDIOutputPorts(){return this._?this._.numMidiOutputPorts:0}getNumParameters(){return this._?this._.numParameters:0}getNumSignalInParameters(){return this._?this._.numSignalInParameters:0}getNumSignalOutParameters(){return this._?this._.numSignalOutParameters:0}getPatcherSerial(){return void 0!==this._?this._.patcherSerial:0}getParameterName(t){if(!this._||t>=this._.parameters.length)throw new Error(`Parameter index ${t} out of bounds.`);return this._.parameters[t].name}getParameterId(t){if(!this._||t>=this._.parameters.length)throw new Error(`Parameter index ${t} out of bounds.`);return this._.parameters[t].paramId}getParameterToNormalizedFunction(t){return e=>this.g.convertToNormalizedParameterValue(t,e)}getParameterFromNormalizedFunction(t){return e=>this.g.convertFromNormalizedParameterValue(t,e)}constrainParameterValue(t){return e=>this.g.constrainParameterValue(t,e)}getParameterInfo(t){if(!this._||t>=this._.parameters.length)throw new Error(`Parameter index ${t} out of bounds.`);const e=this._.parameters[t];let r,n;switch(e.type){case"ParameterTypeBang":n=a.ParameterTypeBang;break;case"ParameterTypeCount":n=a.ParameterTypeCount;break;case"ParameterTypeList":n=a.ParameterTypeList;break;case"ParameterTypeNumber":n=a.ParameterTypeNumber;break;case"ParameterTypeSignal":n=a.ParameterTypeSignal;break;default:throw new Error(`Unknown Parameter Type from patcher description ${e.type}`)}switch(e.ioType){case"IOTypeInput":r=a.IOTypeInput;break;case"IOTypeOutput":r=a.IOTypeOutput;break;case"IOTypeUndefined":r=a.IOTypeUndefined;break;default:throw new Error(`Unknown Parameter IOType from patcher description ${e.type}`)}return{displayName:e.displayName,enumValues:e.enumValues,exponent:e.exponent,id:e.paramId,index:t,initialValue:e.initialValue,ioType:r,isEnum:e.isEnum,max:e.maximum,min:e.minimum,name:e.name,signalIndex:e.signalIndex,steps:e.steps,type:n,unit:e.unit,visible:e.visible}}getNumExternalDataRefs(){return void 0!==this._?this._.externalDataRefs.length:0}getExternalDataId(t){return void 0!==this._?this._.externalDataRefs[t].id:""}getExternalDataRefIds(){let t;return this._&&(t=[],Object.keys(this._.externalDataRefs).forEach((e=>{let r=this._.externalDataRefs[e];t.push(r.id)}))),t}getExternalDataRefInfos(){return void 0!==this._?this._.externalDataRefs:[]}getNumMessages(){return void 0!==this._?this._.inports.length+this._.outports.length:0}getMessageInfos(){let t=[];return void 0!==this._&&(Object.keys(this._.outports).forEach((e=>{t.push({tag:this._.outports[e].tag,type:i.Outport,meta:this._.outports[e].meta})})),Object.keys(this._.inports).forEach((e=>{t.push({tag:this._.inports[e].tag,type:i.Inport,meta:this._.inports[e].meta})}))),t}removeAllSubscriptions(){this.outgoingEvent.removeAllSubscriptions(),this.parameterChangeEvent.removeAllSubscriptions()}invalidateProcessor(){}setPatcherDesc(t){return e(this,void 0,void 0,(function*(){this._=t,this.g=h.deserializeConversion(this._.paramConversion)}))}}var f,c,l,d;!function(t){t[t.BufferTransfer=0]="BufferTransfer",t[t.ClockEvent=1]="ClockEvent",t[t.DataRefEvent=2]="DataRefEvent",t[t.MessageEvent=3]="MessageEvent",t[t.MIDIEvent=4]="MIDIEvent",t[t.ParameterEvent=5]="ParameterEvent",t[t.ParameterBangEvent=6]="ParameterBangEvent",t[t.PresetEvent=7]="PresetEvent",t[t.StartupEvent=8]="StartupEvent",t[t.TransportEvent=9]="TransportEvent",t[t.TempoEvent=10]="TempoEvent",t[t.BeatTimeEvent=11]="BeatTimeEvent",t[t.TimeSignatureEvent=12]="TimeSignatureEvent"}(f||(f={}));class p{constructor(t=0,e){this.invalid=!1,this.time=t,this.eventTarget=e}serialize(){return{eventTarget:this.eventTarget,invalid:this.invalid,source:this.source,time:this.time}}}class m extends p{constructor(t,e,r,n){super(t,n),this.type=f.ClockEvent,this.clockIndex=e,this.value=r}get hasValue(){return void 0!==this.value}serialize(){return Object.assign(super.serialize(),{clockIndex:this.clockIndex,type:this.type,value:this.value})}}!function(t){t[t.Update=1]="Update"}(c||(c={}));class _ extends p{constructor(t,e,r,n){super(t,n),this.type=f.DataRefEvent,this.dataRefIndex=e,this.action=r}serialize(){return Object.assign(super.serialize(),{action:this.action,dataRefIndex:this.dataRefIndex,type:this.type})}}class g extends p{constructor(t,e,r,n="",i){super(t,i),this.type=f.MessageEvent,this.objectId=n,this.tag=e,this.payload=r}serialize(){return Object.assign(super.serialize(),{payload:this.payload,objectId:this.objectId,tag:this.tag,type:this.type})}}class y extends p{constructor(t,e,r,n){if(super(t,n),this.type=f.MIDIEvent,r.length>3)throw new Error(`MIDIData can only contain a maximum of 3 bytes. Received ${r.length}`);if(this.data=r,this.data.length<3){const t=r.length;this.data.length=3,this.data=this.data.fill(void 0,t,3)}let i=0;for(let t=0;t<3;t++)void 0!==r[t]&&i++;if(i<1)throw new Error("MIDIData must at least have the first byte set.");this.length=i,this.status=240&r[0],this.channel=15&r[0],this.port=e}serialize(){return Object.assign(super.serialize(),{channel:this.channel,data:this.data,port:this.port,type:this.type})}}class b extends p{constructor(t,e,r,n,i){super(t,i),this.type=f.ParameterEvent,this.target=e,this.value=r,this.source=n}serialize(){return Object.assign(super.serialize(),{target:this.target,type:this.type,value:this.value})}}class I extends p{constructor(t,e,r){super(t,r),this.type=f.ParameterBangEvent,this.target=e}serialize(){return Object.assign(super.serialize(),{target:this.target,type:this.type})}}!function(t){t[t.Set=1]="Set",t[t.Touched=2]="Touched"}(l||(l={}));class w extends p{constructor(t,e,r){super(t,void 0),this.type=f.PresetEvent,this.action=e,this.preset=r}serialize(){return Object.assign(super.serialize(),{action:this.action,type:this.type,preset:this.preset})}}class v extends p{constructor(t,e){super(t,void 0),this.type=f.TransportEvent,this.state=e}serialize(){return Object.assign(super.serialize(),{state:this.state,type:this.type})}}class M extends p{constructor(t,e){super(t,void 0),this.type=f.TempoEvent,this.tempo=e}serialize(){return Object.assign(super.serialize(),{tempo:this.tempo,type:this.type})}}class E extends p{constructor(t,e){super(t,void 0),this.type=f.BeatTimeEvent,this.beattime=e}serialize(){return Object.assign(super.serialize(),{beattime:this.beattime,type:this.type})}}class S extends p{constructor(t,e,r){super(t,void 0),this.type=f.TimeSignatureEvent,this.numerator=e,this.denominator=r}serialize(){return Object.assign(super.serialize(),{numerator:this.numerator,denominator:this.denominator,type:this.type})}}!function(t){t[t.BEGIN=0]="BEGIN",t[t.END=1]="END"}(d||(d={}));class T extends p{constructor(t,e){super(t,void 0),this.type=f.StartupEvent,this.phase=e}serialize(){return Object.assign(super.serialize(),{phase:this.phase,type:this.type})}}const B=__webpack_require__(264);function A(t,e){return t.time-e.time}function P(t){t.sort(A)}class O extends h{constructor(){super(),this.I=!1,this.v=!1,this.M=void 0,this.S=-1,this.T=[],this.I=!1,this.setPatcherDesc(B.desc),this.setPatcherCode(B.src[0].code)}B(t){const e=t.eventTarget||this.A;if(t.time=Math.max(t.time,this.h),this.M=t,t.type===f.ParameterEvent){const r=t;e.setParameterValue(r.target,r.value,t.time)}else if(t.type===f.ParameterBangEvent){const r=t;e.processParameterBangEvent(r.target,t.time)}else if(t.type===f.MIDIEvent){const r=t;e.processMidiEvent(r.time,r.port,r.data,r.length)}else if(t.type===f.ClockEvent){const r=t;e.processClockEvent(r.time,r.clockIndex,r.hasValue,r.value)}else if(t.type===f.DataRefEvent){const r=t;r.action===c.Update&&e.processDataViewUpdate(r.dataRefIndex,r.time)}else if(t.type===f.MessageEvent){const r=t;Array.isArray(r.payload)?e.processListMessage(a.TAG(r.tag),a.TAG(r.objectId),r.time,r.payload):void 0===r.payload?e.processBangMessage(a.TAG(r.tag),a.TAG(r.objectId),r.time):e.processNumMessage(a.TAG(r.tag),a.TAG(r.objectId),r.time,r.payload)}else if(t.type===f.PresetEvent){const e=t;e.action===l.Set&&(this.v=!0,this.A.setPreset(e.time,e.preset),this.v=!1)}else if(t.type===f.TransportEvent){const e=t;this.A.processTransportEvent(e.time,e.state)}else if(t.type===f.TempoEvent){const e=t;this.A.processTempoEvent(e.time,e.tempo)}else if(t.type===f.BeatTimeEvent){const e=t;this.A.processBeatTimeEvent(e.time,e.beattime)}else if(t.type===f.TimeSignatureEvent){const e=t;this.A.processTimeSignatureEvent(e.time,e.numerator,e.denominator)}else if(t.type===f.StartupEvent){const e=t;this.v=e.phase===d.BEGIN}this.M=void 0}getCurrentTime(){return this.h}setCurrentTime(t){this.h=t}prepareToProcess(t,e,r){(r||t!==this.l||e!==this.p)&&(this.l=t,this.p=e,this.m=this.sampsToMs(this.p),this.isSync&&this.A.prepareToProcess(this.l,this.p))}process(t,e,r,n,i,s,o){const u=Math.min(e,this.getNumInputChannels()+this.getNumSignalInParameters()),a=Math.min(n,this.getNumOutputChannels()),h=Math.min(i,this.p);for(this.S=this.h+this.m,void 0!==this.midiInput&&(this.T.push.apply(this.T,s),this.I=!0),this.I&&(P(this.T),this.I=!1);this.T.length>0&&this.T[0].time<this.S;)this.B(this.T.shift());this.A.process(t,u,r,a,h),this.h=this.S,this.S=-1}scheduleMidiEvent(t,e){this.scheduleEvent(new y(this.h,t,e,this.A))}notifyParameterValueChanged(t,e){let r=this.M?this.M.source:void 0;this.parameterChangeEvent.emit(new b(this.getCurrentTime(),t,e,r))}scheduleParameterChange(t,e,r){this.scheduleEvent(new b(this.getCurrentTime(),t,e,void 0))}scheduleParameterBang(t,e){this.scheduleEvent(new I(this.getCurrentTime(),t))}sendNumMessage(t,e,r){const n=new g(this.h,this.A.resolveTag(t),r,this.A.resolveTag(e));this.outgoingEvent.emit(n)}sendBangMessage(t,e){const r=new g(this.h,this.A.resolveTag(t),void 0,this.A.resolveTag(e));this.outgoingEvent.emit(r)}sendListMessage(t,e,r){const n=new g(this.h,this.A.resolveTag(t),r,this.A.resolveTag(e));this.outgoingEvent.emit(n)}getParameterValue(t){return this.A.getParameterValue(t)}flushClockEvents(t,e,r){this.flushClockEventsWithValue(t,e,void 0,r)}flushClockEventsWithValue(t,e,r,n){for(let i=0;i<this.T.length;i++)if(this.T[i]instanceof m){const s=this.T[i];s.eventTarget!==t||s.clockIndex!==e&&void 0!==s.clockIndex||void 0!==r&&s.value!==r||(this.T.splice(i,1),n&&this.B(s),i--)}}deleteClockEvents(t){this.flushClockEvents(t,void 0,!1)}scheduleClockEvent(t,e,r){this.scheduleClockEventWithValue(t,e,r,void 0)}scheduleClockEventWithValue(t,e,r,n){this.scheduleEvent(new m(r,e,n,t))}sendMidiEvent(t,e,r,n){const i=new y(this.getCurrentTime(),t,[e,r,n],void 0);this.outgoingEvent.emit(i)}sendMidiEventList(t,e){let r;for(r=2;r<e.length;r+=3)this.sendMidiEvent(t,e[r-2],e[r-1],e[r]);if(r-=3,r<e.length){var n=r-e.length;this.sendMidiEvent(t,e[r],n>1?e[r+1]:void 0,n>2?e[r+2]:void 0)}}sendOutlet(t,e,r){console.log("sendOutlet",t,e,r)}updatePatcherEventTarget(t,e){for(let r=0;r<this.T.length;r++)this.T[r].eventTarget===t&&(this.T[r].eventTarget=e,this.T[r].invalid=!1)}rescheduleEventTarget(t){for(let e=0;e<this.T.length;e++)this.T[e].eventTarget===t&&(this.T[e].invalid=!1)}isInProcess(){return this.S>-1}sendDataRefUpdated(t){this.scheduleEvent(new _(this.getCurrentTime(),t,c.Update,this.A))}get isSync(){return!0}scheduleEvent(t){this.T.push(t),this.isInProcess()?P(this.T):this.I=!0}setPatcherCode(t){return e(this,void 0,void 0,(function*(){const e={};this.A&&this.A.extractState(e),this.A=a.deserializeSrc(t);for(let t=0;t<this.T.length;t++)this.T[t].eventTarget&&(this.T[t].invalid=!0);this.A.setEngineAndPatcher(this,null),this.scheduleEvent(new T(this.h,d.BEGIN)),this.A.initialize(e),this.scheduleEvent(new T(this.h,d.END)),this.A.prepareToProcess(this.l,this.p,!0);for(let t=this.T.length-1;t>=0;t--)this.T[t].invalid&&this.T.splice(t,1)}))}setExternalData(t,r,i){return e(this,void 0,void 0,(function*(){const e=this.A.getNumDataRefs();for(let s=0;s<e;s++){const e=this.A.getDataRef(s);if(e.name==t){e.arrayBuffer=r,i instanceof n&&(e.channels=i.channels,e.sampleRate=i.sampleRate),this.sendDataRefUpdated(s);break}}}))}releaseExternalData(t){return e(this,void 0,void 0,(function*(){const e=this.A.getNumDataRefs();let i,s;for(let o=0;o<e;o++){const e=this.A.getDataRef(o);if(e.name==t){i=e.arrayBuffer,e.arrayBuffer=new ArrayBuffer(0),e.channels?(s=new n(e.channels,e.sampleRate),e.channels=0,e.sampleRate=0):s=new r,this.sendDataRefUpdated(o);break}}if(!i)throw new Error(`Invalid DataBuffer. No DataBuffer with id ${t} found.`);return{data:i,typeDesc:s}}))}getPreset(){return e(this,void 0,void 0,(function*(){let t={};return this.A.getPreset(t),t}))}setPreset(t){this.scheduleEvent(new w(this.h,l.Set,t))}presetTouched(){this.v||this.outgoingEvent.emit(new w(this.h,l.Touched,void 0))}}var N,D;function R(t){return class extends t{constructor(...t){super(),this.changeEvent=new u,this.P=new u;const e=t[0];this.O=e.notificationSetting,this.convertFromNormalizedValue=e.scaling.convertFromNormalized,this.convertToNormalizedValue=e.scaling.convertToNormalized,this.constrainParameterValue=e.scaling.constrainParameterValue,this.initialValue=e.initialValue,this.N=e.initialValue,this.displayName=e.displayName||e.name,this.exponent=e.exponent,this.id=e.id,this.index=e.index,this.min=e.min,this.max=e.max,this.name=e.name,this.steps=e.steps,this.unit=e.unit||""}get notificationSetting(){return this.O}get normalizedValue(){return this.convertToNormalizedValue(this.N)}set normalizedValue(t){this.D(this.convertFromNormalizedValue(t))}R(t){this.O=t}D(t){t=this.constrainParameterValue(t),this.N!==t&&(this.N=t,this.P.emit(this),this.notificationSetting===D.All&&this.changeEvent.emit(t))}C(t){this.N=t,this.changeEvent.emit(t)}}}!function(t){t[t.Number=0]="Number",t[t.Bang=1]="Bang",t[t.List=2]="List",t[t.Signal=3]="Signal",t[t.Count=4]="Count",t[t.Enum=5]="Enum"}(N||(N={})),function(t){t[t.All=0]="All",t[t.Internal=1]="Internal"}(D||(D={}));R(Object);R(Object);R(Object);class x{constructor(){this.k={},this.U=new Float32Array(128)}addParam(t,e){t.type==a.ParameterTypeSignal&&t.ioType===a.IOTypeInput&&(this.k[t.signalIndex]={name:e,param:new Float32Array(128)})}getParamName(t){let e=this.k[t];return void 0!==e?e.name:void 0}getParamArray(t,e,r){if(e.length==r)return e;{let n=this.k[t];return n.param.length!=r&&(n.param=new Float32Array(r)),n.param.fill(e[0])}}}var C,k;!function(t){t[t.LoadPatcher=0]="LoadPatcher",t[t.ScheduleEvent=1]="ScheduleEvent",t[t.TransferBuffer=2]="TransferBuffer",t[t.ReleaseBuffer=3]="ReleaseBuffer",t[t.SetPreset=4]="SetPreset",t[t.GetPreset=5]="GetPreset",t[t.Invalidate=6]="Invalidate"}(C||(C={})),function(t){t[t.LoadPatcherFinished=1e3]="LoadPatcherFinished",t[t.OutgoingEvent=1002]="OutgoingEvent",t[t.ReleasedBuffer=1003]="ReleasedBuffer",t[t.TransferBufferFinished=1004]="TransferBufferFinished",t[t.GetPresetResponse=1005]="GetPresetResponse"}(k||(k={}));var U=__webpack_require__(834).Buffer;const z=JSON.parse(U.from("XXXX___RNBOPATCHERDESC_REPLACE___XXXX","base64").toString("utf-8")),j=U.from("XXXX___RNBOPATCHERSRC_REPLACE___XXXX","base64").toString("utf-8");class X extends AudioWorkletProcessor{constructor(i){super(i),this.j=new O,this.X=[],this.F=[],this.$=new x,this.V=i=>e(this,void 0,void 0,(function*(){switch(i.data[0]){case C.LoadPatcher:yield this.j.setPatcherDesc(z),yield this.j.setPatcherCode(j);for(let t=0;t<this.j.getNumParameters();t++){const e=this.j.getParameterInfo(t);this.$.addParam(e,this.j.getParameterName(t))}this.X=new Array(this.j.getNumInputChannels()+this.j.getNumSignalInParameters()),this.F=new Array(this.j.getNumOutputChannels()+this.j.getNumSignalOutParameters()),this.j.process([],0,[[]],1,0),this.port.postMessage([k.LoadPatcherFinished]);break;case C.ScheduleEvent:this.j.scheduleEvent((t=>{switch(t.type){case f.ClockEvent:return new m(t.time,t.clockIndex,t.value,t.eventTarget);case f.DataRefEvent:return new _(t.time,t.dataRefIndex,t.action,t.eventTarget);case f.MessageEvent:return new g(t.time,t.tag,t.payload,t.objectId,t.eventTarget);case f.MIDIEvent:return new y(t.time,t.port,t.data,t.eventTarget);case f.ParameterEvent:return new b(t.time,t.target,t.value,t.source,t.eventTarget);case f.ParameterBangEvent:return new I(t.time,t.target,t.eventTarget);case f.PresetEvent:return new w(t.time,t.action,t.preset);case f.TransportEvent:return new v(t.time,t.state);case f.TempoEvent:return new M(t.time,t.tempo);case f.BeatTimeEvent:return new E(t.time,t.beattime);case f.TimeSignatureEvent:return new S(t.time,t.numerator,t.denominator);case f.StartupEvent:return new T(t.time,t.phase);default:throw new Error(`Unable to deserialize RNBOEvent of type ${t.type}`)}})(i.data[1]));break;case C.TransferBuffer:{const e=i.data[1];this.j.setExternalData(e.memoryId,e.data,(e=>{switch(e.type){case t.Float32Audio:return new n(e.channels,e.sampleRate);case t.TypedArray:return new r;default:throw new Error(`Unable to deserialize RNBODataDesc of type ${e.type}`)}})(e.typeDesc)),this.port.postMessage([k.TransferBufferFinished,{memoryId:e.memoryId}]);break}case C.ReleaseBuffer:{const t=i.data[1],{data:e,typeDesc:r}=yield this.j.releaseExternalData(t.memoryId);this.port.postMessage([k.ReleasedBuffer,{memoryId:t.memoryId,data:e,typeDesc:r.serialize()}],[e]);break}case C.GetPreset:{const t=yield this.j.getPreset();this.port.postMessage([k.GetPresetResponse,{preset:t}]);break}case C.SetPreset:{const t=i.data[1];this.j.setPreset(t.preset)}}})),this.L=t=>{this.port.postMessage([k.OutgoingEvent,t.serialize()])},this.q=t=>{this.port.postMessage([k.OutgoingEvent,t.serialize()])},this.j.outgoingEvent.subscribe(this.L),this.j.parameterChangeEvent.subscribe(this.q),this.port.onmessage=this.V,this.port.start()}static get parameterDescriptors(){return XXXX___RNBOPARAMDESCRIPTORS_REPLACE___XXXX}process(t,e,r){let n,i,s=0,o=0;for(n=0;n<t.length;n++){const e=t[n];for(i=0;i<e.length&&(s<this.X.length&&e[i].length);i++)this.X[s]=e[i],s++}for(n=0;n<e.length;n++){const t=e[n];for(i=0;i<t.length&&o<this.F.length;i++)this.F[o]=t[i],o++}let u=0;o>0&&this.F.length&&this.F[0]?u=this.F[0].length:e.length&&e[0]&&e[0].length&&e[0][0]?u=e[0][0].length:s>0&&this.X.length&&this.X[0]?u=this.X[0].length:t.length&&t[0]&&t[0].length&&t[0][0]&&(u=t[0][0].length),u||(u=128);for(let t=s;t<this.X.length;t++){const e=this.$.getParamName(t);void 0!==e&&(this.X[t]=this.$.getParamArray(t,r[e],u),s++)}return this.j.setCurrentTime(1e3*currentTime),this.j.prepareToProcess(sampleRate,u),this.j.process(this.X,s,this.F,o,u),!0}}let F="XXXX---RNBOPROCESSORNAME_REPLACE---XXXX";F.startsWith("XXXX---RNBOPROCESSORNAME_REPLACE---")&&(F="RNBOProcessor"),registerProcessor(F,X)})()})();', wasm: '(()=>{var __webpack_modules__={133:(module,__unused_webpack_exports,__webpack_require__)=>{var Float32Buffer=__webpack_require__(852).Float32Buffer,Float64Buffer=__webpack_require__(852).Float64Buffer,Float32MultiBuffer=__webpack_require__(852).Float32MultiBuffer,Float64MultiBuffer=__webpack_require__(852).Float64MultiBuffer,IntBuffer=__webpack_require__(852).IntBuffer,UInt8Buffer=__webpack_require__(852).UInt8Buffer,SampleBuffer=__webpack_require__(852).SampleBuffer,ExternalLoaderFactory=__webpack_require__(126).ExternalLoaderFactory;let Xoshiro=__webpack_require__(925);var patcherSerialKey="XX__PatcherSerialKey__XX",eventTargetKey="XX__EventTargetKey__XX",ParameterTypeNumber=0,ParameterTypeBang=1,ParameterTypeList=2,ParameterTypeSignal=3,ParameterTypeCount=4,IOTypeInput=0,IOTypeOutput=1,IOTypeUndefined=2,INVALID_INDEX=Number.MAX_SAFE_INTEGER;function globalrandom(){return Math.random()}function pi01(){return Math.PI}var rnbo_abs=Math.abs,rnbo_fabs=Math.abs,rnbo_acos=Math.acos,rnbo_acosh=Math.acosh,rnbo_asin=Math.asin,rnbo_asinh=Math.asinh,rnbo_atan=Math.atan,rnbo_atan2=Math.atan2,rnbo_atanh=Math.atanh,rnbo_cbrt=Math.cbrt,rnbo_ceil=Math.ceil,rnbo_cos=Math.cos,rnbo_cosh=Math.cosh,rnbo_exp=Math.exp,rnbo_expm1=Math.expm1,rnbo_floor=Math.floor,rnbo_fround=Math.round,rnbo_imul=Math.imul,rnbo_log=Math.log,rnbo_log10=Math.log10,rnbo_log1p=Math.log1p,rnbo_log2=Math.log2,rnbo_pow=Math.pow,rnbo_round=rnbo_fround,rnbo_sign=Math.sign,rnbo_sin=Math.sin,rnbo_sinh=Math.sinh,rnbo_sqrt=Math.sqrt,rnbo_tan=Math.tan,rnbo_tanh=Math.tanh,trunc=Math.trunc,rnbo_trunc=Math.trunc,rnbo_number_max=()=>Math.MAX_VALUE,rnbo_isnan=isNaN;function fixnan(t){return isNaN(t)?0:t}function fract(t){return t%1}function fixdenorm(t){return t}function isdenorm(t){return!1}var fastsin=Math.sin,fastcos=Math.cos,fastexp=Math.exp,fastpow=Math.pow,fasttan=Math.tan;function nextpoweroftwo(t){return 0===t?1:(t--,t|=t>>1,t|=t>>2,t|=t>>4,t|=t>>8,(t|=t>>16)+1)}var MAX_32BIT_INT=Math.pow(2,32);function uint32_add(t,e){var n=t+e;return n>=MAX_32BIT_INT&&(n-=MAX_32BIT_INT),Math.trunc(n)}function uint32_trunc(t){return t>>>0}function uint32_rshift(t,e){return t>>>e}function imod(t,e){return(0|t)%(0|e)}function imod_nocast(t,e){return t%e}function getArrayValueAtIndex(t,e){return t[e]}function allocateArray(t,e){return new Array(t)}function createListCopy(t){return t.slice(0)}function jsCreateListCopy(t){return createListCopy(t)}function list(){let t=[];for(let e=0;e<arguments.length;e++){let n=arguments[e];if(Array.isArray(n))for(let e=0;e<n.length;e++)t.push(n[e]);else t.push(n)}return t}function resizeSignal(t,e,n){for(var r=t||[],i=e;i<n;i++)r[i]=0;return r}function freeSignal(t){return null}function zeroSignal(t,e){t&&t.fill(0)}function fillSignal(t,e,n,r){t&&t.fill(n,r)}function copySignal(t,e,n){for(let r=0;r<n;r++)t[r]=e[r]}function containsValue(t){return void 0!==t}function addressOf(t){return t}function systemticks(){return Date.now()}function bitwiseFloat(t){var e=new Uint32Array(1);return e[0]=t,new DataView(e.buffer).getFloat32(0,!0)}function imul(t,e){return Math.imul(t,e)}var MIDI_StatusByteReceived=1,MIDI_SecondByteReceived=2,MIDI_NoteOff=3,MIDI_NoteOn=4,MIDI_Aftertouch=5,MIDI_CC=6,MIDI_ProgramChange=7,MIDI_ChannelPressure=8,MIDI_PitchBend=9,MIDI_Sysex_Started=10,MIDI_Sysex_Complete=11,MIDI_Generic=99,MIDI_InvalidByte=-1,MIDI_NoteOffMask=128,MIDI_NoteOnMask=144,MIDI_AfterTouchMask=160,MIDI_CCMask=176,MIDI_ProgramChangeMask=192,MIDI_ChannelPressureMask=208,MIDI_PitchBendMask=224,MIDI_QuarterFrame=241,MIDI_SongPos=242,MIDI_SongSel=243,MIDI_TuneRequest=246,MIDI_SysexStart=240,MIDI_SysexEnd=247,MIDI_Clock=248,MIDI_Start=250,MIDI_Continue=251,MIDI_Stop=252,MIDI_ActiveSense=254,MIDI_Reset=255,MIDI_CC_Sustain=64,MIDI_CC_Sostenuto=66,MIDI_CC_AllNotesOff=123,MIDI_CC_PressureMSB=70,MIDI_CC_PressureLSB=102,MIDI_CC_TimbreMSB=74,MIDI_CC_TimbreLSB=106,MIDI_NoteState_Off=0,MIDI_NoteState_On=1,MIDI_NoteState_Sustained=2,CLOCKS_PER_SEC=1;function parseMidi(t,e,n){if(240==e)return MIDI_Sysex_Started;if(t==MIDI_Sysex_Started)return 247==e?MIDI_Sysex_Complete:e<=127?t:MIDI_InvalidByte;if(e>127)return MIDI_StatusByteReceived;var r=240&n;return t==MIDI_StatusByteReceived?r==MIDI_ProgramChangeMask?MIDI_ProgramChange:r==MIDI_ChannelPressureMask?MIDI_ChannelPressure:MIDI_SecondByteReceived:t==MIDI_SecondByteReceived?r==MIDI_NoteOffMask||r==MIDI_NoteOnMask&&0==e?MIDI_NoteOff:r==MIDI_NoteOnMask?MIDI_NoteOn:r==MIDI_AfterTouchMask?MIDI_Aftertouch:r==MIDI_CCMask?MIDI_CC:r==MIDI_PitchBendMask?MIDI_PitchBend:MIDI_Generic:t}function getMIDIChannel(t){var e=240&t;return e>=128&&e<=224?15&t:0}function initDataRef(t,e,n){return(t={}).name=e,t.isValid=!1,t.wantsFillFlag=!1,t.bytesToAllocate=0,t.channels=0,t.sampleRate=0,t.internal=n,t.index=-1,t.wantsFill=function(){return this.wantsFillFlag},t.setWantsFill=function(t){this.wantsFillFlag=t},t.requestSizeInBytes=function(t,e){(t>this.bytesToAllocate||e)&&(this.bytesToAllocate=t)},t.getRequestedSizeInBytes=function(){return this.bytesToAllocate},t.resetRequestedSizeInByte=function(){this.bytesToAllocate=0},t.getSizeInBytes=function(){return this.arrayBuffer.byteLength},t.hasRequestedSize=function(){return this.bytesToAllocate>0},t.isInternal=function(){return this.internal},t.getIndex=function(){return this.index},t.setIndex=function(t){this.index=t},t.getCurrentIndex=function(){return 0},t.clear=function(){t.arrayBuffer=new ArrayBuffer(0)},t.clear(),t}function initMultiRef(){var t={index:0,current:0,dataRefs:[],count:0};for(let e=0;e<arguments.length;e++)t.dataRefs.push(arguments[e]),t.count++;return t.setCurrent=function(t){t>=0&&t<this.count&&(this.current=t)},t.getCurrentIndex=function(){return this.current},t.getIndex=function(){return this.index},t.setIndex=function(t){this.index=t},t}function updateMultiRef(t,e,n){e.setCurrent&&e.getIndex&&(e.setCurrent(n),t.getEngine().sendDataRefUpdated(e.getIndex()))}function updateDataRef(t,e){t.getEngine().sendDataRefUpdated(e.getIndex())}function reInitDataView(t,e){return new t.reinitConstructor(e)}function FIXEDSIZEARRAYINIT(){let t=arguments[0];if(void 0!==t){let e=new Array(t);if(e.fill(0),void 0!==arguments[1]){let n=Array.from(arguments);n.splice(0,1);for(let r=0;r<t;r++)e[r]=FIXEDSIZEARRAYINIT.apply(null,n)}return e}return new Array}function TAG(t){let e=0;for(let n=0;n<t.length;n++){e=t.charCodeAt(n)+(e<<6)+(e<<16)-e}return 0|e}function serializeArrayToList(t,e){return t}function deserializeArrayFromList(t,e,n){t}function serializeDataRef(t){return t.resetRequestedSizeInByte(),t}function serializeBuffer(t){return{data:t.arrayBuffer.slice(0),channels:t.channels,sampleRate:t.sampleRate}}function deserializeBuffer(t,e,n){e.arrayBuffer=n.data.slice(0),t.getEngine().sendDataRefUpdated(e.getIndex())}function RNBO_ASSERT(){}function _evalSrc(src){var rnboObj;return eval(src),rnboObj}function getSubState(t,e){return void 0===t[e]&&(t[e]={}),t[e]}function getSubStateAt(t,e,n){return void 0===t[e]&&(t[e]=[]),void 0===t[e][n]&&(t[e][n]={}),t[e][n]}function stateIsEmpty(t){return 0===Object.keys(t).length}function TransportState(t){return t}function listWithSize(t){return new Array(t)}let intlistWithSize=listWithSize,indexlistWithSize=listWithSize;function RNBO_UNUSED(){}function ENGINE(){}function EXTERNALENGINE(){}function INTERNALENGINE(){}let xoshiro_reset=Xoshiro.reset,xoshiro_next=Xoshiro.next;module.exports={deserializeSrc:function(t){return _evalSrc(t)},deserializeJSON:function(t){var e=t;return"string"==typeof e&&(e={src:t}),_evalSrc(e.src)},extractOptionsFromJSON:function(t){var e=t;return"string"==typeof e&&(e=JSON.parse(t)),e.options?e.options:{}},evalFunction(functionAsString){var tmpFunction,functionAsString="tmpFunction = "+functionAsString;return eval(functionAsString),tmpFunction},nextpoweroftwo,ParameterTypeNumber,ParameterTypeBang,ParameterTypeList,ParameterTypeSignal,ParameterTypeCount,IOTypeInput,IOTypeOutput,IOTypeUndefined:IOTypeUndefined.length,TAG}},852:t=>{function e(){let t=this.dataRef.getSizeInBytes()/this.BASEARRAYVIEW.BYTES_PER_ELEMENT,e=this.getChannels();return e?t/e:0}function n(t,e){let n=t*this.BASEARRAYVIEW.BYTES_PER_ELEMENT*e;this.requestedChannels=e,this.dataRef.requestSizeInBytes(n,!1)}function r(t,e){return this[this.getChannels()*Math.floor(e)+t]}function i(t,e){const n=this.getChannels();return t<0||t>=n||e<0||e>=this.getSize()?0:this[n*Math.floor(e)+t]}function s(t,e,n){this[this.getChannels()*Math.floor(e)+t]=n}function a(t,e,n){const r=this.getChannels();t<0||t>=r||e<0||e>=this.getSize()||(this[r*Math.floor(e)+t]=n)}function o(){return this.dataRef.channels}function u(){return this.dataRef.sampleRate}function h(t){this.dataRef.sampleRate=t}function c(){this.dataRef.clear()}function f(t){if(t!==this.dataRef.channels){let e=this.getSize();return this.clear(),this.dataRef.channels=t,this.setSize(e)}return this}function _(){if(this.isAudioBuffer&&this.requestedChannels!==this.getChannels()&&0!==this.requestedChannels&&(this.getChannels()>0&&this.setZero(),this.dataRef.channels=this.requestedChannels,this.requestedChannels=0),this.dataRef.bytesToAllocate>0&&(this.dataRef.bytesToAllocate!==this.dataRef.getSizeInBytes()||!this.dataRef.isInternallyAllocated)){let t;if(this.dataRef.isInternallyAllocated){let e=Math.min(this.dataRef.arrayBuffer.byteLength,this.dataRef.bytesToAllocate);e/=this.BASEARRAYVIEW.BYTES_PER_ELEMENT,t=new this.BASEARRAYVIEW(this.dataRef.arrayBuffer,0,e)}this.dataRef.arrayBuffer=new ArrayBuffer(this.dataRef.bytesToAllocate),this.dataRef.isInternallyAllocated=!0;let e=new this.BASEARRAYVIEW(this.dataRef.arrayBuffer);return t?e.set(t):this.dataRef.wantsFillFlag=!0,m(e,this.dataRef,this.BASEARRAYVIEW),this.isAudioBuffer&&v(e),e.reinitConstructor=this.reinitConstructor,e}return this}function l(t){let e=this.getChannels();return this.requestedChannels=e,this.dataRef.requestSizeInBytes(t*this.BASEARRAYVIEW.BYTES_PER_ELEMENT*e,!0),this.allocateIfNeeded()}function I(){this.fill&&this.fill(0)}function M(){return this.touched}function b(t){this.touched=t}function p(t){this.dataRef.setWantsFill(t)}function d(){return this.dataRef.getIndex()}function y(){return 0}function m(t,r,i){t.dataRef=r,t.BASEARRAYVIEW=i,t.getSize=e,t.requestSize=n,t.setSize=l,t.allocateIfNeeded=_,t.setZero=I,t.clear=c,t.getChannels=o,t.getSampleRate=u,t.setWantsFill=p,t.getIndex=d,r.setZero=function(){t.setZero()},t.touched=!1,t.getTouched=M,t.setTouched=b}function v(t){t.getSample=r,t.getSampleSafe=i,t.setSample=s,t.setSampleSafe=a,t.setChannels=f,t.setSampleRate=h,t.isAudioBuffer=!0,t.requestedChannels=0,t.getCurrentIndex=y}let S=function(t,e){let n;return n=t.arrayBuffer?new e(t.arrayBuffer):{},m(n,t,e),n.reinitConstructor=this.constructor,n};(S.prototype=Object.create(null)).constructor=S;let D=function(t,e){let n=S.call(this,t,e);return v(n),n};(D.prototype=Object.create(S)).constructor=D;let w=function(t){return D.call(this,t,Float32Array)};(w.prototype=Object.create(D.prototype)).constructor=w;let A=function(t){return D.call(this,t,Float64Array)};(A.prototype=Object.create(D.prototype)).constructor=A;let g=function(t,e){let n=new e(t.dataRefs[t.current]);return n.multiRef=t,n.setCurrent=function(t){this.multiRef.setCurrent(Math.round(t))},n.getIndex=function(){return this.multiRef.getIndex()},n.getCurrentIndex=function(){return this.multiRef.getCurrentIndex()},n.reinitConstructor=this.constructor,n};g.prototype=Object.create(null),g.constructor=g;let E=function(t){return g.call(this,t,w)};(E.prototype=Object.create(g.prototype)).constructor=E;let O=function(t){return g.call(this,t,A)};(O.prototype=Object.create(g.prototype)).constructor=O;let P=function(t){return S.call(this,t,Int32Array)};(P.prototype=Object.create(S.prototype)).constructor=P;let T=function(t){return S.call(this,t,Uint8Array)};(T.prototype=Object.create(S.prototype)).constructor=T,t.exports={Float32Buffer:w,Float64Buffer:A,SampleBuffer:A,Float32MultiBuffer:E,Float64MultiBuffer:O,IntBuffer:P,UInt8Buffer:T}},126:t=>{var e=function(){};(e.prototype=Object.create(null)).constructor=e,e.prototype.setEngineAndPatcher=function(){},e.prototype.initialize=function(){},e.prototype.getNumParameters=function(){return 0},e.prototype.setParameterValue=function(){},e.prototype.prepareToProcess=function(){},e.prototype.process=function(){},t.exports={ExternalLoaderFactory:function(){return console.log("WARNING: Externals are not yet supported in Javascript"),new e}}},925:t=>{function e(t,e,n,r){n[r]=t[e]+0x9e3779b97f4a7c15n,n[r]=0xbf58476d1ce4e5b9n*(n[r]^n[r]>>30n),n[r]=0x94d049bb133111ebn*(n[r]^n[r]>>27n),n[r]=n[r]^n[r]>>31n}t.exports={reset:function(t,n){let r=new BigUint64Array(1);r[0]=BigInt(Math.trunc(1e6*t)),e(r,0,n,0),e(n,0,n,1),e(n,1,n,2),e(n,2,n,3)},next:function(t){let e=new BigUint64Array(1),n=new BigUint64Array(1);return n[0]=t[0]+t[3],e[0]=t[1]<<17n,t[2]^=t[0],t[3]^=t[1],t[1]^=t[2],t[0]^=t[3],t[2]^=e[0],t[3]=t[3]<<45n|t[3]>>19n,n[0]=n[0]>>11n,2220446049250313e-31*Number(n[0])-1}}}},__webpack_module_cache__={};function __webpack_require__(t){var e=__webpack_module_cache__[t];if(void 0!==e)return e.exports;var n=__webpack_module_cache__[t]={exports:{}};return __webpack_modules__[t](n,n.exports,__webpack_require__),n.exports}var __webpack_exports__={};(()=>{var t;!function(t){t[t.Float32Audio=0]="Float32Audio",t[t.TypedArray=1]="TypedArray"}(t||(t={}));class e{constructor(){this.type=t.TypedArray}serialize(){return{type:this.type}}}class n{constructor(e,n){this.channels=0,this.sampleRate=0,this.type=t.Float32Audio,this.channels=e,this.sampleRate=n}static fromAudioBuffer(t){return new n(t.numberOfChannels,t.sampleRate)}get isInterleaved(){return!0}serialize(){return{channels:this.channels,sampleRate:this.sampleRate,type:this.type}}}var r,i,s,a;!function(t){t[t.BufferTransfer=0]="BufferTransfer",t[t.ClockEvent=1]="ClockEvent",t[t.DataRefEvent=2]="DataRefEvent",t[t.MessageEvent=3]="MessageEvent",t[t.MIDIEvent=4]="MIDIEvent",t[t.ParameterEvent=5]="ParameterEvent",t[t.ParameterBangEvent=6]="ParameterBangEvent",t[t.PresetEvent=7]="PresetEvent",t[t.StartupEvent=8]="StartupEvent",t[t.TransportEvent=9]="TransportEvent",t[t.TempoEvent=10]="TempoEvent",t[t.BeatTimeEvent=11]="BeatTimeEvent",t[t.TimeSignatureEvent=12]="TimeSignatureEvent"}(r||(r={}));class o{constructor(t=0,e){this.invalid=!1,this.time=t,this.eventTarget=e}serialize(){return{eventTarget:this.eventTarget,invalid:this.invalid,source:this.source,time:this.time}}}!function(t){t[t.Update=1]="Update"}(i||(i={}));class u extends o{constructor(t,e,n,i="",s){super(t,s),this.type=r.MessageEvent,this.objectId=i,this.tag=e,this.payload=n}serialize(){return Object.assign(super.serialize(),{payload:this.payload,objectId:this.objectId,tag:this.tag,type:this.type})}}class h extends o{constructor(t,e,n,i){if(super(t,i),this.type=r.MIDIEvent,n.length>3)throw new Error(`MIDIData can only contain a maximum of 3 bytes. Received ${n.length}`);if(this.data=n,this.data.length<3){const t=n.length;this.data.length=3,this.data=this.data.fill(void 0,t,3)}let s=0;for(let t=0;t<3;t++)void 0!==n[t]&&s++;if(s<1)throw new Error("MIDIData must at least have the first byte set.");this.length=s,this.status=240&n[0],this.channel=15&n[0],this.port=e}serialize(){return Object.assign(super.serialize(),{channel:this.channel,data:this.data,port:this.port,type:this.type})}}class c extends o{constructor(t,e,n,i,s){super(t,s),this.type=r.ParameterEvent,this.target=e,this.value=n,this.source=i}serialize(){return Object.assign(super.serialize(),{target:this.target,type:this.type,value:this.value})}}!function(t){t[t.Set=1]="Set",t[t.Touched=2]="Touched"}(s||(s={}));class f extends o{constructor(t,e,n){super(t,void 0),this.type=r.PresetEvent,this.action=e,this.preset=n}serialize(){return Object.assign(super.serialize(),{action:this.action,type:this.type,preset:this.preset})}}!function(t){t[t.BEGIN=0]="BEGIN",t[t.END=1]="END"}(a||(a={}));var _,l;!function(t){t[t.Number=0]="Number",t[t.Bang=1]="Bang",t[t.List=2]="List",t[t.Signal=3]="Signal",t[t.Count=4]="Count",t[t.Enum=5]="Enum"}(_||(_={})),function(t){t[t.All=0]="All",t[t.Internal=1]="Internal"}(l||(l={}));(()=>{try{if("object"==typeof WebAssembly&&"function"==typeof WebAssembly.instantiate){const t=new WebAssembly.Module(Uint8Array.of(0,97,115,109,1,0,0,0));if(t instanceof WebAssembly.Module)return new WebAssembly.Instance(t)instanceof WebAssembly.Instance}}catch(t){}})();"undefined"!=typeof isSecureContext&&isSecureContext;Math.pow(10,4);const I=t=>t.slice();class M{constructor(){this.t=[],this.i=[]}get listenerCount(){return this.t.length+this.i.length}emit(t){if(this.t.length){const e=I(this.t);for(let n=0,r=e.length;n<r;n++)e[n](t)}if(this.i.length){const e=I(this.i);for(let n=0,r=e.length;n<r;n++)e[n](t);e.forEach((t=>this.unsubscribe(t)))}}once(t){return this.i.push(t),{unsubscribe:()=>this.unsubscribe(t)}}subscribe(t){return this.t.push(t),{unsubscribe:()=>this.unsubscribe(t)}}unsubscribe(t){const e=this.t.indexOf(t);e>=0&&this.t.splice(e,1);const n=this.i.indexOf(t);n>=0&&this.i.splice(n,1)}removeAllSubscriptions(){this.t=[],this.i=[]}}function b(t){return class extends t{constructor(...t){super(),this.changeEvent=new M,this.o=new M;const e=t[0];this.u=e.notificationSetting,this.convertFromNormalizedValue=e.scaling.convertFromNormalized,this.convertToNormalizedValue=e.scaling.convertToNormalized,this.constrainParameterValue=e.scaling.constrainParameterValue,this.initialValue=e.initialValue,this.h=e.initialValue,this.displayName=e.displayName||e.name,this.exponent=e.exponent,this.id=e.id,this.index=e.index,this.min=e.min,this.max=e.max,this.name=e.name,this.steps=e.steps,this.unit=e.unit||""}get notificationSetting(){return this.u}get normalizedValue(){return this.convertToNormalizedValue(this.h)}set normalizedValue(t){this._(this.convertFromNormalizedValue(t))}l(t){this.u=t}_(t){t=this.constrainParameterValue(t),this.h!==t&&(this.h=t,this.o.emit(this),this.notificationSetting===l.All&&this.changeEvent.emit(t))}I(t){this.h=t,this.changeEvent.emit(t)}}}b(Object);b(Object);b(Object);var p=__webpack_require__(133);class d{constructor(){this.M={},this.p=new Float32Array(128)}addParam(t,e){t.type==p.ParameterTypeSignal&&t.ioType===p.IOTypeInput&&(this.M[t.signalIndex]={name:e,param:new Float32Array(128)})}getParamName(t){let e=this.M[t];return void 0!==e?e.name:void 0}getParamArray(t,e,n){if(e.length==n)return e;{let r=this.M[t];return r.param.length!=n&&(r.param=new Float32Array(n)),r.param.fill(e[0])}}}class y{constructor(t,e){this.m=0,this.v=0,this.S=!1,this.D=new d,this.A=e;let n=new this.A.CoreObject;this.g=n;let r={handleParameterEvent:t.handleParameterEvent.bind(t),handleMidiEvent:t.handleMidiEvent.bind(t),handleMessageEvent:t.handleMessageEvent.bind(t),handlePresetEvent:t.handlePresetEvent.bind(t)},i=this.A.EventHandler.implement(r);this.O=n.createParameterInterface(i);for(let t=0;t<n.getNumParameters();t++){let e=n.getParameterInfo(t);this.D.addParam(e,n.getParameterName(t))}this.m=n.getNumInputChannels()+n.getNumSignalInParameters(),this.v=n.getNumOutputChannels(),this.S=!0}isReady(){return this.S}pushArray(t){let e=this.g.getArrayPassingHEAP(t.length);return this.A.HEAPF64.set(t,e>>3),e}retrieveArray(t){let e=[];for(let n=0;n<t.size();n++)e.push(t.get(n));return e}setExternalData(t,r,i){const s=new Uint8Array(r),a=this.g.getNewMemoryBuffer(s.byteLength);this.A.HEAPU8.set(s,a),i instanceof n?this.g.setExternalAudioBuffer(t,a,s.byteLength,i.channels,i.sampleRate):i instanceof e&&this.g.setExternalUntypedBuffer(t,a,s.byteLength)}releaseExternalData(t){let r,i=this.g.getDataRefIndex(t),s=this.g.getDataRefType(i),a=this.g.getDataRefData(i),o=new Uint8Array(a.sizeInBytes);return o.set(this.A.HEAPU8.subarray(a.data,a.data+a.sizeInBytes)),r=1==s.type?new n(s.channels,s.sampleRate):new e,this.g.releaseDataRef(i),[o.buffer,r]}getCurrentTime(){return this.g.getCurrentTime()}setCurrentTime(t){this.g.setCurrentTime(t)}prepareToProcess(t,e){this.g.prepareToProcess(t,e)}process(t,e,n,r,i,s){let a=0,o=0;for(let n=0;n<e&&a<this.m;n++){let e=t[n],r=this.g.getInputChannel(a);this.A.HEAPF64.set(e,r>>3),a++}if(s)for(let t=a;t<this.m;t++){let e=this.D.getParamName(t);if(void 0!==e){let n=this.g.getInputChannel(t);this.A.HEAPF64.set(this.D.getParamArray(t,s[e],i),n>>3),a++}}this.g.process(a,this.v,i);for(let t=0;t<r&&o<this.v;t++){let e=n[t],r=this.g.getOutputChannel(o)>>3;e.set(this.A.HEAPF64.subarray(r,r+e.length)),o++}}resolveTag(t){return this.g.resolveTag(t)}scheduleEvent(t){t.type===r.MIDIEvent?this.g.scheduleMidiEvent(t.time,t.port,t.data[0],t.data[1],t.data[2]):t.type===r.ParameterEvent?this.g.scheduleParameterEvent(t.target,t.time,t.value,t.source):t.type===r.ParameterBangEvent?this.g.scheduleParameterBangEvent(t.target,t.time):t.type===r.MessageEvent?Array.isArray(t.payload)?this.g.sendListMessage(t.tag,t.objectId,this.pushArray(t.payload),t.payload.length,t.time):"number"==typeof t.payload?this.g.sendNumMessage(t.tag,t.objectId,t.payload,t.time):void 0===t.payload&&this.g.sendBangMessage(t.tag,t.objectId,t.time):t.type===r.TransportEvent?this.g.scheduleTransportEvent(t.time,t.state):t.type===r.TempoEvent?this.g.scheduleTempoEvent(t.time,t.tempo):t.type===r.BeatTimeEvent?this.g.scheduleBeatTimeEvent(t.time,t.beattime):t.type===r.TimeSignatureEvent&&this.g.scheduleTimeSignatureEvent(t.time,t.numerator,t.denominator)}getNumParameters(){return this.g.getNumParameters()}getParameterValue(t){return this.g.getParameterValue(t)}numIns(){return this.m}numOuts(){return this.v}getPreset(){return this.g.getPreset()}setPreset(t){this.g.setPreset(t)}}var m,v;!function(t){t[t.LoadPatcher=0]="LoadPatcher",t[t.ScheduleEvent=1]="ScheduleEvent",t[t.TransferBuffer=2]="TransferBuffer",t[t.ReleaseBuffer=3]="ReleaseBuffer",t[t.SetPreset=4]="SetPreset",t[t.GetPreset=5]="GetPreset",t[t.Invalidate=6]="Invalidate"}(m||(m={})),function(t){t[t.LoadPatcherFinished=1e3]="LoadPatcherFinished",t[t.OutgoingEvent=1002]="OutgoingEvent",t[t.ReleasedBuffer=1003]="ReleasedBuffer",t[t.TransferBufferFinished=1004]="TransferBufferFinished",t[t.GetPresetResponse=1005]="GetPresetResponse"}(v||(v={}));class S extends AudioWorkletProcessor{constructor(r){super(r),this.P=!0,this.T=128,this.B=r=>{switch(r.data[0]){case m.LoadPatcher:rnbo_module().then((t=>{this.N=new y(this,t),this.port.postMessage([v.LoadPatcherFinished])}));break;case m.ScheduleEvent:const i=r.data[1];this.N.scheduleEvent(i);break;case m.TransferBuffer:{const i=r.data[1],s=(r=>{switch(r.type){case t.Float32Audio:return new n(r.channels,r.sampleRate);case t.TypedArray:return new e;default:throw new Error(`Unable to deserialize RNBODataDesc of type ${r.type}`)}})(i.typeDesc);this.N.setExternalData(i.memoryId,i.data,s),this.port.postMessage([v.TransferBufferFinished,{memoryId:i.memoryId}]);break}case m.ReleaseBuffer:{const t=r.data[1],[e,n]=this.N.releaseExternalData(t.memoryId);this.port.postMessage([v.ReleasedBuffer,{memoryId:t.memoryId,data:e,typeDesc:n.serialize()}],[e]);break}case m.GetPreset:{const t=JSON.parse(this.N.getPreset());this.port.postMessage([v.GetPresetResponse,{preset:t}]);break}case m.SetPreset:{const t=r.data[1];this.N.setPreset(JSON.stringify(t.preset));break}case m.Invalidate:this.P=!1,this.N=null}},this.port.onmessage=this.B,this.port.start()}static get parameterDescriptors(){return XXXX___RNBOPARAMDESCRIPTORS_REPLACE___XXXX}handleParameterEvent(t){this.port.postMessage([v.OutgoingEvent,new c(t.time,t.index,t.value,t.source,void 0).serialize()])}handleMidiEvent(t){const e=new h(t.time,t.port,[t.b1,t.b2,t.b3],void 0);this.port.postMessage([v.OutgoingEvent,e.serialize()])}handleMessageEvent(t){const e=new u(t.time,this.N.resolveTag(t.tag),0==t.type?t.numValue:1===t.type?this.N.retrieveArray(t.listValue):void 0,this.N.resolveTag(t.objectId));this.port.postMessage([v.OutgoingEvent,e.serialize()])}handlePresetEvent(t){const e=new f(t.time,s.Touched);this.port.postMessage([v.OutgoingEvent,e.serialize()])}process(t,e,n){let r=0,i=0;if(!this.P)return!1;if(!this.N||!this.N.isReady())return!0;let s=0;e.length&&e[0]&&e[0].length&&e[0][0]?s=e[0][0].length:t.length&&t[0]&&t[0].length&&t[0][0]&&(s=t[0][0].length),s||(s=this.T),this.T<s&&(this.T=s),this.N.setCurrentTime(1e3*currentTime),this.N.prepareToProcess(sampleRate,s);const a=[];for(let e=0;e<t.length&&r<this.N.numIns();e++){const n=t[e];for(let t=0;t<n.length&&r<this.N.numIns()&&n[t].length>0;t++)a.push(n[t]),r++}const o=[];for(let t=0;t<e.length&&i<this.N.numOuts();t++){const n=e[t];for(let t=0;t<n.length&&i<this.N.numOuts();t++)o.push(n[t]),i++}return this.N.process(a,r,o,i,s,n),!0}}let D="XXXX---RNBOPROCESSORNAME_REPLACE---XXXX";D.startsWith("XXXX---RNBOPROCESSORNAME_REPLACE---")&&(D="RNBOProcessor"),registerProcessor(D,S)})()})();' };
          class O extends m {
            constructor({ context: t2, parameterNotificationSetting: e2 }, r2) {
              super({ context: t2, parameterNotificationSetting: e2, type: d.Worklet }), r2 ? this.it = r2.it : (this.it = new S(), this.it.setPatcherDesc(R.desc), this.it.setPatcherCode(R.src[0].code)), this.Mt = r2 ? r2.node : void 0;
            }
            Lt() {
              let t2 = "[";
              const e2 = this.it.getNumParameters();
              let r2 = true;
              for (let n2 = 0; n2 < e2; n2++) {
                const e3 = this.it.getParameterInfo(n2);
                if (e3 && void 0 !== e3.type && e3.type === y.ParameterTypeSignal && void 0 !== e3.ioType && e3.ioType === y.IOTypeInput) {
                  const n3 = void 0 === e3.min ? 0 : e3.min, i2 = void 0 === e3.max ? 1 : e3.max, s2 = void 0 === e3.initialValue ? 0 : e3.initialValue;
                  r2 || (t2 += ", "), t2 += "{ name: '" + e3.name + "', automationRate: 'a-rate', defaultValue : " + s2 + ", minValue: " + n3 + ", maxValue: " + i2 + "}", r2 = false;
                }
              }
              return t2 += "]", t2;
            }
            get node() {
              return this.wt(), this.Mt;
            }
            setPatcher(e2, r2) {
              return (0, t.mG)(this, void 0, void 0, function* () {
                if (!this.it) throw new Error("Attempt to set patcher on a WorkletDevice without assigning engine first.");
                this.vt(), yield this.it.setPatcherDesc(e2), this.F.setEngine(this.it), this.it.outgoingEvent.subscribe(this.dt), this.it.prepareToProcess(this.context.sampleRate, 128, false), this.ft = r2.type;
                const t2 = D[r2.type];
                let n2 = this.numInputChannels, i2 = this.numOutputChannels;
                n2 < 1 && (n2 = 1), i2 < 1 && (i2 = 1);
                const a2 = `RNBOProcessor-${(0, s.EL)()}`;
                let o2 = t2.replace("XXXX---RNBOPROCESSORNAME_REPLACE---XXXX", a2).replace("XXXX___RNBOPARAMDESCRIPTORS_REPLACE___XXXX", this.Lt());
                switch (r2.type) {
                  case "js":
                    o2 = o2.replace("XXXX___RNBOPATCHERDESC_REPLACE___XXXX", P.from(JSON.stringify(e2), "utf-8").toString("base64")).replace("XXXX___RNBOPATCHERSRC_REPLACE___XXXX", P.from(this.Et(r2), "utf-8").toString("base64"));
                    break;
                  case "wasm":
                    o2 = this.Et(r2) + "\n\n" + o2;
                }
                const u2 = URL.createObjectURL(new Blob([o2], { type: "text/javascript" }));
                yield this.context.audioWorklet.addModule(u2), this.Mt = new (B())(this.context, a2, this.it.eventSubjects, { numberOfInputs: n2, numberOfOutputs: 1, outputChannelCount: [i2] }), yield this.Mt.loadPatcher(), this.F.parameterChangeEvent.subscribe(this.gt);
              });
            }
          }
          var N = __webpack_require__(676);
          const C = "1.4.0", k = { bufferSize: 1024, parameterNotificationSetting: a.EX.All };
          function x(e2, r2) {
            var n2, i2, a2, o2;
            return (0, t.mG)(this, void 0, void 0, function* () {
              const { context: t2, patcher: u2, type: h2 = "auto" } = e2, f2 = (null === (i2 = null === (n2 = u2.desc) || void 0 === n2 ? void 0 : n2.meta) || void 0 === i2 ? void 0 : i2.rnboversion) || u2.desc.rnboVersion;
              if (f2 !== C && (console.error || console.log)(`
Warning: The patcher was exported with a RNBO version does not match the version of @rnbo/js:
@rnbo/js	v${C}
patcher		v${f2}
In order to have full compatibility and avoid unexpected behavior please ensure that you use the version of @rnbo/js that matches the version of RNBO you used to export your patcher.`.trim()), !(null === (a2 = u2.src) || void 0 === a2 ? void 0 : a2.length) || !Array.isArray(u2.src)) throw new Error("Incompatible patcher. Please export you patch with a newer, matching version of RNBO or adjust the version of @rnbo/js you are using.");
              if (!new Set(null === (o2 = u2.src) || void 0 === o2 ? void 0 : o2.map((t3) => t3.type)).has("js") && !s.f8) throw new Error("Incompatible browser. RNBO requires WASM support in order to run your exported patch as a Device.");
              const c2 = u2.src.find((t3) => s.f8 && "wasm" === t3.type) || u2.src.find((t3) => "js" === t3.type), l2 = Object.assign({}, k, e2.options);
              if (!t2) throw new Error("Missing argument context");
              if (h2 === d.Worklet && !s.I7) throw new Error("Failed to create WorkletDevice due to missing AudioWorklet support. Please use the Device.Script or 'auto' option instead");
              const p2 = "auto" === h2 ? s.I7 ? d.Worklet : d.Script : h2;
              if (p2 !== d.Script && p2 !== d.Worklet) throw new Error(`Unknown Device type ${p2}. Please make sure to use either 'auto' or a valid DeviceType`);
              let g2;
              if (p2 === d.Script) {
                if (r2 && !(r2 instanceof T)) throw new Error("Error: Creating a device from an existing device cannot alter the type of the device. Please make sure to use a consistent 'type' parameter.");
                g2 = new T({ bufferSize: l2.bufferSize, parameterNotificationSetting: l2.parameterNotificationSetting, context: t2 }, (null == r2 ? void 0 : r2.sourceType) === c2.type ? r2 : void 0);
              } else if (p2 === d.Worklet) {
                if (r2 && !(r2 instanceof O)) throw new Error("Error: Creating a device from an existing device cannot alter the type of the device. Please make sure to use a consistent 'type' parameter.");
                g2 = new O({ context: t2, parameterNotificationSetting: l2.parameterNotificationSetting }, r2);
              }
              return r2 && r2.destroy(), g2 = g2, yield g2.setPatcher(u2.desc, c2), g2;
            });
          }
        })(), __webpack_exports__;
      })();
    }, "object" == typeof exports && "object" == typeof module ? module.exports = factory() : "function" == typeof define && define.amd ? define([], factory) : "object" == typeof exports ? exports.RNBO = factory() : root.RNBO = factory();
  }
});

// node_modules/tblswvs/lib/es5/tblswvs_error.js
var require_tblswvs_error = __commonJS({
  "node_modules/tblswvs/lib/es5/tblswvs_error.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TblswvsError = void 0;
    var TblswvsError = class _TblswvsError extends Error {
      constructor(message) {
        super(message);
        Object.setPrototypeOf(this, _TblswvsError.prototype);
      }
    };
    exports2.TblswvsError = TblswvsError;
  }
});

// node_modules/tblswvs/lib/es5/helpers.js
var require_helpers = __commonJS({
  "node_modules/tblswvs/lib/es5/helpers.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.scaleToRange = exports2.shuffle = exports2.inversionMap = exports2.rotate = exports2.areCoprime = exports2.unique = exports2.KEY_REQUIRED_FOR_MUTATION = exports2.SCALE_DEGREE_SHIFTS_REQUIRE_KEY = exports2.SCALE_DEGREE_ERROR = exports2.SELF_SIMILARITY_REQUIRES_COPRIMES = exports2.NON_INTEGER_INPUTS = void 0;
    var tblswvs_error_1 = require_tblswvs_error();
    exports2.NON_INTEGER_INPUTS = "Numbers must be integers";
    exports2.SELF_SIMILARITY_REQUIRES_COPRIMES = "A self-similar melody can only be produced for an input sequence length that is coprime with the output sequence length";
    exports2.SCALE_DEGREE_ERROR = "Scale degrees must be negative or positive, but not 0";
    exports2.SCALE_DEGREE_SHIFTS_REQUIRE_KEY = "Melodic vectors with shift mode 'scale' can only operate on a Melody with a Key";
    exports2.KEY_REQUIRED_FOR_MUTATION = "Mutations require a Melody object with a key";
    var unique = (value, index, self) => {
      return self.indexOf(value) === index;
    };
    exports2.unique = unique;
    var areCoprime = (num1, num2) => {
      if (!Number.isInteger(num1) || !Number.isInteger(num2))
        throw new tblswvs_error_1.TblswvsError(exports2.NON_INTEGER_INPUTS);
      const smaller = num1 > num2 ? num2 : num1;
      for (let i = 2; i <= smaller; i++)
        if (num1 % i === 0 && num2 % i === 0)
          return false;
      return true;
    };
    exports2.areCoprime = areCoprime;
    var rotate = (arr, offset) => {
      let copy = arr.slice();
      if (copy.length > offset) {
        copy.unshift(...copy.splice(-offset));
      } else {
        let i = 0;
        while (i < offset) {
          copy.unshift(copy.splice(-1));
          i++;
        }
      }
      return copy;
    };
    exports2.rotate = rotate;
    var inversionMap = (range) => {
      let map = /* @__PURE__ */ new Map();
      const intervals = Array.isArray(range) ? range.filter(exports2.unique).sort((a, b) => a - b) : [...new Array(range).keys()].map((i) => i + 1);
      for (let i = 0; i < intervals.length; i++)
        map.set(intervals[i], intervals[intervals.length - i - 1]);
      return map;
    };
    exports2.inversionMap = inversionMap;
    var shuffle = (arr) => {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    };
    exports2.shuffle = shuffle;
    var scaleToRange = (num, inputRange, outputRange) => {
      return (num - inputRange[0]) * (outputRange[1] - outputRange[0]) / (inputRange[1] - inputRange[0]) + outputRange[0];
    };
    exports2.scaleToRange = scaleToRange;
  }
});

// node_modules/tblswvs/lib/es5/rhythm.js
var require_rhythm = __commonJS({
  "node_modules/tblswvs/lib/es5/rhythm.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Rhythm = void 0;
    var melody_1 = require_melody();
    var Rhythm = class {
      /**
       * Create a new Rhythm.
       *
       * @param steps Array of 1s and 0s that will represent the rhythm.
       * @param fillMode "wrap" (default) or "silence" to determine how the rhythm will fill itself when longer than the melody
       * @param length number the length of the resulting melody after this rhythm is applied to it
       */
      constructor(steps, fillMode = "wrap", length) {
        this.steps = steps;
        this.fillMode = fillMode;
        this.length = length;
      }
      /**
       * Apply this rhythm to a given Melody.
       *
       * @param melody Melody to transform with by this rhythm
       * @returns a new Melody object with its steps transformed by this rhythm
       */
      applyTo(melody) {
        const rhythmHits = this.steps.filter((step) => step != 0).length;
        const stepHits = Math.ceil(melody.notes.length / rhythmHits);
        let transformedSequence = new Array(stepHits).fill(this.steps).flat();
        if (this.length !== void 0) {
          if (this.length > transformedSequence.length) {
            let remainingStepCount = this.length - transformedSequence.length;
            if (this.fillMode == "silence") {
              transformedSequence.push(...new Array(remainingStepCount).fill(0));
            } else {
              let remainingSteps = Math.ceil(remainingStepCount / this.steps.length);
              transformedSequence.push(...new Array(remainingSteps).fill(this.steps).flat());
            }
          }
          transformedSequence = transformedSequence.slice(0, this.length);
        }
        let processedStepIndex = 0;
        transformedSequence.forEach((step, i) => {
          if (step == 1) {
            transformedSequence[i] = melody.notes[processedStepIndex % melody.notes.length];
            processedStepIndex++;
          } else {
            transformedSequence[i] = { note: "rest", midi: -1, octave: -3 };
          }
        });
        return new melody_1.Melody(transformedSequence, melody.key);
      }
    };
    exports2.Rhythm = Rhythm;
  }
});

// node_modules/tblswvs/lib/es5/melody.js
var require_melody = __commonJS({
  "node_modules/tblswvs/lib/es5/melody.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Melody = void 0;
    var tblswvs_error_1 = require_tblswvs_error();
    var helpers = require_helpers();
    var rhythm_1 = require_rhythm();
    var Melody = class _Melody {
      constructor(notes, key) {
        this.notes = notes;
        if (key != void 0) {
          this.key = key;
          notes.forEach((note) => {
            if (note.note != "rest" && note.scaleDegree == void 0) {
              const scaleNoteIndex = key.scaleNotes.indexOf(key.midi2note(note.midi).replace(/\d+/, ""));
              if (scaleNoteIndex != -1)
                note.scaleDegree = scaleNoteIndex + 1;
            }
          });
        }
      }
      /**
       * Clone this melody.
       *
       * @returns a new copy of this object.
       */
      clone() {
        return new _Melody(this.notes.slice(), this.key);
      }
      /**
       * Create a new Melody from multiple Melody objects.
       *
       * Note that the melodies being combined must have the same restSymbol and melodicMode parameters
       * or this method will throw a TblswvsError.
       *
       * @param sequences an Array of Melody objects
       * @returns a new Melody that combines the sequences steps
       */
      static newFrom(sequences) {
        const steps = sequences.map((s) => s.notes).flat();
        return new _Melody(steps, sequences[0].key);
      }
      /**
       * Generate a self-replicating melody based on this Melody's steps.
       *
       * @param length the number of steps for the ouput melody, must be coprime with this melody's length
       * @param ratio the ratio of self-similarity (step by amount). Optional, default: 2
       * @returns a new Melody object with steps that self-replicate at the ratio of N:1
       */
      selfReplicate(length, ratio) {
        ratio = ratio === void 0 ? 2 : ratio;
        if (!helpers.areCoprime(length, ratio))
          throw new tblswvs_error_1.TblswvsError(helpers.SELF_SIMILARITY_REQUIRES_COPRIMES);
        let sequence = new Array(length).fill(-1);
        sequence[0] = this.notes[0];
        sequence[1] = this.notes[1 % this.notes.length];
        let contiguousSequence, currentNote, stepAmount, nextNote;
        let nextEmpty = sequence.findIndex((note) => note == -1), count = 2;
        do {
          contiguousSequence = sequence.slice(0, nextEmpty);
          for (let noteIndex = 0; noteIndex < contiguousSequence.length; noteIndex++) {
            currentNote = contiguousSequence[noteIndex];
            for (let power = 1; power <= Math.log2(length); power++) {
              stepAmount = Math.pow(ratio, power);
              sequence[noteIndex * stepAmount % length] = currentNote;
            }
          }
          nextNote = this.notes[count % this.notes.length];
          nextEmpty = sequence.findIndex((note) => note == -1);
          if (nextEmpty != -1)
            sequence[nextEmpty] = nextNote;
          count++;
        } while (nextEmpty != -1);
        let melody = this.clone();
        melody.notes = sequence;
        return melody;
      }
      /**
       * The sequence counting pattern.
       *
       * Given: 1 2 3
       * Generate:
       * Segment 1: 1 - 2 - 3 -
       * Segment 2: 1 2 - 3 1 - 2 3 -
       * Segment 3: 1 2 3 - 1 2 3 - 1 2 3 -
       *
       * All segments are concatenated to form the steps of the resulting melody.
       *
       * @returns a new Melody that conforms to the counting pattern
       */
      counted() {
        let sequence = new Array();
        for (let i = 1; i <= this.notes.length; i++) {
          let rhythmSteps = new Array(i).fill(1);
          rhythmSteps.push(0);
          let length = this.notes.length * (i + 1);
          let rhythm = new rhythm_1.Rhythm(rhythmSteps, "wrap", length);
          rhythm.applyTo(this).notes.forEach((step) => sequence.push(step));
        }
        let countedMelody = this.clone();
        countedMelody.notes = sequence;
        return countedMelody;
      }
      /**
       * Zig zag through a melody in a wraparound mode.
       *
       * Logic: go 7 steps forward, 6 steps back through a melody
       * Given the melody: 1 2 3 4 5 6 7 8 9 10 11 12
       * Generate:
       * Segment 1:   1 2 3 4 5 6 7 7 6 5 4 3 2
       * Segment 2:   2 3 4 5 6 7 8 8 7 6 5 4 3
       * ...
       * Segment 11: 11 12 1 2 3 4 5 5 4 3 2 1 12
       * Segment 12: 12 1 2 3 4 5 6 6 5 4 3 2 1
       *
       * All segments are concatenated to form the steps of the resulting melody.
       *
       * @returns a new Melody that conforms to the zig-zag pattern.
       */
      zigZag() {
        let turnAroundStep = this.notes.length % 2 == 0 ? this.notes.length / 2 + 1 : Math.ceil(this.notes.length / 2);
        let steps = this.notes.reduce((previous, current, i) => {
          let segment = new Array(turnAroundStep).fill(-1).map((_, j) => this.notes[(j + i) % this.notes.length]);
          previous.push(segment);
          previous.push(segment.slice(1, turnAroundStep).reverse());
          return previous;
        }, new Array()).flat();
        return new _Melody(steps, this.key);
      }
      /**
       * Generate the Norgard infinity series sequence.
       *
       * @param seed the sequence's first two steps, defaults to 0, 1
       * @param size the length of the resulting Meldoy's steps, defaults to 16
       * @param offset offset in the returned sequence from which the sequence starts
       * @returns a Melody with the infinity series as its steps
       */
      static infinitySeries(seed = [0, 1], size = 16, offset = 0) {
        const root2 = seed[0];
        const step1 = seed[1];
        const seedInterval = step1 - root2;
        return Array.from(new Array(size), (n, i) => i + offset).map((step) => {
          return root2 + _Melody.norgardInteger(step) * seedInterval;
        });
      }
      /**
       * Returns the value for any index of the base infinity series sequence (0, 1 seed). This function enables
       * an efficient way to compute any arbitrary section of the infinity series without needing to compute
       * the entire sequence up to that point.
       *
       * This is the Infinity Series binary trick. Steps:
       *
       * 1. Convert the integer n to binary string
       * 2. Split the string and map as an Array of 1s and 0s
       * 3. Loop thru the digits, summing the 1s digits, and changing the negative/positve
       *    polarity **at each step** when a 0 is encounterd
       *
       * @param index the 0-based index of the infinity series
       * @returns the value in the infinity series at the given index.
       */
      static norgardInteger(index) {
        let binaryDigits = index.toString(2).split("").map((bit) => parseInt(bit));
        return binaryDigits.reduce((integer, digit) => {
          if (digit == 1) {
            integer += 1;
          } else {
            integer *= -1;
          }
          return integer;
        }, 0);
      }
    };
    exports2.Melody = Melody;
  }
});

// node_modules/tblswvs/lib/es5/mode.js
var require_mode = __commonJS({
  "node_modules/tblswvs/lib/es5/mode.js"(exports2) {
    "use strict";
    var __classPrivateFieldGet = exports2 && exports2.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _Mode_instances;
    var _Mode_offsetsScaleDegreeMapping;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Mode = exports2.Scale = void 0;
    var helpers = require_helpers();
    var Scale2;
    (function(Scale3) {
      Scale3[Scale3["Ionian"] = 0] = "Ionian";
      Scale3[Scale3["Dorian"] = 1] = "Dorian";
      Scale3[Scale3["Phrygian"] = 2] = "Phrygian";
      Scale3[Scale3["Lydian"] = 3] = "Lydian";
      Scale3[Scale3["Mixolydian"] = 4] = "Mixolydian";
      Scale3[Scale3["Aeolian"] = 5] = "Aeolian";
      Scale3[Scale3["Locrian"] = 6] = "Locrian";
      Scale3[Scale3["Major"] = 7] = "Major";
      Scale3[Scale3["Minor"] = 8] = "Minor";
      Scale3[Scale3["MajPentatonic"] = 9] = "MajPentatonic";
      Scale3[Scale3["MinPentatonic"] = 10] = "MinPentatonic";
      Scale3[Scale3["WholeTone"] = 11] = "WholeTone";
      Scale3[Scale3["Diminished"] = 12] = "Diminished";
      Scale3[Scale3["Chromatic"] = 13] = "Chromatic";
      Scale3[Scale3["GS"] = 14] = "GS";
    })(Scale2 = exports2.Scale || (exports2.Scale = {}));
    var Mode = class _Mode {
      constructor(scale) {
        _Mode_instances.add(this);
        this.scale = scale;
        this.name = Scale2[scale];
        [this.stepOffsets, this.scaleDegreeMapping] = __classPrivateFieldGet(this, _Mode_instances, "m", _Mode_offsetsScaleDegreeMapping).call(this, scale);
        this.scaleOffsets = _Mode.cummulativeOffsets(this.stepOffsets);
        this.chordQualities = _Mode.chordQualities(this.stepOffsets);
      }
      static cummulativeOffsets(stepOffsets) {
        return stepOffsets.reduce((cummulativeOffsets, _, i, arr) => {
          cummulativeOffsets.push(arr.slice(0, i).reduce((sum, intv) => sum += intv, 0));
          return cummulativeOffsets;
        }, []);
      }
      static chordQualities(stepOffsets) {
        return stepOffsets.reduce((chordSteps, _, i, arr) => {
          const current = helpers.rotate(arr, -i);
          const firstInterval = current.slice(0, 2).reduce((a, b) => a + b, 0);
          const secondInterval = current.slice(2, 4).reduce((a, b) => a + b, 0);
          chordSteps.push(_Mode.CHORD_INTERVAL_MAP[[firstInterval, secondInterval].join(":")]);
          return chordSteps;
        }, []);
      }
    };
    exports2.Mode = Mode;
    _Mode_instances = /* @__PURE__ */ new WeakSet(), _Mode_offsetsScaleDegreeMapping = function _Mode_offsetsScaleDegreeMapping2(scale) {
      let _scale, stepOffsets, scaleDegreeMapping = new Array();
      _scale = scale == Scale2.Major || scale == Scale2.MajPentatonic ? Scale2.Ionian : scale;
      _scale = scale == Scale2.Minor || scale == Scale2.MinPentatonic ? Scale2.Aeolian : scale;
      stepOffsets = helpers.rotate(Mode.MAJOR_STEP_OFFSETS, -_scale);
      if (scale == Scale2.MajPentatonic) {
        stepOffsets.splice(2, 2, 3);
        stepOffsets.splice(-2, 2, 3);
        scaleDegreeMapping = [1, 2, 3, 5, 6];
      } else if (scale == Scale2.MinPentatonic) {
        stepOffsets.splice(0, 2, 3);
        stepOffsets.splice(-3, 2, 3);
        scaleDegreeMapping = [1, 3, 4, 5, 7];
      } else if (scale == Scale2.WholeTone) {
        stepOffsets = Mode.WHOLE_TONE_OFFSETS;
        scaleDegreeMapping = [1, 2, 3, 4, 5, 6];
      } else if (scale == Scale2.Diminished) {
        stepOffsets = Mode.DIMINISHED_OFFSETS;
        scaleDegreeMapping = [1, 2, 3, 4, 5, 5.5, 6, 7];
      } else if (scale == Scale2.Chromatic) {
        stepOffsets = Mode.CHROMATIC_OFFSETS;
        scaleDegreeMapping = [1, 1.5, 2, 2.5, 3, 4, 4.5, 5, 5.5, 6, 6.5, 7];
      } else if (scale == Scale2.GS) {
        stepOffsets = Mode.GS_OFFSETS;
      }
      return [stepOffsets, scaleDegreeMapping];
    };
    Mode.MAJOR_STEP_OFFSETS = [2, 2, 1, 2, 2, 2, 1];
    Mode.WHOLE_TONE_OFFSETS = [2, 2, 2, 2, 2, 2];
    Mode.DIMINISHED_OFFSETS = [2, 1, 2, 1, 2, 1, 2, 1];
    Mode.CHROMATIC_OFFSETS = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    Mode.GS_OFFSETS = [1, 2, 1, 1, 3, 1, 3];
    Mode.CHORD_INTERVAL_MAP = {
      "4:3": "M",
      "3:4": "m",
      "3:3": "dim",
      "4:4": "aug",
      "4:5": "m/3",
      "2:4": "sus25b",
      "5:5": "sus2/2",
      "5:4": "M/5",
      "2:2": "WT",
      "3:2": "m5bb"
    };
  }
});

// node_modules/tblswvs/lib/es5/note_data.js
var require_note_data = __commonJS({
  "node_modules/tblswvs/lib/es5/note_data.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.noteData = exports2.chordTypes = exports2.chordNumeralsMap = exports2.chromaticScale = exports2.abcNotesMidiOrder = exports2.scaleNoteCandidates = void 0;
    exports2.scaleNoteCandidates = [
      ["B#", "C"],
      ["C#", "Db"],
      ["Cx", "D"],
      ["D#", "Eb"],
      ["E", "Fb"],
      ["E#", "F", "Gbb"],
      ["F#", "Gb"],
      ["Fx", "G"],
      ["G#", "Ab"],
      ["Gx", "A", "Bbb"],
      ["A#", "Bb"],
      ["B", "Cb"]
    ];
    exports2.abcNotesMidiOrder = ["C", "D", "E", "F", "G", "A", "B"];
    exports2.chromaticScale = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    exports2.chordNumeralsMap = {
      1: "I",
      2: "II",
      3: "III",
      4: "IV",
      5: "V",
      6: "VI",
      7: "VII",
      8: "VIII",
      9: "IX",
      10: "X",
      11: "XI",
      12: "XII"
    };
    exports2.chordTypes = {
      "oct": { intervals: [0, 12] },
      "pow": { intervals: [0, 7] },
      "M": { intervals: [0, 4, 7] },
      "m": { intervals: [0, 3, 7] },
      "dim": { intervals: [0, 3, 6] },
      "aug": { intervals: [0, 4, 8] },
      "sus2": { intervals: [0, 2, 7] },
      "sus4": { intervals: [0, 5, 7] },
      "m/3": { intervals: [0, 4, 9] },
      "sus25b": { intervals: [0, 2, 6] },
      "sus2/2": { intervals: [0, 5, 10] },
      "M/5": { intervals: [0, 5, 9] },
      "WT": { intervals: [0, 2, 4] },
      "m5bb": { intervals: [0, 3, 5] }
    };
    exports2.noteData = [
      {
        octave: -2,
        note: "C",
        midi: 0
      },
      {
        octave: -2,
        note: "C#",
        midi: 1
      },
      {
        octave: -2,
        note: "D",
        midi: 2
      },
      {
        octave: -2,
        note: "D#",
        midi: 3
      },
      {
        octave: -2,
        note: "E",
        midi: 4
      },
      {
        octave: -2,
        note: "F",
        midi: 5
      },
      {
        octave: -2,
        note: "F#",
        midi: 6
      },
      {
        octave: -2,
        note: "G",
        midi: 7
      },
      {
        octave: -2,
        note: "G#",
        midi: 8
      },
      {
        octave: -2,
        note: "A",
        midi: 9
      },
      {
        octave: -2,
        note: "A#",
        midi: 10
      },
      {
        octave: -2,
        note: "B",
        midi: 11
      },
      {
        octave: -1,
        note: "C",
        midi: 12
      },
      {
        octave: -1,
        note: "C#",
        midi: 13
      },
      {
        octave: -1,
        note: "D",
        midi: 14
      },
      {
        octave: -1,
        note: "D#",
        midi: 15
      },
      {
        octave: -1,
        note: "E",
        midi: 16
      },
      {
        octave: -1,
        note: "F",
        midi: 17
      },
      {
        octave: -1,
        note: "F#",
        midi: 18
      },
      {
        octave: -1,
        note: "G",
        midi: 19
      },
      {
        octave: -1,
        note: "G#",
        midi: 20
      },
      {
        octave: -1,
        note: "A",
        midi: 21
      },
      {
        octave: -1,
        note: "A#",
        midi: 22
      },
      {
        octave: -1,
        note: "B",
        midi: 23
      },
      {
        octave: 0,
        note: "C",
        midi: 24
      },
      {
        octave: 0,
        note: "C#",
        midi: 25
      },
      {
        octave: 0,
        note: "D",
        midi: 26
      },
      {
        octave: 0,
        note: "D#",
        midi: 27
      },
      {
        octave: 0,
        note: "E",
        midi: 28
      },
      {
        octave: 0,
        note: "F",
        midi: 29
      },
      {
        octave: 0,
        note: "F#",
        midi: 30
      },
      {
        octave: 0,
        note: "G",
        midi: 31
      },
      {
        octave: 0,
        note: "G#",
        midi: 32
      },
      {
        octave: 0,
        note: "A",
        midi: 33
      },
      {
        octave: 0,
        note: "A#",
        midi: 34
      },
      {
        octave: 0,
        note: "B",
        midi: 35
      },
      {
        octave: 1,
        note: "C",
        midi: 36
      },
      {
        octave: 1,
        note: "C#",
        midi: 37
      },
      {
        octave: 1,
        note: "D",
        midi: 38
      },
      {
        octave: 1,
        note: "D#",
        midi: 39
      },
      {
        octave: 1,
        note: "E",
        midi: 40
      },
      {
        octave: 1,
        note: "F",
        midi: 41
      },
      {
        octave: 1,
        note: "F#",
        midi: 42
      },
      {
        octave: 1,
        note: "G",
        midi: 43
      },
      {
        octave: 1,
        note: "G#",
        midi: 44
      },
      {
        octave: 1,
        note: "A",
        midi: 45
      },
      {
        octave: 1,
        note: "A#",
        midi: 46
      },
      {
        octave: 1,
        note: "B",
        midi: 47
      },
      {
        octave: 2,
        note: "C",
        midi: 48
      },
      {
        octave: 2,
        note: "C#",
        midi: 49
      },
      {
        octave: 2,
        note: "D",
        midi: 50
      },
      {
        octave: 2,
        note: "D#",
        midi: 51
      },
      {
        octave: 2,
        note: "E",
        midi: 52
      },
      {
        octave: 2,
        note: "F",
        midi: 53
      },
      {
        octave: 2,
        note: "F#",
        midi: 54
      },
      {
        octave: 2,
        note: "G",
        midi: 55
      },
      {
        octave: 2,
        note: "G#",
        midi: 56
      },
      {
        octave: 2,
        note: "A",
        midi: 57
      },
      {
        octave: 2,
        note: "A#",
        midi: 58
      },
      {
        octave: 2,
        note: "B",
        midi: 59
      },
      {
        octave: 3,
        note: "C",
        midi: 60
      },
      {
        octave: 3,
        note: "C#",
        midi: 61
      },
      {
        octave: 3,
        note: "D",
        midi: 62
      },
      {
        octave: 3,
        note: "D#",
        midi: 63
      },
      {
        octave: 3,
        note: "E",
        midi: 64
      },
      {
        octave: 3,
        note: "F",
        midi: 65
      },
      {
        octave: 3,
        note: "F#",
        midi: 66
      },
      {
        octave: 3,
        note: "G",
        midi: 67
      },
      {
        octave: 3,
        note: "G#",
        midi: 68
      },
      {
        octave: 3,
        note: "A",
        midi: 69
      },
      {
        octave: 3,
        note: "A#",
        midi: 70
      },
      {
        octave: 3,
        note: "B",
        midi: 71
      },
      {
        octave: 4,
        note: "C",
        midi: 72
      },
      {
        octave: 4,
        note: "C#",
        midi: 73
      },
      {
        octave: 4,
        note: "D",
        midi: 74
      },
      {
        octave: 4,
        note: "D#",
        midi: 75
      },
      {
        octave: 4,
        note: "E",
        midi: 76
      },
      {
        octave: 4,
        note: "F",
        midi: 77
      },
      {
        octave: 4,
        note: "F#",
        midi: 78
      },
      {
        octave: 4,
        note: "G",
        midi: 79
      },
      {
        octave: 4,
        note: "G#",
        midi: 80
      },
      {
        octave: 4,
        note: "A",
        midi: 81
      },
      {
        octave: 4,
        note: "A#",
        midi: 82
      },
      {
        octave: 4,
        note: "B",
        midi: 83
      },
      {
        octave: 5,
        note: "C",
        midi: 84
      },
      {
        octave: 5,
        note: "C#",
        midi: 85
      },
      {
        octave: 5,
        note: "D",
        midi: 86
      },
      {
        octave: 5,
        note: "D#",
        midi: 87
      },
      {
        octave: 5,
        note: "E",
        midi: 88
      },
      {
        octave: 5,
        note: "F",
        midi: 89
      },
      {
        octave: 5,
        note: "F#",
        midi: 90
      },
      {
        octave: 5,
        note: "G",
        midi: 91
      },
      {
        octave: 5,
        note: "G#",
        midi: 92
      },
      {
        octave: 5,
        note: "A",
        midi: 93
      },
      {
        octave: 5,
        note: "A#",
        midi: 94
      },
      {
        octave: 5,
        note: "B",
        midi: 95
      },
      {
        octave: 6,
        note: "C",
        midi: 96
      },
      {
        octave: 6,
        note: "C#",
        midi: 97
      },
      {
        octave: 6,
        note: "D",
        midi: 98
      },
      {
        octave: 6,
        note: "D#",
        midi: 99
      },
      {
        octave: 6,
        note: "E",
        midi: 100
      },
      {
        octave: 6,
        note: "F",
        midi: 101
      },
      {
        octave: 6,
        note: "F#",
        midi: 102
      },
      {
        octave: 6,
        note: "G",
        midi: 103
      },
      {
        octave: 6,
        note: "G#",
        midi: 104
      },
      {
        octave: 6,
        note: "A",
        midi: 105
      },
      {
        octave: 6,
        note: "A#",
        midi: 106
      },
      {
        octave: 6,
        note: "B",
        midi: 107
      },
      {
        octave: 7,
        note: "C",
        midi: 108
      },
      {
        octave: 7,
        note: "C#",
        midi: 109
      },
      {
        octave: 7,
        note: "D",
        midi: 110
      },
      {
        octave: 7,
        note: "D#",
        midi: 111
      },
      {
        octave: 7,
        note: "E",
        midi: 112
      },
      {
        octave: 7,
        note: "F",
        midi: 113
      },
      {
        octave: 7,
        note: "F#",
        midi: 114
      },
      {
        octave: 7,
        note: "G",
        midi: 115
      },
      {
        octave: 7,
        note: "G#",
        midi: 116
      },
      {
        octave: 7,
        note: "A",
        midi: 117
      },
      {
        octave: 7,
        note: "A#",
        midi: 118
      },
      {
        octave: 7,
        note: "B",
        midi: 119
      },
      {
        octave: 8,
        note: "C",
        midi: 120
      },
      {
        octave: 8,
        note: "C#",
        midi: 121
      },
      {
        octave: 8,
        note: "D",
        midi: 122
      },
      {
        octave: 8,
        note: "D#",
        midi: 123
      },
      {
        octave: 8,
        note: "E",
        midi: 124
      },
      {
        octave: 8,
        note: "F",
        midi: 125
      },
      {
        octave: 8,
        note: "F#",
        midi: 126
      },
      {
        octave: 8,
        note: "G",
        midi: 127
      }
    ];
  }
});

// node_modules/tblswvs/lib/es5/key.js
var require_key = __commonJS({
  "node_modules/tblswvs/lib/es5/key.js"(exports2) {
    "use strict";
    var __classPrivateFieldGet = exports2 && exports2.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _Key_instances;
    var _Key_negativeDegree;
    var _Key_calculateChordRoot;
    var _Key_calculateChordDegree;
    var _Key_calculateScaleNotes;
    var _Key_calculateInversions;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Key = void 0;
    var mode_1 = require_mode();
    var noteData2 = require_note_data();
    var helpers = require_helpers();
    var tblswvs_error_1 = require_tblswvs_error();
    var Key2 = class {
      constructor(tonic, scale) {
        _Key_instances.add(this);
        this.scale = scale;
        this.mode = new mode_1.Mode(scale);
        if (typeof tonic == "string") {
          this.tonic = tonic;
          this.midiTonic = noteData2.chromaticScale.indexOf(tonic);
          this.octave = 1;
        } else {
          this.tonic = noteData2.chromaticScale[tonic % 12];
          this.midiTonic = tonic % 12;
          this.octave = noteData2.noteData[tonic].octave;
        }
        this.scaleName = mode_1.Scale[scale];
        this.name = `${this.tonic} ${this.scaleName}`;
        this.scaleNotes = __classPrivateFieldGet(this, _Key_instances, "m", _Key_calculateScaleNotes).call(this);
        this.inversions = __classPrivateFieldGet(this, _Key_instances, "m", _Key_calculateInversions).call(this);
        const inversionRange = Array.from(this.inversions.keys()).sort((a, b) => a - b);
        this.inversionMin = inversionRange[0];
        this.inversionMax = inversionRange[inversionRange.length - 1];
      }
      degree(d, octaveTranspose) {
        if (d == 0)
          throw new tblswvs_error_1.TblswvsError(helpers.SCALE_DEGREE_ERROR);
        if (d < 0)
          return __classPrivateFieldGet(this, _Key_instances, "m", _Key_negativeDegree).call(this, d, octaveTranspose);
        let degreeOctave = this.octave + Math.floor((d - 1) / this.scaleNotes.length);
        const noteIndex = this.mode.scaleOffsets[(d - 1) % this.scaleNotes.length] + this.midiTonic + degreeOctave * 12 + 24;
        let degree = Object.assign({}, noteData2.noteData[noteIndex]);
        degree.note = this.scaleNotes[(d - 1) % this.scaleNotes.length];
        degree.scaleDegree = d;
        if (octaveTranspose != void 0) {
          degree.octave += octaveTranspose;
          degree.midi += octaveTranspose * 12;
        }
        return degree;
      }
      chord(degree, type, octaveTransposition) {
        if (degree == 0)
          throw new tblswvs_error_1.TblswvsError(helpers.SCALE_DEGREE_ERROR);
        let quality = degree < 0 ? type == "T" ? this.mode.chordQualities.slice().reverse()[(Math.abs(degree) - 1) % this.mode.chordQualities.length] : type : type == "T" ? this.mode.chordQualities[(degree - 1) % this.mode.chordQualities.length] : type;
        let midiTransposition = (octaveTransposition == void 0 ? 0 : octaveTransposition * 12) + this.midiTonic + this.octave * 12 + 24;
        if (degree < 0)
          midiTransposition += Math.floor(degree / this.mode.scaleOffsets.length) * 12;
        else
          midiTransposition += Math.floor((degree - 1) / this.mode.scaleOffsets.length) * 12;
        let midi = noteData2.chordTypes[quality].intervals.reduce((midiNotes, intv) => {
          let scaleOffset = degree < 0 ? this.mode.scaleOffsets.slice().reverse()[(Math.abs(degree) - 1) % this.mode.scaleOffsets.length] : this.mode.scaleOffsets[(degree - 1) % this.mode.scaleOffsets.length];
          midiNotes.push(intv + scaleOffset + midiTransposition);
          return midiNotes;
        }, []);
        return {
          midi,
          quality,
          root: __classPrivateFieldGet(this, _Key_instances, "m", _Key_calculateChordRoot).call(this, midi, quality),
          degree: __classPrivateFieldGet(this, _Key_instances, "m", _Key_calculateChordDegree).call(this, quality, degree)
        };
      }
      midi2note(midiNoteNumber) {
        const normalizedNumber = midiNoteNumber % 12;
        const normalizedIndex = this.mode.scaleOffsets.indexOf(normalizedNumber);
        if (normalizedIndex != -1) {
          return this.scaleNotes[normalizedIndex] + noteData2.noteData[midiNoteNumber].octave;
        } else {
          let note = noteData2.noteData[midiNoteNumber].note;
          const nearestNote = this.scaleNotes.find((n) => n[0] == note[0]);
          note += nearestNote != void 0 && nearestNote.length == 2 ? "\u266E" : "";
          return note + noteData2.noteData[midiNoteNumber].octave;
        }
      }
      degreeInversion(scaleDegree) {
        if (scaleDegree < this.inversionMin)
          scaleDegree = this.inversionMin;
        else if (scaleDegree > this.inversionMax)
          scaleDegree = this.inversionMax;
        const invertedScaleDegree = this.inversions.get(scaleDegree);
        if (invertedScaleDegree == void 0)
          return { octave: -3, note: "", midi: -1 };
        else
          return this.degree(invertedScaleDegree);
      }
    };
    exports2.Key = Key2;
    _Key_instances = /* @__PURE__ */ new WeakSet(), _Key_negativeDegree = function _Key_negativeDegree2(d, octaveTranspose) {
      let revCopy = this.mode.stepOffsets.slice().reverse();
      let copies = Math.ceil(-d / revCopy.length);
      let expanded = new Array(copies).fill(revCopy).flat();
      const noteIndex = this.octave * 12 + this.midiTonic + 24 - expanded.slice(0, -d).reduce((total, offset) => total += offset, 0);
      let degree = Object.assign({}, noteData2.noteData[noteIndex]);
      degree.note = this.scaleNotes.at(d % this.scaleNotes.length);
      degree.scaleDegree = d;
      if (octaveTranspose != void 0) {
        degree.octave += octaveTranspose;
        degree.midi += octaveTranspose * 12;
      }
      return degree;
    }, _Key_calculateChordRoot = function _Key_calculateChordRoot2(chordMidi, chordQuality) {
      let inversion = chordQuality.split("/")[1];
      if (inversion == void 0) {
        return this.midi2note(chordMidi[0]).replace(/[0-9\-]/g, "");
      } else if (inversion == "2" || inversion == "3" || inversion == "4") {
        return this.midi2note(chordMidi[2]).replace(/[0-9]/g, "");
      } else if (inversion == "5") {
        return this.midi2note(chordMidi[1]).replace(/[0-9]/g, "");
      } else {
        return this.midi2note(chordMidi[0]).replace(/[0-9]/g, "");
      }
    }, _Key_calculateChordDegree = function _Key_calculateChordDegree2(quality, degree) {
      let absDegree = degree < 0 ? [...new Array(this.mode.stepOffsets.length)].map((_, i) => i + 1).reverse()[(Math.abs(degree) - 1) % this.mode.stepOffsets.length] : degree;
      if (absDegree > this.mode.stepOffsets.length)
        absDegree = absDegree % this.mode.stepOffsets.length;
      if (quality.startsWith("M")) {
        return quality.replace("M", noteData2.chordNumeralsMap[absDegree]);
      } else if (quality.startsWith("m")) {
        return quality.replace("m", noteData2.chordNumeralsMap[absDegree].toLowerCase());
      } else if (quality.startsWith("aug")) {
        return quality.replace("aug", noteData2.chordNumeralsMap[absDegree]) + "+";
      } else if (quality.startsWith("dim")) {
        return quality.replace("dim", noteData2.chordNumeralsMap[absDegree]).toLowerCase() + "o";
      } else if (quality.startsWith("sus2")) {
        return noteData2.chordNumeralsMap[absDegree] + quality;
      } else if (quality.startsWith("sus4")) {
        return quality.replace("sus2", noteData2.chordNumeralsMap[absDegree]) + "sus4";
      } else if (quality.startsWith("WT")) {
        return quality.replace("WT", noteData2.chordNumeralsMap[absDegree]).toLowerCase() + "WT";
      } else {
        return absDegree + quality;
      }
    }, _Key_calculateScaleNotes = function _Key_calculateScaleNotes2() {
      const rotatedAbsolute = helpers.rotate(noteData2.scaleNoteCandidates, -noteData2.scaleNoteCandidates.findIndex((n) => n.includes(this.tonic)));
      let scaleAbcNotes = helpers.rotate(noteData2.abcNotesMidiOrder, -noteData2.abcNotesMidiOrder.indexOf(this.tonic[0]));
      if (this.mode.scaleDegreeMapping.length != 0) {
        scaleAbcNotes = this.mode.scaleDegreeMapping.map((d) => scaleAbcNotes[Math.floor(d) - 1]);
      }
      return scaleAbcNotes.map((n, i) => {
        const absoluteIndex = this.mode.scaleOffsets[i];
        return rotatedAbsolute[absoluteIndex].find((sn) => sn[0] == n);
      });
    }, _Key_calculateInversions = function _Key_calculateInversions2() {
      const positiveDegrees = [...new Array(this.mode.stepOffsets.length * 2 + 1).keys()].map((d) => d + 1);
      const negativeDegrees = positiveDegrees.slice(0, this.mode.stepOffsets.length).reverse().map((d) => d * -1);
      this.inversionMin = negativeDegrees[0];
      this.inversionMax = positiveDegrees[positiveDegrees.length - 1];
      const blerg = negativeDegrees.concat(positiveDegrees);
      return helpers.inversionMap(blerg);
    };
  }
});

// node_modules/tblswvs/lib/es5/melodic_vector.js
var require_melodic_vector = __commonJS({
  "node_modules/tblswvs/lib/es5/melodic_vector.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MelodicVector = void 0;
    var helpers = require_helpers();
    var tblswvs_error_1 = require_tblswvs_error();
    var MelodicVector = class {
      /**
       * Create a new MelodicVector object.
       *
       * @param steps number[] the steps that represent the object's vector
       */
      constructor(steps, shiftMode) {
        this.shiftMode = "midi";
        this.steps = steps;
        if (shiftMode != void 0)
          this.shiftMode = shiftMode;
      }
      /**
       * Transforms a melody by vector addition. Note that the vector step length and melody step
       * length do not need to be equal.
       *
       * @param Melody the melody to transform withe the current vector
       * @returns new Melody with steps based on summing the input melody steps and the vector steps
       */
      applyTo(melody) {
        if (melody.key == void 0 && this.shiftMode == "scale") {
          throw new tblswvs_error_1.TblswvsError(helpers.SCALE_DEGREE_SHIFTS_REQUIRE_KEY);
        } else {
          const size = Math.ceil(melody.notes.length / this.steps.length);
          const expandedSteps = new Array(size).fill(this.steps).flat().slice(0, melody.notes.length);
          const transformedMelody = melody.clone();
          expandedSteps.forEach((step, i) => {
            var _a, _b, _c;
            if (melody.notes[i].note == "rest") {
            } else if (this.shiftMode == "midi") {
              transformedMelody.notes[i].midi += step;
              const scaleNoteIndex = (_a = transformedMelody.key) === null || _a === void 0 ? void 0 : _a.scaleNotes.indexOf((_b = transformedMelody.key) === null || _b === void 0 ? void 0 : _b.midi2note(transformedMelody.notes[i].midi).replace(/\d+/, ""));
              if (scaleNoteIndex == void 0 || scaleNoteIndex == -1)
                transformedMelody.notes[i].scaleDegree = void 0;
              else
                transformedMelody.notes[i].scaleDegree = scaleNoteIndex + 1;
            } else {
              let transposedDegree = transformedMelody.notes[i].scaleDegree + step;
              transposedDegree = transposedDegree < 1 ? transposedDegree - 1 : transposedDegree;
              const newNote = (_c = transformedMelody.key) === null || _c === void 0 ? void 0 : _c.degree(transposedDegree);
              if (newNote != void 0)
                transformedMelody.notes[i] = newNote;
            }
          });
          return transformedMelody;
        }
      }
    };
    exports2.MelodicVector = MelodicVector;
  }
});

// node_modules/tblswvs/lib/es5/lindenmayer_system.js
var require_lindenmayer_system = __commonJS({
  "node_modules/tblswvs/lib/es5/lindenmayer_system.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LindenmayerSystem = void 0;
    var LindenmayerSystem = class {
      /**
       * Create a new LindenmayerSystem object.
       *
       * @param axiom the initial string for this L-System
       */
      constructor(axiom) {
        this.axiom = axiom;
        this.string = axiom;
        this.productionRules = {};
      }
      /**
       * Add a new production rule to the L-System.
       *
       * @param rule a string rewriting rule in the form of an object that has the properties "matchStr" and "output"
       */
      add(rule) {
        this.productionRules[rule.matchStr] = rule.output;
      }
      /**
       * Get the current list of production rule matching strings. To see the rewriting output for each rule,
       * access the productionRules property.
       *
       * @returns string[] the production rules matching strings
       */
      rules() {
        return Object.keys(this.productionRules);
      }
      /**
       * Advance the L-System by one generation.
       *
       * The current string, which is equal to the axiom until advanced,
       * will have its letters run thru the production rules. When a letter matches a production rule's "matchStr"
       * property, it will be replaced by the same production rule's "output" property in the resulting string.
       * When no match is found the current letter will simply be added without replacement.
       *
       * This will update the object's "string" property.
       */
      advance() {
        this.string = this.string.split(" ").map((letter) => {
          return letter in this.productionRules ? this.productionRules[letter] : letter;
        }).join(" ");
      }
      /**
       * Get the current "string" as a matrix.
       *
       * A matrix representation is really only useful for L-System strings with branching characters so that
       * the matrix has multiple rows. The intention is to return a 2-D table-like representation of a branching
       * L-System string so that represents a polyphonic event sequence. The columns can be treated as sequencer
       * steps and the rows as simultaneous/polyphonic events for the current step/column.
       *
       * @returns string[][] a 2-dimensional matrix representation of the current L-System string
       */
      matrix() {
        let matrix = new Array();
        matrix.push(new Array());
        let rowIndex = 0, colIndex = 0, branchCoordinates = [rowIndex, colIndex];
        this.string.split(" ").forEach((letter, i) => {
          if (letter == "[") {
            branchCoordinates = [rowIndex, colIndex];
            rowIndex = matrix.length;
            matrix.push(new Array());
            colIndex -= 1;
          } else if (letter == "]") {
            rowIndex = branchCoordinates[0];
            colIndex = branchCoordinates[1];
          } else {
            matrix[rowIndex][colIndex] = letter;
            colIndex += 1;
          }
        });
        return matrix;
      }
    };
    exports2.LindenmayerSystem = LindenmayerSystem;
  }
});

// node_modules/tblswvs/lib/es5/markov_chain.js
var require_markov_chain = __commonJS({
  "node_modules/tblswvs/lib/es5/markov_chain.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MarkovChain = void 0;
    var MarkovChain = class {
      constructor(input) {
        this.input = input;
        this.stateTransitionMatrix = this.generateStm();
      }
      get(previous, current) {
        const candidates = this.stateTransitionMatrix.get(`${previous}:${current}`) || [];
        return candidates[Math.floor(Math.random() * candidates.length)];
      }
      generateStm() {
        return this.input.reduce((stm, step, i, arr) => {
          if (i < arr.length - 1) {
            const prevStep = i == 0 ? step : arr[i - 1];
            const nextStep = arr[i + 1];
            const key = `${prevStep}:${step}`;
            const values = stm.get(key) || new Array();
            values.push(nextStep);
            stm.set(key, values);
          }
          return stm;
        }, /* @__PURE__ */ new Map());
      }
    };
    exports2.MarkovChain = MarkovChain;
  }
});

// node_modules/tblswvs/lib/es5/mutation.js
var require_mutation = __commonJS({
  "node_modules/tblswvs/lib/es5/mutation.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Mutation = void 0;
    var helpers = require_helpers();
    var tblswvs_error_1 = require_tblswvs_error();
    var melodic_vector_1 = require_melodic_vector();
    var melody_1 = require_melody();
    var Mutation = class _Mutation {
      static random(inputMelody, algorithms) {
        if (algorithms == void 0)
          algorithms = Object.getOwnPropertyNames(_Mutation).filter((func) => !["length", "name", "prototype"].includes(func));
        const algorithm = this.functionMap.get(algorithms[Math.floor(Math.random() * algorithms.length)]);
        if (algorithm != void 0)
          return algorithm(inputMelody);
        else
          return inputMelody;
      }
      static transposeDown2(inputMelody) {
        return new melodic_vector_1.MelodicVector([-2], "scale").applyTo(inputMelody);
      }
      static reverse(inputMelody) {
        return new melody_1.Melody(inputMelody.notes.slice().reverse(), inputMelody.key);
      }
      static rotateLeftThree(inputMelody) {
        return new melody_1.Melody(helpers.rotate(inputMelody.notes.slice(), -3), inputMelody.key);
      }
      static sort(inputMelody) {
        return new melody_1.Melody(inputMelody.notes.slice().sort((a, b) => a.midi - b.midi), inputMelody.key);
      }
      static reverseSort(inputMelody) {
        return new melody_1.Melody(inputMelody.notes.slice().sort((a, b) => b.midi - a.midi), inputMelody.key);
      }
      static invert(inputMelody) {
        if (inputMelody.key == void 0) {
          throw new tblswvs_error_1.TblswvsError(helpers.KEY_REQUIRED_FOR_MUTATION);
        } else {
          const key = inputMelody.key;
          return new melody_1.Melody(inputMelody.notes.map((note) => {
            let scaleDegree = note.scaleDegree ? note.scaleDegree : 1;
            return Object.assign({}, key.degreeInversion(scaleDegree));
          }), key);
        }
      }
      static invertReverse(inputMelody) {
        return new melody_1.Melody(_Mutation.invert(inputMelody).notes.slice().reverse(), inputMelody.key);
      }
      static bitFlip(inputMelody) {
        if (inputMelody.key == void 0) {
          throw new tblswvs_error_1.TblswvsError(helpers.KEY_REQUIRED_FOR_MUTATION);
        } else {
          const key = inputMelody.key;
          const melodyAsScaleDegrees = inputMelody.notes.map((n) => n.scaleDegree ? n.scaleDegree : 1);
          let popMutations = new Array(melodyAsScaleDegrees.length).fill(0);
          let mutations = new Array(Math.ceil(melodyAsScaleDegrees.length * 0.3)).fill(1);
          popMutations.splice(0, mutations.length, ...mutations);
          helpers.shuffle(popMutations);
          const largestInterval = melodyAsScaleDegrees.map((scaleDegree) => Math.abs(scaleDegree)).slice().sort().reverse()[0];
          const binaryPadding = Number(largestInterval).toString(2).length;
          return new melody_1.Melody(inputMelody.notes.map((note, i) => {
            if (popMutations[i] == 1) {
              const sign = note.scaleDegree !== void 0 && note.scaleDegree < 0 ? -1 : 1;
              let binaryDigits = Number(Math.abs(note.scaleDegree == void 0 ? 1 : note.scaleDegree)).toString(2).padStart(binaryPadding, "0").split("").map((s) => parseInt(s));
              let flipBit = Math.floor(Math.random() * binaryPadding);
              binaryDigits[flipBit] = 1 - binaryDigits[flipBit];
              let newScaleDegree = parseInt(binaryDigits.join(""), 2) * sign;
              newScaleDegree = newScaleDegree == 0 ? -1 : newScaleDegree;
              let mutatedNoteData = Object.assign({}, key.degree(newScaleDegree));
              mutatedNoteData.midi += (note.octave - key.octave) * 12;
              return mutatedNoteData;
            } else {
              return note;
            }
          }), key);
        }
      }
    };
    exports2.Mutation = Mutation;
    Mutation.functionMap = /* @__PURE__ */ new Map([
      ["transposeDown2", Mutation.transposeDown2],
      ["reverse", Mutation.reverse],
      ["rotateLeftThree", Mutation.rotateLeftThree],
      ["sort", Mutation.sort],
      ["reverseSort", Mutation.reverseSort],
      ["invert", Mutation.invert],
      ["invertReverse", Mutation.invertReverse],
      ["bitFlip", Mutation.bitFlip]
    ]);
  }
});

// node_modules/tblswvs/lib/es5/shift_register.js
var require_shift_register = __commonJS({
  "node_modules/tblswvs/lib/es5/shift_register.js"(exports2) {
    "use strict";
    var __classPrivateFieldSet = exports2 && exports2.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m") throw new TypeError("Private method is not writable");
      if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports2 && exports2.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _ShiftRegister_bits;
    var _ShiftRegister_decimal;
    var _ShiftRegister_length;
    var _ShiftRegister_chance;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ShiftRegister = void 0;
    var helpers_1 = require_helpers();
    var DEFAULT_BIT_ARRAY_SIZE = 8;
    var ShiftRegister = class {
      constructor(length = DEFAULT_BIT_ARRAY_SIZE, chance = 1) {
        _ShiftRegister_bits.set(this, void 0);
        _ShiftRegister_decimal.set(this, void 0);
        _ShiftRegister_length.set(this, void 0);
        _ShiftRegister_chance.set(this, void 0);
        __classPrivateFieldSet(this, _ShiftRegister_length, length < 1 ? 1 : length > DEFAULT_BIT_ARRAY_SIZE ? DEFAULT_BIT_ARRAY_SIZE : Math.floor(length), "f");
        __classPrivateFieldSet(this, _ShiftRegister_chance, chance < 0 ? 0 : chance > 1 ? 1 : chance, "f");
        __classPrivateFieldSet(this, _ShiftRegister_bits, new Array(DEFAULT_BIT_ARRAY_SIZE).fill(0), "f");
        __classPrivateFieldSet(this, _ShiftRegister_decimal, 0, "f");
      }
      get bits() {
        return __classPrivateFieldGet(this, _ShiftRegister_bits, "f");
      }
      set bits(bits) {
        __classPrivateFieldSet(this, _ShiftRegister_bits, bits.slice(0, this.length).concat(new Array(DEFAULT_BIT_ARRAY_SIZE - this.bits.length).fill(0)), "f");
        __classPrivateFieldSet(this, _ShiftRegister_decimal, parseInt(this.bits.slice(0, this.length).reverse().join(""), 2), "f");
      }
      get decimal() {
        return __classPrivateFieldGet(this, _ShiftRegister_decimal, "f");
      }
      set decimal(decimal) {
        __classPrivateFieldSet(this, _ShiftRegister_decimal, decimal, "f");
        __classPrivateFieldSet(this, _ShiftRegister_bits, this.decimal.toString(2).split("").reverse().map((bit) => parseInt(bit) == 0 ? 0 : 1), "f");
        __classPrivateFieldSet(this, _ShiftRegister_bits, __classPrivateFieldGet(this, _ShiftRegister_bits, "f").concat(new Array(DEFAULT_BIT_ARRAY_SIZE - this.bits.length).fill(0)), "f");
      }
      get length() {
        return __classPrivateFieldGet(this, _ShiftRegister_length, "f");
      }
      set length(length) {
        if (length < 1)
          __classPrivateFieldSet(this, _ShiftRegister_length, 1, "f");
        else if (length > 8)
          __classPrivateFieldSet(this, _ShiftRegister_length, 8, "f");
        else
          __classPrivateFieldSet(this, _ShiftRegister_length, Math.floor(length), "f");
        __classPrivateFieldSet(this, _ShiftRegister_bits, new Array(DEFAULT_BIT_ARRAY_SIZE).fill(0), "f");
        __classPrivateFieldSet(this, _ShiftRegister_decimal, 0, "f");
      }
      get chance() {
        return __classPrivateFieldGet(this, _ShiftRegister_chance, "f");
      }
      set chance(chance) {
        if (chance < 0)
          __classPrivateFieldSet(this, _ShiftRegister_chance, 0, "f");
        else if (chance > 1)
          __classPrivateFieldSet(this, _ShiftRegister_chance, 1, "f");
        else
          __classPrivateFieldSet(this, _ShiftRegister_chance, chance, "f");
      }
      push(bit) {
        const newBits = (0, helpers_1.rotate)(__classPrivateFieldGet(this, _ShiftRegister_bits, "f").slice(0, this.length), 1);
        newBits[0] = bit;
        this.bits = newBits;
      }
      normalized() {
        return this.decimal / Math.pow(2, this.length);
      }
      step() {
        const currentValue = this.decimal;
        const integerLimit = Math.pow(2, this.length);
        const randomGate = Math.random() < this.chance ? 1 : 0;
        const multipliedSteps = this.decimal * 2;
        const overIntegerLimit = multipliedSteps >= integerLimit ? 1 : 0;
        const xorShift = randomGate ^ overIntegerLimit;
        this.decimal = multipliedSteps % integerLimit + xorShift;
        return currentValue / integerLimit;
      }
    };
    exports2.ShiftRegister = ShiftRegister;
    _ShiftRegister_bits = /* @__PURE__ */ new WeakMap(), _ShiftRegister_decimal = /* @__PURE__ */ new WeakMap(), _ShiftRegister_length = /* @__PURE__ */ new WeakMap(), _ShiftRegister_chance = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/tblswvs/lib/es5/index.js
var require_es5 = __commonJS({
  "node_modules/tblswvs/lib/es5/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    __exportStar(require_melody(), exports2);
    __exportStar(require_mode(), exports2);
    __exportStar(require_key(), exports2);
    __exportStar(require_melodic_vector(), exports2);
    __exportStar(require_rhythm(), exports2);
    __exportStar(require_lindenmayer_system(), exports2);
    __exportStar(require_markov_chain(), exports2);
    __exportStar(require_mutation(), exports2);
    __exportStar(require_shift_register(), exports2);
    __exportStar(require_helpers(), exports2);
    __exportStar(require_note_data(), exports2);
  }
});

// app/controller/index.ts
var import_js3 = __toESM(require_rnbo_webaudio(), 1);

// app/model/synth.ts
var import_js2 = __toESM(require_rnbo_webaudio(), 1);

// app/view/synth.ts
var import_js = __toESM(require_rnbo_webaudio(), 1);
var isDraggingSlider = false;
var makeSliders = (synth, index) => {
  synth.device.parameters.forEach((param) => {
    let slider = generateSlider(param, index);
    let text = generateParameterText(param, index);
    let sliderContainer = document.createElement("div");
    sliderContainer.appendChild(generateLabel(param, index));
    sliderContainer.appendChild(slider);
    sliderContainer.appendChild(text);
    watchParameterChanges(param, slider, text);
    synth.uiElements[param.id] = { slider, text };
    document.querySelector(`#synth-${index} .rnbo-parameter-sliders`).appendChild(sliderContainer);
  });
  synth.device.parameterChangeEvent.subscribe((param) => {
    if (!isDraggingSlider) synth.uiElements[param.id].slider.value = param.value;
    synth.uiElements[param.id].text.value = param.value.toFixed(1);
  });
};
var watchParameterChanges = (param, slider, text) => {
  slider.addEventListener("pointerdown", () => isDraggingSlider = true);
  slider.addEventListener("pointerup", () => {
    isDraggingSlider = false;
    slider.value = "" + param.value;
    text.value = param.value.toFixed(1);
  });
  slider.addEventListener("input", () => param.value = Number.parseFloat(slider.value));
  text.addEventListener("keydown", (ev) => {
    if (ev.key === "Enter") {
      let newValue = Number.parseFloat(text.value);
      if (isNaN(newValue)) {
        text.value = "" + param.value;
      } else {
        newValue = Math.min(newValue, param.max);
        newValue = Math.max(newValue, param.min);
        text.value = "" + newValue;
        param.value = newValue;
      }
    }
  });
};
var generateLabel = (param, index) => {
  const label = document.createElement("label");
  label.setAttribute("for", `synth-${index}-${param.name}-slider`);
  label.setAttribute("class", "param-label");
  label.textContent = `${param.name}: `;
  return label;
};
var generateSlider = (param, index) => {
  const slider = document.createElement("input");
  slider.setAttribute("type", "range");
  slider.setAttribute("class", "param-slider");
  slider.setAttribute("id", `synth-${index}-${param.id}-slider`);
  slider.setAttribute("name", `synth-${index}-${param.name}-slider`);
  slider.setAttribute("min", "" + param.min);
  slider.setAttribute("max", "" + param.max);
  if (param.steps > 1) {
    slider.setAttribute("step", `${(param.max - param.min) / (param.steps - 1)}`);
  } else {
    slider.setAttribute("step", `${(param.max - param.min) / 1e3}`);
  }
  slider.setAttribute("value", "" + param.value);
  return slider;
};
var generateParameterText = (param, index) => {
  let text = document.createElement("input");
  text.setAttribute("name", `synth-${index}-${param.name}-text`);
  text.setAttribute("value", param.value.toFixed(1));
  text.setAttribute("type", "text");
  return text;
};

// app/model/synth.ts
var midiPort = 0;
var midiChannel = 0;
var midiOnVelocity = 100;
var midiOffVelocity = 100;
var noteDurationMs = 250;
var Synth2 = class {
  // The RNBO device.
  #device;
  // Keep track of parameters for update events while dragging the slider.
  uiElements = {};
  constructor(device, voiceNumber) {
    this.#device = device;
    makeSliders(this, voiceNumber);
  }
  get device() {
    return this.#device;
  }
  playNote(midiNoteNumber) {
    let noteOnMessage = [144 + midiChannel, midiNoteNumber, midiOnVelocity];
    let noteOffMessage = [128 + midiChannel, midiNoteNumber, midiOffVelocity];
    let noteOnEvent = new import_js2.MIDIEvent(this.#device.context.currentTime * 1e3, midiPort, noteOnMessage);
    let noteOffEvent = new import_js2.MIDIEvent(this.#device.context.currentTime * 1e3 + noteDurationMs, midiPort, noteOffMessage);
    this.#device.scheduleEvent(noteOnEvent);
    this.#device.scheduleEvent(noteOffEvent);
  }
  updateParameters() {
    this.#device.parametersById.get("modulator").value = Math.round(Math.random() * 3) + 1;
    this.#device.parametersById.get("carrier").value = Math.round(Math.random() * 10) + 1;
    this.#device.parametersById.get("index").value = Math.round(Math.random() * 100) / 10;
  }
};

// app/view/sequencer.ts
var import_tblswvs = __toESM(require_es5(), 1);
var MAX_STEP_COUNT = 16;
var loadScaleSelector = (sequencer) => {
  const scales = Object.values(import_tblswvs.Scale).filter((s) => typeof s === "string" && s !== "GS").sort();
  const scaleSelect = document.querySelector("select#scale");
  scales.forEach((scale) => {
    const option = document.createElement("option");
    option.setAttribute("value", "" + scale);
    option.innerText = "" + scale;
    if (scale === "Minor") option.selected = true;
    scaleSelect?.appendChild(option);
  });
  scaleSelect?.addEventListener("change", () => loadKey(sequencer));
};
var loadRootNoteSelector = (sequencer) => {
  const rootNoteSelect = document.querySelector("#root-note");
  import_tblswvs.noteData.slice(0, 12).forEach((note) => {
    const option = document.createElement("option");
    option.setAttribute("value", note.note);
    option.innerText = note.note;
    rootNoteSelect?.appendChild(option);
  });
  rootNoteSelect?.addEventListener("change", () => loadKey(sequencer));
};
var loadKey = (sequencer) => {
  const tonic = document.querySelector("select#root-note").value;
  const scaleName = document.querySelector("select#scale").value;
  const scale = import_tblswvs.Scale[scaleName];
  const keyboardWrapper = document.querySelector("#scale-degree-keyboard");
  document.querySelectorAll(".scale-button").forEach((div) => div.parentElement?.removeChild(div));
  sequencer.key = new import_tblswvs.Key(tonic, scale);
  const numScaleDegrees = sequencer.key.mode.scaleOffsets.length;
  const scaleDegrees = [...new Array(numScaleDegrees + 1).keys()].map((i) => i + 1);
  scaleDegrees.forEach((degree) => {
    const div = document.createElement("div");
    div.classList.add("scale-button");
    div.setAttribute("data-midi-number", "" + sequencer.key.degree(degree).midi);
    div.innerText = "" + (degree === scaleDegrees.length ? 1 : degree);
    keyboardWrapper?.appendChild(div);
  });
  document.querySelectorAll(".scale-button").forEach((scaleButton) => {
    scaleButton.addEventListener("pointerdown", () => {
      const deviceIndex = parseInt(document.querySelector("select#device-selector").value);
      const midiNoteNumber = scaleButton.getAttribute("data-midi-number");
      if (midiNoteNumber) {
        sequencer.synths[deviceIndex].playNote(parseInt(midiNoteNumber) + 12);
        scaleButton.classList.add("clicked");
      }
    });
    scaleButton.addEventListener("pointerup", () => scaleButton.classList.remove("clicked"));
  });
};
var draw = (sequencer) => {
  let step = sequencer.lastStep;
  const currentTime = sequencer.audioContext.currentTime;
  while (sequencer.stepsInQueue.length && sequencer.stepsInQueue[0].time < currentTime) {
    step = sequencer.stepsInQueue[0].index;
    sequencer.stepsInQueue.shift();
  }
  if (sequencer.lastStep !== step) {
    document.querySelector(`#step-${sequencer.lastStep}`).classList.remove("active");
    document.querySelector(`#step-${step}`).classList.add("active");
    sequencer.lastStep = step;
  }
  requestAnimationFrame(() => draw(sequencer));
};
var loadSteps = (sequencer, stepCount) => {
  const stepMarkers = document.querySelector("section#step-markers");
  document.querySelectorAll("section.voice-steps").forEach((padGroup, voiceIndex) => {
    for (let stepIndex = 0; stepIndex < MAX_STEP_COUNT; stepIndex++) {
      const input = document.createElement("input");
      input.setAttribute("type", "checkbox");
      input.setAttribute("id", `voice-${voiceIndex}-step-${stepIndex}`);
      if (stepIndex < stepCount) input.classList.add("enabled");
      input.addEventListener("change", () => sequencer.sequence[voiceIndex][stepIndex] = input.checked ? 1 : 0);
      const label = document.createElement("label");
      label.setAttribute("for", `voice-${voiceIndex}-step-${stepIndex}`);
      label.textContent = `Voice ${voiceIndex}, Step ${stepIndex}`;
      padGroup.appendChild(input);
      padGroup.appendChild(label);
      if (voiceIndex === 0) {
        const stepMarker = document.createElement("span");
        stepMarker.setAttribute("class", "step");
        stepMarker.setAttribute("id", `step-${stepIndex}`);
        if (stepIndex < stepCount) stepMarker.classList.add("enabled");
        stepMarkers?.appendChild(stepMarker);
      }
    }
  });
};
var loadBpmControls = (sequencer) => {
  const bpmControl = document.querySelector("#bpm");
  const bpmValEl = document.querySelector("#bpmval");
  bpmControl.addEventListener("input", (ev) => {
    sequencer.tempo = parseFloat(ev.target.value);
    bpmValEl.innerText = "" + sequencer.tempo;
  }, false);
};
var loadPlaybackControl = (sequencer) => {
  document.querySelector("#playBtn").addEventListener("click", () => sequencer.togglePlayback());
};
var watchStepCounts = (sequencer) => {
  document.querySelector("input#steps")?.addEventListener("change", (event) => {
    if (event.target !== null) {
      const stepCount = parseInt(event.target.value);
      sequencer.stepCount = stepCount;
      updateSteps(stepCount);
      document.querySelector("#step-val").textContent = "" + stepCount;
    }
  });
};
var updateSteps = (stepCount) => {
  document.querySelectorAll("section.voice-steps").forEach((padGroup, voiceIndex) => {
    for (let stepIndex = 0; stepIndex < MAX_STEP_COUNT; stepIndex++) {
      const input = document.querySelector(`#voice-${voiceIndex}-step-${stepIndex}`);
      if (input)
        stepIndex < stepCount ? input.classList.add("enabled") : input.classList.remove("enabled");
      const span = document.querySelector(`#step-${stepIndex}`);
      if (span)
        stepIndex < stepCount ? span.classList.add("enabled") : span.classList.remove("enabled");
    }
  });
};

// app/model/sequencer.ts
var StepSequencer2 = class {
  audioContext;
  // Store time: BPM and step time
  #tempo = 120;
  #secondsPerStep = 60 / this.#tempo / 4;
  // How frequently to call scheduling function (in milliseconds)
  lookahead = 25;
  // How far ahead to schedule audio (sec)
  scheduleAheadTime = 0.1;
  // The step we are currently playing
  currentStep = 0;
  // When the next step is due
  nextStepTime = 0;
  // Sequencer steps as an array of gates
  sequence = new Array();
  // Create a queue for the steps that are to be played, with the current time that we want them to play
  stepsInQueue = [];
  // ID for clearing setTimeout() when sequencer stops
  timerID;
  // Start at last step drawn so first time used it wraps back to index 0
  lastStep;
  // Number of steps in the loop
  #stepCount;
  // Keep track of play status
  isPlaying = false;
  // RNBO synth devices
  synths = [];
  // Key for the synths
  key;
  constructor(audioContext, synths, stepCount) {
    this.audioContext = audioContext;
    this.synths = synths;
    this.#stepCount = stepCount;
    this.lastStep = this.#stepCount - 1;
    for (let voice = 0; voice < this.synths.length; voice++)
      this.sequence[voice] = new Array(16).fill(0);
  }
  get tempo() {
    return this.#tempo;
  }
  set tempo(tempo) {
    this.#tempo = tempo;
    this.#secondsPerStep = 60 / this.#tempo / 4;
  }
  set stepCount(stepCount) {
    this.#stepCount = stepCount;
    if (this.lastStep > this.#stepCount - 1)
      this.lastStep = 0;
  }
  nextStep() {
    this.nextStepTime += this.#secondsPerStep;
    this.currentStep = (this.currentStep + 1) % this.#stepCount;
  }
  scheduleStep(stepIndex, time) {
    this.stepsInQueue.push({ index: stepIndex, time });
    if (this.sequence[0][stepIndex]) {
      if (Math.random() > 0.7)
        this.synths[0].updateParameters();
      const scaleDegree = Math.floor(Math.random() * this.key.mode.scaleOffsets.length) + 1;
      const midiNoteNumber = this.key.degree(scaleDegree).midi;
      this.synths[0].playNote(midiNoteNumber);
    }
    if (this.sequence[1][stepIndex]) {
      if (Math.random() > 0.3)
        this.synths[1].updateParameters();
      const scaleDegree = Math.floor(Math.random() * this.key.mode.scaleOffsets.length) + 1;
      const midiNoteNumber = this.key.degree(scaleDegree).midi;
      this.synths[1].playNote(midiNoteNumber);
    }
  }
  // While there are steps that will need to play before the next interval,
  // schedule them and advance the pointer.
  scheduler(sequencer) {
    while (sequencer.nextStepTime < sequencer.audioContext.currentTime + sequencer.scheduleAheadTime) {
      sequencer.scheduleStep(sequencer.currentStep, sequencer.nextStepTime);
      sequencer.nextStep();
    }
    sequencer.timerID = setTimeout(() => {
      sequencer.scheduler(sequencer);
    }, sequencer.lookahead);
  }
  togglePlayback() {
    this.isPlaying = !this.isPlaying;
    if (this.isPlaying) {
      if (this.audioContext.state === "suspended")
        this.audioContext.resume();
      this.currentStep = 0;
      this.nextStepTime = this.audioContext.currentTime;
      this.scheduler(this);
      requestAnimationFrame(() => draw(this));
    } else {
      window.clearTimeout(this.timerID);
    }
  }
};

// app/controller/index.ts
var patcherExportURL = "export/simple-fm.export.json";
var setup = async () => {
  const context = new AudioContext();
  document.body.onclick = () => context.resume();
  const outputNode = context.createGain();
  outputNode.connect(context.destination);
  let response = await fetch(patcherExportURL);
  let patcher = await response.json();
  const synth1 = new Synth2(await (0, import_js3.createDevice)({ patcher, context }), 0);
  const synth2 = new Synth2(await (0, import_js3.createDevice)({ patcher, context }), 1);
  [synth1, synth2].forEach((synth) => synth.device.node.connect(outputNode));
  return [context, [synth1, synth2]];
};
setup().then((sequencerConfig) => {
  const stepCount = parseInt(document.querySelector("input#steps").value);
  const sequencer = new StepSequencer2(...sequencerConfig, stepCount);
  loadKey(sequencer);
  loadRootNoteSelector(sequencer);
  loadScaleSelector(sequencer);
  loadSteps(sequencer, stepCount);
  loadBpmControls(sequencer);
  watchStepCounts(sequencer);
  loadPlaybackControl(sequencer);
}).catch((error) => {
  console.error(error.message);
});
/*! Bundled license information:

@rnbo/js/dist/rnbo.webaudio.js:
  (*!
   * 
   * Copyright (c) 2022 Cycling '74
   *
   *
   * Permission is hereby granted, free of charge, to any person obtaining
   * a copy of this software and associated documentation files (the
   * "Software"), to deal in the Software without restriction, including
   * without limitation the rights to use, copy, modify, merge, publish,
   * distribute, sublicense, and/or sell copies of the Software, and to
   * permit persons to whom the Software is furnished to do so, subject to
   * the following conditions:
   *
   * The above copyright notice and this permission notice shall be
   * included in all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
   * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
   * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
   * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
   * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
   * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
   * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   *
   * v1.4.0
   *
   *)
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)
*/
