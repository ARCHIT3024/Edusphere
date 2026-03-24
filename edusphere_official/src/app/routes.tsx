import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";

// Lazy-loaded pages for code splitting
const HomePage = lazy(() => import("./pages/HomePage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const AdvisoryCommitteePage = lazy(() => import("./pages/AdvisoryCommitteePage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const ProfessionalServicesPage = lazy(() => import("./pages/services/ProfessionalServicesPage"));
const AcademicServicesPage = lazy(() => import("./pages/services/AcademicServicesPage"));
const CoursesPage = lazy(() => import("./pages/courses/CoursesPage"));
const CourseDetailPage = lazy(() => import("./pages/courses/CourseDetailPage"));
const PrivacyPolicyPage = lazy(() => import("./pages/legal/PrivacyPolicyPage"));
const TermsPage = lazy(() => import("./pages/legal/TermsPage"));
const RefundPolicyPage = lazy(() => import("./pages/legal/RefundPolicyPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

// Minimal loading fallback
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-[#2E75B6] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

// Wrap lazy component with Suspense
function withSuspense(Component: React.LazyExoticComponent<React.ComponentType>) {
  return function SuspenseWrapper() {
    return (
      <Suspense fallback={<PageLoader />}>
        <Component />
      </Suspense>
    );
  };
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: withSuspense(HomePage) },
      { path: "register", Component: withSuspense(RegisterPage) },
      { path: "about", Component: withSuspense(AboutPage) },
      { path: "contact", Component: withSuspense(ContactPage) },
      { path: "faq", Component: withSuspense(FAQPage) },
      { path: "services/professional", Component: withSuspense(ProfessionalServicesPage) },
      { path: "services/academic", Component: withSuspense(AcademicServicesPage) },
      { path: "courses", Component: withSuspense(CoursesPage) },
      { path: "courses/:courseSlug", Component: withSuspense(CourseDetailPage) },
      { path: "privacy-policy", Component: withSuspense(PrivacyPolicyPage) },
      { path: "terms", Component: withSuspense(TermsPage) },
      { path: "refund-policy", Component: withSuspense(RefundPolicyPage) },
      { path: "advisory-committee", Component: withSuspense(AdvisoryCommitteePage) },
      { path: "*", Component: withSuspense(NotFoundPage) },
    ],
  },
]);