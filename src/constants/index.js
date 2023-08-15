import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  adobe,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Graphics Designer",
    icon: mobile,
  },
  {
    title: "Digital Marketing Consultant",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Adobe Creative",
    icon: adobe,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Modern Blog App.",
    company_name: "with a user friendly content management system.",
    icon: starbucks,
    iconBg: "#383E56",
    date: "",
    points: [
      "A Blog App powered by GraphCMS: Simplify content management and supercharge your blogging experience. With GraphCMS, creating, editing, and publishing captivating blog posts has never been easier. Enjoy a seamless and intuitive platform that empowers you to focus on crafting compelling content, while GraphCMS handles the rest. Elevate your storytelling and engage your audience effortlessly with this dynamic and user-friendly Blog App",
    ],
  },
  {
    title: "Digital Marketing",
    company_name: "",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Digital Marketing",
    points: [
      "Digital Marketing Expertise: Through active involvement in the ALX software engineering digital campaign, I gained hands-on experience in digital marketing strategies. I strategized and executed targeted online campaigns that effectively reached and engaged the software engineering community. This experience allowed me to harness various tools and platforms to optimize campaign performance and analyze key metrics for continuous improvement.",
      "Graphic Design Proficiency: As a participant in the ALX campaign, I played a crucial role in crafting visually appealing and impactful digital assets. Leveraging my graphic design skills, I created eye-catching banners, social media graphics, and promotional materials that communicated the campaign's message effectively. This experience showcased my ability to blend design aesthetics with marketing objectives for maximum engagement.Data-Driven Insights: I harnessed data analytics tools to optimize content strategies, showcasing my ability to make informed decisions based on key metrics.",
      
    ],
  },

  {
    title: "Digital Marketing.",
    company_name: "",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Digital Marketing",
    points: [
      "Content Development Mastery: My involvement in the ALX software engineering digital campaign honed my content development skills. I collaborated with cross-functional teams to conceptualize, create, and curate compelling content such as blog posts, newsletters, and video scripts. This hands-on experience allowed me to produce engaging and informative content that resonated with the target audience and contributed to the campaign's success.Multichannel Coordination: ALX campaign exposed me to seamless management of diverse marketing channels, ensuring consistent brand messaging.",
      "Holistic Campaign Management: Throughout the ALX campaign, I demonstrated my proficiency in holistic campaign management. I actively participated in brainstorming sessions, contributed strategic insights, and coordinated with diverse teams to ensure seamless execution. From ideation to implementation, my multifaceted involvement underscored my ability to contribute effectively across digital marketing, graphic design, and content development domains.Engagement & Community: Through ALX, I cultivated online engagement, fostering community interaction and showcasing my audience-building skills",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Blog App",
    description:
      "Introducing our Blog App powered by GraphCMS: Simplify content management and supercharge your blogging experience. With GraphCMS, creating, editing, and publishing captivating blog posts has never been easier. Enjoy a seamless and intuitive platform that empowers you to focus on crafting compelling content, while GraphCMS handles the rest. Elevate your storytelling and engage your audience effortlessly with our dynamic and user-friendly Blog App",
    tags: [
      {
        name: "GraphCMS",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://notflix-blog-wc3e.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };