const express = require('express');
const session = require('express-session');
const path = require('path');
const logger = require('morgan');
const methodOverride = require('method-override');
const usersDB = require('./models/usersDB');
const hasher = require('pbkdf2-password')();
const bodyParser = require('body-parser');
const router = require('./routes/clients');
const signupRouter = require('./routes/signup');
const PORT = process.env.PORT || 3000;
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);

app.use(
	session({
		resave: false,
		saveUninitialized: false,
		secret: 'shhhh, very secret',
	}),
);

app.use(bodyParser.json());

app.use(methodOverride('_method'));

app.use(express.static('public'));

function authenticate(name, inputPassword, fn) {
	 usersDB.findByUserName(name)
	.then(user => {
		//Confirm if user does not exist that a falsey value is returned
		if (!user) return fn(new Error('cannot find user'));
		hasher({ password: inputPassword, salt: user.salt}, (err, pass, salt, hash) => {
			if (hash !== user.hash) return fn(new Error('Incorrect password'));
			if (err) return fn(err);
			return fn(null, user);
		});
		
	}).catch(err => {
		console.log(err.message)
	});
}



app.use((req, res, next) => {
	const err = req.session.error;
	const msg = req.session.success;
	delete req.session.error;
	delete req.session.success;
	res.locals.message = '';
	if (err) res.locals.message = `<p class='msg error'>${err}</p>`;
	if (msg) res.locals.message = `<p class='msg success'>${msg}</p>`;
	next();
});

app.get('/login', (req, res) => {
	res.render('login');
});

app.post('/login', (req, res) => {
	console.log('logging in')
	const { username, password } = req.body;
	console.log(req.body)
	authenticate(username, password, (err, user) => {
		if (err) {
			req.session.error = 'Authentication failed. Please try again';
			res.redirect('/login');
			console.log('login failed')
		}	else {
			req.session.regenerate(() => {
				req.session.user = user;
				req.session.sucess = 'Welcome';
				res.redirect('/');
				console.log('login success')

			});
		}
	});
});

app.get('/logout', (req, res) => {
	req.session.destroy(() => {
		res.redirect('/login')
	});
});

app.get('/', (req, res)  => {
	res.render('home', {
		documentTitle: 'My life is your vacation'
	});
});

app.use('/signup', signupRouter)
app.use('/clients', router)






app.listen(PORT, () => {
  console.log(`Server up and listening on port ${PORT}, in ${app.get('env')} mode.`);
});
