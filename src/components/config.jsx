import { Link } from "react-router-dom";

export const megaMenus = {
  Platform: [
    { heading: "AI CODE CREATION", items: [
      { title: "GitHub Copilot", desc: "Write better code with AI" ,hRef:"https://github.com/features/copilot" },
      { title: "GitHub Copilot app", desc: "Direct agents from issue to merge",hRef:"https://github.com/features/ai/github-app" },
      { title: "MCP Registry", desc: "Integrate external tools",hRef:"https://github.com/mcp"  },
    ]},
    { heading: "DEVELOPER WORKFLOWS", items: [
      { title: "Actions", desc: "Automate any workflow" ,hRef:"https://github.com/features/actions" },
      { title: "Codespaces", desc: "Instant dev environments",hRef:"https://github.com/features/codespaces"  },
      { title: "Issues", desc: "Plan and track work",hRef:"https://github.com/features/issues"  },
      { title: "Code Review", desc: "Manage code changes",hRef:"https://github.com/features/code-review"  },
      { title: "Code Quality", desc: "Enforce quality at merge" ,hRef:"https://github.com/features/code-quality" },
    ]},
    { heading: "APPLICATION SECURITY", items: [
      { title: "GitHub Advanced Security", desc: "Find and fix vulnerabilities",hRef:"https://github.com/security/advanced-security"  },
      { title: "Code security", desc: "Secure your code as you build",hRef:"https://github.com/security/advanced-security/code-security"  },
      { title: "Secret protection", desc: "Stop leaks before they start" ,hRef:"chrome-extension://fheoggkfdfchfphceeifdbepaooicaho/html/site_status_block_page.html" },
    ]},
    { heading: "EXPLORE", items: [
      { title: "Why GitHub", hRef:"https://github.com/why-github" }, { title: "Documentation",hRef:"https://docs.github.com/en"  },
      { title: "Blog" , hRef:"https://github.blog/"}, { title: "Changelog" , hRef:"https://github.blog/changelog/"}, 
      { title: "Marketplace",hRef:"https://github.com/marketplace"  },
    ]},
  ],
  Solutions: [
       { heading: "BY COMPANY SIZE", items: [
      { title: "Enterprises",hRef:"https://github.com/enterprise"  }, { title: "Small and medium teams" ,hRef:"https://github.com/team" },
      { title: "Startups" ,hRef:"https://github.com/enterprise/startups" }, { title: "Nonprofits",hRef:"https://github.com/solutions/industry/nonprofits"  },  
    ]},
       { heading: "BY USE CASE", items: [
      { title: "App Modernization",hRef:"https://github.com/mcp"  }, { title: "DevSecOps",hRef:"https://github.com/mcp"  },
      { title: "DevOps" ,hRef:"https://github.com/solutions/use-case/app-modernization" }, { title: "CI/CD",hRef:"https://github.com/solutions/use-case/devsecops"  }, { title: "View all use cases" ,hRef:"https://github.com/solutions/use-case/ci-cd" },
    ]},
       { heading: "BY INDUSTRY", items: [
      { title: "Healthcare",hRef:"https://github.com/mcp"  }, { title: "Financial services" ,hRef:"https://github.com/mcp" },
      { title: "Manufacturing",hRef:"https://github.com/mcp"  }, { title: "Government",hRef:"https://github.com/mcp"  }, { title: "View all industries" ,hRef:"https://github.com/mcp" },
    ]},
   
 
],
    
    
Resources: [
  {
    heading: "EXPLORE BY TOPIC",
    items: [
      { title: "AI", hRef: "https://github.com/mcp" },
      { title: "Software Development", hRef: "https://github.com/mcp" },
      { title: "DevOps", hRef: "https://github.com/mcp" },
      { title: "Security", hRef: "https://github.com/mcp" },
      { title: "View all topics", hRef: "https://github.com/mcp" },
    ],
  },

  {
    heading: "EXPLORE BY TYPE",
    items: [
      { title: "Customer stories", hRef: "https://github.com/mcp" },
      { title: "Events & webinars", hRef: "https://github.com/mcp" },
      { title: "Ebooks & reports", hRef: "https://github.com/mcp" },
      { title: "Business insights", hRef: "https://github.com/mcp" },
      { title: "GitHub Skills", hRef: "https://github.com/mcp" },
    ],
  },

  {
    heading: "SUPPORT & SERVICES",
    items: [
      { title: "Documentation", hRef: "https://github.com/mcp" },
      { title: "Customer support", hRef: "https://github.com/mcp" },
      { title: "Community forum", hRef: "https://github.com/mcp" },
      { title: "Trust center", hRef: "https://github.com/mcp" },
      { title: "Partners", hRef: "https://github.com/mcp" },
    ],
  },
],

"Open Source": [
  {
    heading: "COMMUNITY",
    items: [
      {
        title: "GitHub Sponsors",
        desc: "Fund open source developers",
        hRef: "https://github.com/mcp",
      },
    ],
  },

  {
    heading: "PROGRAMS",
    items: [
      { title: "Security Lab", hRef: "https://github.com/mcp" },
      { title: "Maintainer Community", hRef: "https://github.com/mcp" },
      { title: "Accelerator", hRef: "https://github.com/mcp" },
      { title: "GitHub Stars", hRef: "https://github.com/mcp" },
      { title: "Archive Program", hRef: "https://github.com/mcp" },
    ],
  },

  {
    heading: "REPOSITORIES",
    items: [
      { title: "Topics", hRef: "https://github.com/mcp" },
      { title: "Trending", hRef: "https://github.com/mcp" },
      { title: "Collections", hRef: "https://github.com/mcp" },
    ],
  },
],

Enterprise: [
  {
    heading: "ENTERPRISE SOLUTIONS",
    items: [
      {
        title: "Enterprise platform",
        desc: "AI-powered developer platform",
        hRef: "https://github.com/mcp",
      },
    ],
  },

  {
    heading: "AVAILABLE ADD-ONS",
    items: [
      {
        title: "GitHub Advanced Security",
        desc: "Enterprise-grade security features",
        hRef: "https://github.com/mcp",
      },
      {
        title: "Copilot for Business",
        desc: "Enterprise-grade AI features",
        hRef: "https://github.com/mcp",
      },
      {
        title: "Premium Support",
        desc: "Enterprise-grade 24/7 support",
        hRef: "https://github.com/mcp",
      },
    ],
  },
],

};
export  const securityFeatures = [
    {
      boldTitle: "Find and fix vulnerabilities natively.",
      descriptionText: (
        <>
          Automate code, secret, and dependency scanning with 
          <Link to="chrome-extension://fheoggkfdfchfphceeifdbepaooicaho/html/site_status_block_page.html" className="text-[#7DD3FC] border-b hover:border-b-2 ml-1">GitHub Advanced Security</Link>, 
          built directly into the workflow.
        </>
      )
    },
    {
      boldTitle: "Secure your software supply chain.",
      descriptionText: (
        <>
          Visualize and maintain the dependencies in your 
          <Link to="chrome-extension://fheoggkfdfchfphceeifdbepaooicaho/html/site_status_block_page.html" className="text-[#7DD3FC] border-b hover:border-b-2 ml-1">software supply chain</Link>.
        </>
      )
    },
    {
      boldTitle: "Control the location of your code.",
      descriptionText: (
        <>
          Enjoy SaaS agility with enhanced governance, security, and 
          <Link to="https://github.com/enterprise/data-residency" className="text-[#7DD3FC] border-b hover:border-b-2 ml-1">flexible data residency</Link>.
        </>
      )
    }
  ];

  // 2. Dataset for your Governance Administration section
  export const governanceFeatures = [
    {
      boldTitle: "Manage multiple orgs from one place.",
      descriptionText: (
        <>
          Create and assign <Link to="https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/enterprise-fundamentals/roles-in-an-enterprise" className="text-[#7DD3FC] border-b hover:border-b-2">custom roles</Link> and <Link to="https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/enterprise-fundamentals/teams-in-an-enterprise" className="text-[#7DD3FC] border-b hover:border-b-2">teams</Link> to streamline management across your enterprise.
        </>
      )
    },
    {
      boldTitle: "Define and enforce policies.",
      descriptionText: (
        <>
          <Link to="https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-governance" className="text-[#7DD3FC] border-b hover:border-b-2">Apply consistent, non-overridable rulesets</Link> across every repository in your enterprise.
        </>
      )
    },
    {
      boldTitle: "Take command of your AI agents.",
      descriptionText: (
        <>
          <Link to="https://docs.github.com/en/copilot/concepts/agents/enterprise-management" className="text-[#7DD3FC] border-b hover:border-b-2">See and control every agent and action</Link> from a single dashboard.
        </>
      )
    }
  ];

  export const faqSections = [
  {
    title: "ABOUT GITHUB ENTERPRISE",

    questions: [
      {
        question: "What is GitHub Enterprise?",
        answer: (
          <>
            <p>
              GitHub Enterprise is an enterprise-grade software development
              platform designed for the complex workflows of modern
              development.
            </p>

            <p>
              As an extensible platform solution, GitHub Enterprise enables
              organizations to{" "}
              <Link to="#" className="text-cyan-400 underline">
                seamlessly integrate additional tools and functionalities
              </Link>
              , tailoring their development environment to meet specific needs.
            </p>
          </>
        ),
      },

      {
        question: "Why should organizations use GitHub Enterprise?",
        answer: (
          <>
            <p>
              GitHub Enterprise provides organizations with the tools they
              need to manage complex development workflows.
            </p>

            <p>
              It improves collaboration, security and productivity.
            </p>
          </>
        ),
      },

      {
        question: "Who uses GitHub Enterprise?",
        answer: (
          <>
            <p>
              GitHub Enterprise is used by organizations of different sizes
              that require secure and scalable development.
            </p>
          </>
        ),
      },
    ],
  },

  {
    title: "USING GITHUB ENTERPRISE",

    questions: [
      {
        question: "What is GitHub Enterprise Cloud?",
        answer: (
          <>
            <p>
              GitHub Enterprise Cloud provides cloud-hosted development
              capabilities.
            </p>

            <Link to="#" className="text-cyan-400 underline">
              Learn more about GitHub Enterprise Cloud
            </Link>
          </>
        ),
      },

      {
        question: "What is GitHub Enterprise Server?",
        answer: (
          <>
            <p>
              GitHub Enterprise Server allows organizations to host GitHub
              within their own infrastructure.
            </p>
          </>
        ),
      },
    ],
  },

  {
    title: "CHOOSING YOUR PLAN",

    questions: [
      {
        question: "Which GitHub Enterprise plan is right for me?",
        answer: (
          <p>
            Choose the plan based on your organization's requirements.
          </p>
        ),
      },
    ],
  },

  {
    title: "GETTING STARTED WITH ENTERPRISE SOFTWARE DEVELOPMENT PLATFORMS",

    questions: [
      {
        question: "How do I get started?",
        answer: (
          <>
            <p>
              Start by evaluating your organization's development needs.
            </p>

            <Link to="#" className="text-cyan-400 underline">
              Get started with GitHub Enterprise
            </Link>
          </>
        ),
      },
    ],
  },
];