import localFont from "next/font/local";

export const impact = localFont({
  src: [
    {
      path: "./Impact.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-impact",
});

export const helvetica = localFont({
  src: [
    {
      path: "./Helvetica.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Helvetica-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
});
