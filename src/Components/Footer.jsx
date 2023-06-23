import { Typography } from "@material-tailwind/react";

export default function Footer() {
  return (
    <footer className="container mx-auto flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center  bottom-0 mt-5">
      <Typography color="white" className="font-normal">
        &copy; 2023 Muhammad Aryo Bimo
      </Typography>
    </footer>
  );
}
