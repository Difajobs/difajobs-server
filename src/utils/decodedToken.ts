import { Request } from "express";
import jwt, { JwtPayload } from "jsonwebtoken"
import JWT_TOKEN from "../config/jwt/jwt";

export const getToken = (req: Request): JwtPayload | null => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return null;
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_TOKEN!) as JwtPayload;
    return decoded;
  } catch (error) {
    return null;
  }
};

export const loggedUser = (decodedToken: JwtPayload | null) => {
  return {
    userId: decodedToken?.id,
    email: decodedToken?.email,
    role: decodedToken?.role
  };
};