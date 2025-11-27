"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  // -----------------------------------------------------
  // 1. STATE SECTION (paling atas setelah import)
  // -----------------------------------------------------
  const [openKits, setOpenKits] = useState(false);
  const [openCourses, setOpenCourses] = useState(false);

  return (
    // -----------------------------------------------------
    // 2. HEADER WRAPPER
    // -----------------------------------------------------
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">
      <nav className="max-w-[1500px] mx-auto flex items-center justify-between px-8 py-4">

        {/* -----------------------------------------------------
           3. LEFT SECTION — LOGO + MAIN MENU
        ----------------------------------------------------- */}
        <div className="flex items-center gap-12">

          {/* LOGO */}
          <Link
            href="/"
            className="text-[22px] font-extrabold tracking-tight bg-gradient-to-r from-[#1E6BFF] to-[#6D5FFE] bg-clip-text text-transparent"
          >
            ICHIBOT
          </Link>

          {/* MAIN MENU (bootcamp, kits, mini courses) */}
          <div className="hidden lg:flex items-center gap-8 text-[#0F172A] font-semibold text-[15px]">

            <Link href="#bootcamp" className="hover:text-[#1E6BFF] transition">
              Bootcamp
            </Link>

            {/* -----------------------------------------------------
               4. DROPDOWN — TRAINING KITS
            ----------------------------------------------------- */}
            <div
              className="relative"
              onMouseEnter={() => setOpenKits(true)}
              onMouseLeave={() => setOpenKits(false)}
            >
              <button className="hover:text-[#1E6BFF] transition font-semibold">
                Training Kits
              </button>

              {openKits && (
                <div className="
                  absolute left-1/2 -translate-x-1/2 mt-4 w-[360px]
                  bg-white rounded-3xl border border-gray-200/70 
                  shadow-[0_8px_32px_rgba(0,0,0,0.06)] p-4 animate-fadeSlide
                ">
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <span className="text-2xl">🏭</span>
                      <Link href="/kits/industrial" className="dropdown-link-big">
                        AI-IoT Industrial Training Kit
                      </Link>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-2xl">❓❓</span>
                      <Link href="/kits/education" className="dropdown-link-big">
                        AI-IoT Education Kit
                      </Link>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-2xl">🚀</span>
                      <Link href="/kits/starter" className="dropdown-link-big">
                        AI-IoT Starter Kit
                      </Link>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-2xl">🛰️</span>
                      <Link href="/kits/smartlab" className="dropdown-link-big">
                        AI-IoT Smart Lab Package
                      </Link>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-2xl">⚙️</span>
                      <Link href="/kits/custom" className="dropdown-link-big">
                        Customized Kit
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* -----------------------------------------------------
               5. MEGA MENU — MINI COURSES (4 kolom)
            ----------------------------------------------------- */}
            <div
              className="relative"
              onMouseEnter={() => setOpenCourses(true)}
              onMouseLeave={() => setOpenCourses(false)}
            >
              <button className="hover:text-[#1E6BFF] transition font-semibold">
                Mini Courses
              </button>

              {openCourses && (
                <div className="
                  absolute left-1/2 -translate-x-1/2 mt-4 w-[900px]
                  bg-white rounded-3xl border border-gray-200/70 p-10
                  shadow-[0_8px_32px_rgba(0,0,0,0.06)] animate-fadeSlide
                ">

                  <div className="grid grid-cols-4 gap-10">

                    {/* COLUMN 1 */}
                    <div>
                      <p className="mega-title">IOT FUNDAMENTALS</p>
                      <ul className="space-y-3">
                        <li><Link className="mega-link" href="#">Intro to IoT: Bikin Perangkatmu Online dalam 30 Menit</Link></li>
                        <li><Link className="mega-link" href="#">ESP32 Quickstart</Link></li>
                        <li><Link className="mega-link" href="#">MicroPython untuk Pemula</Link></li>
                        <li><Link className="mega-link" href="#">Arduino Essentials</Link></li>
                        <li><Link className="mega-link" href="#">Sensor & Aktuator 101</Link></li>
                      </ul>
                    </div>

                    {/* COLUMN 2 */}
                    <div>
                      <p className="mega-title">AI × IOT</p>
                      <ul className="space-y-3">
                        <li><Link className="mega-link" href="#">AI Vision Dasar</Link></li>
                        <li><Link className="mega-link" href="#">TinyML Starter</Link></li>
                        <li><Link className="mega-link" href="#">ESP32-CAM Course</Link></li>
                        <li><Link className="mega-link" href="#">AI Counting</Link></li>
                        <li><Link className="mega-link" href="#">AI Anomaly Detection</Link></li>
                      </ul>
                    </div>

                    {/* COLUMN 3 */}
                    <div>
                      <p className="mega-title">DASHBOARD & DATA</p>
                      <ul className="space-y-3">
                        <li><Link className="mega-link" href="#">Node-RED Beginners</Link></li>
                        <li><Link className="mega-link" href="#">ThingsBoard Mini</Link></li>
                        <li><Link className="mega-link" href="#">MQTT 101</Link></li>
                        <li><Link className="mega-link" href="#">Google Sheets Integrasi</Link></li>
                        <li><Link className="mega-link" href="#">Database Mini Course</Link></li>
                      </ul>
                    </div>

                    {/* COLUMN 4 */}
                    <div>
                      <p className="mega-title">AUTOMATION & WORKFLOW</p>
                      <ul className="space-y-3">
                        <li><Link className="mega-link" href="#">n8n Automation</Link></li>
                        <li><Link className="mega-link" href="#">IFTTT-Style Automation</Link></li>
                        <li><Link className="mega-link" href="#">Low-Code IoT</Link></li>
                      </ul>
                    </div>

                  </div>
                </div>
              )}
            </div>
          </div>

          {/* DIVIDER */}
          <div className="hidden lg:block w-px h-6 bg-gray-300 opacity-60"></div>

          {/* ECOSYSTEM */}
          <div className="hidden lg:flex items-center gap-6">
            <p className="text-[11px] tracking-widest font-bold text-gray-400">
              ECOSYSTEM:
            </p>
            <div className="flex items-center gap-6 text-[14px] text-gray-600 font-medium">
              <Link href="#" className="hover:text-[#1E6BFF] transition">Ichibot Store</Link>
              <Link href="#" className="hover:text-[#1E6BFF] transition">Robotics & STEAM</Link>
              <Link href="#" className="hover:text-[#1E6BFF] transition">Industrial Solution</Link>
            </div>
          </div>
        </div>

        {/* -----------------------------------------------------
           6. RIGHT SECTION — BUTTONS
        ----------------------------------------------------- */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 shadow-sm hover:bg-gray-50 transition">
            ☀️
          </button>

          <button className="px-6 py-2 rounded-xl bg-gradient-to-r from-[#1E6BFF] to-[#6D5FFE] text-white font-semibold shadow-md hover:opacity-90 transition">
            Konsultasi Gratis
          </button>

          <button className="px-6 py-2 rounded-xl border border-gray-300 text-[#0F172A] font-semibold hover:bg-gray-50 transition">
            Masuk
          </button>
        </div>

        {/* -----------------------------------------------------
           7. MOBILE BURGER
        ----------------------------------------------------- */}
        <button className="lg:hidden text-3xl text-gray-800">
          ☰
        </button>

      </nav>
    </header>
  );
}
