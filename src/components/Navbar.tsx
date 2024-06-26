"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed md:block hidden bottom-10 right-[150px] max-w-xl mx-auto rounded-full bg-black bg-opacity-50 z-[1000]  ",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href={"/mission"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Mission"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Unicago Sense(1)"
              href="/products/unisense-1"
              src="/assets/products/unisense-1.png"
              description="An Innovative product to redefine smartphone"
            />
            <ProductItem
              title="Projekt MJ"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="AI Friend to mimic your loved ones"
            />
            <ProductItem
              title="1For1"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Blockchain based Identity management system"
            />
            <ProductItem
              title="Homie"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Developer focused Browser homepage"
            />
          </div>
        </MenuItem>
        <Link href={"/"}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/services/market-research-analysis">
              Market Research and Analysis
            </HoveredLink>
            <HoveredLink href="/services/audience-building">Audience Building</HoveredLink>
            <HoveredLink href="/services/90-day-mvp">90 Days MVP Development</HoveredLink>
            <HoveredLink href="/services/ui-ux-design-and-prototyping">
              UI/UX Design & Prototyping
            </HoveredLink>
            <HoveredLink href="/services/platform-technology-migration">
              Platform Technology Migration
            </HoveredLink>
            <HoveredLink href="/services/product-marketing-setup">Product Marketing Setup</HoveredLink>
            <HoveredLink href="/services/web-development">Web Development</HoveredLink>
            <HoveredLink href="/services/search-engine-optimization">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/services/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        </Link>
        {/* <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Team"
          ></MenuItem>
        </Link>
        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Media"
          ></MenuItem>
        </Link> */}

        <MenuItem setActive={setActive} active={active} item="Industries">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/#">Fintech</HoveredLink>
            <HoveredLink href="/#">Healthcare</HoveredLink>
            <HoveredLink href="/#">Retail</HoveredLink>
            <HoveredLink href="/#">Insurance</HoveredLink>
            <HoveredLink href="/#">Oil and Gas</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;
