import type { Metadata } from "next";
import { HomePage } from "./components/project-pages";

export const metadata: Metadata = {
  title: "WPT Efficiency | Power transfer across barriers",
  description: "A two-track student physics study comparing inductive electromagnetic and ultrasonic acoustic power transfer across barriers.",
};

export default function Home() {
  return <HomePage />;
}
