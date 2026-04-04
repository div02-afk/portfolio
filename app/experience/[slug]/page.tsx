import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import { getExperienceBySlug, getAllExperiences } from '@/lib/experience'
import Header from '@/components/sections/header'
import Footer from '@/components/sections/footer'
import LinesBG from '@/components/ui/lines-bg'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import Link from 'next/link'

export async function generateStaticParams() {
  const experiences = getAllExperiences()
  return experiences.map((exp) => ({
    slug: exp.metadata.slug,
  }))
}

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const experience = getExperienceBySlug(slug)

  if (!experience) {
    notFound()
  }

  const { metadata, content } = experience

  return (
    <div className="flex flex-col h-full lg:max-w-4xl min-h-screen overflow-clip mx-auto">
      <ProgressiveBlur
        className="pointer-events-none z-500 fixed bottom-0 w-full h-20"
        direction="bottom"
        blurIntensity={1}
      />
      <Header />
      
      <div className="border-b border-border border-dashed pt-12 grow">
        <div className="xl:border-x border-border border-dashed p-4 md:p-8 w-full mx-auto">
          {/* Back link */}
          <Link href="/" className="inline-block mb-12 text-muted-foreground hover:text-foreground transition-colors hover:underline hover:underline-offset-4 decoration-border decoration-dashed">
            ← Back to Home
          </Link>

          {/* Intro Block */}
          <div className="space-y-4 mb-16 pb-8 border-b border-border border-dashed">
            <h1 className="text-3xl md:text-5xl tracking-tight text-foreground font-normal">
              {metadata.role}
            </h1>
            <div className="flex flex-col md:flex-row md:items-center flex-wrap gap-2 md:gap-4 text-muted-foreground">
              <span className="text-lg text-foreground">{metadata.company}</span>
              <span className="hidden md:inline text-muted-foreground/30">•</span>
              <span>{metadata.startDate} – {metadata.endDate}</span>
              
              {metadata.companyUrl && (
                <>
                  <span className="hidden md:inline text-muted-foreground/30">•</span>
                  <Link 
                    href={metadata.companyUrl}
                    target="_blank"
                    className="border-b border-dashed border-foreground/30 hover:border-foreground text-foreground transition-colors inline-flex items-center gap-1 w-fit break-words min-w-0"
                  >
                    Visit Site ↗
                  </Link>
                </>
              )}
            </div>
            
            {/* Optional tags */}
            {metadata.tags && metadata.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-4">
                {metadata.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-muted/30 text-xs text-muted-foreground border border-border border-dashed">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Markdown Content */}
          <article className="prose prose-neutral dark:prose-invert max-w-none 
            prose-headings:font-normal prose-headings:text-foreground prose-headings:tracking-tight
            prose-headings:break-words
            prose-a:border-b prose-a:border-dashed prose-a:border-foreground/30 hover:prose-a:border-foreground prose-a:no-underline prose-a:transition-colors
            prose-strong:text-foreground prose-strong:font-normal prose-strong:drop-shadow-sm
            prose-code:text-foreground prose-code:bg-muted/30 prose-code:px-1 prose-code:py-0.5 prose-code:border-border prose-code:border prose-code:border-dashed
            prose-blockquote:border-l-foreground/30 prose-blockquote:text-muted-foreground prose-blockquote:font-normal prose-blockquote:not-italic
            prose-hr:border-dashed prose-hr:border-border
            prose-li:marker:text-foreground/50
            prose-p:text-muted-foreground">
            <MDXRemote source={content} />
          </article>
        </div>
      </div>
      
      <LinesBG />
      <Footer />
    </div>
  )
}
