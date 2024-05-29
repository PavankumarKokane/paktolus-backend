import addlead from "@/utils/addlead";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request) {
  const req = await request.json();

  const { first_name, last_name, email, mobile, inquiry, message, utm_source, utm_medium, utm_campaign } = req;

  const addResult = await addlead(first_name, last_name, email, mobile, inquiry, message, utm_source, utm_medium, utm_campaign);

  if(addResult.message){
    return new NextResponse(
      JSON.stringify({
        response: "false",
        message: "Record not added",
        addResult
      })
    );
  }else{
    return new NextResponse(
      JSON.stringify({
        response: "true",
        message: "Record added successfully",
        addResult
      })
    );
  }
}
