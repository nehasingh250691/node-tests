const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('Spy', () =>{
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db',db);

    
    it('should call saveUser with email and password',() => {
        var email = 'andrew@example.com';
        var password = '123abc';

        app.handleSignup(email,password);
        
        expect(db.saveUser).toHaveBeenCalled().toHaveBeenCalledWith({email, password});
         
     });
     
     it('should call spy correctly, testing out spy feature',() =>{
         var spy = expect.createSpy(); // create a spy or mock function
         spy('Neha', 25);; // call the mocked function
         expect(spy).toHaveBeenCalled(); // assert if mocked function is called
         expect(spy).toHaveBeenCalledWith('Neha',25) // assert if mocked function is called with value
     });     
});

