"use client"
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [hoveredSection, setHoveredSection] = useState(null);

  const sections = [
    {
      title: "Theory",
      items: [
        "Section I. Introduction",
        "Section II. Thesis Problematic",
        "Section III. Research",
      ],
    },
    {
      title: "Practice",
      items: ["Section IV. Design Process", "Section V. Project Design"],
    },
  ];

  return (
    <>
      <Head>
        <title>Architect of Nothing</title>
        <meta
          name="description"
          content="Designing Extinction of a Diminished Dominion"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen p-8 text-black bg-white">
        <motion.h1
          className="mb-2 text-4xl font-semibold tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.25 }}
        >
          Architect of Nothing:
        </motion.h1>
        <motion.h2
          className="mb-10 text-2xl font-medium text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.25 }}
        >
          Designing Extinction of a Diminished Dominion
        </motion.h2>
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            className="w-full max-w-md mb-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 2.75 + index * 0.5 }}
          >
            <motion.div
              className="p-4 text-white bg-black cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onMouseEnter={() => setHoveredSection(section.title)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              {hoveredSection === section.title ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  {section.items.map((item, itemIndex) => (
                    <Link
                      key={item}
                      href={`/${section.title.toLowerCase()}/${item
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      <motion.p
                        className="mb-2 last:mb-0"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: itemIndex * 0.1 }}
                      >
                        {item}
                      </motion.p>
                    </Link>
                  ))}
                </motion.div>
              ) : (
                <div className="text-lg font-medium tracking-wide text-center">
                  {section.title}
                </div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </main>
    </>
  );
}
