export const fromBottomAnimation = ({ duration, delay }: { duration: number; delay: number }) => ({
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, ease: "easeInOut", delay },
  }
})

export const fromLeftAnimation = ({ duration, delay }: { duration: number; delay: number }) => ({
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration, ease: "easeInOut", delay },
  },
});

export const fromRightAnimation = ({ duration, delay }: { duration: number; delay: number }) => ({
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration, ease: "easeInOut", delay },
  }
});
