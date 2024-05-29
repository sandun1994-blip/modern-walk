import axios from "axios";
import { NextRequest } from "next/server";
import { z } from "zod";

export const GET = async (
  request: NextRequest,
  { params }: { params: { category: string } }
) => {
  

  try {
    
    const category = await axios.get(
      (process.env.NEXT_PUBLIC_BASE_URL + "/category/" + `${decodeURIComponent(params.category)}`) as string
    );


    return Response.json({ data: category.data });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return new Response(error.issues[0].message, { status: 422 });
    }

    return new Response(error.message, { status: 500 });
  }
};
