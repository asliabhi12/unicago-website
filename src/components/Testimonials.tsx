"use client";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/utils/cn";
export default function CardStackDemo() {
  return (
    <div className="h-auto mt-[8rem] flex gap-10 flex-col md:flex-row md:flex-center md:flex-wrap md:justify-center xl:justify-center items-center ">
        <div className="w-1/2">
            <h2 className="md:self-center  text-3xl md:text-6xl font-bold bg-clip-text max-w-[80%] text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">What People Gossip about us!!</h2>
        </div>
       <CardStack items={CARDS} />
      
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
    {
      id: 0,
      name: "Alice Thompson",
      designation: "Founder & CEO, Ferero",
      content: (
        <p>
          "Unicago's growth has been fueled by Unicago's expertise in <Highlight>Market Research</Highlight> and <Highlight>Audience Building</Highlight>, guiding our strategic decisions and driving customer engagement."
        </p>
      ),
    },
    {
      id: 1,
      name: "John Smith",
      designation: "Co-Founder, Fantasia",
      content: (
        <p>
          "Unicago's swift <Highlight>MVP Development</Highlight> helped us validate our concept and attract early adopters, setting the foundation for Unicago's success."
        </p>
      ),
    },
    {
      id: 2,
      name: "Emily Johnson",
      designation: "CTO, Fandomania",
      content: (
        <p>
          "Unicago's platform usability and appeal were greatly enhanced by Unicago's <Highlight>UI/UX Design</Highlight> and Prototyping services, driving higher user engagement."
        </p>
      ),
    },
    {
      id: 3,
      name: "David Brown",
      designation: "Head of Marketing, Maniaka",
      content: (
        <p>
          "Thanks to Unicago's <Highlight>Product Marketing</Highlight> expertise, we've seen increased brand awareness and customer acquisition, propelling Unicago's growth trajectory."
        </p>
      ),
    },
    {
      id: 4,
      name: "Michael Garcia",
      designation: "Lead Developer, Humar",
      content: (
        <p>
          "Unicago's <Highlight>Web Development</Highlight> services have provided Unicago with a scalable and robust platform, ensuring we meet our users' evolving needs."
        </p>
      ),
    },
  ];
  

// const CARDS = [
//   {
//     id: 0,
//     name: "Manu Arora",
//     designation: "Senior Software Engineer",
//     content: (
//       <p>
//         These cards are amazing, <Highlight>I want to use them</Highlight> in my
//         project. Framer motion is a godsend ngl tbh fam 🙏
//       </p>
//     ),
//   },
//   {
//     id: 1,
//     name: "Elon Musk",
//     designation: "Senior Shitposter",
//     content: (
//       <p>
//         I dont like this Twitter thing,{" "}
//         <Highlight>deleting it right away</Highlight> because yolo. Instead, I
//         would like to call it <Highlight>X.com</Highlight> so that it can easily
//         be confused with adult sites.
//       </p>
//     ),
//   },
//   {
//     id: 2,
//     name: "Tyler Durden",
//     designation: "Manager Project Mayhem",
//     content: (
//       <p>
//         The first rule of
//         <Highlight>Fight Club</Highlight> is that you do not talk about fight
//         club. The second rule of
//         <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
//         club.
//       </p>
//     ),
//   },
// ];
