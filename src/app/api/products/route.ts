import axios from "axios";
import { NextRequest } from "next/server";
import { z } from "zod";

export const GET = async () => {
 
  try { 
    const products = await axios.get(process.env.NEXT_PUBLIC_BASE_URL as string);    
    return Response.json({ data: products.data });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return new Response(error.issues[0].message, { status: 422 });
    }

    return new Response(error.message, { status: 500 });
  }
};
