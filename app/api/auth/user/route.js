export async function POST(request) {
    const {name, email} = await request.json();
    await connectMONGODB();
    await User.create({name,email});
    return NextResponse.json({message: "User Registered"}, {status:201});
    
} 