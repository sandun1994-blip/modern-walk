import axios from "axios";
import { NextRequest } from "next/server";
import { z } from "zod";

export const GET = async (request: NextRequest) => {
  try {
   
    
    const categories = await axios.get((process.env.NEXT_PUBLIC_BASE_URL+ `/categories`) as string);
    console.log(categories.data.length);
    return Response.json({ data: categories.data });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return new Response(error.issues[0].message, { status: 422 });
    }

    return new Response(error.message, { status: 500 });
  }
};
