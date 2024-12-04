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
      <DropdownMenuTrigger asChild>
        <Button variant="default"><Menu /></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 mr-8">
        <DropdownMenuGroup className="flex flex-col gap-2">
          {navigationItem.map((props, index) => (
            <DropdownMenuItem className="rounded-full" asChild>
              <Button
                key={index}
                variant='ghost'
                asChild
                className="w-30 rounded-full flex flex-row justify-center group"
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
