import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ComparisonSection from '@/components/ComparisonSection';
import ManufacturingSection from '@/components/ManufacturingSection';
import PerformanceMetrics from '@/components/PerformanceMetrics';
import AdvantagesSection from '@/components/AdvantagesSection';
import ApplicationsSection from '@/components/ApplicationsSection';
import TechSpecsSection from '@/components/TechSpecsSection';
import AdvantageSummary from '@/components/AdvantageSummary';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ComparisonSection />
        <ManufacturingSection />
        <PerformanceMetrics />
        <AdvantagesSection />
        <ApplicationsSection />
        <TechSpecsSection />
        <AdvantageSummary />
      </main>
      <Footer />
    </>
  );
}
