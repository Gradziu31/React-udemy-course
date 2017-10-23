'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    //po = ustawiam domyslna wartosc czyli jesli brakuje np. age to wpisze tam 0
    function Person() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anonymous';
        var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, Person);

        this.name = name;
        this.age = age;
    }

    _createClass(Person, [{
        key: 'getGretting',
        value: function getGretting() {
            //ważne aby to zadzialalo musze tyldą zrobic znaki ``
            return 'Hi. I am ' + this.name;
            //oznacza to samo co 
            // return 'Hi. i am' + this.name + '!';
        }
    }, {
        key: 'getDescription',
        value: function getDescription() {
            return this.name + ' is ' + this.age + ' year(s) old!';
        }
    }]);

    return Person;
}();
// extends pobiera wszystko co posiada inna klasa (tak jak by skopiowac wszystko z gory i wkleic tutaj do klasy Student)


var Student = function (_Person) {
    _inherits(Student, _Person);

    function Student() {
        _classCallCheck(this, Student);

        return _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).apply(this, arguments));
    }

    return Student;
}(Person);

var me = new Student('Krystian Gradek', 24);
console.log(me.getGretting() + ', ' + me.getDescription());

var other = new Student();
console.log(other.getGretting() + ', ' + other.getDescription());
