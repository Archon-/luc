var Luc = require('./lucTestLib'),
    expect = require('expect.js');

describe('Luc Array functions', function() {
    it('each', function() {
        var arr = ['a', 'b', 'z'], obj = {str :'' };

        Luc.Array.each(arr, function(value, index, a) {
            this.str += value + index + a.length;
        }, obj);
        expect(obj.str).to.eql('a03b13z23');
    });

    it('toArray', function() {
        expect(Luc.Array.toArray(undefined)).to.eql([]);
        expect(Luc.Array.toArray(null)).to.eql([]);
        expect(Luc.Array.toArray([])).to.eql([]);
        expect(Luc.Array.toArray('')).to.eql(['']);
        expect(Luc.Array.toArray([1])).to.eql([1]);
    });

    it('insert', function() {
        function runAllScenarios(arr1, arr2) {
            expect(Luc.Array.insert(arr1, arr2, true)).to.be.eql([1,2,3,4,5,6]);
            expect(Luc.Array.insert(arr2, arr1, true)).to.be.eql([4,5,6,1,2,3]);

            expect(Luc.Array.insert(arr1, arr2, 3)).to.be.eql([1,2,3,4,5,6]);
            expect(Luc.Array.insert(arr1, arr2, 2)).to.be.eql([1,2,4,5,6,3]);
            expect(Luc.Array.insert(arr1, arr2, 1)).to.be.eql([1,4,5,6,2,3]);
            expect(Luc.Array.insert(arr1, arr2, 0)).to.be.eql([4,5,6, 1,2,3]);

            expect(Luc.Array.insert(arr2, arr1, 3)).to.be.eql([4,5,6,1,2,3]);
            expect(Luc.Array.insert(arr2, arr1, 2)).to.be.eql([4,5,1,2,3,6]);
            expect(Luc.Array.insert(arr2, arr1, 1)).to.be.eql([4,1,2,3,5,6]);
            expect(Luc.Array.insert(arr2, arr1, 0)).to.be.eql([1,2,3,4,5,6]);


            //test no modify
            expect(arr1).to.be.eql([1,2,3]);
            expect(arr2).to.be.eql([4,5,6]);
        }

        runAllScenarios([1,2,3], [4,5,6]);

        (function(arr1, arr2) {
            runAllScenarios(arr1, arr2);
        }([1,2,3], [4,5,6]));
    });

    it('removeAll', function() {
        var arr = [false, false, 0, ''],
            ret = Luc.Array.removeAll(arr, '');

        expect(arr).to.be.eql([false, false, 0]);
        expect(ret).to.be.eql(['']);

        arr = [false, false, false];
        ret = Luc.Array.removeAll(arr, false);

        expect(arr).to.be.eql([]);
        expect(ret).to.be.eql([false, false, false]);
        expect(Luc.Array.removeAll(arr, false)).to.be(false);

        arr = [{}, {a:1}, {a:1, b:2}];
        ret = Luc.Array.removeAll(arr, {a: 1});

        expect(ret).to.be.eql([{a:1}]);
        expect(arr).to.be.eql([{}, {a:1,b:2}]);
    });

    it('removeAllNot', function() {
        var arr = [false, false, 0, ''],
            ret = Luc.Array.removeAllNot(arr, '');

        expect(arr).to.be.eql(['']);
        expect(ret).to.be.eql([false, false, 0]);

        arr = [false, false, false];
        ret = Luc.Array.removeAllNot(arr, false);

        expect(arr).to.be.eql([false, false, false]);
        expect(ret).to.be(false);


        arr = [{}, {a:1}, {a:1, b:2}];
        ret = Luc.Array.removeAllNot(arr, {a: 1});

        expect(arr).to.be.eql([{a:1}]);
        expect(ret).to.be.eql([{}, {a:1,b:2}]);
        
    });

    it('removeFirst', function() {
        var arr = [[],[1,2], [1,2]];
        var ret = Luc.Array.removeFirst(arr, [1,2]);

        expect(arr).to.be.eql([[],[1,2]]);
        expect(ret).to.be.eql([1,2]);
        expect(Luc.Array.removeFirst(arr, [1,2])).to.be.eql([1,2]);

        arr = [[], [], []];
        ret = Luc.Array.removeFirst(arr, [], {type: 'strict'});
        expect(arr).to.be.eql([[],[],[]]);
        expect(ret).to.be.eql(false);

        arr = [[], [], []];
        ret = Luc.Array.removeFirst(arr, [], {type: 'shallow'});
        expect(arr).to.be.eql([[],[]]);
        expect(ret).to.be.eql([]);
    });

    it('removeFirstNot', function() {
        var arr = [[],[1,2], [1,2]];
        var ret = Luc.Array.removeFirstNot(arr, []);

        expect(arr).to.be.eql([[],[1,2]]);
        expect(ret).to.be.eql([1,2]);
        expect(Luc.Array.removeFirstNot(arr, [1,2])).to.be.eql([]);
        expect(Luc.Array.removeFirstNot(arr, [1,2])).to.be(false);

        arr = [{a:1}, {a:1, b:2}, {a:1}];
        ret = Luc.Array.removeFirstNot(arr, {a: 1});

        expect(arr).to.be.eql([{a:1}, {a:1}]);
        expect(ret).to.be.eql({a:1, b:2});
        ret = Luc.Array.removeFirstNot(arr, {a: 1});
        expect(arr).to.be.eql([{a:1}, {a:1}]);
        expect(ret).to.be.eql(false);

        var a = {a: 1};
        arr = [{a:1}, {a:1, b:2}, a];

        ret = Luc.Array.removeFirstNot(arr, {a:1}, {type: 'strict'});
        expect(arr).to.be.eql([{a:1, b:2}, {a:1}]);
        expect(ret).to.be.eql({a:1});
        Luc.Array.removeFirstNot(arr, a, {type: 'strict'});
        Luc.Array.removeFirstNot(arr, a, {type: 'strict'});
        ret = Luc.Array.removeFirstNot(arr, a, {type: 'strict'});
        expect(arr).to.be.eql([{a:1}]);
        expect(ret).to.be(false);
    });

    it('findFirst', function() {
        var arr = [{a:1}, {a:1}, {a:1}, {a:1, b:2}];
        expect(Luc.Array.findFirst(arr, {a:1, b:2})).to.be.eql({a:1, b:2});
        expect(Luc.Array.findFirst(arr, {a:1, b:2}, {type: 'strict'})).to.be.eql(false);
        expect(Luc.Array.findFirst(arr, {a:1, b:2, c:3})).to.be.eql(false);
        expect(Luc.Array.findFirstNot([1,2,3,{}], {})).to.be(1);

        arr = [false, 0, undefined, null, ''];
        expect(Luc.Array.findFirst(arr, null)).to.be.eql(null);
        expect(Luc.Array.findFirst(arr, false)).to.be.eql(false);
        expect(Luc.Array.findFirst(arr, undefined)).to.be.eql(undefined);
        expect(Luc.Array.findFirst(arr, 0)).to.be.eql(0);

        arr = [new Date(1000), new Date(1000), new Date(1001)];
        expect(Luc.Array.findFirst(arr, new Date(1001))).to.be.eql(new Date(1001));
        expect(Luc.Array.findFirst(arr, new Date(1002))).to.be(false);

        var d = new Date();
        arr = [new Date(1000), new Date(1000), d];
        expect(Luc.Array.findFirst(arr, d, {type: 'strict'})).to.be(d);
        expect(Luc.Array.findFirst(arr, d, {type: 'shallow'})).to.be(d);
    });

    it('findFirstNot', function() {
        var arr = [{a:1}, {a:1}, {a:1}, {a:1, b:2}];
        expect(Luc.Array.findFirstNot(arr, {a:1, b:2})).to.be.eql({a:1});
        expect(Luc.Array.findFirstNot(arr, {a:1})).to.be.eql({a:1, b:2});

        arr = ['', '', '', null];
        expect(Luc.Array.findFirstNot(arr, null)).to.be.eql('');
        expect(Luc.Array.findFirstNot(arr, '')).to.be.eql(null);
        arr = ['', '', ''];
        expect(Luc.Array.findFirstNot(arr, '')).to.be.eql(false);
    });

    it('findAll', function() {
        var arr = [{a:1}, {a:1}, {a:1}, {a:1, b:2}, {b:2}];
        expect(Luc.Array.findAll(arr, {a:1, b:2})).to.be.eql([{a:1, b:2}]);
        expect(Luc.Array.findAll(arr, {a:1})).to.be.eql([{a:1},{a:1},{a:1}]);
        expect(Luc.Array.findAll(arr, {a:1, b:2}, {type: 'strict'})).to.be.eql(false);
        expect(Luc.Array.findAll(arr, {a:1, b:2, c:3})).to.be.eql(false);

        arr = [[],[1,2], [1,2]];
        expect(Luc.Array.findAll(arr, [1,2])).to.be.eql([[1,2], [1,2]]);
        expect(Luc.Array.findAll(arr, [1])).to.be(false);
        expect(Luc.Array.findAll(arr, [2,2])).to.be(false);

        arr = [false, 0, undefined, null, ''];
        expect(Luc.Array.findAll(arr, null)).to.be.eql([null]);
        expect(Luc.Array.findAll(arr, false)).to.be.eql([false]);
        expect(Luc.Array.findAll(arr, undefined)).to.be.eql([undefined]);
        expect(Luc.Array.findAll(arr, 0)).to.be.eql([0]);

        arr = [new Date(1000), new Date(1000), new Date(1001), false];
        expect(Luc.Array.findAll(arr, new Date(1001))).to.be.eql([new Date(1001)]);
    });

    it('findAllNot', function() {
        var arr = [{a:1}, {a:1}, {a:1}, {a:1, b:2}];
        expect(Luc.Array.findAllNot(arr, {a:1, b:2})).to.be.eql([{a:1},{a:1},{a:1}]);
        expect(Luc.Array.findAllNot(arr, {a:1})).to.be.eql([{a:1, b:2}]);

        arr = ['', '', '', null];
        expect(Luc.Array.findAllNot(arr, null)).to.be.eql(['','','']);
        expect(Luc.Array.findAllNot(arr, '')).to.be.eql([null]);
        arr = ['', '', ''];
        expect(Luc.Array.findAllNot(arr, '')).to.be.eql(false);
    });

    it('test dynamic array is fns', function() {
        var isFns = ['Array',
                'Object',
                'Function',
                'Date',
                'String',
                'Number',
                'RegExp',
                'Falsy',
                'Empty',
                'Boolean'
        ],
        arrayFns = ['findFirstNot', 'findAllNot', 'findFirst', 'findAll',
                'removeFirstNot', 'removeAllNot', 'removeFirst', 'removeAll'
        ];

        arrayFns.forEach(function(fnName) {
            isFns.forEach(function(isFnName) {
                expect(Luc.Array[fnName + isFnName]([])).to.be(false);
            });
        });
    });

    it('test remove/find with iterator and thisArg', function() {
        var arr = [{a:1}, {a:1}, {a:1}, {a:1, b:2}];

        expect(Luc.Array.findAll(arr, function(value) {
            return this.num === value.a
        }, {
            num: 1
        })).to.be.eql([{
                a: 1
            }, {
                a: 1
            }, {
                a: 1
            }, {
                a: 1,
                b: 2
            }
        ]);

       expect(Luc.Array.findAllNot(arr, function(value) {
            return this.num === value.a
        }, {
            num: 1
        })).to.be.eql(false);

       //direct function comparison
        expect(Luc.Array.findAllNot(arr, function(){}, {type:'strict'})).to.be.eql(arr);

        expect(Luc.Array.findAllNot(arr, function(){
            return true
        })).to.be.eql(false);


    });
});