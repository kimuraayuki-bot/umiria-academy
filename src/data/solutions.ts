export type Exam = {
  year: number;
  label: string;
  images: string[];
};

export type TrackSolutions = {
  label: "大学編入" | "大学院";
  exams: Exam[];
};

export type UniSolutions = {
  uniSlug: string;
  tracks: {
    transfer: TrackSolutions;
    graduate: TrackSolutions;
  };
};

export const solutions: UniSolutions[] = [
  {
    uniSlug: "tmu",
    tracks: {
      transfer: {
        label: "大学編入",
        exams: [
          {
            year: 2024,
            label: "物理（例）",
            images: [""]
          }
        ]
      },
      graduate: {
        label: "大学院",
        exams: []
      }
    }
  }
];
