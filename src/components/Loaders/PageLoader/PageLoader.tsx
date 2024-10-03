"use client";

import { motion, Transition } from "framer-motion";

import { MotionAnimate, MotionInitial } from "@/types/motionTypes";

import classes from "./page-loader.module.css";

const initial: MotionInitial = { pathLength: 0, strokeWidth: 0, opacity: 0 };
const animate: MotionAnimate = {
  pathLength: 1,
  strokeWidth: 1,
  opacity: 1,
};
const transition: Transition = {
  ease: "linear",
  duration: 1.4,
  repeat: Infinity,
  repeatType: "reverse",
  strokeWidth: {
    duration: 1.9,
  },
};

const PageLoader = () => {
  return (
    <div className={classes.pageloader}>
      <motion.svg
        width="359.009375px"
        height="121.39999999999999px"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="70.49531250000001 14.300000000000004 359.009375 121.39999999999999"
        preserveAspectRatio="xMidYMid">
        <defs>
          <filter id="editing-neon" x="-100%" y="-100%" width="300%" height="300%">
            <feFlood floodColor="#00ff2f" result="flood" />
            <feComposite operator="in" in="flood" in2="SourceAlpha" result="color" />
            <feFlood floodColor="#00ff2f" result="flood2" />
            <feComposite operator="in" in="flood2" in2="SourceAlpha" result="color2" />
            <feMorphology operator="dilate" radius="2" in="color" result="dilate" />
            <feGaussianBlur stdDeviation="6" in="color" result="blur1" />
            <feGaussianBlur stdDeviation="2.5" in="color" result="blur2" />
            <feGaussianBlur stdDeviation="1" in="SourceAlpha" result="blur3" />
            <feGaussianBlur stdDeviation="6" in="dilate" result="blur4" />
            <feConvolveMatrix
              in="color2"
              result="conv"
              order="3,3"
              divisor="1"
              kernelMatrix="1 1 1  1 1 1  1 1 1"
            />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="blur2" />
              <feMergeNode in="blur4" />
              <feMergeNode in="blur3" />
              <feMergeNode in="blur3" />
              <feMergeNode in="blur3" />
              <feMergeNode in="blur3" />
              <feMergeNode in="conv" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g filter="url(#editing-neon)">
          <g transform="translate(125.77498811483383, 104.76000022888184)">
            <motion.path
              d="M27.84-9.86L27.84-9.86L27.84-9.86Q29.06-8.32 29.06-5.34L29.06-5.34L29.06-5.34Q29.06-2.37 26.78-0.54L26.78-0.54L26.78-0.54Q24.51 1.28 20.54 1.28L20.54 1.28L20.54 1.28Q18.24 1.28 14.66 0.77L14.66 0.77L14.66 0.77Q7.62-0.32 5.60-0.32L5.60-0.32L5.60-0.32Q3.58-0.32 2.75-0.22L2.75-0.22L2.75-0.22Q1.92-0.13 0.58 0L0.58 0L8.32-42.24L22.34-42.24L15.94-7.04L15.94-7.04Q16.77-6.91 17.54-6.91L17.54-6.91L19.14-6.91L19.14-6.91Q24.51-6.91 27.84-9.86ZM47.30 1.28L47.30 1.28L47.30 1.28Q33.22 1.28 33.22-11.97L33.22-11.97L33.22-11.97Q33.22-21.38 38.40-27.46L38.40-27.46L38.40-27.46Q43.90-33.92 53.44-33.92L53.44-33.92L53.44-33.92Q60.35-33.92 63.87-30.72L63.87-30.72L63.87-30.72Q67.39-27.52 67.39-20.80L67.39-20.80L67.39-20.80Q67.39-10.56 61.89-4.61L61.89-4.61L61.89-4.61Q56.51 1.28 47.30 1.28ZM48.96-26.56L48.96-26.56L48.96-26.56Q48.19-24.83 47.58-22.24L47.58-22.24L47.58-22.24Q46.98-19.65 46.21-15.55L46.21-15.55L46.21-15.55Q45.44-11.46 45.44-6.40L45.44-6.40L45.44-6.40Q45.44-4.74 45.98-3.65L45.98-3.65L45.98-3.65Q46.53-2.56 48-2.56L48-2.56L48-2.56Q49.47-2.56 50.40-3.26L50.40-3.26L50.40-3.26Q51.33-3.97 52.03-5.63L52.03-5.63L52.03-5.63Q53.31-8.58 54.34-14.05L54.34-14.05L54.34-14.05Q55.36-19.52 55.46-21.89L55.46-21.89L55.46-21.89Q55.55-24.26 55.55-26.02L55.55-26.02L55.55-26.02Q55.55-27.78 55.04-28.93L55.04-28.93L55.04-28.93Q54.53-30.08 53.09-30.08L53.09-30.08L53.09-30.08Q51.65-30.08 50.69-29.18L50.69-29.18L50.69-29.18Q49.73-28.29 48.96-26.56ZM73.95-1.92L73.95-1.92L73.95-1.92Q72.45-3.58 71.78-6.21L71.78-6.21L71.78-6.21Q71.10-8.83 71.10-13.12L71.10-13.12L71.10-13.12Q71.10-17.41 72.58-21.31L72.58-21.31L72.58-21.31Q74.05-25.22 76.74-28.03L76.74-28.03L76.74-28.03Q82.24-33.92 91.33-33.92L91.33-33.92L91.33-33.92Q94.59-33.92 96.96-32.83L96.96-32.83L107.90-33.92L103.17-8.96L103.17-8.96Q102.98-8.19 102.98-6.78L102.98-6.78L102.98-6.78Q102.98-5.38 103.84-4.48L103.84-4.48L103.84-4.48Q104.70-3.58 105.98-3.46L105.98-3.46L105.98-3.46Q105.34-1.28 103.01 0L103.01 0L103.01 0Q100.67 1.28 98.05 1.28L98.05 1.28L98.05 1.28Q95.42 1.28 93.66 0.29L93.66 0.29L93.66 0.29Q91.90-0.70 91.39-2.37L91.39-2.37L91.39-2.37Q90.37-0.77 88.19 0.26L88.19 0.26L88.19 0.26Q86.02 1.28 83.10 1.28L83.10 1.28L83.10 1.28Q80.19 1.28 77.82 0.51L77.82 0.51L77.82 0.51Q75.46-0.26 73.95-1.92ZM87.46-27.90L87.46-27.90L87.46-27.90Q86.72-26.75 86.08-24.80L86.08-24.80L86.08-24.80Q85.44-22.85 84.38-17.63L84.38-17.63L84.38-17.63Q83.33-12.42 83.33-8.70L83.33-8.70L83.33-8.70Q83.33-4.99 83.90-3.90L83.90-3.90L83.90-3.90Q84.48-2.82 85.50-2.82L85.50-2.82L85.50-2.82Q87.55-2.82 89.06-4.77L89.06-4.77L89.06-4.77Q90.56-6.72 91.14-10.18L91.14-10.18L94.53-28.93L94.53-28.93Q93.18-30.08 91.62-30.08L91.62-30.08L91.62-30.08Q90.05-30.08 89.12-29.57L89.12-29.57L89.12-29.57Q88.19-29.06 87.46-27.90ZM131.26-33.92L131.26-33.92L131.26-33.92Q133.57-33.92 135.36-33.41L135.36-33.41L135.36-33.41Q135.42-33.66 135.55-34.37L135.55-34.37L135.87-36.35L135.87-36.35Q136.13-37.63 136.51-39.74L136.51-39.74L137.54-44.80L150.27-46.08L143.17-8.96L143.17-8.96Q143.10-8.58 143.10-7.94L143.10-7.94L143.10-6.91L143.10-6.91Q143.10-5.50 143.81-4.45L143.81-4.45L143.81-4.45Q144.51-3.39 145.66-3.39L145.66-3.39L145.66-3.39Q144.38-0.38 140.48 0.90L140.48 0.90L140.48 0.90Q139.14 1.28 137.25 1.28L137.25 1.28L137.25 1.28Q135.36 1.28 133.63 0.29L133.63 0.29L133.63 0.29Q131.90-0.70 131.39-2.37L131.39-2.37L131.39-2.37Q130.37-0.70 128.32 0.29L128.32 0.29L128.32 0.29Q126.27 1.28 123.30 1.28L123.30 1.28L123.30 1.28Q120.32 1.28 117.86 0.51L117.86 0.51L117.86 0.51Q115.39-0.26 113.86-1.92L113.86-1.92L113.86-1.92Q111.04-5.18 111.04-12.61L111.04-12.61L111.04-12.61Q111.04-22.21 116.67-28.03L116.67-28.03L116.67-28.03Q122.30-33.92 131.26-33.92ZM130.82-30.08L130.82-30.08L130.82-30.08Q128.45-30.08 127.17-27.52L127.17-27.52L127.17-27.52Q125.89-24.96 124.58-18.62L124.58-18.62L124.58-18.62Q123.26-12.29 123.26-6.59L123.26-6.59L123.26-6.59Q123.26-2.69 125.57-2.69L125.57-2.69L125.57-2.69Q127.62-2.69 129.06-4.74L129.06-4.74L129.06-4.74Q130.50-6.78 131.07-10.18L131.07-10.18L134.53-28.93L134.53-28.93Q133.18-30.08 130.82-30.08ZM166.46-3.52L166.46-3.52L166.46-3.52Q164.48 1.28 158.14 1.28L158.14 1.28L158.14 1.28Q154.88 1.28 152.83-0.96L152.83-0.96L152.83-0.96Q151.10-2.94 151.10-4.93L151.10-4.93L151.10-4.93Q151.10-10.11 153.47-20.22L153.47-20.22L155.84-32.64L168.83-33.92L164.93-13.70L164.93-13.70Q163.84-8.96 163.84-7.30L163.84-7.30L163.84-7.30Q163.84-3.65 166.46-3.52ZM156.99-41.54L156.99-41.54L156.99-41.54Q156.99-44.03 159.07-45.38L159.07-45.38L159.07-45.38Q161.15-46.72 164.16-46.72L164.16-46.72L164.16-46.72Q167.17-46.72 168.99-45.38L168.99-45.38L168.99-45.38Q170.82-44.03 170.82-41.54L170.82-41.54L170.82-41.54Q170.82-39.04 168.80-37.76L168.80-37.76L168.80-37.76Q166.78-36.48 163.78-36.48L163.78-36.48L163.78-36.48Q160.77-36.48 158.88-37.76L158.88-37.76L158.88-37.76Q156.99-39.04 156.99-41.54ZM198.98 1.28L198.98 1.28L198.98 1.28Q191.23 1.28 191.23-4.74L191.23-4.74L191.23-4.74Q191.30-6.40 191.81-9.22L191.81-9.22L192.96-15.10L192.96-15.10Q194.69-23.42 194.69-25.28L194.69-25.28L194.69-25.28Q194.69-28.99 192.51-28.99L192.51-28.99L192.51-28.99Q188.86-28.99 186.94-19.46L186.94-19.46L183.17 0L170.30 1.28L176.96-32.70L187.46-33.92L186.43-27.65L186.43-27.65Q189.44-33.92 198.66-33.92L198.66-33.92L198.66-33.92Q203.14-33.92 205.02-32.03L205.02-32.03L205.02-32.03Q206.91-30.14 206.91-25.92L206.91-25.92L206.91-25.92Q206.91-21.95 204.86-12.67L204.86-12.67L204.86-12.67Q203.90-8.51 203.90-6.94L203.90-6.94L203.90-6.94Q203.90-5.38 204.77-4.48L204.77-4.48L204.77-4.48Q205.63-3.58 206.91-3.46L206.91-3.46L206.91-3.46Q206.27-1.28 204.06 0L204.06 0L204.06 0Q201.86 1.28 198.98 1.28ZM216.58-26.75L216.58-26.75L216.58-26.75Q218.75-29.82 222.05-31.87L222.05-31.87L222.05-31.87Q225.34-33.92 229.38-33.92L229.38-33.92L229.38-33.92Q233.41-33.92 235.33-32.64L235.33-32.64L247.87-33.92L243.52-9.34L243.52-9.34Q241.28 3.20 236.54 8.13L236.54 8.13L236.54 8.13Q232.00 12.80 223.17 12.80L223.17 12.80L223.17 12.80Q216.45 12.80 212.61 10.69L212.61 10.69L212.61 10.69Q208.77 8.58 208.77 5.06L208.77 5.06L208.77 5.06Q208.77 2.43 210.75 0.93L210.75 0.93L210.75 0.93Q212.74-0.58 215.81-0.58L215.81-0.58L215.81-0.58Q218.50-0.58 220.54 0.64L220.54 0.64L220.54 0.64Q221.76 1.28 222.34 2.18L222.34 2.18L222.34 2.18Q220.86 3.46 220.86 5.57L220.86 5.57L220.86 5.57Q220.86 8.32 223.42 8.32L223.42 8.32L223.42 8.32Q227.71 8.32 230.14-1.79L230.14-1.79L230.14-1.79Q230.85-4.54 231.42-7.30L231.42-7.30L231.42-7.30Q228.54-3.78 222.02-3.78L222.02-3.78L222.02-3.78Q217.47-3.78 214.85-5.95L214.85-5.95L214.85-5.95Q212.22-8.13 212.22-13.25L212.22-13.25L212.22-13.25Q212.22-16.45 213.31-20.06L213.31-20.06L213.31-20.06Q214.40-23.68 216.58-26.75ZM224.90-13.06L224.90-13.06L224.90-13.06Q224.90-8.70 227.14-8.70L227.14-8.70L227.14-8.70Q228.67-8.70 230.14-10.37L230.14-10.37L230.14-10.37Q231.30-11.71 231.74-13.70L231.74-13.70L235.01-30.14L235.01-30.14Q234.69-30.21 234.37-30.34L234.37-30.34L234.37-30.34Q233.73-30.59 232.90-30.59L232.90-30.59L232.90-30.59Q228.99-30.59 226.69-24.19L226.69-24.19L226.69-24.19Q224.90-19.20 224.90-13.06Z"
              fill="none"
              stroke="#e9ffd4"
              strokeWidth="1"
              initial={initial}
              animate={animate}
              transition={transition}
            />
          </g>
        </g>
      </motion.svg>
    </div>
  );
};

export default PageLoader;
