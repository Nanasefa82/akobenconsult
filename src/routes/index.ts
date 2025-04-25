import { RouteObject } from "react-router-dom";

// Define main routes
const mainRoutes: RouteObject[] = [
  {
    path: "/",
    async lazy() {
      const { default: Component } = await import("../pages/Index");
      return { Component };
    },
  },
  {
    path: "/contact",
    async lazy() {
      const { default: Component } = await import("../pages/Contact");
      return { Component };
    },
  },
  {
    path: "/case-studies",
    async lazy() {
      const { default: Component } = await import("../pages/CaseStudies");
      return { Component };
    },
  },
  {
    path: "*",
    async lazy() {
      const { default: Component } = await import("../pages/NotFound");
      return { Component };
    },
  },
];

// Define resources routes
const resourcesRoutes: RouteObject[] = [
  {
    path: "/resources/blog",
    async lazy() {
      const { Blog } = await import("../pages/resources");
      return { Component: Blog };
    },
  },
  {
    path: "/resources/:slug",
    async lazy() {
      const { default: Component } = await import("../pages/resources/BlogPost");
      return { Component };
    },
  },
];

// Define services routes
const servicesRoutes: RouteObject[] = [
  {
    path: "/services/acquisition-strategy-capture",
    async lazy() {
      const { default: Component } = await import("../pages/services/AcquisitionStrategyCapture");
      return { Component };
    },
  },
  {
    path: "/services/proposal-bidding",
    async lazy() {
      const { default: Component } = await import("../pages/services/ProposalBidding");
      return { Component };
    },
  },
  {
    path: "/services/compliance-regulatory",
    async lazy() {
      const { default: Component } = await import("../pages/services/ComplianceRegulatory");
      return { Component };
    },
  },
  {
    path: "/services/great-content",
    async lazy() {
      const { default: Component } = await import("../pages/services/GreatContent");
      return { Component };
    },
  },
  {
    path: "/services/negotiations-advisory",
    async lazy() {
      const { default: Component } = await import("../pages/services/NegotiationsAdvisory");
      return { Component };
    },
  },
  {
    path: "/services/contract-admin-lifecycle",
    async lazy() {
      const { default: Component } = await import("../pages/services/ContractAdminLifecycle");
      return { Component };
    },
  },
];

// Define capabilities routes
const capabilitiesRoutes: RouteObject[] = [
  {
    path: "/capabilities/health-solutions",
    async lazy() {
      const { default: Component } = await import("../pages/capabilities/HealthSolutions");
      return { Component };
    },
  },
  {
    path: "/capabilities/digital-transformation",
    async lazy() {
      const { default: Component } = await import("../pages/capabilities/DigitalTransformation");
      return { Component };
    },
  },
  {
    path: "/capabilities/data-innovation",
    async lazy() {
      const { default: Component } = await import("../pages/capabilities/DataInnovation");
      return { Component };
    },
  },
  {
    path: "/capabilities/business-operations",
    async lazy() {
      const { default: Component } = await import("../pages/capabilities/BusinessOperations");
      return { Component };
    },
  },
];

// Define markets routes
const marketsRoutes: RouteObject[] = [
  {
    path: "/markets/government",
    async lazy() {
      const { default: Component } = await import("../pages/markets/Government");
      return { Component };
    },
  },
  {
    path: "/markets/healthcare",
    async lazy() {
      const { default: Component } = await import("../pages/markets/Healthcare");
      return { Component };
    },
  },
  {
    path: "/markets/finance",
    async lazy() {
      const { default: Component } = await import("../pages/markets/Finance");
      return { Component };
    },
  },
  {
    path: "/markets/enterprise",
    async lazy() {
      const { default: Component } = await import("../pages/markets/Enterprise");
      return { Component };
    },
  },
];

// Define about routes
const aboutRoutes: RouteObject[] = [
  {
    path: "/about",
    async lazy() {
      const { default: Component } = await import("../pages/about/AboutPage");
      return { Component };
    },
  },
  {
    path: "/about/mission-vision",
    async lazy() {
      const { default: Component } = await import("../pages/about/MissionVision");
      return { Component };
    },
  },
  {
    path: "/about/leadership",
    async lazy() {
      const { default: Component } = await import("../pages/about/Leadership");
      return { Component };
    },
  },
  {
    path: "/about/certifications",
    async lazy() {
      const { default: Component } = await import("../pages/about/Certifications");
      return { Component };
    },
  },
  {
    path: "/about/partners",
    async lazy() {
      const { default: Component } = await import("../pages/about/Partners");
      return { Component };
    },
  },
  {
    path: "/about/awards",
    async lazy() {
      const { default: Component } = await import("../pages/about/Awards");
      return { Component };
    },
  },
  {
    path: "/about/story",
    async lazy() {
      const { default: Component } = await import("../pages/about/Story");
      return { Component };
    },
  },
  {
    path: "/about/federal-background",
    async lazy() {
      const { default: Component } = await import("../pages/about/FederalBackground");
      return { Component };
    },
  },
];

// Define work with us routes
const workWithUsRoutes: RouteObject[] = [
  {
    path: "/work-with-us/partners",
    async lazy() {
      const { default: Component } = await import("../pages/work-with-us/Partners");
      return { Component };
    },
  },
  {
    path: "/work-with-us/career",
    async lazy() {
      const { default: Component } = await import("../pages/work-with-us/Career");
      return { Component };
    },
  },
];

// Define admin routes
const adminRoutes: RouteObject[] = [
  {
    path: "/admin/login",
    async lazy() {
      const { default: Component } = await import("../pages/admin/Login");
      return { Component };
    },
  },
  {
    path: "/admin",
    async lazy() {
      const { default: Component } = await import("../pages/admin/Dashboard");
      return { Component };
    },
  },
  {
    path: "/admin/dashboard",
    async lazy() {
      const { default: Component } = await import("../pages/admin/Dashboard");
      return { Component };
    },
  },
  {
    path: "/admin/messages",
    async lazy() {
      const { default: Component } = await import("../pages/admin/Messages");
      return { Component };
    },
  },
  {
    path: "/admin/stats",
    async lazy() {
      const { default: Component } = await import("../pages/admin/Stats");
      return { Component };
    },
  },
  {
    path: "/admin/settings",
    async lazy() {
      const { default: Component } = await import("../pages/admin/Settings");
      return { Component };
    },
  },
  {
    path: "/admin/profile",
    async lazy() {
      const { default: Component } = await import("../pages/admin/Profile");
      return { Component };
    },
  },
];

// Combine all routes
const routes: RouteObject[] = [
  ...mainRoutes,
  ...capabilitiesRoutes,
  ...marketsRoutes,
  ...aboutRoutes,
  ...workWithUsRoutes,
  ...adminRoutes,
  ...resourcesRoutes,
  ...servicesRoutes,
];

export default routes;
