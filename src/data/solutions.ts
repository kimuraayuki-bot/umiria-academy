export type Exam = {
  year: number;
  label: string;
  images: string[];
};

export type Department = {
  deptSlug: string;
  deptName: string;
  exams: Exam[];
};

export type TrackSolutions = {
  label: "大学編入" | "大学院";
  departments: Department[];
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
        departments: [
          {
            deptSlug: "physics",
            deptName: "物理学科",
            exams: [
              {
                year: 2024,
                label: "電磁気（例）",
                images: ["/solutions/tmu/transfer/physics/2024/q1.png"]
              }
            ]
          }
        ]
      },
      graduate: {
        label: "大学院",
        departments: [
          {
            deptSlug: "physics",
            deptName: "物理学科",
            exams: []
          }
        ]
      }
    }
  }
];
