import { CredentialsProvider } from 'next-auth/providers
import NextAuth from 'next-auth'

const options = {
  providers: [
    CredentialsProvider({
      // Konfigurasi provider credentials
      credentials: {
        email: { label: "Email", type: "email" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Lakukan proses otentikasi dengan backend API
        const response = await fetch('http://localhost:9000/api/v1/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
        })

        const user = await response.json()

        if (response.ok && user) {
          return Promise.resolve(user)
        } else {
          return Promise.resolve(null)
        }
      }
    })
  ],
}

export default NextAuth(options)