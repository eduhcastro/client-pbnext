# [Client PBNEXT](https://www.facebook.com/eduhcm) &middot;

Website for PointBlank 3.24++ 

* **Declarative:** This site was on the NextJS platform, not yet 100%.
* **Understand:** This still needs to be improved, I used this project for my studies, good luck. This is not yet 100% and it is not meant to be. Use this as a way to learn, innovate, any contribution is welcome.
* **Accounts data:** If you pay attention, the data for all accounts is in TypeScript files.
My thought would be, make a script that runs 24 hours a day, at 23 hours he always updated these files.
(I haven't done that yet).

## Installation and Initialization

To work properly you must do this*:

* Configure the [Keys ](https://github.com/skillerm/client-pbnext/blob/main/next.config.js) according to the server..
* [Start the server](https://github.com/skillerm/server-pbnext)
* Use the npm i command to install the dependencies.
* Start the project using the (npm run dev) command

I recommend using and starting the project using Visual Studio code, if there is any problem, identify the error using the console provided in it.

## Demonstration

See the server / client working

* [Youtube](https://www.youtube.com/channel/UCpdcj-bWKXdt7yC8HtBLaTg)


## Quick example

How the token works::

```jsx

 async function Login(){
        const token = jwt.sign({ "userID": UserID, "PassWord": Pass}, jwtSecret, { expiresIn: 60 })
        const secret = cryptr.encrypt(process.env.PRIVATE_STRING);
        const formData = new URLSearchParams();
        formData.append('authorization', token+'YOURSEPARATOR'+secret)
        const res = await fetch('/api/post/login', {
            method: 'POST',
            body: formData
          })
          const json = await res.json()
          return json
    }

```

If you are an observer well above, I mix 2 tokens, the first one from JWT itself to have a correct initiation, the second to a secret message that will be decoded on the Server

```jsx

 async function Coupon(code){
			var auth = localStorage.getItem('Autorizacao') // -> Token of logged in user
			var cod = cryptr.encrypt(code)
			var method = cryptr.encrypt("coupon")
			var token = `${auth}YOUR-SEPARATOR${cod}YOUR-SEPARATOR${method}`
			const formData = new URLSearchParams();
			formData.append('token', token);
			const res = await fetch('/api/post/code', {
				method: 'POST',
				body: formData
			  })
			  const json = await res.json()
			  return json
		}

```

Here would be the function of the Gift (Pin, Coupon)
If you are going to use it, you will see that there is a delay in responding at in both functions, the page will be paralyzed until there is an answer
(It would be great to try to fix this.)


## Contributing & Contact

This whole system was developed by me, any contribution is welcome.

Discord: CastroMS#8830
