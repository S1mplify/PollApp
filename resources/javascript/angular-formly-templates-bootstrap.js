!function(b,c){"object"==typeof exports&&"object"==typeof module?module.exports=c(require("angular"),require("angular-formly"),require("api-check")):"function"==typeof define&&define.amd?define(["angular","angular-formly","api-check"],c):"object"==typeof exports?exports.ngFormlyTemplatesBootstrap=c(require("angular"),require("angular-formly"),require("api-check")):b.ngFormlyTemplatesBootstrap=c(b.angular,b.ngFormly,b.apiCheck)}(this,function(a,b,c){return function(a){function c(d){if(b[d])return b[d].exports;var e=b[d]={exports:{},id:d,loaded:!1};return a[d].call(e.exports,e,e.exports,c),e.loaded=!0,e.exports}var b={};return c.m=a,c.c=b,c.p="",c(0)}([function(a,b,c){"use strict";a.exports=c(1)},function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d="formlyBootstrap",e=c(2),f=e.module(d,[c(4)]);f.constant("formlyBootstrapApiCheck",c(5)({output:{prefix:"angular-formly-bootstrap"}})),f.constant("formlyBootstrapVersion","6.4.0"),c(6)(f),c(9)(f),c(19)(f),b.default=d,a.exports=b.default},function(a,b,c){"use strict";var d=c(3);d.version||(d=window.angular),a.exports=d},function(b,c){b.exports=a},function(a,c){a.exports=b},function(a,b){a.exports=c},function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(a){function b(a){a.setWrapper([{name:"bootstrapLabel",template:c(7),apiCheck:function(b){return{templateOptions:{label:b.string.optional,required:b.bool.optional,labelSrOnly:b.bool.optional}}}},{name:"bootstrapHasError",template:c(8)}])}a.config(b),b.$inject=["formlyConfigProvider"]},a.exports=b.default},function(a,b){a.exports="<div>\n  <label for=\"{{id}}\" class=\"control-label {{to.labelSrOnly ? 'sr-only' : ''}}\" ng-if=\"to.label\">\n    {{to.label}}\n    {{to.required ? '*' : ''}}\n  </label>\n  <formly-transclude></formly-transclude>\n</div>\n"},function(a,b){a.exports='<div class="form-group" ng-class="{\'has-error\': showError}">\n  <formly-transclude></formly-transclude>\n</div>\n'},function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(a){c(10)(a),c(12)(a),c(14)(a),c(15)(a),c(17)(a),c(18)(a)},a.exports=b.default},function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(a){function b(a){a.setType({name:"checkbox",template:c(11),wrapper:["bootstrapHasError"],apiCheck:function(b){return{templateOptions:{label:b.string}}}})}a.config(b),b.$inject=["formlyConfigProvider"]},a.exports=b.default},function(a,b){a.exports='<div class="checkbox">\n\t<label>\n\t\t<input type="checkbox"\n           class="formly-field-checkbox"\n\t\t       ng-model="model[options.key]">\n\t\t{{to.label}}\n\t\t{{to.required ? \'*\' : \'\'}}\n\t</label>\n</div>\n'},function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(a){function b(a){a.setType({name:"multiCheckbox",template:c(13),wrapper:["bootstrapLabel","bootstrapHasError"],apiCheck:function(b){return{templateOptions:{options:b.arrayOf(b.object),labelProp:b.string.optional,valueProp:b.string.optional}}},defaultOptions:{noFormControl:!1,ngModelAttrs:{required:{attribute:"",bound:""}}},controller:["$scope",function(b){function e(a){var c;b.to.required&&(c=angular.isArray(b.model[d.key])&&b.model[d.key].length>0&&a,b.fc.$setValidity("required",c))}function f(){b.model[d.key]=[],angular.forEach(b.multiCheckbox.checked,function(a,e){a&&b.model[d.key].push(c.options[e][c.valueProp||"value"])}),b.fc.$setTouched(),e(!0),b.to.onChange&&b.to.onChange()}var c=b.to,d=b.options;if(b.multiCheckbox={checked:[],change:f},b.$watch("model",function(e){var f,g;Object.keys(e).length&&(f=e[d.key],b.$watch("to.options",function(d){if(d&&Array.isArray(d)&&Array.isArray(f)){g=c.valueProp||"value";for(var e=0;e<d.length;e++)b.multiCheckbox.checked[e]=f.indexOf(d[e][g])!==-1}}))},!0),d.expressionProperties&&d.expressionProperties["templateOptions.required"]&&b.$watch(function(){return b.to.required},function(a){e(a)}),b.to.required)var g=b.$watch("fc",function(a){a&&(e(!0),g())})}]})}a.config(b),b.$inject=["formlyConfigProvider"]},a.exports=b.default},function(a,b){a.exports='<div class="radio-group">\n  <div ng-repeat="(key, option) in to.options" class="checkbox">\n    <label>\n      <input type="checkbox"\n             id="{{id + \'_\'+ $index}}"\n             ng-model="multiCheckbox.checked[$index]"\n             ng-change="multiCheckbox.change()">\n      {{option[to.labelProp || \'name\']}}\n    </label>\n  </div>\n</div>\n'},function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(a){function b(a){a.setType({name:"input",template:'<input class="form-control" ng-model="model[options.key]">',wrapper:["bootstrapLabel","bootstrapHasError"]})}a.config(b),b.$inject=["formlyConfigProvider"]},a.exports=b.default},function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(a){function b(a){a.setType({name:"radio",template:c(16),wrapper:["bootstrapLabel","bootstrapHasError"],defaultOptions:{noFormControl:!1},apiCheck:function(b){return{templateOptions:{options:b.arrayOf(b.object),labelProp:b.string.optional,valueProp:b.string.optional,inline:b.bool.optional}}}})}a.config(b),b.$inject=["formlyConfigProvider"]},a.exports=b.default},function(a,b){a.exports='<div class="radio-group">\n  <div ng-repeat="(key, option) in to.options" ng-class="{ \'radio\': !to.inline, \'radio-inline\': to.inline }">\n    <label>\n      <input type="radio"\n             id="{{id + \'_\'+ $index}}"\n             tabindex="0"\n             ng-value="option[to.valueProp || \'value\']"\n             ng-model="model[options.key]">\n      {{option[to.labelProp || \'name\']}}\n    </label>\n  </div>\n</div>\n'},function(a,b){"use strict";function c(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(a){function d(a){a.setType({name:"select",template:b,wrapper:["bootstrapLabel","bootstrapHasError"],defaultOptions:function(b){var d=b.templateOptions.ngOptions||"option[to.valueProp || 'value'] as option[to.labelProp || 'name'] group by option[to.groupProp || 'group'] for option in to.options";return{ngModelAttrs:c({},d,{value:b.templateOptions.optionsAttr||"ng-options"})}},apiCheck:function(b){return{templateOptions:{options:b.arrayOf(b.object),optionsAttr:b.string.optional,labelProp:b.string.optional,valueProp:b.string.optional,groupProp:b.string.optional}}}})}a.config(d);var b='<select class="form-control" ng-model="model[options.key]"></select>';d.$inject=["formlyConfigProvider"]},a.exports=b.default},function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(a){function b(a){a.setType({name:"textarea",template:'<textarea class="form-control" ng-model="model[options.key]"></textarea>',wrapper:["bootstrapLabel","bootstrapHasError"],defaultOptions:{ngModelAttrs:{rows:{attribute:"rows"},cols:{attribute:"cols"}}},apiCheck:function(b){return{templateOptions:{rows:b.number.optional,cols:b.number.optional}}}})}a.config(b),b.$inject=["formlyConfigProvider"]},a.exports=b.default},function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(b,"__esModule",{value:!0});var e=c(20),f=d(e),g=c(22),h=d(g);b.default=function(a){(0,f.default)(a),(0,h.default)(a)},a.exports=b.default},function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(a){function b(a,b){var d=c(21),e=b.shape({class:b.string.optional,text:b.string.optional,onClick:b.func.optional}).strict.optional,f=b.shape({templateOptions:b.shape({addonLeft:e,addonRight:e})});a.templateManipulators.preWrapper.push(function(a,c){return c.templateOptions.addonLeft||c.templateOptions.addonRight?(b.warn([f],[c]),d.replace("<formly-transclude></formly-transclude>",a)):a})}a.run(b),b.$inject=["formlyConfig","formlyBootstrapApiCheck"]},a.exports=b.default},function(a,b){a.exports='<div ng-class="{\'input-group\': to.addonLeft || to.addonRight}">\n    <div class="input-group-addon"\n         ng-if="to.addonLeft"\n         ng-style="{cursor: to.addonLeft.onClick ? \'pointer\' : \'inherit\'}"\n         ng-click="to.addonLeft.onClick(options, this, $event)">\n        <i class="{{to.addonLeft.class}}" ng-if="to.addonLeft.class"></i>\n        <span ng-if="to.addonLeft.text">{{to.addonLeft.text}}</span>\n    </div>\n    <formly-transclude></formly-transclude>\n    <div class="input-group-addon"\n         ng-if="to.addonRight"\n         ng-style="{cursor: to.addonRight.onClick ? \'pointer\' : \'inherit\'}"\n         ng-click="to.addonRight.onClick(options, this, $event)">\n        <i class="{{to.addonRight.class}}" ng-if="to.addonRight.class"></i>\n        <span ng-if="to.addonRight.text">{{to.addonRight.text}}</span>\n    </div>\n</div>\n'},function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(a){function b(a){a.templateManipulators.preWrapper.push(function(b,c,d){if(angular.isDefined(c.templateOptions.description)){var e=document.createElement("div");e.appendChild(angular.element(b)[0]),e.appendChild(angular.element('<p id="'+d.id+'_description"class="help-block"ng-if="to.description">{{to.description}}</p>')[0]);var f=angular.element(e.querySelectorAll("[ng-model]"));return f&&f.attr("aria-describedby",d.id+"_description"),e.innerHTML}return b})}a.run(b),b.$inject=["formlyConfig"]},a.exports=b.default}])});