"use client";
import Head from 'next/head';
// Component Imports
import Header from '@/components/Header';
import SectionTitle from '@/components/SectionTitle';
import TextInput from '@/components/TextInput';
import Button from '@/components/Button';
import ScoreDisplay from '@/components/ScoreDisplay';
import SuggestionCard from '@/components/SuggestionCard';

// Data (could be fetched or passed as props in a real app)
const userAvatarUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuCs0CG3QTJ9J9hLf4uYSU01B5X5x37opIxbR2eamRyU8CC129Em97wR--ChyZb1AeD8cLyTKq1bwcxN7p-4suLkAxlx3rTJKQZhHTec5pslgyxtXJjgGVRSQ8GwIPptFLDp_qCPqiYG4d1CGgi_p1vflV04EhRH6_-2UGm8977bz0bslAgOvYNUrm0HEh48mo--aTDKk_6ztAg3MSRj3WSIjL9gAdOmnK2Z28bHFDKsozlNk-OE19oVdBnXPUreSjX8y0cJ1X0_qgE";
const suggestionImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuD3CUsmN_MK4pvBUDCryCwgbgogVTriR32nRSUxyzip8Des_cDZjhtWIsb-_6YAcbLTIUtIjDanLwKcAD0tyEk3jbYwr_6frpoGhspRRJ731VbosSOgs5R1TvFVBTlpOR48ta4gz9q7-ZqQggxk4v7C0xaSi-ldLArQI450-IUN-aIS0ZWbir4t7KOgksjRs6o1h04vmA6xLNOGnYfg-2llqZTYIUOkZ8TbRBsLTOvieks2Xd3ml9fUCmL_l_d8Iv73hBrPfloqEeE";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
        <link
          rel="stylesheet"
          // as="style" // Next.js handles stylesheet loading optimally
          // @ts-ignore
          onLoad="this.rel='stylesheet'" // This might still be desired for specific font loading strategies
          href="https://fonts.googleapis.com/css2?display=swap&amp;family=Noto+Sans%3Awght%40400%3B500%3B700%3B900&amp;family=Public+Sans%3Awght%40400%3B500%3B700%3B900"
        />
        <title>Stitch Design - Shorts Analyzer</title>
        <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
        {/* TailwindCDN is not recommended for Next.js projects. Setup Tailwind CSS properly.
            Assuming Tailwind is already set up via postcss and tailwind.config.js for a Next.js project.
            If not, this script tag would be needed, but it's better to integrate Tailwind natively.
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries" async></script>
        */}
      </Head>
      <div
        className="relative flex size-full min-h-screen flex-col bg-[#1a1a1a] dark group/design-root overflow-x-hidden"
        style={{ fontFamily: '"Public Sans", "Noto Sans", sans-serif' }}
      >
        <div className="layout-container flex h-full grow flex-col">
          <Header userAvatarUrl={userAvatarUrl} />

          <main className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">

              <div className="flex flex-wrap justify-between gap-3 p-4">
                <SectionTitle
                  title="YouTube Shorts Virality Checker"
                  subtitle="Check how viral your short is and how to boost it"
                />
              </div>

              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <TextInput
                  placeholder="Paste your YouTube Short link here"
                  defaultValue=""
                  name="youtubeLink"
                />
              </div>

              <div className="flex px-4 py-3 justify-center">
                <Button text="Check Virality" onClick={() => console.log('Check Virality clicked')} />
              </div>

              <ScoreDisplay
                title="Virality Score"
                score={60}
                analysisText="Analyzing your short..."
              />

              <SuggestionCard
                imageUrl={suggestionImageUrl}
                title="Suggestions to Improve"
                description="Improve your hook in the first 3 seconds Add trending sounds or hashtags Optimize thumbnail/preview Enhance caption with keywords"
              />

            </div>
          </main>
        </div>
      </div>
    </>
  );
}
