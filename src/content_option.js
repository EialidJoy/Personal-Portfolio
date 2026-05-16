const logotext = "EIALID JOY";
const meta = {
    title: "Eialid Ahmed Joy",
    description: "I’m Eialid Ahmed Joy data scientist _ Full stack devloper,currently working in Berlin",
};
const WavingHand = () => {
    return (
      <span className="animate-wave inline-block">🤚🏻</span>
    )
  }
const introdata = {
    title: "I’m Eialid Ahmed Joy",
    animated: {
        first: "Think. Code. Create.",
        second: "Learn. Build. Grow.",
        third: "Dream. Develop. Deliver.",
    },
    description: "Full-Stack Software Developer with 3+ years of expertise in Java, Spring Boot, React, Python, and microservices",
    your_img_url: "",
};

const dataabout = {
    title: "Professional Summary",
    aboutme: "Full-Stack Software Engineer with 3 years of experience building robust applications using Java, Spring Boot, React, and Python. Skilled in REST API development, system design, and SQL. \n Experienced in Docker deployment, managing financial software projects, and implementing microservices architectures. Seeking a challenging role to leverage my technical expertise and contribute to innovative solutions.",
};

const resume = {
    title: "Resume",
    aboutme: "Full-Stack Software Engineer with 3 years of experience building robust applications using Java, Spring Boot, React, and Python. Skilled in REST API development, system design, and SQL. \n Experienced in Docker deployment, managing financial software projects, and implementing microservices architectures. Seeking a challenging role to leverage my technical expertise and contribute to innovative solutions.",
};

const worktimeline = [{
        jobtitle: "Business Accelerate BD Limited",
        where: "Software Engineer",
        date: "2021 (November) - 2024 (February)",
    },
    {
        jobtitle: "Business Accelerate BD Limited",
        where: "Software Engineer Trainee",
        date: "2021 (May) - 2021 (October)",
    }
];

const skills = [{
        name: "Java",
        value: 85,
    },
    {
        name: "JavaScript",
        value: 81,
    },
    {
        name: "Python",
        value: 81,
    },
    {
        name: "Spring Boot",
        value: 84,
    },
    {
        name: "React Js",
        value: 75,
    },
    {
        name: "Django",
        value: 72,
    },
    {
        name: "Microservices",
        value: 70,
    },
];

