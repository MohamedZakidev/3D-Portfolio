export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const courses = [
    {
        id: 1,
        name: 'Frontend Developer Career Path',
        position: 'Scrimba Education platform',
        img: 'assets/scrimbalogo.jpg',
        review: 'Comprehensive 80-hour course designed to teach HTML, CSS, JavaScript, React. Through interactive lessons, over 200 coding challenges and hands-on projects, the course enabled me to build real-world applications, equipping them with the skills needed to launch a successful career in front-end development.',
        certification: "https://scrimba.com/certificate-cert2uNjfK9m1m8s5om3YUFBSJxrQnGhda1rwtC"
    },
    {
        id: 2,
        name: 'Responsive web Design',
        position: 'Scrimba Education platform',
        img: 'assets/scrimbalogo.jpg',
        review:
            'Hands-on course focused on mastering the art of creating websites that are fully responsive across all devices and screen sizes. It covers CSS Flexbox, and CSS Grid, teaching how to design layouts that adapt to any screen. Through interactive lessons and practical projects.',
        certification: "https://v1.scrimba.com/certificate/u6b2wvcZ/gresponsive"
    },
    {
        id: 3,
        name: 'JavaScript Deep Dive',
        position: 'Scrimba Education platform',
        img: 'assets/scrimbalogo.jpg',
        review:
            'Provides an in-depth exploration of advanced JavaScript concepts like closures, promises, async/await, and higher-order functions. It focuses on strengthening problem-solving skills while building Google keep project.',
        certification: "https://v1.scrimba.com/certificate/u6b2wvcZ/gjavascript"
    },
    {
        id: 4,
        name: 'Advanced React',
        position: 'Scrimba Education platform',
        img: 'assets/scrimbalogo.jpg',
        review:
            'Covers advanced topics such as Compound components, React router6, custom hooks, context API, React performance optimization with projects and interactive lessons to gain the skills to build high performance and scalable React applications.',
        certification: "https://v1.scrimba.com/certificate/u6b2wvcZ/greact"
    },
];

export const myProjects = [
    {
        title: 'Dev Overflow',
        desc: 'Dev-overflow is an innovative platform designed for developers to share and resolve technical challenges. It offers an intuitive experience for posting questions, providing answers, and collaborating within a vibrant developer community',
        subdesc:
            "Built as a robust full-stack application using Next.js 14, TypeScript, Clerk for authentication, MongoDB, and Zod for form validation. With server actions and real-time synchronization via webhooks, it ensures smooth and secure developer interactions",
        href: 'https://dev-overflow-mocha.vercel.app',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/devoverflow.svg',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'Next.js',
                path: '/assets/nextjs.svg',
            },
            {
                id: 2,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 3,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 4,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 5,
                name: 'MongoDB',
                path: '/assets/mongodb.png',
            },
        ],
    },
    {
        title: 'Career Guidance Network',
        desc: 'Designed and developed a professional networking platform similar to LinkedIn. The platform enables users to create detailed profiles, connect with professionals, search for job opportunities,and access career advice',
        subdesc:
            'Built as a platform using Next.js, Tailwind CSS, and Python Django for a robust back end, the Career Guidance Network is designed to connect users with tailored career advice and resources efficiently.',
        href: 'https://career-guidance-network.vercel.app/',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/cgnlogo.svg',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'Next.js',
                path: '/assets/nextjs.svg',
            },
            {
                id: 2,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 3,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 4,
                name: 'Django',
                path: '/assets/django.svg',
            },
        ],
    },
    {
        title: 'Netflix Clone',
        desc: 'Designed to showcase a modern web development stack. It allows users to browse, search, and stream content, mimicking the core functionalities of the popular streaming service. With dynamic UI components and responsive design.',
        subdesc:
            'Built using React.js with compound components design pettern, styled-components library, Firebase for authentication and database management, the Context API for state management and custom hooks.',
        href: 'https://video-stream-8ac66d.netlify.app/',
        texture: '/textures/project/project3.mp4',
        logo: '/assets/netflixlogo.png',
        logoStyle: {
            backgroundColor: 'rgba(229, 9, 20, 0.2)',
            boxShadow: '0px 0px 60px 0px rgba(229, 9, 20, 0.3)',
        },
        spotlight: '',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'Firebase',
                path: 'assets/firebase.svg',
            },
        ],
    },
    {
        title: 'Space Travel',
        desc: 'Space Travel is a visually captivating website that explores the space. Featuring a modern, responsive design, it provides users with an immersive experience to discover planets, crews, and space-themed visuals. The site prioritizes accessibility, ensuring an inclusive and engaging journey for all visitors.',
        subdesc: 'Built using HTML, CSS, and JavaScript, the Space Travel project combines clean code with responsive layouts and accessible design principles, delivering a seamless experience across devices.',
        href: 'https://clinquant-manatee-63dd3b.netlify.app/',
        texture: '/textures/project/project4.mp4',
        logo: '/assets/spacelogo.svg',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'Html',
                path: '/assets/html.svg',
            },
            {
                id: 2,
                name: 'Css',
                path: 'assets/css.svg',
            },
            {
                id: 3,
                name: 'JavaScript',
                path: '/assets/javascript.svg',
            },
        ],
    },
    {
        title: 'Instagram Clone',
        desc: 'Instagram Clone is a dynamic social media platform designed to replicate the core features of Instagram. It allows users to create posts with captions and images while exploring a visually appealing and responsive interface.',
        subdesc:
            'Built using React for the front end, Chakra UI for modern styling, Firebase for backend services, and Zustand for state management, the Instagram Clone is optimized for scalability, responsiveness, and intuitive interactions.',
        href: 'https://social-app-z.netlify.app',
        texture: '/textures/project/project5.mp4',
        logo: '/assets/instagram.svg',
        logoStyle: {
            backgroundColor: '#1C1A43',
            border: '0.2px solid #252262',
            boxShadow: '0px 0px 60px 0px #635BFF4D',
        },
        spotlight: '/assets/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 1,
                name: 'Zustand',
                path: '/assets/zustand.svg',
            },
            {
                id: 2,
                name: 'Chakra Ui',
                path: 'assets/chakraui.svg',
            },
            {
                id: 3,
                name: 'Firebase',
                path: '/assets/firebase.svg',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-22, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};
