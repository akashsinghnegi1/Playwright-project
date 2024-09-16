import { test, expect } from '@playwright/test'

test('API GET request', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users?page=2')
    expect(response.status()).toBe(200)
    const resBody = await response.text()
    expect(resBody).toContain('Michael', 'Lawson')
    console.log(await response.json())
})

test('API POST request', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/register', {
        data: {
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        }
    })
    expect(response.status()).toBe(200)
    const resBody = await response.text()
    expect(resBody).toContain('id', 'token')
    console.log(await response.json())
})

test('API PUT request', async ({ request }) => {
    const response = await request.put('https://reqres.in/api/users/2', {
        data: {
            "name": "John Elton",
            "job": "Musician"
        }
    })
    expect(response.status()).toBe(200)
    const resBody = await response.text()
    expect(resBody).toContain('name', 'job', 'updatedAt')
    console.log(await response.json())
})

test('API DELETE request', async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/2')
    expect(response.status()).toBe(204)
})

