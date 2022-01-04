# event-management-server-side

## npm install

### npm run start-dev


### npm run start-dev
### Netlify Live Site: https://event-management-fa300.web.app/
### client side : https://github.com/1Emonislam/event-management-client-side
### Server side : https://github.com/1Emonislam/event-management-server-side
### Heroku Live Server: https://sleepy-stream-15565.herokuapp.com/

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
    body: JSON.stringify({
    "package_name":"any name", //requerd
    "image_link":"image er url link diben", //requerd
    "description":"description text", //requerd
    "categories":"categories text ", //requerd
    "email":"tn@gmail.com" //requerd // current user email dite hobe,local storage e store kora ache sekhan theke niben ei user email
    }),

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
