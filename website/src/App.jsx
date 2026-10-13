import { Analytics } from '@vercel/analytics/react';
import IDE from "./pages/IDE";

export default function App() {
  return (
    <>
      <IDE />
      <Analytics />
    </>
  );
}
