# API Planning

- Food (food items and their details)
- Restaurant (restaurant and their details)
- Menu (Menu and its details)
- Order (Order and its details)
- Image (Storing all the images related to the project)
- Review (Storing all the list of reviews)
- User (User related details, username, email, password)

### User Routes
#### Get authorized user data

```
 http://localhost:4000/user

 get('/');

```

| Parameter | Type     | Description                       | Access     |
| :-------- | :------- | :-------------------------------- | :-------   |
| `none`    | `Object` |   Get **authorized user** data    | Private    |

#### Get user data (for the review system)
```
http://localhost:4000/user

get('/:id')

```

| Parameter | Type     | Description                            | Access     |
| :-------- | :------- | :--------------------------------      | :-------   |
| `id`      | `Object` | Get user data (for the review system)  | Public     |

#### Update User data

```
http://localhost:4000/user

put('/:id');

```

| Parameter | Type     | Description                            | Access     |
| :-------- | :------- | :--------------------------------      | :-------   |
| `id`      | `Object` | Update User data                       | Private    |

### Auth (Authorization) Routes
#### Create new account

```
http://localhost:4000/auth

post('/:id');
```

| Parameter | Type     | Description                            | Access     |
| :-------- | :------- | :--------------------------------      | :-------   |
| `id`      | `Object` | Create new account                     | Private    |

#### Login to existing account

```
http://localhost:4000/auth

post(`/signin`);

```

| Parameter | Type     | Description                            | Access     |
| :-------- | :------- | :--------------------------------      | :-------   |
| `id`      | `Object` | Login to existing account              | Public     |

### Restaurant Routes
#### Add new Restaurant to database

```
http://localhost:4000/restaurant/

post(`/`)
```

| Parameter | Type     | Description                                  | Access     |
| :-------- | :------- | :------------------------------------------  | :-------   |
| `none`    | `Object` | Add new Restaurant to database               | Public     |

#### Get All Restaurant details based on city

```
http://localhost:4000/restaurant/?city=hyderabad

get(`/`)
```

| Parameter | Type     | Description                                  | Access     |
| :-------- | :------- | :------------------------------------------  | :-------   |
| `cityname`| `Object` | Get all the Restaurents details based on city| Public     |

#### Get a Restaurent details based on id

```
http://localhost:4000/restaurant/

get(`/:_id`)
```

| Parameter | Type     | Description                                  | Access     |
| :-------- | :------- | :------------------------------------------  | :-------   |
| `_id`      | `Object` | Get a Restaurent details based on id        | Public     |

#### Get a Restaurent details based on search string

```
http://localhost:4000/restaurant/

get(`/search/:searchString`)
```

| Parameter     | Type     | Description                                  | Access     |
| :--------     | :------- | :------------------------------------------  | :-------   |
| `searchString`| `Object` | Get a Restaurent details based search string | Public     |

### Food Routes
#### Create New Food Item

```
http://localhost:4000/food

post(`/`)
```

| Parameter     | Type     | Description                                  | Access     |
| :--------     | :------- | :------------------------------------------  | :-------   |
| `none`        | `Object` | Create New Food Item                         | Public     |

#### Get Food based on id

```
http://localhost:4000/food

get(`/:_id`)
```

| Parameter     | Type     | Description                                  | Access     |
| :--------     | :------- | :------------------------------------------  | :-------   |
| `_id`         | `Object` | Get Food based on id                         | Public     |

#### Get all foods based on Particular category

```
http://localhost:4000/food

get(`/c/:category`)
```

| Parameter            | Type     | Description                                  | Access     |
| :--------            | :------- | :------------------------------------------  | :-------   |
| `catagory`           | `Object` | Get all Foods based on Particular category   | Public     |

#### Get all Foods  of a particular Restaurent based on Restaurant id

```
http://localhost:4000/food

get(`/r/:_id`)
```

| Parameter            | Type     | Description                                                     | Access     |
| :--------            | :------- | :------------------------------------------                     | :-------   |
| `_id (Restaurant id)`| `Object` | Get all Foods  of a particular Restaurent based on Restaurant id| Public     |

