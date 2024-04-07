"use client"

import { HoverEffect } from "./ui/card-hover-effect";
 
export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [{
  "title": "Market Research and Analysis",
  "description": "Thorough examination and evaluation of market trends, customer behaviors, and competitive landscape to inform strategic decision-making.",
  "link": ""
},
{
  "title": "Audience Building",
  "description": "Strategizing and executing plans to grow and engage target audiences through various channels and platforms.",
  "link": ""
},
{
  "title": "90 Days MVP Development",
  "description": "Rapid development of Minimum Viable Product (MVP) within a 90-day timeframe to validate concepts, gather feedback, and iterate for future enhancements.",
  "link": ""
},
{
  "title": "UI/UX Design & Prototyping",
  "description": "Creation of intuitive user interfaces (UI) and seamless user experiences (UX), including prototyping and iterative design processes.",
  "link": ""
},
{
  "title": "Platform Technology Migration",
  "description": "Smooth transition of digital platforms, systems, or applications to updated or more advanced technology stacks or infrastructures.",
  "link": ""
},
{
  "title": "Product Marketing Setup",
  "description": "Establishment of strategies, tools, and processes for effectively promoting and positioning products in the market to drive awareness and adoption.",
  "link": ""
},
{
  "title": "Web Development",
  "description": "Creation, enhancement, and maintenance of websites utilizing various programming languages, frameworks, and content management systems.",
  "link": ""
},
{
  "title": "Search Engine Optimization",
  "description": "Optimization of online content, websites, and digital assets to improve visibility and ranking on search engine results pages (SERPs).",
  "link": ""
},
{
  "title": "Branding",
  "description": "Crafting and cultivating a distinctive identity, personality, and perception for a product, service, or organization through visual and narrative elements.",
  "link": ""
}];