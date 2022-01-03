# event-management-server-side

#### create register user Api url link: http://localhost:5000/users

```body pass Data example:
{
    "name":"Emon", //requerd
    "email":"emon@example.com",//requerd, must use unique email
    "password":"123456", //requerd
    "pic":"anything" // optional, by default creating default pic
}
```

#### login user Api url link: http://localhost:5000/users/login

```body pass Data example:
{
    "email":"emon@example.com",//requerd
    "password":"123456", //requerd
}
```

#### package create Api url link: http://localhost:5000/api/package/create

```Creating Package Example :
fetch(`http://localhost:5000/api/package/create`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
        'authorization': `Bearer ${token}` //ei token ta local storage te store kora ache sekhan theke niben
    },
    body: JSON.stringify(`ei jaiga data body hisebe dite hobe`),
 })
    .then(res => res.json())
    .then(data => console.log(data))

```

#### packages geting all data Api url link: http://localhost:5000/api/package/packages

```Geting Packages Example :
fetch(`http://localhost:5000/api/package/packages`,{
    methods:'GET',
    headers:{
        'Content-Type': 'application/json'
        'authorization': `Bearer ${token}` //ei token ta local storage te store kora ache sekhan theke niben
    }
    .then(res => res.json())
    .then(data => console.log(data))
})

```