### Image Routes
#### Save image link to mongoDB

```
http://localhost:4000/image

post(`/`)
```

| Parameter     | Type     | Description                                  | Access     |
| :--------     | :------- | :------------------------------------------  | :-------   |
| `none`        | `Object` | Save image link to mongoDB                   | Public     |

#### Get image details based on id 

```
http://localhost:4000/image

get(`/:_id`)
```

| Parameter     | Type     | Description                                  | Access     |
| :--------     | :------- | :------------------------------------------  | :-------   |
| `_id`         | `Object` | Get image details based on id                | Public     |

### menu Routes
#### Add menu to a restaurant

```
http://localhost:4000/menu

post(`/`)
```

| Parameter     | Type     | Description                                  | Access     |
| :--------     | :------- | :------------------------------------------  | :-------   |
| `none`        | `Object` | Add menu to a restaurant                     | Public     |

#### Get menu details based on menu id

```
http://localhost:4000/menu

get(`/list/:_id`)
```

| Parameter     | Type     | Description                                  | Access     |
| :--------     | :------- | :------------------------------------------  | :-------   |
| `_id`         | `Object` | Get menu details based on menu id            | Public     |

#### Get all list of menu images with id

```
http://localhost:4000/menu

get(`/image/:_id`)
```

| Parameter     | Type     | Description                                  | Access     |
| :--------     | :------- | :------------------------------------------  | :-------   |
| `_id`         | `Object` | Get all list of menu images with id          | Public     |

### Review Routes
#### Add new food/restaurant review and rating

```
http://localhost:4000/review

post(`/new`)
```

| Parameter     | Type     | Description                                  | Access     |
| :--------     | :------- | :------------------------------------------  | :-------   |
| `none`        | `Object` | Add new food/restaurant review and rating    | Private    |

#### Get all review for a particular restaurant using restaurant id

```
http://localhost:4000/review

get(`/:resId`)
```

| Parameter     | Type     | Description                                                    | Access     |
| :--------     | :------- | :------------------------------------------                    | :-------   |
| `resId`       | `Object` | Get all review for a particular restaurant using restaurant id | Public     |

#### Delete a specific review using its id

```
http://localhost:4000/review

delete(`/delete/:_id`)
```

| Parameter     | Type     | Description                                  | Access     |
| :--------     | :------- | :------------------------------------------  | :-------   |
| `_id`         | `Object` | Delete a specific review using its id        | Private     |

### Order Routes
#### Add new order

```
http://localhost:4000/order

put(`/new`)
```

| Parameter     | Type     | Description     | Access     |
| :--------     | :------- | :-------------- | :-------   |
| `none`        | `Object` | Add new order   | Private    |


#### Get all orders by user id

```
http://localhost:4000/order

get(`/`)
```

| Parameter     | Type     | Description                                  | Access     |
| :--------     | :------- | :------------------------------------------  | :-------   |
| `none`        | `Object` | Get all orders by user id                    | Private    |

#### To make payment i used Razorpay in built model that appears on clicking pay
#### I wrote function LaunchRazorPay which consists a public_key that takes to razorpay model

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file
`REACT_APP_CLIENT_URL` = http://localhost:4000/

`Public_KEY` from razorpay API

`MONGO_URI` from your MongoDB account to access database

`JWTSECRET` is a secret key for authorization

`AWS_S3_ACESS_KEY` is aws access key from your aws account

`AWS_S3_SECRET_KEY`is a secret key from your aws account

`GOOGLE_CLIENT_ID`  is a client id from your google cloud account

`GOOGLE_CLIENT_SECRET` is a client secret id from your google cloud account
## Documentation

[Routes and Responses ](https://drive.google.com/file/d/1syopU3oNX37074NGPriuA_b7EEONaxfo/view?usp=sharing)


## Authors

- [@ Raju Gudikati](https://www.github.com/IamIsaacRaj)


## 🚀 About Me
Hi 👋, I'm Raju Gudikati

A passionate frontend developer from Hyderabad,Telangana,India

- 🌱 I’m currently learning **Full Stack Web Development**