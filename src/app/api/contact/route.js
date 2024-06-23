import { Contact } from "@/models/ContactModel";
import { dbConnect } from "@/utils/dbConnect"
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
    await dbConnect();
    try {
        const data = await Contact.find();
        return NextResponse.json({ message: "success", data: data })
    } catch (err) {
        return NextResponse.json({ error: err })
    }
}


export const POST = async (req, res) => {
    await dbConnect();
    try {
        const body = await req.json()
        const newContact = await Contact.create(body);
        return NextResponse.json({ message: "success", data: newContact })
    } catch (err) {
        return NextResponse.json({ error: err })
    }
}