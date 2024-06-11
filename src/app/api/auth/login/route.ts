// pages/api/auth/login.ts
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const users = [
    { id: 1, username: 'saad', password: '12345' },
    { id: 2, username: 'zohaib', password: '12345' },

];

export async function POST(request: Request) {
    const { username, password } = await request.json();
    console.log('Received credentials:', { username, password });
    const user = users.find(u => u.username === username);
    if (!user) {
        return new NextResponse(JSON.stringify({ message: 'Invalid username' }), { status: 401 });
    }

    if (password !== user.password) {
        return new NextResponse(JSON.stringify({ message: 'Invalid password' }), { status: 401 });
    }

    const token = jwt.sign({ id: user.id, username: user.username }, 'your-secret-key', { expiresIn: '1h' });
    const permissions = JSON.stringify({ "/home": true, "/blog": false, "/contact": false, "/about": false });

    const response = new NextResponse(JSON.stringify({ token }), { status: 200 });
    response.cookies.set('token', token, { httpOnly: true });
    response.cookies.set('permissions', permissions, { httpOnly: true });

    return response;
}
