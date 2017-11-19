const expect = require('expect');
const utils = require('./utils');

describe('Utils',() =>{
    describe('Add', () => {
        it('should add two numbers', ()  => {
            var res = utils.add(33,11);
        
            expect(res).toBe(44).toBeA('number');
        });
        
        it("should aysnc add two numbers",(done) =>{
            utils.asyncAdd(3,4,(sum) =>{
                expect(sum).toBe(7).toBeA('number');
                done();
            })
        });
    });

    describe('Square', () =>{
        it('should square a number',() =>{
            var res = utils.square(3);
            expect(res).toBe(9).toBeA('number');
        });

        it('should async square a number',(done) =>{
            utils.asyncSquare(5,(square) =>{
                expect(square).toBe(25).toBeA('number');
                done();
            })
        });
    });
});


describe('Exploring other assertions',() =>{
    it('check for equality of objects',() => {
        expect({name:'Neha'}).toEqual({name:'Neha'})
        expect({name:'Neha'}).toNotEqual({name:'neha'}).toBeA('object')
    });

    it('check for an element in array and object', () =>{
        expect([2,3,4]).toInclude(3);
        expect([5,6,7]).toExclude(9);
        expect({
            name:'Neha',
            age:25
        }).toInclude({name:'Neha'}).toInclude({age:25}).toExclude({age:27})
    });
});
