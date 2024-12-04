'use client'

import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { idNavigationProps } from "@/config/navigation";
import Link from "next/link";
import { Menu } from "lucide-react";

const navigationItem = idNavigationProps;

const NavbarIdItems = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="rounded-full p-6">
        <Button variant="default"><Menu /></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 mr-8 rounded-3xl">
        <DropdownMenuGroup className="flex flex-col gap-2">
          {navigationItem.map((props, index) => (
            <DropdownMenuItem key={index} className="rounded-full" asChild>
              <Button
                variant='ghost'
                asChild
                className="rounded-full flex flex-row justify-center group"
              >
                <Link href={props.href} className='flex items-center justify-start'>
                  {props.name}
                </Link>
              </Button>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default NavbarIdItems;
