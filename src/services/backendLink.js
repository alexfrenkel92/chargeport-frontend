let url = null;

if (process.env.NODE_ENV === 'development') {
    url = `http://localhost:8080`
} else {
    url = 'https://chargeport-backend.herokuapp.com'
}

export default url