const professionalProjects = [
    {
        slug: "remittance-management-system",
        title: "Remittance Management System",
        client: "City Bank Limited",
        company: "Business Accelerate BD Ltd",
        status: "In Production",
        duration: "Apr 2022 - Feb 2024",
        summary: "A smart remittance management system handling inward, outward, and student file remittance processes.",
        technologies: ["Java", "Spring Boot", "Oracle", "React JS", "Docker", "Jenkins", "Microservices"],
        skills: ["Java", "Spring Boot", "Spring Security", "Docker", "JavaScript", "React.js", "Jasper Reports", "Jenkins"],
        responsibilities: [
            "Collected system and user requirements.",
            "Built robust backend REST APIs using Spring Boot integrated with Oracle DB.",
            "Wrote complex queries using JPA and native SQL.",
            "Developed database functions, procedures, and triggers.",
            "Converted SOAP APIs from the core banking system into REST APIs.",
            "Created and implemented React JS front-end frameworks for dynamic transactional UIs, improving user experience and enabling quick remittance processing.",
            "Resolved UAT issues and managed Docker/Jenkins-based deployment.",
        ],
        note: "This project is deployed in a secure banking production environment; therefore, a demo link cannot be shared due to confidentiality.",
        category: "Banking & Finance",
    },
    {
        slug: "customer-360-platform",
        title: "Customer 360° Platform",
        client: "City Bank Limited",
        company: "Business Accelerate BD Ltd",
        status: "In Production",
        duration: "May 2020 - Apr 2022",
        summary: "A 360-degree customer data analytics platform with real-time banking integration for improved customer insights.",
        technologies: ["Java", "Spring Boot", "Oracle", "ElasticSearch", "React JS", "Jenkins"],
        skills: ["Java", "Jasper Reports", "Spring Boot", "Spring Security", "Oracle Database", "React.js", "Jenkins", "Elasticsearch"],
        responsibilities: [
            "Engineered scalable REST APIs using Spring Boot and Oracle.",
            "Transformed legacy SOAP APIs into modern REST services.",
            "Designed advanced SQL queries and database procedures.",
            "Integrated third-party APIs for data enrichment.",
            "Led customer data analysis initiatives to optimize business intelligence.",
            "Collaborated with stakeholders to collect and refine requirements.",
        ],
        note: "This project is deployed in a secure banking production environment; therefore, a demo link cannot be shared due to confidentiality.",
        category: "Banking & Finance",
    },
    {
        slug: "inventory-management-system",
        title: "Inventory Management System",
        client: "Green Delta Insurance",
        company: "Business Accelerate BD Ltd",
        status: "In Production",
        duration: "Jun 2022 - Nov 2022",
        summary: "A centralized inventory platform to manage stamp requisition, issuance, and letter management across multiple branches.",
        technologies: ["Java", "Spring Boot", "PostgreSQL", "React JS", "Docker", "Jenkins"],
        skills: ["Java", "JavaScript", "PostgreSQL", "Spring Boot", "Spring Security", "React.js", "Docker", "Jenkins"],
        responsibilities: [
            "Collected and analyzed business requirements.",
            "Developed backend services using Spring Boot with PostgreSQL.",
            "Created efficient database queries using JPA/native SQL.",
            "Designed and implemented database triggers, functions, and procedures.",
            "Deployed the system using Docker and Jenkins pipelines.",
        ],
        note: "This project is deployed in a secure production environment; therefore, a demo link cannot be shared due to confidentiality.",
        category: "Insurance",
    },
    {
        slug: "radar-data-viewer",
        title: "Radar Data Viewer",
        client: "MUN Computer Science Department",
        company: "Memorial University of Newfoundland",
        status: "Research",
        duration: "Jan 2025 - Dec 2025",
        summary: "A geospatial radar data viewer enabling researchers to explore multi-gigabyte radar archives through an interactive web interface, built for the Computer Science department.",
        technologies: ["Python", "Django", "PostgreSQL", "PostGIS", "React", "REST APIs", "Linux"],
        skills: ["Python", "Django", "PostgreSQL", "PostGIS", "React", "REST APIs", "scikit-learn", "pandas", "NumPy", "Linux"],
        responsibilities: [
            "Developed a geospatial radar data viewer using Python, Django, and PostgreSQL, enabling researchers to explore multi-gigabyte radar archives through a React interface.",
            "Designed REST APIs for time-series and tile-based queries, optimizing data retrieval for large-scale geospatial datasets.",
            "Contributed to a separate satellite imagery land cover classification project applying scikit-learn, pandas, and NumPy.",
            "Documented system architecture and Linux-based setup so future students could pick up and extend the work.",
        ],
        note: "The source code is in the professor's private repository. A public GitHub repo with the initial codebase is available.",
        link: "https://github.com/EialidJoy/RadarDataViewerApp",
        category: "Research",
    },
];

const personalProjects = [{
        description: "Movie Ratings using Microservices",
        summary: "A microservices-based movie information system with containerized services communicating via REST APIs.",
        icon: "movie",
        technologies: ["Java", "Spring Boot", "Docker", "Microservices"],
        link: "https://github.com/EialidJoy/Movie-Info-Dockerized",
    },
    {
        description: "Spring Authentication",
        summary: "A secure login and authentication system built with Spring Security, MVC, JDBC, and JSP.",
        icon: "auth",
        technologies: ["Java", "Spring Security", "Spring MVC", "JDBC", "JSP"],
        link: "https://github.com/EialidJoy/-Login-page-using-spring-core-spring-MVC-spring-security-JDBC-JSP-JSTL",
    }
];

const dataportfolio = [...personalProjects];

const contactConfig = {
    YOUR_EMAIL: "eialidjoy71@gmail.com",
    YOUR_FONE: "Upon Request",
    description: "Contact me sending an email",
    YOUR_SERVICE_ID: "service_l2ge19i",
    YOUR_TEMPLATE_ID: "template_apor9mg",
    YOUR_USER_ID: "6jb1BrcpnXyAtD5tz",
};

const socialprofils = {
    github: "https://github.com/EialidJoy",
    facebook: "https://www.facebook.com/eialid.joy",
    linkedin: "https://linkedin.com/in/eialid-ahmed-joy-127161130",
};
export {
    meta,
    dataabout,
    dataportfolio,
    professionalProjects,
    personalProjects,
    worktimeline,
    resume,
    skills,
    introdata,
    WavingHand,
    contactConfig,
    socialprofils,
    logotext,
};