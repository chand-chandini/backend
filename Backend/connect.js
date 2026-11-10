// how to connect frontend and backend
// Backend exposes HTTP endpoints; frontend calls them with fetch or axios.

// with fetch we can call backend endpoints from frontend and get the data from backend and display it on frontend
// using fetch-
// frontend code(react ex)
fetch("https://api.example.com/users")
 .then(res => res.json())
 .then(data => console.log(data))
 .catch(error => console.error('Error:', error));

// with axios
axios.get('https://api.example.com/users')

// backend code(express js)
app.get('/users',(req,res)=>{
    res.json([{id:1,name:'Alice'}]); });

// simple chceklist
// 1.backend exposes endpoints(Rest/graph)
// 2.enable cors or set up a dev proxy, dev proxy means we can set up a proxy in frontend package.json file to avoid cors error
// 3.frontend uses fetch/axios/apollo/socket.io to call them
// 4.store api base url in env variables
// 5.handle auth tokens and errors
// 6.deploy both (same domain or configure cors on backend host)