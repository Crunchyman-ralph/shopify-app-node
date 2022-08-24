/**
 * Denied global var uses
 */
const restrictedGlobalList = [
  'global',
  // 'window', TODO: put it back and find an alternative way to use it
  'localStorage',
  'postMessage',
  'blur',
  'focus',
  'close',
  'frames',
  'self',
  'parent',
  'opener',
  'top',
  'length',
  'closed',
  // 'location', TODO: put it back and find an alternative way to use it
  'origin',
  'name',
  'locationbar',
  'menubar',
  'personalbar',
  'scrollbars',
  'statusbar',
  'toolbar',
  'status',
  'frameElement',
  'navigator',
  'customElements',
  'external',
  'screen',
  'innerWidth',
  'innerHeight',
  'scrollX',
  'pageXOffset',
  'scrollY',
  'pageYOffset',
  'screenX',
  'screenY',
  'outerWidth',
  'outerHeight',
  'devicePixelRatio',
  'clientInformation',
  'screenLeft',
  'screenTop',
  'defaultStatus',
  'defaultstatus',
  'styleMedia',
  'onanimationend',
  'onanimationiteration',
  'onanimationstart',
  'onsearch',
  'ontransitionend',
  'onwebkitanimationend',
  'onwebkitanimationiteration',
  'onwebkitanimationstart',
  'onwebkittransitionend',
  'isSecureContext',
  'onabort',
  'onblur',
  'oncancel',
  'oncanplay',
  'oncanplaythrough',
  'onchange',
  'onclick',
  'onclose',
  'oncontextmenu',
  'oncuechange',
  'ondblclick',
  'ondrag',
  'ondragend',
  'ondragenter',
  'ondragleave',
  'ondragover',
  'ondragstart',
  'ondrop',
  'ondurationchange',
  'onemptied',
  'onended',
  'onerror',
  'onfocus',
  'oninput',
  'oninvalid',
  'onkeydown',
  'onkeypress',
  'onkeyup',
  'onload',
  'onloadeddata',
  'onloadedmetadata',
  'onloadstart',
  'onmousedown',
  'onmouseenter',
  'onmouseleave',
  'onmousemove',
  'onmouseout',
  'onmouseover',
  'onmouseup',
  'onmousewheel',
  'onpause',
  'onplay',
  'onplaying',
  'onprogress',
  'onratechange',
  'onreset',
  'onresize',
  'onscroll',
  'onseeked',
  'onseeking',
  'onselect',
  'onstalled',
  'onsubmit',
  'onsuspend',
  'ontimeupdate',
  'ontoggle',
  'onvolumechange',
  'onwaiting',
  'onwheel',
  'onauxclick',
  'ongotpointercapture',
  'onlostpointercapture',
  'onpointerdown',
  'onpointermove',
  'onpointerup',
  'onpointercancel',
  'onpointerover',
  'onpointerout',
  'onpointerenter',
  'onpointerleave',
  'onafterprint',
  'onbeforeprint',
  'onbeforeunload',
  'onhashchange',
  'onlanguagechange',
  'onmessage',
  'onmessageerror',
  'onoffline',
  'ononline',
  'onpagehide',
  'onpageshow',
  'onpopstate',
  'onrejectionhandled',
  'onstorage',
  'onunhandledrejection',
  'onunload',
  'performance',
  'stop',
  'open',
  'print',
  'captureEvents',
  'releaseEvents',
  'getComputedStyle',
  'matchMedia',
  'moveTo',
  'moveBy',
  'resizeTo',
  'resizeBy',
  'getSelection',
  'find',
  'createImageBitmap',
  'scroll',
  'scrollTo',
  'scrollBy',
  'onappinstalled',
  'onbeforeinstallprompt',
  'crypto',
  'ondevicemotion',
  'ondeviceorientation',
  'ondeviceorientationabsolute',
  'indexedDB',
  'webkitStorageInfo',
  'chrome',
  'visualViewport',
  'speechSynthesis',
  'webkitRequestFileSystem',
  'webkitResolveLocalFileSystemURL',
  'openDatabase',
];

/**
 * Common JS rules
 *
 * @see https://eslint.org/docs/rules/
 */
module.exports = {
  jsRules: {
    'array-callback-return': ['error'],
    'no-await-in-loop': ['off'],
    'no-duplicate-imports': ['error'],
    'no-self-compare': ['error'],
    'no-template-curly-in-string': ['error'],
    'no-unmodified-loop-condition': ['error'],
    'no-unreachable-loop': ['error'],
    'require-atomic-updates': ['error'],
    'arrow-body-style': ['error', 'as-needed'],
    'block-scoped-var': ['error'],
    curly: ['error'],
    'default-case-last': ['error'],
    'dot-notation': ['error'],
    eqeqeq: ['error'],
    'func-names': ['error', 'as-needed'],
    'func-style': ['error'],
    'id-length': ['error', { exceptions: ['_', 'i', 't', 'e'] }],
    'max-params': ['error'],
    'no-alert': ['error'],
    'no-array-constructor': ['error'],
    'no-bitwise': ['error'],
    'no-caller': ['error'],
    'no-console': ['warn', { allow: ['error', 'warn'] }],
    'no-continue': ['error'],
    'no-else-return': ['error'],
    'no-empty-function': ['error', { allow: ['constructors'] }],
    'no-eval': ['error'],
    'no-floating-decimal': ['error'],
    'no-implied-eval': ['error'],
    'no-invalid-this': ['error'],
    'no-iterator': ['error'],
    'no-label-var': ['error'],
    'no-lone-blocks': ['error'],
    'no-lonely-if': ['error'],
    'no-loop-func': ['error'],
    'no-mixed-operators': ['error'],
    'no-multi-assign': ['error'],
    'no-nested-ternary': ['error'],
    'no-new-wrappers': ['error'],
    'no-proto': ['error'],
    'no-restricted-globals': ['error'].concat(restrictedGlobalList),
    'no-return-assign': ['error'],
    'no-shadow': ['error'],
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'no-unneeded-ternary': ['error'],
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'no-useless-call': ['error'],
    'no-useless-computed-key': ['error'],
    'no-useless-concat': ['error'],
    'no-useless-rename': ['error'],
    'no-useless-return': ['error'],
    'no-var': ['error'],
    'prefer-const': ['error'],
    'prefer-object-spread': ['error'],
    'prefer-rest-params': ['error'],
    'prefer-spread': ['error'],
    'prefer-template': ['error'],
    'eol-last': ['error'],
  },
};
