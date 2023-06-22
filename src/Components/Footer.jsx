import { Typography } from "@material-tailwind/react";

export default function Footer() {
  return (
    <footer className="container mx-auto flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center  bottom-0 mt-5">
      <Typography color="white" className="font-normal">
        &copy; 2023 Muhammad Aryo Bimo
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 ">
        <li>
          <Typography as="a" href="#" color="blue-gray" className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-white">
            About Us
          </Typography>
        </li>
        <li>
          <Typography as="a" href="#" color="blue-gray" className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-white">
            License
          </Typography>
        </li>
        <li>
          <Typography as="a" href="#" color="blue-gray" className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-white">
            Contribute
          </Typography>
        </li>
        <li>
          <Typography as="a" href="#" color="blue-gray" className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-white">
            Contact Us
          </Typography>
        </li>
      </ul>
    </footer>
  );
}
