class User {
    id;
    name;
    username;
    email;
    password;
    roles;
    avatar;

    constructor(id, name, username, email, password) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.roles = 'user';
    }
}