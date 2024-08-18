"use client";

import { Link as LinkS } from "react-scroll";
import Image from "next/image";
import { ArrowDownToLine } from "lucide-react";
import { NAVIGATION_CONFIGS } from "@/lib/configs/navigations";
import { Button } from "@/components/ui/button/button";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <div className="fixed left-0 right-0 top-0 z-[999] bg-dark px-4 shadow">
      <div className="container flex h-[80px] items-center justify-between">
        <Image width={48} height={48} className="rounded-full object-cover" src="/assets/images/logo.jpg" alt="logo" />
        <div className="hidden gap-3 lg:flex">
          {NAVIGATION_CONFIGS.map((item) => (
            <LinkS
              key={item.key}
              className={styles.navItem}
              activeClass={styles.active}
              to={item.path}
              spy
              smooth
              offset={-80}
              duration={500}
            >
              <p>{item.title}</p>
            </LinkS>
          ))}
        </div>
        <a href="#" >
          <Button>
            <ArrowDownToLine className="mr-2 inline-block" size={16} strokeWidth={2} />
            Download CV
          </Button>
        </a>
      </div>
    </div>
  );
}
