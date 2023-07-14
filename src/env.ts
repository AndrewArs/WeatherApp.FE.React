export interface Env {
  apiUrl: string;
}

const env: Env = {
  apiUrl: import.meta.env.VITE_API_BASE_URL as string
};

export default env;
