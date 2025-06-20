export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Avagenc",
    "alternateName": "Avagenc AI Automation",
    "url": "https://avagenc.com",
    "logo": "https://avagenc.com/logo.png",
    "description": "Leading AI automation company providing custom AI agents and business process automation solutions for modern enterprises",
    "foundingDate": "2024",
    "slogan": "Transform Your Business with AI Automation Solutions",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-XXX-XXX-XXXX",
      "contactType": "customer service",
      "email": "contact@avagenc.com",
      "availableLanguage": ["English"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ID"
    },
    "sameAs": [
      "https://linkedin.com/company/avagenc",
      "https://twitter.com/avagenc",
      "https://facebook.com/avagenc"
    ],
    "knowsAbout": [
      "AI Automation",
      "Business Process Automation", 
      "Custom AI Agents",
      "Workflow Automation",
      "Artificial Intelligence",
      "Machine Learning",
      "Business Intelligence"
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Avagenc - AI Automation Solutions",
    "url": "https://avagenc.com",
    "description": "Transform your business with Avagenc's cutting-edge AI automation solutions. Specializing in custom AI agents, intelligent workflows, and business process automation.",
    "publisher": {
      "@type": "Organization",
      "name": "Avagenc"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://avagenc.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Automation Services",
    "description": "Custom AI agents and business automation solutions for modern enterprises",
    "provider": {
      "@type": "Organization",
      "name": "Avagenc",
      "url": "https://avagenc.com"
    },
    "serviceType": "AI Automation",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Automation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom AI Agents Development",
            "description": "Tailored AI automation solutions with custom AI agents for business workflows"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Process Automation",
            "description": "End-to-end business automation solutions to streamline operations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Workflow Intelligence",
            "description": "Intelligent automation workflows powered by AI technology"
          }
        }
      ]
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://avagenc.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "AI Automation Services",
        "item": "https://avagenc.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "About Avagenc",
        "item": "https://avagenc.com/about"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "AI Automation Blog",
        "item": "https://avagenc.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Contact",
        "item": "https://avagenc.com/contact"
      }
    ]
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Avagenc AI automation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Avagenc is a leading AI automation company that provides custom AI agents and business process automation solutions. We help businesses transform operations through intelligent automation workflows."
        }
      },
      {
        "@type": "Question",
        "name": "How does business automation work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Business automation with Avagenc involves implementing AI-powered workflows that handle repetitive tasks, reduce manual effort, and improve operational efficiency. Our custom AI agents can automate complex business processes with high accuracy."
        }
      },
      {
        "@type": "Question",
        "name": "What are custom AI agents?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Custom AI agents are tailored artificial intelligence solutions designed specifically for your business needs. They can handle customer service, data processing, workflow management, and other automated tasks while learning from your business context."
        }
      }
    ]
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Avagenc AI Automation",
    "image": "https://avagenc.com/logo.png",
    "description": "Professional AI automation and business process automation services",
    "url": "https://avagenc.com",
    "telephone": "+1-XXX-XXX-XXXX",
    "email": "contact@avagenc.com",
    "priceRange": "$$",
    "serviceArea": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Automation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Agent Development",
            "category": "AI Automation"
          }
        }
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />
    </>
  )
}