(function () {
  "use strict";

  angular.module('mdl', []);

  angular.module('mdl').provider("mdlConfig", function () {
    var provider = this;

    this.floating = true;
    this.rippleEffect = true;

    provider.$get = function () {
      return provider;
    };
  });


  angular.module('mdl').directive('mdlTextField', function (mdlConfig, $timeout) {
    return {
      restrict: 'E',
      template: '<div class="mdl-textfield mdl-js-textfield" ng-class="{\'mdl-textfield--floating-label\': floating,\'is-disabled\':ngDisabled, \'is-dirty\': isDirty}"><input class="mdl-textfield__input" type="{{type}}"  ng-model="ngModel" ng-required="ngRequired" ng-readonly="ngReadonly" ng-disabled="ngDisabled" ng-pattern="ngPattern" ng-change="bindToProperty()" /><label class="mdl-textfield__label">{{label}}</label></div>',
      scope: {
        ngModel: '=',
        ngRequired: '=',
        ngReadonly: '=',
        ngDisabled: '=',
        ngPattern: '=',
        ngChange: '&'
      },
      controller: function ($scope) {
        $scope.bindToProperty = function () {
          $timeout($scope.ngChange, 0);
        }
      },
      link: function ($scope, el, $attrs) {
        $scope.label = $attrs.label;
        $scope.type = $attrs.type ? $attrs.type : 'text';
        $scope.floating = mdlConfig.floating;
        var input = el.find('input');
        var container = el.children();
        if (!!$scope.ngPattern) {
          input.on('keyup', checkIsValid);
        }
        function checkIsValid() {
          container.toggleClass('is-invalid', !$scope.ngPattern.test(input.val()));
        }

        if ($attrs['ngModelOptions']) {
          input.attr('ng-model-options', $attrs['ngModelOptions']);
        }

        if ($attrs['name']) {
          input.attr('name', $attrs['name']);
          el.removeAttr('name');
        }

        $scope.$watch('ngModel', function () {
          if ($scope.ngModel && $scope.ngModel !== '') {
            $scope.isDirty = true;
          } else {
            $scope.isDirty = false;
          }
        });

        angular.forEach($attrs, function (val, key) {
          if (angular.isString(key) && key.startsWith('copy')) {
            el.removeAttr($attrs.$attr[key]);
            input.attr($attrs.$attr[key].replace('copy-', ''), val);
          }
        });
      }
    };
  });

  angular.module('mdl').directive('mdlPhoneField', function (mdlConfig, $timeout) {
    return {
      restrict: 'E',
      template: '<div class="mdl-textfield mdl-js-textfield is-dirty" ng-class="{\'mdl-textfield--floating-label\': floating,\'is-disabled\':ngDisabled}"><input xlt-phone-num class="mdl-textfield__input" type="{{type}}"  ng-model="ngModel" ng-required="ngRequired" ng-readonly="ngReadonly" ng-disabled="ngDisabled" ng-pattern="ngPattern" ng-change="bindToProperty()" /><label class="mdl-textfield__label">{{label}}</label></div>',
      scope: {
        ngModel: '=',
        ngRequired: '=',
        ngReadonly: '=',
        ngDisabled: '=',
        ngPattern: '=',
        ngChange: '&'
      },
      controller: function ($scope) {
        $scope.bindToProperty = function () {
          $timeout($scope.ngChange, 0);
        }
      },
      link: function ($scope, el, $attrs) {
        $scope.label = $attrs.label;
        $scope.type = $attrs.type ? $attrs.type : 'text';
        $scope.floating = mdlConfig.floating;
        var input = el.find('input');
        var container = el.children();
        if (!!$scope.ngPattern) {
          input.on('keyup', checkIsValid);
        }
        function checkIsValid() {
          container.toggleClass('is-invalid', !$scope.ngPattern.test(input.val()));
        }

        if ($attrs['ngModelOptions']) {
          input.attr('ng-model-options', $attrs['ngModelOptions']);
        }

        if ($attrs['name']) {
          input.attr('name', $attrs['name']);
          el.removeAttr('name');
        }
      }
    };
  });

  angular.module('mdl').directive('mdlNumberField', function (mdlConfig, $timeout) {
    return {
      restrict: 'E',
      template: '<div class="mdl-textfield mdl-js-textfield is-dirty" ng-class="{\'mdl-textfield--floating-label\': floating,\'is-disabled\':ngDisabled}"><input class="mdl-textfield__input" type="{{type}}"  ng-model="ngModel" ng-required="ngRequired" ng-readonly="ngReadonly" ng-disabled="ngDisabled" ng-pattern="ngPattern" ng-change="bindToProperty()" /><label class="mdl-textfield__label">{{label}}</label></div>',
      scope: {
        ngModel: '=',
        ngRequired: '=',
        ngReadonly: '=',
        ngDisabled: '=',
        ngPattern: '=',
        ngChange: '&'
      },
      controller: function ($scope) {
        $scope.bindToProperty = function () {
          $timeout($scope.ngChange, 0);
        }
      },
      link: function ($scope, el, $attrs) {
        $scope.label = $attrs.label;
        $scope.type = $attrs.type ? $attrs.type : 'number';
        $scope.floating = mdlConfig.floating;
        var input = el.find('input');
        var container = el.children();
        if (!!$scope.ngPattern) {
          input.on('keyup', checkIsValid);
        }
        function checkIsValid() {
          container.toggleClass('is-invalid', !$scope.ngPattern.test(input.val()));
        }

        if ($attrs['ngModelOptions']) {
          input.attr('ng-model-options', $attrs['ngModelOptions']);
        }

        if ($attrs['name']) {
          input.attr('name', $attrs['name']);
          el.removeAttr('name');
        }

        if ($attrs['step']) {
          input.attr('step', $attrs['step']);
          el.removeAttr('step');
        }
      }
    };
  });

  angular.module('mdl').directive('mdlPriceField', function (mdlConfig, $timeout) {
    return {
      restrict: 'E',
      template: '<div class="mdl-textfield mdl-js-textfield is-dirty" ng-class="{\'mdl-textfield--floating-label\': floating,\'is-disabled\':ngDisabled}"><input class="mdl-textfield__input" type="text" ng-currency ng-model="ngModel" ng-required="ngRequired" ng-readonly="ngReadonly" ng-disabled="ngDisabled" ng-pattern="ngPattern" ng-change="bindToProperty()" /><label class="mdl-textfield__label">{{label}}</label></div>',
      scope: {
        ngModel: '=',
        ngRequired: '=',
        ngReadonly: '=',
        ngDisabled: '=',
        ngPattern: '=',
        ngChange: '&'
      },
      controller: function ($scope) {
        $scope.bindToProperty = function () {
          $timeout($scope.ngChange, 0);
        }
      },
      link: function ($scope, el, $attrs) {
        $scope.label = $attrs.label;
        $scope.type = $attrs.type ? $attrs.type : 'number';
        $scope.floating = mdlConfig.floating;
        var input = el.find('input');
        var container = el.children();
        if (!!$scope.ngPattern) {
          input.on('keyup', checkIsValid);
        }
        function checkIsValid() {
          container.toggleClass('is-invalid', !$scope.ngPattern.test(input.val()));
        }

        if ($attrs['ngModelOptions']) {
          input.attr('ng-model-options', $attrs['ngModelOptions']);
        }

        if ($attrs['name']) {
          input.attr('name', $attrs['name']);
          el.removeAttr('name');
        }

        if ($attrs['step']) {
          input.attr('step', $attrs['step']);
          el.removeAttr('step');
        }
      }
    };
  });

  angular.module('mdl').directive('mdlDateField', function (mdlConfig, $timeout, $filter) {
    return {
      restrict: 'E',
      template: '<div class="mdl-textfield mdl-js-textfield is-dirty" ng-class="{\'mdl-textfield--floating-label\': floating,\'is-disabled\':ngDisabled}"><input class="mdl-textfield__input" type="{{type}}" ng-model="ngModelFormatted" ng-required="ngRequired" ng-readonly="ngReadonly" ng-disabled="ngDisabled" ng-pattern="ngPattern" ng-change="bindToProperty()" /><label class="mdl-textfield__label">{{label}}</label></div>',
      scope: {
        ngModel: '=',
        ngModelFormatted: '=?',
        ngRequired: '=',
        ngReadonly: '=',
        ngDisabled: '=',
        ngPattern: '=',
        ngChange: '&'
      },
      controller: function ($scope) {
        $scope.bindToProperty = function () {
          $scope.ngModel = $scope.ngModelFormatted;
          $timeout($scope.ngChange, 0);
        }
      },
      link: function ($scope, el, $attrs) {
        $scope.label = $attrs.label;
        $scope.type = $attrs.type ? $attrs.type : 'date';
        $scope.floating = mdlConfig.floating;
        var input = el.find('input');
        var container = el.children();

        if (!!$scope.ngPattern) {
          input.on('keyup', checkIsValid);
        }

        function checkIsValid() {
          container.toggleClass('is-invalid', !$scope.ngPattern.test(input.val()));
        }

        if ($attrs['ngModelOptions']) {
          input.attr('ng-model-options', $attrs['ngModelOptions']);
        }

        if ($attrs['name']) {
          input.attr('name', $attrs['name']);
          el.removeAttr('name');
        }

        $scope.$watch('ngModel', function () {
          if ($scope.type === 'datetime-local') {
            $scope.ngModelFormatted = $scope.ngModel;
          } else {
            $scope.ngModelFormatted = $filter('date')($scope.ngModel, 'yyyy-MM-dd');
          }

        });
      }
    };
  });


  angular.module('mdl').directive('mdlCheckbox', function (mdlConfig, $timeout) {
    return {
      restrict: 'E',
      template: '<label class="mdl-checkbox mdl-js-checkbox" ng-class="{\'is-disabled\':ngDisabled}"><input type="checkbox" ng-disabled="ngDisabled" ng-model="ngModel" class="mdl-checkbox__input" ng-change="bindToProperty()" /><span class="mdl-checkbox__label">{{label}}</span></label>',
      scope: {
        ngModel: '=',
        ngDisabled: '=',
        ngChange: '&'
      },
      controller: function ($scope) {
        $scope.bindToProperty = function () {
          $timeout($scope.ngChange, 0);
        }
      },
      link: function ($scope, el, $attrs) {
        $scope.label = $attrs.label;
        $scope.ngClass = {
          'mdl-js-ripple-effect': mdlConfig.rippleEffect
        };

        $scope.$watch('ngDisabled', function () {
          el.find('input').attr('ng-disabled', $scope.ngDisabled);
        });
      }
    };
  });

  angular.module('mdl').directive('mdlRadio', function (mdlConfig) {
    return {
      restrict: 'E',
      template: '<label class="mdl-radio mdl-js-radio" ng-class="ngClass"><input type="radio" ng-model="ngModel" class="mdl-radio__button" name="options" value="{{value}}" /><span class="mdl-radio__label">{{label}}</span></label>',
      scope: {
        ngModel: '='
      },
      link: function ($scope, el, $attrs) {
        $scope.label = $attrs.label;
        $scope.value = $attrs.value;
        $scope.ngClass = {
          'mdl-js-ripple-effect': mdlConfig.rippleEffect
        };
      }
    };
  });


  angular.module('mdl').directive('mdlSwitch', function (mdlConfig, $timeout) {
    return {
      restrict: 'E',
      template: '<label class="mdl-switch mdl-js-switch" ng-class="ngClass"><input type="checkbox" ng-model="ngModel" class="mdl-switch__input" ng-checked="ngModel" ng-change="bindToProperty()" /><span class="mdl-switch__label">{{label}}</span></label>',
      scope: {
        ngModel: '=',
        ngChange: '&'
      },
      controller: function ($scope) {
        $scope.bindToProperty = function () {
          $timeout($scope.ngChange, 0);
        }
      },
      link: function ($scope, el, $attrs) {
        $scope.label = $attrs.label;
        $scope.ngClass = {
          'mdl-js-ripple-effect': mdlConfig.rippleEffect
        };
        $scope.$watch(function () {
          return $scope.ngModel;
        }, function (newValue) {
          if (!el[0].childNodes[0] || !el[0].childNodes[0].MaterialSwitch) {
            return false;
          }

          if (newValue) {
            el[0].childNodes[0].MaterialSwitch.on();
          } else {
            el[0].childNodes[0].MaterialSwitch.off();
          }
        });
      }
    };
  });


  angular.module('mdl').directive('mdlButton', function (mdlConfig) {
    return {
      restrict: 'E',
      template: '<button class="mdl-button mdl-js-button" ng-class="ngClass" ng-transclude></button>',
      scope: {
        ngModel: '='
      },
      transclude: true,
      link: function ($scope, el, $attrs) {
        $scope.ngClass = {
          'mdl-js-ripple-effect': mdlConfig.rippleEffect,
          'mdl-button--primary': $attrs.theme === 'primary',
          'mdl-button--accent': $attrs.theme === 'accent'
        };
      }
    };
  });

  angular.module('mdl').directive('mdlButtonRaised', function (mdlConfig) {
    return {
      restrict: 'E',
      template: '<button class="mdl-button mdl-js-button mdl-button--raised" ng-class="ngClass" ng-transclude></button>',
      scope: {
        ngModel: '='
      },
      transclude: true,
      link: function ($scope, el, $attrs) {
        $scope.ngClass = {
          'mdl-js-ripple-effect': mdlConfig.rippleEffect,
          'mdl-button--primary': $attrs.theme === 'primary',
          'mdl-button--accent': $attrs.theme === 'accent'
        };
      }
    };
  });


  angular.module('mdl').directive('mdlProgress', function (mdlConfig) {
    return {
      restrict: 'E',
      template: '<div id="p1" class="mdl-progress mdl-js-progress" ng-model="ngModel"></div>',
      scope: {
        ngModel: '='
      },
      transclude: true,
      link: function ($scope, el, $attrs) {
        $attrs.$observe('progress', function (progress) {
          progress = parseInt(progress);
          if (progress) {
            var child = el[0].childNodes[0];
            if (child.MaterialProgress) {
              child.MaterialProgress.setProgress(progress);
            } else {
              child.addEventListener('mdl-componentupgraded', function () {
                child.MaterialProgress.setProgress(progress);
              });
            }
          }
        });
      }
    };
  });

  angular.module('mdl').directive('mdlTextArea', function (mdlConfig) {
    return {
      restrict: 'E',
      template: '<div class="mdl-textfield mdl-js-textfield" ng-class="ngClass"><textarea class="mdl-textfield__input" type="text" ng-model="ngModel" rows="{{rows}}" ng-required="ngRequired"></textarea><label class="mdl-textfield__label">{{label}}</label></div>',
      scope: {
        ngModel: '=',
        ngRequired: '='
      },
      link: function ($scope, el, $attrs) {
        $scope.label = $attrs.label;
        $scope.rows = $attrs.rows || 5;
        $scope.ngClass = {
          'mdl-textfield--floating-label': mdlConfig.floating
        }
      }
    };
  });


  angular.module('mdl').directive('mdlSpinner', function (mdlConfig) {
    return {
      restrict: 'E',
      template: '<div class="mdl-spinner mdl-js-spinner is-active" ng-class="ngClass" ng-model="ngModel"></div>',
      scope: {
        ngModel: '='
      },
      link: function ($scope, el, $attrs) {
        $scope.ngClass = {
          'mdl-spinner--single-color': $attrs.singleColor
        };
      }
    };
  });

  angular.module('mdl').directive('mdlUpgrade', function ($timeout) {

    return {
      restrict: 'A',
      compile: function () {
        return {
          post: function postLink(scope, element) {
            $timeout(function () {
              componentHandler.upgradeElements(element[0]);
            }, 0);
          }
        };
      },
    };

  });

})();
