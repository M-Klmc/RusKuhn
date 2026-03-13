"use client";
import { siteConfig } from "@/config/site.config";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Button,
} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Logo = () => {
    return (
        <Image 
            src="/logo_ruskuhn.png" 
            alt={siteConfig.title}
            width={45}
            height={45}
            sizes="(max-width: 768px) 100vw, 45px, (max-width: 1200px) 50vw, 45px"
            priority
            className="drop-shadow-md"
        />
    );
};

export default function Header({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
        const getNavItems = () => {
                    return siteConfig.navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <NavbarItem key={item.href}>
                                    <Link
                                        href={item.href}
                                        className={`
                                            px-4 py-2 rounded-md font-medium 
                                            transition-all duration-300 
                                            ${isActive 
                                                ? "bg-[#B22222] text-[#FDF5E6] shadow-md"
                                                : "bg-[#FDF5E6] text-[#8B4513] hover:bg-[#B22222] hover:text-[#FDF5E6] hover:shadow-md"
                                            }
                                        `}
                                    >
                                        {item.label}
                                    </Link>
                                </NavbarItem>
                        );
                    })
        }


    return (
        <>
            <Navbar 
                shouldHideOnScroll
                classNames={{
                    base: "bg-[#8B4513] bg-opacity-90 backdrop-blur-sm shadow-xl",
                    wrapper: "max-w-7xl mx-auto px-4 sm:px-6",
                    brand: "gap-2",
                }}
            >
                <NavbarBrand>
                    <Logo />
                    <Link href="/">
                        <p className="font-serif text-xl font-bold text-[#582c0d] hover:text-[#B22222] transition-colors duration-300">
                            {siteConfig.title}
                        </p>
                    </Link>
                </NavbarBrand>

                <NavbarContent className="hidden sm:flex gap-6" justify="center">
                {getNavItems()}
                </NavbarContent>

                <NavbarContent justify="end" className="gap-3">
                    <NavbarItem>
                        <Link 
                            href="/login"
                            className="px-4 py-2 text-[#582c0d] hover:text-[#B22222] transition-colors duration-300"
                        >
                            Login
                        </Link>
                    </NavbarItem>

                    <NavbarItem>
                        <Button
                            as={Link}
                            href="/signup"
                            variant="flat"
                            className="
                                bg-[#B22222] text-[#FDF5E6] 
                                hover:bg-[#8B0000] hover:scale-105
                                px-6 py-2 rounded-md font-semibold
                                transition-all duration-300
                                shadow-md hover:shadow-xl
                            "
                        >
                            Sign Up
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
            {children}
        </>
    );
}