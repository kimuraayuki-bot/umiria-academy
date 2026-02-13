export type Exam = {
  year: number;
  label: string;
  images: string[];
};

export type TrackSolutions = {
  label: string;
  exams: Exam[];
};

export type UniSolutions = {
  uniSlug: string;
  tracks: {
    transfer: TrackSolutions;
    graduate: TrackSolutions;
  };
};

// 東京都立大学の過去問解説は削除済み
export const solutions: UniSolutions[] = [];
