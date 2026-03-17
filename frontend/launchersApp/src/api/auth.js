const API_URL= "http://localhost:3000/api/auth"

async function login(user) {
    try {
        const res =  await fetch(API_URL+'/login', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
        const data = await res.json()
        if (data.token) localStorage.setItem('my_token', data.token)
        return data
    } catch (error) {
        console.error(error)
    }

}

export {
    login
}