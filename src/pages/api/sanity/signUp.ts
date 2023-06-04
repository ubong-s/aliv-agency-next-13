import { sanityWriteClient } from "@/sanity/lib/sanity.client";
import { signUpHandler } from "next-auth-sanity";

export default signUpHandler(sanityWriteClient());
