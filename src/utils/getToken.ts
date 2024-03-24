import { Request } from "express";
import jwt, { JwtPayload } from "jsonwebtoken"

declare module 'express' {
  interface Request {
    cookies: {
      [name: string]: string;
    };
  }
}

export const getToken = (req: Request): JwtPayload | null => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return null;
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.decode(token) as JwtPayload;
    return decoded;
  } catch (error) {
    return null;
  }
};

export const loggedUser = (decodedToken: JwtPayload | null) => {
  return {
    userId: decodedToken?._id,
    userEmail: decodedToken?.username,
  };
};