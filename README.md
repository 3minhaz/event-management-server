# event-management-server-side

#### create register user Api url link: http://localhost:5000/users

```body pass Data example:
{
    "name":"Emon", //requerd
    "email":"emon2gmail.com",//requerd, must use unique email
    "password":"123456", //requerd
    "pic":"anything" // optional, by default creating default pic
}
```

#### login user Api url link: http://localhost:5000/users/login

```body pass Data example:
{
    "email":"emon2gmail.com",//requerd
    "password":"123456", //requerd
}
```
