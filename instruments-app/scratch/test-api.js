
async function test() {
    try {
        const response = await fetch('http://localhost:3000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: "Test Bot",
                email: "test@example.com",
                phone: "1234567890",
                country: "India",
                state: "Gujarat",
                city: "Vadodara",
                message: "This is a programmatic test."
            })
        });

        const data = await response.json();
        console.log(JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error:', error);
    }
}

test();
