export const megaMenus = {
  Platform: [
    { heading: "AI CODE CREATION", items: [
      { title: "GitHub Copilot", desc: "Write better code with AI" },
      { title: "GitHub Copilot app", desc: "Direct agents from issue to merge" },
      { title: "MCP Registry", desc: "Integrate external tools" },
    ]},
    { heading: "DEVELOPER WORKFLOWS", items: [
      { title: "Actions", desc: "Automate any workflow" },
      { title: "Codespaces", desc: "Instant dev environments" },
      { title: "Issues", desc: "Plan and track work" },
      { title: "Code Review", desc: "Manage code changes" },
      { title: "Code Quality", desc: "Enforce quality at merge" },
    ]},
    { heading: "APPLICATION SECURITY", items: [
      { title: "GitHub Advanced Security", desc: "Find and fix vulnerabilities" },
      { title: "Code security", desc: "Secure your code as you build" },
      { title: "Secret protection", desc: "Stop leaks before they start" },
    ]},
    { heading: "EXPLORE", items: [
      { title: "Why GitHub" }, { title: "Documentation" },
      { title: "Blog" }, { title: "Changelog" }, { title: "Marketplace" },
    ]},
  ],
  Solutions: [
       { heading: "BY COMPANY SIZE", items: [
      { title: "Enterprises" }, { title: "Small and medium teams" },
      { title: "Startups" }, { title: "Nonprofits" },  
    ]},
       { heading: "BY USE CASE", items: [
      { title: "App Modernization" }, { title: "DevSecOps" },
      { title: "DevOps" }, { title: "CI/CD" }, { title: "View all use cases" },
    ]},
       { heading: "BY INDUSTRY", items: [
      { title: "Healthcare" }, { title: "Financial services" },
      { title: "Manufacturing" }, { title: "Government" }, { title: "View all industries" },
    ]},
   
 
],
    
    
Resources: [
  {
    heading: "EXPLORE BY TOPIC",
    items: [
      { title: "AI" },
      { title: "Software Development" },
      { title: "DevOps" },
      { title: "Security" },
      { title: "View all topics" }
    ]
  },
  {
    heading: "EXPLORE BY TYPE",
    items: [
      { title: "Customer stories" },
      { title: "Events & webinars" },
      { title: "Ebooks & reports" },
      { title: "Business insights" },
      { title: "GitHub Skills" }
    ]
  },
  {
    heading: "SUPPORT & SERVICES",
    items: [
      { title: "Documentation" },
      { title: "Customer support" },
      { title: "Community forum" },
      { title: "Trust center" },
      { title: "Partners" }
    ]
  },
 
 
],

  "Open Source": [
 
  {
    heading: "COMMUNITY",
    items: [
      { title: "GitHub Sponsors", desc: "Fund open source developers" }
    ]
  },
  {
    heading: "PROGRAMS",
    items: [
      { title: "Security Lab" },
      { title: "Maintainer Community" },
      { title: "Accelerator" },
      { title: "GitHub Stars" },
      { title: "Archive Program" }
    ]
  },
  {
    heading: "REPOSITORIES",
    items: [
      { title: "Topics" },
      { title: "Trending" },
      { title: "Collections" }
    ]
  }
],
 Enterprise: [
  {
    heading: "ENTERPRISE SOLUTIONS",
    items: [
      { title: "Enterprise platform", desc: "AI-powered developer platform" }
    ]
  },
  {
    heading: "AVAILABLE ADD-ONS",
    items: [
      { title: "GitHub Advanced Security", desc: "Enterprise-grade security features" },
      { title: "Copilot for Business", desc: "Enterprise-grade AI features" },
      { title: "Premium Support", desc: "Enterprise-grade 24/7 support" }
    ]
  }
]
,

};
export  const securityFeatures = [
    {
      boldTitle: "Find and fix vulnerabilities natively.",
      descriptionText: (
        <>
          Automate code, secret, and dependency scanning with 
          <a href="#" className="text-[#7DD3FC] border-b hover:border-b-2 ml-1">GitHub Advanced Security</a>, 
          built directly into the workflow.
        </>
      )
    },
    {
      boldTitle: "Secure your software supply chain.",
      descriptionText: (
        <>
          Visualize and maintain the dependencies in your 
          <a href="#" className="text-[#7DD3FC] border-b hover:border-b-2 ml-1">software supply chain</a>.
        </>
      )
    },
    {
      boldTitle: "Control the location of your code.",
      descriptionText: (
        <>
          Enjoy SaaS agility with enhanced governance, security, and 
          <a href="#" className="text-[#7DD3FC] border-b hover:border-b-2 ml-1">flexible data residency</a>.
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
          Create and assign <a href="#" className="text-[#7DD3FC] border-b hover:border-b-2">custom roles</a> and <a href="#" className="text-[#7DD3FC] border-b hover:border-b-2">teams</a> to streamline management across your enterprise.
        </>
      )
    },
    {
      boldTitle: "Define and enforce policies.",
      descriptionText: (
        <>
          <a href="#" className="text-[#7DD3FC] border-b hover:border-b-2">Apply consistent, non-overridable rulesets</a> across every repository in your enterprise.
        </>
      )
    },
    {
      boldTitle: "Take command of your AI agents.",
      descriptionText: (
        <>
          <a href="#" className="text-[#7DD3FC] border-b hover:border-b-2">See and control every agent and action</a> from a single dashboard.
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
              <a href="#" className="text-cyan-400 underline">
                seamlessly integrate additional tools and functionalities
              </a>
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

            <a href="#" className="text-cyan-400 underline">
              Learn more about GitHub Enterprise Cloud
            </a>
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

            <a href="#" className="text-cyan-400 underline">
              Get started with GitHub Enterprise
            </a>
          </>
        ),
      },
    ],
  },
];