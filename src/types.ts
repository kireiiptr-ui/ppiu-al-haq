export interface ScheduleItem {
  no: number;
  waktu: string;
  tempat: string;
  sesiKegiatan: string;
  topikDetail: string;
  pjNarasumber: string;
}

export interface MeetingSchedule {
  title: string;
  date: string;
  items: ScheduleItem[];
}

export interface MaterialResource {
  id: string;
  title: string;
  description: string;
  type: 'pdf' | 'video' | 'checklist' | 'guide';
  sizeOrDuration: string;
  downloadUrl: string;
}

export interface EbookChapter {
  id: string;
  title: string;
  pageNumber: number;
  content: string[];
}

export interface EbookPage {
  pageNumber: number;
  chapterTitle: string;
  arabicQuote?: string;
  arabicTranslation?: string;
  paragraphs: string[];
}

export interface ReelVideo {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  duration: string;
  views: string;
  videoUrl: string; // Simulated link or actual placeholder
}

export interface DepartureGroupPoster {
  id: string;
  groupName: string;
  image: string;
  quota: string;
  status: 'Penuh' | 'Sisa Kursi' | 'Segera Dibuka';
  departureDate: string;
}

export interface InfographicItem {
  id: string;
  title: string;
  category: 'alur' | 'checklist' | 'kesehatan' | 'panduan';
  description: string;
  points: string[];
  imageUrl?: string;
}

export interface OrganigramNode {
  role: string;
  name: string;
  subRoles?: OrganigramNode[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  age: number;
  origin: string;
  package: string;
  rating: number;
  review: string;
  videoThumbnail?: string;
}

export interface DocumentationItem {
  id: string;
  title: string;
  category: 'keberangkatan' | 'manasik' | 'pembinaan' | 'kantor' | 'tanah_suci';
  imageUrl: string;
  description: string;
}
