import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content', 'experience');

export interface ExperienceMetadata {
  slug: string;
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  companyUrl?: string;
  summary?: string;
  location?: string;
  tags?: string[];
  coverImage?: string;
}

export interface ExperienceEntry {
  metadata: ExperienceMetadata;
  content: string;
}

export function getAllExperiences(): ExperienceEntry[] {
  // Check if directory exists to prevent crash
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory);
  const allExperiencesData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map((fileName) => {
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      const { data, content } = matter(fileContents);
      
      const slug = data.slug || fileName.replace(/\.mdx?$/, '');

      return {
        metadata: {
          slug,
          role: data.role || '',
          company: data.company || '',
          startDate: data.startDate || '',
          endDate: data.endDate || '',
          companyUrl: data.companyUrl || undefined,
          summary: data.summary || undefined,
          location: data.location || undefined,
          tags: data.tags || undefined,
          coverImage: data.coverImage || undefined,
        },
        content,
      };
    });

  // Since we don't have explicit sort order, let's just reverse them assuming they are in a decent order
  // A more robust sorting would use a specific order field or parse dates
  // For now, let's keep the order we read, or return it ordered by some date if possible.
  // Actually, wait, let's provide a static sort mapped by filename so it matches the previous array?
  // Let's sort by some basic rule or return as is and later we check what the user wants. The user says "intented order".
  // The original array order in `userData.ts` is: Lumyst (Nov 2025 - Mar 2026), Mastercard (May 2025 - Jul 2025), LeadExpo (Jan 2025 - Mar 2025). So descending by timestamp.
  
  return allExperiencesData.sort((a, b) => {
    return new Date(b.metadata.startDate).valueOf() - new Date(a.metadata.startDate).valueOf();
  });
}

export function getExperienceBySlug(slug: string): ExperienceEntry | undefined {
  const experiences = getAllExperiences();
  return experiences.find((exp) => exp.metadata.slug === slug);
}
