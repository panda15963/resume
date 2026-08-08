export const fadeUp = {
    initial: {
        opacity: 0,
        y: 30,
    },

    animate: {
        opacity: 1,
        y: 0,
    },

    transition: {
        duration: 0.6,
    },
};

export const fadeIn = {
    initial: {
        opacity: 0,
    },

    animate: {
        opacity: 1,
    },

    transition: {
        duration: 0.6,
    },
};

export const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};