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

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
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
