export const apiUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000/api"
    : "https://mern-reactjs.vercel.app/";

export const LOCAL_STORAGE_TOKEN_NAME = "Cluster0";
