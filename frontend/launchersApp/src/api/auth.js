const API_URL= "http://localhost:3004/auth"

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
        return data
    } catch (error) {
        console.error(error)
    }

}

export {
    login
}