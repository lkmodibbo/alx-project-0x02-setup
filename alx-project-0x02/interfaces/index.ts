export interface User {
  id: number;
  name: string;
  email?: string; 
}
export interface CardProps {
  title: string;
  content: string;
}
export interface ButtonProps {
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
  label: string;
}
export interface PostProps {
  title: string;
  content: string;
  userId: number;
}

