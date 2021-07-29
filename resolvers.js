const friendDatabase = {};

class Friend {
    constructor(id, { firstName, lastName, gender, age, email, contacts }){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.email = email;
        this.age = age;
        this.contacts = contacts;
    }
}

const resolvers = {
    getFriend: ({id}) => {
        return new Friend(id, friendDatabase[id]);
    },
    createFriend: ({input}) => {
        let id = require('crypto').randomBytes(10).toString('hex');
        friendDatabase[id] = input;
        return new Friend(id, input);
    }

}

export default resolvers;