"use client";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Button,
} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";


export const Logo = () => {
    return (
        <Image 
        src="/logo_ruskuhn.png" 
        alt="Russian cuisine"
        width={45}
        height={45}
        sizes="(max-width: 768px) 100vw, 45px, (max-width: 1200px) 50vw, 45px"
        priority
        />
    );
};

export default function Header({children}: {children: React.ReactNode}) {

    const navItems = [
        {href: "/", label: "About"},
        {href: "/Recipes", label: "Recipes"},
        {href: "/contact", label: "Contact"},
        {href: "/ingredients", label: "Ingredients"},
    ]
    return (
        <>
            <Navbar shouldHideOnScroll>
                <NavbarBrand>
                    <Logo />
                    <Link href="/"><p className="font-gap-1">RusKuhn</p></Link>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    {navItems.map((item) => {
                        return(
                            <NavbarItem key={item.href}>
                                <Link color="foreground" href={item.href}>
                                    {item.label}
                                </Link>
                            </NavbarItem>
                        );
                    })}
                </NavbarContent>
                <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
                </NavbarContent>
            </Navbar>
            {children}
        </>
    );
}
